"use client";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    num: "01",
    name: "Merv — AI Health Assistant",
    description:
      "Customer-facing AI assistant at AprilAire delivering personalized healthy-air product recommendations. Combines a conversational LLM interface with an XGBoost model predicting optimal product configurations based on home characteristics.",
    tags: ["Python", "XGBoost", "LLM", "AWS", "FastAPI"],
    github: "https://github.com/kalynnwillis",
  },
  {
    num: "02",
    name: "RAG Research Chatbot",
    description:
      "Natural-language query interface for UW Biochemistry phenotype data. Built with FastAPI, vector embeddings, and local/remote LLMs. Integrated Ensembl, JAX, GTEx, and IMPC APIs for live genetic annotations.",
    tags: ["FastAPI", "Python", "RAG", "Docker", "HTCondor"],
    github: "https://github.com/kalynnwillis",
  },
  {
    num: "03",
    name: "COVID-19 Vaccine Analysis",
    description:
      "Statistical analysis of CDC COVID-19 surveillance data (72% U.S. population coverage) to evaluate Moderna vs. Pfizer death rates. Applied z-tests, confidence intervals, and incidence-rate trend analysis in R and Python.",
    tags: ["R", "Python", "Statistics", "CDC Data", "Pandas"],
    github: "https://github.com/kalynnwillis",
  },
];

function GitHubIcon() {
  return (
    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" width={18} height={18}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-baseline gap-4 mb-10">
            <span
              className="font-mono text-xs tracking-widest"
              style={{ color: "var(--text-3)" }}
            >
              03
            </span>
            <h2
              className="text-3xl"
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontStyle: "italic",
                color: "var(--text)",
              }}
            >
              Projects
            </h2>
            <div className="flex-1 h-px ml-2" style={{ background: "var(--border)" }} />
          </div>
        </ScrollReveal>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {projects.map((project, i) => (
            <ScrollReveal key={project.name} delay={i * 80}>
              <div
                className="py-8 group"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-6 items-start flex-1">
                    {/* Number */}
                    <span
                      className="font-mono text-xs mt-1.5 shrink-0"
                      style={{ color: "var(--text-3)" }}
                    >
                      {project.num}
                    </span>

                    <div className="flex-1">
                      {/* Project name */}
                      <h3
                        className="text-xl mb-2 transition-colors"
                        style={{
                          fontFamily: "var(--font-dm-serif)",
                          color: "var(--text)",
                        }}
                      >
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-sm leading-relaxed mb-4 max-w-2xl"
                        style={{ color: "var(--text-2)" }}
                      >
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs px-2 py-0.5 rounded"
                            style={{
                              background: "var(--bg-tinted)",
                              border: "1px solid var(--border)",
                              color: "var(--text-3)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* GitHub link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 mt-1.5 transition-colors"
                    style={{ color: "var(--text-3)" }}
                    aria-label="GitHub repository"
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-8">
            <a
              href="https://github.com/kalynnwillis"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm transition-colors"
              style={{ color: "var(--text-3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              More on GitHub →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
