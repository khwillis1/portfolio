# Portfolio Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as "Warm Premium Minimal" — a cozy, premium, personal site driven by a refined token/type system, soft-shadow depth, spring motion, and varied per-section layouts.

**Architecture:** A foundation layer (palette tokens, fonts, two shared primitives `SectionHeader` + `Reveal`) is built and verified first. Then each section component is transformed to use that foundation, in parallel. All existing copy/data is preserved; only structure, styling, and motion change.

**Tech Stack:** Next.js 16.2.6 (⚠️ *modified* — see constraint below), React 19, Tailwind CSS v4, `next/font` (Fraunces), `geist` package (Geist Sans/Mono), `motion` (Framer Motion).

---

## ⚠️ Read Before Any Code

This repo runs a **modified Next.js** (`AGENTS.md`: "This is NOT the Next.js you know"). **Every task: read the relevant guide in `node_modules/next/dist/docs/` before writing code** (fonts, Image, App Router). Do not rely on training-data assumptions. Heed deprecation notices.

**Source of truth:** `docs/superpowers/specs/2026-05-28-portfolio-revamp-design.md`.

**Verification convention (no unit-test framework in this repo):** Frontend visual/styling work is verified by **type-check + build + targeted visual/behavioral checks**, not unit tests.
- Fast gate per task: `npx tsc --noEmit` (must report no errors).
- Compile gate: `npm run build` (must succeed).
- Visual gate: run `npm run dev`, open the relevant section, confirm the described behavior and **no console errors**.

---

## File Structure

```
src/app/layout.tsx        # MODIFY — swap fonts → Fraunces + Geist Sans + Geist Mono
src/app/globals.css       # MODIFY — new tokens, shadows, motion keyframes
src/app/page.tsx          # unchanged (order stays)
src/components/
  SectionHeader.tsx       # CREATE — mono eyebrow + Fraunces heading
  Reveal.tsx              # CREATE — Framer Motion scroll-reveal (same prop API as ScrollReveal)
  Navbar.tsx              # MODIFY — type + scroll bg matches new --bg
  Hero.tsx                # MODIFY — remove float icons; warm frame; calm layout
  About.tsx               # MODIFY — two-column editorial + raised "at a glance" panel
  Experience.tsx          # MODIFY — elevated cards, soft shadows, hover lift
  Projects.tsx            # MODIFY — feature Merv larger + refined cards
  Skills.tsx              # MODIFY — typographic refinement
  Interests.tsx           # MODIFY — considered photo layout
  Contact.tsx             # MODIFY — fix green hover bug; warm close
  Footer.tsx              # MODIFY — minimal warm
  ScrollReveal.tsx        # DELETE — after all usages migrated to Reveal
  DNAHelix.tsx            # DELETE — if unused (grep first)
```

---

## Task 1: Foundation — Dependencies

**Files:** `package.json` (via install)

- [ ] **Step 1: Read the Next font docs**

Read `node_modules/next/dist/docs/` for the font guide (search for "font"). Confirm how `next/font/google` and external font packages are wired in this Next version.

- [ ] **Step 2: Install dependencies**

```bash
npm install geist motion
```

`geist` provides `geist/font/sans` and `geist/font/mono` (pre-built `next/font` objects). `motion` is Framer Motion (imported from `motion/react`).

- [ ] **Step 3: Verify install**

Run: `npm ls geist motion`
Expected: both listed with resolved versions, no errors.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "build: add geist and motion dependencies"
```

---

## Task 2: Foundation — Palette tokens, shadows, motion keyframes

**Files:** Modify `src/app/globals.css`

- [ ] **Step 1: Replace the `:root` block** (lines ~3-17) with the warm palette + shadow + radius tokens:

```css
:root {
  --bg: #f9f4f0;
  --bg-tinted: #f1e8e1;
  --surface: #fffdfb;
  --text: #241b1e;
  --text-2: #6b565a;
  --text-3: #a99296;
  --accent: #8b1a2e;
  --accent-deep: #6e1425;
  --border: #ead9d4;
  --border-strong: #d8c0b9;
  --code-bg: #271e21;
  --code-text: #e8e2d8;
  --code-accent: #e8929e;

  --shadow-sm: 0 1px 3px rgba(139, 26, 46, 0.04), 0 1px 2px rgba(36, 27, 30, 0.03);
  --shadow-md: 0 4px 16px rgba(139, 26, 46, 0.05), 0 2px 6px rgba(36, 27, 30, 0.04);
  --shadow-lg: 0 12px 32px rgba(139, 26, 46, 0.07), 0 4px 12px rgba(36, 27, 30, 0.05);

  --radius: 0.875rem;
}
```

- [ ] **Step 2: Update the `@theme inline` block** so font vars point at the new fonts and accent-deep is exposed. Replace the font/color lines:

```css
@theme inline {
  --color-bg: var(--bg);
  --color-bg-tinted: var(--bg-tinted);
  --color-surface: var(--surface);
  --color-text: var(--text);
  --color-text-2: var(--text-2);
  --color-text-3: var(--text-3);
  --color-accent: var(--accent);
  --color-accent-deep: var(--accent-deep);
  --color-border: var(--border);
  --color-border-strong: var(--border-strong);
  --font-display: var(--font-fraunces);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

- [ ] **Step 3: Update `body` font-family** (line ~42) to the Geist Sans variable:

```css
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-geist-sans), system-ui, sans-serif;
}
```

- [ ] **Step 4: Update scrollbar track color** (it referenced `--bg-tinted`, fine) — no change needed; leave scrollbar block as-is.

- [ ] **Step 5: Remove now-unused keyframes** `sensorPing`, `nodePulse`, `helixFloat`, `floatIcon` (the hero float icons are being removed). Keep `fadeUp`, `fadeIn`, `revealUp`, `.animate-fade-up`, `.animate-fade-in`, `.reveal`/`.reveal.visible` for now (Hero still uses fade classes until Task 6; remove `.reveal` only after ScrollReveal is deleted in Task 11).

- [ ] **Step 6: Add a reduced-motion guard** at the end of the file:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 7: Verify build**

Run: `npm run build`
Expected: succeeds. (Font vars `--font-fraunces` / `--font-geist-sans` are not defined until Task 3 — that's fine; CSS var references won't break the build, text just falls back until then.)

- [ ] **Step 8: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: warm premium palette tokens, shadows, reduced-motion guard"
```

---

## Task 3: Foundation — Font swap (Fraunces + Geist)

**Files:** Modify `src/app/layout.tsx`

- [ ] **Step 1: Replace the entire file** with:

```tsx
import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Kalynn Willis — Data Engineer & Data Scientist",
  description:
    "Data Engineer and Data Scientist building AI products and IoT data pipelines. UW-Madison Statistics & Data Science.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

Note: `GeistSans.variable` resolves to `--font-geist-sans` and `GeistMono.variable` to `--font-geist-mono` (these names match the tokens set in Task 2). If the `geist` package's variable names differ in the installed version, set them explicitly to match the globals.css tokens.

- [ ] **Step 2: If Fraunces `axes` errors** (variable-axis support varies), fall back to:

```tsx
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});
```

- [ ] **Step 3: Verify type-check + build**

Run: `npx tsc --noEmit && npm run build`
Expected: no type errors; build succeeds.

- [ ] **Step 4: Visual check**

Run `npm run dev`, open the site. Body text should now render in Geist Sans (cleaner/more modern than before). Headings still use old `--font-dm-serif` references in components until later tasks — that's expected.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: swap fonts to Fraunces + Geist Sans + Geist Mono"
```

---

## Task 4: Foundation — `SectionHeader` primitive

**Files:** Create `src/components/SectionHeader.tsx`

Replaces the seven copy-pasted `number + italic serif + full-width rule` blocks. No full-width rule.

- [ ] **Step 1: Create the component**

```tsx
type SectionHeaderProps = {
  number: string;   // e.g. "01"
  label: string;    // e.g. "ABOUT"
  title: string;    // e.g. "About"
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  number,
  label,
  title,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <div
        className={`flex items-center gap-2 mb-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span
          className="font-mono text-[11px] tracking-[0.25em]"
          style={{ color: "var(--accent)" }}
        >
          {number}
        </span>
        <span
          className="font-mono text-[11px] tracking-[0.25em] uppercase"
          style={{ color: "var(--text-3)" }}
        >
          {label}
        </span>
      </div>
      <h2
        className="text-3xl md:text-4xl tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
      >
        {title}
      </h2>
    </div>
  );
}
```

- [ ] **Step 2: Verify type-check**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/SectionHeader.tsx
git commit -m "feat: add SectionHeader primitive"
```

---

## Task 5: Foundation — `Reveal` primitive (Framer Motion)

**Files:** Create `src/components/Reveal.tsx`

Same prop API as `ScrollReveal` (`children`, `className`, `delay` in **ms**) so migration is a mechanical import swap. Spring-based, respects reduced motion.

- [ ] **Step 1: Read the motion import path**

Confirm import path: `motion/react` (Framer Motion v11+ via the `motion` package). If unavailable, use `framer-motion`.

- [ ] **Step 2: Create the component**

```tsx
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
```

- [ ] **Step 3: Verify type-check + build**

Run: `npx tsc --noEmit && npm run build`
Expected: no errors; build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/Reveal.tsx
git commit -m "feat: add Reveal primitive (spring motion, reduced-motion safe)"
```

> **Foundation complete. Tasks 6–10 can run in parallel. Each: import `SectionHeader` and `Reveal`, replace `ScrollReveal` usage with `Reveal`, use only the new tokens, preserve all existing copy/data arrays from the current file.**

---

## Task 6: Hero + Navbar

**Files:** Modify `src/components/Hero.tsx`, `src/components/Navbar.tsx`

### Hero

- [ ] **Step 1: Remove the floating icons.** Delete the entire `FLOAT_ICONS` array and the absolutely-positioned `<div className="absolute inset-0 ...">{FLOAT_ICONS.map(...)}</div>` block. Hero must have **no floating icons**.

- [ ] **Step 2: Keep `"use client"`** only if hover handlers remain. Convert the two CTA buttons to use Tailwind hover utilities instead of inline `onMouseEnter/Leave` so Hero can be a Server Component. Use classes: base `style={{ background: "var(--accent)" }}` plus `className="... transition-colors hover:brightness-90"`, or define hover via a small `style` + CSS. Simplest: keep `"use client"` and inline handlers but change the hover target color to `var(--accent-deep)`. **Decision: keep `"use client"` and set hover to `var(--accent-deep)`.**

- [ ] **Step 3: Update type + frame.** Name heading uses `var(--font-display)` (Fraunces). Keep the two-column grid `md:grid-cols-[1fr_380px]`. Photo container keeps `width:340,height:453` but switch its framing to soft depth:
  - Replace the offset rust border decoration with: photo wrapper `style={{ borderRadius: "var(--radius)", boxShadow: "var(--shadow-lg)" }}`.
  - Keep one subtle offset accent frame: an absolutely-positioned div translated `+10px,+10px` with `border: "1px solid var(--accent)"`, `opacity: 0.18`, `borderRadius: "var(--radius)"`.
  - Caption stays "UW–Madison, 2026" in mono `--text-3`.

- [ ] **Step 4: Add a barely-there warm background detail.** Add to the `<section>` a subtle radial warmth, e.g. an absolutely-positioned, `pointer-events-none` div: `style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(139,26,46,0.04), transparent 70%)" }}`. No animation, very subtle.

- [ ] **Step 5: Preserve existing copy** — status eyebrow ("Madison, WI · open to opportunities" → may warm to "Madison, WI · open to roles"), name "Kalynn Willis", title line "Data Engineer & Data Scientist", bio line. Keep CTA targets (`#projects`, `/resume.pdf`).

- [ ] **Step 6: Verify type-check + build, visual check.**

Run: `npx tsc --noEmit && npm run build`. Then `npm run dev`: hero is calm, warm, no floating icons, photo has soft shadow, CTA hover darkens to burgundy (not green), no console errors.

### Navbar

- [ ] **Step 7: Update type.** Logo `kw.` uses `var(--font-display)`. Nav links use Geist Sans (body default) — no change needed beyond ensuring no `--font-dm-serif`/`--font-jakarta` references remain.

- [ ] **Step 8: Fix the scroll background to match new `--bg`.** The scrolled state background MUST be the new cream: `background: "rgba(249,244,240,0.97)"` (this is `#f9f4f0`). Keep `backdropFilter: "blur(12px)"`. Box shadow: `"0 1px 0 var(--border), 0 4px 24px rgba(36,27,30,0.05)"`. **This is the recurring "wrong-color header on scroll" bug — verify it matches `--bg` exactly.**

- [ ] **Step 9: Visual check** — scroll down; header background blends with the cream page (no pink/tan/white band).

- [ ] **Step 10: Commit**

```bash
git add src/components/Hero.tsx src/components/Navbar.tsx
git commit -m "feat: calm warm hero (no float icons) + navbar scroll bg fix"
```

---

## Task 7: About + Experience

**Files:** Modify `src/components/About.tsx`, `src/components/Experience.tsx`

### About

- [ ] **Step 1: Swap header + reveal.** Add `import SectionHeader from "./SectionHeader";` and `import Reveal from "./Reveal";`. Replace the inline header block with `<SectionHeader number="01" label="ABOUT" title="About" />`. Replace `ScrollReveal` with `Reveal` (keep `delay` values).

- [ ] **Step 2: Keep the two-column editorial layout** (`grid md:grid-cols-5 gap-12`, bio `md:col-span-3`, side panel `md:col-span-2`). **Preserve the existing bio paragraphs and the `stats` and `currentStack` arrays verbatim.**

- [ ] **Step 3: Elevate the "at a glance" panel.** Wrap the stats grid in a raised surface card instead of the left-border treatment:

```tsx
<div
  className="rounded-2xl p-6"
  style={{
    background: "var(--surface)",
    boxShadow: "var(--shadow-md)",
    borderRadius: "var(--radius)",
  }}
>
  {/* existing stats grid (2 cols) — stat value uses var(--font-display) + var(--accent); label mono var(--text-3) */}
</div>
```

Remove the `border-l pl-6` from the stats grid; spacing now comes from the card padding.

- [ ] **Step 4: Stack chips** — keep the "Currently working with" mono label + chips. Update chip style to `background: var(--surface)`, `border: 1px solid var(--border)`, `color: var(--text-2)`.

- [ ] **Step 5: Verify** `npx tsc --noEmit` then visual: two columns, raised stats card with soft shadow, all numbers/copy intact.

### Experience

- [ ] **Step 6: Swap header + reveal.** `<SectionHeader number="02" label="EXPERIENCE" title="Experience" />`. Replace `ScrollReveal` with `Reveal`. **Preserve the `experiences` data array and the three inline icon components (`IoTIcon`, `MoleculeIcon`, `DNAIcon`) verbatim.**

- [ ] **Step 7: Keep the tint-band section** `style={{ background: "var(--bg-tinted)" }}` and the timeline rail. Elevate each card:
  - Card: `background: var(--surface)`, `borderRadius: var(--radius)`, `boxShadow: var(--shadow-md)`, **remove** the `1px solid var(--border)` as the primary border (a hairline `border: "1px solid var(--border)"` may stay for definition).
  - Hover lift: on hover raise shadow to `var(--shadow-lg)` and translate `y: -2px`. Keep `"use client"` (uses hover). Implement hover via inline `onMouseEnter/Leave` setting `boxShadow` + `transform`, or wrap card in a `motion.div whileHover={{ y: -2 }}`. **Decision: use `motion.div whileHover={{ y: -2 }}` + transition shadow via inline handler.**
  - Company name line: keep icon + name in `var(--accent)`, mono.

- [ ] **Step 8: Verify** `npx tsc --noEmit && npm run build`, then visual: cards float on the tint band with soft shadow, gentle hover lift, all bullets/tags intact.

- [ ] **Step 9: Commit**

```bash
git add src/components/About.tsx src/components/Experience.tsx
git commit -m "feat: editorial About + elevated Experience cards"
```

---

## Task 8: Projects (Selected Work) + Skills

**Files:** Modify `src/components/Projects.tsx`, `src/components/Skills.tsx`

### Projects — feature Merv larger

- [ ] **Step 1: Swap header + reveal.** `<SectionHeader number="03" label="SELECTED WORK" title="Selected Work" />`. Replace `ScrollReveal` with `Reveal`. **Preserve the `projects` data array and `GitHubIcon` verbatim.**

- [ ] **Step 2: Split rendering.** Render `projects[0]` (Merv) as a **featured card**, `projects.slice(1)` as a refined two-column grid below.

- [ ] **Step 3: Featured card (Merv):**

```tsx
<Reveal>
  <article
    className="rounded-2xl p-8 mb-6 group"
    style={{
      background: "var(--surface)",
      boxShadow: "var(--shadow-lg)",
      borderRadius: "var(--radius)",
    }}
  >
    <div className="flex items-center gap-2 mb-4">
      <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "var(--accent)" }}>
        FEATURED
      </span>
    </div>
    <h3 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
      {projects[0].name}
    </h3>
    <p className="leading-relaxed mb-5 max-w-3xl" style={{ color: "var(--text-2)" }}>
      {projects[0].description}
    </p>
    {/* tags row: mono chips, background var(--bg-tinted), border var(--border), color var(--text-3) */}
    {/* GitHub link: var(--text-3) → hover var(--accent) */}
  </article>
</Reveal>
```

- [ ] **Step 4: Secondary cards grid:**

```tsx
<div className="grid md:grid-cols-2 gap-6">
  {projects.slice(1).map((project, i) => (
    <Reveal key={project.name} delay={i * 80}>
      <article
        className="rounded-2xl p-6 h-full"
        style={{ background: "var(--surface)", boxShadow: "var(--shadow-md)", borderRadius: "var(--radius)" }}
      >
        {/* num eyebrow (project.num) mono var(--text-3); name var(--font-display); description var(--text-2); tags; github */}
      </article>
    </Reveal>
  ))}
</div>
```

- [ ] **Step 5: Hover lift** on all project cards (`motion.div whileHover={{ y: -3 }}` or inline shadow→`var(--shadow-lg)`). Keep `"use client"`.

- [ ] **Step 6: Keep** the "More on GitHub →" link at the bottom (hover → accent).

- [ ] **Step 7: Verify** `npx tsc --noEmit`, then visual: Merv visually dominant above two equal cards; hover lift; tags/links intact.

### Skills

- [ ] **Step 8: Swap header + reveal.** `<SectionHeader number="04" label="SKILLS" title="Skills" />`. Replace `ScrollReveal` with `Reveal`. **Preserve the `categories` array verbatim.**

- [ ] **Step 9: Keep the tint-band section and table-row layout** (`grid md:grid-cols-[180px_1fr]`). Refine typographically: category label in `var(--text)` semibold; pills `background: var(--surface)`, `border: 1px solid var(--border-strong)`, hover → `var(--accent)` border + text (keep existing hover handlers). Row separators stay `1px solid var(--border)`. To distinguish from Experience (also on tint), keep Skills flat (no raised cards) — the contrast in treatment is intentional.

- [ ] **Step 10: Verify** `npx tsc --noEmit && npm run build`, visual: clean rows, readable category labels, pill hover works.

- [ ] **Step 11: Commit**

```bash
git add src/components/Projects.tsx src/components/Skills.tsx
git commit -m "feat: feature Merv in Selected Work + refine Skills"
```

---

## Task 9: Interests + Contact + Footer

**Files:** Modify `src/components/Interests.tsx`, `src/components/Contact.tsx`, `src/components/Footer.tsx`

### Interests (Beyond the Code)

- [ ] **Step 1: Swap header + reveal.** `<SectionHeader number="05" label="BEYOND THE CODE" title="Beyond the Code" />`. Replace `ScrollReveal` with `Reveal`. **Preserve the `interests` array** (Walking `/interest-walking.jpg`, Reading `/interest-2.jpg`, Traveling `/interest-travel.jpg`, Cooking `/interest-1.jpg`) — all currently landscape.

- [ ] **Step 2: Considered photo layout.** Keep `grid sm:grid-cols-2 lg:grid-cols-4 gap-6`. All four are landscape now, so use a consistent `height` (e.g. 240) with `borderRadius: var(--radius)`, `boxShadow: var(--shadow-md)`, `object-cover`. Remove the per-item `height` override hack if no longer needed (all landscape → uniform height). Label above each photo in `var(--font-display)`.

- [ ] **Step 3: Warm caption** — keep label; optionally a one-line mono caption under each in `var(--text-3)`. Subtle hover: image `scale(1.02)` within `overflow-hidden` container (CSS transition).

- [ ] **Step 4: Verify** visual: four photos, uniform height, soft shadow, rounded, hover zoom subtle.

### Contact

- [ ] **Step 5: Swap header + reveal.** `<SectionHeader number="06" label="CONTACT" title="Get in Touch" align="center" />`. Replace `ScrollReveal` with `Reveal`. Keep the centered layout, email copy-to-clipboard logic, and socials array verbatim.

- [ ] **Step 6: FIX THE GREEN HOVER BUG.** The "Send a Message" CTA currently hovers to `#265e44` (green). Change the `onMouseEnter` to `e.currentTarget.style.background = "var(--accent-deep)"`. Verify no other `#265e44` or green values remain in the file.

- [ ] **Step 7: Warm the email row** — `background: var(--surface)`, `border: 1px solid var(--border)`, `boxShadow: var(--shadow-sm)`.

- [ ] **Step 8: Verify** visual: CTA hover darkens to burgundy (not green); copy button works.

### Footer

- [ ] **Step 9: Minimal warm footer.** Ensure no old font/color references; small mono text in `var(--text-3)`; keep it minimal.

- [ ] **Step 10: Verify** `npx tsc --noEmit && npm run build`.

- [ ] **Step 11: Commit**

```bash
git add src/components/Interests.tsx src/components/Contact.tsx src/components/Footer.tsx
git commit -m "feat: warm interests/contact/footer + fix green CTA hover bug"
```

---

## Task 10: Cleanup — remove dead code

**Files:** Delete `src/components/ScrollReveal.tsx`; possibly `src/components/DNAHelix.tsx`; trim `globals.css`

- [ ] **Step 1: Confirm no remaining ScrollReveal imports**

Run: `grep -rn "ScrollReveal" src/`
Expected: no matches (all migrated to `Reveal`). If any remain, migrate them first.

- [ ] **Step 2: Check DNAHelix usage**

Run: `grep -rn "DNAHelix" src/`
Expected: no matches → safe to delete. If referenced, leave it.

- [ ] **Step 3: Delete dead files**

```bash
git rm src/components/ScrollReveal.tsx
# only if grep showed no usage:
git rm src/components/DNAHelix.tsx
```

- [ ] **Step 4: Remove now-unused CSS.** In `globals.css`, remove `.reveal`/`.reveal.visible` and `revealUp` keyframe (only `ScrollReveal` used them). Keep `fadeUp`/`fadeIn`/`.animate-fade-up`/`.animate-fade-in` only if Hero still uses them; otherwise remove. Run `grep -rn "animate-fade\|reveal" src/` to confirm before deleting.

- [ ] **Step 5: Verify** `npx tsc --noEmit && npm run build`. No errors.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: remove dead ScrollReveal/DNAHelix and unused CSS"
```

---

## Task 11: Final verification pass

- [ ] **Step 1: Full build**

Run: `npm run build`
Expected: succeeds, no errors/warnings of substance.

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Acceptance walkthrough** (`npm run dev`, check each against the spec §7):
  - [ ] No two adjacent sections share the identical old header block; no full-width section rules remain.
  - [ ] Background is warm cream (not pink); burgundy is the only accent; ink is warm.
  - [ ] Fraunces headings, Geist Sans body, Geist Mono labels render.
  - [ ] Soft warm shadows replace pervasive hard borders; surfaces feel raised.
  - [ ] Scroll reveals + hovers are spring-based and subtle; toggling OS "reduce motion" disables them.
  - [ ] Hero has no floating icons; calm and warm.
  - [ ] Merv is visually featured above the other two projects.
  - [ ] Interests photos display cleanly at uniform height.
  - [ ] Contact CTA hover is burgundy, not green.
  - [ ] Navbar scroll background matches cream `--bg` (no wrong-color band).
  - [ ] No console errors.

- [ ] **Step 4: Fix any failures**, then final commit if changes were made:

```bash
git add -A
git commit -m "fix: address final acceptance walkthrough issues"
```

---

## Notes for executors

- **Preserve all copy/data arrays** from existing components — restructure and restyle only.
- **Use only the new tokens** from Task 2; no hard-coded old colors (no `#fdf0f2`, `#2d1e22`, `#265e44`, etc.). Grep for stragglers: `grep -rn "#fdf0f2\|#2d1e22\|#265e44\|#8b1a2e" src/` — `#8b1a2e` should only appear in `globals.css`.
- **Reduced motion**: every animated component must degrade gracefully (Reveal handles its own; ensure hover-only transforms also respect it where feasible).
- **Read `node_modules/next/dist/docs/`** before touching fonts/Image/layout — this Next is modified.
