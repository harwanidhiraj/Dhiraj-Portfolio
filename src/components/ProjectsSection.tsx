import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import TechTag from "./common/TechTag";
import { PROJECTS } from "@/constants";

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
      {PROJECTS.map((project, idx) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >

          <span className="absolute top-3 right-4 font-mono text-[11px] text-foreground/20 tracking-wider group-hover:text-foreground/50 transition-colors duration-300">
            {String(idx + 1).padStart(2, "0")}
          </span>

          {project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12">
              LATEST WORK
            </div>
          )}
          <div>
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4 pr-6">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal line-clamp-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
          </div>

          {project.githubUrl ||
            (project.liveUrl && (
              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
                {project.githubUrl && (
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
                {project.liveUrl && (
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
            ))}
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
