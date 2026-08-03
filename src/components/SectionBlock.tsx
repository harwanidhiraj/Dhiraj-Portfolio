import { useEffect, useRef, useState, type ReactNode } from "react";

interface SectionBlockProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionBlock = ({ id, title, children }: SectionBlockProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-16 transition-all duration-700 ease-out scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative mb-8 sm:mb-12">
        <h2 className="section-title">{title}.</h2>
        <div
          className={`h-[3px] bg-black mt-4 transition-all duration-700 ease-out ${
            visible ? "w-12" : "w-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        />
      </div>
      {children}
    </section>
  );
};

export default SectionBlock;
