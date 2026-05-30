import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

type Publication = {
  title: string;
  authors: string[];
  highlight: string; // author name to emphasize
  venue: string;
  year: string;
  status: string;
  summary: string;
  links: { label: string; href: string }[];
};

const publications: Publication[] = [
  {
    title:
      "Distinct genetic architecture of gene and isoform level QTL in the Diversity Outbred (DO) mouse population",
    authors: [
      "Charles I Opara",
      "Kelly A Mitok",
      "Christopher H Emfinger",
      "Katheryn L Schueler",
      "Donnie S Stapleton",
      "Nancy A Benkusky",
      "Udaya Gardiparthi",
      "Kalynn H Willis",
      "Victor Ruotti",
      "Brian S Yandell",
      "Mark P Keller",
      "Alan D Attie",
    ],
    highlight: "Kalynn H Willis",
    venue: "bioRxiv",
    year: "2026",
    status: "Preprint · under review",
    summary:
      "Mapping gene- and isoform-level expression QTL across a genetically diverse mouse population, showing that genetic variation drives allele-specific isoform usage missed by gene-level analysis alone.",
    links: [
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/41959360/" },
      { label: "DOI", href: "https://doi.org/10.64898/2026.03.06.710203" },
      {
        label: "Full text (PMC)",
        href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC13060904/",
      },
    ],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative py-14 md:py-20 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader number="03" label="PUBLICATIONS" title="Publications" />
        </Reveal>

        <div className="space-y-6">
          {publications.map((pub) => (
            <Reveal key={pub.title}>
              <article
                className="p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius)",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-3">
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded"
                    style={{
                      background: "var(--bg-tinted)",
                      border: "1px solid var(--border)",
                      color: "var(--accent)",
                    }}
                  >
                    {pub.status}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--text-3)" }}
                  >
                    {pub.venue} · {pub.year}
                  </span>
                </div>

                <h3
                  className="text-lg md:text-xl leading-snug mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
                >
                  {pub.title}
                </h3>

                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--text-2)" }}
                >
                  {pub.summary}
                </p>

                <p
                  className="text-xs leading-relaxed mb-5"
                  style={{ color: "var(--text-3)" }}
                >
                  {pub.authors.map((a, i) => (
                    <span key={a}>
                      <span
                        style={
                          a === pub.highlight
                            ? { color: "var(--text)", fontWeight: 600 }
                            : undefined
                        }
                      >
                        {a}
                      </span>
                      {i < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>

                <div className="flex flex-wrap gap-2">
                  {pub.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs px-3 py-1.5 rounded transition-colors"
                      style={{
                        background: "var(--bg-tinted)",
                        border: "1px solid var(--border)",
                        color: "var(--text-2)",
                      }}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
