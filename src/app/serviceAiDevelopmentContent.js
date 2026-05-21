const sixSteps = (items) => items.map((item, i) => ({ n: i + 1, ...item }));

export const serviceAiDevelopmentContent = {
  computervision: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "Computer Vision Development",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Use Case & Camera Planning",
        description:
          "Define detection goals, camera angles, lighting, and latency needs before any model work begins.",
      },
      {
        label: "Dataset Labeling & Augmentation",
        description:
          "Collect and annotate images or video frames, then augment data so models handle real-world variation.",
      },
      {
        label: "Model Training & Tuning",
        description:
          "Train detection, segmentation, or classification models and tune thresholds for your accuracy targets.",
      },
      {
        label: "Validation on Real Footage",
        description:
          "Test on production-like streams to catch false positives, missed objects, and edge cases early.",
      },
      {
        label: "Edge or Cloud Deployment",
        description:
          "Ship inference where it fits—on devices, servers, or GPU clusters—with APIs your apps can call.",
      },
      {
        label: "Monitoring & Retraining",
        description:
          "Track drift and performance over time, refreshing models when environments or products change.",
      },
    ]),
  },
  predictivemodeling: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "Predictive Modeling Development",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Business Question Definition",
        description:
          "Align on what to predict—demand, churn, risk—and how forecasts will drive daily decisions.",
      },
      {
        label: "Data Audit & Feature Prep",
        description:
          "Clean historical records, engineer features, and document gaps that could bias results.",
      },
      {
        label: "Model Selection & Training",
        description:
          "Compare algorithms, train candidates, and select models that balance accuracy and interpretability.",
      },
      {
        label: "Backtesting & Stress Tests",
        description:
          "Validate on holdout periods and scenarios so predictions stay reliable under change.",
      },
      {
        label: "Scoring Pipeline Integration",
        description:
          "Embed batch or real-time scoring into CRM, ERP, or analytics tools your teams already use.",
      },
      {
        label: "Review & Model Refresh",
        description:
          "Schedule retraining as new data arrives and report accuracy to stakeholders on a cadence.",
      },
    ]),
  },
  customwebdevelopment: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "Custom Web Development",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Discovery & Sitemap",
        description:
          "Map audiences, page structure, and key conversions before design or build starts.",
      },
      {
        label: "UX Wireframes & UI Design",
        description:
          "Approve layouts and visual direction that match your brand across breakpoints.",
      },
      {
        label: "Front-End & Back-End Build",
        description:
          "Develop responsive pages, APIs, and admin tools with clean, maintainable code.",
      },
      {
        label: "Cross-Browser QA",
        description:
          "Test on common browsers and devices, fixing layout, performance, and accessibility issues.",
      },
      {
        label: "Launch & DNS Setup",
        description:
          "Deploy to hosting, configure SSL, analytics, and redirects for a smooth go-live.",
      },
      {
        label: "Support & Iteration",
        description:
          "Handle updates, security patches, and feature requests after the site is in production.",
      },
    ]),
  },
  machinelearning: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "Machine Learning Development",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Problem Framing & Metrics",
        description:
          "Set success metrics—accuracy, lift, latency—that tie ML work to business outcomes.",
      },
      {
        label: "Data Pipeline Setup",
        description:
          "Ingest, validate, and version datasets so training and serving use consistent inputs.",
      },
      {
        label: "Experimentation & Training",
        description:
          "Run experiments, compare models, and document what works for your data profile.",
      },
      {
        label: "Offline & Online Evaluation",
        description:
          "Measure quality before launch and run shadow tests when moving to production traffic.",
      },
      {
        label: "MLOps Deployment",
        description:
          "Package models with CI/CD, scaling, and rollback paths suited to your infrastructure.",
      },
      {
        label: "Monitoring & Retraining",
        description:
          "Watch drift and errors in production, retraining when performance drops below targets.",
      },
    ]),
  },
  chatgptintegration: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "ChatGPT Integration",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Use Case & Guardrails",
        description:
          "Define where AI helps—search, drafts, support—and policies for safe, on-brand responses.",
      },
      {
        label: "Knowledge Base Preparation",
        description:
          "Organize documents and FAQs for retrieval so answers cite accurate company information.",
      },
      {
        label: "Prompt & API Prototyping",
        description:
          "Build prototypes with OpenAI APIs, testing tone, latency, and cost before full build-out.",
      },
      {
        label: "Security & Access Review",
        description:
          "Implement keys, roles, PII handling, and logging aligned with your compliance needs.",
      },
      {
        label: "Product Integration",
        description:
          "Embed assistants into web, mobile, or internal tools with stable UX and error handling.",
      },
      {
        label: "Feedback & Optimization",
        description:
          "Collect user ratings and failure cases to refine prompts, models, and knowledge over time.",
      },
    ]),
  },
  uiux: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "UI/UX Design",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Research & Personas",
        description:
          "Interview users and review analytics to understand goals, frustrations, and context of use.",
      },
      {
        label: "Journey Mapping",
        description:
          "Chart key flows end to end so nothing critical is missed before screens are drawn.",
      },
      {
        label: "Wireframes & Prototypes",
        description:
          "Validate structure and interactions with clickable prototypes before visual polish.",
      },
      {
        label: "Visual Design & System",
        description:
          "Apply brand, typography, and reusable components that scale across the product.",
      },
      {
        label: "Usability Testing",
        description:
          "Run sessions with real users, iterating on findings before handoff to engineering.",
      },
      {
        label: "Design Handoff & Support",
        description:
          "Deliver specs and assets, staying available during build to resolve edge cases.",
      },
    ]),
  },
  naturallanguageprocessing: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "NLP Development",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Text Source Inventory",
        description:
          "Catalog documents, tickets, chats, and feeds that will power classification or extraction.",
      },
      {
        label: "Cleaning & Tokenization",
        description:
          "Normalize language, handle encoding issues, and prepare corpora for modeling.",
      },
      {
        label: "Model & Pipeline Build",
        description:
          "Implement summarization, NER, sentiment, or search models suited to your domain terms.",
      },
      {
        label: "Evaluation on Sample Sets",
        description:
          "Measure precision and recall on labeled samples representative of production text.",
      },
      {
        label: "API & Workflow Integration",
        description:
          "Expose NLP results to CRM, knowledge bases, or automation tools via reliable endpoints.",
      },
      {
        label: "Quality Monitoring",
        description:
          "Track errors and language drift, updating models when vocabulary or policies change.",
      },
    ]),
  },
  aichatbotdevelopment: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "AI Chatbot Development",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Conversation Design",
        description:
          "Script intents, greetings, and escalation paths that mirror how your team supports customers.",
      },
      {
        label: "Knowledge & FAQ Training",
        description:
          "Load products, policies, and answers so the bot responds with current, approved content.",
      },
      {
        label: "Build & Channel Setup",
        description:
          "Implement on web, WhatsApp, or other channels with branding and session handling.",
      },
      {
        label: "Pilot & User Testing",
        description:
          "Run limited pilots, collecting confusing queries and gaps before full rollout.",
      },
      {
        label: "Agent Handoff Integration",
        description:
          "Connect to live support with full transcript when the bot cannot resolve an issue.",
      },
      {
        label: "Analytics & Tuning",
        description:
          "Review unresolved topics and satisfaction scores to expand intents and improve replies.",
      },
    ]),
  },
  customsoftwaredevelopment: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "Custom Software Development",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Requirements Workshop",
        description:
          "Document stakeholders, workflows, integrations, and constraints in a shared backlog.",
      },
      {
        label: "Architecture & Roadmap",
        description:
          "Choose stack, modules, and phased delivery so early releases deliver value quickly.",
      },
      {
        label: "Agile Development Sprints",
        description:
          "Build features in iterations with demos so feedback shapes the next sprint.",
      },
      {
        label: "QA & Security Testing",
        description:
          "Verify functionality, permissions, and vulnerabilities before each release candidate.",
      },
      {
        label: "Release & Training",
        description:
          "Deploy to your environment and train users with guides or live sessions as needed.",
      },
      {
        label: "Maintenance & Enhancements",
        description:
          "Provide fixes, upgrades, and new modules as your business rules evolve.",
      },
    ]),
  },
  devops: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "DevOps Implementation",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Infrastructure Assessment",
        description:
          "Review current hosting, pipelines, and pain points in releases and incidents.",
      },
      {
        label: "CI/CD Pipeline Design",
        description:
          "Automate build, test, and deploy stages with approvals where your team needs control.",
      },
      {
        label: "Infrastructure as Code",
        description:
          "Define environments in Terraform or similar so staging matches production reliably.",
      },
      {
        label: "Container & Orchestration",
        description:
          "Package services with Docker and Kubernetes for scalable, portable deployments.",
      },
      {
        label: "Observability Setup",
        description:
          "Add logging, metrics, and alerts so issues surface before customers report them.",
      },
      {
        label: "Runbooks & Continuous Improvement",
        description:
          "Document recovery steps and refine pipelines as teams ship faster with confidence.",
      },
    ]),
  },
  staffaugmentation: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "Staff Augmentation",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Discovery & Role Definition",
        description:
          "We align on roles, skills, seniority, timezone overlap, and how augmented staff will fit your squads and delivery goals.",
      },
      {
        label: "Candidate Screening & Selection",
        description:
          "Aug AI shortlists AI, ML, and engineering professionals matched to your stack, then you interview and approve before anyone starts.",
      },
      {
        label: "Onboarding & Access Setup",
        description:
          "New team members get accounts, repos, communication channels, and security clearance so they can contribute from day one.",
      },
      {
        label: "Embedded Collaboration",
        description:
          "Experts join your standups, tools, and workflows—working as an extension of your team while you retain direct management.",
      },
      {
        label: "Performance & Alignment Reviews",
        description:
          "Regular check-ins track output, communication, and fit so you can adjust scope, swap specialists, or add capacity as needed.",
      },
      {
        label: "Scale, Extend, or Transition",
        description:
          "Ramp the team up for new phases, extend engagements, or plan a smooth handoff when internal hires are ready to take over.",
      },
    ]),
  },
  services: {
    line1: "Innovate With An Advanced, Scalable",
    highlight: "AI & Software Delivery",
    line3: "Process",
    steps: sixSteps([
      {
        label: "Requirement Gathering",
        description:
          "Align on goals, users, and success criteria so scope and timelines stay realistic.",
      },
      {
        label: "Data Collection & Preprocessing",
        description:
          "Prepare quality datasets and integrations that feed models and applications reliably.",
      },
      {
        label: "Model & Application Build",
        description:
          "Design, train, and develop solutions with reviews at each milestone.",
      },
      {
        label: "Iterative Testing & Refinement",
        description:
          "Test with stakeholders, fixing issues before wider rollout.",
      },
      {
        label: "Deployment & Integration",
        description:
          "Ship to production and connect with the tools your organization already uses.",
      },
      {
        label: "Continuous Monitoring & Optimization",
        description:
          "Monitor performance and improve features as usage and data grow over time.",
      },
    ]),
  },
};
