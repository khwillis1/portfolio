export default function Footer() {
  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <p
          className="font-mono text-xs"
          style={{ color: "var(--text-3)" }}
        >
          Kalynn Willis © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
