"use client";
import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds, to match prior ScrollReveal call sites
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: delay / 1000,
      }}
    >
      {children}
    </motion.div>
  );
}
