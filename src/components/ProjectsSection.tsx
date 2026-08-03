import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import TechTag from "./common/TechTag";
import { PROJECTS } from "@/constants";

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 gap-8">
      {PROJECTS.map((project, idx) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          <span className="absolute top-4 right-5 font-mono text-xs font-bold text-foreground/30 tracking-wider group-hover:text-foreground/70 transition-colors duration-300">
            {String(idx + 1).padStart(2, "0")}
          </span>

          {project.isNew && (
            <div className="absolute -top-3 left-6 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border-2 border-black z-10">
              FEATURED PROJECT
            </div>
          )}

          <div>
            <div className="pr-12">
              <h3 className="text-xl md:text-2xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="font-mono text-xs md:text-sm text-foreground/60 font-semibold mt-1">
                  {project.subtitle}
                </p>
              )}
            </div>

            {project.bullets && project.bullets.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {project.bullets.map((bullet, bulletIdx) => (
                  <li
                    key={bulletIdx}
                    className="body-text text-sm md:text-base flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              project.description && (
                <p className="body-text mt-4 text-sm md:text-base font-normal">
                  {project.description}
                </p>
              )
            )}

            <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-black/10">
              {project.tags.map((tag) => (
                <TechTag key={tag} label={tag} />
              ))}
            </div>
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-black/10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source Code
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
                  Live Preview
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;

