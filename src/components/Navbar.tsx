"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0914]/95 backdrop-blur-sm border-b border-[#1d1a30]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-lg tracking-wider">
          <span className="text-[#a78bfa]">kw</span>
          <span className="text-[#f472b6] animate-blink">_</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-[#64748b] hover:text-[#a78bfa] transition-colors"
            >
              ./{l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="font-mono text-sm border border-[#a78bfa] text-[#a78bfa] px-3 py-1.5 rounded hover:bg-[#a78bfa]/10 transition-colors"
          >
            resume.pdf
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#64748b] hover:text-[#a78bfa] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e0c1f] border-t border-[#1d1a30] px-6 py-5 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-[#64748b] hover:text-[#a78bfa] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              ./{l.label}
            </a>
          ))}
          <a href="/resume.pdf" className="font-mono text-sm text-[#a78bfa]">
            resume.pdf
          </a>
        </div>
      )}
    </nav>
  );
}
