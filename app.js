/* ═══════════════════════════════════════════════════════════════
   FLAMINGO EMERGING TECHNOLOGIES — Application Logic
   GSAP + ScrollTrigger + Lenis + Floating Pill Nav + Tech Showcase + Search + i18n
   ═══════════════════════════════════════════════════════════════ */

// Disable browser auto scroll restoration so intro starts cleanly at scroll = 0
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// ── GSAP & SCROLLTRIGGER CONFIG ──────────────────────────────
// Prevent GSAP layout thrashing and address-bar resize jitter on mobile
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
if (typeof ScrollTrigger !== 'undefined') {
  ScrollTrigger.config({ ignoreMobileResize: true });
  ScrollTrigger.normalizeScroll(false);
}

// ── TRANSLATIONS ──────────────────────────────────────────────
const translations = {
  en: {
    // Floating Pill Navbar & Search
    nav_capabilities: "Core Disciplines",
    nav_products: "Proprietary Engines",
    nav_blueprints: "Blueprints",
    nav_technology: "Tech Stack",
    nav_partners: "Partners",
    nav_governance: "Safety Laws",
    nav_contact: "Contact",
    nav_search: "Search",
    nav_cta: "Contact",
    card_more_details: "More Details ↗\uFE0E",
    card_close: "Close ×",
    intro_scroll_indicator: "[ SCROLL TO INITIALIZE ↓\uFE0E ]",

    // Hero & Telemetry
    hero_badge: "ENTERPRISE SYSTEMS & HITL ORCHESTRATION",
    hero_headline: "We Engineer & Build Everything Your Operations Demand.",
    hero_headline_p1: "We Engineer & Build",
    hero_headline_p2: "Everything Your Operations Demand.",
    hero_subhead: "From mission-critical enterprise platforms, embedded hardware, and automotive telemetry to high-precision speed monitoring systems and supervised AI—we turn complex engineering challenges into production reality.",
    hero_brief_lead: "Why Industry Leaders Choose Flamingo: Full-stack mastery across hardware, fleet & radar telemetry, structured data, and deterministic AI...",
    prompt_desktop_brief: "[ Hover for Full Capability Breakdown ↗\uFE0E ]",
    prompt_mobile_brief: "[ Tap for Full Capability Breakdown + ]",
    prompt_desktop_spec: "[ Hover to Inspect Full Technical Spec ↗\uFE0E ]",
    prompt_mobile_spec: "[ Tap to Read Full Spec + ]",
    card_close_spec: "[ Close Spec × ]",
    hero_adv1_title: "End-to-End Hardware + Software Ownership",
    hero_adv1_desc: "We integrate microcontrollers, CAN-bus automotive protocols, radar/LiDAR speed sensors, and cloud dashboards under one roof.",
    hero_adv2_title: "Embedded AI Where It Matters",
    hero_adv2_desc: "We embed edge computer vision (ANPR/license plate recognition, speed enforcement) and supervised AI directly into hardware and enterprise workflows.",
    hero_adv3_title: "Structured Data Classification & Delivery",
    hero_adv3_desc: "High-purity sensor, traffic, and enterprise dataset classification with 99.9% schema accuracy.",
    hero_adv4_title: "Zero-Failure Abu Dhabi Engineering",
    hero_adv4_desc: "Local UAE accountability, full IP ownership, and deterministic human-in-the-loop safety gates.",
    hero_cta_primary: "Schedule Briefing",
    hero_cta_secondary: "Direct Call: +971 50 680 2332",
    console_title: "SYSTEM TELEMETRY // LIVE",
    console_node_input: "Input Stream",
    console_node_model: "Sandboxed Model",
    console_node_signoff: "Operator Sign-Off",
    stat_unmonitored: "UNMONITORED DB WRITES:",
    stat_latency: "PIPELINE LATENCY:",

    // Marquee
    marquee_label: "ENGINEERED FOR INTEROPERABILITY WITH ENTERPRISE CLOUD & AI STANDARDS",

    // Section 3: Core Disciplines
    cap_eyebrow: "CORE DISCIPLINES",
    cap_title: "Licensed Enterprise Computing & AI Advisory",
    cap_title_p1: "Core",
    cap_title_p2: "Disciplines",
    cap_subtitle: "Distributed event pipelines, zero-trust APIs, and supervised AI integration engineered for critical enterprise operations.",
    cap_card1_title: "Embedded Hardware, Automotive Software & Speed Monitoring Systems",
    cap_card1_desc: "Custom embedded firmware, automotive telemetry software, radar/optical speed monitoring devices, and edge-AI camera units engineered for real-time field reliability.",
    cap_card2_title: "Enterprise Software, Distributed APIs & Command Platforms",
    cap_card2_desc: "High-throughput backend pipelines, zero-trust API gateways, custom web & mobile portals, and seamless ERP/CRM bridges (SAP, Oracle, Odoo) built for zero downtime.",
    cap_card3_title: "Structured Data Classification, Labeling & Provisioning",
    cap_card3_desc: "End-to-end data collection, multi-modal classification, human-verified annotation, and clean dataset provisioning for enterprise analytics and high-accuracy AI training.",
    cap_card4_title: "Applied AI Systems, Custom RAG & Supervised Orchestration",
    cap_card4_desc: "Production-grade AI agents, grounded enterprise search, and human-in-the-loop (HITL) automation that supercharge your software and hardware ecosystems safely.",
    cap_why_title: "Why Choose Us",
    cap_c1_t1: "Automotive & Fleet Engineering",
    cap_c1_d1: "CAN-bus / OBD-II vehicle diagnostics, real-time GPS/GSM fleet tracking, V2X communication protocols, and in-vehicle control software.",
    cap_c1_t2: "Speed Monitoring & Traffic Enforcement Hardware",
    cap_c1_d2: "High-frequency Doppler radar integration, edge-AI Automated Number Plate Recognition (ANPR/LPR), multi-lane speed detection units, and ruggedized thermal/optical roadside enclosures built for extreme UAE temperatures.",
    cap_c1_t3: "Embedded AI at the Edge",
    cap_c1_d3: "Sub-10ms on-device neural inference (NVIDIA Jetson / ARM Cortex / FPGA) that processes video and sensor streams locally before syncing encrypted alerts to central command servers.",
    cap_c1_why: "Unlike software-only agencies, we bridge physical hardware sensors, C/C++/Rust firmware, and cloud command centers into one unified system.",
    cap_c2_t1: "Distributed Microservices",
    cap_c2_d1: "Event-driven architectures using Go, Python, Node.js, and Apache Kafka capable of ingesting 50,000+ concurrent hardware/IoT or financial events per second.",
    cap_c2_t2: "AI-Augmented Operations",
    cap_c2_d2: "Embedded intelligent anomaly detection, automated routing, and predictive maintenance alerts woven directly into your daily operational dashboards.",
    cap_c2_why: "Sub-15ms API latency, 100% schema-validated data contracts, and full bilingual (EN/AR) web and mobile delivery.",
    cap_c3_t1: "Multi-Modal Data Classification",
    cap_c3_d1: "Automated + human-verified classification of traffic/vehicle imagery, radar sensor logs, Arabic/English legal contracts, financial records, and industrial telemetry.",
    cap_c3_t2: "High-Purity Dataset Provisioning",
    cap_c3_d2: "Deduplication, PII anonymization, strict schema formatting (JSON/Parquet/COCO), and edge-case curation so your analytics and AI models train on 99.9% clean ground-truth data.",
    cap_c3_t3: "AI-Assisted Labeling Pipelines",
    cap_c3_d3: "Our internal AI pre-labels raw data streams while domain specialists verify edge cases—cutting data preparation time by 70%.",
    cap_c3_why: "Compliant UAE data handling, strict quality-assurance benchmarks, and ready-to-ingest API delivery.",
    cap_c4_t1: "Embedded Intelligence Everywhere",
    cap_c4_d1: "We don't build isolated AI chatbots—we embed deterministic AI into your existing ERPs, customer portals, inspection cameras, and document pipelines.",
    cap_c4_t2: "Zero-Hallucination Guardrails",
    cap_c4_d2: "Context-isolated Retrieval-Augmented Generation (RAG), strict typed schema outputs, and mandatory human approval gates before any critical database or hardware state change.",
    cap_c4_why: "Sovereign UAE cloud / on-premise deployment options with 100% cryptographic auditability.",

    // Section 4: Technology & Engineering Expertise (12 Categories)
    tech_eyebrow: "TECHNOLOGY & ENGINEERING EXPERTISE",
    tech_title: "Enterprise Technology Stack & Specialized Capabilities",
    tech_title_p1: "Technical",
    tech_title_p2: "Stack",
    tech_subtitle: "Production-hardened frameworks, distributed architectures, and sovereign AI stacks engineered for zero unmonitored execution.",
    tech_label_stack: "PRODUCTION STACK & LIBRARIES",
    tech_label_capabilities: "ENGINEERING SPECIALIZATIONS & RIGOR",
    tech_cta: "Request Advisory in This Domain →\uFE0E",
    tab_a: "Web & Frontend",
    tab_b: "Backend & APIs",
    tab_c: "Mobile & Native",
    tab_d: "AI & HITL",
    tab_e: "Data & Databases",
    tab_f: "Cloud & DevOps",
    tab_g: "Cybersecurity",
    tab_h: "Observability",
    tab_i: "ERP & Middleware",
    tab_j: "QA & Verification",
    tab_k: "BI & Telemetry",
    tab_l: "Architecture & Advisory",

    // Section 5: Proprietary Engines & Hardware/Software Systems
    prod_eyebrow: "PROPRIETARY HARDWARE & SOFTWARE SYSTEMS",
    prod_title: "In-House Engineered Hardware & Software Engines",
    prod_title_p1: "Proprietary",
    prod_title_p2: "Hardware & Software Systems",
    prod_subtitle: "In-house engineered radar devices, Edge-AI vision systems, automotive telemetry modules, and sovereign enterprise software engines.",
    proj_showcase_title: "FLAGSHIP HARDWARE & EMBEDDED R&D DEPLOYMENTS",
    proj_showcase_desc: "In-house commercial radar units, automotive telematics hardware, autonomous vision payloads, and enterprise software suites.",
    proj_filter_all: "All Systems",
    proj_filter_hardware: "Hardware & Embedded",
    proj_filter_automotive: "Automotive & Radar",
    proj_filter_software: "Software & AI",
    proj1_badge: "PROPRIETARY HARDWARE + EDGE AI",
    proj1_title: "Smart Roadside Speed Monitoring & Edge-ANPR Radar Unit",
    proj1_lead: "In-house engineered Doppler radar and optical Edge-AI camera enclosure for multi-lane vehicle speed detection and real-time license plate recognition (ANPR).",
    proj1_spec1_title: "Ruggedized IP67 Thermal Enclosure",
    proj1_spec1_desc: "Ruggedized IP67 thermal enclosure.",
    proj1_spec2_title: "Millimeter-Wave Doppler Radar",
    proj1_spec2_desc: "Millimeter-wave Doppler radar.",
    proj1_spec3_title: "Custom C++/Rust Firmware",
    proj1_spec3_desc: "Custom C++/Rust firmware targeting sub-8ms neural plate recognition on an embedded SoC.",
    proj1_spec4_title: "Encrypted 5G Telemetry",
    proj1_spec4_desc: "Encrypted 5G telemetry streaming live violation packets to central command.",
    proj2_badge: "AUTOMOTIVE HARDWARE + CLOUD",
    proj2_title: "Automotive CAN-Bus Telemetry & Fleet Diagnostics Module",
    proj2_lead: "Plug-and-play in-vehicle telemetry hardware and cloud fleet management platform reading real-time CAN-bus / OBD-II engine, speed, and safety diagnostics.",
    proj2_spec1_title: "Custom PCB and Microcontroller",
    proj2_spec1_desc: "Custom PCB and microcontroller.",
    proj2_spec2_title: "Heavy-Duty Vehicle Protocols",
    proj2_spec2_desc: "Interfaces with heavy-duty vehicle CAN-bus/J1939 protocols.",
    proj2_spec3_title: "GPS/GNSS & 6-Axis IMU",
    proj2_spec3_desc: "GPS/GNSS positioning and a six-axis IMU.",
    proj2_spec4_title: "Live Fleet Command Center",
    proj2_spec4_desc: "Live web/mobile fleet command center tracking routes, overspeed alerts, and predictive maintenance.",
    proj3_badge: "EMBEDDED VISION + ROBOTICS",
    proj3_title: "Autonomous Drone & Industrial Optical Inspection System",
    proj3_lead: "Low-latency onboard computer vision hardware and ground-control software for automated infrastructure inspection and defect classification.",
    proj3_spec1_title: "Edge-Compute Carrier Board",
    proj3_spec1_desc: "Lightweight edge-compute carrier board.",
    proj3_spec2_title: "Synchronized Optical & Thermal Cameras",
    proj3_spec2_desc: "Synchronized optical and thermal cameras.",
    proj3_spec3_title: "Real-Time MAVLink Telemetry",
    proj3_spec3_desc: "Real-time MAVLink telemetry.",
    proj3_spec4_title: "Supervised AI Defect Detection",
    proj3_spec4_desc: "Supervised AI detecting micro-fractures and thermal leaks.",
    proj4_badge: "PROPRIETARY SOFTWARE PLATFORM",
    proj4_title: "Sovereign Enterprise AI, Document & Data Classification Suite",
    proj4_lead: "Unified enterprise software platform combining DocuVerify™, SynapseSearch™, and high-speed bilingual data classification for government and corporate operations.",
    proj4_spec1_title: "High-Concurrency Microservices",
    proj4_spec1_desc: "High-concurrency Go and Python microservices.",
    proj4_spec2_title: "Bilingual Executive Dashboard",
    proj4_spec2_desc: "Bilingual EN/AR Next.js executive dashboard.",
    proj4_spec3_title: "Zero-Trust ERP Connectors",
    proj4_spec3_desc: "Zero-trust ERP connectors for SAP, Oracle, and Odoo.",
    proj4_spec4_title: "Automated OCR & Context-Isolated RAG",
    proj4_spec4_desc: "Automated OCR and context-isolated RAG search.",
    dv_tagline: "Structured Document Extraction",
    dv_badge: "Advisory & Supervised",
    dv_desc: "Multi-modal OCR and strict schema parsing for contracts and invoices. Low-confidence anomalies route to an operator verification dashboard for sign-off.",
    dv_signoff: "Simulate Operator Sign-Off",
    dv_invoice_title: "COMMERCIAL INVOICE",
    dv_inv_vendor: "Vendor:",
    dv_inv_date: "Date:",
    dv_inv_amount: "Amount:",
    dv_inv_terms: "Terms:",
    dv_inv_taxid: "Tax ID:",
    dv_extracted: "EXTRACTED FIELDS",
    ss_tagline: "Grounded Enterprise Retrieval",
    ss_badge: "Read-Only Advisory",
    ss_desc: "Context-isolated neural knowledge search with hyperlinked document attribution. Operates strictly as a read-only advisor with zero write privileges.",
    ss_placeholder: "Search enterprise knowledge base...",
    ss_query1: "What is our data retention policy?",
    ss_query2: "Employee onboarding checklist?",
    ss_query3: "Incident response protocol?",
    ss_click_prompt: "Click a query above to see grounded retrieval →\uFE0E",
    ss_lock: "READ-ONLY ADVISORY // DB WRITE PRIVILEGES: 0",
    dv_spec_title1: "Multi-Modal Parsing & Sensor Log Ingestion",
    dv_spec_desc1: "Extracts, classifies, and verifies vehicle telemetry logs, speed enforcement violations, commercial invoices, and legal contracts with sub-second optical recognition.",
    dv_spec_title2: "Mandatory Human Sign-Off Gate",
    dv_spec_desc2: "Any confidence score below 98.5% automatically quarantines the transaction into an operator sign-off queue, preventing accidental database or ledger corruption.",
    dv_spec_why: "Combines deep neural document classification with zero-privilege database isolation, built for sovereign UAE regulatory compliance.",
    ss_spec_title1: "Sovereign Knowledge Retrieval & Citations",
    ss_spec_desc1: "Isolated pgvector indexing for engineering manuals, automotive safety compliance logs, HR policies, and executive archives with click-to-verify citations.",
    ss_spec_title2: "Zero Database Write Privileges",
    ss_spec_desc2: "Engine operates strictly in read-only mode, guaranteeing that no conversational or retrieval query can mutate database tables or execute unauthorized API commands.",
    ss_spec_why: "Guaranteed zero-hallucination grounding with cryptographic audit logging and strict UAE data sovereignty.",

    // Section 6: Blueprints
    bp_eyebrow: "REFERENCE ARCHITECTURES & BLUEPRINTS",
    bp_title: "Pre-Engineered System Designs & Solution Blueprints",
    bp_title_p1: "Solution",
    bp_title_p2: "Blueprints",
    bp_subtitle: "Pre-engineered system designs and custom software architectures ready to be tailored and deployed for your organization.",
    bp_filter_all: "All Blueprints",
    bp_filter_enterprise: "Enterprise Systems",
    bp_filter_ai: "Supervised AI",
    bp_filter_cloud: "Private Cloud",
    bp_filter_portal: "Executive Portals",
    bp1_badge: "Reference Blueprint // Enterprise Systems",
    bp1_title: "Zero-Trust ERP, Fleet & IoT Middleware Mesh",
    bp1_desc: "Connecting enterprise ERPs, vehicle telemetry, and field hardware to cloud portals under strict JSON-schema validation and AI anomaly detection.",
    bp2_badge: "Reference Blueprint // HITL Orchestration",
    bp2_title: "Smart Traffic, Speed Monitoring & Edge-AI Command System",
    bp2_desc: "Real-time radar/camera speed monitoring, ANPR vehicle classification, and automated incident ticketing with human operator verification.",
    bp3_badge: "Reference Blueprint // Sovereign AI",
    bp3_title: "Enterprise Data Classification & Sovereign RAG Pipeline",
    bp3_desc: "High-speed ingestion, automated data labeling/classification, and private UAE-hosted neural search.",
    bp4_badge: "Reference Blueprint // Full-Stack Platform",
    bp4_title: "Real-Time Executive Telemetry & Multi-Platform Command Portal",
    bp4_desc: "Unified web + mobile command center for live hardware sensors, fleet metrics, and AI-assisted operational KPIs.",
    bp1_spec_t1: "Telemetry Ingestion & Legacy Bridge",
    bp1_spec_d1: "Bridges Odoo, SAP, Oracle, and vehicle OBD-II/CAN streams through a unified Kafka buffer with automatic data format normalization.",
    bp1_spec_t2: "mTLS 1.3 & Zero-Trust Enclaves",
    bp1_spec_d2: "Hardware tokens and ephemeral certificates validate every inbound packet before passing into internal microservice meshes.",
    bp1_spec_why: "Combines heavy enterprise ERP stability with real-time automotive IoT ingest and local Abu Dhabi implementation.",
    bp2_spec_t1: "Dual-Technology Radar + Optical Speed Detection",
    bp2_spec_d1: "Combines 24GHz/77GHz Doppler radar arrays with synchronised high-speed shutter cameras, delivering sub-0.5 km/h accuracy across multiple lanes.",
    bp2_spec_t2: "HITL Incident Verification Console",
    bp2_spec_d2: "Flagged infractions are encrypted and presented to authorized enforcement operators with high-resolution plate crops and metadata before violation dispatch.",
    bp2_spec_why: "Ruggedized UAE heat tolerance (up to 55°C ambient), local hardware calibration, and zero-loss edge caching during network dropouts.",
    bp3_spec_t1: "Automated Schema Annotation",
    bp3_spec_d1: "Transforms unorganized PDFs, contract scans, and sensor logs into strictly typed Parquet/JSON datasets with 99.9% semantic alignment.",
    bp3_spec_t2: "Isolated UAE Tenant Vector Enclave",
    bp3_spec_d2: "Embeddings and indices reside solely inside the client's sovereign cloud or on-premise cluster, preventing any multi-tenant data cross-contamination.",
    bp3_spec_why: "Compliant with UAE Federal Law No. 45 on Personal Data Protection with full cryptographic provenance logs.",
    bp4_spec_t1: "Low-Latency Hardware Telemetry Grid",
    bp4_spec_d1: "Consolidates live radar device statuses, fleet GPS vectors, and API error spikes into sub-50ms reactive charts.",
    bp4_spec_t2: "Bilingual Executive Governance",
    bp4_spec_d2: "Seamless right-to-left Arabic and English support designed for ministry and C-level executive boards.",
    bp4_spec_why: "Single shared codebase architecture powering web, iOS, and Android executive clients simultaneously.",
    bp_cta: "Request Custom Deployment →\uFE0E",

    // Section 7: Partners
    nav_partners: "Partners",
    partners_title_p1: "Ecosystem",
    partners_title_p2: "Partners",
    partners_subtitle: "We engineer and deploy enterprise systems powered by global cloud, AI, and security infrastructure leaders.",
    partner_aws_name: "Amazon Web Services (AWS)",
    partner_aws_desc: "Utilizing AWS UAE (me-central-1) cloud infrastructure for sovereign-ready hosting, elastic compute, and managed Kubernetes clusters.",
    partner_azure_name: "Microsoft Azure",
    partner_azure_desc: "Integrating Azure enterprise identity (Entra ID) and hybrid cloud services for zero-trust authentication and enterprise governance.",
    partner_frontier_name: "OpenAI & Anthropic",
    partner_frontier_desc: "Deploying frontier foundation models inside isolated, read-only sandboxes to power our supervised HITL intelligence workflows.",
    partner_nvidia_name: "NVIDIA",
    partner_nvidia_desc: "Leveraging NVIDIA GPU compute and TensorRT acceleration for private model inference and high-speed multi-modal OCR extraction.",
    partner_data_name: "Snowflake & PostgreSQL",
    partner_data_desc: "Building on ACID-compliant relational databases and vector storage (pgvector) for grounded enterprise RAG and high-throughput pipelines.",
    partner_cloud_name: "Cloudflare & Docker",
    partner_cloud_desc: "Securing containerized microservices with enterprise edge protection, zero-trust API gateways, and strict mTLS encryption.",

    // Section 8: Governance
    gov_eyebrow: "SAFETY LAWS",
    gov_title: "Deterministic Boundaries for Production AI",
    gov_title_p1: "Safety",
    gov_title_p2: "Laws",
    gov_subtitle: "Deterministic boundaries, advisory sandboxing, and mandatory operator sign-off for critical operations.",
    gov_badge1: "Advisory Isolation",
    gov_badge2: "Operator Authorization",
    gov_badge3: "Schema Validation",
    gov_card1_title: "Advisory Sandboxing",
    gov_card1_desc: "Model layers generate candidate diffs with zero direct execution privileges over operational databases.",
    gov_card2_title: "Mandatory Sign-Off",
    gov_card2_desc: "Every state change requires explicit confirmation by an authenticated operator with domain authority.",
    gov_card3_title: "Schema Guardrails",
    gov_card3_desc: "All inputs and outputs are validated against strict typed schemas to eliminate error propagation.",

    // Section 8: Contact
    contact_eyebrow: "TECHNICAL INTAKE & ABU DHABI HQ",
    contact_headline: "Build Resilient, Compliant Systems",
    contact_title_p1: "Build Resilient,",
    contact_title_p2: "Compliant Systems",
    contact_subhead: "Connect directly with our senior architects in Abu Dhabi to audit workflows and deploy supervised intelligence pipelines.",
    contact_whatsapp: "WhatsApp",
    contact_copied: "Copied!",
    hq_badge: "Mussafah M-11, Emirate of Abu Dhabi, UAE",
    form_name: "Full Name",
    form_org: "Organization",
    form_email: "Work Email",
    form_phone: "Phone Number",
    form_service: "Architecture / Service of Interest",
    form_brief: "Project Brief",
    form_opt1: "Custom Enterprise Software",
    form_opt2: "DocuVerify Engine™",
    form_opt3: "SynapseSearch™",
    form_opt4: "FET-ARC-01 ERP Bridge",
    form_opt5: "FET-ARC-02 HITL Console",
    form_opt6: "FET-ARC-03 Private RAG",
    form_opt7: "FET-ARC-04 Command Portal",
    form_submit_email: "Initiate Technical Intake →\uFE0E Open Pre-Filled Email",
    form_submit_wa: "Send Brief via WhatsApp (+971 50 680 2332)",

    // Footer
    footer_entity: "FLAMINGO EMERGING TECHNOLOGIES - L.L.C - S.P.C",
    footer_jurisdiction_label: "Jurisdiction",
    footer_jurisdiction: "Emirate of Abu Dhabi, United Arab Emirates",
    footer_address_label: "Address",
    footer_address: "Mussafah M-11, Abu Dhabi, United Arab Emirates",
    footer_reg_label: "Unified Reg. No. (رقم التسجيل الموحد)",
    footer_lic_label: "Unified Licence No. (رقم الرخصة الموحد)",
    footer_phone_label: "Phone",
    footer_email_label: "Email",
    footer_rights: "All rights reserved.",
    site_footer_copy: "© 2026 Flamingo Emerging Technologies. Engineered for strict data sovereignty.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_security: "Security",
  },
  ar: {
    // Floating Pill Navbar & Search
    nav_capabilities: "التخصصات الأساسية",
    nav_products: "المحركات الخاصة",
    nav_blueprints: "المخططات الهندسية",
    nav_technology: "البنية التقنية",
    nav_partners: "الشركاء",
    nav_governance: "قوانين الأمان",
    nav_contact: "تواصل معنا",
    nav_search: "بحث",
    nav_cta: "تواصل معنا",
    card_more_details: "التفاصيل الكاملة ↗\uFE0E",
    card_close: "إغلاق ×",
    intro_scroll_indicator: "[ مرّر للأسفل للتهيئة ↓\uFE0E ]",

    // Interactive Expandable Prompts
    prompt_desktop_brief: "[ مرّر المؤشر للاطلاع على تفاصيل القدرات الهندسية ↗\uFE0E ]",
    prompt_mobile_brief: "[ اضغط لعرض تفاصيل القدرات الهندسية + ]",
    prompt_desktop_spec: "[ مرّر المؤشر لفحص المواصفات التقنية الكاملة ↗\uFE0E ]",
    prompt_mobile_spec: "[ اضغط لقراءة المواصفات الكاملة + ]",
    card_close_spec: "إغلاق المواصفات ×",

    // Hero & Telemetry
    hero_badge: "أنظمة المؤسسات وتنسيق العمليات الإشرافية",
    hero_headline: "نبني ونبتكر كل ما تتطلبه عملياتكم التقنية",
    hero_headline_p1: "نبني ونبتكر",
    hero_headline_p2: "كل ما تتطلبه عملياتكم التقنية",
    hero_subhead: "من منصات المؤسسات الحرجة والأنظمة المدمجة وأجهزة التتبع للسيارات، إلى رادارات مراقبة السرعة الدقيقة والذكاء الاصطناعي الإشرافي—نحول التحديات الهندسية المعقدة إلى واقع تشغيلي ملموس.",
    hero_brief_lead: "لماذا تختار قيادات الصناعة فلامينغو: تمكن هندسي شامل يشمل العتاد الصلب، وقياسات الأساطيل والرادار، وتصنيف البيانات، والذكاء الاصطناعي الحتمي...",
    hero_adv1_title: "ملكية متكاملة للعتاد والبرمجيات",
    hero_adv1_desc: "ندمج المتحكمات الدقيقة، وبروتوكولات CAN-bus للسيارات، ورادارات السرعة وحساسات LiDAR، مع لوحات التحكم السحابية تحت مظلة واحدة.",
    hero_adv2_title: "ذكاء اصطناعي مدمج على الحافة",
    hero_adv2_desc: "ندمج الرؤية الحاسوبية وقراءة لوحات المركبات (ANPR) وضبط السرعات والذكاء الاصطناعي الإشرافي مباشرة في الأجهزة وسير العمل المؤسسي.",
    hero_adv3_title: "تصنيف وتوفير البيانات المنظمة",
    hero_adv3_desc: "تصنيف عالي النقاء لبيانات الحساسات والمركبات والمستندات المؤسسية بدقة مخططات تبلغ 99.9%.",
    hero_adv4_title: "هندسة موثوقة بمعايير أبوظبي",
    hero_adv4_desc: "مسؤولية محلية داخل دولة الإمارات، وملكية فكرية كاملة للعميل، وبوابات سلامة تشغيلية بإشراف بشري صارم.",
    hero_adv1: "ملكية متكاملة للعتاد والبرمجيات: ندمج المتحكمات الدقيقة، وبروتوكولات CAN-bus للسيارات، ورادارات السرعة وحساسات LiDAR، مع لوحات التحكم السحابية تحت مظلة واحدة.",
    hero_adv2: "ذكاء اصطناعي مدمج على الحافة: ندمج الرؤية الحاسوبية وقراءة لوحات المركبات (ANPR) وضبط السرعات والذكاء الاصطناعي الإشرافي مباشرة في الأجهزة وسير العمل المؤسسي.",
    hero_adv3: "تصنيف وتوفير البيانات المنظمة: تصنيف عالي النقاء لبيانات الحساسات والمركبات والمستندات المؤسسية بدقة مخططات تبلغ 99.9%.",
    hero_adv4: "هندسة موثوقة بمعايير أبوظبي: مسؤولية محلية داخل دولة الإمارات، وملكية فكرية كاملة للعميل، وبوابات سلامة تشغيلية بإشراف بشري صارم.",
    hero_cta_primary: "جدولة إحاطة",
    hero_cta_secondary: "اتصال مباشر: 2332 680 50 971+",
    console_title: "القياس عن بُعد للنظام // بث مباشر",
    console_node_input: "تدفق المدخلات",
    console_node_model: "نموذج معزول",
    console_node_signoff: "مصادقة المشغل",
    stat_unmonitored: "كتابات قاعدة البيانات غير المراقبة:",
    stat_latency: "زمن استجابة المسار:",

    // Marquee
    marquee_label: "مُصمَّم للتوافق مع معايير السحابة والذكاء الاصطناعي للمؤسسات",

    // Section 3: Core Disciplines
    cap_eyebrow: "التخصصات الأساسية",
    cap_title: "خدمات حوسبة مؤسسية واستشارات ذكاء اصطناعي مرخصة",
    cap_title_p1: "التخصصات",
    cap_title_p2: "الأساسية",
    cap_subtitle: "خطوط أنابيب أحداث موزعة، واجهات برمجة تطبيقات بمبدأ الثقة الصفرية، وتكامل ذكاء اصطناعي خاضع للإشراف للعمليات الحرجة.",
    cap_card1_title: "العتاد المدمج، وبرمجيات المركبات، وأنظمة مراقبة السرعة",
    cap_card1_desc: "برمجيات مدمجة مخصصة، برامج القياس عن بُعد للسيارات، أجهزة رادار وبصرية لرصد السرعة، ووحدات كاميرات الذكاء الاصطناعي المصممة للموثوقية الميدانية العالية.",
    cap_card2_title: "برمجيات المؤسسات، واجهات API الموزعة ومنصات القيادة",
    cap_card2_desc: "مسارات معالجة بيانات فائقة التدفق، بوابات برمجية قائمة على انعدام الثقة، بوابات ويب وتطبيقات ذكية، وجسور تكامل ERP/CRM (SAP, Oracle, Odoo) للعمل بلا توقف.",
    cap_card3_title: "تصنيف وهيكلة وتوفير البيانات المؤسسية",
    cap_card3_desc: "جمع وتصنيف متعدد الوسائط، وترميز بشري موثق، وتوفير مجموعات بيانات نقية لتحليلات المؤسسات وتدريب نماذج الذكاء الاصطناعي عالية الدقة.",
    cap_card4_title: "أنظمة الذكاء الاصطناعي التطبيقي، استرجاع RAG والتنسيق الإشرافي",
    cap_card4_desc: "وكلاء ذكاء اصطناعي للإنتاج، بحث مؤسسي مؤصل، وأتمتة خاضعة للمشرف البشري (HITL) تعزز منظومتكم البرمجية وأجهزتكم بأعلى معايير الأمان.",
    cap_why_title: "لماذا تختار فلامينغو:",
    cap_c1_t1: "هندسة المركبات والقياس عن بُعد للأساطيل",
    cap_c1_d1: "تشخيص أعطال المركبات عبر CAN-bus وOBD-II، تتبع مباشر للأساطيل عبر GPS/GSM، بروتوكولات V2X، وبرمجيات التحكم المدمجة بالمركبة.",
    cap_c1_t2: "أجهزة مراقبة السرعة والضبط المروري",
    cap_c1_d2: "تكامل رادارات دوبلر عالية التردد، قراءة لوحات المركبات بالذكاء الاصطناعي (ANPR/LPR)، وحدات رصد متعددة المسارات، وحاويات ميدانية مقاومة لحرارة الإمارات العالية.",
    cap_c1_t3: "ذكاء اصطناعي مدمج على الحافة",
    cap_c1_d3: "استدلال عصبي فوري بأقل من 10 مللي ثانية (NVIDIA Jetson / ARM Cortex / FPGA) لمعالجة الفيديو والحساسات محلياً قبل إرسال التنبيهات المشفرة لغرف العمليات.",
    cap_c1_why: "على عكس وكالات البرمجيات فقط، نحن نجمع بين الحساسات العتادية الفعلية، البرمجيات المدمجة C/C++/Rust، ومراكز القيادة السحابية في منظومة موحدة.",
    cap_c2_t1: "الخدمات المصغرة الموزعة",
    cap_c2_d1: "بنى معمارية موجهة بالأحداث باستخدام Go وPython وNode.js وApache Kafka قادرة على استيعاب أكثر من 50,000 حدث عتادي أو مالي متزامن في الثانية.",
    cap_c2_t2: "العمليات المعززة بالذكاء الاصطناعي",
    cap_c2_d2: "اكتشاف ذكي ومدمج للشذوذ، توجيه مؤتمت، وتنبيهات صيانة تنبؤية منسوجة مباشرة في لوحات التحكم التشغيلية اليومية.",
    cap_c2_why: "زمن استجابة واجهات البرمجة أقل من 15 مللي ثانية، عقود بيانات مطابقة للمخططات بنسبة 100%، ودعم كامل للغتين العربية والإنجليزية.",
    cap_c3_t1: "تصنيف البيانات متعدد الوسائط",
    cap_c3_d1: "تصنيف مؤتمت وموثق بشرياً لصور المرور والمركبات، سجلات الرادار، العقود القانونية العربية والإنجليزية، السجلات المالية، والقياسات الصناعية.",
    cap_c3_t2: "توفير مجموعات بيانات عالية النقاء",
    cap_c3_d2: "إزالة التكرار، حجب البيانات الحساسة PII، تنسيق المخططات الصارمة (JSON/Parquet/COCO)، وانتقاء الحالات الحدية لتدريب نماذج الذكاء بنقاء 99.9%.",
    cap_c3_t3: "خطوط ترميز مدعومة بالذكاء الاصطناعي",
    cap_c3_d3: "يقوم ذكاؤنا الاصطناعي الداخلي بالتصنيف الأولي بينما يتحقق المتخصصون البشريون من الحالات الدقيقة—مما يقلل وقت إعداد البيانات بنسبة 70%.",
    cap_c3_why: "معالجة بيانات ممتثلة تماماً لمعايير دولة الإمارات، معايير جودة صارمة، وتوفير جاهز للاستهلاك المباشر عبر واجهات API.",
    cap_c4_t1: "ذكاء اصطناعي مدمج في كل نقطة تشغيلية",
    cap_c4_d1: "لا نبني روبوتات محادثة معزولة—بل ندمج الذكاء الاصطناعي الحتمي في أنظمة ERP وبوابات العملاء وكاميرات الفحص ومسارات المستندات.",
    cap_c4_t2: "حواجز أمان لمنع الهلوسة",
    cap_c4_d2: "استرجاع معزز بالسياق (RAG) معزول، مخرجات بمخططات محددة صارمة، وبوابات موافقة بشرية إلزامية قبل أي تعديل على قواعد البيانات أو الأجهزة.",
    cap_c4_why: "خيارات نشر سحابية سيادية داخل دولة الإمارات أو خوادم محلية خاصة مع إمكانية تدقيق مشفرة بنسبة 100%.",

    // Section 4: Technology & Engineering Expertise
    tech_eyebrow: "التقنيات والخبرات الهندسية",
    tech_title: "حزم البرمجيات المؤسسية والقدرات التخصصية",
    tech_title_p1: "المنظومة",
    tech_title_p2: "التقنية",
    tech_subtitle: "أطر عمل مدعمة للإنتاج، وبنى تحتية موزعة، وحزم ذكاء اصطناعي سيادية مصممة لصفر تنفيذ غير مراقب.",
    tech_label_stack: "حزمة الإنتاج والمكتبات المعتمدة",
    tech_label_capabilities: "التخصصات الهندسية ومعايير الدقة",
    tech_cta: "طلب استشارة في هذا المجال ←\uFE0E",
    tab_a: "الويب والواجهات",
    tab_b: "الأنظمة الخلفية وAPI",
    tab_c: "تطبيقات الهاتف والأنظمة",
    tab_d: "الذكاء الاصطناعي وHITL",
    tab_e: "البيانات وقواعد البيانات",
    tab_f: "السحابة وDevOps",
    tab_g: "الأمن السيبراني",
    tab_h: "المراقبة الفورية SRE",
    tab_i: "برمجيات الوسيطة ERP",
    tab_j: "ضمان الجودة والتحقق",
    tab_k: "ذكاء الأعمال والرصد",
    tab_l: "الاستشارات المعمارية",

    // Section 5: Proprietary Engines & Hardware/Software Systems
    prod_eyebrow: "أنظمة الأجهزة والبرمجيات المطوّرة داخلياً",
    prod_title: "أنظمة الأجهزة والبرمجيات المطوّرة داخلياً",
    prod_title_p1: "أنظمة الأجهزة",
    prod_title_p2: "والبرمجيات المطوّرة داخلياً",
    prod_subtitle: "أجهزة رادار مطوّرة داخلياً، وأنظمة رؤية مدعومة بالذكاء الاصطناعي الطرفي، ووحدات القياس عن بُعد للمركبات، ومحركات برمجية سيادية للمؤسسات.",
    proj_showcase_title: "مشاريع الأجهزة والأنظمة المضمنة المطوّرة داخلياً",
    proj_showcase_desc: "أجهزة رادار تجارية، ووحدات قياس عن بُعد للسيارات، وحمولات رؤية ذكية للمسيّرات، وحزم برمجية مؤسسية مطوّرة بالكامل داخلياً.",
    proj_filter_all: "جميع الأنظمة",
    proj_filter_hardware: "الأجهزة والأنظمة المضمنة",
    proj_filter_automotive: "أنظمة السيارات والرادار",
    proj_filter_software: "البرمجيات والذكاء الاصطناعي",
    proj1_badge: "أجهزة خاصة + ذكاء اصطناعي طرفي",
    proj1_title: "وحدة رادار ذكية لمراقبة السرعة والتعرّف الآلي على لوحات المركبات",
    proj1_lead: "وحدة رادار دوبلر وحاوية كاميرا بصرية مزوّدة بالذكاء الاصطناعي الطرفي، مطوّرتان داخلياً لرصد سرعات المركبات عبر مسارات متعددة والتعرّف الفوري على لوحاتها آلياً.",
    proj1_spec1_title: "حاوية صناعية متينة بمعيار IP67",
    proj1_spec1_desc: "حاوية صناعية متينة بمعيار IP67 للحماية من الغبار والماء.",
    proj1_spec2_title: "رادار دوبلر بالموجات المليمترية",
    proj1_spec2_desc: "رادار دوبلر يعمل بالموجات المليمترية.",
    proj1_spec3_title: "برمجيات ثابتة مخصصة C++/Rust",
    proj1_spec3_desc: "برمجيات ثابتة مخصصة بلُغتي C++ وRust، تستهدف تنفيذ التعرّف العصبي على اللوحات في أقل من 8 مللي ثانية على معالج SoC مضمّن.",
    proj1_spec4_title: "بث مشفر عبر شبكة 5G",
    proj1_spec4_desc: "بث بيانات القياس عن بُعد المشفّرة عبر شبكة 5G لإرسال بيانات المخالفات إلى مركز التحكم.",
    proj2_badge: "أجهزة السيارات + المنصة السحابية",
    proj2_title: "وحدة القياس عن بُعد وتشخيص أساطيل المركبات عبر ناقل CAN",
    proj2_lead: "وحدة أجهزة قياس عن بُعد سهلة التركيب داخل المركبات، مرتبطة بمنصة سحابية لإدارة الأساطيل وقراءة بيانات المحرك والسرعة وتشخيصات السلامة لحظياً عبر CAN-Bus وOBD-II.",
    proj2_spec1_title: "لوحة دوائر إلكترونية ووحدة تحكم دقيقة",
    proj2_spec1_desc: "لوحة دوائر إلكترونية مخصصة ووحدة تحكم دقيقة.",
    proj2_spec2_title: "بروتوكولات المركبات الثقيلة",
    proj2_spec2_desc: "التكامل مع بروتوكولات CAN-Bus وJ1939 الخاصة بالمركبات الثقيلة.",
    proj2_spec3_title: "تحديد المواقع ومستشعر IMU سداسي المحاور",
    proj2_spec3_desc: "تحديد المواقع عبر GPS/GNSS ومستشعر قصور ذاتي سداسي المحاور.",
    proj2_spec4_title: "مركز تحكم الأساطيل المباشر",
    proj2_spec4_desc: "مركز تحكم مباشر عبر الويب والهاتف المحمول لتتبّع المسارات والتنبيه إلى تجاوز السرعة ودعم الصيانة التنبؤية.",
    proj3_badge: "الرؤية المضمنة + الروبوتات",
    proj3_title: "نظام الطائرات المسيّرة والفحص البصري الصناعي الذاتي",
    proj3_lead: "أجهزة رؤية حاسوبية منخفضة التأخير تعمل على متن الطائرة، مع برمجيات تحكم أرضية لأتمتة فحص البنية التحتية وتصنيف العيوب.",
    proj3_spec1_title: "لوحة حوسبة طرفية مدمجة",
    proj3_spec1_desc: "لوحة حاملة خفيفة الوزن للحوسبة الطرفية.",
    proj3_spec2_title: "كاميرات بصرية وحرارية متزامنة",
    proj3_spec2_desc: "كاميرات بصرية وحرارية متزامنة.",
    proj3_spec3_title: "بيانات قياس عن بُعد MAVLink",
    proj3_spec3_desc: "بيانات قياس عن بُعد فورية باستخدام بروتوكول MAVLink.",
    proj3_spec4_title: "ذكاء اصطناعي لرصد الشقوق والتسريبات",
    proj3_spec4_desc: "نظام ذكاء اصطناعي خاضع للإشراف لاكتشاف الشقوق الدقيقة والتسرّبات الحرارية.",
    proj4_badge: "منصة برمجية خاصة",
    proj4_title: "حزمة الذكاء الاصطناعي السيادي وتصنيف المستندات والبيانات للمؤسسات",
    proj4_lead: "منصة برمجية موحّدة للمؤسسات تجمع بين DocuVerify™ وSynapseSearch™ وتصنيف البيانات ثنائي اللغة عالي السرعة لدعم العمليات الحكومية وعمليات الشركات.",
    proj4_spec1_title: "خدمات مصغرة عالية التزامن",
    proj4_spec1_desc: "خدمات مصغّرة عالية التزامن باستخدام Go وPython.",
    proj4_spec2_title: "لوحة تحكم تنفيذية ثنائية اللغة",
    proj4_spec2_desc: "لوحة تحكم تنفيذية ثنائية اللغة، عربية وإنجليزية، مبنية باستخدام Next.js.",
    proj4_spec3_title: "موصلات ERP بمبدأ انعدام الثقة",
    proj4_spec3_desc: "موصلات لأنظمة ERP مثل SAP وOracle وOdoo وفق مبدأ انعدام الثقة.",
    proj4_spec4_title: "تعرف ضوئي وبحث RAG معزول",
    proj4_spec4_desc: "التعرّف الضوئي الآلي على الحروف (OCR) والبحث المعزّز بالاسترجاع (RAG) مع عزل السياقات.",
    dv_tagline: "استخراج المستندات المنظمة",
    dv_badge: "استشاري وخاضع للإشراف",
    dv_desc: "التعرف الضوئي متعدد الوسائط وتحليل المخططات الصارمة للعقود والفواتير. الشذوذات منخفضة الثقة تُوجَّه إلى لوحة تحقق المشغل للمصادقة.",
    dv_signoff: "محاكاة مصادقة المشغل",
    dv_invoice_title: "فاتورة تجارية",
    dv_inv_vendor: "المورّد:",
    dv_inv_date: "التاريخ:",
    dv_inv_amount: "المبلغ:",
    dv_inv_terms: "الشروط:",
    dv_inv_taxid: "الرقم الضريبي:",
    dv_extracted: "الحقول المستخرجة",
    ss_tagline: "استرجاع مؤسسي مؤصل",
    ss_badge: "استشاري للقراءة فقط",
    ss_desc: "بحث معرفي عصبي معزول السياق مع إسناد مستندات بروابط تشعبية. يعمل بشكل صارم كمستشار للقراءة فقط بدون صلاحيات كتابة.",
    ss_placeholder: "البحث في قاعدة المعرفة المؤسسية...",
    ss_query1: "ما هي سياسة الاحتفاظ بالبيانات لدينا؟",
    ss_query2: "قائمة تأهيل الموظفين الجدد؟",
    ss_query3: "بروتوكول الاستجابة للحوادث؟",
    ss_click_prompt: "انقر على استعلام أعلاه لرؤية الاسترجاع المؤصل ←\uFE0E",
    ss_lock: "استشاري للقراءة فقط // صلاحيات كتابة قاعدة البيانات: 0",
    dv_spec_title1: "استخراج متعدد الوسائط واستيعاب سجلات الحساسات",
    dv_spec_desc1: "استخراج وتصنيف والتحقق من سجلات القياس عن بُعد للمركبات ومخالفات السرعة والفواتير والعقود القانونية بسرعة فائقة.",
    dv_spec_title2: "بوابة المصادقة البشرية الإلزامية",
    dv_spec_desc2: "أي درجة ثقة أقل من 98.5% تعزل المعاملة تلقائياً إلى قائمة تدقيق المشغل البشري لمنع أي تلف للبيانات أو السجلات.",
    dv_spec_why: "يجمع بين التصنيف العصبي العميق للمستندات وعزل قواعد البيانات بدون امتيازات كتابة، ممتثل تماماً للوائح الإمارات.",
    ss_spec_title1: "استرجاع معرفي سيادي وإسناد للمصادر",
    ss_spec_desc1: "فهرسة pgvector معزولة للكتيبات الهندسية، وسجلات امتثال سلامة المركبات، والسياسات الإدارية مع روابط توثيق قابلة للنقر.",
    ss_spec_title2: "صفر صلاحيات كتابة على قواعد البيانات",
    ss_spec_desc2: "يعمل المحرك حصرياً في وضع القراءة فقط، مما يضمن استحالة تعديل جداول قواعد البيانات أو تنفيذ أوامر غير مصرح بها.",
    ss_spec_why: "تأصيل حتمي بدون هلوسة مع تسجيل تدقيق مشفر وسيادة تامة للبيانات داخل دولة الإمارات.",

    // Section 6: Blueprints
    bp_eyebrow: "المراجع المعمارية ومخططات الحلول",
    bp_title: "تصاميم أنظمة مُهندسة مسبقاً ومخططات حلول",
    bp_title_p1: "المخططات",
    bp_title_p2: "المعمارية للحلول",
    bp_subtitle: "تصاميم أنظمة وبنى برمجيات مخصصة جاهزة للتخصيص والنشر لمؤسستك وفق المعايير الإماراتية.",
    bp_filter_all: "جميع المخططات",
    bp_filter_enterprise: "أنظمة المؤسسات",
    bp_filter_ai: "ذكاء اصطناعي خاضع للإشراف",
    bp_filter_cloud: "السحابة الخاصة",
    bp_filter_portal: "بوابات تنفيذية",
    bp1_badge: "مخطط مرجعي // أنظمة المؤسسات",
    bp1_title: "شبكة وسيطة قائمة على انعدام الثقة لأنظمة ERP والأساطيل وإنترنت الأشياء",
    bp1_desc: "ربط أنظمة ERP وبيانات تتبع المركبات والأجهزة الميدانية ببوابات السحابة تحت تحقق صارم من مخططات JSON واكتشاف الشذوذ الذكي.",
    bp2_badge: "مخطط مرجعي // تنسيق HITL ومراقبة السرعة",
    bp2_title: "نظام قيادة المرور الذكي، مراقبة السرعة والذكاء الاصطناعي على الحافة",
    bp2_desc: "مراقبة فورية للسرعة عبر الرادار والكاميرات، تصنيف المركبات واللوحات (ANPR)، وإصدار تنبيهات المخالفات المؤتمتة مع تحقق المشغل البشري.",
    bp3_badge: "مخطط مرجعي // ذكاء اصطناعي سيادي وتصنيف البيانات",
    bp3_title: "مسار تصنيف البيانات المؤسسية واسترجاع RAG السيادي",
    bp3_desc: "استيعاب عالي السرعة، تصنيف وترميز مؤتمت للبيانات، ومحرك بحث عصبي خاص ومستضاف داخل دولة الإمارات.",
    bp4_badge: "مخطط مرجعي // منصة قيادة متكاملة",
    bp4_title: "بوابة القيادة والرصد التنفيذي الفوري متعددة المنصات",
    bp4_desc: "مركز تحكم موحد للويب والهاتف يجمع قراءات الحساسات الحية، ومؤشرات الأداء للأساطيل، والتحليلات المدعومة بالذكاء الاصطناعي.",
    bp1_spec_t1: "استيعاب القياس عن بُعد وجسر الأنظمة القديمة",
    bp1_spec_d1: "ربط تدفقات Odoo وSAP وOracle وتدفقات OBD-II/CAN للمركبات عبر مخزن Kafka موحد مع تطبيع تلقائي لصيغ البيانات.",
    bp1_spec_t2: "تشفير mTLS 1.3 وبيئات انعدام الثقة",
    bp1_spec_d2: "شهادات مؤقتة ورموز عتادية تتحقق من كل حزمة بيانات واردة قبل تمريرها لشبكة الخدمات المصغرة الداخلية.",
    bp1_spec_why: "يجمع بين استقرار أنظمة ERP المؤسسية الثقيلة واستيعاب إنترنت الأشياء للمركبات مع التنفيذ المحلي في أبوظبي.",
    bp2_spec_t1: "كشف السرعة بتقنية الرادار المزدوج والبصري",
    bp2_spec_d1: "يجمع بين مصفوفات رادار دوبلر 24GHz/77GHz وكاميرات الغالق فائق السرعة، بدقة قياس أقل من 0.5 كم/ساعة عبر مسارات متعددة.",
    bp2_spec_t2: "لوحة تحكم التحقق البشري من الحوادث HITL",
    bp2_spec_d2: "يتم تشفير المخالفات المرصودة وعرضها على مشغلي الضبط المعتمدين مع لقطات فائقة الدقة للوحات وبيانات تفصيلية قبل الاعتماد.",
    bp2_spec_why: "مقاومة فائقة لدرجات حرارة الإمارات القصوى (حتى 55 مئوية)، معايرة أجهزة محلية، وتخزين مؤقت على الحافة يمنع فقدان البيانات.",
    bp3_spec_t1: "ترميز المخططات الآلي",
    bp3_spec_d1: "تحويل ملفات PDF غير المنظمة ومسوحات العقود وسجلات الحساسات إلى مجموعات بيانات Parquet/JSON محددة الأنواع بدقة دلالية 99.9%.",
    bp3_spec_t2: "بيئة شعاعية سيادية معزولة لمستأجري الإمارات",
    bp3_spec_d2: "التضمينات والفهارس تقيم حصرياً داخل السحابة السيادية للعميل أو الخوادم المحلية، مما يمنع التلوث المتبادل للبيانات.",
    bp3_spec_why: "متوافق بالكامل مع المرسوم بقانون اتحادي رقم 45 لسنة 2021 بشأن حماية البيانات الشخصية مع سجلات إثبات مشفرة.",
    bp4_spec_t1: "شبكة قياس عن بُعد للأجهزة بزمن استجابة فائق السرعة",
    bp4_spec_d1: "دمج حالات أجهزة الرادار الحية، متجهات GPS للأساطيل، وارتفاعات أخطاء واجهات البرمجة في رسوم بيانية تفاعلية بأقل من 50 مللي ثانية.",
    bp4_spec_t2: "حوكمة تنفيذية ثنائية اللغة",
    bp4_spec_d2: "دعم متقن لاتجاه الكتابة العربي من اليمين إلى اليسار والإنجليزية مصمم لمجالس الوزارات والإدارات التنفيذية العليا.",
    bp4_spec_why: "بنية كود برمجي موحدة تشغّل في نفس الوقت تطبيقات الويب وiOS وAndroid للقيادات التنفيذية.",
    bp_cta: "طلب نشر مخصص ←\uFE0E",

    // Section 7: Partners
    nav_partners: "الشركاء",
    partners_title_p1: "شركاء",
    partners_title_p2: "المنظومة التقنية",
    partners_subtitle: "نهندس وننشر أنظمة المؤسسات المدعومة من رواد البنية التحتية السحابية والذكاء الاصطناعي والأمن السيبراني عالمياً.",
    partner_aws_name: "أمازون ويب سيرفيسز (AWS)",
    partner_aws_desc: "استخدام البنية التحتية السحابية لـ AWS الإمارات (me-central-1) للاستضافة المتوافقة مع السيادة، والحوسبة المرنة، وعناقيد كوبرنيتس المدارة.",
    partner_azure_name: "مايكروسوفت أزور (Azure)",
    partner_azure_desc: "دمج هوية مايكروسوفت أزور المؤسسية (Entra ID) والخدمات السحابية الهجينة للمصادقة القائمة على انعدام الثقة والحوكمة المؤسسية.",
    partner_frontier_name: "أوبن إيه آي وأنثروبيك (OpenAI & Anthropic)",
    partner_frontier_desc: "نشر النماذج التأسيسية الرائدة داخل بيئات معزولة للقراءة فقط لتشغيل مسارات الذكاء الإشرافي والتأكيد البشري (HITL).",
    partner_nvidia_name: "إنفيديا (NVIDIA)",
    partner_nvidia_desc: "الاستفادة من حوسبة وحدات معالجة الرسوميات وتسريع TensorRT للاستدلال الخاص واستخراج البيانات البصرية الفائقة السرعة.",
    partner_data_name: "سنوفليك وبوستغريس (Snowflake & PostgreSQL)",
    partner_data_desc: "البناء على قواعد بيانات علائقية متوافقة مع معايير ACID والتخزين الشعاعي (pgvector) لتوليد الاسترجاع المعزز (RAG) وتدفقات البيانات العالية.",
    partner_cloud_name: "كلودفلير ودوكر (Cloudflare & Docker)",
    partner_cloud_desc: "تأمين الخدمات المصغرة بالحاويات مع حماية الحافة المؤسسية، وبوابات واجهات البرمجة الصفرية الثقة، وتشفير mTLS الصارم.",

    // Section 8: Governance
    gov_eyebrow: "قوانين السلامة",
    gov_title: "حدود حتمية للذكاء الاصطناعي في بيئة الإنتاج",
    gov_title_p1: "قوانين",
    gov_title_p2: "السلامة والحوكمة",
    gov_subtitle: "العزل الاستشاري، المصادقة الإلزامية من المشغل البشري، وحواجز المخططات الصارمة.",
    gov_badge1: "عزل استشاري",
    gov_badge2: "تفويض المشغل",
    gov_badge3: "التحقق من المخطط",
    gov_card1_title: "الحماية الاستشارية",
    gov_card1_desc: "تولّد طبقات النموذج اقتراحات بدون أي صلاحيات تنفيذ مباشرة على قواعد البيانات التشغيلية.",
    gov_card2_title: "المصادقة الإلزامية",
    gov_card2_desc: "كل تغيير في الحالة يتطلب تأكيداً صريحاً من مشغل معتمد يمتلك صلاحية النطاق.",
    gov_card3_title: "حواجز المخطط",
    gov_card3_desc: "يتم التحقق من جميع المدخلات والمخرجات وفق مخططات مصنفة صارمة لمنع انتشار الأخطاء.",

    // Section 8: Contact
    contact_eyebrow: "الاستقبال التقني والمقر الرئيسي في أبوظبي",
    contact_headline: "بناء أنظمة مرنة ومتوافقة",
    contact_title_p1: "بناء أنظمة",
    contact_title_p2: "مرنة وممتثلة",
    contact_subhead: "تواصل مباشرة مع كبار المهندسين المعماريين لدينا في أبوظبي لتدقيق سير العمل ونشر خطوط الذكاء الخاضعة للإشراف.",
    contact_whatsapp: "واتساب",
    contact_copied: "تم النسخ!",
    hq_badge: "مصفح M-11، إمارة أبوظبي، الإمارات العربية المتحدة",
    form_name: "الاسم الكامل",
    form_org: "المؤسسة",
    form_email: "البريد الإلكتروني للعمل",
    form_phone: "رقم الهاتف",
    form_service: "البنية / الخدمة المطلوبة",
    form_brief: "ملخص المشروع",
    form_opt1: "برمجيات مؤسسية مخصصة",
    form_opt2: "DocuVerify Engine™",
    form_opt3: "SynapseSearch™",
    form_opt4: "FET-ARC-01 ERP Bridge",
    form_opt5: "FET-ARC-02 HITL Console",
    form_opt6: "FET-ARC-03 Private RAG",
    form_opt7: "FET-ARC-04 Command Portal",
    form_submit_email: "بدء الاستقبال التقني →\uFE0E فتح بريد مُعبأ مسبقاً",
    form_submit_wa: "إرسال الملخص عبر واتساب (2332 680 50 971+)",

    // Footer
    footer_entity: "فلامنجو للتقنيات الناشئة - ذ.م.م - ش.ش.و",
    footer_jurisdiction_label: "الاختصاص القضائي",
    footer_jurisdiction: "إمارة أبوظبي، الإمارات العربية المتحدة",
    footer_address_label: "العنوان",
    footer_address: "مصفح M-11، أبوظبي، الإمارات العربية المتحدة",
    footer_reg_label: "رقم التسجيل الموحد",
    footer_lic_label: "رقم الرخصة الموحد",
    footer_phone_label: "الهاتف",
    footer_email_label: "البريد الإلكتروني",
    footer_rights: "جميع الحقوق محفوظة.",
    site_footer_copy: "© 2026 فلامنجو للتقنيات الناشئة. صُممت لسيادة صارمة على البيانات.",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الخدمة",
    footer_security: "الأمان",
  }
};

// ── 12-CATEGORY TECHNOLOGY SHOWCASE DATASET ───────────────────
const techDisciplinesData = {
  'cat-a': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY A',
    badgeAr: 'تخصص مؤسسي // الفئة أ',
    title: 'Web & Frontend Systems',
    titleAr: 'أنظمة الويب والواجهات الأمامية',
    service: 'Web & Frontend Systems',
    desc: 'Deterministic, type-safe client architectures utilizing Next.js, React, and TypeScript. Zero runtime layout shifts, sub-second First Contentful Paint, and responsive bilingual LTR/RTL design systems.',
    descAr: 'بنى واجهات برمجية حتمية ومحددة الأنواع باستخدام Next.js وReact وTypeScript. خالية من انزياحات التخطيط المفاجئة، وزمن عرض أول للمحتوى أقل من ثانية، مع دعم ثنائي اللغة LTR/RTL فائق السلاسة.',
    stack: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Vite', icon: 'vite' },
      { name: 'Webpack', icon: 'webpack' },
      { name: 'PWA Standards', icon: 'pwa' },
      { name: 'Web Components', icon: 'webcomponents' },
    ],
    specs: [
      'Deterministic SSR & ISR hydration pipelines with zero hydration mismatches',
      'Full WCAG 2.1 AAA accessibility and responsive bilingual LTR/RTL typography',
      'Micro-frontend module federation with isolated memory footprints',
      'Strict TypeScript strictNullChecks and automated bundle-size enforcement'
    ],
    specsAr: [
      'خطوط أنابيب هيدرة SSR وISR حتمية بدون أي تعارض في حالة المكونات',
      'امتثال كامل لمعايير سهولة الوصول WCAG 2.1 AAA وطباعة متوافقة مع العربية والإنجليزية',
      'تكامل المكونات الجزئية Micro-frontends مع عزل كامل لاستهلاك الذاكرة',
      'تحقق برمجي صارم بواسطة TypeScript مع فرض قيود آلية على أحجام الحزم'
    ],
    visualType: 'vitals'
  },
  'cat-b': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY B',
    badgeAr: 'تخصص مؤسسي // الفئة ب',
    title: 'Backend, Embedded APIs & High-Throughput Engines',
    titleAr: 'الأنظمة الخلفية، واجهات API المدمجة ومحركات التدفق العالي',
    service: 'Backend & High-Throughput APIs',
    desc: 'Resilient microservice meshes, embedded hardware communication, and event streaming backends written in Go, C/C++, Rust, and Python/FastAPI. Zero-copy protobuf serialization, CAN-bus / MQTT telemetry, and sub-15ms p99 latency.',
    descAr: 'شبكات خدمات مصغرة مرنة، اتصالات عتاد مدمجة، وبنى معالجة أحداث فورية مكتوبة بلغات Go وC/C++ وRust وPython/FastAPI. تسلسل Protobuf بدون نسخ إضافي، قياسات CAN-bus وMQTT، وزمن استجابة p99 أقل من 15 مللي ثانية.',
    stack: [
      { name: 'C / C++', icon: 'cplusplus' },
      { name: 'Rust', icon: 'rust' },
      { name: 'Go', icon: 'go' },
      { name: 'Python', icon: 'python' },
      { name: 'CAN-bus / MQTT', icon: 'mqtt' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'gRPC', icon: 'grpc' },
      { name: 'Apache Kafka', icon: 'apachekafka' }
    ],
    specs: [
      'High-concurrency event brokers supporting 50,000+ hardware and software events per second',
      'Real-time CAN-bus / OBD-II and MQTT industrial sensor ingestion protocols',
      'Strict JSON-Schema and Protobuf request/response payload validators',
      'Mutual TLS 1.3 encryption across all intra-service mesh and gateway communication'
    ],
    specsAr: [
      'وسطاء أحداث عاليي التزامن يدعمون أكثر من 50,000 رسالة وحدث عتادي في الثانية',
      'بروتوكولات استيعاب فورية لحساسات CAN-bus وOBD-II وMQTT الصناعية',
      'مدققات حمولة صارمة تعتمد JSON-Schema وProtobuf لكل استجابة وطلب',
      'تشفير تبادلي mTLS 1.3 لجميع الاتصالات بين الخدمات الداخلية وبوابات العبور'
    ],
    visualType: 'api_stream'
  },
  'cat-c': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY C',
    badgeAr: 'تخصص مؤسسي // الفئة ج',
    title: 'Mobile, IoT & Automotive Systems',
    titleAr: 'أنظمة الهاتف، إنترنت الأشياء والمركبات',
    service: 'Mobile, IoT & Automotive Systems',
    desc: 'Sovereign mobile enterprise applications and automotive telemetry systems built with Flutter, Native Swift/Kotlin, and Embedded Rust/C++. Featuring offline-first local SQLite encryption, CAN-bus vehicle diagnostics, and instant background delta sync.',
    descAr: 'تطبيقات جوال مؤسسية سيادية وأنظمة قياس عن بُعد للمركبات مبنية باستخدام Flutter وSwift/Kotlin وRust/C++ المدمجة. تشمل تشفيراً محلياً لقواعد بيانات SQLite، وتشخيص أعطال المركبات عبر CAN-bus، ومزامنة فورية.',
    stack: [
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Rust (Embedded)', icon: 'rust' },
      { name: 'C/C++ (Firmware)', icon: 'cplusplus' },
      { name: 'CAN-bus / OBD-II', icon: 'bluetooth' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Swift', icon: 'swift' },
      { name: 'MQTT / Telemetry', icon: 'mqtt' },
      { name: 'SQLite', icon: 'sqlite' }
    ],
    specs: [
      'CAN-bus vehicle diagnostics, GPS/GSM telemetry tracking, and in-vehicle control loops',
      'Hardware-backed Secure Enclave and KeyStore biometric auth gates',
      'Deterministic background delta synchronization with offline conflict resolution',
      'Low-overhead native platform channel interop with zero main-thread blocking'
    ],
    specsAr: [
      'تشخيص أعطال المركبات عبر CAN-bus، وتتبع قياسات GPS/GSM، وحلقات تحكم داخل المركبة',
      'بوابات توثيق حيوي معزولة بالأجهزة عبر Secure Enclave وKeyStore',
      'مزامنة تفاضلية في الخلفية مع حل النزاعات بدون اتصال بالإنترنت',
      'قنوات اتصال أصلية منخفضة العبء تمنع أي تجميد لمسار المعالجة الرئيسي'
    ],
    visualType: 'mobile_sync'
  },
  'cat-d': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY D',
    badgeAr: 'تخصص مؤسسي // الفئة د',
    title: 'AI, Edge Vision & Supervised Machine Learning',
    titleAr: 'الذكاء الاصطناعي، الرؤية على الحافة والإشراف المعزز',
    service: 'AI, Edge Vision & Supervised Machine Learning',
    desc: 'Edge computer vision (ANPR/LPR, speed enforcement), context-isolated Retrieval-Augmented Generation (RAG), and supervised foundation model reasoning pipelines. Sub-10ms neural inference with zero direct database write privileges.',
    descAr: 'رؤية حاسوبية على الحافة (قراءة اللوحات ANPR، ضبط السرعات)، استرجاع معزز بالسياق (RAG)، واستدلال نماذج أساسية خاضعة للإشراف. استدلال عصبي بأقل من 10 مللي ثانية مع صفر صلاحيات كتابة مباشرة.',
    stack: [
      { name: 'TensorRT', icon: 'nvidia' },
      { name: 'OpenCV', icon: 'opencv' },
      { name: 'NVIDIA Jetson', icon: 'nvidia' },
      { name: 'Python', icon: 'python' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'LangGraph', icon: 'langchain' },
      { name: 'pgvector', icon: 'postgresql' },
      { name: 'Docker', icon: 'docker' }
    ],
    specs: [
      'Sub-10ms edge neural inference for real-time license plate and speed monitoring',
      'Deterministic schema guardrails and strict prompt boundary filters',
      'Attributed document citations with clickable provenance tracking',
      'Mandatory Human-in-the-Loop (HITL) authorization gates for critical state changes'
    ],
    specsAr: [
      'استدلال عصبي على الحافة بأقل من 10 مللي ثانية لرصد لوحات المركبات والسرعة لحظياً',
      'حواجز مخططات حتمية ومرشحات حدود صارمة للاستفسارات والمدخلات',
      'إسناد دقيق للمستندات مع تتبع روابط المصادر القابلة للتحقق',
      'بوابات تفويض بشرية إلزامية (Human-in-the-Loop) لأي تعديل تشغيلي حساس'
    ],
    visualType: 'hitl_gate'
  },
  'cat-e': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY E',
    badgeAr: 'تخصص مؤسسي // الفئة هـ',
    title: 'Data Classification, Engineering & Databases',
    titleAr: 'تصنيف وهندسة البيانات وقواعد البيانات المؤسسية',
    service: 'Data Classification, Engineering & Databases',
    desc: 'End-to-end data collection, multi-modal classification, human-verified labeling, and enterprise database architectures engineered for zero data loss. PostgreSQL clusters with read-replicas, pgvector semantic search, and clean dataset provisioning.',
    descAr: 'جمع وتصنيف متعدد الوسائط، وترميز موثق بشرياً، وبنى قواعد بيانات مؤسسية مهندسة لصفر فقدان في البيانات. مجموعات خوادم PostgreSQL، بحث دلالي عبر pgvector، وتوفير مجموعات بيانات نقية.',
    stack: [
      { name: 'Data Classification', icon: 'sparkles' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'ClickHouse', icon: 'clickhouse' },
      { name: 'Apache Spark', icon: 'apachespark' },
      { name: 'Snowflake', icon: 'snowflake' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Parquet / Arrow', icon: 'apache' },
      { name: 'TimescaleDB', icon: 'timescale' }
    ],
    specs: [
      'Change Data Capture (CDC) streaming with transactional consistency',
      'Automated point-in-time recovery (PITR) with sub-second RPO',
      'Multi-tenant schema isolation with row-level security (RLS)',
      'Hardware-accelerated AES-256 tablespace encryption at rest'
    ],
    specsAr: [
      'تدفق التقاط تغيير البيانات (CDC) مع اتساق حتمي للمعاملات',
      'استرداد زمني دقيق في أي نقطة (PITR) مع هدف نقطة استعادة فوري',
      'عزل المخططات للمستأجرين المتعددين مع أمان على مستوى الصفوف (RLS)',
      'تشفير جداول البيانات أثناء التخزين عبر AES-256 مدعوم بالأجهزة'
    ],
    visualType: 'db_cluster'
  },
  'cat-f': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY F',
    badgeAr: 'تخصص مؤسسي // الفئة و',
    title: 'Cloud & Infrastructure DevOps',
    titleAr: 'السحابة والعمليات السحابية DevOps',
    service: 'Cloud & Infrastructure DevOps',
    desc: 'Containerized Kubernetes environments and Terraform-managed infrastructure compliant with UAE sovereign data residency standards (AWS UAE Region, Azure UAE, and private bare-metal).',
    descAr: 'بيئات Kubernetes حاوياتية وبنى تحتية مُدارة عبر Terraform متوافقة مع معايير سيادة البيانات بدولة الإمارات (منطقة AWS الإمارات، Azure الإمارات، والخوادم الخاصة).',
    stack: [
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Helm', icon: 'helm' },
      { name: 'Linux', icon: 'linux' },
      { name: 'AWS UAE', icon: 'amazonwebservices' },
      { name: 'Microsoft Azure', icon: 'microsoftazure' },
      { name: 'Proxmox', icon: 'proxmox' }
    ],
    specs: [
      'Immutable GitOps deployment pipelines using ArgoCD and sealed secrets',
      'Zero-downtime rolling upgrades with automated rollback on healthcheck failure',
      'Multi-Availability Zone disaster recovery with active-passive replication',
      'Air-gapped and private sovereign cluster deployment capabilities'
    ],
    specsAr: [
      'خطوط نشر GitOps غير قابلة للتغيير باستخدام ArgoCD والأسرار المشفرة',
      'ترقيات تدريجية بدون أي توقف عن العمل مع تراجع تلقائي عند أي خطأ',
      'استعادة بعد الكوارث عبر مناطق توفر متعددة مع مزامنة نشطة',
      'قدرات نشر كاملة على مجموعات خوادم سيادية معزولة عن شبكة الإنترنت'
    ],
    visualType: 'cloud_orchestrator'
  },
  'cat-g': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY G',
    badgeAr: 'تخصص مؤسسي // الفئة ز',
    title: 'Cybersecurity & Identity Governance',
    titleAr: 'الأمن السيبراني وحوكمة الهوية',
    service: 'Cybersecurity & Identity Governance',
    desc: 'Military-grade defense-in-depth security architectures. End-to-end mTLS 1.3 encryption, Keycloak/OIDC identity federation, automated secret rotation, and strict RBAC/ABAC access control.',
    descAr: 'بنى أمنية متعددة الطبقات بمستويات دفاعية فائقة. تشفير شامل mTLS 1.3، واتحاد هويات عبر Keycloak وOIDC، وتدوير آلي للأسرار البرمجية مع تحكم صارم بالوصول.',
    stack: [
      { name: 'Keycloak', icon: 'keycloak' },
      { name: 'OAuth2 / OIDC', icon: 'openid' },
      { name: 'HashiCorp Vault', icon: 'vault' },
      { name: 'TLS 1.3', icon: 'letsencrypt' },
      { name: 'WireGuard', icon: 'wireguard' },
      { name: 'OWASP ZAP', icon: 'owasp' },
      { name: 'Linux PAM', icon: 'linux' },
      { name: 'SAML 2.0', icon: 'auth0' }
    ],
    specs: [
      'Strict Zero-Trust network architecture with micro-segmentation',
      'Role-Based and Attribute-Based Access Control (RBAC/ABAC) policies',
      'Automated cryptographic secret rotation and HSM-backed key management',
      'Continuous SAST/DAST security scanning integrated into CI/CD pipelines'
    ],
    specsAr: [
      'بنية شبكية صارمة بمبدأ الثقة الصفرية مع تقسيم دقيق للشبكات',
      'سياسات تحكم بالوصول مستندة للأدوار والسمات (RBAC / ABAC)',
      'تدوير آلي للمفاتيح التشفيرية وإدارة الأسرار عبر وحدات HSM',
      'فحص أمني مستمر للشفرات البرمجية والأنظمة ضمن خطوط الـ CI/CD'
    ],
    visualType: 'zero_trust_gate'
  },
  'cat-h': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY H',
    badgeAr: 'تخصص مؤسسي // الفئة ح',
    title: 'Observability & Production SRE',
    titleAr: 'المراقبة الفورية وهندسة الموثوقية SRE',
    service: 'Observability & Production SRE',
    desc: 'End-to-end observability mesh unifying distributed tracing, Prometheus metrics, and Loki log streams under OpenTelemetry standards for sub-minute incident diagnosis.',
    descAr: 'شبكة مراقبة شاملة توحد التتبع الموزع ومقاييس Prometheus وسجلات Loki وفق معايير OpenTelemetry لتشخيص الحوادث التقنية في أقل من دقيقة.',
    stack: [
      { name: 'OpenTelemetry', icon: 'opentelemetry' },
      { name: 'Prometheus', icon: 'prometheus' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Jaeger', icon: 'jaegertracing' },
      { name: 'Loki', icon: 'grafana' },
      { name: 'FluentBit', icon: 'fluentbit' },
      { name: 'Vector', icon: 'datadog' },
      { name: 'PagerDuty', icon: 'pagerduty' }
    ],
    specs: [
      'High-fidelity distributed tracing spanning all microservice boundaries',
      'SLO and error-budget alert rules with automated incident escalation',
      'Structured JSON logging with correlation IDs on every inbound request',
      'Real-time anomaly detection across operational latency histograms'
    ],
    specsAr: [
      'تتبع موزع عالي الدقة يغطي جميع مسارات الخدمات المصغرة',
      'قواعد تنبيه لميزانيات الأخطاء ومؤشرات الأداء مع تصعيد آلي للحوادث',
      'تسجيل منظم بصيغة JSON مع معرفات ربط موحدة لكل طلب وارد',
      'كشف فوري للشذوذات الإحصائية عبر مدرجات زمن الاستجابة التشغيلي'
    ],
    visualType: 'trace_waterfall'
  },
  'cat-i': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY I',
    badgeAr: 'تخصص مؤسسي // الفئة ط',
    title: 'Enterprise ERP & CRM Middleware',
    titleAr: 'برمجيات الوسيطة لأنظمة ERP و CRM',
    service: 'Enterprise ERP & CRM Middleware',
    desc: 'High-reliability synchronization middleware connecting legacy ERP backends (Odoo, SAP, Microsoft Dynamics, Salesforce) with modern web/mobile portals under strict schema verification.',
    descAr: 'برمجيات وسيطة فائقة الموثوقية تربط أنظمة ERP المركزية (Odoo, SAP, Microsoft Dynamics, Salesforce) مع بوابات الويب والهاتف الحديثة تحت تدقيق صارم للمخططات.',
    stack: [
      { name: 'Odoo ERP', icon: 'odoo' },
      { name: 'SAP NetWeaver', icon: 'sap' },
      { name: 'Salesforce REST', icon: 'salesforce' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Apache Kafka', icon: 'apachekafka' },
      { name: 'Python', icon: 'python' },
      { name: 'Go', icon: 'go' },
      { name: 'Docker', icon: 'docker' }
    ],
    specs: [
      'Two-way transactional data reconciliation with zero record duplication',
      'Dead-letter queues (DLQ) with automated alert routing for failed transactions',
      'Strict schema validation gates preventing corrupted records from entering core ERP',
      'Immutable audit logging compliant with UAE corporate accounting regulations'
    ],
    specsAr: [
      'مطابقة بيانات ثنائية الاتجاه مع ضمان استحالة تكرار أي سجل محاسبي',
      'طوابير معالجة الرسائل المعلقة (DLQ) مع توجيه آلي للتنبيهات عند الفشل',
      'بوابات تحقق صارمة تمنع دخول أي بيانات غير متوافقة إلى أنظمة ERP',
      'سجلات تدقيق غير قابلة للتعديل متوافقة مع لوائح المحاسبة بدولة الإمارات'
    ],
    visualType: 'erp_reconciliation'
  },
  'cat-j': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY J',
    badgeAr: 'تخصص مؤسسي // الفئة ي',
    title: 'Testing, QA & Formal Verification',
    titleAr: 'الاختبار وضمان الجودة والتحقق الشكلي',
    service: 'Testing, QA & Formal Verification',
    desc: 'Automated end-to-end testing matrix, API contract validation, and property-based fuzzing pipelines guaranteeing regression-free continuous delivery.',
    descAr: 'مصفوفة اختبارات مؤتمتة من البداية للنهاية، والتحقق من عقود واجهات API، واختبارات فحص الحدود العشوائية لضمان تسليم مستمر خالٍ من أي انتكاسات برمجية.',
    stack: [
      { name: 'Playwright', icon: 'playwright' },
      { name: 'Jest', icon: 'jest' },
      { name: 'Vitest', icon: 'vitest' },
      { name: 'k6 Load Testing', icon: 'k6' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Pytest', icon: 'pytest' },
      { name: 'Go Test', icon: 'go' },
      { name: 'GitHub Actions', icon: 'githubactions' }
    ],
    specs: [
      'Deterministic synthetic user flows simulating mission-critical transactions',
      'Automated OpenAPI specification contract testing on every pull request',
      'High-concurrency load testing up to 20,000 virtual users with k6',
      'Pixel-perfect automated visual regression testing across mobile and desktop viewports'
    ],
    specsAr: [
      'محاكاة حتمية لمسارات المستخدم للعمليات الحيوية والمعاملات الحساسة',
      'اختبارات عقود آلية تعتمد مواصفات OpenAPI مع كل تحديث برمجي',
      'اختبارات إجهاد وتزامن عالي تصل إلى 20,000 مستخدم افتراضي عبر k6',
      'اختبارات آلية لرصد الانحرافات البصرية والتصميمية عبر مختلف الشاشات'
    ],
    visualType: 'test_runner'
  },
  'cat-k': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY K',
    badgeAr: 'تخصص مؤسسي // الفئة ك',
    title: 'Analytics, BI & Executive Telemetry',
    titleAr: 'التحليلات وذكاء الأعمال والرصد التنفيذي',
    service: 'Analytics, BI & Executive Telemetry',
    desc: 'Executive-grade analytical pipelines and bilingual command dashboards. Real-time KPI aggregation, sub-second OLAP queries, and automated anomaly notifications.',
    descAr: 'خطوط أنابيب تحليلية متقدمة للإدارة العليا ولوحات قيادة تنفيذية ثنائية اللغة. تجميع فوري لمؤشرات الأداء، واستعلامات تحليلية سريعة، وتنبيهات فورية للشذوذ.',
    stack: [
      { name: 'Apache Superset', icon: 'apache' },
      { name: 'ClickHouse', icon: 'clickhouse' },
      { name: 'Metabase', icon: 'metabase' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'WebSockets', icon: 'fastapi' },
      { name: 'Python', icon: 'python' }
    ],
    specs: [
      'Sub-second analytical OLAP queries across multi-million record datasets',
      'Real-time WebSocket streaming telemetry for executive command portals',
      'Bilingual executive report generators with automated PDF distribution',
      'Granular data masking and role-based metric filtering for board-level access'
    ],
    specsAr: [
      'استعلامات تحليلية فائقة السرعة عبر ملايين السجلات في أجزاء من الثانية',
      'بث حي للقياس عن بُعد عبر WebSockets لبوابات القيادة التنفيذية',
      'مولد تقارير تنفيذية ثنائية اللغة مع توزيع آلي للملخصات الدورية',
      'حجب دقيق للبيانات الحساسة وتصفية مؤشرات الأداء حسب الصلاحيات'
    ],
    visualType: 'bi_pulse'
  },
  'cat-l': {
    badge: 'ENTERPRISE SPECIALIZATION // CATEGORY L',
    badgeAr: 'تخصص مؤسسي // الفئة ل',
    title: 'Technical Advisory & Strategic Architecture',
    titleAr: 'الاستشارات التقنية والحوكمة المعمارية',
    service: 'Technical Advisory & Strategic Architecture',
    desc: 'High-level technology roadmap advisory, vendor-neutral system audits, sovereign UAE compliance assessments, and disaster recovery architecture design for UAE enterprise leadership.',
    descAr: 'استشارات خارطة طريق تقنية عليا، وتدقيق مستقل للأنظمة، وتقييمات الامتثال لسيادة البيانات بدولة الإمارات، وتصميم بنى التعافي من الكوارث لقيادات المؤسسات.',
    stack: [
      { name: 'TOGAF Standards', icon: 'openarchitectures' },
      { name: 'UAE Data Law', icon: 'uae' },
      { name: 'Cloud Architecture', icon: 'cloud' },
      { name: 'Threat Modeling', icon: 'owasp' },
      { name: 'Microservices', icon: 'kubernetes' },
      { name: 'Disaster Recovery', icon: 'server' },
      { name: 'FinOps Optimization', icon: 'finance' },
      { name: 'Technical Audits', icon: 'audit' }
    ],
    specs: [
      'Vendor-neutral codebase and infrastructure architecture audits',
      'UAE Federal Personal Data Protection Law (PDPL) compliance blueprints',
      'Quantified technical debt analysis and modernization roadmaps',
      'Tier III/IV high-availability disaster recovery architecture validation'
    ],
    specsAr: [
      'تدقيق فني ومعماري مستقل للشفرات المصدرية والبنية التحتية',
      'مخططات امتثال لقانون حماية البيانات الشخصية الاتحادي الإماراتي',
      'تحليل كمي للديون التقنية ووضع خرائط طريق دقيقة لتحديث الأنظمة',
      'اعتماد وتوثيق بنى التعافي من الكوارث عالية التوفر وفق معايير Tier III/IV'
    ],
    visualType: 'advisory_matrix'
  }
};

// ── STATE ─────────────────────────────────────────────────────
let currentLang = 'en';
let lenis;
let introST;
let activeTechCategory = 'cat-a';

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initScrollProgress();
  initIntroAnimation();
  initHeroAnimations();
  initActiveNavTracker();
  initTechnologyTabs();
  initSearchModal();
  initMarqueeClone();
  initInteractions();
  initExpandableCards();
  initLegalModal();
  initScrollReveals();
  initCircuitLine();
  preDecodeProjectImages();
  setYear();
});

// ── LENIS SMOOTH SCROLL (Ultra-Slow Luxury Motion) ────────────
function initLenis() {
  // Only run Lenis on desktop screens to eliminate mobile scroll jitter and momentum fighting
  if (window.matchMedia("(min-width: 769px)").matches && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.9,
      lerp: 0.042,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}

// ── TOP SCROLL PROGRESS INDICATOR ────────────────────────────
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  const updateProgress = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  if (lenis) {
    lenis.on('scroll', updateProgress);
  }
}

// ── UNIFIED INTRO-TO-FLOATING-PILL NAVBAR MORPH ──────────────
// Glitch-Free 3-Step Choreography driven by #intro-scroll-spacer
function initIntroAnimation() {
  const introTrigger = document.getElementById('intro-scroll-spacer') || document.getElementById('intro-stage');
  const morphNav = document.getElementById('morph-navbar') || document.getElementById('main-nav');
  const navBrand = document.getElementById('brand-lockup') || document.getElementById('nav-brand');
  const navLogo = document.getElementById('brand-emblem') || document.getElementById('nav-logo');
  const wordmarkWrapper = document.getElementById('wordmark-wrapper');
  const navWordmark = document.getElementById('nav-wordmark');
  const navControlsWrapper = document.getElementById('nav-controls-wrapper');
  const navLinks = document.getElementById('nav-links');
  const navActions = document.getElementById('nav-actions');
  const scrollIndicator = document.getElementById('intro-scroll-indicator');

  if (!introTrigger || !morphNav || !navLogo || !navBrand) return;

  const isRTL = () => false;

  // Exact formulas for horizontal centering with transformOrigin: 'left center':
  const getLogoW = () => navLogo.offsetWidth || (80 * 1113 / 1414);
  const getBrandW = () => {
    const logoW = getLogoW();
    const wrapW = wordmarkWrapper ? (wordmarkWrapper.offsetWidth || 318) : 318;
    return logoW + 26 + wrapW;
  };

  const mm = gsap.matchMedia();

  // ── MOBILE: INSTANT WORD REVEAL, NO-LAG CHOREOGRAPHY (max-width: 768px) ──
  mm.add("(max-width: 768px)", () => {
    if (wordmarkWrapper) {
      wordmarkWrapper.style.width = 'auto';
      wordmarkWrapper.style.maxWidth = 'max-content';
    }

    const S_MOBILE_INIT = 0.85;
    const S_MOBILE_DOCKED = 0.35;
    const leftEdge = 16;

    // Dynamically calculate exact brand lockup width on mobile (without phantom padding)
    const getMobileBrandW = () => {
      if (wordmarkWrapper) {
        wordmarkWrapper.style.width = 'auto';
        wordmarkWrapper.style.maxWidth = 'max-content';
      }
      const bW = navBrand.offsetWidth;
      if (bW && bW > 120 && bW < 500) return bW;
      const logoW = navLogo.offsetWidth || (80 * 1113 / 1414);
      const textW = navWordmark ? (navWordmark.offsetWidth || 232) : 232;
      return logoW + 26 + textW;
    };

    // Exact dead-center calculation for transformOrigin: 'left center':
    // Rendered center: leftEdge + x + (scale * (brandW / 2)) = window.innerWidth / 2
    // x = (window.innerWidth / 2) - leftEdge - (scale * (brandW / 2))
    const getMobileStartX = () => {
      const brandW = getMobileBrandW();
      return (window.innerWidth / 2) - leftEdge - (S_MOBILE_INIT * (brandW / 2));
    };

    // 1. Initial State: #morph-navbar covers full screen (100dvh)
    gsap.set(morphNav, {
      position: 'fixed',
      top: 0,
      left: '50%',
      xPercent: -50,
      width: '100vw',
      height: '100dvh',
      borderRadius: 0,
      backgroundColor: '#F8FAFC',
      borderColor: 'transparent',
      boxShadow: 'none',
      backdropFilter: 'blur(0px)',
      webkitBackdropFilter: 'blur(0px)',
      pointerEvents: 'none',
      padding: 0,
      zIndex: 1000
    });
    morphNav.setAttribute('inert', '');

    // 2. Initial State: #brand-lockup centered using mobile scale (0.85)
    gsap.set(navBrand, {
      position: 'absolute',
      left: leftEdge,
      top: '50%',
      yPercent: -50,
      x: () => getMobileStartX(),
      scale: S_MOBILE_INIT,
      transformOrigin: 'left center',
      pointerEvents: 'auto',
      opacity: 1
    });

    gsap.set(navLogo, {
      height: 80,
      clearProps: 'width,scale,transform'
    });

    if (wordmarkWrapper) {
      gsap.set(wordmarkWrapper, {
        width: 'auto',
        maxWidth: 'max-content',
        opacity: 1,
        marginLeft: 26,
        marginRight: 0,
        overflow: 'visible',
        pointerEvents: 'auto'
      });
    }

    if (navWordmark) {
      gsap.set(navWordmark, {
        fontSize: '2.8rem',
        fontWeight: 800,
        lineHeight: 1,
        color: '#0B1528'
      });
    }

    // Set all .char letters to opacity: 1, yPercent: 0 immediately from frame 1
    const wmChars = navWordmark ? navWordmark.querySelectorAll('.char, .wm-letter') : [];
    if (wmChars.length) {
      gsap.set(wmChars, {
        yPercent: 0,
        opacity: 1,
        display: 'inline-block'
      });
    }

    if (navControlsWrapper) {
      gsap.set(navControlsWrapper, {
        opacity: 0,
        pointerEvents: 'none'
      });
    }

    if (navLinks) {
      gsap.set(navLinks, { opacity: 1 });
    }
    if (navActions) {
      gsap.set(navActions, { opacity: 1 });
    }

    if (scrollIndicator) {
      gsap.set(scrollIndicator, { display: 'flex', opacity: 1, y: 0 });
    }

    // 3. Scroll Timeline: One continuous tween gliding #brand-lockup from center to docked position
    const mobileTL = gsap.timeline({
      scrollTrigger: {
        id: 'mobileIntroTrigger',
        trigger: introTrigger,
        start: 'top top',
        end: '+=160%',
        scrub: 0.6,
        invalidateOnRefresh: true,
        anticipatePin: 1, // Forces GSAP to smooth out the pinning/unpinning math
        pinSpacing: true,
        pinType: "transform", // Prevents mobile browser fixed-position bugs
        onUpdate: (self) => {
          const p = self.progress;
          if (p >= 0.75) {
            morphNav.classList.add('is-docked-pill');
          } else {
            morphNav.classList.remove('is-docked-pill');
          }
          if (p >= 0.88) {
            morphNav.style.pointerEvents = 'auto';
            morphNav.removeAttribute('inert');
            morphNav.classList.add('docked');
            if (navControlsWrapper) navControlsWrapper.style.pointerEvents = 'auto';
          } else {
            morphNav.style.pointerEvents = 'none';
            morphNav.setAttribute('inert', '');
            morphNav.classList.remove('docked');
            if (navControlsWrapper) navControlsWrapper.style.pointerEvents = 'none';
          }
        }
      }
    });

    // Scroll indicator fades out during initial scroll
    if (scrollIndicator) {
      mobileTL.to(scrollIndicator, {
        opacity: 0,
        y: 12,
        duration: 0.2,
        ease: 'power1.out'
      }, 0);
    }

    // Continuous glide of #brand-lockup from center to docked (left: 16px, scale: 0.35)
    mobileTL.to(navBrand, {
      x: 0,
      scale: S_MOBILE_DOCKED,
      duration: 1,
      ease: 'power2.inOut',
      force3D: "auto"
    }, 0);

    // Continuous morph of #morph-navbar into docked pill
    mobileTL.to(morphNav, {
      height: 64,
      top: 16,
      width: 'calc(100vw - 24px)',
      borderRadius: 9999,
      backgroundColor: 'rgba(255, 255, 255, 0.92)',
      borderColor: '#E2E8F0',
      boxShadow: '0 12px 32px rgba(9, 20, 38, 0.08)',
      backdropFilter: 'none',
      webkitBackdropFilter: 'none',
      duration: 1,
      ease: 'power2.inOut',
      force3D: "auto"
    }, 0);

    // Nav controls fade in smoothly as navbar finishes docking
    if (navControlsWrapper) {
      mobileTL.to(navControlsWrapper, {
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out'
      }, 0.65);
    }
  });

  // ── DESKTOP: FULL 3-STAGE INTRO CHOREOGRAPHY DRIVEN BY USER SCROLL ──
  mm.add("(min-width: 769px)", () => {
    const S_INIT = 1.75;
    const S_DOCKED = 0.44;
    const leftEdge = 24;

    // Stage 1: Bird emblem alone is in the exact dead center of viewport (50vw)
    const getStage1X = () => (window.innerWidth / 2) - leftEdge - (S_INIT * (getLogoW() / 2));

    // Stage 2: Combined lockup (bird + wordmark) is in the exact dead center of viewport (50vw)
    const getStage2X = () => (window.innerWidth / 2) - leftEdge - (S_INIT * (getBrandW() / 2));

    // Set initial 0% state: strictly position: fixed; top: 0; left: 50%; transform: translateX(-50%);
    gsap.set(morphNav, {
      position: 'fixed',
      top: 0,
      left: '50%',
      xPercent: -50,
      width: '100vw',
      height: '100dvh',
      borderRadius: '0px',
      backgroundColor: '#F8FAFC',
      borderColor: 'transparent',
      boxShadow: '0 0 0 0 rgba(0,0,0,0)',
      backdropFilter: 'blur(0px)',
      webkitBackdropFilter: 'blur(0px)',
      pointerEvents: 'none',
      padding: 0,
      zIndex: 1000
    });
    morphNav.setAttribute('inert', '');

    // Stage 1: Dead center positioning for bird emblem alone at scroll = 0
    gsap.set(navBrand, {
      position: 'absolute',
      left: leftEdge,
      top: '50%',
      yPercent: -50,
      x: () => getStage1X(),
      scale: S_INIT,
      transformOrigin: 'left center'
    });

    gsap.set(navLogo, {
      height: 80,
      clearProps: 'width,scale,transform'
    });

    if (wordmarkWrapper) {
      gsap.set(wordmarkWrapper, {
        width: 318,
        opacity: 1,
        marginLeft: 26,
        marginRight: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      });
    }

    if (navWordmark) {
      gsap.set(navWordmark, {
        fontSize: '2.8rem',
        fontWeight: 800,
        lineHeight: 1,
        color: '#0B1528'
      });
    }

    const wmChars = navWordmark ? navWordmark.querySelectorAll('.char, .wm-letter') : [];
    if (wmChars.length) {
      gsap.set(wmChars, {
        yPercent: 110,
        opacity: 0,
        display: 'inline-block'
      });
    }

    if (navControlsWrapper) {
      gsap.set(navControlsWrapper, {
        opacity: 0,
        y: 6,
        pointerEvents: 'none'
      });
    }

    if (navLinks) {
      gsap.set(navLinks, { opacity: 1 });
    }
    if (navActions) {
      gsap.set(navActions, { opacity: 1 });
    }

    if (scrollIndicator) {
      gsap.set(scrollIndicator, { opacity: 1, y: 0, display: 'flex' });
    }

    // ── SCROLL-TRIGGERED TIMELINE: 3-STAGE CHOREOGRAPHY DRIVEN BY USER SCROLL ──
    const introTL = gsap.timeline({
      scrollTrigger: {
        id: 'introTrigger',
        trigger: introTrigger,
        start: 'top top',
        end: '+=250%',
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          if (p >= 0.75) {
            morphNav.classList.add('is-docked-pill');
          } else {
            morphNav.classList.remove('is-docked-pill');
          }
          if (p >= 0.88) {
            morphNav.style.pointerEvents = 'auto';
            morphNav.removeAttribute('inert');
            morphNav.classList.add('docked');
          } else {
            morphNav.style.pointerEvents = 'none';
            morphNav.setAttribute('inert', '');
            morphNav.classList.remove('docked');
          }
        }
      }
    });

    introST = introTL.scrollTrigger;

    // 1. Scroll indicator fades out promptly as user begins scrolling
    if (scrollIndicator) {
      introTL.to(scrollIndicator, {
        opacity: 0,
        y: 16,
        duration: 0.08,
        ease: 'power2.in'
      }, 0);
    }

    // 2. Stage 1 -> Stage 2: Logo shifts to the left a little while scrolling down (making room for wordmark)
    introTL.fromTo(navBrand,
      { x: () => getStage1X(), scale: S_INIT, left: leftEdge },
      { x: () => getStage2X(), scale: S_INIT, left: leftEdge, duration: 0.22, ease: 'power2.out' },
      0
    );

    // 3. Stage 2: Word appears letter by letter smoothly with animation beside the logo
    if (wmChars.length) {
      introTL.fromTo(wmChars,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.025, duration: 0.20, ease: 'power2.out' },
        0.10
      );
    }

    // 4. Stage 3: After that they both as a whole minimize in size and move to their right place in the navbar
    introTL.to(navBrand, {
      x: 0,
      scale: S_DOCKED,
      left: leftEdge,
      duration: 0.44,
      ease: 'power2.inOut',
      force3D: "auto"
    }, 0.48);

    // 5. Navbar shrinks from full-screen to 64px floating top pill
    introTL.to(morphNav, {
      top: 16,
      width: () => `${Math.min(window.innerWidth * 0.95, 1240)}px`,
      height: 64,
      borderRadius: 9999,
      backgroundColor: '#F8FAFC',
      borderColor: '#E2E8F0',
      boxShadow: 'none',
      padding: 0,
      duration: 0.44,
      ease: 'power2.inOut'
    }, 0.48);

    // 6. Nav controls (links and action buttons) fade in towards the end of the glide
    if (navControlsWrapper) {
      introTL.to(navControlsWrapper, {
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        duration: 0.20,
        ease: 'power2.out'
      }, 0.72);
    }
  });

  // Refresh positions when logo loads and on window resize (Desktop only)
  if (navLogo) {
    navLogo.addEventListener('load', () => {
      ScrollTrigger.refresh();
      if (window.innerWidth > 768 && introST && introST.progress === 0) {
        const getStage1XDesktop = () => (window.innerWidth / 2) - 24 - (1.75 * (getLogoW() / 2));
        gsap.set(navBrand, { x: getStage1XDesktop(), scale: 1.75, left: 24 });
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && introST && introST.progress === 0) {
      const getStage1XDesktop = () => (window.innerWidth / 2) - 24 - (1.75 * (getLogoW() / 2));
      gsap.set(navBrand, { x: getStage1XDesktop(), scale: 1.75, left: 24 });
    }
  });

  // Click logo -> smooth scroll to Hero section (#hero), never 0px intro
  if (navBrand) {
    navBrand.addEventListener('click', (e) => {
      e.preventDefault();
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        if (lenis) {
          lenis.scrollTo(heroEl, {
            offset: -90,
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        } else {
          const top = heroEl.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  }
}

// ── HERO SECTION ANIMATIONS (STRICT MOTION DIRECTION) ────────
// 1. Hero Left Column: ONLY Left-to-Right (x: -100px -> 0px, y: 0) over 2.4s
// 2. Hero Right Column Image Frame ONLY: Slowly GETS BIGGER (scale: 0.78 -> 1.0) over 2.6s
// 3. Telemetry Console: Moves UPWARD SLOWLY (y: 85px -> 0px) over 2.3s
function initHeroAnimations() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const isRTL = false;
  const startX = -100;

  // 1. Hero Left: Two-Tone Headline, Subhead, Expandable Brief, CTA Buttons (LEFT TO RIGHT ONLY)
  const heroLeftItems = heroSection.querySelectorAll('.hero-left .hero-headline, .hero-left .hero-subhead, .hero-left .hero-brief-card, .hero-left .hero-ctas');
  if (heroLeftItems.length) {
    gsap.fromTo(heroLeftItems, {
      x: startX,
      y: 0,
      opacity: 0
    }, {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 2.4,
      stagger: 0.24,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 82%',
        toggleActions: 'play none none none'
      },
      onComplete: () => {
        const brief = heroSection.querySelector('.hero-brief-card');
        if (brief) {
          brief.classList.add('is-revealed');
          gsap.set(brief, { clearProps: 'y,transform' });
        }
      }
    });
  }

  // 2. Hero Right Column Image Frame: Slowly GETS BIGGER / ZOOMS IN ONLY (scale: 0.78 -> 1.0)
  const heroFrame = heroSection.querySelector('.hero-image-frame');
  if (heroFrame) {
    gsap.fromTo(heroFrame, {
      scale: 0.78,
      opacity: 0
    }, {
      scale: 1.0,
      opacity: 1,
      duration: 2.6,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });

    // Slow scroll-linked zoom (scale: 1.0 -> 1.07, scrub: 2.2) as user scrolls past Hero
    const heroImg = heroFrame.querySelector('.hero-image');
    if (heroImg) {
      gsap.to(heroImg, {
        scale: 1.07,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 2.2
        }
      });
    }
  }

  // 3. Floating Telemetry Console: Moves UPWARD SLOWLY (y: 85px -> 0px)
  const telemetry = heroSection.querySelector('.telemetry-console');
  if (telemetry) {
    gsap.fromTo(telemetry, {
      y: 85,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 2.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  }
}

// ── ACTIVE NAVIGATION LINK TRACKER ───────────────────────────
function initActiveNavTracker() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.pill-link');
  if (!navLinks.length) return;

  const onScroll = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 220;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  if (lenis) {
    lenis.on('scroll', onScroll);
  }
}

// ── 12-CATEGORY TECHNOLOGY SHOWCASE ──────────────────────────
function initTechnologyTabs() {
  const tabsNav = document.getElementById('tech-tabs-nav');
  const showcaseContainer = document.getElementById('tech-showcase-container');
  if (!tabsNav || !showcaseContainer) return;

  const tabsWrapper = document.getElementById('tech-tabs-wrapper') || document.querySelector('.tech-tabs-wrapper');
  const tabs = tabsNav.querySelectorAll('.tech-tab');

  // Horizontal mouse-wheel scroll when hovering over the technical stack tabs
  if (tabsWrapper) {
    tabsWrapper.addEventListener('wheel', (e) => {
      if (tabsWrapper.scrollWidth > tabsWrapper.clientWidth) {
        if (Math.abs(e.deltaY) >= Math.abs(e.deltaX) && e.deltaY !== 0) {
          e.preventDefault();
          const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
          const delta = e.deltaMode === 1 ? e.deltaY * 35 : e.deltaY;
          tabsWrapper.scrollLeft += (isRtl ? -delta : delta);
        }
      }
    }, { passive: false });
  }

  // Render Category Card
  function renderCategory(catKey) {
    const data = techDisciplinesData[catKey];
    if (!data) return;

    activeTechCategory = catKey;
    const isAr = currentLang === 'ar';

    const card = document.getElementById('tech-card');
    if (!card) return;

    // Smooth subtle cross-fade transition using Vishwa Limbani easing
    gsap.to(card, {
      opacity: 0,
      y: 12,
      duration: 0.18,
      ease: 'power2.in',
      onComplete: () => {
        // Header info
        const badgeEl = document.getElementById('tech-card-badge');
        const titleEl = document.getElementById('tech-card-title');
        const descEl = document.getElementById('tech-card-desc');
        const ctaEl = document.getElementById('tech-domain-cta');

        if (badgeEl) badgeEl.textContent = isAr ? data.badgeAr : data.badge;
        if (titleEl) titleEl.textContent = isAr ? data.titleAr : data.title;
        if (descEl) descEl.textContent = isAr ? data.descAr : data.desc;
        if (ctaEl) {
          ctaEl.setAttribute('data-service', data.service);
          ctaEl.textContent = isAr ? 'طلب استشارة في هذا المجال ←\uFE0E' : 'Request Advisory in This Domain →\uFE0E';
        }

        // Tech chips
        const chipsGrid = document.getElementById('tech-chips-grid');
        if (chipsGrid) {
          chipsGrid.innerHTML = data.stack.map(item => `
            <span class="tech-chip">
              <img src="https://cdn.simpleicons.org/${item.icon}/0284C7" alt="${item.name}" loading="lazy" onerror="this.style.display='none'" />
              <span>${item.name}</span>
            </span>
          `).join('');
        }

        // Specs list
        const specsList = document.getElementById('tech-specs-list');
        if (specsList) {
          const specs = isAr ? data.specsAr : data.specs;
          specsList.innerHTML = specs.map(spec => `
            <li><span class="spec-check">✓</span> <span>${spec}</span></li>
          `).join('');
        }

        // Visual widget
        const statusLabel = document.getElementById('widget-status-label');
        const widgetBody = document.getElementById('tech-widget-body');

        if (statusLabel) {
          statusLabel.textContent = isAr
            ? `الرصد الفوري // ${data.titleAr}`
            : `RUNTIME TELEMETRY // ${data.title.toUpperCase()}`;
        }

        if (widgetBody) {
          widgetBody.innerHTML = renderWidgetBody(data.visualType, isAr);
        }

        // Animate inner content moving upward slowly: y: 40px -> 0px, duration: 1.15s, ease: power3.out
        gsap.fromTo(card, {
          opacity: 0,
          y: 40
        }, {
          opacity: 1,
          y: 0,
          duration: 1.15,
          ease: 'power3.out'
        });

        // Animate right-hand dark-gray Runtime Telemetry progress bars slowly over 1.5s
        const chartFills = card.querySelectorAll('.chart-fill');
        chartFills.forEach((bar, idx) => {
          const targetW = bar.getAttribute('data-target') || bar.style.width || '65%';
          gsap.fromTo(bar, { width: '0%' }, {
            width: targetW,
            duration: 1.5,
            delay: 0.12 + (idx * 0.08),
            ease: 'power2.out'
          });
        });
      }
    });
  }

  // Render Visual Body per type
  function renderWidgetBody(type, isAr) {
    if (type === 'vitals') {
      return `
        <div class="vitals-grid">
          <div class="vital-item"><span class="vital-val mono" style="color:#00D2FF">0.42s</span><span class="vital-label mono">${isAr ? 'زمن أول طلاء' : 'FCP (First Paint)'}</span></div>
          <div class="vital-item"><span class="vital-val mono" style="color:#00D2FF">0.81s</span><span class="vital-label mono">${isAr ? 'زمن المحتوى الأكبر' : 'LCP (Contentful)'}</span></div>
          <div class="vital-item"><span class="vital-val mono" style="color:#10b981">0.00</span><span class="vital-label mono">${isAr ? 'انزياح التخطيط' : 'CLS (Shift)'}</span></div>
          <div class="vital-item"><span class="vital-val mono" style="color:#10b981">12ms</span><span class="vital-label mono">${isAr ? 'زمن الاستجابة' : 'INP (Interaction)'}</span></div>
        </div>
        <div class="vitals-chart">
          <div class="chart-row"><span class="chart-tag mono">${isAr ? 'عمق DOM' : 'DOM Depth'}</span><div class="chart-bar"><div class="chart-fill" data-target="24%" style="width: 24%"></div></div><span class="mono chart-num">8 levels</span></div>
          <div class="chart-row"><span class="chart-tag mono">${isAr ? 'الهيدرة' : 'Hydration'}</span><div class="chart-bar"><div class="chart-fill" data-target="18%" style="width: 18%"></div></div><span class="mono chart-num">14ms</span></div>
          <div class="chart-row"><span class="chart-tag mono">${isAr ? 'الذاكرة' : 'Memory'}</span><div class="chart-bar"><div class="chart-fill" data-target="32%" style="width: 32%"></div></div><span class="mono chart-num">24.6 MB</span></div>
        </div>
      `;
    } else if (type === 'api_stream') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">GATEWAY // 28,400 req/sec</span> <span class="term-gray">[p99: 11.4ms]</span></div>
          <div style="margin-top:8px;">[gRPC] Multiplex streams: 128 active // TLS 1.3 0-RTT</div>
          <div>[Protobuf] Zero-copy serialization: <span class="term-cyan">PASSED</span></div>
          <div>[RateLimit] TokenBucket: 50,000 capacity // Spikes: 0 dropped</div>
          <div style="margin-top:10px; padding:10px; background:rgba(0,210,255,0.06); border-radius:6px; border:1px solid rgba(0,210,255,0.2);">
            <span class="term-cyan">✓ Idempotency Key:</span> #idemp_9f82a170 // State: COMMITTED
          </div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'حمل البوابة' : 'Gateway Load'}</span><div class="chart-bar"><div class="chart-fill" data-target="76%" style="width: 76%"></div></div><span class="mono chart-num">76%</span></div>
          </div>
        </div>
      `;
    } else if (type === 'mobile_sync') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">OFFLINE-FIRST SQLite WAL</span></div>
          <div style="margin-top:8px;">Local Storage: <span class="term-cyan">AES-256 Encrypted</span></div>
          <div>Biometrics: <span class="term-green">Secure Enclave Hardware Verified</span></div>
          <div>Sync Queue: <span class="term-cyan">0 pending mutations</span> [All syncd]</div>
          <div style="margin-top:10px; display:flex; gap:12px;">
            <span style="padding:4px 8px; background:rgba(2,132,199,0.2); border-radius:4px; font-size:11px;">iOS 17+ Metal</span>
            <span style="padding:4px 8px; background:rgba(0,210,255,0.15); border-radius:4px; font-size:11px;">Android Vulkan</span>
          </div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'جاهزية المزامنة' : 'Sync Queue'}</span><div class="chart-bar"><div class="chart-fill" data-target="100%" style="width: 100%"></div></div><span class="mono chart-num">100%</span></div>
          </div>
        </div>
      `;
    } else if (type === 'hitl_gate') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">HITL GROUNDING GATE // ACTIVE</span></div>
          <div style="margin-top:8px;">Vector Search: <span class="term-cyan">pgvector (Cosine: 0.914)</span></div>
          <div>Boundary Filter: <span class="term-green">14/14 Rules Passed</span></div>
          <div>Write Privileges: <span class="term-yellow" style="color:#f59e0b;">LOCKED (0 DB Writes)</span></div>
          <div style="margin-top:10px; padding:8px 12px; background:rgba(255,255,255,0.04); border-radius:6px;">
            <span style="color:#94a3b8;">Operator Review Queue:</span> <span class="term-cyan">AWAITING MANAGER SIGN-OFF</span>
          </div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'ثقة التوجيه' : 'Grounding Conf'}</span><div class="chart-bar"><div class="chart-fill" data-target="91.4%" style="width: 91.4%"></div></div><span class="mono chart-num">0.914</span></div>
          </div>
        </div>
      `;
    } else if (type === 'db_cluster') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">POSTGRESQL CLUSTER // UAE REGION</span></div>
          <div style="margin-top:8px;">Primary Node: <span class="term-green">HEALTHY</span> // Write IOPS: 14,200</div>
          <div>Read Replicas: 3 Nodes // Replication Lag: <span class="term-cyan">0.8ms</span></div>
          <div>Connection Pool: 48 / 600 active (pgBouncer)</div>
          <div style="margin-top:10px; padding:8px 12px; background:rgba(16,185,129,0.08); border-radius:6px; border:1px solid rgba(16,185,129,0.2);">
            <span class="term-green">✓ PITR Recovery Target:</span> Sub-second RPO verified
          </div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'صحة التكرار' : 'Repl. Health'}</span><div class="chart-bar"><div class="chart-fill" data-target="99.8%" style="width: 99.8%"></div></div><span class="mono chart-num">99.8%</span></div>
          </div>
        </div>
      `;
    } else if (type === 'cloud_orchestrator') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">SOVEREIGN KUBERNETES // uae-central-1</span></div>
          <div style="margin-top:8px;">Cluster Pods: <span class="term-green">24 / 24 Running</span></div>
          <div>Network Policy: <span class="term-cyan">Zero-Trust Calico Strict</span></div>
          <div>GitOps: <span class="term-green">ArgoCD Synced</span> // Commit: #7fa890e</div>
          <div style="margin-top:10px; display:flex; gap:8px;">
            <span style="padding:4px 8px; background:rgba(0,210,255,0.1); border-radius:4px; font-size:10.5px;">Auto-Scaler: 100%</span>
            <span style="padding:4px 8px; background:rgba(2,132,199,0.15); border-radius:4px; font-size:10.5px;">Multi-AZ: Verified</span>
          </div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'حاويات Pods' : 'Pod Capacity'}</span><div class="chart-bar"><div class="chart-fill" data-target="100%" style="width: 100%"></div></div><span class="mono chart-num">24/24</span></div>
          </div>
        </div>
      `;
    } else if (type === 'zero_trust_gate') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">ZERO-TRUST IDENTITY GATE</span></div>
          <div style="margin-top:8px;">mTLS Handshake: <span class="term-green">VERIFIED (TLS 1.3)</span></div>
          <div>Identity Provider: Keycloak OIDC // Algorithm: ES256</div>
          <div>Token Claims: tenant_id=uae_ent // Role: <span class="term-cyan">sec_operator</span></div>
          <div style="margin-top:10px; padding:8px 12px; background:rgba(0,210,255,0.06); border-radius:6px;">
            <span class="term-cyan">RBAC / ABAC Policy:</span> <span class="term-green">AUTHORIZED (Read/Verify)</span>
          </div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'فحص السياسة' : 'Policy Audit'}</span><div class="chart-bar"><div class="chart-fill" data-target="100%" style="width: 100%"></div></div><span class="mono chart-num">Pass</span></div>
          </div>
        </div>
      `;
    } else if (type === 'trace_waterfall') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">DISTRIBUTED TRACE // #tr-89412</span></div>
          <div style="margin-top:8px;">[0.0ms] Ingress Gateway: <span class="term-cyan">1.2ms</span></div>
          <div>[1.2ms] Token & mTLS Auth: <span class="term-cyan">2.4ms</span></div>
          <div>[3.6ms] Service Mesh (Go / gRPC): <span class="term-cyan">8.1ms</span></div>
          <div>[11.7ms] PostgreSQL Index Scan: <span class="term-cyan">4.3ms</span></div>
          <div style="margin-top:8px; border-top:1px solid #1e293b; padding-top:6px;">
            <span style="color:#94a3b8;">Total Span:</span> <span class="term-green">16.0ms</span> // Status: 200 OK
          </div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'زمن الاستجابة' : 'Span Budget'}</span><div class="chart-bar"><div class="chart-fill" data-target="32%" style="width: 32%"></div></div><span class="mono chart-num">16ms/50ms</span></div>
          </div>
        </div>
      `;
    } else if (type === 'erp_reconciliation') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">ERP RECONCILIATION BUS</span></div>
          <div style="margin-top:8px;">Source: Odoo Webhook // Event: #invoice_posted</div>
          <div>JSON-Schema Check: <span class="term-green">100% VALIDATED</span></div>
          <div>Ledger Lock: Acquired // Transaction ACK: <span class="term-cyan">CONFIRMED</span></div>
          <div style="margin-top:10px; padding:8px 12px; background:rgba(0,210,255,0.06); border-radius:6px;">
            <span class="term-cyan">Audit Hash:</span> 0x8a91b...c4 // Duplicate Count: 0
          </div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'تطابق المخطط' : 'Schema Match'}</span><div class="chart-bar"><div class="chart-fill" data-target="100%" style="width: 100%"></div></div><span class="mono chart-num">100%</span></div>
          </div>
        </div>
      `;
    } else if (type === 'test_runner') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">AUTOMATED TEST RUNNER</span></div>
          <div style="margin-top:8px;">Unit Tests: <span class="term-green">342 / 342 passed (100%)</span></div>
          <div>API Contract Tests: <span class="term-green">24 / 24 passed</span></div>
          <div>k6 Concurrency: 5,000 VUs // Errors: <span class="term-green">0.00%</span></div>
          <div>Visual Regression: <span class="term-green">0 diffs detected</span></div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'تغطية الشفرة' : 'Code Coverage'}</span><div class="chart-bar"><div class="chart-fill" data-target="96.4%" style="width: 96.4%"></div></div><span class="mono chart-num">96.4%</span></div>
          </div>
        </div>
      `;
    } else if (type === 'bi_pulse') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">EXECUTIVE KPI STREAM // LIVE</span></div>
          <div style="margin-top:8px;">Enterprise Uptime: <span class="term-cyan">99.98%</span> (30 days)</div>
          <div>Processed Invoices: <span class="term-green">14,892 AED 48.2M</span></div>
          <div>Avg Processing Latency: <span class="term-cyan">42ms</span></div>
          <div>Security Incident Count: <span class="term-green">0</span></div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'جاهزية SLA' : 'Uptime SLA'}</span><div class="chart-bar"><div class="chart-fill" data-target="99.98%" style="width: 99.98%"></div></div><span class="mono chart-num">99.98%</span></div>
          </div>
        </div>
      `;
    } else if (type === 'advisory_matrix') {
      return `
        <div class="tech-terminal-block">
          <div><span class="term-green">●</span> <span class="term-cyan">ARCHITECTURAL MATURITY MATRIX</span></div>
          <div style="margin-top:8px;">UAE PDPL Compliance: <span class="term-green">100% CERTIFIED</span></div>
          <div>Disaster Recovery (RTO): <span class="term-cyan">&lt; 15 minutes</span></div>
          <div>Zero-Trust Implementation: <span class="term-green">STAGE 4 (FULL)</span></div>
          <div>Sovereign Cloud Readiness: <span class="term-cyan">TIER III AUDITED</span></div>
          <div class="vitals-chart" style="margin-top:12px;">
            <div class="chart-row"><span class="chart-tag mono">${isAr ? 'امتثال PDPL' : 'PDPL Compliance'}</span><div class="chart-bar"><div class="chart-fill" data-target="100%" style="width: 100%"></div></div><span class="mono chart-num">100%</span></div>
          </div>
        </div>
      `;
    }
    return '';
  }

  // Handle tab click
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const catKey = tab.dataset.tab;
      renderCategory(catKey);
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    });
  });

  // Expose global switcher for search modal
  window.switchTechTab = (catKey) => {
    const targetTab = tabsNav.querySelector(`[data-tab="${catKey}"]`);
    if (targetTab) {
      targetTab.click();
      targetTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  // Pre-fill contact form on domain CTA
  document.addEventListener('click', (e) => {
    const cta = e.target.closest('#tech-domain-cta');
    if (!cta) return;

    const service = cta.getAttribute('data-service') || 'Custom Enterprise Software';
    const select = document.getElementById('form-service');
    const brief = document.getElementById('form-brief');

    if (select) {
      for (let opt of select.options) {
        if (opt.value.includes(service) || service.includes(opt.value)) {
          opt.selected = true;
          break;
        }
      }
    }

    if (brief && !brief.value) {
      brief.value = `Inquiring about enterprise engineering advisory & deployment for ${service}.`;
    }

    const contactSection = document.getElementById('contact');
    if (contactSection && lenis) {
      lenis.scrollTo(contactSection, { offset: -96, duration: 1.6 });
    } else if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    const intakeForm = document.getElementById('intake-form');
    if (intakeForm) {
      intakeForm.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
      intakeForm.style.borderColor = 'var(--cyan)';
      intakeForm.style.boxShadow = '0 0 30px rgba(0,210,255,0.25)';
      setTimeout(() => {
        intakeForm.style.borderColor = 'var(--grid-line)';
        intakeForm.style.boxShadow = 'none';
      }, 1800);
    }
  });

  // Render initial active category
  renderCategory('cat-a');
}

// ── QUICK SEARCH MODAL (Cmd+K / Ctrl+K) ───────────────────────
function initSearchModal() {
  const modal = document.getElementById('search-modal');
  const backdrop = document.getElementById('search-backdrop');
  const input = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  const openBtn = document.getElementById('nav-search-btn');
  if (!modal || !input || !resultsContainer || !openBtn) return;

  const searchIndex = [
    // Sections
    { category: 'Sections', titleEn: 'Core Disciplines', titleAr: 'التخصصات الأساسية', descEn: 'Licensed enterprise computing & AI advisory', descAr: 'خدمات الحوسبة واستشارات الذكاء الاصطناعي', link: '#capabilities', icon: '⚡' },
    { category: 'Sections', titleEn: 'Technology & Stack', titleAr: 'التقنيات وحزم البرمجيات', descEn: '12 specialized engineering disciplines', descAr: '12 تخصصاً هندسياً معتمداً للمؤسسات', link: '#technology', icon: '🛠️' },
    { category: 'Sections', titleEn: 'Proprietary Engines', titleAr: 'المحركات المملوكة', descEn: 'DocuVerify™ & SynapseSearch™ sandboxes', descAr: 'بيئات تفاعلية لمحركات التدقيق والاسترجاع', link: '#products', icon: '⚙️' },
    { category: 'Sections', titleEn: 'Reference Blueprints', titleAr: 'المخططات المعمارية', descEn: 'Zero-trust ERP bridges, sovereign RAG, HITL', descAr: 'مخططات جسور الأنظمة والسحابة السيادية', link: '#blueprints', icon: '📐' },
    { category: 'Sections', titleEn: 'Ecosystem Partners', titleAr: 'شركاء المنظومة', descEn: 'Global cloud, AI, and security infrastructure leaders', descAr: 'رواد البنية التحتية السحابية والذكاء الاصطناعي والأمن السيبراني', link: '#partners', icon: '🤝' },
    { category: 'Sections', titleEn: 'Safety Laws', titleAr: 'قوانين السلامة', descEn: 'Advisory sandboxing & mandatory operator sign-off', descAr: 'العزل الاستشاري والمصادقة الإلزامية', link: '#governance', icon: '🛡️' },
    { category: 'Sections', titleEn: 'Technical Intake & HQ', titleAr: 'الاستقبال التقني والمقر الرئيسي', descEn: 'Direct architect contact & briefing request in Abu Dhabi', descAr: 'التواصل المباشر مع كبار المهندسين في أبوظبي', link: '#contact', icon: '📍' },

    // 12 Technology categories
    { category: 'Technology', tab: 'cat-a', titleEn: 'Web & Frontend Systems', titleAr: 'أنظمة الويب والواجهات الأمامية', descEn: 'React, Next.js, TypeScript, SSR, Micro-frontends', descAr: 'رياكت، نكست، تايب سكريبت، معايير الويب', link: '#technology', icon: '🌐', keywords: 'react next nextjs typescript javascript tailwind vite webpack pwa frontend ui ux web' },
    { category: 'Technology', tab: 'cat-b', titleEn: 'Backend & High-Throughput APIs', titleAr: 'الأنظمة الخلفية وواجهات API عالية التدفق', descEn: 'Go, Python, FastAPI, gRPC, Apache Kafka, Zero-Trust', descAr: 'غو، بايثون، فاست إي بي آي، كافكا، جي آر بي سي', link: '#technology', icon: '⚡', keywords: 'go golang python fastapi grpc kafka rabbitmq graphql rest api microservices backend' },
    { category: 'Technology', tab: 'cat-c', titleEn: 'Mobile & Multi-Platform Systems', titleAr: 'أنظمة الهاتف والمنصات المتعددة', descEn: 'Flutter, Native iOS/Android, SQLite WAL, Biometrics', descAr: 'فلاتر، سويفت، كوتلن، تشفير محلي، بصمة حيوية', link: '#technology', icon: '📱', keywords: 'flutter dart swift kotlin react native mobile ios android sqlite' },
    { category: 'Technology', tab: 'cat-d', titleEn: 'AI & Supervised Machine Learning', titleAr: 'الذكاء الاصطناعي والإشراف المعزز', descEn: 'Human-in-the-Loop, LangGraph, PyTorch, pgvector RAG', descAr: 'الإنسان في الحلقة، لانغ غراف، بايتورش، متجهات', link: '#technology', icon: '🧠', keywords: 'ai ml machine learning rag hitl langgraph pytorch pgvector llm embedding supervised' },
    { category: 'Technology', tab: 'cat-e', titleEn: 'Data Engineering & Databases', titleAr: 'هندسة البيانات وقواعد البيانات المؤسسية', descEn: 'PostgreSQL, Redis, ClickHouse, CDC, TimescaleDB', descAr: 'بوستغرس، ريديس، كليك هاوس، نسخ تكراري', link: '#technology', icon: '🗄️', keywords: 'data database postgresql pgvector redis clickhouse spark snowflake cdc debezium' },
    { category: 'Technology', tab: 'cat-f', titleEn: 'Cloud & Infrastructure DevOps', titleAr: 'السحابة والعمليات السحابية DevOps', descEn: 'Kubernetes, Docker, Terraform, UAE Sovereign Cloud', descAr: 'كوبرنيتس، دوكر، تيرافورم، سحابة الإمارات', link: '#technology', icon: '☁️', keywords: 'cloud devops docker kubernetes k8s terraform helm aws azure proxmox gitops' },
    { category: 'Technology', tab: 'cat-g', titleEn: 'Cybersecurity & Identity Governance', titleAr: 'الأمن السيبراني وحوكمة الهوية', descEn: 'Zero-Trust, mTLS 1.3, Keycloak OIDC, Vault KMS', descAr: 'الثقة الصفرية، كلوك، تشفير متقدم، إدارة مفاتيح', link: '#technology', icon: '🔒', keywords: 'security cybersecurity zero-trust mtls tls keycloak oauth oidc vault rbac identity' },
    { category: 'Technology', tab: 'cat-h', titleEn: 'Observability & Production SRE', titleAr: 'المراقبة الفورية وهندسة الموثوقية SRE', descEn: 'OpenTelemetry, Prometheus, Grafana, Distributed Tracing', descAr: 'أوبن تيليمتري، بروميثيوس، غرافانا، تتبع موزع', link: '#technology', icon: '📊', keywords: 'observability sre opentelemetry prometheus grafana tracing logs metrics alerts' },
    { category: 'Technology', tab: 'cat-i', titleEn: 'Enterprise ERP & CRM Middleware', titleAr: 'برمجيات الوسيطة لأنظمة ERP و CRM', descEn: 'Odoo, SAP NetWeaver, Salesforce REST, Webhooks', descAr: 'أودو، ساب، سيلزفورس، مزامنة مالية وإدارية', link: '#technology', icon: '🔄', keywords: 'erp crm odoo sap salesforce middleware sync reconciliation integration' },
    { category: 'Technology', tab: 'cat-j', titleEn: 'Testing, QA & Formal Verification', titleAr: 'الاختبار وضمان الجودة والتحقق الشكلي', descEn: 'Playwright, Jest, Vitest, k6 Load Testing, Fuzzing', descAr: 'بلاي رايت، اختبارات تلقائية، اختبار الأحمال', link: '#technology', icon: '🧪', keywords: 'qa testing verification playwright jest vitest k6 load test fuzzing regression' },
    { category: 'Technology', tab: 'cat-k', titleEn: 'Analytics, BI & Executive Telemetry', titleAr: 'التحليلات وذكاء الأعمال والرصد التنفيذي', descEn: 'Apache Superset, Metabase, Real-Time Dashboards', descAr: 'سوبرست، لوحات قيادة فورية، تقارير تنفيذية', link: '#technology', icon: '📈', keywords: 'analytics bi superset metabase kpi dashboard telemetry reports' },
    { category: 'Technology', tab: 'cat-l', titleEn: 'Technical Advisory & Architecture', titleAr: 'الاستشارات التقنية والحوكمة المعمارية', descEn: 'Architecture Audits, UAE Compliance, Scalability Roadmaps', descAr: 'تدقيق البنى، الامتثال الإماراتي، خارطة الطريق', link: '#technology', icon: '🏛️', keywords: 'advisory architecture audit roadmap togaf uae compliance disaster recovery' },

    // Engines
    { category: 'Engines', titleEn: 'DocuVerify Engine™', titleAr: 'محرك DocuVerify™', descEn: 'Structured Document Extraction & OCR Sandbox', descAr: 'استخراج المستندات المنظمة والتحقق البشري', link: '#products', icon: '📄', keywords: 'docuverify ocr invoice contract schema extraction parser' },
    { category: 'Engines', titleEn: 'SynapseSearch™', titleAr: 'محرك SynapseSearch™', descEn: 'Grounded Enterprise Neural Retrieval Sandbox', descAr: 'استرجاع معرفي عصبي معزول مع إسناد موثق', link: '#products', icon: '🔍', keywords: 'synapsesearch search rag retrieval citations neural knowledge' },

    // In-House Hardware & Software Projects
    { category: 'Hardware & Software', titleEn: 'FET-HW-01 // Speed Radar & Edge ANPR', titleAr: 'FET-HW-01 // رادار مراقبة السرعة وقراءة اللوحات', descEn: 'Doppler radar & optical Edge-AI camera enclosure', descAr: 'وحدة رادار دوبلر وحاوية كاميرا بصرية بالذكاء الاصطناعي', link: '#project-showcase', icon: '📡', keywords: 'radar anpr speed hardware doppler fet-hw-01 camera roadside' },
    { category: 'Hardware & Software', titleEn: 'FET-AUTO-02 // CAN-Bus Fleet Telemetry', titleAr: 'FET-AUTO-02 // وحدة القياس عن بُعد وتشخيص الأساطيل', descEn: 'CAN-bus / OBD-II vehicle telemetry module & cloud', descAr: 'وحدة أجهزة قياس عن بُعد للمركبات ومنصة سحابية', link: '#project-showcase', icon: '🚗', keywords: 'can-bus obd-ii telemetry fleet automotive fet-auto-02 gps diagnostics' },
    { category: 'Hardware & Software', titleEn: 'FET-UAV-03 // Optical Inspection Drone', titleAr: 'FET-UAV-03 // نظام فحص بصري ذكي للمسيّرات', descEn: 'Onboard computer vision & ground-control software', descAr: 'أجهزة رؤية حاسوبية على متن الطائرة مع برمجيات تحكم', link: '#project-showcase', icon: '🛸', keywords: 'drone uav optical thermal vision inspection fet-uav-03 mavlink' },
    { category: 'Hardware & Software', titleEn: 'FET-SW-04 // Sovereign Enterprise AI Suite', titleAr: 'FET-SW-04 // حزمة الذكاء الاصطناعي السيادي للمؤسسات', descEn: 'Unified DocuVerify™, SynapseSearch™ & RAG platform', descAr: 'منصة موحدة تضم دكوفيريفاي وسينابسرش وتصنيف البيانات', link: '#project-showcase', icon: '🏛️', keywords: 'sovereign enterprise docuverify synapsesearch rag platform fet-sw-04' },

    // Blueprints
    { category: 'Blueprints', titleEn: 'FET-ARC-01 // Zero-Trust ERP Bridge', titleAr: 'FET-ARC-01 // جسر ERP بمبدأ الثقة الصفرية', descEn: 'Legacy ERP/CRM synchronization with modern portals', descAr: 'مزامنة قواعد بيانات ERP/CRM القديمة', link: '#blueprints', icon: '📐', keywords: 'arc-01 legacy erp sap odoo bridge' },
    { category: 'Blueprints', titleEn: 'FET-ARC-02 // Supervised Multi-Agent Console', titleAr: 'FET-ARC-02 // وحدة تحكم الوكلاء المتعددين', descEn: 'HITL orchestration with mandatory manager sign-off', descAr: 'تنسيق الوكلاء المتعددين مع موافقة إلزامية', link: '#blueprints', icon: '🤖', keywords: 'arc-02 multi-agent agents hitl console approval' },
    { category: 'Blueprints', titleEn: 'FET-ARC-03 // Private Cloud & Sovereign RAG', titleAr: 'FET-ARC-03 // السحابة الخاصة وقاعدة RAG السيادية', descEn: 'Context-isolated UAE cloud document intelligence', descAr: 'ذكاء مستندات سحابي معزول في الإمارات', link: '#blueprints', icon: '☁️', keywords: 'arc-03 sovereign rag private cloud uae' },
    { category: 'Blueprints', titleEn: 'FET-ARC-04 // Real-Time Command Portal', titleAr: 'FET-ARC-04 // بوابة القيادة والرصد الفوري', descEn: 'Bilingual executive web and mobile telemetry dashboard', descAr: 'لوحة معلومات تنفيذية ثنائية اللغة للويب والهاتف', link: '#blueprints', icon: '🖥️', keywords: 'arc-04 command portal dashboard executive mobile' },

    // Ecosystem Partners
    { category: 'Partners', titleEn: 'Amazon Web Services (AWS)', titleAr: 'خدمات أمازون ويب (AWS)', descEn: 'AWS UAE (me-central-1) sovereign cloud infrastructure & EKS', descAr: 'بنية تحتية سحابية في الإمارات وحاويات كوبرنيتس مُدارة', link: '#partners', icon: '☁️', keywords: 'aws amazon cloud me-central-1 uae eks sovereign' },
    { category: 'Partners', titleEn: 'Microsoft Azure', titleAr: 'مايكروسوفت أزور (Azure)', descEn: 'Azure Entra ID enterprise identity & zero-trust governance', descAr: 'إدارة الهوية المؤسسية والسحابة الهجينة وحوكمة الدخول', link: '#partners', icon: '🔷', keywords: 'azure microsoft entra id identity active directory hybrid zero-trust' },
    { category: 'Partners', titleEn: 'OpenAI & Anthropic', titleAr: 'أوبن إيه آي وأنثروبيك', descEn: 'Frontier foundation models in isolated supervised HITL workflows', descAr: 'نماذج لغوية تأسيسية معزولة مع الإشراف البشري الإلزامي', link: '#partners', icon: '🧠', keywords: 'openai anthropic claude gpt hitl llm models' },
    { category: 'Partners', titleEn: 'NVIDIA', titleAr: 'إنفيديا (NVIDIA)', descEn: 'GPU compute and TensorRT acceleration for private inference', descAr: 'معالجات رسومية وتسريع الاستدلال الخاص بالذكاء الاصطناعي', link: '#partners', icon: '⚡', keywords: 'nvidia gpu tensorrt cuda inference acceleration' },
    { category: 'Partners', titleEn: 'Snowflake & PostgreSQL', titleAr: 'سنوفليك وبوستغرس كيو إل', descEn: 'ACID relational databases and pgvector enterprise RAG', descAr: 'قواعد بيانات علائقية وتخزين المتجهات لخطوط البيانات المؤسسية', link: '#partners', icon: '🗄️', keywords: 'snowflake postgresql postgres pgvector database vector sql' },
    { category: 'Partners', titleEn: 'Cloudflare & Docker', titleAr: 'كلاودفلير ودوكر', descEn: 'Zero-trust API gateways, mTLS encryption & container security', descAr: 'بوابات واجهات برمجة معزولة وتشفير حاويات ميكروسيرفيسز', link: '#partners', icon: '🛡️', keywords: 'cloudflare docker containers mtls api gateway zero-trust edge' }
  ];

  function openSearch() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    input.value = '';
    renderResults('');
    setTimeout(() => input.focus(), 60);
  }

  function closeSearch() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    input.blur();
  }

  function renderResults(q) {
    const query = q.trim().toLowerCase();
    const isAr = currentLang === 'ar';
    let filtered = searchIndex;

    if (query) {
      filtered = searchIndex.filter(item => {
        const title = (isAr ? item.titleAr : item.titleEn).toLowerCase();
        const desc = (isAr ? item.descAr : item.descEn).toLowerCase();
        const kw = (item.keywords || '').toLowerCase();
        return title.includes(query) || desc.includes(query) || kw.includes(query);
      });
    }

    if (!filtered.length) {
      resultsContainer.innerHTML = `<div class="search-empty mono">${isAr ? 'لم يتم العثور على نتائج مطابقة للبحث.' : 'No matching architectural components found.'}</div>`;
      return;
    }

    const groups = {};
    filtered.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });

    let html = '';
    for (const [cat, items] of Object.entries(groups)) {
      let groupLabel = cat;
      if (isAr) {
        if (cat === 'Sections') groupLabel = 'الأقسام الرئيسية';
        else if (cat === 'Technology') groupLabel = 'التخصصات الهندسية';
        else if (cat === 'Engines') groupLabel = 'المحركات المملوكة';
        else if (cat === 'Blueprints') groupLabel = 'المخططات المعمارية';
      }
      html += `<div class="search-group-title mono">${groupLabel}</div>`;
      items.forEach(item => {
        const title = isAr ? item.titleAr : item.titleEn;
        const desc = isAr ? item.descAr : item.descEn;
        html += `
          <div class="search-result-item" data-link="${item.link}" data-tab="${item.tab || ''}">
            <div class="search-item-left">
              <span class="search-item-icon">${item.icon}</span>
              <div class="search-item-text">
                <span class="search-item-title">${title}</span>
                <span class="search-item-desc">${desc}</span>
              </div>
            </div>
            <span class="search-item-badge mono">${cat}</span>
          </div>
        `;
      });
    }

    resultsContainer.innerHTML = html;

    resultsContainer.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const link = el.dataset.link;
        const tab = el.dataset.tab;
        closeSearch();

        if (tab && window.switchTechTab) {
          window.switchTechTab(tab);
        }

        const target = document.querySelector(link);
        if (target && lenis) {
          lenis.scrollTo(target, { offset: -96, duration: 1.6 });
        } else if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  openBtn.addEventListener('click', openSearch);
  backdrop.addEventListener('click', closeSearch);

  input.addEventListener('input', (e) => renderResults(e.target.value));

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (modal.classList.contains('open')) closeSearch();
      else openSearch();
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeSearch();
    } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
  });
}

// ── MARQUEE CLONE ────────────────────────────────────────────
function initMarqueeClone() {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  const items = track.innerHTML;
  track.innerHTML = items + items;
}

// ── INTERACTIONS ─────────────────────────────────────────────
function initInteractions() {
  // Language Toggle
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(currentLang);
    });
  }

  // Mobile Menu
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileBtn.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // DocuVerify Sign-Off
  const signoffBtn = document.getElementById('signoff-btn');
  const dvStatus = document.getElementById('dv-status');
  if (signoffBtn && dvStatus) {
    dvStatus.classList.add('pending');
    dvStatus.textContent = 'PENDING_REVIEW';
    signoffBtn.addEventListener('click', () => {
      const isApproved = dvStatus.classList.contains('approved');
      if (isApproved) {
        dvStatus.textContent = 'PENDING_REVIEW';
        dvStatus.classList.remove('approved');
        dvStatus.classList.add('pending');
        signoffBtn.textContent = translations[currentLang].dv_signoff;
      } else {
        dvStatus.textContent = 'OPERATOR_APPROVED';
        dvStatus.classList.remove('pending');
        dvStatus.classList.add('approved');
        signoffBtn.textContent = currentLang === 'ar' ? '✓ تمت المصادقة — إعادة ضبط' : '✓ Approved — Reset';
        signoffBtn.classList.add('signed');
      }
    });
  }

  // SynapseSearch Queries
  const queryChips = document.querySelectorAll('.query-chip');
  const synapseResponse = document.getElementById('synapse-response');

  const responses = {
    compliance: {
      en: {
        text: "According to the Corporate Data Governance Framework, all operational data must be retained for a minimum of 7 years in compliance with UAE Federal Law No. 45 of 2021 (Personal Data Protection). Archival storage must use AES-256 encryption with quarterly access audits.",
        citations: ["Policy_Doc_v3.pdf // Sec 4.1", "UAE_PDPL_Compliance.pdf // Art 28"]
      },
      ar: {
        text: "وفقاً لإطار حوكمة البيانات المؤسسية، يجب الاحتفاظ بجميع البيانات التشغيلية لمدة لا تقل عن 7 سنوات امتثالاً للقانون الاتحادي الإماراتي رقم 45 لسنة 2021 (حماية البيانات الشخصية). يجب أن يستخدم التخزين الأرشيفي تشفير AES-256 مع تدقيقات وصول ربع سنوية.",
        citations: ["Policy_Doc_v3.pdf // القسم 4.1", "UAE_PDPL_Compliance.pdf // المادة 28"]
      }
    },
    onboarding: {
      en: {
        text: "The employee onboarding process consists of 12 mandatory steps including: identity verification, NDA signing, system access provisioning (RBAC), security awareness training, and a 30-day probation checkpoint with manager review.",
        citations: ["HR_Onboarding_SOP_v2.pdf // Sec 2", "IT_Access_Policy.pdf // Sec 5.3"]
      },
      ar: {
        text: "تتكون عملية تأهيل الموظفين من 12 خطوة إلزامية تشمل: التحقق من الهوية، توقيع اتفاقية عدم الإفصاح، توفير الوصول للنظام (RBAC)، تدريب الوعي الأمني، ونقطة مراجعة فترة الاختبار لمدة 30 يوماً مع مراجعة المدير.",
        citations: ["HR_Onboarding_SOP_v2.pdf // القسم 2", "IT_Access_Policy.pdf // القسم 5.3"]
      }
    },
    security: {
      en: {
        text: "The incident response protocol follows a 5-phase model: (1) Detection & Alerting via SIEM within 15 minutes, (2) Triage & Classification by on-call security engineer, (3) Containment with automated network segmentation, (4) Remediation & Recovery, (5) Post-Incident Review within 48 hours.",
        citations: ["Security_IRP_v4.pdf // Sec 3", "SIEM_Config_Guide.pdf // Sec 7"]
      },
      ar: {
        text: "يتبع بروتوكول الاستجابة للحوادث نموذجاً من 5 مراحل: (1) الكشف والتنبيه عبر SIEM خلال 15 دقيقة، (2) الفرز والتصنيف من قبل مهندس الأمن المناوب، (3) الاحتواء مع التقسيم الشبكي الآلي، (4) المعالجة والاستعادة، (5) مراجعة ما بعد الحادث خلال 48 ساعة.",
        citations: ["Security_IRP_v4.pdf // القسم 3", "SIEM_Config_Guide.pdf // القسم 7"]
      }
    }
  };

  queryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      queryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const query = chip.dataset.query;
      const data = responses[query][currentLang];
      if (synapseResponse && data) {
        synapseResponse.innerHTML = `
          <div class="response-content">
            <p class="response-text">${data.text}</p>
            <div class="citation-pills">
              ${data.citations.map(c => `<span class="citation-pill">${c}</span>`).join('')}
            </div>
          </div>
        `;
      }
    });
  });

  // Blueprint Filter Tabs
  const blueprintFilterTabs = document.querySelectorAll('#filter-tabs .filter-tab');
  const bpCards = document.querySelectorAll('.bp-card');

  blueprintFilterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      blueprintFilterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      bpCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
      if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    });
  });

  // Project Showcase Filter Tabs
  const projectFilterTabs = document.querySelectorAll('#project-filter-tabs .project-filter-tab');
  const projectCardSlots = document.querySelectorAll('.project-card-slot');

  projectFilterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projectFilterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      projectCardSlots.forEach(slot => {
        const card = slot.querySelector('.project-card');
        if (!card) return;
        const categories = (card.dataset.category || '').split(' ');
        const matches = (filter === 'all' || categories.includes(filter));

        if (matches) {
          slot.classList.remove('hidden');
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            onComplete: () => {
              card.classList.add('is-revealed');
            }
          });
        } else {
          slot.classList.add('hidden');
        }
      });
      if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    });
  });

  // Blueprint CTAs -> pre-fill contact form
  document.querySelectorAll('.bp-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.dataset.service;
      const select = document.getElementById('form-service');
      const brief = document.getElementById('form-brief');
      if (select) {
        for (let opt of select.options) {
          if (opt.value === service) {
            opt.selected = true;
            break;
          }
        }
      }
      if (brief && !brief.value) {
        brief.value = `Requesting custom architecture review and deployment feasibility briefing for ${service}.`;
      }
      const contactSection = document.getElementById('contact');
      if (contactSection && lenis) {
        lenis.scrollTo(contactSection, { offset: -96, duration: 1.6 });
      } else if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      const intakeForm = document.getElementById('intake-form');
      if (intakeForm) {
        intakeForm.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
        intakeForm.style.borderColor = 'var(--cyan)';
        intakeForm.style.boxShadow = '0 0 30px rgba(0,210,255,0.25)';
        setTimeout(() => {
          intakeForm.style.borderColor = 'var(--grid-line)';
          intakeForm.style.boxShadow = 'none';
        }, 1800);
      }
    });
  });

  // Copy Email
  const copyBtn = document.getElementById('copy-email-btn');
  const copyIndicator = document.getElementById('copy-indicator');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('info@flamingo-technology.com').then(() => {
        copyIndicator.classList.add('show');
        setTimeout(() => copyIndicator.classList.remove('show'), 2000);
      }).catch(() => {
        const tmp = document.createElement('textarea');
        tmp.value = 'info@flamingo-technology.com';
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
        copyIndicator.classList.add('show');
        setTimeout(() => copyIndicator.classList.remove('show'), 2000);
      });
    });
  }

  // Submit Email
  const submitEmail = document.getElementById('submit-email');
  if (submitEmail) {
    submitEmail.addEventListener('click', () => {
      const name = document.getElementById('form-name').value;
      const org = document.getElementById('form-org').value;
      const email = document.getElementById('form-email').value;
      const phone = document.getElementById('form-phone').value;
      const service = document.getElementById('form-service').value;
      const brief = document.getElementById('form-brief').value;

      const subject = encodeURIComponent(`Technical Intake Request — ${service}`);
      const body = encodeURIComponent(
        `Full Name: ${name}\nOrganization: ${org}\nWork Email: ${email}\nPhone: ${phone}\nService of Interest: ${service}\n\nProject Brief:\n${brief}`
      );
      window.open(`mailto:info@flamingo-technology.com?subject=${subject}&body=${body}`, '_self');
    });
  }

  // Submit WhatsApp
  const submitWA = document.getElementById('submit-wa');
  if (submitWA) {
    submitWA.addEventListener('click', () => {
      const name = document.getElementById('form-name').value;
      const org = document.getElementById('form-org').value;
      const service = document.getElementById('form-service').value;
      const brief = document.getElementById('form-brief').value;

      const message = encodeURIComponent(
        `*Technical Intake — Flamingo Emerging Technologies*\n\nName: ${name}\nOrganization: ${org}\nService: ${service}\n\nBrief:\n${brief}`
      );
      window.open(`https://wa.me/971506802332?text=${message}`, '_blank');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      if (anchor.id === 'brand-lockup' || anchor.id === 'nav-brand') {
        e.preventDefault();
        const heroEl = document.getElementById('hero');
        if (heroEl) {
          if (lenis) {
            lenis.scrollTo(heroEl, { offset: -90, duration: 1.4 });
          } else {
            const top = heroEl.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
        return;
      }
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target && lenis) {
        lenis.scrollTo(target, { offset: -84, duration: 1.5 });
      } else if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - 84;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── BILINGUAL LANGUAGE SWITCHER ──────────────────────────────
function applyLanguage(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
  // ALWAYS lock layout to LTR so nothing flips and FLAMINGO never reverses into OGNIMALF
  html.setAttribute('dir', 'ltr');

  // Update text for all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update card trigger buttons in-place
  document.querySelectorAll('.expandable-card').forEach(card => {
    const btn = card.querySelector('.more-details-btn, .card-trigger-pill');
    if (!btn) return;
    btn.innerHTML = `<span>${lang === 'ar' ? 'التفاصيل الكاملة' : 'More Details'}</span> <span class="trigger-arrow safari-arrow">↗&#xFE0E;</span>`;
  });

  // Update modal close button if present
  const modalCloseLabel = document.querySelector('#spec-modal-close-btn .close-label');
  if (modalCloseLabel) {
    modalCloseLabel.textContent = lang === 'ar' ? 'إغلاق' : 'Close';
  }

  // Update language toggle styling
  const langEn = document.querySelector('.lang-en');
  const langAr = document.querySelector('.lang-ar');
  if (langEn && langAr) {
    if (lang === 'ar') {
      langAr.style.color = 'var(--cobalt)';
      langAr.style.fontWeight = '700';
      langEn.style.color = 'var(--slate)';
      langEn.style.fontWeight = '400';
    } else {
      langEn.style.color = 'var(--cobalt)';
      langEn.style.fontWeight = '700';
      langAr.style.color = 'var(--slate)';
      langAr.style.fontWeight = '400';
    }
  }

  // Update search input placeholder
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.placeholder = lang === 'ar'
      ? 'ابحث في البنى المعمارية، التقنيات، المحركات، والمخططات...'
      : 'Search architecture, technologies, engines, categories...';
  }

  // Refresh active category card in technology showcase
  if (window.switchTechTab && activeTechCategory) {
    window.switchTechTab(activeTechCategory);
  }

  // Reset SynapseSearch if a query was active
  const activeChip = document.querySelector('.query-chip.active');
  if (activeChip) {
    activeChip.click();
  }

  // Refresh ScrollTrigger calculations on direction switch
  if (window.ScrollTrigger) {
    ScrollTrigger.refresh();
  }
}

// ── OPTION A: SINGLE ROOT-LEVEL CENTERED SPEC MODAL ──────────
// Clean Click-to-Open & Click/Esc-to-Close Architecture
function initExpandableCards() {
  const modal = document.getElementById('global-spec-modal');
  const backdrop = document.getElementById('focus-backdrop') || document.getElementById('card-expand-backdrop');
  const closeBtn = document.getElementById('spec-modal-close-btn');
  const cards = document.querySelectorAll('.expandable-card');
  if (!modal || !cards.length) return;

  const modalBadges = modal.querySelector('.spec-modal-badges');
  const modalMedia = modal.querySelector('.spec-modal-media');
  const modalTitle = modal.querySelector('.spec-modal-title');
  const modalLead = modal.querySelector('.spec-modal-lead');
  const modalBody = modal.querySelector('.spec-modal-body');

  function openSpecModal(card) {
    if (!card) return;
    const isAr = (currentLang === 'ar') || (document.documentElement.getAttribute('lang') === 'ar');

    // 1. Populate Badges
    if (modalBadges) {
      modalBadges.innerHTML = '';
      const badges = card.querySelectorAll('.project-badge, .project-code, .engine-badge, .bento-badge, .card-badge');
      if (badges.length) {
        badges.forEach(b => {
          const badgeSpan = document.createElement('span');
          badgeSpan.className = 'spec-modal-badge mono';
          badgeSpan.textContent = b.textContent.trim();
          modalBadges.appendChild(badgeSpan);
        });
      }
    }

    // 2. Populate Media / Visual Preview
    if (modalMedia) {
      modalMedia.innerHTML = '';
      const img = card.querySelector('.project-card-image, .bento-cover, .hero-image');
      if (img && img.src && !img.src.includes('undefined')) {
        const clonedImg = document.createElement('img');
        clonedImg.src = img.src;
        clonedImg.alt = img.alt || 'Project specification visual';
        clonedImg.className = 'spec-modal-img';
        modalMedia.appendChild(clonedImg);
        modalMedia.style.display = 'block';
      } else {
        modalMedia.style.display = 'none';
      }
    }

    // 3. Populate Title
    if (modalTitle) {
      const titleEl = card.querySelector('.bento-title, .engine-name, .project-card-title, .showcase-title, h3');
      modalTitle.textContent = titleEl ? titleEl.textContent.trim() : '';
    }

    // 4. Populate Lead Summary
    if (modalLead) {
      const leadEl = card.querySelector('.bento-desc, .engine-desc, .project-card-lead, .showcase-desc, p.lead, p:not(.spec-block-desc)');
      modalLead.textContent = leadEl ? leadEl.textContent.trim() : '';
    }

    // 5. Populate Spec Drawer Content
    if (modalBody) {
      modalBody.innerHTML = '';
      const drawer = card.querySelector('.spec-drawer-inner, .spec-drawer-scroll, .expanded-spec-drawer');
      if (drawer) {
        const clone = drawer.cloneNode(true);
        // Strip out any redundant button tags from drawer content so only root close button exists
        clone.querySelectorAll('.spec-close-pill, .spec-close-btn, .more-details-btn, .card-trigger-pill, .card-trigger-zone, button').forEach(el => el.remove());
        modalBody.innerHTML = clone.innerHTML;
      }
    }

    // 6. Update Close Button label according to language
    if (closeBtn) {
      const labelSpan = closeBtn.querySelector('.close-label');
      if (labelSpan) {
        labelSpan.textContent = isAr ? 'إغلاق' : 'Close';
      }
    }

    // 7. RTL text alignment handling
    if (isAr) {
      modal.classList.add('is-rtl');
      modal.setAttribute('dir', 'rtl');
    } else {
      modal.classList.remove('is-rtl');
      modal.setAttribute('dir', 'ltr');
    }

    // 8. Open modal & Pause Lenis Smooth Scroll
    modal.setAttribute('aria-hidden', 'false');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-is-open');

    // Reset inner content scroll position to top
    const modalInner = modal.querySelector('.spec-modal-inner');
    if (modalInner) {
      modalInner.scrollTop = 0;
    }

    // Pause Lenis smooth scroll so mouse wheel events exclusively scroll the modal
    if (lenis) {
      lenis.stop();
    }

    // Focus close button for accessibility
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }

  function closeSpecModal() {
    document.body.classList.remove('modal-is-open');
    if (modal) modal.setAttribute('aria-hidden', 'true');
    if (backdrop) backdrop.setAttribute('aria-hidden', 'true');

    // Resume Lenis smooth scroll
    if (lenis) {
      lenis.start();
    }
  }

  // Prevent Lenis / window from hijacking mouse-wheel scrolling inside modal
  modal.addEventListener('wheel', (e) => {
    e.stopPropagation();
  }, { passive: false });

  // Attach click listeners to cards and trigger buttons
  cards.forEach(card => {
    // Single Trigger Button inside card
    const triggerBtn = card.querySelector('.more-details-btn, .card-trigger-pill');
    if (triggerBtn) {
      triggerBtn.classList.add('more-details-btn');
      triggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openSpecModal(card);
      });
    }

    // Click anywhere on card (excluding other action buttons / inputs / sandbox controls)
    card.addEventListener('click', (e) => {
      if (e.target.closest('button, a, input, select, textarea, .signoff-btn, .sandbox-pane')) {
        return;
      }
      openSpecModal(card);
    });
  });

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeSpecModal();
    });
  }

  // Backdrop click closes modal
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      e.preventDefault();
      closeSpecModal();
    });
  }

  // Click anywhere outside modal card box closes modal
  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('modal-is-open')) return;
    if (modal && modal.getAttribute('aria-hidden') !== 'true' && !modal.contains(e.target) && !e.target.closest('.more-details-btn, .card-trigger-pill, .expandable-card, #legal-modal-overlay, #legal-modal-inner, .site-footer-link')) {
      closeSpecModal();
    }
  });

  // Escape key closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('modal-is-open')) {
      closeSpecModal();
    }
  });

  // Expose helpers globally if needed
  window.closeSpecModal = closeSpecModal;
  window.openSpecModal = openSpecModal;
}

// ── ENTERPRISE LEGAL & PRIVACY MODAL ─────────────────────────
const legalDocuments = {
  "Privacy Policy": `
    <h3>1. Edge-First Data Processing</h3>
    <p>Flamingo Emerging Technologies utilizes an edge-first telemetry architecture. Primary data processing and AI inference occur strictly on-device, ensuring sensitive operational data never unnecessarily traverses public networks.</p>
    <h3>2. Telemetry & Sovereign Storage</h3>
    <p>Where cloud synchronization is required, data is encrypted in transit and at rest using AES-256 protocols. We enforce strict data sovereignty, ensuring your localized data remains within your designated geographic jurisdiction.</p>
    <h3>3. Zero Unmonitored Execution</h3>
    <p>We do not use customer telemetry data to train baseline AI models without explicit enterprise opt-in. Our systems are engineered for total transparency and auditability.</p>
  `,
  "Terms of Service": `
    <h3>1. Enterprise Licensing & Usage</h3>
    <p>Access to Flamingo's proprietary telemetry dashboards and edge AI models is granted via enterprise licensing. Reverse engineering, decompiling, or attempting to extract the underlying neural network weights from deployed edge devices is strictly prohibited.</p>
    <h3>2. Service Level Agreements (SLA)</h3>
    <p>Flamingo provides production-hardened frameworks with guaranteed uptime as defined in your specific enterprise contract. Maintenance windows and edge-device firmware over-the-air (OTA) updates are scheduled in coordination with your IT administrators.</p>
    <h3>3. Liability & Deployment</h3>
    <p>While our systems are engineered for high-stakes environments, Flamingo software is provided as a telemetry and decision-support tool. Final operational authority remains with the deploying enterprise.</p>
  `,
  "Security": `
    <h3>1. Zero-Trust Architecture</h3>
    <p>Our distributed architectures operate on a zero-trust model. Every edge node, API request, and telemetry payload requires strict cryptographic authentication before being admitted to the central network.</p>
    <h3>2. Hardware-Level Security</h3>
    <p>Flamingo edge deployments utilize secure enclaves and hardware-backed keystores to protect API credentials and AI models from physical tampering or unauthorized extraction.</p>
    <h3>3. Compliance & Auditing</h3>
    <p>We actively engineer our stacks to meet and exceed global standards for data protection, including GDPR and SOC 2 Type II architectural requirements. Independent penetration testing is conducted annually.</p>
  `
};

function initLegalModal() {
  const overlay = document.getElementById('legal-modal-overlay');
  const inner = document.getElementById('legal-modal-inner');
  const closeBtn = document.getElementById('close-legal-btn');
  const titleEl = document.getElementById('legal-modal-title');
  const contentEl = overlay ? overlay.querySelector('.legal-content') : null;
  const footerLinks = document.querySelectorAll('.site-footer-link');

  if (!overlay || !inner || !closeBtn || !footerLinks.length) return;

  function openLegalModal(docKey, displayTitle) {
    const content = legalDocuments[docKey] || legalDocuments["Privacy Policy"];
    if (titleEl) titleEl.textContent = displayTitle || docKey;
    if (contentEl) contentEl.innerHTML = content;

    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
    });

    document.body.classList.add('legal-modal-is-open');
    if (lenis) lenis.stop();
    inner.scrollTop = 0;
    setTimeout(() => closeBtn.focus(), 50);
  }

  function closeLegalModal() {
    overlay.style.opacity = '0';
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.classList.remove('legal-modal-is-open');
      if (lenis) lenis.start();
    }, 250);
  }

  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const i18nKey = link.getAttribute('data-i18n');
      let docKey = 'Privacy Policy';
      if (i18nKey === 'footer_terms' || (link.textContent && link.textContent.includes('Terms'))) {
        docKey = 'Terms of Service';
      } else if (i18nKey === 'footer_security' || (link.textContent && link.textContent.includes('Security'))) {
        docKey = 'Security';
      }
      openLegalModal(docKey, link.textContent.trim());
    });
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeLegalModal();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeLegalModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.style.display === 'flex') {
      closeLegalModal();
    }
  });

  overlay.addEventListener('wheel', (e) => {
    e.stopPropagation();
  }, { passive: false });
}

// ── ULTRA-SLOW UPWARD SCROLL REVEALS (y: 85px/95px -> 0px, duration: 2.3s–2.35s) ──
// Every element outside the Hero moves UPWARD SLOWLY when scrolled into view
function initScrollReveals() {
  if (!window.ScrollTrigger) return;

  // 1. All Oversized Two-Tone Section Headings & Subtitles (y: 85px -> 0px, duration: 2.3s, stagger: 0.22s)
  document.querySelectorAll('.editorial-header').forEach(header => {
    const heading = header.querySelector('.editorial-heading');
    const desc = header.querySelector('.editorial-desc');
    const divider = header.querySelector('.editorial-divider');
    const elements = [heading, desc, divider].filter(Boolean);

    gsap.fromTo(elements, {
      y: 85,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 2.3,
      stagger: 0.22,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: header,
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });
  });

  // 2. Marquee Section: label & track wrapper move upward slowly
  const marqueeSection = document.getElementById('stack-marquee');
  if (marqueeSection) {
    const marqueeItems = marqueeSection.querySelectorAll('.marquee-label, .marquee-track-wrapper');
    gsap.fromTo(marqueeItems, {
      y: 65,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.8,
      stagger: 0.16,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: marqueeSection,
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 3. Technical Stack Category Tabs (y: 65px -> 0px, duration: 1.8s, stagger: 0.08s)
  const techTabs = document.querySelectorAll('.tech-tabs-nav .tech-tab');
  if (techTabs.length) {
    gsap.fromTo(techTabs, {
      y: 65,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.8,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.tech-tabs-wrapper',
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 4. Large Dark-Gray (#181A20) Technical Stack Window (y: 95px -> 0px, duration: 2.35s)
  const techCard = document.getElementById('tech-card');
  if (techCard) {
    gsap.fromTo(techCard, {
      y: 95,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 2.35,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#tech-showcase-container',
        start: 'top 82%',
        toggleActions: 'play none none none'
      }
    });
  }

  // 5. Core Disciplines Bento Cards (y: 95px -> 0px, duration: 2.35s, stagger: 0.24s)
  const bentoCards = document.querySelectorAll('#capabilities .bento-card');
  if (bentoCards.length) {
    bentoCards.forEach((card, idx) => {
      gsap.fromTo(card, {
        y: 95,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 2.35,
        delay: idx * 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#capabilities .bento-grid',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        onComplete: () => {
          card.classList.add('is-revealed');
          gsap.set(card, { clearProps: 'y,transform' });
        }
      });
    });
  }

  // 6. Proprietary Engines Sandboxes (DocuVerify & SynapseSearch) (y: 95px -> 0px, duration: 2.35s)
  const engineCards = document.querySelectorAll('#products .engine-card');
  engineCards.forEach(card => {
    gsap.fromTo(card, {
      y: 95,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 2.35,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 82%',
        toggleActions: 'play none none none'
      },
      onComplete: () => {
        card.classList.add('is-revealed');
        gsap.set(card, { clearProps: 'y,transform' });
      }
    });
  });

  // 6b. Proprietary Hardware & Software Project Showcase (Heading & 4 Project Cards)
  const projectShowcase = document.getElementById('project-showcase');
  if (projectShowcase) {
    const showcaseHeader = projectShowcase.querySelector('.project-showcase-header');
    if (showcaseHeader) {
      gsap.fromTo(showcaseHeader, {
        y: 90,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 2.35,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: showcaseHeader,
          start: 'top 82%',
          toggleActions: 'play none none none'
        }
      });
    }

    const projectCards = projectShowcase.querySelectorAll('.project-card');
    if (projectCards.length) {
      projectCards.forEach((card, idx) => {
        gsap.fromTo(card, {
          y: 90,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 2.35,
          delay: idx * 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.project-cards-grid',
            start: 'top 82%',
            toggleActions: 'play none none none'
          },
          onComplete: () => {
            card.classList.add('is-revealed');
            gsap.set(card, { clearProps: 'y,transform' });
          }
        });
      });
    }
  }

  // 7. Solution Blueprints Cards (y: 95px -> 0px, duration: 2.35s, stagger: 0.24s)
  const bpCards = document.querySelectorAll('.blueprints-grid .bp-card');
  if (bpCards.length) {
    bpCards.forEach((card, idx) => {
      gsap.fromTo(card, {
        y: 95,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 2.35,
        delay: idx * 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blueprints-grid',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        onComplete: () => {
          card.classList.add('is-revealed');
          gsap.set(card, { clearProps: 'y,transform' });
        }
      });
    });
  }

  // 8. Ecosystem Partners Cards (y: 95px -> 0px, duration: 2.35s, stagger: 0.24s)
  const partnerCards = document.querySelectorAll('.partners-grid .partner-card');
  if (partnerCards.length) {
    partnerCards.forEach((card, idx) => {
      gsap.fromTo(card, {
        y: 95,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 2.35,
        delay: idx * 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.partners-grid',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        onComplete: () => {
          card.classList.add('is-revealed');
          gsap.set(card, { clearProps: 'y,transform' });
        }
      });
    });
  }

  // 9. Safety Laws / Governance Pillars (y: 95px -> 0px, duration: 2.35s, stagger: 0.24s)
  const govCards = document.querySelectorAll('.governance-grid .gov-card');
  if (govCards.length) {
    govCards.forEach((card, idx) => {
      gsap.fromTo(card, {
        y: 95,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 2.35,
        delay: idx * 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.governance-grid',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        onComplete: () => {
          card.classList.add('is-revealed');
          gsap.set(card, { clearProps: 'y,transform' });
        }
      });
    });
  }

  // 10. Contact Section: HQ Card, Direct Contacts & Intake Form (y: 95px -> 0px, duration: 2.35s, stagger: 0.24s)
  const contactBlocks = document.querySelectorAll('.contact-left .hq-card, .contact-left .direct-contacts, .contact-right .intake-form');
  if (contactBlocks.length) {
    contactBlocks.forEach((block, idx) => {
      gsap.fromTo(block, {
        y: 95,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 2.35,
        delay: idx * 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-grid',
          start: 'top 82%',
          toggleActions: 'play none none none'
        },
        onComplete: () => {
          block.classList.add('is-revealed');
          gsap.set(block, { clearProps: 'y,transform' });
        }
      });
    });
  }
}

// ── CIRCUIT LINE (Governance) ─────────────────────────────────
function initCircuitLine() {
  const circuitPath = document.getElementById('circuit-path');
  if (!circuitPath) return;

  ScrollTrigger.create({
    trigger: '#governance',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1.2,
    onUpdate: (self) => {
      const progress = self.progress;
      circuitPath.style.strokeDashoffset = 1200 - (progress * 1200);
    }
  });
}

// ── CI TERMINAL ANIMATION ────────────────────────────────────
(function ciTerminalAnim() {
  const spinnerChars = ['◐', '◓', '◑', '◒'];
  let spinIdx = 0;
  setInterval(() => {
    const spinner = document.querySelector('.spinner');
    if (spinner) {
      spinner.textContent = spinnerChars[spinIdx % spinnerChars.length];
      spinIdx++;
    }
  }, 250);

  // Pipeline latency flicker
  setInterval(() => {
    const latency = document.querySelector('.pipeline-latency');
    if (latency) {
      const val = 40 + Math.floor(Math.random() * 25);
      latency.textContent = val + 'ms';
    }
  }, 2000);
})();

// ── YEAR ──────────────────────────────────────────────────────
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ── PRE-DECODE PROJECT IMAGES (Zero Main-Thread Scroll Lag) ───
function preDecodeProjectImages() {
  if ('decode' in HTMLImageElement.prototype) {
    document.querySelectorAll('.project-card-image').forEach(img => {
      if (img.complete) {
        img.decode().catch(() => {});
      } else {
        img.addEventListener('load', () => {
          img.decode().catch(() => {});
        }, { once: true });
      }
    });
  }
}

