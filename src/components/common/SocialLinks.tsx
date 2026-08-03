import { type SocialLink } from "@/constants";

interface SocialLinksProps {
  links: SocialLink[];
  variant?: "icon" | "card" | "minimal";
  className?: string;
}

const variantStyles = {
  icon: {
    container: "flex flex-wrap gap-3 sm:gap-4 justify-center",
    link: "group relative inline-flex items-center justify-center p-2.5 sm:p-3 border-2 border-black bg-white text-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] hover:bg-black hover:text-white",
    iconSize: "w-4 h-4 sm:w-5 sm:h-5",
    label: null as string | null,
  },
  card: {
    container: "grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mx-auto",
    link: "group flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 border-2 border-black bg-white hover:bg-black transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]",
    iconSize: "w-6 h-6 sm:w-8 sm:h-8 group-hover:text-white transition-colors duration-300",
    label:
      "mt-2 sm:mt-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest font-black group-hover:text-white text-center break-words",
  },
  minimal: {
    container: "flex flex-wrap gap-3 sm:gap-4",
    link: "p-2.5 sm:p-3 border border-foreground/20 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1",
    iconSize: "w-4 h-4 sm:w-5 sm:h-5",
    label: null as string | null,
  },
};

const SocialLinks = ({
  links,
  variant = "icon",
  className,
}: SocialLinksProps) => {
  const styles = variantStyles[variant];

  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={styles.link}
        >
          <link.icon className={styles.iconSize} />
          {styles.label && <span className={styles.label}>{link.label}</span>}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
