const PERIOD = 80;
const REPEATS = 10;
const TOTAL = PERIOD * REPEATS;

function HelixPeriod({ offset }: { offset: number }) {
  const y0 = offset;
  const mid = y0 + 40;
  const y1 = y0 + PERIOD;

  return (
    <g>
      {/* Strand 1 — purple */}
      <path
        d={`M 72,${y0} C 72,${y0 + 22} 28,${y0 + 22} 28,${mid} C 28,${mid + 22} 72,${mid + 22} 72,${y1}`}
        fill="none"
        stroke="#a78bfa"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Strand 2 — pink */}
      <path
        d={`M 28,${y0} C 28,${y0 + 22} 72,${y0 + 22} 72,${mid} C 72,${mid + 22} 28,${mid + 22} 28,${y1}`}
        fill="none"
        stroke="#f472b6"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      {/* Rungs */}
      <line
        x1="72" y1={y0} x2="28" y2={y0}
        stroke="url(#dnaGrad)" strokeWidth="1.5" opacity="0.45" strokeLinecap="round"
      />
      <line
        x1="28" y1={mid} x2="72" y2={mid}
        stroke="url(#dnaGrad)" strokeWidth="1.5" opacity="0.45" strokeLinecap="round"
      />
    </g>
  );
}

export default function DNAHelix({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <svg
        width="100"
        height={TOTAL}
        viewBox={`0 0 100 ${TOTAL}`}
        style={{ animation: "dnascroll 6s linear infinite" }}
      >
        <defs>
          <linearGradient id="dnaGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        {Array.from({ length: REPEATS }, (_, i) => (
          <HelixPeriod key={i} offset={i * PERIOD} />
        ))}
      </svg>
    </div>
  );
}
