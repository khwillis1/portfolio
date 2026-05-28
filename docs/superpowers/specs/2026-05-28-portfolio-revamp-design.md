# Portfolio Revamp — Design Spec

**Date:** 2026-05-28
**Owner:** Kalynn Willis
**Status:** Approved design, ready for implementation planning

---

## 1. Goal

Revamp the existing Next.js portfolio so it reads as **premium and personal** — the work of a capable, tasteful developer — while feeling **cozy** and like a visual reflection of Kalynn. The four explicit goals:

1. **Kill visual monotony** — every section currently uses the identical block (`number + italic serif + full-width rule + py-20`), repeated seven times. That sameness is what makes it feel templated.
2. **Improve structure & hierarchy** — make the hero, work, and identity land harder; vary rhythm.
3. **More taste / polish** — premium craft via typography, spacing, depth, color, and motion. Not a theme or gimmick.
4. **Stronger personal identity** — warmth and the science → data → IoT story make it unmistakably hers.

**Chosen direction:** "Warm Premium Minimal," balanced (premium/credible first, warmth woven through palette, photography, and voice). Premium comes from *craft and restraint*, not ornament. Coziness comes from warm tones, personal photography, soft depth, and a personable voice.

**Audience:** Mixed — broadly impressive. Scannable for recruiters, deep enough for technical peers.

**Non-goals:** No content rewrites (existing copy is strong; only light voice-warming where it helps). No change to the burgundy accent identity. No new concept/theme (rejected: "lab notebook," "magazine").

---

## 2. ⚠️ Critical Implementation Constraint

This repo runs a **modified Next.js** — see `AGENTS.md`: *"This is NOT the Next.js you know. This version has breaking changes — APIs, conventions, and file structure may all differ from your training data."*

**Every implementing agent MUST read the relevant guide in `node_modules/next/dist/docs/` before writing any code** (fonts, Image, App Router conventions, etc.). Do not rely on training-data assumptions about Next.js APIs. Heed deprecation notices.

---

## 3. Visual System (Foundation)

This is the shared system that keeps all sections cohesive. Implement first.

### 3.1 Palette

Shift the background off baby-pink toward a **warm rosy cream** (premium "warm paper," still in the red family to honor the burgundy). Burgundy stays the single hero accent. Warmth, including in the darkest ink tone.

Update `:root` tokens in `src/app/globals.css`:

| Token | Current | New | Notes |
|---|---|---|---|
| `--bg` | `#fdf0f2` | `#f9f4f0` | warm cream, *barely* rosy (rosiness is dialable) |
| `--bg-tinted` | `#f7e2e6` | `#f1e8e1` | slightly deeper warm tint for rhythm bands |
| `--surface` | `#ffffff` | `#fffdfb` | warm white, softly raised — never stark |
| `--text` | `#2d1e22` | `#241b1e` | warm near-black |
| `--text-2` | `#6d5358` | `#6b565a` | warm secondary |
| `--text-3` | `#a89095` | `#a99296` | warm tertiary / metadata |
| `--accent` | `#8b1a2e` | `#8b1a2e` | **keep** — UW-Madison burgundy |
| `--accent-deep` | (n/a) | `#6e1425` | hover/pressed burgundy |
| `--border` | `#edd0d5` | `#ead9d4` | warm, low-contrast |
| `--border-strong` | `#d8adb5` | `#d8c0b9` | warm |

Add a **warm shadow token** for cozy depth (burgundy-tinted, very low alpha), e.g.:
- `--shadow-sm: 0 1px 3px rgba(139, 26, 46, 0.04), 0 1px 2px rgba(36, 27, 30, 0.03)`
- `--shadow-md: 0 4px 16px rgba(139, 26, 46, 0.05), 0 2px 6px rgba(36, 27, 30, 0.04)`
- `--shadow-lg: 0 12px 32px rgba(139, 26, 46, 0.07), 0 4px 12px rgba(36, 27, 30, 0.05)`

> **Bug to fix while here:** `Contact.tsx` still hovers its CTA to old green `#265e44`. Replace with `--accent-deep`.

### 3.2 Typography

Replace the current trio (DM Serif Display / Plus Jakarta Sans / Geist Mono) with a premium, warmer pairing. Load via `next/font` in `src/app/layout.tsx` (check `node_modules/next/dist/docs/` for the correct font API in this Next version).

- **Display — Fraunces** (`next/font/google`). Characterful soft serif with optical sizing; cozy *and* premium. Use for the name and section headings. Apply tasteful optical settings (avoid the extreme "wonky"/soft extremes; aim refined). Variable weights; italics available for selective emphasis.
- **Body — Geist Sans.** Clean, modern; signals "capable dev." Use the `geist` npm package (`geist/font/sans`) or `next/font` — confirm the supported approach against `node_modules/next/dist/docs/`.
- **Mono — Geist Mono** (`geist/font/mono`). Eyebrows, metadata, tags, technical annotations.

Expose as CSS variables and map in the `@theme inline` block:
- `--font-display` → Fraunces
- `--font-sans` → Geist Sans (also set as `body` font-family)
- `--font-mono` → Geist Mono

Define a deliberate type scale (don't scatter ad-hoc sizes). Suggested fluid scale via `clamp()`: display/name, h2 section heading, h3 card title, body, small, eyebrow/mono-label. Keep it tight and consistent across components.

### 3.3 Depth & Spacing

- Replace pervasive hard `1px` borders with **soft warm-tinted shadows + gentle raised surfaces**. Borders become a subtle support, not the primary separation.
- Establish a **spatial scale** (4px base) and apply **varied vertical rhythm** between sections — the uniform `py-20` everywhere is a primary cause of the templated feel. Heavier sections get more room; breather sections less.
- Rounded geometry: soft, consistent radii (cards/photos), not sharp.

### 3.4 Motion (the premium tell)

Add **Framer Motion** (`motion` package) — approved dependency.

- Spring-based, **subtle**, staggered scroll reveals (short, eased — never bouncy/gimmicky).
- Cards lift gently on hover (small translate + shadow grow).
- Smooth link/button hover & press states.
- **Full `prefers-reduced-motion` support** — disable transforms/animation when set.
- **Remove the busy floating science icons** in the hero (read as "AI demo," not premium). Replace that energy with one restrained detail: a barely-there warm texture/grain on the cream background and/or a single quiet ambient element. Keep the hero calm.

Create a reusable `Reveal` wrapper component (Framer Motion based) to replace the current `ScrollReveal`.

---

## 4. Structure & Section Rhythm

**Principle:** stay cohesive through the shared *system* (type, color, spacing, motion) while giving each section a *layout that fits its content*. No two adjacent sections should feel stamped from the same mold.

### 4.1 Section header system

Replace the seven copy-pasted `number + italic serif + full-width rule` blocks with a lighter, shared `SectionHeader` component:
- Small Geist Mono eyebrow: `01 · ABOUT`
- Fraunces heading below it
- **Drop the full-width horizontal rule** (it's a crutch). Optionally a short tick/indent.
- Allow slight per-section variation in alignment/scale so headers don't stamp identically.

### 4.2 Page flow & per-section treatment

Order (keep current order, refine each treatment). Background rhythm: `cream → cream → tint band → cream → tint band → cream → cream`.

1. **Hero** *(cream)* — calm, warm, breathing room. Large Fraunces name; one sharp value line; mono status eyebrow (`Madison, WI · open to roles`); two CTAs (View Work / Resume); graduation photo (`/kalynn.jpg`) in a soft warm frame with `--shadow-lg`. No floating icons. Barely-there warm grain + one quiet detail. Keep the existing offset-frame idea but refine it (softer, warmer).

2. **01 · About** *(cream)* — two-column editorial. Left: narrative bio (warm first-person voice; keep existing copy, lightly warmed). Right: a refined "at a glance" panel on a softly raised `--surface` with `--shadow-md` — the stats (GPA 3.92, 5× Dean's List, 3+ roles, B.S. Stats & Data Science) + the "currently working with" stack chips.

3. **02 · Experience** *(tint band)* — elevated timeline. Cards on raised `--surface` with soft burgundy-tinted shadow (replace hard borders), company icon (keep IoT/Molecule/DNA inline icons), clean mono metadata (period). Gentle hover lift. Keep all three roles and existing bullet copy.

4. **03 · Selected Work** *(cream)* — **feature the strongest project (Merv) larger** (bigger card / more space / more prominent), with the other two (RAG Research Chatbot, COVID-19 Vaccine Analysis) as refined cards below. Hover lift; clear tag hierarchy; GitHub links preserved. This provides "wow" hierarchy a flat list can't.

5. **04 · Skills** *(tint band)* — keep the clean table-row layout (4 categories: Languages; AI & ML; Data & Cloud; Visualization & Web), refine typographically. Intentionally restrained — a breather between two heavier sections. (Note: section sits on a tint band per rhythm; confirm it still reads distinct from Experience — vary internal layout.)

6. **05 · Beyond the Code** *(cream)* — the cozy heart. Four photos in a considered layout that gracefully handles **mixed aspect ratios**:
   - Walking — `/interest-walking.jpg` (landscape, snowy mountains)
   - Reading — `/interest-2.jpg` (landscape)
   - Traveling — `/interest-travel.jpg` (landscape, Zion)
   - Cooking — `/interest-1.jpg` (landscape, candlelit table)
   Warm captions; labels in Fraunces. This is where personality lands.

7. **06 · Contact** *(cream)* — warm, generous closing. Personable line; email with copy-to-clipboard; GitHub + LinkedIn. **Fix the green hover bug** (use `--accent-deep`).

**Navbar** — update logo/nav to the new type system; keep the scroll background matched to `--bg` (`rgba(249,244,240,0.97)` for the new cream — recompute from final `--bg`). **Watch the recurring "wrong-color header on scroll" bug**: the scroll background must match the new `--bg`, not any old palette value.

**Footer** — minimal, warm, consistent.

---

## 5. Component Architecture

Keep the existing component split. Add two shared primitives.

```
src/app/
  layout.tsx        # swap fonts → Fraunces + Geist Sans + Geist Mono
  globals.css       # new tokens, shadows, motion keyframes, type scale
  page.tsx          # unchanged order
src/components/
  SectionHeader.tsx # NEW — mono eyebrow + Fraunces heading
  Reveal.tsx        # NEW — Framer Motion scroll-reveal (replaces ScrollReveal)
  Navbar.tsx        # update type + scroll bg (matches new --bg)
  Hero.tsx          # remove float icons; warm frame; calm layout
  About.tsx         # two-column editorial + raised "at a glance" panel
  Experience.tsx    # elevated cards, soft shadows, hover lift
  Projects.tsx      # feature Merv larger + refined cards
  Skills.tsx        # typographic refinement
  Interests.tsx     # considered photo layout, mixed aspect ratios
  Contact.tsx       # fix green hover bug; warm close
  Footer.tsx        # minimal warm
  ScrollReveal.tsx  # REMOVE after migrating to Reveal
  DNAHelix.tsx      # likely remove if unused (verify before deleting)
```

**Interfaces (keep units small & focused):**
- `SectionHeader` — props: `number` (e.g. "01"), `label` (e.g. "ABOUT"), `title` (e.g. "About"), optional `align`. Used by every section; no internal section knowledge.
- `Reveal` — props: `children`, `delay?`, `as?`. Wraps content in a Framer Motion element with the standard spring reveal + reduced-motion guard. Replaces all `ScrollReveal` usages.

---

## 6. Implementation Plan (subagent-parallelizable)

Designed to run on Sonnet subagents to reduce usage. **Task A must complete and be verified before B–E start** (they all depend on the foundation).

- **Task A — Foundation (blocking, do first):**
  - Read `node_modules/next/dist/docs/` (fonts, Image, App Router).
  - Update `globals.css` tokens + shadows + motion keyframes + type scale.
  - Swap fonts in `layout.tsx` (Fraunces + Geist Sans + Geist Mono).
  - Add Framer Motion dependency.
  - Build `SectionHeader` and `Reveal`.
- **Task B — Hero + Navbar** (after A): calm warm hero, remove float icons, soft frame; navbar type + correct scroll bg.
- **Task C — About + Experience** (after A): two-column About + raised panel; elevated Experience cards.
- **Task D — Projects + Skills** (after A): feature Merv larger; refine Skills rows.
- **Task E — Interests + Contact + Footer** (after A): photo layout; warm contact (fix green bug); footer.

Each task: read the relevant Next docs first, use only the new tokens/primitives, support reduced-motion, and verify the dev server renders the section without errors.

---

## 7. Acceptance Criteria

- [ ] No two adjacent sections share the identical header/layout pattern; the old `number + italic serif + full-width rule` block is gone everywhere.
- [ ] Background is warm cream (not pink); burgundy retained as sole accent; ink is warm near-black.
- [ ] Fraunces + Geist Sans + Geist Mono loaded and applied per the type scale.
- [ ] Soft warm shadows replace pervasive hard borders; surfaces feel gently raised.
- [ ] Scroll reveals + hover states are spring-based and subtle; `prefers-reduced-motion` disables them.
- [ ] Hero has no floating icons; feels calm, warm, premium.
- [ ] Merv is visually featured above the other two projects.
- [ ] Interests photos display gracefully despite mixed aspect ratios.
- [ ] Contact CTA hover uses burgundy (`--accent-deep`), not green.
- [ ] Navbar scroll background matches the new `--bg` (no wrong-color header on scroll).
- [ ] All existing copy preserved (only light voice-warming).
- [ ] `npm run build` / dev server compiles with no errors; no console errors.
- [ ] Implementing agents read `node_modules/next/dist/docs/` before writing code.

---

## 8. Open Dials (intentionally flexible)

- **Rosiness of `--bg`** — proposed barely-rosy `#f9f4f0`; can push warmer/oat or keep more blush.
- **One expressive hero moment** — option to borrow a slightly larger/bolder hero from the "Editorial Premium" direction if more "wow" is wanted later.
- **Fraunces optical/soft settings** — tune to taste during implementation (aim refined, not novelty).
