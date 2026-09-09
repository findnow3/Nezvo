export const HERO_CHAPTERS = [
  {
    id: 0,
    category: "Cloud & DevOps",
    badge: "HYPER-SCALABLE ARCHITECTURE",
    title: "Architecting Next-Gen Enterprise Platforms",
    subtitle: "Nezvo Infotech engineers resilient software, high-throughput cloud infrastructure, and autonomous AI systems built for planetary scale.",
    metrics: [
      { label: "Proven Experience", value: "10+ Yrs" },
      { label: "Shipped Platforms", value: "120+" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    ctaText: "Explore Services",
    ctaTarget: "#services"
  },
  {
    id: 1,
    category: "AI & Neural Systems",
    badge: "COGNITIVE INTELLIGENCE",
    title: "Enterprise AI & Autonomous Machine Learning",
    subtitle: "Custom LLM fine-tuning, production RAG pipelines, and agentic workflows that turn proprietary enterprise data into competitive advantage.",
    metrics: [
      { label: "Query Latency", value: "< 12ms" },
      { label: "Precision Rate", value: "99.4%" },
      { label: "AI Models Deployed", value: "45+" }
    ],
    ctaText: "Explore AI Solutions",
    ctaTarget: "#services"
  },
  {
    id: 2,
    category: "High-Speed Systems",
    badge: "GLOBAL DISTRIBUTED SCALE",
    title: "Mission-Critical Systems Across 18+ Countries",
    subtitle: "From ultra-low latency FinTech backbones to HIPAA-compliant medical platforms, we power over $2.5B+ in annual transaction volume.",
    metrics: [
      { label: "Global Footprint", value: "18+ Nations" },
      { label: "Annual Volume", value: "$2.5B+" },
      { label: "Client Retention", value: "99.8%" }
    ],
    ctaText: "View Track Record",
    ctaTarget: "#about"
  },
  {
    id: 3,
    category: "Security & Governance",
    badge: "ZERO-TRUST DEFENSE",
    title: "Military-Grade Security & SOC-2 Compliance",
    subtitle: "Battle-tested engineering squads certified in ISO 27001 and SOC-2 Type II with zero historical breaches across a decade of delivery.",
    metrics: [
      { label: "Elite Architects", value: "150+" },
      { label: "Launch Speed", value: "40% Faster" },
      { label: "Security Breaches", value: "0" }
    ],
    ctaText: "Consult an Architect",
    ctaTarget: "#contact"
  }
];

export const SERVICES = [
  {
    id: "enterprise-software",
    number: "01",
    title: "Custom Software & Distributed Systems",
    tagline: "High-concurrency backends engineered for petabyte-scale throughput.",
    icon: "Layers",
    color: "from-cyan-500/10 to-blue-600/10",
    accentColor: "#0284c7",
    shortDesc: "Scalable microservices, event-driven streaming pipelines, and monolith modernization built with Go, Rust, and Kafka.",
    fullOverview: "We build mission-critical distributed systems from the ground up. Whether modernizing legacy core mainframes or architecting high-throughput event-driven microservices, our senior architects craft clean, test-driven systems that scale effortlessly under millions of concurrent requests.",
    capabilities: [
      "Event-Driven Microservices with Kafka & RabbitMQ",
      "Legacy Monolith Modernization (Strangler Fig)",
      "High-Performance gRPC, GraphQL & REST APIs",
      "Multi-Tenant Cloud SaaS Platform Architecture",
      "Domain-Driven Design (DDD) & ACID Transaction Guarantees"
    ],
    techStack: ["Go", "Rust", "Node.js/TypeScript", "Java Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker"],
    workflow: [
      { step: "01", title: "Discovery", desc: "Domain profiling and architectural trade-off analysis." },
      { step: "02", title: "Contract Design", desc: "API contracts, data schemas, and security boundaries." },
      { step: "03", title: "Sprint Delivery", desc: "Modular code with 90%+ automated test coverage." },
      { step: "04", title: "Stress Testing", desc: "Chaos engineering and sub-millisecond query profiling." },
      { step: "05", title: "Zero-Downtime Launch", desc: "Progressive canary deployments with automated rollback." }
    ],
    deliverables: [
      "Production-ready source code with CI/CD automation",
      "Architectural Decision Records (ADR)",
      "Automated test suites & load test reports",
      "Operational runbooks & developer guidelines"
    ],
    metrics: "45% reduction in compute cost • 99.99% system availability"
  },
  {
    id: "cloud-devops",
    number: "02",
    title: "Cloud Infrastructure & GitOps Automation",
    tagline: "Automated, self-healing multi-cloud infrastructure with zero downtime.",
    icon: "Cloud",
    color: "from-blue-500/10 to-indigo-600/10",
    accentColor: "#2563eb",
    shortDesc: "Production Kubernetes orchestration, Terraform Infrastructure as Code, and automated multi-cloud disaster recovery.",
    fullOverview: "We transform manual infrastructure into automated, self-healing cloud ecosystems. Spanning AWS, GCP, and Azure, our certified architects implement GitOps continuous delivery, immutable clusters, and FinOps cost controls to maximize reliability while slashing operational waste.",
    capabilities: [
      "Production Kubernetes (EKS, GKE, AKS) & Service Mesh (Istio)",
      "Infrastructure as Code (IaC) via Terraform & OpenTofu",
      "GitOps Continuous Delivery with ArgoCD & Flux",
      "Active-Active Multi-Region High Availability & Failover",
      "FinOps Cloud Cost Optimization & Governance"
    ],
    techStack: ["AWS", "Google Cloud", "Microsoft Azure", "Kubernetes", "Terraform", "ArgoCD", "Prometheus", "Grafana"],
    workflow: [
      { step: "01", title: "Cloud Audit", desc: "Security posture scan and cost leakage audit." },
      { step: "02", title: "IaC Blueprinting", desc: "Modular Terraform templates adhering to CIS benchmarks." },
      { step: "03", title: "Cluster Hardening", desc: "Autoscaling Kubernetes clusters with least-privilege IAM." },
      { step: "04", title: "GitOps Rollout", desc: "Automated declarative delivery linked to git commits." },
      { step: "05", title: "Observability", desc: "Distributed tracing, telemetry alerts, and log aggregators." }
    ],
    deliverables: [
      "Version-controlled Terraform repository",
      "Hardened Kubernetes cluster with auto-scaling",
      "Automated GitOps release pipelines",
      "Real-time cloud cost & telemetry dashboard"
    ],
    metrics: "3.5x faster release frequency • 32% average cloud cost savings"
  },
  {
    id: "ai-machine-learning",
    number: "03",
    title: "Enterprise AI & Applied Machine Learning",
    tagline: "Domain-specific AI engines that understand your proprietary data.",
    icon: "Cpu",
    color: "from-purple-500/10 to-pink-600/10",
    accentColor: "#7c3aed",
    shortDesc: "Custom LLM fine-tuning, production RAG search engines, autonomous agents, and sub-100ms GPU inference clusters.",
    fullOverview: "We build custom enterprise intelligence systems that deeply process proprietary business data with complete data sovereignty. We design high-throughput inference endpoints, enterprise RAG search engines, and autonomous agent workflows that automate critical business decisions.",
    capabilities: [
      "Custom LLM Fine-Tuning & Parameter-Efficient LoRA Adaptation",
      "Production Enterprise RAG with Hybrid Vector Search",
      "Autonomous Multi-Agent Systems & Tool Calling",
      "Predictive Analytics & High-Throughput Inference Pipelines",
      "MLOps Model Governance, Drift Monitoring & Safety Guardrails"
    ],
    techStack: ["PyTorch", "Hugging Face", "LangChain/LlamaIndex", "vLLM", "Pinecone/Milvus", "Qdrant", "Python", "FastAPI"],
    workflow: [
      { step: "01", title: "Feasibility", desc: "Data quality audit and business metric benchmarks." },
      { step: "02", title: "Pipeline Design", desc: "Vector indexing, embedding models, and token efficiency." },
      { step: "03", title: "Model Training", desc: "Fine-tuning weights, prompt chains, and agent integration." },
      { step: "04", title: "Guardrails", desc: "Hallucination mitigation, red-teaming, and latency profiling." },
      { step: "05", title: "Production Serving", desc: "Sub-100ms GPU inference cluster deployment." }
    ],
    deliverables: [
      "Containerized AI microservice API with full documentation",
      "Custom vector retrieval and embedding ETL pipelines",
      "Safety guardrail configs mitigating hallucinations",
      "Model accuracy and inference benchmark validation report"
    ],
    metrics: "94.2% factual precision • 5x faster inference response"
  },
  {
    id: "cybersecurity-compliance",
    number: "04",
    title: "Cybersecurity, Zero-Trust & SOC-2 Readiness",
    tagline: "Uncompromising cryptographic defense and audit-ready governance.",
    icon: "ShieldCheck",
    color: "from-emerald-500/10 to-teal-600/10",
    accentColor: "#059669",
    shortDesc: "End-to-end zero-trust architecture, automated penetration testing, secrets governance, and SOC-2/ISO 27001 readiness.",
    fullOverview: "Nezvo Infotech embeds Zero-Trust principles into every tier of your digital ecosystem. From cryptographic secrets management and automated software supply chain security to SOC-2 Type II, ISO 27001, and HIPAA compliance readiness, we protect your organization against modern attack vectors.",
    capabilities: [
      "Zero-Trust Network Access (ZTNA) & Identity Governance",
      "Automated CI/CD Vulnerability Scanning (SAST/DAST)",
      "Centralized Secrets & Encryption with HashiCorp Vault",
      "SOC-2 Type II, ISO 27001, HIPAA & GDPR Audit Preparation",
      "Cloud Security Posture Management (CSPM) & SIEM Telemetry"
    ],
    techStack: ["HashiCorp Vault", "Wazuh SIEM", "Cloudflare Zero Trust", "SonarQube", "Snyk", "Trivy", "AWS GuardDuty"],
    workflow: [
      { step: "01", title: "Threat Modeling", desc: "STRIDE attack vector mapping and vulnerability scans." },
      { step: "02", title: "Identity Hardening", desc: "Enforcing MFA, RBAC, and ephemeral tokens." },
      { step: "03", title: "Pipeline Gates", desc: "Automated vulnerability blockers in deployment pipelines." },
      { step: "04", title: "Audit Prep", desc: "Collecting compliance evidence aligned with SOC-2/ISO 27001." },
      { step: "05", title: "Active Telemetry", desc: "24/7 SIEM monitoring and anomaly response playbooks." }
    ],
    deliverables: [
      "Threat Assessment & Vulnerability Executive Report",
      "Automated CI/CD security gating configuration",
      "SOC-2 / ISO 27001 compliance evidence package",
      "Incident Response Playbook with automated escalations"
    ],
    metrics: "100% audit pass rate • 0 security breaches in 10-year track record"
  },
  {
    id: "mobile-engineering",
    number: "05",
    title: "Mobile & Cross-Platform Product Engineering",
    tagline: "Consumer-grade elegance backed by enterprise-grade reliability.",
    icon: "Smartphone",
    color: "from-amber-500/10 to-orange-600/10",
    accentColor: "#d97706",
    shortDesc: "High-performance iOS, Android, Flutter, and React Native mobile applications featuring offline sync and 120Hz responsiveness.",
    fullOverview: "We build native and cross-platform mobile experiences that achieve instant launch speeds, rock-solid offline database synchronization, and seamless hardware integration. From biometric authentication to low-latency Bluetooth and IoT protocols, our apps delight users at scale.",
    capabilities: [
      "Cross-Platform Mastery in Flutter & React Native",
      "Native iOS (Swift/SwiftUI) & Android (Kotlin/Jetpack Compose)",
      "Offline-First Synchronization with Local SQLite Caching",
      "Biometric Hardware Enclave Security Integration",
      "App Store & Google Play Automated Deployment (Fastlane)"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "SQLite", "Firebase", "WebSockets", "Fastlane"],
    workflow: [
      { step: "01", title: "UX Prototyping", desc: "Design systems, interaction tokens, and user journeys." },
      { step: "02", title: "Architecture", desc: "State machine design, offline caching, and network layers." },
      { step: "03", title: "Feature Sprints", desc: "Bi-weekly testable builds via TestFlight and Play Internal." },
      { step: "04", title: "Performance Audit", desc: "Frame-rate audits (120 FPS) and memory profiling." },
      { step: "05", title: "Store Release", desc: "Automated Fastlane deployment and post-launch telemetry." }
    ],
    deliverables: [
      "Production signed binaries for iOS (IPA) and Android (AAB)",
      "Full source code with unit and integration test coverage",
      "Automated CI/CD Fastlane deployment scripts",
      "App Store Optimization (ASO) asset packaging"
    ],
    metrics: "4.8+ average client app store rating • 99.9% crash-free sessions"
  },
  {
    id: "digital-consulting",
    number: "06",
    title: "Strategic IT Consulting & CTO Advisory",
    tagline: "Aligning engineering execution directly with commercial targets.",
    icon: "TrendingUp",
    color: "from-indigo-500/10 to-cyan-600/10",
    accentColor: "#4f46e5",
    shortDesc: "Fractional CTO advisory, legacy tech debt elimination, cloud migration roadmaps, and engineering team delivery acceleration.",
    fullOverview: "Technology without clear direction creates expensive technical debt. Nezvo Infotech provides C-level technical advisory to enterprises and high-growth scale-ups. We evaluate legacy systems, identify structural bottlenecks, optimize IT budgets, and architect 3-year transformation roadmaps that accelerate business velocity.",
    capabilities: [
      "Fractional CTO & Executive Technology Advisory",
      "Legacy Tech Stack Modernization & Debt Elimination",
      "Enterprise Multi-Cloud Migration Strategy",
      "Engineering Culture & Agile Delivery Optimization",
      "M&A Technical Due Diligence & System Audits"
    ],
    techStack: ["Enterprise Architecture", "TOGAF", "Agile/Scrum", "Jira/Confluence", "Lean Six Sigma", "FinOps Tooling"],
    workflow: [
      { step: "01", title: "Deep Audit", desc: "System code analysis and operational bottleneck discovery." },
      { step: "02", title: "Gap Assessment", desc: "Benchmarking current tech against market leaders." },
      { step: "03", title: "Roadmap Formulation", desc: "Designing multi-phase modernization with quantified ROI." },
      { step: "04", title: "Executive Alignment", desc: "Presenting blueprints and risk models to leadership." },
      { step: "05", title: "Execution Governance", desc: "Weekly architectural oversight and delivery mentorship." }
    ],
    deliverables: [
      "Comprehensive 3-Year Enterprise Technology Roadmap",
      "Architecture Evaluation Report with cost-saving insights",
      "Technical Due Diligence Dossier for executive boards",
      "Engineering Standard Operating Procedures (SOP)"
    ],
    metrics: "Up to 50% technical debt reduction • 35% faster time-to-market"
  }
];

export const ABOUT_PILLARS = [
  {
    id: "p1",
    metric: "10+",
    unit: "Years",
    title: "Proven Industry Mastery",
    category: "Heritage & Longevity",
    highlight: "Founded in 2014, Nezvo Infotech has spent over a decade architecting resilient software across mobile, cloud, and AI revolutions.",
    badge: "Est. 2014"
  },
  {
    id: "p2",
    metric: "120+",
    unit: "Platforms",
    title: "Successfully Shipped Enterprise Systems",
    category: "Track Record",
    highlight: "Deployed mission-critical platforms spanning FinTech, HealthTech, Logistics, and High-Volume E-Commerce.",
    badge: "100% Production"
  },
  {
    id: "p3",
    metric: "99.8%",
    unit: "Retention",
    title: "Client Retention & Enduring Trust",
    category: "Partnership",
    highlight: "Over 85% of our enterprise clients maintain multi-year co-pilot engineering engagements with our squads.",
    badge: "Long-Term Trust"
  },
  {
    id: "p4",
    metric: "150+",
    unit: "Engineers",
    title: "Elite Distributed Engineering Squads",
    category: "Talent Pedigree",
    highlight: "Composed of top 3% senior engineers, certified in AWS, GCP, Kubernetes, and Advanced AI Engineering.",
    badge: "Top 3% Talent"
  },
  {
    id: "p5",
    metric: "ISO & SOC",
    unit: "Certified",
    title: "Military-Grade Security & Compliance",
    category: "Governance",
    highlight: "Independently certified for ISO/IEC 27001:2022 and SOC-2 Type II with zero historical data breaches.",
    badge: "ISO 27001 • SOC-2"
  },
  {
    id: "p6",
    metric: "40%",
    unit: "Faster",
    title: "Accelerated Time-to-Market",
    category: "Efficiency",
    highlight: "Battle-tested microservices blueprints and automated CI/CD reduce initial release cycles from 9 months to under 90 days.",
    badge: "High Velocity"
  },
  {
    id: "p7",
    metric: "R&D Lab",
    unit: "Active",
    title: "Dedicated Emerging Tech & AI Lab",
    category: "Innovation",
    highlight: "15% of annual revenue reinvested into internal R&D covering autonomous agents, quantum-safe encryption, and neural models.",
    badge: "Next-Gen Tech"
  },
  {
    id: "p8",
    metric: "24/7/365",
    unit: "Support",
    title: "Mission-Critical SRE & Uptime Guarantee",
    category: "Reliability",
    highlight: "Guaranteed 99.99% uptime with 15-minute emergency response SLAs backed by globally distributed site reliability engineers.",
    badge: "15-Min SLA"
  }
];

export const TECH_ECOSYSTEM = [
  { name: "Kubernetes", category: "Cloud Orchestration" },
  { name: "AWS", category: "Cloud Infrastructure" },
  { name: "Google Cloud", category: "Cloud & Analytics" },
  { name: "Microsoft Azure", category: "Enterprise Cloud" },
  { name: "Terraform", category: "Infrastructure as Code" },
  { name: "PyTorch", category: "AI & Neural Networks" },
  { name: "LangChain", category: "LLM Orchestration" },
  { name: "Apache Kafka", category: "Event Streaming" },
  { name: "Go (Golang)", category: "High-Performance Backend" },
  { name: "Rust", category: "Systems Engineering" },
  { name: "TypeScript", category: "Modern Full-Stack" },
  { name: "React / Next.js", category: "Web Product UI" },
  { name: "PostgreSQL", category: "Relational Database" },
  { name: "Docker", category: "Containerization" },
  { name: "HashiCorp Vault", category: "Secrets Security" }
];

export const TESTIMONIALS = [
  {
    quote: "Nezvo Infotech completely re-architected our transaction engine. We scaled to over 3 million daily transactions without a hitch while reducing cloud compute spend by 35%.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Global FinTech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Their AI engineering squad built our diagnostic engine with astounding accuracy and strict HIPAA compliance. They operate with startup velocity and enterprise rigor.",
    author: "Dr. Elena Rostova",
    role: "VP of Digital Innovation",
    company: "Synapse Health Technologies",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Finding an engineering partner that genuinely understands enterprise Kubernetes and Zero-Trust defense is rare. Nezvo Infotech delivered beyond expectations.",
    author: "David K. Chen",
    role: "Head of Infrastructure & SecOps",
    company: "Vanguard Logistics Network",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

export const CONTACT_INFO = {
  headquarters: {
    city: "Global Innovation Center",
    address: "Nezvo Infotech Tech Tower, 45 Cyber Boulevard, Silicon Corridor",
    phone: "+1 (800) 842-NEZVO / +1 (415) 890-3490",
    email: "consulting@nezvoinfotech.com"
  },
  regionalOffices: [
    { region: "Americas Hub", city: "San Francisco, CA", email: "us@nezvoinfotech.com" },
    { region: "EMEA Hub", city: "London, United Kingdom", email: "eu@nezvoinfotech.com" },
    { region: "APAC Hub", city: "Singapore & Bangalore", email: "apac@nezvoinfotech.com" }
  ],
  supportSLA: {
    criticalIncident: "< 15 minutes",
    standardInquiry: "< 2 hours",
    uptimeGuarantee: "99.99% SLA"
  }
};
