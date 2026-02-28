import SectionBlock from "./SectionBlock";

const experiences = [
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

const ExperienceSection = () => (
  <SectionBlock id="experience" title="Experience">
    <div className="space-y-12">
      {experiences.map((exp) => (
        <div
          key={exp.role}
          className="relative pl-8 md:pl-0 border-l md:border-l-0 border-black/20 md:grid md:grid-cols-[1fr_2fr] md:gap-8 pb-12 last:pb-0"
        >
          <div className="md:text-right md:pr-8 md:border-r border-black/20 relative">
            <div className="hidden md:block absolute top-1 -right-[5px] w-[9px] h-[9px] rounded-full bg-black"></div>
            <div className="md:hidden absolute top-1 -left-[5px] w-[9px] h-[9px] rounded-full bg-black"></div>

            <h4 className="font-mono text-sm tracking-widest text-foreground/60 uppercase mb-1">
              {exp.period}
            </h4>
            <h3 className="font-bold text-lg md:text-xl">{exp.company}</h3>
          </div>

          <div className="mt-2 md:mt-0">
            <h3 className="text-lg font-bold text-foreground md:hidden mb-2">
              {exp.role}
            </h3>
            <h3 className="text-xl font-bold text-foreground hidden md:block mb-3">
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
