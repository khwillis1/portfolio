"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const EMAIL = "kalynnhopewillis@gmail.com";

function GitHubIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width={18} height={18}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socials = [
  { label: "GitHub", href: "https://github.com/kalynnwillis", icon: <GitHubIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kalynn-willis-960266253/", icon: <LinkedInIcon /> },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="contact" className="relative py-14 md:py-20 px-6">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <Reveal>
          <SectionHeader
            number="06"
            label="CONTACT"
            title="Get in Touch"
            align="center"
          />
        </Reveal>

        <Reveal delay={80}>
          <p
            className="leading-relaxed mb-10 text-[1.025rem]"
            style={{ color: "var(--text-2)" }}
          >
            I&apos;m open to new opportunities, collaborations, and conversations
            about data and AI. Whether you have a question or just want to say hi,
            my inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={140}>
          {/* Email row — warm surface treatment */}
          <div
            className="inline-flex items-center gap-3 mb-5 px-5 py-3 rounded-lg transition-colors"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span
              className="font-mono text-sm"
              style={{ color: "var(--text-2)" }}
            >
              {EMAIL}
            </span>
            <button
              onClick={copyEmail}
              className="transition-colors"
              style={{ color: "var(--text-3)" }}
              aria-label="Copy email"
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
            >
              {copied ? (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width={16} height={16} style={{ color: "var(--accent)" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width={16} height={16}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>

          {/* CTA — hover darkens to var(--accent-deep), NOT green */}
          <div className="block mb-10">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-block px-7 py-3 rounded-md text-sm font-medium text-white transition-colors"
              style={{ background: "var(--accent)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-deep)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
            >
              Send a Message →
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "var(--text-3)" }}
                aria-label={s.label}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
