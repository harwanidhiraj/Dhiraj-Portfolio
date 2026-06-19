import { ArrowUp } from "lucide-react";
import { SOCIAL_LINKS, ROLES, PERSONAL_INFO, NAV_LINKS } from "@/constants";
import SocialLinks from "./common/SocialLinks";

const Finale = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-white border-t-8 border-black pt-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full py-4 bg-black overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee flex items-center shrink-0">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              {ROLES.map((tag) => (
                <span
                  key={tag}
                  className="text-white font-mono text-xs uppercase tracking-[0.3em] mx-10"
                >
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
        <div className="relative mb-20 text-center">
          <h2 className="text-[12vw] md:text-[8vw] font-black uppercase leading-none tracking-tighter text-black/5 absolute -top-1/2 left-1/2 -translate-x-1/2 select-none pointer-events-none">
            THANK YOU
          </h2>
          <p className="text-xl md:text-3xl font-black uppercase tracking-tight italic z-10 relative">
            Let's build something{" "}
            <span className="text-white bg-black px-4 py-1 not-italic inline-block hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-shadow duration-300">
              unforgettable
            </span>{" "}
            together.
          </p>
        </div>

        <div className="mb-16">
          <SocialLinks links={SOCIAL_LINKS} variant="card" />
        </div>

        <div className="mb-16 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-black/40 hover:text-black hover:underline underline-offset-4 decoration-2 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 border-2 border-green-600 rounded-full">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-green-800">
              Available for Freelance Projects
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black/30 hover:text-black transition-colors duration-300"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div className="w-full bg-white pt-10 pb-24 md:pb-10 px-6 mt-auto border-t border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 opacity-70">
          <p className="text-[10px] md:text-[11px] font-mono text-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-center md:text-left">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Finale;
