import { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import useActiveSection from "@/hooks/useActiveSection";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(
    () => NAV_LINKS.map((l) => l.href.replace("#", "")),
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-5 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-center gap-0">
          {NAV_LINKS.map((link, i) => {
            const isActive = `#${activeSection}` === link.href;
            return (
              <span key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className={`nav-link px-4 py-1 ${isActive ? "nav-link-active font-bold text-black" : ""}`}
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
                  <span className="text-foreground/20 text-xs select-none">
                    |
                  </span>
                )}
              </span>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex justify-between items-center">
          <a
            href="#"
            className="font-mono text-xs font-black uppercase tracking-widest text-foreground"
          >
            Dhiraj Harwani
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-1.5 border-2 border-black bg-white text-xs font-mono font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all duration-200"
            aria-label="Toggle Navigation Menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open
              ? "max-h-96 opacity-100 mt-4 border-2 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              : "max-h-0 opacity-0 mt-0 p-0 border-none pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = `#${activeSection}` === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 text-center rounded-none ${
                    isActive
                      ? "bg-black text-white font-bold"
                      : "text-foreground/80 hover:bg-black/5 hover:text-black font-medium"
                  }`}
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
      </div>
    </nav>
  );
};

export default Navbar;

