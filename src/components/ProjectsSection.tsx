import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface Project {
  title: string;
  description: string;
  tags: string[];
  isNew?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
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
      "Worked on the Terre des Hommes Suisse project, a Swiss NGO platform supporting children’s rights across 10 countries. Led back-end development and successfully implemented Version 2 with improved performance, improved API structure, and secure data management.",
    tags: ["React.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "GROCERY APP",
    description:
      "Developed the complete backend for a full-featured grocery app, handling user authentication, product management, cart, orders, payments, and admin panel functionality. Ensured secure, scalable, and high-performance APIs.",
    tags: ["React.js", "Flutter", "Node.js", "PostgreSQL", "Sequelize"],
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {"isNew" in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12">
              LATEST WORK
            </div>
          )}
          <div>
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            {"githubUrl" in project && project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            )}
            {"liveUrl" in project && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
