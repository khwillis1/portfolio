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
      "Building Merv — a customer-facing AI assistant that combines a conversational LLM with an XGBoost model to recommend the right air quality products for your home. Currently being integrated into the AprilAire website and mobile app.",
      "Designed an MCP server that connects directly to thermostats and air-quality devices, making real-time adjustments based on weather forecasts and live sensor data — no manual override needed.",
      "Built a \"heartbeat\" monitoring system that watches overnight data jobs and immediately surfaces failures to the engineering team, cutting time to catch a broken pipeline from hours to minutes.",
      "Wrote ETL pipelines in AWS to pull in high-volume IoT telemetry from devices in the field and route it into the data warehouse for analytics and ML use.",
    ],
    tags: ["Python", "AWS", "XGBoost", "LLM", "ETL", "MCP", "IoT"],
  },
  {
    title: "Data Science Intern",
    company: "Arrowhead Pharmaceuticals",
    icon: <MoleculeIcon />,
    period: "May 2025 – Aug 2025",
    bullets: [
      "Worked with the AI/ML team on gradient boosting models for predicting molecular and genetic properties — making drug discovery a little less like searching for a needle in a haystack.",
      "Built an automated ETL pipeline with CI/CD that loaded large experiment datasets into a central research database, cutting manual data prep time in half and making results reproducible.",
      "Preprocessed and feature-engineered high-dimensional biological datasets in Python.",
    ],
    tags: ["Python", "Pandas", "scikit-learn", "ETL", "CI/CD", "Bioinformatics"],
  },
  {
    title: "Data Science Undergraduate Researcher",
    company: "UW-Madison Department of Biochemistry",
    icon: <DNAIcon />,
    period: "Oct 2024 – Dec 2025",
    bullets: [
      "Led the build of a RAG-style chatbot that lets biology researchers ask questions about phenotype data in plain English — no SQL required. Backed by FastAPI, vector embeddings, and both local and remote LLMs.",
      "Connected the system to live genetic databases (Ensembl, JAX, GTEx, IMPC) so annotations stayed current across species without manual maintenance.",
      "Built interactive dashboards in RShiny and Next.js for exploring QTL peaks and gene annotations.",
      "Designed pipelines using DuckDB and SQLite to query billions of genetic records efficiently, containerized with Docker and HTCondor for reproducible distributed runs.",
    ],
    tags: ["Python", "FastAPI", "RAG", "RShiny", "Next.js", "DuckDB", "Docker", "HTCondor"],
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
