const pipeline = [
  { label: "Ingest", tools: ["Kafka", "Fivetran", "dlt"] },
  { label: "Transform", tools: ["dbt", "Spark", "Pandas"] },
  { label: "Orchestrate", tools: ["Airflow", "Prefect"] },
  { label: "Store", tools: ["Snowflake", "BigQuery", "S3"] },
  { label: "Analyze", tools: ["SQL", "Python", "Looker"] },
];

const categories = [
  {
    icon: "{ }",
    title: "Languages",
    skills: ["Python", "SQL", "Scala", "Bash", "R", "YAML"],
  },
  {
    icon: "⚙",
    title: "Data Engineering",
    skills: [
      "Apache Spark",
      "Apache Airflow",
      "Apache Kafka",
      "dbt",
      "Pandas",
      "Great Expectations",
      "Prefect",
      "dlt",
    ],
  },
  {
    icon: "☁",
    title: "Cloud & Storage",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Snowflake",
      "BigQuery",
      "Redshift",
      "S3",
      "Delta Lake",
      "PostgreSQL",
    ],
  },
  {
    icon: "◈",
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "Git",
      "GitHub Actions",
      "Linux",
      "CI/CD",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#080c18]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-[#22d3ee] text-sm">02.</span>
          <h2 className="text-3xl font-bold text-[#e2e8f0]">Skills</h2>
          <div className="flex-1 h-px bg-[#1e293b] ml-3" />
        </div>

        {/* Pipeline visualization */}
        <div className="mb-14">
          <p className="font-mono text-[#475569] text-xs mb-4">
            // data pipeline
          </p>
          <div className="flex items-stretch overflow-x-auto gap-0 pb-2">
            {pipeline.map((stage, i) => (
              <div key={stage.label} className="flex items-center flex-1 min-w-[100px]">
                <div className="flex-1 bg-[#0f1729] border border-[#1e293b] rounded-lg p-4 text-center hover:border-[#22d3ee]/40 transition-colors">
                  <div className="font-mono text-xs text-[#22d3ee] mb-2 font-semibold tracking-wider">
                    {stage.label}
                  </div>
                  {stage.tools.map((t) => (
                    <div key={t} className="text-xs text-[#475569]">
                      {t}
                    </div>
                  ))}
                </div>
                {i < pipeline.length - 1 && (
                  <div className="px-1 text-[#22d3ee] font-bold shrink-0">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#0f1729] border border-[#1e293b] rounded-xl p-6 hover:border-[#22d3ee]/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[#22d3ee] text-lg w-7">
                  {cat.icon}
                </span>
                <h3 className="font-semibold text-[#e2e8f0]">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 bg-[#0a0e1a] border border-[#1e293b] text-[#94a3b8] rounded hover:border-[#22d3ee]/50 hover:text-[#22d3ee] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
