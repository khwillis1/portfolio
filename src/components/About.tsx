const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Pipelines Built" },
  { value: "15+", label: "Technologies" },
  { value: "∞", label: "Rows Processed" },
];

const currentStack = [
  "Python",
  "dbt",
  "Apache Spark",
  "Airflow",
  "Snowflake",
  "AWS",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-[#22d3ee] text-sm">01.</span>
          <h2 className="text-3xl font-bold text-[#e2e8f0]">About</h2>
          <div className="flex-1 h-px bg-[#1e293b] ml-3" />
        </div>

        <div className="grid md:grid-cols-5 gap-14">
          {/* Bio */}
          <div className="md:col-span-3 space-y-5 text-[#94a3b8] leading-relaxed">
            <p>
              Hi! I&apos;m{" "}
              <span className="text-[#e2e8f0] font-medium">Kalynn Willis</span>,
              a data engineer passionate about building elegant solutions for
              complex data challenges. I specialize in designing scalable data
              pipelines, architecting data warehouses, and making data reliable
              and accessible across teams.
            </p>
            <p>
              I thrive at the intersection of software engineering and data —
              whether that&apos;s optimizing a slow SQL query, orchestrating a
              multi-step ETL workflow, or designing a streaming pipeline that
              processes millions of events per minute.
            </p>
            <p>
              When I&apos;m not wrangling data, you&apos;ll find me exploring
              new tooling in the data ecosystem, contributing to open source,
              or thinking about how to make data teams more effective.
            </p>

            <div className="pt-2">
              <p className="font-mono text-[#22d3ee] text-xs mb-3 tracking-wider">
                # currently working with:
              </p>
              <div className="flex flex-wrap gap-2">
                {currentStack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 bg-[#0f1729] border border-[#1e293b] text-[#94a3b8] rounded hover:border-[#22d3ee]/40 hover:text-[#22d3ee] transition-colors"
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
                className="bg-[#0f1729] border border-[#1e293b] rounded-xl p-6 text-center hover:border-[#22d3ee]/40 transition-colors group"
              >
                <div className="text-3xl font-bold text-[#22d3ee] font-mono mb-1 group-hover:text-[#4ade80] transition-colors">
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
