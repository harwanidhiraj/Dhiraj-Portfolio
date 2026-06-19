import {
  Github,
  Linkedin,
  Mail,
  BookOpen,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const PERSONAL_INFO = {
  name: "Dhiraj Harwani",
  email: "harwanidhiraj23@gmail.com",
  phone: "+918849892389",
  title: "MERN Stack Developer",
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
    href: `https://wa.me/${PERSONAL_INFO.phone}?text=${encodeURIComponent("Hi! I found your portfolio and really liked your projects and experience. I'm reaching out to connect and learn more about your work. Looking forward to chatting with you!")}`,
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
  "MERN Stack Developer",
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "Nest.js Developer",
];

export const HERO_TECH_TAGS: string[] = [
  "React",
  "Next.js",
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
    skills: ["JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "Context API",
      "TailwindCSS",
      "Bootstrap",
      "Material-UI",
      "Chart.js",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "Socket.io",
      "EJS",
      "JWT",
      "OAuth",
      "Passport.js",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Sequelize",
      "Supabase",
    ],
  },
  {
    title: "DevOps",
    skills: ["Vercel", "Render", "Git", "GitHub", "GitLab"],
  },
  {
    title: "Development Tools",
    skills: ["Postman", "ESLint", "Nodemon", "NPM", "Yarn", "SonarQube"],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  isNew?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "EVENT MANAGEMENT SYSTEM",
    isNew: false,
    description:
      "Worked as a Full Stack Developer to build key features like event creation, ticket booking/cancellation, and dynamic seating layout. I integrated Nodemailer for email notifications and socket for in-app notification and weather forecast APIs. I also developed analytics dashboards using the MongoDB Aggregation Pipeline.",
    tags: ["React.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    title: "JOB JUNCTION",
    description:
      "Worked as a React developer on Job Junction, a clone of Upwork focused on connecting freelancers with clients. Developed responsive UI components for job listings, proposals, messaging, and user dashboards. Ensured smooth UX and API integration.",
    tags: ["React.js", "TypeScript", "MUI"],
  },
  {
    title: "BASE TEAM",
    description:
      "Developed a full-featured Project Management app inspired by tools like Trello and Jira. Built both frontend and backend, including features like boards, task lists, drag-anddrop cards, user roles, comments, deadlines, and real-time updates.",
    tags: ["React.js", "Node.js", "PostgreSQL", "Socket.io"],
  },
  {
    title: "LOGGY - CAR MAINTENANCE TRACKER",
    description:
      "Worked as a Backend Developer for Loggy, a free vehicle maintenance tracking app. Designed and developed secure, scalable APIs for managing service logs across multiple vehicle types. Focused on data accuracy, performance, and seamless user experience.",
    tags: ["React.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "TERRE DES HOMMES SUISSE - TDHS",
    description:
      "Worked on the Terre des Hommes Suisse project, a Swiss NGO platform supporting children's rights across 10 countries. Led back-end development and successfully implemented Version 2 with improved performance, improved API structure, and secure data management.",
    tags: ["React.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "GROCERY APP",
    description:
      "Developed the complete backend for a full-featured grocery app, handling user authentication, product management, cart, orders, payments, and admin panel functionality. Ensured secure, scalable, and high-performance APIs.",
    tags: ["React.js", "Flutter", "Node.js", "PostgreSQL", "Sequelize"],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "Tatva Soft",
    period: "[JUNE 2023 – PRESENT]",
    description:
      "MERN Stack Developer at TatvaSoft; gained strong expertise in React.js, focusing on building responsive user interfaces, seamless API integration, component-based architecture, and optimizing front-end performance for scalable web applications.",
  },
  {
    role: "Jr.Software Engineer",
    company: "Tri-state Technology",
    period: "[JUNE 2022 – JUNE 2023]",
    description:
      "Backend Developer at Tristate Technology, focused on scalable APIs, database design, and performance optimization. Played a key role in the architecting of RESTful services, the integration of third-party APIs, and the guarantee of secure high-performance back-end solutions using Node.js, Express, PostgreSQL, and Sequelize. Collaborated cross-functionally with front-end and QA teams to deliver robust product features in an Agile environment. Contributed to reducing API latency by 30% and improving database efficiency through optimized query design.",
  },
];

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export const EDUCATION: Education[] = [
  {
    degree: "Computer Science And Engineering, B.Tech, Rajkot",
    school: "Sanjaybhai Rajguru College of Engineering",
    year: "2019 – 2022",
  },
];
