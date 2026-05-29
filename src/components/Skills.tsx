"use client";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const categories = [
  {
    title: "Languages",
    skills: ["Python", "R", "TypeScript", "SQL", "Bash"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "XGBoost", "scikit-learn", "OpenAI", "Ollama", "FastAPI", "RAG", "Vector Embeddings", "LLMs"],
  },
  {
    title: "Data & Cloud",
    skills: ["AWS", "Docker", "DuckDB", "SQLite", "ETL Pipelines", "HTCondor", "Git", "CI/CD"],
  },
  {
    title: "Visualization & Web",
    skills: ["RShiny", "Next.js", "TailwindCSS", "TypeScript", "Cursor"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-14 md:py-20 px-6"
      style={{ background: "var(--bg-tinted)" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader number="04" label="SKILLS" title="Skills" />
        </Reveal>

        <div style={{ borderTop: "1px solid var(--border-strong)" }}>
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 60}>
              <div
                className="py-7 grid md:grid-cols-[180px_1fr] gap-x-10 gap-y-4 items-start"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {/* Category label */}
                <h3
                  className="text-sm font-semibold pt-0.5"
                  style={{ color: "var(--text)" }}
                >
                  {cat.title}
                </h3>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded transition-colors cursor-default"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border-strong)",
                        color: "var(--text-2)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-strong)";
                        e.currentTarget.style.color = "var(--text-2)";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
