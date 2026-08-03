import { useState, useEffect } from "react";

const useActiveSection = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && window.scrollY >= 200) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-20% 0px -45% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;

