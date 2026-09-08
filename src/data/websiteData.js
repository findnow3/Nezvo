export const HERO_CHAPTERS = [
  {
    id: 0,
    chapter: "CHAPTER 01",
    phase: "THE VISION",
    title: "Architecting Next-Gen Enterprise Solutions",
    subtitle: "Nezvo Infotech empowers visionary global enterprises with resilient digital infrastructure, mission-critical software, and autonomous AI architectures.",
    tag: "Next-Gen Tech Advisory & Engineering",
    highlights: [
      { label: "Experience", value: "10+ Years" },
      { label: "Platforms Deployed", value: "120+" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    ctaText: "Explore Capabilities",
    ctaTarget: "#services"
  },
  {
    id: 1,
    chapter: "CHAPTER 02",
    phase: "THE CORE INFRASTRUCTURE",
    title: "Hyper-Scalable Cloud, AI & Neural Systems",
    subtitle: "We engineer fault-tolerant microservices, high-throughput data backbones, and custom machine learning pipelines that handle petabyte-scale real-time operations.",
    tag: "Cloud Native & Cognitive Computing",
    highlights: [
      { label: "Microservices Scaled", value: "450+" },
      { label: "Sub-ms Latency", value: "< 12ms" },
      { label: "Cloud Providers", value: "AWS • GCP • Azure" }
    ],
    ctaText: "Discover Tech Architecture",
    ctaTarget: "#tech-stack"
  },
  {
    id: 2,
    chapter: "CHAPTER 03",
    phase: "GLOBAL IMPACT & SCALE",
    title: "Pioneering Transformation Across 18+ Countries",
    subtitle: "From high-frequency FinTech platforms to HIPAA-compliant medical ecosystems, our solutions secure billions of dollars in daily transactions with zero-trust defense.",
    tag: "Enterprise Impact & Global Footprint",
    highlights: [
      { label: "Transaction Volume", value: "$2.5B+" },
      { label: "Global Reach", value: "18+ Nations" },
      { label: "Retention Rate", value: "99.8%" }
    ],
    ctaText: "Read About Our Experience",
    ctaTarget: "#about"
  },
  {
    id: 3,
    chapter: "CHAPTER 04",
    phase: "THE PARTNERSHIP",
    title: "Nezvo Infotech: Where Precision Meets Boundless Innovation",
    subtitle: "Bridge the gap between ambitious product roadmaps and bulletproof technological execution with our elite engineering squads.",
    tag: "Strategic Enterprise Engineering",
    highlights: [
      { label: "Team Strength", value: "150+ Architects" },
      { label: "Time-to-Market", value: "40% Faster" },
      { label: "Certifications", value: "ISO 27001 • SOC-2" }
    ],
    ctaText: "Schedule Strategic Consultation",
    ctaTarget: "#contact"
  }
];

export const SERVICES = [
  {
    id: "enterprise-software",
    number: "01",
    title: "Custom Software & Enterprise Architecture",
    tagline: "High-concurrency, distributed systems engineered for massive throughput.",
    icon: "Layers",
    color: "from-cyan-500/20 to-blue-600/20",
    accentColor: "#38bdf8",
    shortDesc: "Scalable backend microservices, event-driven streaming architectures, and legacy system modernization tailored to enterprise requirements.",
    fullOverview: "Nezvo Infotech designs and builds mission-critical enterprise software solutions from the ground up. Whether you are modernizing monolithic mainframes or launching a high-throughput event-driven ecosystem, our senior architects craft clean, test-driven, decoupled systems that scale gracefully under millions of concurrent users.",
    capabilities: [
      "Event-Driven Microservices with Apache Kafka & RabbitMQ",
      "Legacy Monolith Modernization & Strangler Fig Patterns",
      "High-Performance REST, gRPC & GraphQL API Gateways",
      "Multi-Tenant SaaS Platform Engineering",
      "Domain-Driven Design (DDD) & Clean Architecture",
      "Resilient Transactional Integrity with ACID & Sagas"
    ],
    techStack: ["Go", "Rust", "Java Spring Boot", "Node.js/TypeScript", "Apache Kafka", "PostgreSQL", "Redis", "GraphQL", "Docker"],
    workflow: [
      { step: "01", title: "Domain Discovery", desc: "System profiling, event storming, and architectural trade-off analysis." },
      { step: "02", title: "Core Design", desc: "Data modeling, API contracts, security boundary mapping, and benchmark targets." },
      { step: "03", title: "Agile Sprints", desc: "Modular component engineering with 90%+ automated unit & integration test coverage." },
      { step: "04", title: "Performance Stress-Testing", desc: "Chaos engineering, load simulation, and sub-millisecond query optimization." },
      { step: "05", title: "Continuous Rollout", desc: "Zero-downtime canary deployments and telemetry integration." }
    ],
    deliverables: [
      "Full source code ownership with comprehensive CI/CD pipelines",
      "System Architecture Design Record (ADR) documentation",
      "Automated test suites & chaos test benchmarks",
      "Operational runbooks and developer onboarding guides"
    ],
    metrics: "45% reduction in compute overhead • 99.99% system resilience"
  },
  {
    id: "cloud-devops",
    number: "02",
    title: "Cloud Infrastructure & DevOps Orchestration",
    tagline: "Automated, zero-downtime multi-cloud infrastructure with GitOps precision.",
    icon: "Cloud",
    color: "from-blue-500/20 to-indigo-600/20",
    accentColor: "#60a5fa",
    shortDesc: "Automated Kubernetes orchestration, Terraform Infrastructure as Code, multi-cloud disaster recovery, and continuous delivery pipelines.",
    fullOverview: "We transform fragmented infrastructure into self-healing, automated cloud ecosystems. Operating across AWS, Google Cloud, and Microsoft Azure, our certified cloud architects implement GitOps practices, immutable infrastructure, and strict FinOps cost governance to keep your overhead minimal while maximizing reliability.",
    capabilities: [
      "Production-Grade Kubernetes (EKS, GKE, AKS) & Service Meshes (Istio)",
      "Infrastructure as Code (IaC) with Terraform, OpenTofu & Terragrunt",
      "GitOps Continuous Delivery with ArgoCD & Flux",
      "Multi-Region Active-Active High Availability & Disaster Recovery",
      "Cloud Cost Rationalization & FinOps Optimization",
      "Zero-Downtime Blue-Green & Progressive Canary Deployments"
    ],
    techStack: ["AWS", "Google Cloud", "Microsoft Azure", "Kubernetes", "Terraform", "ArgoCD", "Docker", "Prometheus", "Grafana", "Helm"],
    workflow: [
      { step: "01", title: "Cloud Audit", desc: "Inventory analysis, security posture verification, and cost leakage assessment." },
      { step: "02", title: "IaC Blueprinting", desc: "Modular Terraform templates adhering to CIS benchmarks and least-privilege IAM." },
      { step: "03", title: "Cluster Provisioning", desc: "Hardened Kubernetes clusters with automated autoscaling and node management." },
      { step: "04", title: "GitOps Integration", desc: "Declarative continuous delivery pipelines connected to version control." },
      { step: "05", title: "Observability Setup", desc: "End-to-end distributed tracing, alerting, and log aggregation." }
    ],
    deliverables: [
      "Modular, version-controlled Terraform repository",
      "Fully configured Kubernetes cluster with automated autoscaling",
      "GitOps deployment pipelines with automated rollback safeguards",
      "Comprehensive cloud spend dashboard with cost anomaly alarms"
    ],
    metrics: "3.5x faster deployment frequency • 32% average cloud cost savings"
  },
  {
    id: "ai-machine-learning",
    number: "03",
    title: "AI & Machine Learning Engineering",
    tagline: "Transform enterprise data into autonomous intelligence and competitive edge.",
    icon: "Cpu",
    color: "from-purple-500/20 to-pink-600/20",
    accentColor: "#a855f7",
    shortDesc: "Custom Large Language Model (LLM) fine-tuning, RAG enterprise search engines, predictive analytics, and computer vision systems.",
    fullOverview: "Move beyond standard AI wrappers. Nezvo Infotech builds custom enterprise intelligence pipelines that deeply understand your proprietary data while ensuring complete data sovereignty. We design high-throughput inference engines, domain-specific retrieval-augmented generation (RAG) platforms, and predictive models that automate mission-critical decisions.",
    capabilities: [
      "Custom LLM Fine-Tuning & Parameter-Efficient LoRA Adaptation",
      "Production Enterprise RAG Systems with Hybrid Vector Search",
      "Autonomous Multi-Agent Systems & Tool-Calling Workflows",
      "Computer Vision for Defect Detection, OCR & Spatial Analysis",
      "Predictive Demand Forecasting & Churn Prediction Engines",
      "MLOps Model Governance, Monitoring, & Drift Detection"
    ],
    techStack: ["PyTorch", "Hugging Face", "LangChain/LlamaIndex", "vLLM", "Pinecone/Milvus", "Qdrant", "MLflow", "Triton Inference", "Python"],
    workflow: [
      { step: "01", title: "Data Feasibility", desc: "Data quality analysis, labeling strategies, and benchmark metric definitions." },
      { step: "02", title: "Pipeline Architecture", desc: "Vector indexing, embedding models selection, and token optimization schemes." },
      { step: "03", title: "Model Development", desc: "Fine-tuning weights, prompt orchestration, and agent chain engineering." },
      { step: "04", title: "Evaluation & Guardrails", desc: "Hallucination mitigation, red-teaming, latency profiling, and safety checks." },
      { step: "05", title: "Production Serving", desc: "High-concurrency GPU inference clusters with sub-100ms response targets." }
    ],
    deliverables: [
      "Production-ready AI microservice API containerized with Docker",
      "Custom vector retrieval and embedding ETL pipelines",
      "Guardrail policy configurations preventing hallucination and data leakage",
      "Evaluation benchmark reports with accuracy, recall, and latency metrics"
    ],
    metrics: "94.2% factual precision on proprietary corpus • 5x faster inference"
  },
  {
    id: "cybersecurity-compliance",
    number: "04",
    title: "Cybersecurity, Compliance & Threat Defense",
    tagline: "Military-grade Zero-Trust architecture and regulatory certification mastery.",
    icon: "ShieldCheck",
    color: "from-emerald-500/20 to-cyan-600/20",
    accentColor: "#34d399",
    shortDesc: "End-to-end zero-trust architecture, automated penetration testing, SOC-2 & ISO 27001 readiness, and real-time threat telemetry.",
    fullOverview: "In a landscape of escalating cyber threats, security cannot be an afterthought. Nezvo Infotech embeds Zero-Trust principles into every layer of your digital ecosystem. From cryptographic secret management and secure software supply chains to regulatory compliance readiness (SOC-2 Type II, ISO 27001, HIPAA, GDPR), we ensure your enterprise remains impregnable.",
    capabilities: [
      "Zero-Trust Network Access (ZTNA) & Identity Governance",
      "Continuous Dynamic & Static Application Security Testing (DAST/SAST)",
      "Cryptographic Key & Secret Management with HashiCorp Vault",
      "SOC-2 Type II, ISO 27001, HIPAA & GDPR Audit Readiness",
      "Cloud Security Posture Management (CSPM) & Vulnerability Remediation",
      "Automated SIEM Telemetry & Incident Response Playbooks"
    ],
    techStack: ["HashiCorp Vault", "Wazuh SIEM", "Cloudflare Zero Trust", "SonarQube", "Snyk", "Falco", "OpenID Connect", "Trivy", "AWS GuardDuty"],
    workflow: [
      { step: "01", title: "Threat Modeling", desc: "STRIDE matrix mapping, attack vector enumeration, and vulnerability scan." },
      { step: "02", title: "Identity Hardening", desc: "Enforcing MFA, role-based access control (RBAC), and ephemeral tokens." },
      { step: "03", title: "Pipeline Scanning", desc: "Automated dependency vulnerability gates blocking unverified releases." },
      { step: "04", title: "Compliance Mapping", desc: "Aligning technical controls with SOC-2, ISO 27001, and regulatory standards." },
      { step: "05", title: "Active Telemetry", desc: "Real-time anomaly alerting and automated threat isolation workflows." }
    ],
    deliverables: [
      "Comprehensive Threat Assessment & Penetration Test Executive Report",
      "Automated CI/CD security gating policy configurations",
      "SOC-2 / ISO 27001 compliance evidence bundle ready for auditor review",
      "Incident Response Playbook with escalation matrices"
    ],
    metrics: "100% audit pass rate for clients • 0 security breaches in 10-year record"
  },
  {
    id: "mobile-engineering",
    number: "05",
    title: "Mobile & Cross-Platform Product Engineering",
    tagline: "Fluid, high-framerate native & hybrid mobile applications built to delight.",
    icon: "Smartphone",
    color: "from-amber-500/20 to-orange-600/20",
    accentColor: "#fbbf24",
    shortDesc: "High-performance iOS, Android, Flutter, and React Native mobile applications featuring offline-first sync and silky-smooth 120Hz interactions.",
    fullOverview: "We engineer consumer-grade elegance with enterprise-grade reliability. Nezvo Infotech builds native and cross-platform mobile experiences that achieve instant launch speeds, rock-solid offline synchronization, and seamless hardware integration. From biometric authentication to low-latency Bluetooth/IoT interfaces, our mobile apps captivate users.",
    capabilities: [
      "Cross-Platform Mastery in Flutter & React Native Architecture",
      "Native iOS (Swift/SwiftUI) & Android (Kotlin/Jetpack Compose)",
      "Offline-First Synchronization with WatermelonDB & SQLite",
      "Biometric Security & Hardware Enclave Integration",
      "Push Notification & Real-Time Socket Engines",
      "App Store & Google Play Continuous Release Automation (Fastlane)"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "SQLite", "Firebase", "WebSockets", "Fastlane", "Redux Toolkit", "GraphQL"],
    workflow: [
      { step: "01", title: "UX Prototyping", desc: "Interactive wireframes, design tokens, and motion interaction design." },
      { step: "02", title: "Architecture Setup", desc: "State machine architecture, offline database caching, and network abstraction." },
      { step: "03", title: "Feature Sprints", desc: "Bi-weekly testable builds delivered via TestFlight and Google Internal Testing." },
      { step: "04", title: "Performance Profiling", desc: "Memory leak diagnostics, 60/120 FPS frame audit, and battery drain checks." },
      { step: "05", title: "App Store Launch", desc: "Automated Fastlane deployment, review compliance, and post-launch analytics." }
    ],
    deliverables: [
      "Production-ready signed binaries for iOS (IPA) and Android (AAB)",
      "Full clean source code with unit and UI automated test cases",
      "Continuous integration Fastlane scripts for one-click release updates",
      "App Store Optimization (ASO) metadata and asset packaging"
    ],
    metrics: "4.8+ average client app store rating • 99.9% crash-free sessions"
  },
  {
    id: "digital-consulting",
    number: "06",
    title: "Digital Transformation & Strategic IT Consulting",
    tagline: "Turn technological investments into undeniable market leadership.",
    icon: "TrendingUp",
    color: "from-indigo-500/20 to-cyan-600/20",
    accentColor: "#818cf8",
    shortDesc: "CTO-as-a-Service, enterprise digital roadmapping, legacy tech rationalization, cloud migration strategy, and engineering team upskilling.",
    fullOverview: "Technology without strategic direction leads to technical debt. Nezvo Infotech provides C-level technical advisory to enterprises and high-growth scale-ups. We evaluate your current systems, identify structural bottlenecks, optimize IT budgets, and architect 3-year transformation roadmaps that accelerate business velocity.",
    capabilities: [
      "Fractional CTO & Executive Technology Advisory",
      "Legacy Tech Stack Rationalization & Debt Elimination",
      "Enterprise Cloud Migration Roadmaps & Vendor Selection",
      "Engineering Culture & Agile Delivery Transformation",
      "Merger & Acquisition (M&A) Technical Due Diligence",
      "Enterprise Architecture Governance & Standard Operating Procedures"
    ],
    techStack: ["Enterprise Architecture", "TOGAF", "Agile/Scrum", "Jira/Confluence", "Lean Six Sigma", "DevSecOps Culture", "FinOps Tooling"],
    workflow: [
      { step: "01", title: "Deep Discovery", desc: "Stakeholder interviews, legacy code audits, and operational bottleneck discovery." },
      { step: "02", title: "Gap Analysis", desc: "Evaluating current tech state against industry leaders and growth targets." },
      { step: "03", title: "Strategy Formulation", desc: "Designing multi-phase modernization roadmap with quantified ROI expectations." },
      { step: "04", title: "Executive Alignment", desc: "Presenting blueprints, risk mitigations, and budget models to board of directors." },
      { step: "05", title: "Execution Governance", desc: "Guiding implementation squads with weekly architectural oversight." }
    ],
    deliverables: [
      "Comprehensive 3-Year Enterprise Technology Strategic Roadmap",
      "Architecture Evaluation Report with cost-saving recommendations",
      "Technical Due Diligence Dossier for investors and board executives",
      "Engineering Standard Operating Procedures (SOP) playbooks"
    ],
    metrics: "Up to 50% technical debt reduction • 35% improvement in time-to-market"
  }
];

export const ABOUT_PILLARS = [
  {
    id: "p1",
    metric: "10+",
    unit: "Years",
    title: "Proven Industry Mastery",
    category: "Heritage & Longevity",
    highlight: "Founded in 2014, Nezvo Infotech has spent over a decade guiding enterprises through the mobile wave, cloud revolution, and generative AI era.",
    detail: "Unlike short-lived dev shops, Nezvo Infotech brings a decade of enterprise battle scars. We have navigated technological shifts and built systems that outlast industry trends.",
    badge: "Established 2014"
  },
  {
    id: "p2",
    metric: "120+",
    unit: "Platforms",
    title: "Successfully Shipped Enterprise Systems",
    category: "Proven Track Record",
    highlight: "Deployed mission-critical platforms spanning FinTech, HealthTech, Logistics, Energy, and Global E-Commerce.",
    detail: "Every deployment is designed for high availability, zero-downtime upgrades, and rigorous compliance. Our software routinely handles millions of daily operations.",
    badge: "100% Production Grade"
  },
  {
    id: "p3",
    metric: "99.8%",
    unit: "Retention",
    title: "Client Retention & Enduring Trust",
    category: "Client Partnership",
    highlight: "Over 85% of our enterprise clients continue working with our engineering squads on multi-year strategic roadmaps.",
    detail: "We don't believe in transactional coding. We embed ourselves as long-term technological co-pilots, aligning our engineering goals directly with your commercial targets.",
    badge: "Long-Term Partners"
  },
  {
    id: "p4",
    metric: "150+",
    unit: "Engineers",
    title: "Elite Distributed Engineering Squads",
    category: "Human Capital",
    highlight: "Composed strictly of the top 3% of technical talent, certified in AWS, GCP, Kubernetes, and Advanced AI Engineering.",
    detail: "Our global team includes PhDs in computer science, certified cloud solutions architects, cybersecurity experts, and seasoned product designers.",
    badge: "Top 3% Talent"
  },
  {
    id: "p5",
    metric: "ISO & SOC",
    unit: "Certified",
    title: "Military-Grade Security & Compliance",
    category: "Governance & Privacy",
    highlight: "Independently certified for ISO/IEC 27001:2022 and SOC-2 Type II compliance with zero historical data breaches.",
    detail: "Security is baked into our DNA. From cryptographic hardware enclaves to zero-trust networks, we guarantee uncompromising confidentiality and data sovereignty.",
    badge: "ISO 27001 • SOC-2"
  },
  {
    id: "p6",
    metric: "40%",
    unit: "Faster",
    title: "Accelerated Time-to-Market Protocol",
    category: "Engineering Efficiency",
    highlight: "Proprietary reusable architecture frameworks, automated CI/CD pipelines, and mature agile delivery workflows.",
    detail: "By leveraging pre-tested microservices blueprints and automated security gates, we reduce initial release cycles from 9 months down to under 90 days.",
    badge: "High Velocity"
  },
  {
    id: "p7",
    metric: "R&D Lab",
    unit: "Active",
    title: "Dedicated Emerging Tech & AI Innovation Lab",
    category: "Future Readiness",
    highlight: "15% of annual revenue reinvested into internal R&D covering autonomous agent frameworks, quantum-safe crypto, and Web3 infra.",
    detail: "We don't wait for technologies to become commoditized. Our dedicated innovation unit validates cutting-edge paradigms before recommending them to clients.",
    badge: "Forward Thinking"
  },
  {
    id: "p8",
    metric: "24/7/365",
    unit: "Support",
    title: "Mission-Critical SRE & Uptime Guarantee",
    category: "Operational Reliability",
    highlight: "Guaranteed 99.99% uptime with 15-minute emergency response SLAs backed by globally distributed site reliability engineers.",
    detail: "Our monitoring centers keep constant vigil over your production infrastructure. Automated failovers and proactive incident response prevent outages before they happen.",
    badge: "15-Min Response SLA"
  }
];

export const TECH_ECOSYSTEM = [
  { name: "Kubernetes", category: "Cloud & DevOps", icon: "Anchor" },
  { name: "Amazon Web Services", category: "Cloud", icon: "Cloud" },
  { name: "Google Cloud Platform", category: "Cloud", icon: "CloudSun" },
  { name: "Microsoft Azure", category: "Cloud", icon: "CloudRain" },
  { name: "Terraform", category: "IaC", icon: "Box" },
  { name: "PyTorch", category: "AI & ML", icon: "Cpu" },
  { name: "TensorFlow", category: "AI & ML", icon: "Binary" },
  { name: "LangChain", category: "AI & LLM", icon: "Network" },
  { name: "Apache Kafka", category: "Data Streaming", icon: "Radio" },
  { name: "Go (Golang)", category: "High Performance", icon: "Zap" },
  { name: "Rust", category: "Systems", icon: "Shield" },
  { name: "TypeScript", category: "Frontend & API", icon: "Code2" },
  { name: "React / Next.js", category: "Frontend", icon: "Layout" },
  { name: "PostgreSQL", category: "Database", icon: "Database" },
  { name: "Docker", category: "Containers", icon: "Boxes" },
  { name: "HashiCorp Vault", category: "Cybersecurity", icon: "Lock" }
];

export const TESTIMONIALS = [
  {
    quote: "Nezvo Infotech completely re-architected our transaction processing engine. We scaled from 50,000 to over 3 million daily transactions without a single hitch, reducing our cloud spend by 35% in the process.",
    author: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Apex Global FinTech",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Their AI engineering squad built our custom medical diagnosis assistant with astounding accuracy and strict HIPAA compliance. Nezvo Infotech operates with the velocity of a startup and the rigor of a defense contractor.",
    author: "Dr. Elena Rostova",
    role: "VP of Digital Innovation",
    company: "Synapse Health Technologies",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
  },
  {
    quote: "Finding an engineering partner that genuinely understands enterprise Kubernetes and Zero-Trust security is rare. Nezvo Infotech achieved what three previous consulting firms couldn't.",
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
