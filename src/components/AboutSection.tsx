import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";
import { BookOpen } from "lucide-react";

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I am a passionate MERN Stack Developer with over 3+ years of hands-on
          experience in building scalable and production-ready web applications
          using MongoDB, Express.js, React.js, and Node.js. I specialize in
          developing responsive, user-friendly interfaces and robust backend
          systems that deliver seamless performance. My experience includes
          designing RESTful APIs, optimizing database structures, and ensuring
          application security and performance across different environments.
        </p>
        <p className="body-text max-w-2xl mt-6">
          Throughout my career, I have worked extensively with modern frontend
          tools like React.js and TypeScript, implementing dynamic UI
          components, state management solutions, and reusable architectures. On
          the backend, I have built secure authentication systems, integrated
          third-party APIs, implemented payment gateways, and managed complex
          business logic. I focus on writing clean, maintainable code and
          building applications that are scalable, efficient, and aligned with
          real-world user needs.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          I have experience working in Agile development environments,
          collaborating with cross-functional teams, and using Git for version
          control and project management. I am committed to continuous learning
          and consistently explore new technologies to improve performance,
          security, and user experience. My goal is to develop impactful digital
          solutions that are reliable, high-performing, and built to scale.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
