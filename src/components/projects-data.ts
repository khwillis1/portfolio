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
      "When my PI wanted to train a transformer on the Attie Lab's genomic data, I proposed a leaner RAG system instead — a chatbot that lets researchers query massive QTL and genetic datasets in plain English, and plot or analyze results on the fly.",
    role: "Proposed & built",
    tags: ["Python", "RAG", "LLM", "Embeddings", "FastAPI"],
    sections: [
      {
        heading: "The problem",
        body: "Researchers in the Attie Lab work with massive genetic and QTL datasets that are hard to query without writing custom code or knowing the database structure. My PI wanted to train a transformer model directly on our internal data to build a natural-language research assistant — but that would have been computationally expensive, hard to maintain, and overkill for the retrieval-based questions researchers were actually asking.",
      },
      {
        heading: "How it works",
        body: "I proposed and built a Retrieval-Augmented Generation (RAG) system instead. Rather than training a model from scratch, it connects an existing LLM to a retrieval pipeline that embeds and indexes our internal datasets, documentation, and analysis outputs, so researchers can ask questions in natural language and pull insights straight from lab data. I also built custom tools that let the chatbot generate plots, graph QTL signals, compute statistical summaries, and work with structured biological datasets in real time.",
      },
      {
        heading: "Why it matters",
        body: "It dramatically lowered the barrier between researchers and complex genomic data. Instead of hunting for files, writing scripts, or hand-querying databases, researchers move from question to insight conversationally. Pairing RAG with domain-specific analysis tools made it less a generic AI assistant and more an intelligent research interface for biological data.",
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
