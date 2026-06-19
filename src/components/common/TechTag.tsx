interface TechTagProps {
  label: string;
  size?: "sm" | "md";
}

const sizeStyles = {
  sm: "px-3 py-1.5 text-xs border",
  md: "px-3 py-1 text-xs border-2",
};

const TechTag = ({ label, size = "sm" }: TechTagProps) => (
  <span
    className={`${sizeStyles[size]} border-foreground/40 text-foreground/80 font-mono font-medium tracking-wider hover:bg-foreground hover:text-background transition-all duration-300 cursor-default`}
  >
    {label}
  </span>
);

export default TechTag;
