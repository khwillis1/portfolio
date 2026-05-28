export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-sm"
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontStyle: "italic",
            color: "var(--text-3)",
          }}
        >
          Kalynn Willis © {new Date().getFullYear()}
        </p>
        <p
          className="font-mono text-xs"
          style={{ color: "var(--text-3)" }}
        >
          built with Next.js + Tailwind · deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
