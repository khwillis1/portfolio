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
    <section id="about" className="relative py-14 md:py-20 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
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
                Statistics &amp; Data Science graduate from{" "}
                <span style={{ color: "var(--text)" }} className="font-medium">UW–Madison</span>{" "}
                with a background that started in molecular biology and genetics before pulling me
                into data science and engineering.
              </p>
              <p>
                At UW&apos;s Biochemistry department, I built RAG-based research chatbots and tools
                for querying large genetic datasets. At Arrowhead Pharmaceuticals, I worked on
                machine learning workflows for drug discovery. Now at AprilAire, I&apos;m building
                Merv — an AI assistant for personalized healthy-air recommendations — along with
                MCP servers, ETL pipelines, and IoT infrastructure that connect device data, cloud
                systems, and conversational AI.
              </p>
              <p>
                I like building systems that sit between raw data and actual decision-making:
                retrieval systems, internal tools, APIs, data pipelines, and AI interfaces that
                people can interact with directly. Most of my work ends up somewhere between
                software engineering, data engineering, and applied machine learning.
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
