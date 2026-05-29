"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(249,244,240,0.97)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 1px 0 var(--border), 0 4px 24px rgba(36,27,30,0.05)",
            }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            color: "var(--text)",
          }}
        >
          kw.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors"
              style={{ color: "var(--text-2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="text-sm px-3 py-1.5 rounded transition-colors"
            style={{
              border: "1px solid var(--border-strong)",
              color: "var(--text-2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-strong)";
              e.currentTarget.style.color = "var(--text-2)";
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "var(--text-2)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-5 flex flex-col gap-5"
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-colors"
              style={{ color: "var(--text-2)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="text-sm"
            style={{ color: "var(--accent)" }}
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  );
}
