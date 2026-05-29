"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll wrapper.
 *
 * Designed to fail safe: content is rendered visible during SSR and before
 * hydration, so it can never get stuck invisible if JS is slow or fails. Once
 * mounted, it hides and animates in as the element enters the viewport. Uses a
 * 0-threshold IntersectionObserver (fires as soon as any part is visible, so
 * tall elements on small screens still trigger) plus a fallback timer.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number; // milliseconds, to match prior ScrollReveal call sites
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let fallback: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);

    // Safety net: reveal even if the observer never fires for any reason.
    fallback = setTimeout(() => setVisible(true), 1500 + delay);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  // Hidden only after mount and before it has been revealed.
  const hidden = mounted && !visible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(18px)" : "none",
        transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
      }}
    >
      {children}
    </div>
  );
}
