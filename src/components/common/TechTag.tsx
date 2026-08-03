interface TechTagProps {
  label: string;
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: "px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs border",
  md: "px-3 py-1 sm:py-1.5 text-xs sm:text-sm border-2",
};

const TechTag = ({ label, size = "sm" }: TechTagProps) => (
  <span
    className={`${sizeStyles[size]} border-foreground/40 text-foreground/80 font-mono font-medium tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-default inline-block max-w-full break-words select-none`}
  >
    {label}
  </span>
);

export default TechTag;

