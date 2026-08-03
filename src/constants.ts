import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Dhiraj Harwani",
  email: "harwanidhiraj23@gmail.com",
  phone: "+918849892389",
  title: "Full Stack Developer",
  location: "Rajkot, India",
  summary:
    "Full Stack Developer with 4+ years of experience building scalable web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Shopify. Experienced in developing custom Shopify themes, Shopify app development, Checkout Extensibility, Shopify Functions, and REST APIs. Proficient in JavaScript, TypeScript, React.js, Next.js, Nest.js, and modern frontend development with a strong focus on performance, scalability, and clean code.",
} as const;

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/harwanidhiraj",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/harwani-dhiraj-395a88214/",
    label: "LinkedIn",
  },
  {
    icon: MessageCircle,
    href: `https://wa.me/${PERSONAL_INFO.phone.replace("+", "")}?text=${encodeURIComponent("Hi Dhiraj! I reviewed your portfolio and would love to connect.")}`,
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: `mailto:${PERSONAL_INFO.email}`,
    label: "Email",
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Technical Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const ROLES: string[] = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Shopify Developer",
  "React.js / Next.js Developer",
  "Node.js / Nest.js Developer",
];

export const HERO_TECH_TAGS: string[] = [
  "React.js",
  "Next.js",
  "Shopify",
  "Node.js",
  "Nest.js",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "SQL",
];

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "REST APIs", "Socket.io"],
  },
  {
    title: "Shopify Ecosystem",
    skills: [
      "Shopify Theme Development",
      "Liquid",
      "Shopify CLI",
      "Shopify Admin API",
      "Storefront API",
      "Shopify Polaris",
      "App Extensions",
      "Shopify Functions",
      "Checkout Extensibility",
      "Webhooks",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "ORM & Query Builders",
    skills: ["TypeORM", "Prisma", "Sequelize"],
  },
  {
    title: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Trello",
      "VS Code",
      "Postman",
    ],
  },
  {
    title: "Deployment & Hosting",
    skills: ["Vercel", "Netlify", "Render"],
  },
  {
    title: "Operating Systems",
    skills: ["Windows", "Linux"],
  },
];

export interface Project {
  title: string;
  subtitle?: string;
  description?: string;
  bullets: string[];
  tags: string[];
  isNew?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "RuleForge",
    subtitle: "Shopify Rules & Checkout Customization App",
    isNew: true,
    bullets: [
      "Developed a Shopify embedded app for advanced checkout validation and customization using Shopify Functions and Checkout UI Extensions.",
      "Built a no-code rule builder with React.js, Shopify Polaris, and Express.js for managing checkout, payment, and shipping rules.",
      "Integrated Shopify Admin Metafields and Webhooks to synchronize rules and track real-time checkout analytics.",
      "Developed scalable backend services using Node.js, Express.js, and PostgreSQL with support for rule versioning, scheduling, and analytics dashboards.",
    ],
    tags: [
      "Shopify",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Shopify Polaris",
      "Shopify Functions",
      "Checkout UI Extensions",
    ],
  },
  {
    title: "TERRE DES HOMMES SUISSE - TDHS",
    subtitle: "NGO Operational Platform",
    bullets: [
      "Built modules for NGO operations supporting children's rights initiatives across 10 countries.",
      "Developed secure REST APIs and enhanced database design and authentication.",
      "Improved API performance by implementing Version 2 architecture.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "EVENT MANAGEMENT SYSTEM",
    subtitle: "Real-time Event & Booking Platform",
    bullets: [
      "Developed event creation, ticket booking/cancellation, and dynamic seating management features.",
      "Integrated Nodemailer for automated email notifications.",
      "Implemented Socket.io for real-time in-app notifications.",
      "Built and integrated REST APIs to support frontend functionality.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Socket.io"],
  },
  {
    title: "JOB JUNCTION",
    subtitle: "Recruitment & Freelance Platform",
    bullets: [
      "Developed a job portal for recruiters and job seekers.",
      "Built job posting, proposal management, and messaging modules.",
      "Created reusable React components for improved maintainability.",
      "Integrated REST APIs for seamless frontend-backend communication.",
      "Implemented responsive user interfaces for multiple user roles.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "LOGGY - CAR MAINTENANCE TRACKER",
    subtitle: "Vehicle Service Tracking System",
    bullets: [
      "Built vehicle maintenance tracking platform.",
      "Focused on data accuracy, performance, and seamless user experience.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "SQL"],
  },
];

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "Tatva Soft",
    location: "Rajkot",
    period: "June 2023 – Present",
    bullets: [
      "Developed scalable React.js applications using reusable component architecture.",
      "Built responsive UI using React.js, Redux Toolkit, Material UI and Tailwind CSS.",
      "Integrated REST APIs and optimized frontend performance using lazy loading, memoization and code splitting.",
      "Collaborated closely with backend and UI/UX teams following Agile methodology.",
      "Improved application performance and reduced page load time through frontend optimization techniques.",
      "Maintained clean code standards using Git workflows and code reviews.",
      "Developed custom Shopify themes and reusable sections using Liquid, improving store customization and maintainability.",
      "Built custom Shopify sections and reusable theme components.",
      "Customized Shopify Checkout and storefront functionality.",
      "Implemented third-party app integrations.",
    ],
  },
  {
    role: "Jr.Software Engineer",
    company: "Tri-state Technology",
    location: "Ahmedabad",
    period: "June 2022 – June 2023",
    bullets: [
      "Designed and developed scalable RESTful APIs using Node.js and Express.js for enterprise web applications.",
      "Designed scalable backend architecture using MongoDB and PostgreSQL.",
      "Implemented secure authentication using JWT.",
      "Integrated third-party APIs and payment gateways.",
      "Optimized database queries resulting in improved application performance.",
      "Collaborated with frontend developers for API integration.",
      "Followed Agile development practices and Git version control.",
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  year: string;
  cgpa?: string;
}

export const EDUCATION: Education[] = [
  {
    degree: "Computer Science And Engineering Science",
    school: "GTU, SREZ collage (Sanjaybhai Rajguru College of Engineering)",
    year: "2019 – 2022",
    cgpa: "8.0/10",
  },
];

