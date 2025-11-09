export type SocialLink = {
  label: string;
  url: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

export type Project = {
  name: string;
  role: string;
  period?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links?: { label: string; url: string }[];
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Guillermo Enrique Rodriguez Galban",
  title: "Senior Frontend & Fullstack Engineer",
  location: "La Habana, Cuba (remote friendly)",
  yearsOfExperience: 3,
  summary:
    "Senior Frontend Engineer with deep experience across React, Next.js, Vue, and modern TypeScript stacks. I build data-heavy admin platforms, Web3 products, and SaaS systems that balance clean architecture, reusable design systems, and real-world business constraints.",
};

export const heroHighlights = [
  "Frontend Lead crafting complex SaaS dashboards",
  "Web3 & payments specialist with production launches",
  "Architecting resilient, real-time platforms at scale",
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/guillerg01" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/guillerg01/" },
  { label: "Email", url: "mailto:guillerg0101@gmail.com" },
];

export const contactChannels = [
  {
    type: "Phone",
    value: "+53 5554 5028",
    url: "https://wa.me/5355545028",
  },
  {
    type: "Email",
    value: "guillerg0101@gmail.com",
    url: "mailto:guillerg0101@gmail.com",
  },
  {
    type: "Location",
    value: "La Habana, Cuba",
    url: "https://maps.google.com/?q=La+Habana+Cuba",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    items: [
      "React 18+",
      "Next.js 13-15",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Chakra UI",
      "SCSS Modules",
      "Component Libraries",
    ],
  },
  {
    title: "Architecture & State",
    items: [
      "Feature-driven architecture",
      "Server Components",
      "React Query",
      "Zustand & Pinia",
      "Clean code patterns",
      "Design systems",
      "Internationalization",
    ],
  },
  {
    title: "Backend & DevOps",
    items: [
      "Node.js",
      "Next.js API Routes",
      "Prisma",
      "PostgreSQL",
      "Firebase",
      "Redis",
      "AWS S3",
      "Cloudflare",
    ],
  },
  {
    title: "Domain Expertise",
    items: [
      "Payments (Stripe, PayPal, crypto gateways)",
      "Web3 wallets & smart contracts",
      "DICOM/OHIF medical systems",
      "Real-time chat & notifications",
      "File streaming & media pipelines",
      "Advanced data visualization",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Frontend Lead & Fullstack Engineer",
    company: "Freelance & SaaS Agencies",
    period: "2021 — Present",
    summary:
      "Lead greenfield builds and modernization efforts for SaaS dashboards, betting platforms, and medical tooling. Blend product strategy with hands-on coding to ship fast, scalable experiences.",
    achievements: [
      "Designed modular Next.js architectures with reusable component libraries adopted across multiple products.",
      "Built mission-critical payment workflows with Stripe, PayPal, Oxapay, and custom crypto pipelines handling subscriptions, reconciliation, and anti-fraud controls.",
      "Integrated real-time communication layers with WebSocket/SSE for chat, live analytics, and collaboration experiences.",
      "Mentored cross-functional teams, established coding standards, and coordinated sprint delivery with direct client stakeholders.",
    ],
    technologies: [
      "Next.js 14/15",
      "React 19",
      "TypeScript",
      "Prisma",
      "Stripe",
      "Socket.io",
      "AWS",
    ],
    location: "Remote",
  },
  {
    role: "Frontend Architect",
    company: "Agentic Customer Portal",
    period: "2024",
    summary:
      "Architected a Vue 3, TypeScript, and Pinia-powered multi-tenant portal with AI-driven workflows and granular RBAC.",
    achievements: [
      "Established feature-based module architecture with auto-imports and strict TypeScript 5.8 compliance across 15+ domains.",
      "Implemented S3-backed file management with tree virtualization, drag-and-drop uploads, and real-time status polling.",
      "Integrated CASL ability rules for dynamic permissions, safeguarding sensitive data while keeping UX streamlined.",
      "Delivered AI assistant tooling with TipTap editor customizations and structured chat messaging pipelines.",
    ],
    technologies: [
      "Vue 3",
      "TypeScript 5.8",
      "Pinia",
      "Vuetify",
      "AWS S3",
      "CASL",
    ],
  },
  {
    role: "Fullstack Engineer",
    company: "Notbetting Platform",
    period: "2023 — 2024",
    summary:
      "Owned core platform capabilities for a fullstack betting product spanning real-time events, payments, and ranking systems.",
    achievements: [
      "Implemented App Router architecture with SSR/SSG optimizations and next-intl powered i18n.",
      "Built a resilient queueing engine with multi-step job orchestration, backoff strategies, and orphan detection.",
      "Launched multi-gateway payment system with idempotent webhooks, multi-currency logic, and automated reconciliation.",
      "Created ELO-inspired scoring and live leaderboards with WebSocket updates for 10K+ concurrent users.",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Telegram Bot API",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Cazarentas",
    role: "Frontend Lead",
    period: "2024",
    description:
      "Real estate intelligence platform combining live maps, AI chat, and subscription billing.",
    highlights: [
      "1,600+ line Google Maps module with marker virtualization, GeoJSON streaming, and WebSocket-backed updates.",
      "Comprehensive Socket.io layer handling chat, notifications, and collaboration channels with connection recovery.",
      "Stripe-driven subscription lifecycle with dashboards, plan limits, and real-time invoice visibility.",
      "Advanced React Query strategies (200+ instances) with optimistic updates and infinite pagination.",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "React Query",
      "Stripe",
      "Google Maps API",
      "Socket.io",
    ],
  },
  {
    name: "Sakazuki",
    role: "Fullstack Developer",
    period: "2024",
    description:
      "Web3 NFT minting experience blending multi-wallet auth, fiat payments, and observability.",
    highlights: [
      "Multi-provider wallet authentication via Privy with seamless MetaMask, WalletConnect, and social login flows.",
      "Off-chain signature minting pipeline with gas optimization, price oracle integration, and transaction history.",
      "FinCode payment integration delivering 3D Secure, tokenized cards, and reliable callback processing.",
      "Observability stack with Bugsnag, Sentry, and blockchain monitoring for proactive alerts.",
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Chakra UI",
      "ethers.js",
      "Privy",
      "Sentry",
    ],
  },
  {
    name: "Medical Reporter System",
    role: "Full-Stack Developer / Frontend Lead",
    period: "2023",
    description:
      "DICOM-compliant reporting tool enabling specialists to create intelligent diagnostic outputs.",
    highlights: [
      "Drag-and-drop template builder with 16+ field types and specialty-specific presets for neuro, cardio, and radiology.",
      "AI-powered auto-conclusion generator combining patient data validation with age-specific clinical ranges.",
      "Export pipeline covering PDF, DOCX, CSV, and HL7-friendly formats, integrated with hospital PACS networks.",
      "OHIF viewer integration automatically syncs study metadata, imaging details, and reporting workflows.",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "OHIF Viewer",
      "DICOM SR",
      "Node.js",
    ],
  },
];

export const coreHighlights = [
  "Architect modular, reusable frontend systems with performance budgets for data-heavy workloads.",
  "Launch payment ecosystems spanning Stripe, PayPal, Bizum, Trustly, and crypto gateways with robust webhook orchestration.",
  "Deliver Web3-native experiences with wallet orchestration, NFT minting, and secure smart contract interactions.",
  "Ship healthcare-grade platforms that meet DICOM and HL7 standards while improving clinician efficiency.",
  "Build real-time collaboration experiences with Socket.io, WebSockets, and advanced caching strategies.",
];
