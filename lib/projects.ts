export type Project = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string; // short, shown on the card
  overview: string; // long, shown in the popup
  category: string;
  tags: string[]; // pills on the card
  techStack: { frontend: string[]; backend: string[]; database: string[]; tools: string[] };
  coverImage: string;
  gallery: string[];
  role: string;
  client: string;
  duration: string;
  year: number;
  status: "Live" | "In Development" | "Completed" | "Prototype";
  teamSize: number;
  features: string[];
  challenges: { problem: string; solution: string }[];
  results: { label: string; value: string }[];
  links: { live?: string; github?: string; caseStudy?: string };
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-fashion-store",
    title: "E-Commerce Platform",
    tagline: "Fashion brand store — designed, built and launched solo",
    description:
      "Full fashion e-commerce platform with auth, checkout and Azure hosting — ₹50,000+ revenue on day one.",
    overview:
      "A production fashion brand store designed and built end-to-end as a solo effort: UI/UX, React + Vite storefront, Node.js APIs, MySQL data layer and Azure deployment. Includes authentication, checkout flows and performance work that landed a 100 Lighthouse SEO score and a 96 best-practices score, with a backend handling 50,000+ reads per day.",
    category: "Web Application",
    tags: ["React", "Node.js", "MySQL"],
    techStack: {
      frontend: ["React", "Vite", "Tailwind CSS"],
      backend: ["Node.js", "Express", "REST APIs"],
      database: ["MySQL"],
      tools: ["Azure", "Figma", "GitHub", "Postman"],
    },
    coverImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&auto=format&fit=crop&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&auto=format&fit=crop&q=60",
    ],
    role: "Solo Designer & Full Stack Developer",
    client: "Fashion Brand (via Fibonce)",
    duration: "Aug 2025 – Oct 2025",
    year: 2025,
    status: "Live",
    teamSize: 1,
    features: [
      "Custom UI/UX for a fashion brand storefront",
      "Authentication and secure checkout flows",
      "Product catalogue, cart and order management",
      "Azure-hosted production deployment",
      "SEO and performance optimisation (Lighthouse 100 SEO / 96 best practices)",
    ],
    challenges: [
      {
        problem: "Had to ship a revenue-ready store as a solo build on a tight timeline.",
        solution:
          "Owned design through deployment in one stack (React + Vite, Node.js, MySQL, Azure) and scoped ruthlessly around auth, catalogue and checkout.",
      },
      {
        problem: "Needed strong discoverability and stability from day one.",
        solution:
          "Tuned Lighthouse SEO/best-practices scores and hardened the backend for high read volume with zero downtime at launch.",
      },
    ],
    results: [
      { label: "Day-one revenue", value: "₹50,000+" },
      { label: "Lighthouse SEO", value: "100" },
      { label: "Backend reads/day", value: "50,000+" },
    ],
    links: {},
  },
  {
    id: "2",
    slug: "erp-system",
    title: "ERP System",
    tagline: "Role-based ERP replacing manual client operations",
    description:
      "Role-based ERP with 5–6 modules that automates internal workflows for a 20-person organisation.",
    overview:
      "A solo-designed, role-based ERP built with ReactJS and Firebase that replaced a client's manual operations with one real-time platform. Five to six modules cover day-to-day internal work, with reliable scale at roughly 50,000 reads and 20,000 writes per day, ~20 concurrent users, and 100% uptime since launch.",
    category: "Web Application",
    tags: ["React", "Firebase", "ERP"],
    techStack: {
      frontend: ["ReactJS", "Tailwind CSS"],
      backend: ["Firebase Functions", "REST-style APIs"],
      database: ["Firebase / Firestore"],
      tools: ["Figma", "GitHub", "Postman"],
    },
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&auto=format&fit=crop&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=60",
    ],
    role: "Solo Designer & Full Stack Developer",
    client: "Confidential Client (via Fibonce)",
    duration: "Feb 2025 – Apr 2025",
    year: 2025,
    status: "Live",
    teamSize: 1,
    features: [
      "5–6 role-based modules covering internal operations",
      "Real-time data sync for a 20-person organisation",
      "Permission-aware views for different staff roles",
      "Automation of previously manual workflows",
      "Production monitoring with continuous uptime",
    ],
    challenges: [
      {
        problem: "Client workflows were fragmented across manual tools and spreadsheets.",
        solution:
          "Mapped operations into a single role-based ERP and automated 100% of the internal workflows they depended on daily.",
      },
      {
        problem: "Needed production reliability under steady daily load.",
        solution:
          "Designed Firebase-backed reads/writes for ~50k reads and ~20k writes per day with careful role rules and stable concurrent use.",
      },
    ],
    results: [
      { label: "Internal workflows automated", value: "100%" },
      { label: "Reads / writes per day", value: "~50k / ~20k" },
      { label: "Uptime since launch", value: "100%" },
    ],
    links: {},
  },
  {
    id: "3",
    slug: "agroshield",
    title: "AgroShield",
    tagline: "Crop disease detection for farmers, from a phone camera",
    description:
      "Flutter + CNN mobile app that detects grape crop disease from images and recommends treatment.",
    overview:
      "A farmer-facing mobile app co-built with a teammate using Flutter, Firebase, Python and a CNN model. Farmers capture crop images; the app detects disease and recommends treatment. Reached 93% detection accuracy across 5 grape species.",
    category: "Mobile + ML",
    tags: ["Flutter", "Firebase", "CNN"],
    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Python", "CNN inference API"],
      database: ["Firebase"],
      tools: ["TensorFlow / ML pipeline", "GitHub", "Figma"],
    },
    coverImage:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&auto=format&fit=crop&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&auto=format&fit=crop&q=60",
    ],
    role: "Full Stack & ML Developer",
    client: "Academic / Field Project",
    duration: "Jul 2024 – Dec 2024",
    year: 2024,
    status: "Completed",
    teamSize: 2,
    features: [
      "Image-based crop disease detection on mobile",
      "Treatment recommendations after detection",
      "Support across 5 grape species",
      "Firebase-backed app infrastructure",
      "CNN model integrated with a Flutter client",
    ],
    challenges: [
      {
        problem: "Field images vary widely in lighting, angle and quality.",
        solution:
          "Trained and validated the CNN across diverse samples for five grape species to hit reliable detection accuracy.",
      },
      {
        problem: "Farmers needed answers on-device, not a lab demo.",
        solution:
          "Wrapped the model in a Flutter + Firebase app with a simple capture-and-result flow.",
      },
    ],
    results: [
      { label: "Detection accuracy", value: "93%" },
      { label: "Grape species covered", value: "5" },
      { label: "Team size", value: "2" },
    ],
    links: {},
  },
];
