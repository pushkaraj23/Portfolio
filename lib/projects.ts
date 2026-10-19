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
    slug: "erp-system",
    title: "ERP System",
    tagline: "One dashboard for sales, inventory and accounting",
    description:
      "Custom ERP that unifies sales, purchase, stock and accounting for growing businesses.",
    overview:
      "A modular ERP built for small and mid-sized businesses that were juggling spreadsheets and disconnected tools. It brings POS, inventory, accounting, payroll and customer management into a single role-based dashboard with real-time analytics, so owners see revenue, orders and stock levels at a glance.",
    category: "Web Application",
    tags: ["React", "Node.js", "MongoDB"],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
      backend: ["Node.js", "Express", "JWT Auth"],
      database: ["MongoDB", "Redis"],
      tools: ["Docker", "GitHub Actions", "Postman"],
    },
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    gallery: [
      "https://i.pinimg.com/1200x/87/87/2f/87872f6ca2dda24572cd39c4720b3419.jpg",
      "https://i.pinimg.com/736x/6c/21/78/6c21788e8c5ddc3b140d4d8f9a4f3451.jpg",
      "https://i.pinimg.com/736x/3e/54/56/3e5456ac165a354f719e62d253362081.jpg",
    ],
    role: "Full Stack Developer",
    client: "Confidential Client",
    duration: "5 months",
    year: 2025,
    status: "Live",
    teamSize: 3,
    features: [
      "Real-time sales and revenue dashboard",
      "Role-based access control (admin, accountant, staff)",
      "Inventory tracking with low-stock alerts",
      "GST-ready invoicing and PDF export",
      "Purchase orders and vendor management",
      "Exportable reports (CSV and PDF)",
    ],
    challenges: [
      {
        problem: "Dashboard became slow with 100k+ order records.",
        solution: "Added indexed aggregation pipelines and cached summary queries in Redis.",
      },
      {
        problem: "Different staff needed very different views of the same data.",
        solution: "Built a permission matrix so each role sees only its own modules and actions.",
      },
    ],
    results: [
      { label: "Manual data entry", value: "-60%" },
      { label: "Report generation", value: "10 min to 5 sec" },
      { label: "Active users", value: "40+" },
    ],
    links: { live: "https://example.com/erp", github: "https://github.com/username/erp-system" },
  },
  {
    id: "2",
    slug: "vitalwatch",
    title: "VitalWatch",
    tagline: "Predictive health insights from everyday wearables",
    description: "Predictive health solution using everyday wearables.",
    overview:
      "VitalWatch collects heart rate, sleep and activity data from smartwatches and looks for abnormal trends over time. Users can add their medical and hereditary history, and flagged patterns can be reviewed and endorsed by a doctor, turning raw wearable data into early warnings instead of just charts.",
    category: "Mobile + Web Platform",
    tags: ["AI/ML", "Flutter", "Firebase"],
    techStack: {
      frontend: ["Flutter", "Dart", "fl_chart"],
      backend: ["Firebase Functions", "Python (FastAPI)"],
      database: ["Cloud Firestore", "Firebase Storage"],
      tools: ["TensorFlow Lite", "Google Fit API", "Figma"],
    },
    coverImage:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D",
    gallery: [
      "https://i.pinimg.com/1200x/87/87/2f/87872f6ca2dda24572cd39c4720b3419.jpg",
      "https://i.pinimg.com/736x/6c/21/78/6c21788e8c5ddc3b140d4d8f9a4f3451.jpg",
      "https://i.pinimg.com/736x/3e/54/56/3e5456ac165a354f719e62d253362081.jpg",
    ],
    role: "Full Stack and ML Developer",
    client: "Personal Project",
    duration: "3 months",
    year: 2025,
    status: "In Development",
    teamSize: 2,
    features: [
      "Syncs with smartwatch health data",
      "Anomaly detection on heart rate and sleep trends",
      "Hereditary and medical history input",
      "Doctor review and endorsement workflow",
      "Weekly health summary notifications",
      "Secure, consent-based data sharing",
    ],
    challenges: [
      {
        problem: "Wearable data is noisy and has gaps.",
        solution: "Added smoothing and interpolation before feeding data into the anomaly model.",
      },
      {
        problem: "Health data is sensitive.",
        solution:
          "Used Firestore security rules with per-user access and explicit sharing consent.",
      },
    ],
    results: [
      { label: "Anomaly detection accuracy", value: "91% (test set)" },
      { label: "Metrics tracked", value: "8+" },
      { label: "Sync interval", value: "Every 15 min" },
    ],
    links: {
      github: "https://github.com/username/vitalwatch",
      caseStudy: "https://example.com/vitalwatch",
    },
  },
  {
    id: "3",
    slug: "vendor-management-system",
    title: "Vendor Management System",
    tagline: "Onboard, track and pay vendors without the paperwork",
    description: "VMS to manage vendor onboarding, contracts, approvals and payments in one place.",
    overview:
      "A vendor management system for a services company that tracked vendors across email and spreadsheets. It handles onboarding with document verification, contract renewals, multi-level purchase approvals and payment status, with automatic reminders before contracts expire.",
    category: "Web Application",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    techStack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form"],
      backend: ["Next.js API Routes", "Prisma", "NextAuth"],
      database: ["PostgreSQL"],
      tools: ["Vercel", "Resend (email)", "Zod"],
    },
    coverImage:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    gallery: [
      "https://i.pinimg.com/1200x/87/87/2f/87872f6ca2dda24572cd39c4720b3419.jpg",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDE%3D",
      "https://i.pinimg.com/736x/3e/54/56/3e5456ac165a354f719e62d253362081.jpg",
      "https://images.unsplash.com/photo-1782155789465-9bae14cbfba5?q=80&w=1339&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      "https://i.pinimg.com/736x/6c/21/78/6c21788e8c5ddc3b140d4d8f9a4f3451.jpg",
    ],
    role: "Full Stack Developer",
    client: "Client in Australia",
    duration: "2 months",
    year: 2025,
    status: "Completed",
    teamSize: 2,
    features: [
      "Vendor onboarding with document upload",
      "Multi-level approval workflow",
      "Contract expiry reminders by email",
      "Vendor performance ratings",
      "Audit log of every status change",
    ],
    challenges: [
      {
        problem: "Approvals had to follow different chains by amount.",
        solution: "Built a configurable rules engine that routes requests by value and department.",
      },
    ],
    results: [
      { label: "Onboarding time", value: "5 days to 1 day" },
      { label: "Missed renewals", value: "0 in 6 months" },
    ],
    links: { live: "https://example.com/vms" },
  },
  {
    id: "4",
    slug: "time-machine-1999",
    title: "1999 Time Machine",
    tagline: "Walk through a year, month by month",
    description: "Interactive walkthrough of 1999 with events, images and voice narration.",
    overview:
      "A hackathon project that lets you explore the year 1999 month by month. Each month lists events with images, an optional voice narration, and genre filters like music, tech and sports. You can ask per-event questions and get contextual answers.",
    category: "Hackathon",
    tags: ["React", "AI", "Web Speech API"],
    techStack: {
      frontend: ["React", "Framer Motion", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["JSON dataset"],
      tools: ["LLM API", "Web Speech API", "Vite"],
    },
    coverImage:
      "https://images.unsplash.com/photo-1761857352384-aaae23a714a4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    gallery: [
      "https://i.pinimg.com/1200x/87/87/2f/87872f6ca2dda24572cd39c4720b3419.jpg",
      "https://i.pinimg.com/736x/6c/21/78/6c21788e8c5ddc3b140d4d8f9a4f3451.jpg",
      "https://i.pinimg.com/736x/3e/54/56/3e5456ac165a354f719e62d253362081.jpg",
    ],
    role: "Developer",
    client: "Hackathon",
    duration: "48 hours",
    year: 2026,
    status: "Prototype",
    teamSize: 1,
    features: [
      "Month-by-month interactive timeline",
      "Voice narration for every event",
      "Genre filters",
      "Ask-a-question panel for each event",
    ],
    challenges: [
      {
        problem: "Only 48 hours to build and polish.",
        solution: "Scoped to one year, a fixed dataset and a single reusable event card.",
      },
    ],
    results: [{ label: "Events covered", value: "60+" }],
    links: { github: "https://github.com/username/1999-time-machine" },
  },
];
