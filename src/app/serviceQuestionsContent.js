export const serviceQuestionsContent = {
  computervision: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about our computer vision services!",
    faqs: [
      {
        question: "What types of computer vision projects does Aug AI handle?",
        answer:
          "We build object detection, quality inspection, OCR, facial or pose analysis, and video analytics for manufacturing, retail, security, and healthcare—scoped to your cameras, lighting, and throughput needs.",
      },
      {
        question: "Do you work with our existing cameras and hardware?",
        answer:
          "Yes. We assess your current cameras, frame rates, and network setup, then recommend capture, preprocessing, and deployment options that fit what you already have or plan to buy.",
      },
      {
        question: "How do you measure accuracy before going live?",
        answer:
          "We label validation sets from your environment, run precision/recall and confusion analysis, and test on real footage in staging before production rollout with agreed acceptance thresholds.",
      },
      {
        question: "Can vision models run on edge devices as well as in the cloud?",
        answer:
          "We deploy where latency and privacy require—optimized models on edge GPUs or devices, or centralized cloud inference—with APIs your applications can call either way.",
      },
    ],
  },
  predictivemodeling: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about our predictive modeling services!",
    faqs: [
      {
        question: "What business problems can predictive modeling solve for us?",
        answer:
          "Common use cases include demand forecasting, churn prediction, credit or fraud risk, maintenance scheduling, and inventory optimization—always tied to decisions your team already makes.",
      },
      {
        question: "How much historical data do we need to get started?",
        answer:
          "It depends on the signal and seasonality. We review your data volume, quality, and time span in discovery and tell you honestly if more history or features are needed before modeling.",
      },
      {
        question: "Will we understand why the model made a prediction?",
        answer:
          "We prioritize interpretability where it matters—feature importance, reason codes, or simpler models—so stakeholders can trust and act on scores, not just read a number.",
      },
      {
        question: "How often should models be retrained as our data changes?",
        answer:
          "We set a refresh cadence based on drift risk—monthly, quarterly, or triggered by performance drops—with monitoring alerts when accuracy moves outside agreed bounds.",
      },
    ],
  },
  customwebdevelopment: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about our custom web development!",
    faqs: [
      {
        question: "Do you build marketing sites, portals, or both?",
        answer:
          "Both. We deliver brochure and campaign sites, customer portals, dashboards, and web apps backed by APIs—whatever your users need in the browser.",
      },
      {
        question: "Which technologies and CMS options do you support?",
        answer:
          "We work with modern stacks such as React and Next.js, headless CMS options, and traditional WordPress when that fits your team—chosen during architecture, not one-size-fits-all.",
      },
      {
        question: "How do you handle SEO, performance, and mobile responsiveness?",
        answer:
          "Semantic markup, meta structure, image optimization, Core Web Vitals, and responsive layouts are part of every build—not add-ons at the end.",
      },
      {
        question: "Do you provide hosting setup and post-launch maintenance?",
        answer:
          "We can deploy to your preferred host or cloud, configure SSL and DNS, and offer ongoing updates, security patches, and small feature work after go-live.",
      },
    ],
  },
  machinelearning: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about our machine learning services!",
    faqs: [
      {
        question: "When is custom machine learning better than off-the-shelf tools?",
        answer:
          "When your data, labels, or business rules are unique, when you need models inside your product, or when generic tools cannot hit your accuracy or latency targets.",
      },
      {
        question: "Can you integrate ML models into our existing applications?",
        answer:
          "Yes. We expose models via REST APIs, batch jobs, or embedded services so your web, mobile, and backend systems can score data without replacing what already works.",
      },
      {
        question: "How do you prevent models from degrading in production?",
        answer:
          "We add monitoring for drift, latency, and error rates, with retraining playbooks and rollback paths when performance falls below thresholds you define with us.",
      },
      {
        question: "What does an MVP timeline look like for a first model?",
        answer:
          "After discovery and data review, many MVPs land in a few weeks to a few months depending on data readiness, integrations, and validation rigor—we share a phased plan upfront.",
      },
    ],
  },
  chatgptintegration: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about ChatGPT integration!",
    faqs: [
      {
        question: "Where can ChatGPT features fit inside our current product?",
        answer:
          "Common placements include in-app assistants, document Q&A, email or ticket drafting, internal search, and admin copilots—mapped to workflows where language adds clear value.",
      },
      {
        question: "How do you keep responses accurate and on-brand?",
        answer:
          "We combine retrieval over your approved content, prompt templates, guardrails, and human review loops so answers stay grounded and aligned with your tone and policies.",
      },
      {
        question: "How is sensitive data protected when using OpenAI APIs?",
        answer:
          "We apply least-privilege access, avoid sending unnecessary PII, use enterprise options where required, and document data flows so your security team can approve the design.",
      },
      {
        question: "Can we control API costs as usage grows?",
        answer:
          "Yes—through model tier selection, caching, token limits, batching, and usage dashboards so spend stays predictable as adoption increases.",
      },
    ],
  },
  uiux: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about our UI/UX design services!",
    faqs: [
      {
        question: "Do you redesign existing products or only new ones?",
        answer:
          "We do both—incremental UX improvements on live products and full redesigns when structure, branding, or usability need a fresh start.",
      },
      {
        question: "What deliverables do we receive before development starts?",
        answer:
          "Typical outputs include user flows, wireframes, high-fidelity screens, design systems or component specs, and prototype links your engineers can build from.",
      },
      {
        question: "How do you involve our users during the design process?",
        answer:
          "We run interviews, usability tests, or beta feedback sessions at key milestones so designs reflect real behavior—not assumptions from stakeholders alone.",
      },
      {
        question: "Can your team support developers during implementation?",
        answer:
          "Designers stay available for handoff reviews, edge cases, and QA on UI so what ships matches the approved experience.",
      },
    ],
  },
  naturallanguageprocessing: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about our NLP services!",
    faqs: [
      {
        question: "What kinds of text can your NLP solutions process?",
        answer:
          "Emails, tickets, contracts, reviews, chat logs, knowledge-base articles, and social text—structured or unstructured—depending on your use case.",
      },
      {
        question: "Can you work with documents in multiple languages?",
        answer:
          "Yes. We select models and preprocessing for the languages you operate in and validate quality per locale before rollout.",
      },
      {
        question: "How do you evaluate summarization or extraction quality?",
        answer:
          "We use labeled samples, human review rubrics, and metrics such as precision/recall on entities or agreement scores on summaries against your standards.",
      },
      {
        question: "Can NLP outputs feed into our CRM or ticketing tools?",
        answer:
          "We integrate via APIs and webhooks so tags, summaries, and extracted fields appear inside Salesforce, Zendesk, or custom systems you already use.",
      },
    ],
  },
  aichatbotdevelopment: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about AI chatbot development!",
    faqs: [
      {
        question: "Which channels can the chatbot run on—web, WhatsApp, others?",
        answer:
          "We deploy on your website widget, WhatsApp Business, and other messaging platforms your customers use—one knowledge base can power multiple channels.",
      },
      {
        question: "How do you train the bot on our products and policies?",
        answer:
          "We ingest FAQs, product sheets, and approved policy documents, then test intents and answers until coverage matches what your support team expects.",
      },
      {
        question: "What happens when the bot cannot answer a question?",
        answer:
          "The bot offers a clear handoff to a human agent with full chat history, or captures contact details for follow-up—configured to your support process.",
      },
      {
        question: "Can we update FAQs without redeploying the whole bot?",
        answer:
          "Yes. Content updates can flow through a CMS or admin panel so marketing and support can refresh answers without a full engineering release.",
      },
    ],
  },
  customsoftwaredevelopment: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about custom software development!",
    faqs: [
      {
        question: "How do you scope a custom software project with our team?",
        answer:
          "We run workshops to map users, workflows, integrations, and priorities, then deliver a backlog, milestones, and estimates your stakeholders can approve.",
      },
      {
        question: "Can you integrate with our ERP, payment, or legacy systems?",
        answer:
          "Yes. We connect via official APIs, middleware, or controlled data exports so new software fits your existing stack instead of replacing everything at once.",
      },
      {
        question: "What development approach do you follow—Agile, fixed scope, or hybrid?",
        answer:
          "We usually work in Agile sprints with demos; fixed-scope phases work when requirements are stable. The model is chosen to match your governance and timeline.",
      },
      {
        question: "Do you offer long-term support after the first release?",
        answer:
          "We provide maintenance, enhancements, and optional dedicated support so the product keeps pace with your business and technology changes.",
      },
    ],
  },
  devops: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about our DevOps services!",
    faqs: [
      {
        question: "Can you improve our existing CI/CD or build it from scratch?",
        answer:
          "We audit current pipelines and either optimize them—faster builds, better tests—or design new CI/CD from repository to production with your approval gates.",
      },
      {
        question: "Which cloud platforms and tools do you work with?",
        answer:
          "AWS, Azure, and GCP, plus Docker, Kubernetes, Terraform, GitHub Actions, GitLab CI, Jenkins, and common observability stacks your team prefers.",
      },
      {
        question: "How do you set up monitoring and incident alerts?",
        answer:
          "We configure metrics, logs, and traces with dashboards and alert rules tied to SLOs—so the right people are notified before customers feel impact.",
      },
      {
        question: "Will our team be able to maintain pipelines after handoff?",
        answer:
          "We document runbooks, train your engineers, and use infrastructure-as-code so your team owns and extends what we build with confidence.",
      },
    ],
  },
  staffaugmentation: {
    title: "Your questions, answered",
    subtitle: "Discover what you need to know about staff augmentation with Aug AI!",
    faqs: [
      {
        question: "Why should I choose Aug AI for staff augmentation?",
        answer:
          "We provide pre-vetted AI, machine learning, and software specialists who integrate with your tools and processes—you stay in control while scaling faster than traditional hiring.",
      },
      {
        question: "How quickly can augmented experts join our team?",
        answer:
          "After roles are defined and candidates approved, onboarding typically starts within days to a few weeks depending on security reviews and access setup—not months-long recruitment cycles.",
      },
      {
        question: "Who manages augmented staff day to day?",
        answer:
          "Your managers direct priorities, code reviews, and delivery. Aug AI handles sourcing, contracts, and specialist support so you focus on outcomes.",
      },
      {
        question: "What skills and roles can you provide?",
        answer:
          "Data scientists, ML engineers, computer vision and NLP specialists, full-stack developers, DevOps engineers, UI/UX designers, and more—matched to your stack and project phase.",
      },
    ],
  },
  services: {
    title: "Your questions, answered",
    subtitle: "Discover everything you need to know about partnering with Aug AI!",
    faqs: [
      {
        question: "What services does Aug AI offer end to end?",
        answer:
          "We cover AI—including vision, NLP, ML, chatbots, and ChatGPT integration—plus custom software, web development, UI/UX, DevOps, and staff augmentation.",
      },
      {
        question: "How do you tailor AI and software work to our industry?",
        answer:
          "Discovery focuses on your data, regulations, and workflows so architecture, models, and UX reflect how your sector actually operates—not generic templates.",
      },
      {
        question: "What does a typical project timeline and engagement look like?",
        answer:
          "After scoping, we propose phased delivery with demos each sprint or milestone; length varies by complexity, integrations, and how quickly your data and feedback are available.",
      },
      {
        question: "How do you support us after launch?",
        answer:
          "We offer monitoring, fixes, retraining, feature enhancements, and optional retained teams so solutions stay secure, accurate, and aligned with your roadmap.",
      },
    ],
  },
};
