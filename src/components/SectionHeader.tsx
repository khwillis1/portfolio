type SectionHeaderProps = {
  number: string;   // e.g. "01"
  label: string;    // e.g. "ABOUT"
  title: string;    // e.g. "About"
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  number,
  label,
  title,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <div
        className={`flex items-center gap-2 mb-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span
          className="font-mono text-[11px] tracking-[0.25em]"
          style={{ color: "var(--accent)" }}
        >
          {number}
        </span>
        <span
          className="font-mono text-[11px] tracking-[0.25em] uppercase"
          style={{ color: "var(--text-3)" }}
        >
          {label}
        </span>
      </div>
      <h2
        className="text-3xl md:text-4xl tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
      >
        {title}
      </h2>
    </div>
  );
}
