import { useState, useEffect, useMemo } from "react";
import { NAV_LINKS } from "@/constants";
import useActiveSection from "@/hooks/useActiveSection";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(() => NAV_LINKS.map((l) => l.href.replace("#", "")), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="hidden md:flex items-center justify-center gap-0">
          {NAV_LINKS.map((link, i) => {
            const isActive = `#${activeSection}` === link.href;
            return (
              <span key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className={`nav-link px-4 py-1 ${isActive ? "nav-link-active" : ""}`}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {link.label}
                </a>
                {i < NAV_LINKS.length - 1 && (
                  <span className="text-foreground/15 text-xs select-none">|</span>
                )}
              </span>
            );
          })}
        </div>

        <div className="md:hidden flex justify-center">
          <button
            onClick={() => setOpen(!open)}
            className="nav-link inline-flex items-center gap-2"
          >
            <span className={`w-4 h-[2px] bg-current transition-all duration-300 block ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`w-4 h-[2px] bg-current transition-all duration-300 block ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            <span className="ml-1">{open ? "Close" : "Menu"}</span>
          </button>
        </div>

        <div
          className={`md:hidden flex flex-col items-center gap-4 overflow-hidden transition-all duration-500 ease-out ${
            open ? "max-h-96 mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
          }`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = `#${activeSection}` === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                onClick={() => setOpen(false)}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
