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
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`max-w-4xl mx-auto px-6 py-8 md:py-16 transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative mb-12">
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
