interface FloatingInputProps {
  label: string;
  type?: "text" | "email";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
}

const inputClasses =
  "peer w-full bg-transparent border-2 border-foreground/10 px-4 py-4 text-foreground focus:outline-none focus:border-black transition-colors";

const labelClasses =
  "absolute left-4 top-4 text-foreground/40 text-sm uppercase tracking-widest transition-all duration-300 pointer-events-none peer-focus:-translate-y-7 peer-focus:text-xs peer-focus:text-black peer-focus:bg-background peer-focus:px-2 peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-black peer-[:not(:placeholder-shown)]:bg-background peer-[:not(:placeholder-shown)]:px-2";

const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  multiline = false,
  rows = 5,
}: FloatingInputProps) => (
  <div className="group relative">
    {multiline ? (
      <textarea
        required={required}
        rows={rows}
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputClasses} resize-none`}
      />
    ) : (
      <input
        type={type}
        required={required}
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClasses}
      />
    )}
    <label className={labelClasses}>{label}</label>
  </div>
);

export default FloatingInput;
