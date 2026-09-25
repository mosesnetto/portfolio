export const siteConfig = {
  name: "Moses Netto",
  title: "Embedded & Industrial IoT Engineer",
  description:
    "Moses Netto builds reliable edge-to-cloud systems for manufacturing, marine, and process-control environments.",
  accentColor: "#0f766e",
  avatar: "/portfolio/moses-avatar.jpg",
  social: {
    email: "mosesnetto@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/moses-netto-361a61314",
    github: "https://github.com/mosesnetto",
  },
  hero: {
    eyebrow: "Embedded systems · Industrial IoT · Automation",
    headline: "I connect machines to useful intelligence.",
    summary:
      "I design dependable edge-to-cloud systems that turn PLC data into real-time visibility, alerts, and decisions.",
    location: "Kochi, Kerala, India",
    availability: "Open to engineering roles and startup collaborations",
    highlights: [
      "900+ PLC tags streamed from the shop floor",
      "Raspberry Pi 5 edge deployments",
      "AWS IoT, MQTT/TLS, and Python services",
    ],
  },
  aboutMe:
    "I am an embedded and industrial IoT engineer who enjoys working at the boundary between hardware, automation, and software. My work connects PLCs and edge devices to the cloud, then turns the resulting telemetry into dashboards, alerts, and operational insight. I care about systems that are understandable, secure by default, and dependable in the real world—not just impressive in a demo.",
  skills: [
    "Embedded C/C++",
    "Python",
    "Raspberry Pi",
    "Linux",
    "OPC-UA",
    "Modbus TCP",
    "EtherNet/IP",
    "AWS IoT Core",
    "MQTT / TLS",
    "Flask",
    "PLC integration",
    "Edge computing",
    "IoT telemetry",
    "Tailscale",
    "systemd",
    "GitHub Actions",
  ],
  services: [
    {
      title: "Edge-to-cloud systems",
      description:
        "Reliable pipelines from PLCs and industrial hardware to dashboards, alerts, and cloud telemetry.",
      icon: "signal",
    },
    {
      title: "Industrial prototypes",
      description:
        "Fast, testable foundations for pilots, commissioning workflows, and startup MVPs.",
      icon: "chip",
    },
    {
      title: "Automation tooling",
      description:
        "Monitoring, reporting, remote access, and operational tools that make teams more effective.",
      icon: "gauge",
    },
  ],
  projects: [
    {
      name: "MERIDIAN Engine Intelligence",
      description:
        "Turns scanned marine-engine performance reports into audited, machine-readable measurement data with OCR, validation, analytics, triggers, and offline voice briefings.",
      link: "https://github.com/mosesnetto/performance-report-parser",
      skills: ["Python", "OCR", "Flask", "Data validation", "Analytics"],
      featured: true,
      outcome: "124-field validated extractor",
      image: "/portfolio/projects/meridian-preview.svg",
      imageAlt:
        "MERIDIAN Engine Intelligence dashboard preview showing OCR, validation, analytics, and voice briefing",
    },
    {
      name: "Modbus AWS Logger",
      description:
        "A secure Modbus TCP → AWS IoT Core telemetry bridge with MQTT/TLS publishing, reconnect handling, environment-based configuration, and safe offline demo modes.",
      link: "https://github.com/mosesnetto/modbus-aws-logger",
      skills: ["Python", "Modbus TCP", "AWS IoT", "MQTT/TLS", "Raspberry Pi"],
      featured: true,
      outcome: "PLC data → cloud telemetry",
      image: "/portfolio/projects/modbus-aws-preview.svg",
      imageAlt:
        "Modbus AWS Logger architecture preview showing PLC, Raspberry Pi edge gateway, MQTT, and AWS IoT Core",
    },
    {
      name: "MCC Machine Shift Monitor",
      description:
        "A Raspberry Pi 5 machine monitor that sends shift-aware downtime alerts through Telegram and can escalate to a real phone call through a 4G module.",
      link: "https://github.com/mosesnetto/machine-monitor",
      skills: ["Python", "Raspberry Pi 5", "Telegram", "4G / A7670E", "TTS"],
      featured: true,
      outcome: "From breakdown to escalation",
      image: "/portfolio/projects/machine-monitor-preview.svg",
      imageAlt:
        "MCC Machine Shift Monitor preview showing machine status, shift timeline, Telegram alert, and 4G escalation",
    },
    {
      name: "Career Guidance Chatbot",
      description:
        "An offline AI career-guidance assistant using intent classification, confidence gating, a web interface, and reproducible training.",
      link: "https://github.com/mosesnetto/ChatBot-For-Carrier-Guidance",
      skills: ["Python", "PyTorch", "NLTK", "Flask", "NLP"],
      featured: false,
      outcome: "Offline-first AI experience",
    },
  ],
  experience: [
    {
      company: "Hanoch Automations Pvt. Ltd.",
      title: "Industrial IoT Engineer",
      dateRange: "Mar 2026 — Present",
      location: "Kochi, Kerala",
      bullets: [
        "Build industrial IoT systems that connect factory PLCs to the cloud and turn raw machine data into actionable insight.",
        "Deploy an edge data logger on Raspberry Pi 5 reading 900+ tags from Omron NJ501 and Siemens S7 PLCs.",
        "Stream telemetry to AWS IoT Core through MQTT/TLS and support real-time dashboards, alerts, and reporting workflows.",
        "Work across OPC-UA, Modbus TCP, EtherNet/IP, remote access, and commissioning-friendly validation.",
      ],
    },
    {
      company: "Cybernetik Technologies Pvt. Ltd.",
      title: "Machine Intelligence",
      dateRange: "Aug 2025 — Mar 2026",
      location: "Pune, Maharashtra",
      bullets: [
        "Contributed to machine-intelligence work in an industrial automation environment.",
        "Built practical exposure to automation machinery, manufacturing systems, and technology-led process improvement.",
      ],
    },
    {
      company: "Unified Mentor",
      title: "Machine Learning Intern",
      dateRange: "Feb 2025 — Jul 2025",
      location: "Gurugram, Haryana",
      bullets: [
        "Developed practical machine-learning foundations through hands-on project work.",
        "Strengthened the ability to turn exploratory ideas into usable software experiments.",
      ],
    },
    {
      company: "Junomoneta Finsol Pvt. Ltd.",
      title: "Technical Research Associate",
      dateRange: "Sep 2024 — Dec 2024",
      location: "Rajkot, Gujarat",
      bullets: [
        "Supported technical research and analysis with a focus on learning, documentation, and practical problem solving.",
      ],
    },
  ],
  education: [
    {
      school: "Anna University Chennai",
      degree: "Bachelor of Engineering — Computer Science and Engineering",
      dateRange: "2020 — 2024",
      achievements: [
        "Built a foundation in software engineering, computer systems, and applied problem solving.",
        "Extended that foundation into industrial automation, embedded systems, and machine intelligence.",
      ],
    },
  ],
  certifications: [
    "PGD in Industrial Automation — Prolific Systems & Technologies",
    "AWS certifications — Learnbay",
    "Python for Cloud & DevOps — Learnbay",
    "Linux for Cloud & DevOps — Learnbay",
    "Equity Derivatives — NISM",
  ],
};

export type SiteConfig = typeof siteConfig;
