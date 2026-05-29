export type ProjectSection = { heading: string; body: string };

export type Project = {
  num: string;
  name: string;
  /** Short teaser shown on the card */
  blurb: string;
  /** Short label for who did what, shown as a chip in the drawer */
  role?: string;
  tags: string[];
  /** Deep-dive sections shown in the slide-over drawer */
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    num: "01",
    name: "Merv — AI Healthy-Air Assistant",
    blurb:
      "Merv is my brainchild — an AI healthy-air assistant I pitched after hearing one of AprilAire's core goals: get more of its products into homes that already have one. It interviews a customer about their home and comfort issues, then builds their ideal setup — no HVAC knowledge required.",
    role: "My idea — conceived & built",
    tags: ["Python", "XGBoost", "LLM", "AWS", "FastAPI"],
    sections: [
      {
        heading: "The problem",
        body: "AprilAire's average home has only about 1.2 of its products installed, and growing that number was a major business goal. But most homeowners don't know whether they need a humidifier, better filtration, ventilation, or a dehumidifier — they just know their house feels muggy, dusty, or uncomfortable.",
      },
      {
        heading: "How it works",
        body: "Merv is a conversational chatbot that learns about a customer's home, comfort issues, and lifestyle, then generates personalized product recommendations and a tailored healthy-air report. Behind the scenes it pairs an LLM conversational interface with an XGBoost recommendation engine trained on home and environmental characteristics.",
      },
      {
        heading: "Why it compounds",
        body: "Merv is built around a long-term feedback loop: more recommendations drive more product adoption, which generates more customer and environmental data — making each future recommendation more accurate and personalized over time.",
      },
    ],
  },
  {
    num: "02",
    name: "RAG Research Chatbot",
    blurb:
      "A natural-language interface over UW Biochemistry's phenotype data, so biologists can ask questions in plain English instead of writing SQL.",
    role: "Lead developer",
    tags: ["FastAPI", "Python", "RAG", "Docker", "HTCondor"],
    sections: [
      {
        heading: "Overview",
        body: "A natural-language query interface for UW Biochemistry phenotype data, built with FastAPI, vector embeddings, and local/remote LLMs. It's wired to live genetic databases (Ensembl, JAX, GTEx, IMPC) so annotations stay current across species without manual maintenance.",
      },
    ],
  },
  {
    num: "03",
    name: "COVID-19 Vaccine Analysis",
    blurb:
      "A statistical comparison of Moderna vs. Pfizer death rates using CDC COVID-19 surveillance data covering ~72% of the U.S. population.",
    tags: ["R", "Python", "Statistics", "CDC Data", "Pandas"],
    sections: [
      {
        heading: "Overview",
        body: "Statistical analysis of CDC COVID-19 surveillance data to evaluate Moderna vs. Pfizer death rates, applying z-tests, confidence intervals, and incidence-rate trend analysis in R and Python.",
      },
    ],
  },
];
