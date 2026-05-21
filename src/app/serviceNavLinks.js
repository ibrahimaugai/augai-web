export const SERVICE_NAV_GROUPS = [
  {
    title: "AI & intelligence",
    items: [
      { href: "/computervision", label: "Computer Vision" },
      { href: "/machinelearning", label: "Machine Learning" },
      { href: "/naturallanguageprocessing", label: "Natural Language Processing" },
      { href: "/predictivemodeling", label: "Predictive Modeling" },
      { href: "/chatgptintegration", label: "ChatGPT Integration" },
      { href: "/aichatbotdevelopment", label: "AI Chatbot Development" },
    ],
  },
  {
    title: "Product & engineering",
    items: [
      { href: "/customsoftwaredevelopment", label: "Custom Software Development" },
      { href: "/customwebdevelopment", label: "Custom Web Development" },
      { href: "/uiux", label: "UI/UX Design" },
    ],
  },
  {
    title: "Operations",
    items: [
      { href: "/devops", label: "DevOps Services" },
      { href: "/staffaugmentation", label: "Staff Augmentation" },
    ],
  },
];

/** @deprecated Use SERVICE_NAV_GROUPS — kept for any flat imports */
export const SERVICE_NAV_LINKS = SERVICE_NAV_GROUPS.flatMap((g) => g.items);
