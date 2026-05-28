import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "3.92", label: "GPA" },
  { value: "5×", label: "Dean's List" },
  { value: "3+", label: "Industry roles" },
  { value: "B.S.", label: "Stats & Data Science" },
];

const currentStack = [
  "Python", "AWS", "SQL", "FastAPI", "PyTorch", "Docker", "TypeScript", "Next.js", "Javascript"
];


export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-baseline gap-4 mb-10">
            <span className="font-mono text-xs tracking-widest" style={{ color: "var(--text-3)" }}>01</span>
            <h2
              className="text-3xl"
              style={{ fontFamily: "var(--font-dm-serif)", fontStyle: "italic", color: "var(--text)" }}
            >
              About
            </h2>
            <div className="flex-1 h-px ml-2" style={{ background: "var(--border)" }} />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Bio */}
          <ScrollReveal className="md:col-span-3">
            <div className="space-y-4 leading-relaxed text-[1.025rem]" style={{ color: "var(--text-2)" }}>
              <p>
                Hi, I&apos;m{" "}
                <span style={{ color: "var(--text)" }} className="font-medium">Kalynn Willis</span>
                {" "}— a Statistics &amp; Data Science graduate of{" "}
                <span style={{ color: "var(--text)" }} className="font-medium">UW-Madison</span>.
                {" "}My background spans{" "}
                <span style={{ color: "var(--text)" }} className="font-medium">molecular biology and genetics research</span>
                {" "}— from building RAG chatbots for UW&apos;s Biochemistry department to working
                on ML models for drug discovery at Arrowhead Pharmaceuticals.
                That scientific foundation shapes how I think about data.
              </p>
              <p>
                Currently a{" "}
                <span style={{ color: "var(--text)" }} className="font-medium">Data Engineer Co-op at AprilAire</span>,
                {" "}I&apos;m shipping Merv — an AI assistant that recommends air-quality products —
                and building the MCP servers and ETL pipelines that connect our IoT devices to
                real-time decisions.
              </p>

              <div className="pt-2">
                <p className="font-mono text-[10px] tracking-widest uppercase mb-3" style={{ color: "var(--text-3)" }}>
                  Currently working with
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentStack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded"
                      style={{
                        background: "var(--bg-tinted)",
                        border: "1px solid var(--border)",
                        color: "var(--text-2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal className="md:col-span-2" delay={100}>
            <div
              className="grid grid-cols-2 gap-x-6 gap-y-5 border-l pl-6"
              style={{ borderColor: "var(--border)" }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl leading-none"
                    style={{ fontFamily: "var(--font-dm-serif)", color: "var(--accent)" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-[10px] font-mono tracking-wider uppercase mt-1.5"
                    style={{ color: "var(--text-3)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
