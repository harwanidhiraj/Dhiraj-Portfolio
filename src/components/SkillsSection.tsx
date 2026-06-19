import SectionBlock from "./SectionBlock";
import TechTag from "./common/TechTag";
import { SKILL_CATEGORIES } from "@/constants";

const categoryAccents = [
  "border-t-black",
  "border-t-black/80",
  "border-t-black/60",
  "border-t-black",
  "border-t-black/80",
  "border-t-black/60",
];

const SkillsSection = () => (
  <SectionBlock id="skills" title="Technical Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {SKILL_CATEGORIES.map((category, idx) => (
        <div
          key={category.title}
          className="group opacity-0 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
          style={{
            animationDelay: `${idx * 100}ms`,
            animationDuration: "600ms",
            animationFillMode: "forwards",
          }}
        >
          <div
            className={`flex flex-col h-full border-t-2 ${categoryAccents[idx] ?? "border-t-black"} pt-4 hover:border-t-black transition-colors duration-300`}
          >
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-black/40 group-hover:text-black transition-colors duration-300">
                {category.title}
              </h3>
              <span className="text-[10px] font-mono text-black/20 group-hover:text-black/40 transition-colors duration-300">
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
