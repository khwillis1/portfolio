"use client";
import { useEffect, useState } from "react";

const LINES = [
  { cmd: "whoami", out: "kalynn_willis" },
  { cmd: "cat major.txt", out: "Statistics & Data Science @ UW-Madison" },
  { cmd: "echo $STACK", out: "Python · SQL · AWS · PyTorch · FastAPI" },
];

export default function Hero() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    LINES.forEach((_, i) => {
      setTimeout(() => setShown(i + 1), i * 900 + 400);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#a78bfa]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: heading */}
          <div className="animate-fade-up">
            <p className="font-mono text-[#a78bfa] text-sm mb-5 tracking-widest uppercase">
              $ hello, world
            </p>
            <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tight mb-4">
              <span className="text-[#e2e8f0]">Kalynn</span>
              <br />
              <span className="text-[#a78bfa]">Willis</span>
            </h1>
            <p className="font-mono text-[#f472b6] text-lg mb-3">
              Data Engineer & Data Scientist
            </p>
            <p className="text-[#64748b] leading-relaxed mb-8 max-w-sm">
              Building AI systems, data pipelines, and ML models — turning
              complex data into tools people actually use.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-[#a78bfa] text-[#0a0914] rounded font-semibold text-sm hover:bg-[#a78bfa]/90 transition-colors"
              >
                View Projects →
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 border border-[#1d1a30] text-[#94a3b8] rounded font-semibold text-sm hover:border-[#a78bfa] hover:text-[#a78bfa] transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: terminal */}
          <div className="font-mono text-sm">
            <div className="bg-[#0e0c1f] border border-[#1d1a30] rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1d1a30]/50 border-b border-[#1d1a30]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-3 text-[#475569] text-xs">
                  ~/portfolio — zsh
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-6 space-y-3 min-h-[200px]">
                {LINES.slice(0, shown).map((line, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex gap-2">
                      <span className="text-[#f472b6]">❯</span>
                      <span className="text-[#e2e8f0]">{line.cmd}</span>
                    </div>
                    <div className="pl-5 text-[#a78bfa]">{line.out}</div>
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <span className="text-[#f472b6]">❯</span>
                  <span className="inline-block w-2 h-4 bg-[#a78bfa] animate-blink" />
                </div>
              </div>
            </div>

            {/* Decorative comment */}
            <p className="text-center text-[#1d1a30] text-xs font-mono mt-3">
              // data engineer · ml builder · stats nerd
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569]">
        <span className="font-mono text-xs">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#475569] to-transparent" />
      </div>
    </section>
  );
}
