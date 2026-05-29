"use client";
import { useState } from "react";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

// Small inline icons to signal science vs IoT context
function IoTIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)", opacity: 0.7 }} aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}
function MoleculeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)", opacity: 0.7 }} aria-hidden="true">
      <circle cx="12" cy="12" r="2" /><circle cx="4" cy="6" r="2" /><circle cx="20" cy="6" r="2" />
      <circle cx="4" cy="18" r="2" /><circle cx="20" cy="18" r="2" />
      <line x1="6" y1="7" x2="10" y2="11" /><line x1="18" y1="7" x2="14" y2="11" />
      <line x1="6" y1="17" x2="10" y2="13" /><line x1="18" y1="17" x2="14" y2="13" />
    </svg>
  );
}
function DNAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)", opacity: 0.7 }} aria-hidden="true">
      <path d="M2 15c6.667-6 13.333 0 20-6" /><path d="M2 9c6.667 6 13.333 0 20 6" />
      <path d="M7 11.5c2.667-1 5.333-1 8 0" /><path d="M7 12.5c2.667 1 5.333 1 8 0" />
    </svg>
  );
}

const experiences = [
  {
    title: "Data Engineer Co-op",
    company: "AprilAire",
    icon: <IoTIcon />,
    period: "Jan 2026 – Present",
    bullets: [
      "Conceived and built Merv, an AI healthy-air assistant that recommends personalized HVAC and air-quality products through conversational interactions — currently in development, to be rolled out across AprilAire's web and mobile platforms.",
      "Built MCP servers that connect LLM agents to thermostats, indoor air systems, and cloud APIs, enabling conversational device control and predictive automation based on weather forecasts and live sensor data.",
      "Developed AWS ETL pipelines and monitoring infrastructure for ingesting IoT telemetry, surfacing pipeline failures quickly, and supporting downstream analytics and ML workflows.",
    ],
    tags: ["Python", "AWS", "XGBoost", "MCP", "FastAPI", "IoT"],
  },
  {
    title: "Data Science Undergraduate Researcher",
    company: "UW–Madison Department of Biochemistry",
    icon: <DNAIcon />,
    period: "Oct 2024 – Dec 2025",
    bullets: [
      "Proposed and built a RAG-based research chatbot that lets biologists query QTL and phenotype datasets in natural language instead of writing SQL or custom scripts.",
      "Integrated live genomic resources including Ensembl, GTEx, IMPC, and JAX while building interactive dashboards for QTL exploration and gene annotation analysis.",
      "Engineered distributed genomics workflows using DuckDB, Docker, HTCondor, and vector retrieval pipelines to support large-scale biological data analysis.",
    ],
    tags: ["Python", "FastAPI", "RAG", "DuckDB", "Docker", "HTCondor", "RShiny"],
  },
  {
    title: "Data Science Intern",
    company: "Arrowhead Pharmaceuticals",
    icon: <MoleculeIcon />,
    period: "May 2025 – Aug 2025",
    bullets: [
      "Worked with the AI/ML team to build gradient-boosting models that predicted molecular and genetic properties for drug-discovery prioritization.",
      "Automated ETL and CI/CD workflows for large experimental datasets, improving reproducibility and reducing manual preprocessing across research pipelines.",
      "Built tooling for managing and validating biological data used in downstream modeling and analysis.",
    ],
    tags: ["Python", "scikit-learn", "Pandas", "ETL", "CI/CD", "Bioinformatics"],
  },
];

function ExperienceCard({ exp }: { exp: typeof experiences[number] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="rounded-xl p-6"
      style={{
        background: "var(--surface)",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        boxShadow: hovered ? "var(--shadow-lg)" : "var(--shadow-md)",
        transition: "box-shadow 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3
            className="font-medium text-lg leading-tight"
            style={{ color: "var(--text)" }}
          >
            {exp.title}
          </h3>
          <p className="flex items-center gap-1.5 text-sm mt-0.5 font-mono" style={{ color: "var(--accent)" }}>
            {exp.icon}
            {exp.company}
          </p>
        </div>
        <span
          className="font-mono text-xs px-3 py-1 rounded whitespace-nowrap"
          style={{
            background: "var(--bg-tinted)",
            border: "1px solid var(--border)",
            color: "var(--text-3)",
          }}
        >
          {exp.period}
        </span>
      </div>

      <ul className="space-y-2 mb-5">
        {exp.bullets.map((b, j) => (
          <li
            key={j}
            className="flex gap-3 text-sm"
            style={{ color: "var(--text-2)" }}
          >
            <span
              className="mt-0.5 shrink-0"
              style={{ color: "var(--accent)" }}
            >
              –
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-1 rounded"
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
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6"
      style={{ background: "var(--bg-tinted)" }}
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader number="02" label="EXPERIENCE" title="Experience" />
        </Reveal>

        <div className="relative pl-6">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-px"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[25px] top-5 w-2 h-2 rounded-full"
                    style={{
                      background: "var(--accent)",
                      border: "2px solid var(--bg-tinted)",
                    }}
                  />
                  <ExperienceCard exp={exp} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
