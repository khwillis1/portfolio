import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const interests = [
  {
    label: "Walking",
    image: "/interest-walking.jpg",
    alt: "Walking in snowy mountains",
    description: null,
    height: 220,
  },
  {
    label: "Reading",
    image: "/interest-2.jpg",
    alt: "Reading in a hammock outside",
    description: null,
    height: 220,
  },
  {
    label: "Traveling",
    image: "/interest-travel.jpg",
    alt: "Zion National Park",
    description: null,
    height: 220,
  },
  {
    label: "Cooking",
    image: "/interest-1.jpg",
    alt: "A candlelit dinner table",
    description: null,
    height: 220,
  },
];

export default function Interests() {
  return (
    <section
      className="py-20 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-baseline gap-4 mb-10">
            <span
              className="font-mono text-xs tracking-widest"
              style={{ color: "var(--text-3)" }}
            >
              05
            </span>
            <h2
              className="text-3xl"
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontStyle: "italic",
                color: "var(--text)",
              }}
            >
              Beyond the Code
            </h2>
            <div className="flex-1 h-px ml-2" style={{ background: "var(--border)" }} />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 70}>
              <div className="flex flex-col gap-3">
                {/* Label */}
                <h3
                  className="text-lg"
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontStyle: "italic",
                    color: "var(--text)",
                  }}
                >
                  {item.label}
                </h3>

                {/* Photo or text */}
                {item.image ? (
                  <div
                    className="relative overflow-hidden"
                    style={{ height: item.height ?? 220, borderRadius: "0.75rem" }}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt!}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                ) : (
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-2)" }}
                  >
                    {item.description}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
