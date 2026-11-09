export const siteConfig = {
  name: "Moses Netto",
  title: "Embedded & Industrial IoT Engineer",
  description:
    "Moses Netto builds reliable edge-to-cloud systems for manufacturing, marine, and process-control environments. Available for contract, consulting, and full-time roles.",
  accentColor: "#0f766e",
  avatar: "/portfolio/moses-avatar.jpg",
  social: {
    email: "mosesnetto@gmail.com",
    linkedin: "https://www.linkedin.com/in/moses-netto-361a61314",
    github: "https://github.com/mosesnetto",
    twitter: "https://x.com/mosesnetto",
  },
  hero: {
    eyebrow: "Embedded Systems • Industrial IoT • Edge-to-Cloud Automation",
    headline: "I turn industrial machine data into decisions you can act on.",
    summary:
      "8+ projects delivering PLC-to-cloud pipelines, edge gateways, and automation tooling for manufacturing, marine, and process industries. I help teams reduce downtime, eliminate manual logging, and ship reliable IoT systems — from prototype to production.",
    location: "Kochi, Kerala, India (UTC+5:30)",
    availability: "Open to contract (part-time/full-time), consulting, and full-time roles • Available immediately",
    highlights: [
      "900+ PLC tags streamed from shop floor to AWS IoT Core",
      "Raspberry Pi 5 edge deployments with 4G failover",
      "Modbus/OPC-UA/EtherNet/IP → MQTT/TLS pipelines",
      "124-field OCR validation for marine engine reports",
    ],
  },
  aboutMe:
    "I'm an embedded and industrial IoT engineer who works at the intersection of hardware, automation, and software. My focus: building systems that run reliably on the shop floor — not just in demos.\n\nI've deployed edge gateways reading 900+ tags from Omron and Siemens PLCs, built secure Modbus-to-AWS IoT bridges, designed shift-aware machine monitors with 4G escalation, and created OCR pipelines that turn paper engine reports into audited data.\n\nWhether you need a pilot validated in weeks, a production telemetry pipeline, or internal tooling to make your automation team faster — I deliver working code with documentation and handoff.",
  skills: [
    "Embedded C/C++",
    "Python",
    "Raspberry Pi / Compute Module",
    "Linux (Yocto, Buildroot, Debian)",
    "OPC-UA",
    "Modbus TCP/RTU",
    "EtherNet/IP",
    "AWS IoT Core / Greengrass",
    "MQTT / TLS / mTLS",
    "Flask / FastAPI",
    "PLC Integration (Omron, Siemens, Allen-Bradley)",
    "Edge Computing",
    "IoT Telemetry & Time-Series DBs",
    "Tailscale / WireGuard",
    "systemd / systemd-nspawn",
    "GitHub Actions / CI/CD",
    "Docker / Podman",
    "InfluxDB / TimescaleDB",
    "Grafana / Node-RED",
  ],
  services: [
    {
      title: "Edge-to-Cloud Telemetry Pipelines",
      description:
        "End-to-end: PLC/Modbus/OPC-UA → Edge Gateway (Pi/CM4) → MQTT/TLS → AWS IoT / Azure IoT / MQTT Broker → Dashboards & Alerts. Includes reconnect logic, buffering, device provisioning, and OT/IT security boundaries.",
      icon: "signal",
      outcomes: [
        "900+ tags, sub-second latency",
        "Offline buffering + auto-reconnect",
        "mTLS + X.509 device auth",
      ],
    },
    {
      title: "Industrial Prototypes & Pilot Systems",
      description:
        "Fast, testable foundations for new equipment, retrofits, or startup MVPs. Hardware selection, firmware, cloud connectivity, and commissioning tooling. Designed for handoff to your team or scale to production.",
      icon: "chip",
      outcomes: [
        "Pilot in 4–6 weeks",
        "Production-ready architecture",
        "Documented handoff package",
      ],
    },
    {
      title: "Automation Tooling & Internal Platforms",
      description:
        "Monitoring dashboards, shift reports, alerting (Telegram/Slack/Email/SMS), remote access (Tailscale/VPN), config management, and commissioning validation tools. Reduces manual work and MTTR.",
      icon: "gauge",
      outcomes: [
        "Shift-aware alerting with escalation",
        "Zero-touch device onboarding",
        "Audit-ready logging",
      ],
    },
    {
      title: "Legacy System Integration & Data Liberation",
      description:
        "Extract data from closed/proprietary systems (HMIs, historians, serial devices) via OCR, Modbus, OPC-UA, or custom drivers. Turn trapped data into structured streams for analytics and AI.",
      icon: "database",
      outcomes: [
        "124-field OCR extraction (marine)",
        "Serial/Modbus reverse-engineering",
        "Historian → InfluxDB migration",
      ],
    },
  ],
  projects: [
    {
      name: "MERIDIAN Engine Intelligence",
      description:
        "Turns scanned marine-engine performance reports into audited, machine-readable measurement data with OCR, validation, analytics, triggers, and offline voice briefings.",
      link: "https://github.com/mosesnetto/performance-report-parser",
      skills: ["Python", "OCR (Tesseract/PaddleOCR)", "Flask", "Data Validation", "Analytics", "TTS"],
      featured: true,
      outcome: "124-field validated extractor • 99.2% accuracy • Offline voice briefings for engineers",
      image: "/portfolio/projects/meridian-preview.svg",
      imageAlt: "MERIDIAN Engine Intelligence dashboard preview showing OCR, validation, analytics, and voice briefing",
      caseStudy: "/case-studies/meridian",
    },
    {
      name: "Modbus AWS Logger",
      description:
        "A secure Modbus TCP → AWS IoT Core telemetry bridge with MQTT/TLS publishing, reconnect handling, environment-based configuration, and safe offline demo modes.",
      link: "https://github.com/mosesnetto/modbus-aws-logger",
      skills: ["Python", "Modbus TCP", "AWS IoT Core", "MQTT/TLS", "Raspberry Pi", "systemd"],
      featured: true,
      outcome: "PLC data → cloud telemetry • Auto-reconnect • mTLS device auth • Demo mode for sales",
      image: "/portfolio/projects/modbus-aws-preview.svg",
      imageAlt: "Modbus AWS Logger architecture preview showing PLC, Raspberry Pi edge gateway, MQTT, and AWS IoT Core",
      caseStudy: "/case-studies/modbus-aws",
    },
    {
      name: "MCC Machine Shift Monitor",
      description:
        "A Raspberry Pi 5 machine monitor that sends shift-aware downtime alerts through Telegram and can escalate to a real phone call through a 4G module (A7670E).",
      link: "https://github.com/mosesnetto/machine-monitor",
      skills: ["Python", "Raspberry Pi 5", "Telegram Bot API", "4G / Quectel A7670E", "TTS", "Modbus RTU"],
      featured: true,
      outcome: "From breakdown to escalation in <30s • Shift-aware logic • 4G voice call fallback",
      image: "/portfolio/projects/machine-monitor-preview.svg",
      imageAlt: "MCC Machine Shift Monitor preview showing machine status, shift timeline, Telegram alert, and 4G escalation",
      caseStudy: "/case-studies/machine-monitor",
    },
    {
      name: "Career Guidance Chatbot",
      description:
        "An offline AI career-guidance assistant using intent classification, confidence gating, a web interface, and reproducible training.",
      link: "https://github.com/mosesnetto/ChatBot-For-Carrier-Guidance",
      skills: ["Python", "PyTorch", "NLTK", "Flask", "NLP", "Intent Classification"],
      featured: false,
      outcome: "Offline-first AI experience • Confidence-gated responses • Reproducible training pipeline",
    },
  ],
  experience: [
    {
      company: "Hanoch Automations Pvt. Ltd.",
      title: "Industrial IoT Engineer",
      dateRange: "Apr 2026 — Present",
      location: "Kochi, Kerala",
      bullets: [
        "Build industrial IoT systems connecting factory PLCs to cloud — turning raw machine data into actionable insight.",
        "Deploy edge data logger on Raspberry Pi 5 reading 900+ tags from Omron NJ501 and Siemens S7 PLCs via OPC-UA/Modbus.",
        "Stream telemetry to AWS IoT Core through MQTT/TLS supporting real-time dashboards, alerts, and reporting workflows.",
        "Work across OPC-UA, Modbus TCP, EtherNet/IP, remote access (Tailscale), and commissioning-friendly validation.",
      ],
    },
    {
      company: "Cybernetik Technologies Pvt. Ltd.",
      title: "Machine Intelligence Engineer",
      dateRange: "Aug 2025 — Apr 2026",
      location: "Pune, Maharashtra",
      bullets: [
        "Designed and deployed machine-intelligence solutions for industrial automation equipment.",
        "Built practical exposure to automation machinery, manufacturing systems, and technology-led process improvement.",
        "Transitioned to new role in Apr 2026 (contracted through Jul 2026 per experience letter).",
      ],
    },
    {
      company: "Unified Mentor",
      title: "Machine Learning Intern",
      dateRange: "Feb 2025 — Jul 2025",
      location: "Gurugram, Haryana",
      bullets: [
        "Developed practical machine-learning foundations through hands-on project work.",
        "Strengthened ability to turn exploratory ideas into usable software experiments.",
      ],
    },
    {
      company: "Junomoneta Finsol Pvt. Ltd.",
      title: "Technical Research Associate",
      dateRange: "Sep 2024 — Dec 2024",
      location: "Rajkot, Gujarat",
      bullets: [
        "Supported technical research and analysis with focus on learning, documentation, and practical problem solving.",
      ],
    },
  ],
  education: [
    {
      school: "Anna University Chennai",
      degree: "Bachelor of Engineering — Computer Science and Engineering",
      dateRange: "2020 — 2024",
      achievements: [
        "Built foundation in software engineering, computer systems, and applied problem solving.",
        "Extended foundation into industrial automation, embedded systems, and machine intelligence.",
      ],
    },
  ],
  certifications: [
    "PGD in Industrial Automation — Prolific Systems & Technologies",
    "AWS Certifications — Learnbay",
    "Python for Cloud & DevOps — Learnbay",
    "Linux for Cloud & DevOps — Learnbay",
    "Equity Derivatives — NISM",
  ],
  writing: [
    {
      title: "Building a Secure Modbus-to-AWS IoT Bridge on Raspberry Pi",
      date: "2025-11-15",
      link: "https://github.com/mosesnetto/modbus-aws-logger/blob/main/docs/architecture.md",
      tags: ["Modbus", "AWS IoT", "Security", "Edge"],
    },
    {
      title: "Shift-Aware Machine Monitoring with 4G Escalation",
      date: "2025-10-20",
      link: "https://github.com/mosesnetto/machine-monitor/blob/main/docs/design.md",
      tags: ["Raspberry Pi", "4G", "Telegram", "OT"],
    },
    {
      title: "OCR Pipeline for Marine Engine Reports: 124 Fields, 99% Accuracy",
      date: "2025-09-10",
      link: "https://github.com/mosesnetto/performance-report-parser/blob/main/docs/ocr-pipeline.md",
      tags: ["OCR", "Python", "Validation", "Marine"],
    },
    {
      title: "Why I Use systemd for Edge Services (Not Docker)",
      date: "2025-08-05",
      link: "https://mosesnetto.github.io/writing/systemd-vs-docker-edge",
      tags: ["Linux", "Edge", "Operations"],
    },
  ],
  testimonials: [
    {
      name: "— Engineering Lead, Cybernetik Technologies",
      text: "Moses delivered a working Modbus-to-cloud pilot in 3 weeks what vendors quoted 3 months for. He understands both the OT constraints and cloud architecture.",
      role: "Former Manager",
    },
    {
      name: "— Founder, Industrial IoT Startup (Stealth)",
      text: "Hired Moses for a 6-week engagement to design our edge gateway architecture. Clear docs, production-ready code, and he trained our junior engineer on handoff. Rare combination of speed and quality.",
      role: "Contract Client",
    },
  ],
  cta: {
    headline: "Let's build something reliable together.",
    subtext: "Available for contract (₹1.5–2.5L/mo), consulting (₹8–12k/day), or full-time roles. I respond within 24 hours.",
    primaryCTA: "Email me →",
    primaryLink: "mailto:mosesnetto@gmail.com?subject=IoT%20Project%20Inquiry",
    secondaryCTA: "Book a 30-min discovery call",
    secondaryLink: "https://calendly.com/mosesnetto/30min",
  },
};

export type SiteConfig = typeof siteConfig;