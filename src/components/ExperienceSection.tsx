import SectionBlock from "./SectionBlock";
import { EXPERIENCES } from "@/constants";

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <div className="space-y-0">
      {EXPERIENCES.map((exp, idx) => (
        <div
          key={exp.role}
          className="relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-black/10 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0 group"
        >
          <div className="md:text-right md:pr-8 md:border-r-2 border-black/10 relative">
            <div className="hidden md:flex absolute top-1 -right-[7px] w-[12px] h-[12px] items-center justify-center">
              <div className="w-[12px] h-[12px] rounded-full border-2 border-black bg-white group-hover:bg-black transition-colors duration-300" />
            </div>

            <div className="md:hidden absolute top-1 -left-[7px] w-[12px] h-[12px] flex items-center justify-center">
              <div className="w-[12px] h-[12px] rounded-full border-2 border-black bg-white group-hover:bg-black transition-colors duration-300" />
            </div>

            <h4 className="font-mono text-sm tracking-widest text-foreground/40 uppercase mb-1 group-hover:text-foreground/70 transition-colors duration-300">
              {exp.period}
            </h4>
            <h3 className="font-bold text-lg md:text-xl">{exp.company}</h3>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
              {exp.role}
            </h3>
            <p className="body-text text-sm md:text-base">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ExperienceSection;
