import SectionBlock from "./SectionBlock";
import TechTag from "./common/TechTag";
import { SKILL_CATEGORIES } from "@/constants";

const SkillsSection = () => (
  <SectionBlock id="skills" title="Technical Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {SKILL_CATEGORIES.map((category, idx) => (
        <div
          key={category.title}
          className="group opacity-0 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
          style={{
            animationDelay: `${idx * 80}ms`,
            animationDuration: "500ms",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col h-full border-t-2 border-t-black/30 pt-4 hover:border-t-black transition-colors duration-300 bg-white/30 p-4 rounded-none">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-black/60 group-hover:text-black transition-colors duration-300">
                {category.title}
              </h3>
              <span className="text-[10px] font-mono font-bold text-black/30 group-hover:text-black/60 transition-colors duration-300">
                {String(category.skills.length).padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <TechTag key={skill} label={skill} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default SkillsSection;

