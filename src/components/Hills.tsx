/**
 * Animated rolling hills, pinned to the bottom of a section. Two seamless
 * tiles scroll horizontally for a continuous "rolling" effect. Decorative,
 * very low opacity, behind content. Respects prefers-reduced-motion (global).
 */
export default function Hills({ height = "160px" }: { height?: string }) {
  return (
    <div
      aria-hidden="true"
      className="hills pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden"
      style={{ height }}
    >
      <div className="hills-track flex h-full w-[200%]">
        {[0, 1].map((i) => (
          <svg
            key={i}
            className="h-full w-1/2 shrink-0"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            {/* back layer */}
            <path
              d="M0,150 C240,90 480,210 720,150 C960,90 1200,210 1440,150 L1440,320 L0,320 Z"
              style={{ fill: "var(--accent)", opacity: 0.05 }}
            />
            {/* front layer */}
            <path
              d="M0,200 C240,150 480,250 720,200 C960,150 1200,250 1440,200 L1440,320 L0,320 Z"
              style={{ fill: "var(--accent)", opacity: 0.07 }}
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
