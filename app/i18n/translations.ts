export type Locale = "en" | "es";

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

export type ContactChannel = {
  type: string;
  value: string;
  url: string;
  cta: string;
};

export type Content = {
  profile: {
    name: string;
    title: string;
    location: string;
    summary: string;
  };
  hero: {
    highlights: string[];
    nav: {
      about: string;
      experience: string;
      skills: string;
      projects: string;
      contact: string;
      github: string;
      linkedin: string;
    };
    previews: { id: string; label: string; blurb: string }[];
  };
  about: {
    sectionTitle: string;
    heading: string;
    description: string;
    bullets: string[];
  };
  experience: {
    sectionTitle: string;
    subtitle: string;
    items: Experience[];
  };
  skills: {
    sectionTitle: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  projects: {
    sectionTitle: string;
    subtitle: string;
    items: Project[];
  };
  contact: {
    sectionTitle: string;
    subtitle: string;
    intro: string;
    channels: ContactChannel[];
    availability: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      companyPlaceholder: string;
      messagePlaceholder: string;
    };
  };
  header: {
    getInTouch: string;
  };
};

export const translations: Record<Locale, Content> = {
  en: {
    profile: {
      name: "Guillermo Enrique Rodriguez Galban",
      title: "Senior Frontend Engineer",
      location: "Habana, Cuba (remote)",
      summary:
        "React, Next.js, SaaS & Web3. High-traffic UIs, real-time experiences, and scalable frontend.",
    },
    hero: {
      highlights: [
        "SaaS & real estate",
        "Web3 & payments",
        "Real-time UIs",
      ],
      nav: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        github: "View GitHub",
        linkedin: "LinkedIn",
      },
      previews: [
        {
          id: "about",
          label: "About",
          blurb: "Strategy, collaboration, and delivery approach.",
        },
        {
          id: "experience",
          label: "Experience",
          blurb: "Loem Agency, AGL Tech, and autonomous development.",
        },
        {
          id: "projects",
          label: "Projects",
          blurb: "Maps, checkout, Web3, streaming, and analytics.",
        },
      ],
    },
    about: {
      sectionTitle: "About",
      heading: "Crafting resilient experiences for high-impact products",
      description:
        "Senior Frontend Engineer with 4+ years in software development and 3+ in frontend. I build data-rich SaaS, Web3, and real-time products with React and Next.js. I work closely with product, design, and backend to ship reliable features, unlock new revenue flows, and keep experiences fast and intuitive.",
      bullets: [
        "Modular frontend systems for data-heavy dashboards and map views with 1M+ properties.",
        "Web3 payments and wallet flows with production-grade reliability (Privy, ethers.js, Smart Contracts).",
        "Real-time collaboration with WebSocket, Firebase FCM, and optimized caching.",
      ],
    },
    experience: {
      sectionTitle: "Experience",
      subtitle: "Selected roles & impact",
      items: [
        {
          role: "Frontend Lead",
          company: "Loem Agency",
          period: "Jan 2025 — Present",
          location: "Remote",
          summary:
            "Lead frontend with Next.js (App Router, SSR, SSG), next-intl i18n, React Query, and feature-based architecture. Delivered smooth experience for thousands of users and progressive loading for 1M properties on map view with a scalable base for new markets.",
          achievements: [
            "Built map component with LRU cache, virtualization of 400 markers, GeoJSON in 4 levels, and WebSocket for real-time geographic search.",
            "Developed checkout and subscription flows with multiple payment methods (card, PayPal, Bizum, Oxapay, Trustly), 3D Secure, and UI states; launched subscriptions in several countries with a single interface and AI chat for natural-language search.",
            "Built real-time leaderboard and ranking UIs (WebSocket), reusable components, and client notifications (Firebase FCM, EmailJs); improved retention with live ranking and instant alerts.",
            "Implemented route protection, role-based UI (RBAC, 5 levels), and auth flows (JWT and next-Auth); reduced access incidents and kept consistent UX per user type.",
            "Built profitability calculator (Chart.js, 2 strategies, market data) and panels with virtualized tables; enabled decision tools without degrading mobile experience.",
          ],
          technologies: [
            "Next.js",
            "React",
            "React Query",
            "next-intl",
            "Stripe",
            "WebSocket",
            "Firebase FCM",
            "Chart.js",
          ],
        },
        {
          role: "Frontend Developer",
          company: "AGL Tech Solutions LLC",
          period: "Sep 2023 — Present",
          location: "Remote",
          summary:
            "Implemented QR-based reward systems (generation, scan, admin panel) and shared components across products. Integrated Web3 wallet (Privy, ethers.js) with Smart Contracts, NFT badges, minting, leaderboards, and video streaming (ReactPlayer); multi-provider auth (MetaMask, WalletConnect, Coinbase Wallet), off-chain signing, price oracle, FinCode payments (3D Secure), Sentry and Bugsnag.",
          achievements: [
            "Built streaming backoffice with App Router, React Query, JWT refresh token, RBAC, and Socket.io for live notifications and upload progress. File uploads up to 5GB (S3 presigned URLs, multipart), HLS conversion, thumbnails, Stripe billing for storage.",
            "Developed analytics and sales platforms with real-time dashboards (Chart.js, WebSocket), multi-axis charts, interactive tooltips, PDF/Excel export; embeddable multi-tenant chatbot with client theming and context persistence; Google Maps (Places, Geocoding).",
            "Architected and maintained multi-tenant SaaS dashboard with revenue panels, KPIs, billing, invoices, user balance; high-volume virtualized tables, inline edit, filters, massive pagination; admin-user embedded chat with attachments, QR templates, PDF viewer, gallery, variants.",
            "Applied App Router with TypeScript strict, SSR, route groups, parallel and intercepting routes for modals; JWT with HTTP-only cookies and refresh token rotation; React Query with optimistic updates, infinite scroll, stale-while-revalidate.",
          ],
          technologies: [
            "Next.js",
            "TypeScript",
            "React Query",
            "Privy",
            "ethers.js",
            "Socket.io",
            "Stripe",
            "AWS S3",
            "Sentry",
            "Bugsnag",
          ],
        },
        {
          role: "Autonomous development & portfolio",
          company: "Personal Projects",
          period: "2021 — Sep 2023",
          location: "Habana, Cuba",
          summary:
            "Semantic, responsive layout (HTML5, CSS3, SCSS) for client sites and apps. Refactored legacy code and led JavaScript-to-TypeScript migrations; modular architecture and reusable components. Delivered SPAs with Vue (Composition API, Vuex/Pinia), routing, validated forms, and API integration. Built tools such as profitability calculator with Next.js and Chart.js, complex forms, and date validation for management projects.",
          achievements: [
            "Pixel-perfect adaptive layouts and clean structure.",
            "Modular architecture and separation of concerns; fewer runtime errors.",
            "Vue SPAs with business logic and iterative delivery per client requirements.",
            "Production-ready calculators, forms, and UX aligned to prototypes.",
          ],
          technologies: [
            "HTML5",
            "CSS3",
            "SCSS",
            "JavaScript",
            "TypeScript",
            "Vue 3",
            "Next.js",
            "Chart.js",
          ],
        },
      ],
    },
    skills: {
      sectionTitle: "Skills",
      subtitle: "Tooling & specialties",
      categories: [
        {
          title: "Frontend Engineering",
          items: [
            "React 18+",
            "Next.js (App Router, SSR, SSG)",
            "Vue 3 (Composition API, Pinia)",
            "TypeScript",
            "Tailwind CSS",
            "SCSS",
            "Chart.js",
            "Component libraries",
          ],
        },
        {
          title: "Architecture & State",
          items: [
            "Feature-driven architecture",
            "React Query",
            "next-intl",
            "RBAC",
            "JWT / next-Auth",
            "Optimistic updates",
            "Virtualization",
          ],
        },
        {
          title: "Backend & Integrations",
          items: [
            "Node.js",
            "Firebase FCM",
            "Socket.io / WebSocket",
            "AWS S3",
            "Stripe, PayPal, Bizum, Oxapay, Trustly",
            "Privy, ethers.js",
            "Sentry, Bugsnag",
          ],
        },
        {
          title: "Methodology & Tools",
          items: [
            "Scrum, Kanban",
            "Jira, Trello, Asana, Slack",
            "Sprint planning, retrospectives",
            "Spanish (native), English (professional)",
            "Full Stack course, Tezlucan Mexico (2023)",
          ],
        },
      ],
    },
    projects: {
      sectionTitle: "Projects",
      subtitle: "Highlights from recent builds",
      items: [
        {
          name: "Real estate platform (Loem Agency)",
          role: "Frontend Lead",
          period: "2025",
          description:
            "High-traffic real estate platform with live maps (1M+ properties), subscription checkout, and AI chat. Map component with LRU cache, 400-marker virtualization, GeoJSON in 4 levels, and WebSocket for real-time search.",
          highlights: [
            "Next.js App Router, SSR, SSG, next-intl, React Query, feature-based architecture.",
            "Checkout and subscription with card, PayPal, Bizum, Oxapay, Trustly, 3D Secure.",
            "Real-time leaderboard and ranking (WebSocket), Firebase FCM and EmailJs notifications.",
            "RBAC (5 levels), route protection, JWT and next-Auth. Profitability calculator (Chart.js) and virtualized tables.",
          ],
          technologies: [
            "Next.js",
            "React Query",
            "Stripe",
            "WebSocket",
            "Firebase FCM",
            "Chart.js",
          ],
        },
        {
          name: "Web3 products (AGL Tech)",
          role: "Frontend Developer",
          period: "2023 — 2025",
          description:
            "Web3 experiences with wallet integration (Privy, ethers.js), Smart Contracts, NFT badges, minting, leaderboards, and video streaming. Multi-provider auth (MetaMask, WalletConnect, Coinbase Wallet), off-chain signing, price oracle, FinCode 3D Secure, Sentry and Bugsnag.",
          highlights: [
            "QR-based reward systems: generation, scan, admin panel; shared components across products.",
            "Observability and UX for both new and advanced users; balance of blockchain security and usability.",
          ],
          technologies: [
            "Next.js",
            "TypeScript",
            "Privy",
            "ethers.js",
            "ReactPlayer",
            "Sentry",
            "Bugsnag",
          ],
        },
        {
          name: "Streaming backoffice (AGL Tech)",
          role: "Frontend Developer",
          period: "2023 — 2025",
          description:
            "Backoffice for streaming with live notifications and upload progress (Socket.io). File uploads up to 5GB via S3 presigned URLs and multipart, HLS conversion, thumbnail generation, Stripe billing for storage.",
          highlights: [
            "App Router, React Query, JWT with refresh token, RBAC. Sentry for errors, performance, and session replay.",
            "Reduced content management time and real-time visibility of progress.",
          ],
          technologies: [
            "Next.js",
            "React Query",
            "Socket.io",
            "AWS S3",
            "Stripe",
            "Sentry",
          ],
        },
        {
          name: "Analytics & sales dashboards (AGL Tech)",
          role: "Frontend Developer",
          period: "2023 — 2025",
          description:
            "Real-time analytics and sales platforms with Chart.js and WebSocket, multi-axis charts, interactive tooltips, PDF/Excel export. Embeddable multi-tenant chatbot with client theming and context persistence; Google Maps (Places, Geocoding).",
          highlights: [
            "Improved decision-making with live data and exportable reporting.",
          ],
          technologies: [
            "Next.js",
            "Chart.js",
            "WebSocket",
            "Google Maps API",
          ],
        },
        {
          name: "Multi-tenant SaaS dashboard (AGL Tech)",
          role: "Frontend Developer",
          period: "2023 — 2025",
          description:
            "SaaS dashboard with revenue panels, KPIs, billing, invoices, user balance. Virtualized tables, inline edit, filters, massive pagination; admin-user chat with attachments, QR templates, PDF viewer, gallery, variants. Reusable component base and micro-frontend style architecture with configurable panels per vertical.",
          highlights: [
            "Unified experience for multiple products on a single base; deep RBAC and reusable system design.",
          ],
          technologies: [
            "Next.js",
            "TypeScript",
            "React Query",
          ],
        },
      ],
    },
    contact: {
      sectionTitle: "Contact",
      subtitle: "Let's build something exceptional",
      intro:
        "I am open to remote opportunities on complex frontend, real-time, and Web3 initiatives. Share your idea and we can explore how to make it real.",
      channels: [
        {
          type: "Phone",
          value: "+53 55545028",
          url: "https://wa.me/5355545028",
          cta: "WhatsApp",
        },
        {
          type: "Email",
          value: "guillerg0101@gmail.com",
          url: "mailto:guillerg0101@gmail.com",
          cta: "Send email",
        },
        {
          type: "Location",
          value: "Habana, Cuba",
          url: "https://maps.google.com/?q=Habana+Cuba",
          cta: "View map",
        },
        {
          type: "LinkedIn",
          value: "guillerg01",
          url: "https://www.linkedin.com/in/guillerg01/",
          cta: "Profile",
        },
      ],
      availability:
        "Available for remote engagements · Habana, Cuba (UTC-05:00)",
      form: {
        name: "Name",
        email: "Email",
        company: "Company (optional)",
        companyPlaceholder: "Where are you building?",
        message: "Message",
        messagePlaceholder:
          "Share a short brief, timeline, or problem we can solve together.",
        submit: "Start the conversation",
      },
    },
    header: {
      getInTouch: "Get in touch",
    },
  },
  es: {
    profile: {
      name: "Guillermo Enrique Rodriguez Galban",
      title: "Senior Frontend Engineer",
      location: "Habana, Cuba (remoto)",
      summary:
        "React, Next.js, SaaS y Web3. UIs de alto tráfico, experiencias en tiempo real y frontend escalable.",
    },
    hero: {
      highlights: [
        "SaaS e inmobiliario",
        "Web3 y pagos",
        "UIs en tiempo real",
      ],
      nav: {
        about: "Sobre mí",
        experience: "Experiencia",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        github: "Ver GitHub",
        linkedin: "LinkedIn",
      },
      previews: [
        {
          id: "about",
          label: "Sobre mí",
          blurb: "Estrategia, colaboración y forma de entrega.",
        },
        {
          id: "experience",
          label: "Experiencia",
          blurb: "Loem Agency, AGL Tech y desarrollo autónomo.",
        },
        {
          id: "projects",
          label: "Proyectos",
          blurb: "Mapas, checkout, Web3, streaming y analíticas.",
        },
      ],
    },
    about: {
      sectionTitle: "Sobre mí",
      heading: "Experiencias resilientes para productos de alto impacto",
      description:
        "Senior Frontend Engineer con más de 4 años en desarrollo de software y más de 3 en frontend. Construyo productos SaaS, Web3 y en tiempo real con React y Next.js. Colaboro con producto, diseño y backend para lanzar funcionalidades confiables, habilitar nuevos flujos de ingreso y mantener experiencias rápidas e intuitivas.",
      bullets: [
        "Sistemas frontend modulares para dashboards y mapas con más de 1 millón de propiedades.",
        "Pagos Web3 y flujos de billetera con confiabilidad de producción (Privy, ethers.js, Smart Contracts).",
        "Colaboración en tiempo real con WebSocket, Firebase FCM y caché optimizado.",
      ],
    },
    experience: {
      sectionTitle: "Experiencia",
      subtitle: "Roles destacados e impacto",
      items: [
        {
          role: "Líder FrontEnd",
          company: "Loem Agency",
          period: "Ene 2025 — Presente",
          location: "Remoto",
          summary:
            "Lideré el frontend con Next.js (App Router, SSR, SSG), next-intl, React Query y arquitectura por features. Experiencia fluida para miles de usuarios y carga progresiva de 1 millón de propiedades en mapa con base escalable para nuevos mercados.",
          achievements: [
            "Desarrollé el componente de mapas con caché LRU, virtualización de 400 marcadores, GeoJSON en 4 niveles y WebSocket para búsqueda geográfica en tiempo real.",
            "Desarrollé flujos de checkout y suscripción con múltiples métodos (tarjeta, PayPal, Bizum, Oxapay, Trustly), 3D Secure y estados en UI; lanzamiento de suscripciones en varios países con una interfaz y chat con IA para búsqueda en lenguaje natural.",
            "Construí UIs de leaderboard y ranking en tiempo real (WebSocket), componentes reutilizables y notificaciones (Firebase FCM, EmailJs); mejor retención con ranking vivo y avisos inmediatos.",
            "Implementé protección de rutas, UI por rol (RBAC, 5 niveles) y flujos de autenticación (JWT y next-Auth); menos incidencias de acceso y UX coherente por tipo de usuario.",
            "Construí calculadora de rentabilidad (Chart.js, 2 estrategias, datos de mercado) y paneles con tablas virtualizadas; herramientas de decisión sin degradar la experiencia en móvil.",
          ],
          technologies: [
            "Next.js",
            "React",
            "React Query",
            "next-intl",
            "Stripe",
            "WebSocket",
            "Firebase FCM",
            "Chart.js",
          ],
        },
        {
          role: "Desarrollador FrontEnd",
          company: "AGL Tech Solutions LLC",
          period: "Sep 2023 — Presente",
          location: "Remoto",
          summary:
            "Implementé sistemas de recompensas basados en QR (generación, escaneo, panel admin) y componentes compartidos. Integré wallet Web3 (Privy, ethers.js) con Smart Contracts, NFT badges, minting, leaderboards y streaming de vídeo (ReactPlayer); autenticación multi-provider (MetaMask, WalletConnect, Coinbase Wallet), firma off-chain, oráculo de precios, pagos FinCode (3D Secure), Sentry y Bugsnag.",
          achievements: [
            "Implementé backoffice de streaming con App Router, React Query, JWT con refresh token, RBAC y Socket.io para notificaciones en vivo y progreso de carga. Carga de archivos hasta 5GB (S3 presigned URLs, multipart), conversión HLS, thumbnails y facturación Stripe por almacenamiento.",
            "Desarrollé plataformas de analítica y ventas con dashboards en tiempo real (Chart.js, WebSocket), gráficos multi-eje, tooltips interactivos y export PDF/Excel; chatbot embebible multi-tenant con theming por cliente y persistencia de contexto; Google Maps (Places, Geocoding).",
            "Arquitecté y mantuve dashboard SaaS multi-tenant con paneles de ingresos, KPIs, facturación, facturas y balance; tablas virtualizadas, edición inline, filtros y paginación masiva; chat admin-usuario con adjuntos, plantillas QR, visor PDF, galería y variantes. Base de componentes reutilizables y arquitectura tipo micro-frontend.",
            "Apliqué App Router con TypeScript strict, SSR, route groups, parallel e intercepting routes para modales; JWT con cookies HTTP-only y refresh token rotation; React Query con optimistic updates, infinite scroll y stale-while-revalidate.",
          ],
          technologies: [
            "Next.js",
            "TypeScript",
            "React Query",
            "Privy",
            "ethers.js",
            "Socket.io",
            "Stripe",
            "AWS S3",
            "Sentry",
            "Bugsnag",
          ],
        },
        {
          role: "Desarrollo autónomo y portfolio",
          company: "Proyectos Personales",
          period: "2021 — Sep 2023",
          location: "Habana, Cuba",
          summary:
            "Maquetación semántica y responsive (HTML5, CSS3, SCSS) para sitios y aplicaciones de clientes. Refactorización de código legacy y migraciones de JavaScript a TypeScript; arquitectura modular y componentes reutilizables. SPAs con Vue (Composition API, Vuex/Pinia), enrutamiento, formularios con validación e integración con APIs. Herramientas como calculadora de rentabilidad con Next.js y Chart.js, formularios complejos y validación de fechas.",
          achievements: [
            "Layouts adaptativos pixel-perfect y estructura limpia.",
            "Arquitectura modular y separación de responsabilidades; menos errores en tiempo de ejecución.",
            "SPAs con Vue y lógica de negocio con entrega iterativa según requisitos del cliente.",
            "Calculadoras, formularios y UX alineada a prototipo y código en producción.",
          ],
          technologies: [
            "HTML5",
            "CSS3",
            "SCSS",
            "JavaScript",
            "TypeScript",
            "Vue 3",
            "Next.js",
            "Chart.js",
          ],
        },
      ],
    },
    skills: {
      sectionTitle: "Habilidades",
      subtitle: "Herramientas y especialidades",
      categories: [
        {
          title: "Ingeniería Frontend",
          items: [
            "React 18+",
            "Next.js (App Router, SSR, SSG)",
            "Vue 3 (Composition API, Pinia)",
            "TypeScript",
            "Tailwind CSS",
            "SCSS",
            "Chart.js",
            "Librerías de componentes",
          ],
        },
        {
          title: "Arquitectura y estado",
          items: [
            "Arquitectura por features",
            "React Query",
            "next-intl",
            "RBAC",
            "JWT / next-Auth",
            "Optimistic updates",
            "Virtualización",
          ],
        },
        {
          title: "Backend e integraciones",
          items: [
            "Node.js",
            "Firebase FCM",
            "Socket.io / WebSocket",
            "AWS S3",
            "Stripe, PayPal, Bizum, Oxapay, Trustly",
            "Privy, ethers.js",
            "Sentry, Bugsnag",
          ],
        },
        {
          title: "Metodología y herramientas",
          items: [
            "Scrum, Kanban",
            "Jira, Trello, Asana, Slack",
            "Planificación de sprints, retrospectivas",
            "Español (nativo), Inglés (profesional)",
            "Curso Full Stack, Tezlucan México (2023)",
          ],
        },
      ],
    },
    projects: {
      sectionTitle: "Proyectos",
      subtitle: "Destacados recientes",
      items: [
        {
          name: "Plataforma inmobiliaria (Loem Agency)",
          role: "Líder Frontend",
          period: "2025",
          description:
            "Plataforma inmobiliaria de alto tráfico con mapas en vivo (1M+ propiedades), checkout de suscripción y chat con IA. Componente de mapas con caché LRU, virtualización de 400 marcadores, GeoJSON en 4 niveles y WebSocket para búsqueda en tiempo real.",
          highlights: [
            "Next.js App Router, SSR, SSG, next-intl, React Query, arquitectura por features.",
            "Checkout y suscripción con tarjeta, PayPal, Bizum, Oxapay, Trustly, 3D Secure.",
            "Leaderboard y ranking en tiempo real (WebSocket), notificaciones Firebase FCM y EmailJs.",
            "RBAC (5 niveles), protección de rutas, JWT y next-Auth. Calculadora de rentabilidad (Chart.js) y tablas virtualizadas.",
          ],
          technologies: [
            "Next.js",
            "React Query",
            "Stripe",
            "WebSocket",
            "Firebase FCM",
            "Chart.js",
          ],
        },
        {
          name: "Productos Web3 (AGL Tech)",
          role: "Desarrollador Frontend",
          period: "2023 — 2025",
          description:
            "Experiencias Web3 con integración de wallet (Privy, ethers.js), Smart Contracts, NFT badges, minting, leaderboards y streaming de vídeo. Autenticación multi-provider (MetaMask, WalletConnect, Coinbase Wallet), firma off-chain, oráculo de precios, FinCode 3D Secure, Sentry y Bugsnag.",
          highlights: [
            "Sistemas de recompensas por QR: generación, escaneo, panel admin; componentes compartidos entre productos.",
            "Observabilidad y UX para usuarios noveles y avanzados; equilibrio entre seguridad blockchain y usabilidad.",
          ],
          technologies: [
            "Next.js",
            "TypeScript",
            "Privy",
            "ethers.js",
            "ReactPlayer",
            "Sentry",
            "Bugsnag",
          ],
        },
        {
          name: "Backoffice de streaming (AGL Tech)",
          role: "Desarrollador Frontend",
          period: "2023 — 2025",
          description:
            "Backoffice para streaming con notificaciones en vivo y progreso de carga (Socket.io). Carga de archivos hasta 5GB con S3 presigned URLs y multipart, conversión HLS, generación de thumbnails, facturación Stripe por almacenamiento.",
          highlights: [
            "App Router, React Query, JWT con refresh token, RBAC. Sentry para errores, rendimiento y session replay.",
            "Menos tiempo de gestión de contenido y visibilidad en tiempo real del progreso.",
          ],
          technologies: [
            "Next.js",
            "React Query",
            "Socket.io",
            "AWS S3",
            "Stripe",
            "Sentry",
          ],
        },
        {
          name: "Dashboards de analítica y ventas (AGL Tech)",
          role: "Desarrollador Frontend",
          period: "2023 — 2025",
          description:
            "Plataformas de analítica y ventas en tiempo real con Chart.js y WebSocket, gráficos multi-eje, tooltips interactivos, export PDF/Excel. Chatbot embebible multi-tenant con theming por cliente y persistencia de contexto; Google Maps (Places, Geocoding).",
          highlights: [
            "Mejor toma de decisiones con datos en vivo y reporting exportable.",
          ],
          technologies: [
            "Next.js",
            "Chart.js",
            "WebSocket",
            "Google Maps API",
          ],
        },
        {
          name: "Dashboard SaaS multi-tenant (AGL Tech)",
          role: "Desarrollador Frontend",
          period: "2023 — 2025",
          description:
            "Dashboard SaaS con paneles de ingresos, KPIs, facturación, facturas y balance de usuarios. Tablas virtualizadas, edición inline, filtros y paginación masiva; chat admin-usuario con adjuntos, plantillas QR, visor PDF, galería y variantes. Base de componentes reutilizables y arquitectura tipo micro-frontend con paneles configurables por vertical.",
          highlights: [
            "Experiencia unificada para múltiples productos en una sola base; RBAC y diseño de sistemas reutilizables.",
          ],
          technologies: [
            "Next.js",
            "TypeScript",
            "React Query",
          ],
        },
      ],
    },
    contact: {
      sectionTitle: "Contacto",
      subtitle: "Construyamos algo extraordinario",
      intro:
        "Estoy abierto a oportunidades remotas en iniciativas frontend, tiempo real y Web3. Comparte tu idea y exploramos cómo hacerla realidad.",
      channels: [
        {
          type: "Teléfono",
          value: "+53 55545028",
          url: "https://wa.me/5355545028",
          cta: "WhatsApp",
        },
        {
          type: "Correo",
          value: "guillerg0101@gmail.com",
          url: "mailto:guillerg0101@gmail.com",
          cta: "Enviar correo",
        },
        {
          type: "Ubicación",
          value: "Habana, Cuba",
          url: "https://maps.google.com/?q=Habana+Cuba",
          cta: "Ver mapa",
        },
        {
          type: "LinkedIn",
          value: "guillerg01",
          url: "https://www.linkedin.com/in/guillerg01/",
          cta: "Perfil",
        },
      ],
      availability:
        "Disponible para proyectos remotos · Habana, Cuba (UTC-05:00)",
      form: {
        name: "Nombre",
        email: "Correo",
        company: "Empresa (opcional)",
        companyPlaceholder: "¿Dónde estás construyendo?",
        message: "Mensaje",
        messagePlaceholder:
          "Comparte un brief, tiempos o problema que podamos resolver.",
        submit: "Iniciar conversación",
      },
    },
    header: {
      getInTouch: "Contactar",
    },
  },
};

export function getContent(locale: Locale): Content {
  return translations[locale] ?? translations.en;
}
