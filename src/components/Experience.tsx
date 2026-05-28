const experiences = [
  {
    title: "Data Engineer",
    company: "Company Name",
    period: "2022 – Present",
    bullets: [
      "Designed and maintained ETL pipelines processing 100M+ records daily using Apache Spark and Airflow",
      "Built a real-time streaming system with Kafka reducing data latency from hours to seconds",
      "Implemented dbt models and data quality tests, improving data reliability by 40%",
      "Migrated on-prem data warehouse to Snowflake on AWS, reducing infrastructure costs by 30%",
    ],
    tags: ["Python", "Spark", "Airflow", "dbt", "Snowflake", "AWS"],
  },
  {
    title: "Junior Data Engineer",
    company: "Previous Company",
    period: "2020 – 2022",
    bullets: [
      "Developed automated data ingestion pipelines from 20+ third-party APIs",
      "Maintained and optimized SQL data warehouse with complex dimensional models",
      "Built Python scripts for data cleaning and validation, reducing manual QA time by 60%",
    ],
    tags: ["Python", "SQL", "PostgreSQL", "Pandas", "GCP"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#080c18]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-[#22d3ee] text-sm">04.</span>
          <h2 className="text-3xl font-bold text-[#e2e8f0]">Experience</h2>
          <div className="flex-1 h-px bg-[#1e293b] ml-3" />
        </div>

        <div className="relative pl-6">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#1e293b]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[25px] top-5 w-2.5 h-2.5 rounded-full bg-[#22d3ee] border-2 border-[#0a0e1a]" />

                <div className="bg-[#0f1729] border border-[#1e293b] rounded-xl p-6 hover:border-[#22d3ee]/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-semibold text-[#e2e8f0] text-lg leading-tight">
                        {exp.title}
                      </h3>
                      <p className="font-mono text-[#22d3ee] text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#475569] bg-[#0a0e1a] px-3 py-1 rounded border border-[#1e293b] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[#94a3b8]">
                        <span className="text-[#22d3ee] mt-0.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 bg-[#0a0e1a] border border-[#1e293b] text-[#64748b] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
