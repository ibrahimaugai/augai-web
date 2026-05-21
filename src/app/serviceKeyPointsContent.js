const makePoints = (items) =>
  items.map((item, i) => ({
    num: String(i + 1).padStart(2, "0"),
    title: item.title,
    body: item.body,
  }));

export const serviceKeyPointsContent = {
  computervision: {
    title: "Computer Vision Services",
    points: makePoints([
      {
        title: "Object & Scene Detection:",
        body: "Identify products, defects, people, or vehicles in images and video with models tuned to your labels and environments.",
      },
      {
        title: "Real-Time Monitoring:",
        body: "Process live camera feeds for alerts, counting, and safety checks without slowing down operations on the floor.",
      },
      {
        title: "Quality Inspection:",
        body: "Automate visual QA on production lines—catching scratches, misalignments, and packaging issues faster than manual review.",
      },
      {
        title: "Custom Model Training:",
        body: "Train on your own datasets so accuracy reflects your lighting, angles, and product variations—not generic stock imagery.",
      },
      {
        title: "Edge & Cloud Deployment:",
        body: "Run inference on devices, servers, or cloud GPUs depending on latency, privacy, and infrastructure constraints.",
      },
      {
        title: "Integration Ready:",
        body: "Connect vision outputs to ERP, MES, or dashboards via APIs so insights flow into workflows teams already use.",
      },
    ]),
  },
  predictivemodeling: {
    title: "Predictive Modeling Services",
    points: makePoints([
      {
        title: "Demand & Revenue Forecasting:",
        body: "Project sales, inventory needs, and seasonal patterns using historical trends and external signals.",
      },
      {
        title: "Risk Scoring:",
        body: "Rank credit, churn, or fraud likelihood so teams prioritize outreach and mitigation where impact is highest.",
      },
      {
        title: "Feature Engineering:",
        body: "Shape raw data into meaningful inputs—cleaning, aggregating, and selecting variables that improve model stability.",
      },
      {
        title: "Model Validation:",
        body: "Test performance with holdout sets and cross-validation so forecasts hold up before they guide decisions.",
      },
      {
        title: "Explainable Outputs:",
        body: "Surface drivers behind predictions so stakeholders understand why a score changed, not just the number.",
      },
      {
        title: "Production Pipelines:",
        body: "Schedule retraining and scoring jobs that keep models current as new data arrives from your systems.",
      },
    ]),
  },
  customwebdevelopment: {
    title: "Custom Web Development Services",
    points: makePoints([
      {
        title: "Responsive Design:",
        body: "Layouts that adapt cleanly from mobile to desktop so every visitor gets a consistent, usable experience.",
      },
      {
        title: "Performance Focus:",
        body: "Optimized assets, caching, and code splitting so pages load quickly and rank better in search.",
      },
      {
        title: "CMS & Content Control:",
        body: "Editable pages and blogs when your team needs to update copy without waiting on developers.",
      },
      {
        title: "Secure Authentication:",
        body: "Login, roles, and session handling built for customer portals, partners, or internal tools.",
      },
      {
        title: "API Integrations:",
        body: "Connect sites to CRM, payments, analytics, and backend services through reliable REST or GraphQL layers.",
      },
      {
        title: "Ongoing Maintenance:",
        body: "Updates, monitoring, and fixes after launch so your site stays secure and compatible with browsers.",
      },
    ]),
  },
  machinelearning: {
    title: "Machine Learning Services",
    points: makePoints([
      {
        title: "Supervised Learning:",
        body: "Classification and regression models trained on labeled data for tasks like tagging, scoring, and routing.",
      },
      {
        title: "Unsupervised Insights:",
        body: "Clustering and anomaly detection to find segments, outliers, and patterns without predefined categories.",
      },
      {
        title: "Recommendation Systems:",
        body: "Personalized suggestions for products, content, or next-best actions based on behavior and context.",
      },
      {
        title: "MLOps & Monitoring:",
        body: "Track drift, accuracy, and latency in production so models stay reliable as data and usage change.",
      },
      {
        title: "Data Pipeline Design:",
        body: "Ingest, transform, and version datasets so training and inference use consistent, auditable inputs.",
      },
      {
        title: "Scalable Infrastructure:",
        body: "Training and serving setups that grow from pilot projects to enterprise workloads without rework.",
      },
    ]),
  },
  chatgptintegration: {
    title: "ChatGPT Integration Services",
    points: makePoints([
      {
        title: "Product Embedding:",
        body: "Add conversational search, drafting, and Q&A inside your existing web and mobile applications.",
      },
      {
        title: "Prompt & Guardrail Design:",
        body: "Structured prompts and policies that keep responses accurate, on-brand, and within allowed topics.",
      },
      {
        title: "Knowledge Retrieval:",
        body: "Ground answers in your documents and databases via retrieval so the model cites real company information.",
      },
      {
        title: "API & Security:",
        body: "Secure keys, rate limits, and access controls so AI features meet your compliance requirements.",
      },
      {
        title: "Workflow Automation:",
        body: "Trigger summaries, ticket replies, or report drafts from events in CRM, support, or internal tools.",
      },
      {
        title: "Cost & Latency Tuning:",
        body: "Choose model tiers and caching strategies that balance quality, speed, and monthly API spend.",
      },
    ]),
  },
  uiux: {
    title: "UI/UX Design Services",
    points: makePoints([
      {
        title: "User Research:",
        body: "Interviews, surveys, and analytics reviews to understand goals, pain points, and mental models.",
      },
      {
        title: "Information Architecture:",
        body: "Clear navigation and content hierarchy so users find tasks without hunting through menus.",
      },
      {
        title: "Wireframes & Prototypes:",
        body: "Clickable flows validated early—reducing rework before visual design and development begin.",
      },
      {
        title: "Visual Design Systems:",
        body: "Consistent typography, color, and components that scale across screens and future features.",
      },
      {
        title: "Accessibility:",
        body: "Contrast, focus states, and semantics that support keyboard users and WCAG-oriented standards.",
      },
      {
        title: "Developer Handoff:",
        body: "Specs, assets, and interaction notes that align design intent with how engineers build.",
      },
    ]),
  },
  naturallanguageprocessing: {
    title: "Natural Language Processing Services",
    points: makePoints([
      {
        title: "Text Classification:",
        body: "Route tickets, tag articles, and sort feedback by topic, urgency, or sentiment automatically.",
      },
      {
        title: "Named Entity Extraction:",
        body: "Pull names, dates, locations, and product mentions from contracts, emails, and reports.",
      },
      {
        title: "Summarization:",
        body: "Condense long documents and threads into briefs teams can scan in minutes instead of hours.",
      },
      {
        title: "Semantic Search:",
        body: "Find relevant passages by meaning—not only keyword matches—across knowledge bases and files.",
      },
      {
        title: "Multilingual Support:",
        body: "Process and analyze content in multiple languages where your customers and documents operate.",
      },
      {
        title: "Custom NLP Models:",
        body: "Fine-tune on your domain vocabulary so terminology in legal, medical, or technical text is handled correctly.",
      },
    ]),
  },
  aichatbotdevelopment: {
    title: "AI Chatbot Development Services",
    points: makePoints([
      {
        title: "24/7 Availability:",
        body: "Answer common questions and capture leads when live agents are offline or at capacity.",
      },
      {
        title: "Brand-Aligned Dialogue:",
        body: "Tone, greetings, and fallbacks written to match how your team already speaks to customers.",
      },
      {
        title: "Knowledge Base Training:",
        body: "Bots grounded in FAQs, product docs, and policies so replies stay accurate and up to date.",
      },
      {
        title: "Human Handoff:",
        body: "Smooth escalation to agents with conversation history when issues need a person.",
      },
      {
        title: "Multi-Channel:",
        body: "Deploy on web, WhatsApp, or messaging platforms where your audience already interacts.",
      },
      {
        title: "Analytics & Improvement:",
        body: "Track unresolved queries and satisfaction to refine intents and content over time.",
      },
    ]),
  },
  customsoftwaredevelopment: {
    title: "Custom Software Development Services",
    points: makePoints([
      {
        title: "Requirements Discovery:",
        body: "Map stakeholders, workflows, and constraints before architecture and sprint planning start.",
      },
      {
        title: "Modular Architecture:",
        body: "Services and APIs designed for change—so new modules do not break existing features.",
      },
      {
        title: "Third-Party Integrations:",
        body: "Connect payment, ERP, identity, and communication tools your business already depends on.",
      },
      {
        title: "Quality Assurance:",
        body: "Automated and manual testing across browsers, devices, and edge cases before release.",
      },
      {
        title: "Role-Based Access:",
        body: "Permissions and audit trails suited to internal teams, partners, and customer accounts.",
      },
      {
        title: "Long-Term Support:",
        body: "Bug fixes, enhancements, and documentation so the product evolves with your operations.",
      },
    ]),
  },
  devops: {
    title: "DevOps Services",
    points: makePoints([
      {
        title: "CI/CD Pipelines:",
        body: "Automated build, test, and deploy flows that reduce manual releases and human error.",
      },
      {
        title: "Infrastructure as Code:",
        body: "Repeatable environments on AWS, Azure, or GCP defined in version-controlled templates.",
      },
      {
        title: "Container Orchestration:",
        body: "Docker and Kubernetes setups for scalable, portable application hosting.",
      },
      {
        title: "Monitoring & Alerts:",
        body: "Dashboards and notifications for uptime, errors, and resource usage before users notice issues.",
      },
      {
        title: "Security Hardening:",
        body: "Secrets management, network policies, and patch practices aligned with your risk profile.",
      },
      {
        title: "Disaster Recovery:",
        body: "Backups, failover plans, and runbooks so teams recover quickly from outages or data loss.",
      },
    ]),
  },
  services: {
    title: "AI & Software Services",
    points: makePoints([
      {
        title: "End-to-End Delivery:",
        body: "Strategy, design, development, and deployment handled by one team from discovery through launch.",
      },
      {
        title: "AI & Engineering Depth:",
        body: "Specialists across vision, NLP, ML, chatbots, and cloud—not generic outsourcing.",
      },
      {
        title: "Business-Aligned Scope:",
        body: "Roadmaps tied to measurable outcomes like efficiency, revenue, or customer satisfaction.",
      },
      {
        title: "Transparent Communication:",
        body: "Regular demos, documentation, and status updates so stakeholders stay informed.",
      },
      {
        title: "Flexible Engagement:",
        body: "Project-based builds or ongoing support depending on how your team wants to partner.",
      },
      {
        title: "Production-Ready Quality:",
        body: "Security, testing, and maintainability built in—not bolted on after go-live.",
      },
    ]),
  },
};
