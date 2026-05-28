const stats = [
  { value: "3.92", label: "GPA" },
  { value: "5×", label: "Dean's List" },
  { value: "3+", label: "Industry Roles" },
  { value: "B.S.", label: "Stats & Data Science" },
];

const currentStack = [
  "Python",
  "AWS",
  "SQL",
  "FastAPI",
  "PyTorch",
  "Docker",
  "TypeScript",
  "Next.js",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-[#a78bfa] text-sm">01.</span>
          <h2 className="text-3xl font-bold text-[#e2e8f0]">About</h2>
          <div className="flex-1 h-px bg-[#1d1a30] ml-3" />
        </div>

        <div className="grid md:grid-cols-5 gap-14">
          {/* Bio */}
          <div className="md:col-span-3 space-y-5 text-[#94a3b8] leading-relaxed">
            <p>
              Hi! I&apos;m{" "}
              <span className="text-[#e2e8f0] font-medium">Kalynn Willis</span>,
              a Statistics & Data Science graduate of{" "}
              <span className="text-[#e2e8f0] font-medium">UW-Madison</span>{" "}
              with a 3.92 GPA and five Dean&apos;s List semesters. I build
              things at the intersection of data engineering, machine learning,
              and AI.
            </p>
            <p>
              Currently a{" "}
              <span className="text-[#e2e8f0] font-medium">
                Data Engineer Co-op at AprilAire
              </span>
              , I&apos;ve shipped a customer-facing AI assistant powered by
              XGBoost, designed MCP servers for IoT automation, engineered ETL
              pipelines for high-volume device telemetry, and built RAG-style
              research chatbots for UW&apos;s Biochemistry department.
            </p>
            <p>
              I love turning messy, high-dimensional data into clean, reliable
              systems — whether that&apos;s a streaming pipeline, an ML model,
              or a tool that makes a research team&apos;s life easier.
            </p>

            <div className="pt-2">
              <p className="font-mono text-[#a78bfa] text-xs mb-3 tracking-wider">
                # currently working with:
              </p>
              <div className="flex flex-wrap gap-2">
                {currentStack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 bg-[#0e0c1f] border border-[#1d1a30] text-[#94a3b8] rounded hover:border-[#a78bfa]/40 hover:text-[#a78bfa] transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4 content-start">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#0e0c1f] border border-[#1d1a30] rounded-xl p-6 text-center hover:border-[#a78bfa]/40 transition-colors group"
              >
                <div className="text-3xl font-bold text-[#a78bfa] font-mono mb-1 group-hover:text-[#f472b6] transition-colors">
                  {s.value}
                </div>
                <div className="text-xs text-[#475569] uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
