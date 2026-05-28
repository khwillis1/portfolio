const pipeline = [
  { label: "Ingest", tools: ["ETL", "APIs", "IoT"] },
  { label: "Transform", tools: ["Python", "SQL", "Pandas"] },
  { label: "Model", tools: ["XGBoost", "PyTorch", "sklearn"] },
  { label: "Store", tools: ["AWS", "DuckDB", "SQLite"] },
  { label: "Ship", tools: ["FastAPI", "Docker", "Next.js"] },
];

const categories = [
  {
    icon: "{ }",
    title: "Languages",
    skills: ["Python", "R", "TypeScript", "SQL", "Bash"],
  },
  {
    icon: "◈",
    title: "AI & Machine Learning",
    skills: [
      "PyTorch",
      "XGBoost",
      "scikit-learn",
      "OpenAI",
      "Ollama",
      "FastAPI",
      "RAG",
      "Vector Embeddings",
      "LLMs",
    ],
  },
  {
    icon: "☁",
    title: "Data & Cloud",
    skills: [
      "AWS",
      "Docker",
      "DuckDB",
      "SQLite",
      "ETL Pipelines",
      "HTCondor",
      "Git",
      "CI/CD",
    ],
  },
  {
    icon: "⬡",
    title: "Visualization & Web",
    skills: [
      "RShiny",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Cursor",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#080616]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-[#a78bfa] text-sm">02.</span>
          <h2 className="text-3xl font-bold text-[#e2e8f0]">Skills</h2>
          <div className="flex-1 h-px bg-[#1d1a30] ml-3" />
        </div>

        {/* Pipeline visualization */}
        <div className="mb-14">
          <p className="font-mono text-[#475569] text-xs mb-4">
            // end-to-end pipeline
          </p>
          <div className="flex items-stretch overflow-x-auto gap-0 pb-2">
            {pipeline.map((stage, i) => (
              <div key={stage.label} className="flex items-center flex-1 min-w-[100px]">
                <div className="flex-1 bg-[#0e0c1f] border border-[#1d1a30] rounded-lg p-4 text-center hover:border-[#a78bfa]/40 transition-colors">
                  <div className="font-mono text-xs text-[#a78bfa] mb-2 font-semibold tracking-wider">
                    {stage.label}
                  </div>
                  {stage.tools.map((t) => (
                    <div key={t} className="text-xs text-[#475569]">
                      {t}
                    </div>
                  ))}
                </div>
                {i < pipeline.length - 1 && (
                  <div className="px-1 text-[#a78bfa] font-bold shrink-0">
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
              className="bg-[#0e0c1f] border border-[#1d1a30] rounded-xl p-6 hover:border-[#a78bfa]/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[#a78bfa] text-lg w-7">
                  {cat.icon}
                </span>
                <h3 className="font-semibold text-[#e2e8f0]">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 bg-[#0a0914] border border-[#1d1a30] text-[#94a3b8] rounded hover:border-[#a78bfa]/50 hover:text-[#a78bfa] transition-colors cursor-default"
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
