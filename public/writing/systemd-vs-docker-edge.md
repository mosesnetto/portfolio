# Why I Use systemd for Edge Services (Not Docker)

**TL;DR:** On resource-constrained edge devices (Raspberry Pi, CM4, industrial gateways), systemd gives you faster boots, lower memory, simpler debugging, and native hardware access — without the container tax.

---

## The Context

I deploy Python services on Raspberry Pi 5 / CM4 gateways that:
- Poll Modbus/OPC-UA from PLCs every 1–5 seconds
- Publish to AWS IoT Core via MQTT/TLS
- Run 24/7 unattended for months
- Need serial (USB/RS485), GPIO, and 4G module access
- Must survive power loss and auto-recover

---

## Comparison

| Factor | Docker | systemd (native) |
|--------|--------|------------------|
| **Boot time** | +15–30s (container init) | <2s (direct process) |
| **RAM overhead** | +50–150 MB (containerd, shim) | ~0 MB |
| **CPU overhead** | 1–3% (namespace/cgroup accounting) | 0% |
| **Serial/USB access** | `--device=/dev/ttyUSB0` per device | Native (user in `dialout`) |
| **GPIO access** | Privileged container or `--device` | Native (user in `gpio`) |
| **4G module (USB modem)** | Complex (udev rules, usb_modeswitch in container) | Native (ModemManager + systemd) |
| **Logs** | `docker logs` / `journald` (double) | `journalctl -u service -f` (single) |
| **Debugging** | `docker exec -it bash` → find PID | `systemctl status`, `journalctl`, `gdb -p PID` |
| **Updates** | Pull image, restart container | `git pull`, `systemctl restart` |
| **Secrets** | Docker secrets / env files | `.env` file + `EnvironmentFile=` |
| **Rollback** | `docker tag` + restart | `git checkout prev-tag` + restart |

---

## My systemd Unit Template

```ini
# /etc/systemd/system/modbus-aws-logger.service
[Unit]
Description=Modbus to AWS IoT Logger
Documentation=https://github.com/mosesnetto/modbus-aws-logger
After=network-online.target time-sync.target
Wants=network-online.target time-sync.target
# Start after ModemManager if using 4G
After=ModemManager.service
Wants=ModemManager.service

[Service]
Type=simple
User=pi
Group=pi
# Hardware access groups
SupplementaryGroups=dialout gpio i2c spi video audio

WorkingDirectory=/opt/modbus-aws-logger
# All config in .env (never committed)
EnvironmentFile=/opt/modbus-aws-logger/.env
# Python from venv
ExecStart=/opt/modbus-aws-logger/.venv/bin/python modbus_aws_logger.py
# Restart policy
Restart=always
RestartSec=10
StartLimitIntervalSec=60
StartLimitBurst=3
# Resource limits (optional but good practice)
MemoryMax=500M
CPUQuota=80%
# Logging
StandardOutput=journal
StandardError=journal
SyslogIdentifier=modbus-aws-logger

[Install]
WantedBy=multi-user.target
```

### Key Points

1. **`SupplementaryGroups`** — gives the process direct access to `/dev/ttyUSB*`, `/dev/gpiochip*`, `/dev/video*` without `--device` flags
2. **`EnvironmentFile`** — single source of truth for all config (PLC IPs, AWS endpoints, cert paths)
3. **`Restart=always` + `RestartSec=10`** — survives crashes, OOM, network blips
3. **`MemoryMax`/`CPUQuota`** — prevents runaway process from starving the Pi
4. **`After=network-online.target time-sync.target`** — waits for Wi-Fi/4G + NTP before starting (critical for TLS certs)

---

## Hardware Access Without Privileged Containers

### Serial (Modbus RTU, 4G AT commands)
```bash
# User in dialout group (default on Raspberry Pi OS)
usermod -aG dialout pi
# systemd: SupplementaryGroups=dialout
```

### GPIO (status LEDs, relay control)
```bash
usermod -aG gpio pi
# systemd: SupplementaryGroups=gpio
```

### 4G Modem (A7670E, Quectel, SIM7600)
```bash
# ModemManager handles USB mode switching, SIM unlock, connection
apt install modemmanager
systemctl enable --now ModemManager
# systemd: After=ModemManager.service
```

### Audio (TTS → 4G module MIC)
```bash
usermod -aG audio pi
# systemd: SupplementaryGroups=audio
```

---

## When Docker *Does* Make Sense on Edge

| Scenario | Reason |
|----------|--------|
| **Multi-tenant gateway** | Isolation between customer workloads |
| **Complex dependency graph** | Multiple services with conflicting Python/system deps |
| **CI/CD pipeline builds containers** | Consistent artifact from build to deploy |
| **Team only knows Docker** | Operational familiarity > theoretical advantage |
| **Need OTA image updates** | Balena, Torizon, AWS Greengrass v2 use containers |

---

## My Rule of Thumb

> **Single-purpose edge gateway running 1–3 Python services? → systemd.**
> **Multi-app, multi-team, or vendor-managed fleet? → Docker/Greengrass/Balena.**

---

## Migration Path (If You're on Docker Now)

1. **Extract the service** — copy your `Dockerfile` logic to a setup script:
   ```bash
   # setup.sh
   python3 -m venv .venv
   .venv/bin/pip install -r requirements.txt
   cp .env.example .env  # edit with real values
   ```

2. **Write the unit file** (see template above)

3. **Test**:
   ```bash
   sudo cp modbus-aws-logger.service /etc/systemd/system/
   sudo systemctl daemon-reload
   sudo systemctl start modbus-aws-logger
   journalctl -u modbus-aws-logger -f
   ```

4. **Remove Docker** — `apt remove docker.io containerd` (frees ~500 MB)

---

## Result on My Pi 5 Fleet

| Metric | Before (Docker) | After (systemd) |
|--------|-----------------|-----------------|
| Boot to ready | 45s | 12s |
| Idle RAM | 380 MB | 180 MB |
| CPU idle | 2.1% | 0.3% |
| Debug time (avg) | 15 min | 3 min |
| Deploy time | 3 min (pull+restart) | 30s (git pull+restart) |

---

## References

- [systemd.service(5)](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
- [systemd.resource-control(5)](https://www.freedesktop.org/software/systemd/man/systemd.resource-control.html)
- [Raspberry Pi OS groups](https://www.raspberrypi.com/documentation/computers/linux_kernel.html#gpio)
- [ModemManager](https://www.freedesktop.org/wiki/Software/ModemManager/)

---

*Deployed this pattern on 12+ Pi 5/CM4 gateways across 3 factories. Zero container-related issues in 18 months.* 

— Moses Netto, Industrial IoT Engineer