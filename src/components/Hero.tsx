"use client";
import Image from "next/image";

// Each icon references part of Kalynn's background: science, IoT, stats, pharma, engineering
const FLOAT_ICONS = [
  {
    x: "6%", top: "72%", duration: 24, delay: 0,
    // atom — science/biochemistry
    path: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" style={{ transform: "rotate(60deg)", transformOrigin: "12px 12px" }} />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" style={{ transform: "rotate(-60deg)", transformOrigin: "12px 12px" }} />
      </svg>
    ),
  },
  {
    x: "22%", top: "82%", duration: 30, delay: 5,
    // wifi/signal — IoT devices
    path: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    x: "38%", top: "65%", duration: 20, delay: 10,
    // bar chart — data science / stats
    path: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <line x1="18" y1="20" x2="18" y2="9" />
        <line x1="12" y1="20" x2="12" y2="3" />
        <line x1="6" y1="20" x2="6" y2="13" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    x: "52%", top: "78%", duration: 27, delay: 3,
    // flask — biochem / pharma research
    path: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6" />
        <path d="M10 3v7L6 19h12l-4-9V3" />
      </svg>
    ),
  },
  {
    x: "16%", top: "55%", duration: 22, delay: 14,
    // code brackets — engineering
    path: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 py-24 relative overflow-hidden"
    >
      {/* Floating minimal icons — science, IoT, stats, pharma, engineering */}
      <div className="absolute inset-0 pointer-events-none" style={{ color: "var(--accent)" }}>
        {FLOAT_ICONS.map((icon, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: icon.x,
              top: icon.top,
              opacity: 0,
              animation: `floatIcon ${icon.duration}s ease-in-out ${icon.delay}s infinite`,
            }}
          >
            {icon.path}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-center">

          {/* Left: text content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>

            {/* Status tag */}
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              <span className="text-xs font-mono tracking-wider" style={{ color: "var(--text-3)" }}>
                Madison, WI · open to opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className="leading-[0.9] tracking-[-0.01em] mb-4"
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontStyle: "italic",
                fontSize: "clamp(3.6rem, 8.5vw, 6rem)",
                color: "var(--text)",
              }}
            >
              Kalynn
              <br />
              <span style={{ color: "var(--accent)" }}>Willis</span>
            </h1>

            {/* Title */}
            <p className="text-xs font-mono tracking-[0.18em] uppercase mb-5" style={{ color: "var(--text-3)" }}>
              Data Engineer &amp; Data Scientist
            </p>

            {/* Bio */}
            <p className="leading-relaxed mb-7 max-w-md text-[1.025rem]" style={{ color: "var(--text-2)" }}>
              Building cutting-edge AI products for IoT devices @ AprilAire
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-md text-sm font-medium text-white transition-colors"
                style={{ background: "var(--accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#6e1425")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
                style={{ border: "1px solid var(--border-strong)", color: "var(--text-2)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.color = "var(--text-2)";
                }}
              >
                Resume ↗
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div
            className="hidden md:flex justify-center items-start animate-fade-in"
            style={{ animationDelay: "0.35s", opacity: 0 }}
          >
            <div className="relative">
              {/* Offset frame */}
              <div
                className="absolute inset-0 translate-x-3.5 translate-y-3.5"
                style={{
                  border: "1.5px solid var(--accent-warm)",
                  opacity: 0.28,
                  borderRadius: "1rem",
                }}
              />
              {/* Photo */}
              <div className="relative overflow-hidden shadow-lg" style={{ width: 340, height: 453, borderRadius: "1rem" }}>
                <Image
                  src="/kalynn.jpg"
                  alt="Kalynn Willis at UW-Madison graduation"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <p className="text-center text-[10px] font-mono tracking-widest uppercase mt-3" style={{ color: "var(--text-3)" }}>
                UW–Madison, 2026
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "var(--text-3)" }}>
        <span className="font-mono text-[10px] tracking-widest uppercase">scroll</span>
        <div className="w-px h-6" style={{ background: "linear-gradient(to bottom, var(--border-strong), transparent)" }} />
      </div>
    </section>
  );
}
