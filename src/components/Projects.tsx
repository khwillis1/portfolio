const projects = [
  {
    name: "Merv — AI Health Assistant",
    description:
      "Customer-facing AI assistant at AprilAire delivering personalized healthy-air product recommendations. Combines a conversational LLM interface with an XGBoost model predicting optimal product configurations based on home characteristics.",
    tags: ["Python", "XGBoost", "LLM", "AWS", "FastAPI"],
    github: "https://github.com/kalynnwillis",
    live: null,
  },
  {
    name: "RAG Research Chatbot",
    description:
      "Natural-language query interface for UW Biochemistry phenotype data. Built with FastAPI, vector embeddings, and local/remote LLMs. Integrated Ensembl, JAX, GTEx, and IMPC APIs for live genetic annotations.",
    tags: ["FastAPI", "Python", "RAG", "Docker", "HTCondor"],
    github: "https://github.com/kalynnwillis",
    live: null,
  },
  {
    name: "COVID-19 Vaccine Analysis",
    description:
      "Statistical analysis of CDC COVID-19 surveillance data (72% U.S. population coverage) to evaluate Moderna vs. Pfizer death rates. Applied z-tests, confidence intervals, and incidence-rate trend analysis in R and Python.",
    tags: ["R", "Python", "Statistics", "CDC Data", "Pandas"],
    github: "https://github.com/kalynnwillis",
    live: null,
  },
];

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-14">
          <span className="font-mono text-[#a78bfa] text-sm">03.</span>
          <h2 className="text-3xl font-bold text-[#e2e8f0]">Projects</h2>
          <div className="flex-1 h-px bg-[#1d1a30] ml-3" />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-[#0e0c1f] border border-[#1d1a30] rounded-xl p-6 flex flex-col hover:border-[#a78bfa]/40 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[#a78bfa] text-2xl">⬡</span>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#475569] hover:text-[#a78bfa] transition-colors"
                    aria-label="GitHub repository"
                  >
                    <GitHubIcon />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#475569] hover:text-[#a78bfa] transition-colors"
                      aria-label="Live site"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-semibold text-[#e2e8f0] mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-[#a78bfa]/70 px-2 py-0.5 bg-[#a78bfa]/5 border border-[#a78bfa]/10 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/kalynnwillis"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#a78bfa] hover:text-[#f472b6] transition-colors"
          >
            view more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
