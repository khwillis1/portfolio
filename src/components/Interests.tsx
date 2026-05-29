import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

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
      id="interests"
      className="relative py-14 md:py-20 px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader
            number="05"
            label="BEYOND THE CODE"
            title="Beyond the Code"
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, i) => (
            <Reveal key={item.label} delay={i * 70}>
              <div className="flex flex-col gap-3">
                {/* Label above the photo */}
                <h3
                  className="text-lg"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text)",
                  }}
                >
                  {item.label}
                </h3>

                {/* Photo container — hover zoom via .interest-photo-wrap CSS class */}
                {item.image ? (
                  <div
                    className="interest-photo-wrap relative overflow-hidden"
                    style={{
                      height: 240,
                      borderRadius: "var(--radius)",
                      boxShadow: "var(--shadow-md)",
                    }}
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
