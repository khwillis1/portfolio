const experiences = [
  {
    title: "Data Engineer Co-op",
    company: "AprilAire",
    period: "Jan 2026 – Present",
    bullets: [
      "I'm building Merv — a customer-facing AI assistant that combines a conversational LLM with an XGBoost model to recommend the right air quality products for your home. It's currently being integrated into the AprilAire website and mobile app.",
      "Designed an MCP server that connects directly to thermostats and air-quality devices, making real-time adjustments based on weather forecasts and live sensor data — no manual override needed.",
      "Built a \"heartbeat\" monitoring system that watches overnight data jobs and immediately surfaces failures to the engineering team, cutting the time it takes to catch a broken pipeline from hours to minutes.",
      "Wrote ETL pipelines in AWS to pull in high-volume IoT telemetry from devices in the field and route it into our data warehouse for analytics and ML use.",
    ],
    tags: ["Python", "AWS", "XGBoost", "LLM", "ETL", "MCP", "IoT"],
  },
  {
    title: "Data Science Intern",
    company: "Arrowhead Pharmaceuticals",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Worked with the AI/ML team on gradient boosting models for predicting molecular and genetic properties — trying to make drug discovery a little less like searching for a needle in a haystack.",
      "Built an automated ETL pipeline with CI/CD that loaded large experiment datasets into a central research database, cutting manual data prep time in half and making results reproducible.",
      "Preprocessed and feature-engineered high-dimensional biological datasets in Python — lots of Pandas, lots of patience, and some genuinely interesting data.",
    ],
    tags: ["Python", "Pandas", "scikit-learn", "ETL", "CI/CD", "Bioinformatics"],
  },
  {
    title: "Data Science Undergraduate Researcher",
    company: "UW-Madison Department of Biochemistry",
    period: "Oct 2024 – Dec 2025",
    bullets: [
      "Led the build of a RAG-style chatbot that lets biology researchers ask questions about phenotype data in plain English — no SQL required. Backed by FastAPI, vector embeddings, and both local and remote LLMs.",
      "Connected the system to live genetic databases (Ensembl, JAX, GTEx, IMPC) so annotations stayed current across species without anyone having to maintain them manually.",
      "Built interactive dashboards in RShiny and Next.js for exploring QTL peaks and gene annotations — turned dense genetic data into something a biologist could actually click around in.",
      "Designed pipelines using DuckDB and SQLite to query billions of genetic records efficiently, and containerized the whole thing with Docker and HTCondor for reproducible distributed runs.",
    ],
    tags: ["Python", "FastAPI", "RAG", "RShiny", "Next.js", "DuckDB", "Docker", "HTCondor"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#080616]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-[#a78bfa] text-sm">04.</span>
          <h2 className="text-3xl font-bold text-[#e2e8f0]">Experience</h2>
          <div className="flex-1 h-px bg-[#1d1a30] ml-3" />
        </div>

        <div className="relative pl-6">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#1d1a30]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[25px] top-5 w-2.5 h-2.5 rounded-full bg-[#a78bfa] border-2 border-[#0a0914]" />

                <div className="bg-[#0e0c1f] border border-[#1d1a30] rounded-xl p-6 hover:border-[#a78bfa]/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-semibold text-[#e2e8f0] text-lg leading-tight">
                        {exp.title}
                      </h3>
                      <p className="font-mono text-[#a78bfa] text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#475569] bg-[#0a0914] px-3 py-1 rounded border border-[#1d1a30] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[#94a3b8]">
                        <span className="text-[#a78bfa] mt-0.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 bg-[#0a0914] border border-[#1d1a30] text-[#64748b] rounded"
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
