import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

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
        <Reveal>
          <SectionHeader number="01" label="ABOUT" title="About" />
        </Reveal>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Bio */}
          <Reveal className="md:col-span-3">
            <div className="space-y-4 leading-relaxed text-[1.025rem]" style={{ color: "var(--text-2)" }}>
              <p>
                I&apos;m{" "}
                <span style={{ color: "var(--text)" }} className="font-medium">Kalynn Willis</span>, a
                Statistics &amp; Data Science grad from{" "}
                <span style={{ color: "var(--text)" }} className="font-medium">UW-Madison</span>{" "}
                who took the long way in. I started in{" "}
                <span style={{ color: "var(--text)" }} className="font-medium">molecular biology and genetics</span>
                {" "}— building RAG chatbots for UW&apos;s Biochemistry department and ML models
                for drug discovery at Arrowhead Pharmaceuticals. It&apos;s an unconventional path
                into data science, but it shaped how I work: I&apos;d take messy, real-world data
                over a clean textbook dataset any day.
              </p>
              <p>
                Now I&apos;m a{" "}
                <span style={{ color: "var(--text)" }} className="font-medium">Data Engineer Co-op at AprilAire</span>,
                {" "}building Merv — an AI assistant that helps people pick the right air-quality
                products for their home — along with the MCP servers and ETL pipelines that turn
                our IoT device data into real-time decisions.
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
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        color: "var(--text-2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <SocialLinks withLabels />
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal className="md:col-span-2" delay={100}>
            <div
              className="p-6"
              style={{
                background: "var(--surface)",
                boxShadow: "var(--shadow-md)",
                borderRadius: "var(--radius)",
              }}
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-2xl leading-none"
                      style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
