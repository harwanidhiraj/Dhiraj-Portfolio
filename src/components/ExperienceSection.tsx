import SectionBlock from "./SectionBlock";
import { EXPERIENCES } from "@/constants";

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <div className="space-y-12">
      {EXPERIENCES.map((exp) => (
        <div
          key={exp.company + exp.role}
          className="relative pl-6 sm:pl-8 md:pl-0 border-l-2 md:border-l-0 border-black/20 md:grid md:grid-cols-[220px_1fr] md:gap-8 group"
        >
          {/* Mobile Timeline Dot sitting precisely on the outer left border */}
          <div className="md:hidden absolute top-2 -left-[7px] w-[12px] h-[12px] flex items-center justify-center z-10">
            <div className="w-[12px] h-[12px] rounded-full border-2 border-black bg-white group-hover:bg-black transition-colors duration-300" />
          </div>

          <div className="md:text-right md:pr-8 md:border-r-2 border-black/20 relative pb-4 md:pb-0">
            {/* Desktop Timeline Dot sitting on left column's right border */}
            <div className="hidden md:flex absolute top-1.5 -right-[7px] w-[12px] h-[12px] items-center justify-center z-10">
              <div className="w-[12px] h-[12px] rounded-full border-2 border-black bg-white group-hover:bg-black transition-colors duration-300" />
            </div>

            <span className="inline-block font-mono text-[11px] sm:text-xs tracking-wider text-black/70 uppercase mb-1 bg-black/5 px-2 py-0.5 border border-black/10">
              {exp.period}
            </span>
            <h3 className="font-black text-lg sm:text-xl text-foreground mt-1">{exp.company}</h3>
            {exp.location && (
              <span className="text-xs font-mono text-foreground/50 block mt-0.5">
                {exp.location}
              </span>
            )}
          </div>

          <div className="mt-2 md:mt-0 pb-6 border-b border-black/10 md:border-b-0">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
              {exp.role}
            </h3>

            {exp.bullets && exp.bullets.length > 0 ? (
              <ul className="space-y-2">
                {exp.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="body-text text-sm md:text-base flex items-start gap-2.5 leading-relaxed"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : (
              exp.description && (
                <p className="body-text text-sm md:text-base">{exp.description}</p>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ExperienceSection;

