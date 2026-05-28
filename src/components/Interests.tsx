import ScrollReveal from "./ScrollReveal";

const interests = [
  {
    label: "Golf",
    description: "Out on the course whenever the Wisconsin weather cooperates.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M12 3v13m0-13l5 3-5 3" />
      </svg>
    ),
  },
  {
    label: "Reading",
    description: "A mix of sci-fi, data/tech books, and whatever's on the bestseller list.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    label: "Traveling",
    description: "Exploring new places, preferably with good food and better views.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Running",
    description: "Best way to clear my head after a long debugging session.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Interests() {
  return (
    <section className="py-20 px-6 border-t border-[#1d1a30]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[#a78bfa] text-sm">05.</span>
            <h2 className="text-3xl font-bold text-[#e2e8f0]">Beyond the Code</h2>
            <div className="flex-1 h-px bg-[#1d1a30] ml-3" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 100}>
              <div className="bg-[#0e0c1f] border border-[#1d1a30] rounded-xl p-5 hover:border-[#a78bfa]/40 transition-colors group">
                <div className="text-[#a78bfa] mb-3 group-hover:text-[#f472b6] transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#e2e8f0] mb-1">{item.label}</h3>
                <p className="text-xs text-[#64748b] leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
