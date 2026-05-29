"use client";
import { useState } from "react";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import ProjectDrawer from "./ProjectDrawer";
import { projects } from "./projects-data";

function ReadMore() {
  return (
    <span
      className="mt-4 inline-flex items-center gap-1 font-mono text-xs transition-colors"
      style={{ color: "var(--accent)" }}
    >
      Read more →
    </span>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded px-2 py-0.5 font-mono text-xs"
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
  );
}

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const featured = projects[0];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader number="03" label="SELECTED WORK" title="Selected Work" />
        </Reveal>

        {/* Featured card — Merv */}
        <Reveal>
          <motion.button
            type="button"
            onClick={() => setActive(0)}
            className="block w-full text-left mb-6"
            style={{
              background: "var(--surface)",
              boxShadow: "var(--shadow-lg)",
              borderRadius: "var(--radius)",
            }}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="p-8">
              <span
                className="font-mono text-[11px] tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                FEATURED
              </span>
              <h3
                className="mt-3 mb-3 text-2xl md:text-3xl"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                {featured.name}
              </h3>
              <p className="mb-5 max-w-3xl leading-relaxed" style={{ color: "var(--text-2)" }}>
                {featured.blurb}
              </p>
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <Tags tags={featured.tags} />
                <ReadMore />
              </div>
            </div>
          </motion.button>
        </Reveal>

        {/* Secondary cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <motion.button
                type="button"
                onClick={() => setActive(i + 1)}
                className="flex h-full w-full flex-col text-left"
                style={{
                  background: "var(--surface)",
                  boxShadow: "var(--shadow-md)",
                  borderRadius: "var(--radius)",
                }}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                }}
              >
                <div className="flex h-full flex-col p-6">
                  <span className="mb-3 block font-mono text-xs" style={{ color: "var(--text-3)" }}>
                    {project.num}
                  </span>
                  <h3
                    className="mb-2 text-xl"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                  >
                    {project.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                    {project.blurb}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-4 flex-wrap">
                    <Tags tags={project.tags} />
                    <ReadMore />
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDrawer
        project={active === null ? null : projects[active]}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
