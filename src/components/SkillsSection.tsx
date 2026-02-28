import SectionBlock from "./SectionBlock";

const skillCategories = [
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

const SkillsSection = () => (
  <SectionBlock id="skills" title="Technical Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {skillCategories.map((category, idx) => (
        <div
          key={category.title}
          className="group opacity-0 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
          style={{
            animationDelay: `${idx * 100}ms`,
            animationDuration: "600ms",
            animationFillMode: "forwards",
          }}
        >
          <div className="flex flex-col h-full border-t-2 border-black pt-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] mb-6 text-black/40 group-hover:text-black transition-colors duration-300">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 border border-black/5 text-xs font-medium hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default SkillsSection;
