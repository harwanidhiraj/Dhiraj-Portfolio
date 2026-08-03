import SectionBlock from "./SectionBlock";
import { EDUCATION } from "@/constants";

const EducationSection = () => (
  <SectionBlock id="education" title="Education">
    <div className="space-y-10">
      {EDUCATION.map((item) => (
        <div
          key={item.degree}
          className="group border-l-4 border-black/20 pl-6 py-3 hover:border-black transition-all duration-300 hover:pl-8 bg-white/40 p-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-lg md:text-xl font-black text-foreground">
              {item.school}
            </h3>
            <span className="font-mono text-xs md:text-sm font-semibold px-3 py-1 bg-black text-white self-start sm:self-auto">
              {item.year}
            </span>
          </div>
          <p className="text-sm md:text-base font-medium text-foreground/80 mt-1">
            {item.degree}
          </p>
          {item.cgpa && (
            <div className="mt-3 inline-flex items-center gap-2 font-mono text-xs md:text-sm font-bold border border-black/20 px-3 py-1 bg-black/5">
              <span>CGPA:</span>
              <span className="text-black">{item.cgpa}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default EducationSection;

