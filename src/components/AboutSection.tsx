import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";
import { PERSONAL_INFO } from "@/constants";

const AboutSection = () => (
  <SectionBlock id="about" title="Professional Summary">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl text-base md:text-lg leading-relaxed first-letter:text-4xl first-letter:font-black first-letter:mr-1.5 first-letter:float-left first-letter:leading-none">
          {PERSONAL_INFO.summary}
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t-2 border-black/10 pt-6 max-w-2xl">
          <div>
            <span className="text-xs uppercase tracking-widest text-black/50 font-mono block">Location</span>
            <span className="font-bold text-foreground">{PERSONAL_INFO.location}</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-black/50 font-mono block">Email</span>
            <span className="font-bold text-foreground">{PERSONAL_INFO.email}</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-black/50 font-mono block">Specialization</span>
            <span className="font-bold text-foreground">MERN Stack & Shopify Development</span>
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-black/50 font-mono block">Experience</span>
            <span className="font-bold text-foreground">4+ Years</span>
          </div>
        </div>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;

