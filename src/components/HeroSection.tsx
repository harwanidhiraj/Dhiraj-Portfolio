import { useEffect, useRef, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import {
  SOCIAL_LINKS,
  ROLES,
  HERO_TECH_TAGS,
  PERSONAL_INFO,
} from "@/constants";
import SocialLinks from "./common/SocialLinks";
import TechTag from "./common/TechTag";
import useTypewriter from "@/hooks/useTypewriter";

const HeroSection = () => {
  const { displayText, cursorVisible } = useTypewriter({ strings: ROLES });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const buildDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      if (sectionRef.current) {
        canvas.width = sectionRef.current.offsetWidth;
        canvas.height = sectionRef.current.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01[]<>/*#=+-;:.abcdefghijklmnopqrstuvwxyz";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];

        ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] > 1) {
          const trailChar = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
          ctx.fillText(trailChar, i * fontSize, (drops[i] - 1) * fontSize);
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 60);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen md:min-h-[105vh] flex flex-col justify-center items-center relative px-4 sm:px-6 overflow-hidden py-24 sm:py-32 pb-28 sm:pb-36"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="absolute top-28 left-6 md:left-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-foreground/60 leading-relaxed font-medium">
          <br />

          <br />

          <br />
        </p>
      </div>

      <div className="absolute top-28 right-6 md:right-10 z-10 hidden md:block">
        <p className="font-mono text-xs text-foreground/40 leading-relaxed text-right font-medium"></p>
      </div>

      <div className="text-center relative z-10 w-full max-w-4xl mx-auto">
        <h1
          className="stagger-in heading-brutal leading-[0.9] sm:leading-[0.85] text-shimmer cursor-default break-words"
          style={{
            fontSize: "clamp(32px, 8vw, 120px)",
            animationDelay: "400ms",
          }}
        >
          {PERSONAL_INFO.name}
        </h1>

        <div
          className="stagger-in mt-4 sm:mt-6 min-h-[2.5rem] flex items-center justify-center flex-wrap px-2"
          style={{ animationDelay: "600ms" }}
        >
          <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] text-foreground/50 select-none">
            {"< "}
          </span>
          <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.1em] sm:tracking-[0.15em] text-foreground/70 font-medium break-all">
            {displayText}
          </span>
          <span
            className={`font-mono text-xs sm:text-sm md:text-base text-foreground/70 ${cursorVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            |
          </span>
          <span className="font-mono text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] text-foreground/50 select-none">
            {" />"}
          </span>
        </div>

        <div
          className="stagger-in flex flex-wrap gap-1.5 sm:gap-2 justify-center mt-6 sm:mt-8 max-w-sm sm:max-w-md mx-auto px-2"
          style={{ animationDelay: "800ms" }}
        >
          {HERO_TECH_TAGS.map((tech) => (
            <TechTag key={tech} label={tech} size="md" />
          ))}
        </div>

        <div className="stagger-in mt-8 sm:mt-10" style={{ animationDelay: "1000ms" }}>
          <SocialLinks
            links={SOCIAL_LINKS}
            variant="icon"
            className="justify-center"
          />
        </div>

        <div className="stagger-in mt-8 sm:mt-10" style={{ animationDelay: "1200ms" }}>
          <a
            href="/resume.pdf"
            download="Dhiraj_Harwani_MERN_Stack_Developer.pdf"
            onClick={() => {
              toast.success("Resume download started!", {
                description: "Thank you for reviewing Dhiraj Harwani's resume.",
              });
            }}
            className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-black bg-black text-white text-xs sm:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:bg-white hover:text-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-full"
          >
            <span>Download Resume</span>
            <span className="w-2 h-2 border-r-2 border-b-2 border-current rotate-45 -translate-y-[1px] group-hover:translate-y-[1px] transition-transform duration-300"></span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 md:left-10 z-10">
        <span className="text-foreground/80 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-mono font-medium">
          {PERSONAL_INFO.name}
        </span>
      </div>

      <div className="absolute bottom-10 right-6 md:right-10 z-10 hidden md:block">
        <div className="font-mono text-xs text-foreground/80 text-right leading-relaxed font-medium">
          <p>const experience = "4+ years";</p>
          <p>const projects = 5+;</p>
          <p>const passion = Infinity;</p>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/30 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
