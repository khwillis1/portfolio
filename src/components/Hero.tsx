"use client";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 py-24 relative overflow-hidden"
    >
      {/* Barely-there warm radial background detail */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(139,26,46,0.04), transparent 70%)",
        }}
      />

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
                fontFamily: "var(--font-display)",
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
              I build AI products and the data pipelines behind AprilAire&apos;s connected
              air-quality devices — with a background in biology and genetics research.
            </p>

            {/* CTA buttons + social */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-md text-sm font-medium text-white transition-colors"
                style={{ background: "var(--accent)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-deep)")}
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
              <SocialLinks className="ml-1" />
            </div>
          </div>

          {/* Right: photo */}
          <div
            className="hidden md:flex justify-center items-start animate-fade-in"
            style={{ animationDelay: "0.35s", opacity: 0 }}
          >
            <div className="relative">
              {/* Subtle offset accent frame */}
              <div
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 pointer-events-none"
                style={{
                  border: "1px solid var(--accent)",
                  opacity: 0.18,
                  borderRadius: "var(--radius)",
                }}
              />
              {/* Photo with soft depth shadow */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: 340,
                  height: 453,
                  borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
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
