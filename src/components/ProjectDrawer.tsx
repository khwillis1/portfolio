"use client";
import { useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import type { Project } from "./projects-data";

export default function ProjectDrawer({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const open = project !== null;

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[60]"
            style={{ background: "rgba(36,27,30,0.38)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.aside
            className="fixed right-0 top-0 z-[61] h-full w-full max-w-lg overflow-y-auto px-7 py-8 sm:px-9"
            style={{ background: "var(--bg)", boxShadow: "var(--shadow-lg)" }}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} details`}
            initial={reduce ? { opacity: 0 } : { x: "100%" }}
            animate={reduce ? { opacity: 1 } : { x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 transition-colors"
              style={{ color: "var(--text-3)" }}
              aria-label="Close"
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span
              className="font-mono text-[11px] tracking-[0.25em]"
              style={{ color: "var(--accent)" }}
            >
              {project.num}
            </span>
            <h3
              className="mt-2 mb-4 text-3xl leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              {project.name}
            </h3>

            {project.role && (
              <p
                className="mb-6 inline-block rounded px-3 py-1 font-mono text-xs"
                style={{
                  background: "var(--bg-tinted)",
                  border: "1px solid var(--border)",
                  color: "var(--text-2)",
                }}
              >
                {project.role}
              </p>
            )}

            <div className="space-y-6">
              {project.sections.map((s) => (
                <div key={s.heading}>
                  <p
                    className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{ color: "var(--text-3)" }}
                  >
                    {s.heading}
                  </p>
                  <p className="leading-relaxed" style={{ color: "var(--text-2)" }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded px-2 py-0.5 font-mono text-xs"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-3)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
