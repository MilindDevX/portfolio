# AI Role Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task.

**Goal:** Add a standalone, evidence-led applied-AI portfolio at `/ai`, a TruthLens experiment-log case study at `/work/truthlens`, and AI evidence enhancements to the shared FeedbackOS and MedMarket case studies.

**Architecture:** Keep the existing Next.js application and canonical project routes. Split stable personal facts from role-specific copy, add a role-aware shared shell, and build the AI experience from dedicated `components/ai/*` components plus an isolated CSS module. Reuse the unchanged avatar and existing case-study facts; do not reuse the full-stack homepage composition.

**Tech Stack:** Next.js 16.2.4 App Router, React 19.2.4, TypeScript 5, CSS Modules, `next/image`, native IntersectionObserver and CSS animation, Node test runner.

**Spec:** `docs/superpowers/specs/2026-09-10-ai-portfolio-design.md`

## Global constraints

- Read the approved spec before implementation.
- Before changing App Router pages, metadata, navigation, or CSS, read `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`, `04-linking-and-navigating.md`, `11-css.md`, and `14-metadata-and-og-images.md`; use `context7-mcp` if current framework behavior remains unclear.
- Before production code, use `superpowers:test-driven-development`: write one failing test, confirm the expected failure, implement the smallest passing change, then refactor.
- If any test, runtime behavior, or visual result is unexpected, use `superpowers:systematic-debugging` before proposing a fix.
- At implementation start, apply `frontend-taste` and `ui-ux-pro-max` using the approved Inference Notebook design lock; do not restart visual direction discovery.
- Work in the current worktree; do not create another worktree unless Milind explicitly requests it.
- Preserve the dirty worktree and unrelated user changes.
- Do not add dependencies. Native CSS, React, and browser APIs are sufficient.
- The AI portfolio must be a standalone visual composition, not a recolored full-stack homepage.
- Keep the avatar asset unchanged: `/images/avatar/student-developer-portrait-v2.webp`.
- Keep `/work/feedbackos` and `/work/medmarket` canonical; do not add `/ai/work/*` routes.
- Do not create `/profile.json`, `/resume-context`, or equivalent public structured-data routes.
- Do not expose the private college email in source, generated HTML, assets, tests, docs, or logs.
- Do not show a résumé link in the AI experience until an AI-specific résumé exists.
- Do not describe TruthLens as validated or accurate. Show the rejected LIAR F1 `0.5648`, required gate `0.75`, and non-release decision.
- No generic AI icons, emoji icons, neural-network particles, purple-neon mesh gradients, glassmorphism, sci-fi typography, cursor replacement, or scroll hijacking.
- All pointer-only effects need keyboard equivalents. Respect `prefers-reduced-motion`.
- Never commit, stage, push, publish, or deploy without Milind's explicit approval at the action boundary.

## Planned file structure

### Create

- `data/profile.ts` — stable public identity, education, contact, avatar, and social destinations.
- `data/ai-portfolio.ts` — AI positioning, project evidence, capabilities, supporting work, and contact copy.
- `app/ai/page.tsx` — metadata and route entry for the AI portfolio.
- `app/work/truthlens/page.tsx` — metadata and route entry for the TruthLens case study.
- `components/RoleSwitch.tsx` — pathname-aware `Full-stack / AI` navigation.
- `components/ai/AiPortfolio.tsx` — seven-section AI homepage composition.
- `components/ai/AiHero.tsx` — identity-first hero and unchanged avatar.
- `components/ai/TruthLensPreview.tsx` — flagship experiment-log preview.
- `components/ai/AiCapabilityMap.tsx` — evidence-linked capability map.
- `components/ai/AppliedAiStudies.tsx` — FeedbackOS and MedMarket AI-specific entries.
- `components/ai/AiRange.tsx` — compact RouteLens, PM2.5, and open-source evidence.
- `components/ai/AiCurrentChapter.tsx` — education and personal note.
- `components/ai/TruthLensCaseStudy.tsx` — full experiment-log case study.
- `components/ai/AiMotion.tsx` — client-side visibility, hidden-document pause, and reduced-motion coordination.
- `components/ai/ai.module.css` — isolated Inference Notebook layout, tokens, responsive rules, and motion.
- `public/images/projects/truthlens-landing.webp` — authentic capture from the approved live interface.
- `public/images/projects/truthlens-dashboard.webp` — authentic or clearly seeded local render from current TruthLens source.

### Modify

- `data/portfolio.ts` — consume/re-export shared identity data without changing existing public facts.
- `components/SiteHeader.tsx` — include the role switch and role-aware section links.
- `components/SiteFooter.tsx` — render AI-specific contact copy and omit the résumé on AI routes.
- `components/CaseEvidence.tsx` — add explicit AI evidence to FeedbackOS and MedMarket canonical pages.
- `app/globals.css` — only shared shell/role-switch styles; keep AI page styling in its module.
- `tests/portfolio.test.mjs` — route, evidence, privacy, accessibility, asset, motion, and regression coverage.
- `README.md` — document new routes, evidence boundary, and verification commands.
- `docs/portfolio-evidence.md` — record TruthLens provenance, rejected release evidence, approved links, and claim limits.

## Task 1: Establish shared identity and role-aware routes

**Files:**

- Create: `data/profile.ts`
- Create: `data/ai-portfolio.ts`
- Create: `components/RoleSwitch.tsx`
- Create: `app/ai/page.tsx`
- Modify: `data/portfolio.ts`
- Modify: `components/SiteHeader.tsx`
- Modify: `components/SiteFooter.tsx`
- Modify: `app/globals.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- Produces `publicProfile`, `education`, and `destinations` from `data/profile.ts`.
- Produces `aiProfile`, `truthLens`, `aiStudies`, `aiCapabilities`, and `aiRange` from `data/ai-portfolio.ts`.
- Produces `<RoleSwitch />`, which uses `usePathname()` and emits two Next.js links with `aria-current="page"` only on the active portfolio root.
- `SiteHeader` and `SiteFooter` derive AI context from `/ai` and `/work/truthlens`; shared case-study routes remain project-centric.

- [ ] **Step 1: Add a failing route-and-shell test**

Append a test that makes the approved shell contract executable:

```js
test("AI portfolio has an independent role-aware shell", async () => {
  const { response, html } = await page("/ai");
  assert.equal(response.status, 200);
  assert.ok(html.includes("I build with AI. I don’t outsource judgment to it."));
  assert.ok(html.includes('href="/"'));
  assert.ok(html.includes('href="/ai"'));
  assert.ok(html.includes('aria-current="page"'));
  assert.ok(!html.includes("Current résumé"));
  assert.ok(!html.includes("Milind_Bansal_Full_Stack_Resume.pdf"));
});
```

- [ ] **Step 2: Run the test and confirm the expected failure**

Run:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3017
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

Expected: FAIL because `/ai` returns `404`.

- [ ] **Step 3: Extract stable public identity data**

Create `data/profile.ts` with this shape:

```ts
export const publicProfile = {
  name: "Milind Bansal",
  location: "India",
  email: "milindsk8r@gmail.com",
  avatar: "/images/avatar/student-developer-portrait-v2.webp",
} as const;

export const education = {
  degree: "B.Tech in Computer Science and Artificial Intelligence",
  institution: "Newton School of Technology at Rishihood University",
  period: "2024–2028",
  gpa: "CGPA: 9.28/10",
  minor: "Finance minor",
} as const;

export const destinations = {
  github: "https://github.com/MilindDevX",
  linkedin: "https://www.linkedin.com/in/milind-bansal-177606244/",
  fullStackResume: "/docs/Milind_Bansal_Full_Stack_Resume.pdf",
} as const;
```

Modify `data/portfolio.ts` to consume these constants while preserving its existing `profile` and `destinations.resume` interface so the full-stack page does not change behavior.

- [ ] **Step 4: Add the AI content contract**

Create `data/ai-portfolio.ts` with readonly objects for:

```ts
export const aiProfile = {
  role: "Applied AI engineer",
  label: "MILIND BANSAL · APPLIED AI ENGINEER",
  headline: "I build with AI. I don’t outsource judgment to it.",
  introduction: "I’m Milind, a Computer Science and AI student interested in the whole journey—from training models to turning uncertain outputs into software people can actually use.",
  availability: "Available for AI internships, open-source collaboration, and carefully scoped freelance work.",
} as const;
```

Add TruthLens, FeedbackOS, MedMarket, the capability map, supporting work, education explanation, interests, and AI contact copy exactly within the evidence boundaries in the spec. Do not add model accuracy claims beyond the rejected OOD result.

- [ ] **Step 5: Implement the role switch and route-aware shell**

Create `RoleSwitch.tsx` as a small client component:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function RoleSwitch() {
  const pathname = usePathname();
  const active = pathname === "/ai" || pathname.startsWith("/work/truthlens") ? "ai" : pathname === "/" || pathname === "/full-stack" ? "full-stack" : undefined;

  return (
    <nav className="role-switch" aria-label="Portfolio role">
      <Link href="/" aria-current={active === "full-stack" ? "page" : undefined}>Full-stack</Link>
      <Link href="/ai" aria-current={active === "ai" ? "page" : undefined}>AI</Link>
    </nav>
  );
}
```

Add it to `SiteHeader`. Use a minimal `usePathname()` helper inside `SiteHeader` and `SiteFooter`, or a focused shared hook local to those files, to point Work/About/Contact to `/ai#...` in AI context and to omit the full-stack résumé from the AI footer. Do not add a generalized navigation framework.

- [ ] **Step 6: Add the smallest `/ai` route shell**

Return an accessible `<main id="main-content" className="ai-portfolio">` containing the approved headline and temporary semantic section landmarks. These landmarks will be replaced task-by-task; do not copy markup from `app/page.tsx`.

- [ ] **Step 7: Run the focused test and full regression suite**

Run the same server-backed test command.

Expected: PASS, including all existing full-stack route, privacy, asset, and case-study tests.

- [ ] **Step 8: Review the diff and request commit approval**

Run:

```bash
git diff -- data/profile.ts data/ai-portfolio.ts components/RoleSwitch.tsx app/ai/page.tsx data/portfolio.ts components/SiteHeader.tsx components/SiteFooter.tsx app/globals.css tests/portfolio.test.mjs
git status --short
```

Stop and request Milind's explicit approval before any staging or commit. If approved, use `feat(portfolio): add role-aware AI route foundation`.

## Task 2: Build the standalone Inference Notebook hero and canvas

**Files:**

- Create: `components/ai/AiPortfolio.tsx`
- Create: `components/ai/AiHero.tsx`
- Create: `components/ai/ai.module.css`
- Modify: `app/ai/page.tsx`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- `<AiPortfolio />` owns the first six AI sections; the role-aware `SiteFooter` supplies the seventh contact section outside `<main>`.
- `<AiHero />` consumes `aiProfile`, `publicProfile`, and the unchanged avatar path.
- `ai.module.css` contains AI-only tokens and must not style the full-stack homepage through bare global selectors.

- [ ] **Step 1: Add a failing identity-and-design-boundary test**

```js
test("AI hero is identity-first and uses the approved unchanged avatar", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes("MILIND BANSAL · APPLIED AI ENGINEER"));
  assert.ok(html.includes("I build with AI. I don’t outsource judgment to it."));
  assert.ok(html.includes("student-developer-portrait-v2.webp"));
  assert.equal(html.split('alt="Illustrated student developer avatar"').length - 1, 1);
  assert.ok(!html.includes("My favorite AI result"));
  assert.ok(!html.includes("neural network"));
});
```

- [ ] **Step 2: Confirm it fails before the component exists**

Run the server-backed portfolio test and confirm the missing label/avatar-count assertion fails.

- [ ] **Step 3: Implement the six-section main composition boundary**

`AiPortfolio.tsx` establishes these IDs exactly once:

```tsx
<main id="main-content" className={styles.portfolio}>
  <AiHero />
  <section id="ai-work" aria-labelledby="ai-work-title"><h2 id="ai-work-title">Can a model spot misinformation?</h2></section>
  <section id="capabilities" aria-labelledby="capabilities-title"><h2 id="capabilities-title">What I actually built</h2></section>
  <section id="applied-ai" aria-labelledby="applied-ai-title"><h2 id="applied-ai-title">AI inside complete products</h2></section>
  <section id="range" aria-labelledby="range-title"><h2 id="range-title">Beyond models</h2></section>
  <section id="ai-about" aria-labelledby="ai-about-title"><h2 id="ai-about-title">Current chapter</h2></section>
</main>
```

Later tasks replace these minimal headings with their complete approved components. The role-aware footer remains outside `<main>`, keeps `id="contact"`, and provides the seventh contact section specified by the design.

- [ ] **Step 4: Implement the hero**

Build a new asymmetric layout: role label and headline on the left, supporting copy and availability beneath, and the unchanged avatar inside a quiet editorial cutout. Do not import `HeroAssembly` or reuse its class names.

- [ ] **Step 5: Establish scoped design tokens**

Inside `.portfolio`, define:

```css
--ai-paper: #e6e0d4;
--ai-paper-raised: #f1ede5;
--ai-ink: #202126;
--ai-muted: #65646f;
--ai-rust: #a84f39;
--ai-cobalt: #3f64a8;
--ai-rule: color-mix(in srgb, var(--ai-ink) 22%, transparent);
```

Use pseudo-elements for extremely low-contrast rust/cobalt probability stains. Use no purple. Keep normal text contrast at least 4.5:1.

- [ ] **Step 6: Add route metadata**

In `app/ai/page.tsx`, export metadata with title `Milind Bansal — Applied AI engineer` and a specific description about model training, evaluation, and dependable product integration. Do not change full-stack metadata.

- [ ] **Step 7: Run tests, typecheck, and a production build**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
npm run typecheck
npm run build
```

Expected: all pass.

- [ ] **Step 8: Visually inspect the hero before proceeding**

Inspect at 375px, 768px, 1024px, and 1440px. Verify no horizontal overflow, readable headline wrapping, one avatar, no clipped focus indicators, and no resemblance to the full-stack hero composition.

- [ ] **Step 9: Review the diff and request commit approval**

Stop before staging. If approved, use `feat(ai-portfolio): build inference notebook hero`.

## Task 3: Add authentic TruthLens visual assets and flagship preview

**Files:**

- Create: `public/images/projects/truthlens-landing.webp`
- Create: `public/images/projects/truthlens-dashboard.webp`
- Create: `components/ai/TruthLensPreview.tsx`
- Modify: `components/ai/AiPortfolio.tsx`
- Modify: `components/ai/ai.module.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- `<TruthLensPreview />` consumes `truthLens` from `data/ai-portfolio.ts`.
- It links to `/work/truthlens`, the approved live interface, and source repository.
- Images use `next/image` with explicit dimensions and accurate alt text.

- [ ] **Step 1: Add failing flagship and asset tests**

```js
test("TruthLens leads the AI portfolio with honest release evidence", async () => {
  const { html } = await page("/ai");
  assert.ok(html.indexOf("TruthLens") < html.indexOf("FeedbackOS"));
  for (const fact of ["0.5648", "0.75", "rejected", "fail-closed"])
    assert.ok(html.toLowerCase().includes(fact.toLowerCase()), `Missing TruthLens fact: ${fact}`);
  assert.ok(html.includes('href="/work/truthlens"'));
  assert.ok(html.includes('href="https://github.com/MilindDevX/TruthLens"'));
  assert.ok(html.includes('href="https://frontend-ten-theta-81.vercel.app/"'));
});

test("TruthLens authentic captures ship as optimized assets", async () => {
  for (const asset of [
    "/images/projects/truthlens-landing.webp",
    "/images/projects/truthlens-dashboard.webp",
  ]) assert.equal((await get(asset)).status, 200, `${asset} must be public`);
});
```

- [ ] **Step 2: Confirm expected failures**

Run the focused portfolio tests. Expected: missing TruthLens content and assets.

- [ ] **Step 3: Capture the approved live landing page**

Open `https://frontend-ten-theta-81.vercel.app/` at 1440×900. Capture the current public landing view. Crop only browser chrome, preserve the real interface, convert losslessly or at high-quality WebP, and save it as `truthlens-landing.webp`.

- [ ] **Step 4: Capture an honest dashboard state**

First try an existing non-sensitive demo state. If authentication blocks it, run the current TruthLens frontend locally and render a clearly seeded fixture through its existing presentation components. Do not create an external account, transmit private data, invent functionality, or label seeded values as users/traction. Save the result as `truthlens-dashboard.webp` and document its origin in `docs/portfolio-evidence.md`.

- [ ] **Step 5: Implement the experiment-log preview**

Render the preview in this order:

1. personal question
2. training baseline
3. held-out/OOD evaluation
4. `0.5648` versus `0.75`
5. rejected artifact
6. fail-closed serving

Use one screenshot as the primary specimen and the second as supporting evidence. The rejected result must look like a deliberate release decision, not a failure hidden in fine print.

- [ ] **Step 6: Run tests and inspect responsive image behavior**

Run the portfolio tests, typecheck, and build. Inspect the preview at all target widths; confirm reserved image dimensions prevent layout shift.

- [ ] **Step 7: Review the diff and request commit approval**

Stop before staging. If approved, use `feat(ai-portfolio): present truthlens release evidence`.

## Task 4: Build the TruthLens experiment-log case study

**Files:**

- Create: `app/work/truthlens/page.tsx`
- Create: `components/ai/TruthLensCaseStudy.tsx`
- Modify: `components/ai/ai.module.css`
- Modify: `components/SiteHeader.tsx`
- Modify: `components/SiteFooter.tsx`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- `<TruthLensCaseStudy />` consumes only `truthLens` and shared profile destinations.
- It uses the AI visual module but remains a semantic standalone case study.
- Its next-work navigation returns to `/ai#applied-ai`; it does not enter the full-stack project carousel.

- [ ] **Step 1: Add a failing case-study contract test**

```js
test("TruthLens has a complete experiment-log case study", async () => {
  const { response, html } = await page("/work/truthlens");
  assert.equal(response.status, 200);
  for (const section of [
    "The question",
    "Dataset provenance",
    "Baseline",
    "Out-of-distribution evaluation",
    "Release decision",
    "Serving boundary",
    "Explainability",
    "Next experiment",
  ]) assert.ok(html.includes(section), `TruthLens missing ${section}`);
  assert.ok(html.includes("0.5648"));
  assert.ok(html.includes("0.75"));
  assert.ok(html.toLowerCase().includes("not uploaded"));
});
```

- [ ] **Step 2: Run and confirm the route fails with `404`**

Use the server-backed test command. Do not implement until the failure is observed.

- [ ] **Step 3: Implement the case-study route and metadata**

Set a specific page title and description. Render `TruthLensCaseStudy`; do not force TruthLens into the existing generic `CaseStudyShell` because its experiment-log structure is intentionally different.

- [ ] **Step 4: Implement the ten-step experiment log**

Use semantic sections and real evidence from the repository. Include the source and live-interface distinction. State:

- ISOT label provenance was corrected before retraining.
- LIAR was treated as OOD validation.
- The experiment missed the release gate.
- The artifact was retained for investigation only, not uploaded or activated.
- The API refuses inference without a valid baseline.
- SHAP explains baseline token contribution but does not prove factual truth.
- Drift monitoring detects distribution change but does not guarantee calibration.

- [ ] **Step 5: Add authentic visuals and accessible transcripts**

Use both TruthLens images. Add concise `<figcaption>` elements and a `<details>` transcript for any important information embedded in screenshots.

- [ ] **Step 6: Run tests, typecheck, build, and visual checks**

Verify desktop/mobile section rhythm, heading order, breadcrumb meaning, keyboard focus, and link destinations.

- [ ] **Step 7: Review the diff and request commit approval**

Stop before staging. If approved, use `feat(truthlens): add evidence-led experiment case study`.

## Task 5: Add the capability map and applied-AI project studies

**Files:**

- Create: `components/ai/AiCapabilityMap.tsx`
- Create: `components/ai/AppliedAiStudies.tsx`
- Modify: `components/ai/AiPortfolio.tsx`
- Modify: `components/ai/ai.module.css`
- Modify: `components/CaseEvidence.tsx`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- `<AiCapabilityMap />` renders capabilities from `aiCapabilities`, each with a project evidence link.
- `<AppliedAiStudies />` renders FeedbackOS then MedMarket with their existing authentic images and canonical case links.
- `CaseEvidence` remains typed against the existing full-stack `projects` union.

- [ ] **Step 1: Add failing evidence-linkage tests**

```js
test("AI capabilities are linked to real project evidence", async () => {
  const { html } = await page("/ai");
  for (const capability of [
    "Model training",
    "Evaluation and release gates",
    "Explainability",
    "Queued AI workflows",
    "Schema validation",
    "Fallible extraction",
  ]) assert.ok(html.includes(capability), `Missing capability: ${capability}`);
  assert.ok(html.indexOf("FeedbackOS") < html.indexOf("MedMarket"));
  assert.ok(!html.includes("skill-level"));
  assert.ok(!html.includes("progressbar"));
});

test("shared case studies expose their AI boundaries", async () => {
  const feedback = await page("/work/feedbackos");
  const market = await page("/work/medmarket");
  for (const phrase of ["malformed", "low-confidence", "rate-limited"])
    assert.ok(feedback.html.toLowerCase().includes(phrase));
  for (const phrase of ["extraction", "unreadable", "human verification"])
    assert.ok(market.html.toLowerCase().includes(phrase));
});
```

- [ ] **Step 2: Confirm the tests fail on missing capability and boundary copy**

Run the server-backed portfolio tests and record the exact assertions.

- [ ] **Step 3: Implement the capability map**

Use a definition list or linked evidence rows. Each row names a capability, project, and concrete boundary. No icons, percentages, badges, or self-ratings.

- [ ] **Step 4: Implement FeedbackOS and MedMarket studies**

Create two compositionally different studies rather than repeated cards. FeedbackOS should visualize queue → validation → review. MedMarket should visualize extraction → unreadable state → human check → catalogue rule. Reuse existing authentic screenshots and canonical links.

- [ ] **Step 5: Enhance canonical case evidence**

Add concise AI-specific evidence blocks to `CaseEvidence.tsx`:

- FeedbackOS: malformed output, low confidence, delay/rate limit, and organization scope.
- MedMarket: extraction assistance, unreadable state, human verification, and non-AI catalogue invariants.

Do not change RouteLens behavior or claim either product has users/traction.

- [ ] **Step 6: Run tests, typecheck, build, and visual checks**

Verify the AI page remains project-first and the canonical pages still satisfy every previous full-stack case-study test.

- [ ] **Step 7: Review the diff and request commit approval**

Stop before staging. If approved, use `feat(ai-portfolio): link capabilities to project evidence`.

## Task 6: Add range, current chapter, and integrated contact

**Files:**

- Create: `components/ai/AiRange.tsx`
- Create: `components/ai/AiCurrentChapter.tsx`
- Modify: `components/ai/AiPortfolio.tsx`
- Modify: `components/ai/ai.module.css`
- Modify: `components/SiteFooter.tsx`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- `<AiRange />` consumes `aiRange` and labels every item by evidence type.
- `<AiCurrentChapter />` consumes shared `education` and AI-specific education/interests copy.
- The AI footer uses the same paper canvas and exposes only public contact/social destinations.

- [ ] **Step 1: Add failing range, education, and privacy tests**

```js
test("AI portfolio keeps supporting evidence compact and education singular", async () => {
  const { html } = await page("/ai");
  for (const fact of ["RouteLens", "Beijing PM2.5", "Hacktoberfest", "Finance minor"])
    assert.ok(html.includes(fact), `Missing supporting fact: ${fact}`);
  assert.equal(html.split("Newton School of Technology at Rishihood University").length - 1, 1);
  assert.equal(html.split("CGPA: 9.28/10").length - 1, 1);
  assert.ok(html.includes("mailto:milindsk8r@gmail.com"));
  assert.ok(!html.toLowerCase().includes("marvel"));
});
```

Extend the existing private-address test to include `/ai` and `/work/truthlens`.

- [ ] **Step 2: Confirm expected missing-content failures**

Run the server-backed tests before implementation.

- [ ] **Step 3: Implement the compact range section**

Render three evidence rows:

- RouteLens — engineering system
- Beijing PM2.5 — team data coursework with Milind's exact role
- BlogApp — one accepted Hacktoberfest UI contribution

Do not add the RL hackathon.

- [ ] **Step 4: Implement Current chapter**

Render education once. Explain the Finance minor in one plain sentence as complementary study in how products, incentives, and decisions interact; do not imply a finance degree or professional expertise.

Add one short personal paragraph covering interests without a list wall. Keep Marvel wording absent.

- [ ] **Step 5: Implement the integrated AI contact ending**

Use AI-specific copy welcoming internships, open-source work, and scoped freelance projects in that order. Keep the paper background continuous. Omit the résumé link only in AI context; preserve it on the full-stack homepage.

- [ ] **Step 6: Run tests and visual checks**

Verify education is singular, footer color is continuous, long email wrapping works at 375px, and full-stack footer behavior remains unchanged.

- [ ] **Step 7: Review the diff and request commit approval**

Stop before staging. If approved, use `feat(ai-portfolio): add personal context and contact`.

## Task 7: Implement controlled passive and active motion

**Files:**

- Create: `components/ai/AiMotion.tsx`
- Modify: `components/ai/AiPortfolio.tsx`
- Modify: `components/ai/TruthLensPreview.tsx`
- Modify: `components/ai/AiCapabilityMap.tsx`
- Modify: `components/ai/ai.module.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- `<AiMotion />` is a client boundary that observes `[data-ai-reveal]`, applies `data-visible="true"` once, and applies `data-paused="true"` while `document.hidden`.
- Passive fields are CSS pseudo-elements; React does not update them per frame.
- Attribution terms use semantic links or buttons when they perform an action; purely descriptive terms remain non-interactive and reveal with the parent section.

- [ ] **Step 1: Add failing motion-contract tests**

```js
test("AI motion has passive, active, and reduced-motion contracts", async () => {
  const source = await readFile(new URL("../components/ai/AiMotion.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.ok(source.includes("IntersectionObserver"));
  assert.ok(source.includes("visibilitychange"));
  assert.ok(source.includes("document.hidden"));
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.ok(!css.includes("cursor: none"));
  assert.ok(!css.includes("scroll-behavior: smooth"));
});
```

- [ ] **Step 2: Confirm the source files are missing and the test fails**

Run `npm run test:portfolio` against the running production server.

- [ ] **Step 3: Implement the client motion coordinator**

Use one IntersectionObserver and one `visibilitychange` listener. Reveal each target once and disconnect it. Avoid per-element scroll listeners and React state updates during animation.

- [ ] **Step 4: Implement passive motion**

Animate only transforms and opacity on large pseudo-elements. Use 24–40 second alternate cycles, tiny movement, and no high-frequency grain flicker. Pause animations when `[data-paused="true"]` is present.

- [ ] **Step 5: Implement active motion**

- Assemble the hero in one orchestrated load sequence.
- Draw the TruthLens evaluation curve as its section enters.
- Reveal evidence rows in order.
- Reveal screenshot annotations with their associated figure.
- Provide visible focus behavior for every actual control.

- [ ] **Step 6: Implement reduced-motion final states**

Inside the media query, set all animated content to final opacity/transform, disable animation and transition, and keep diagrams legible. Do not hide decoration that carries textual meaning.

- [ ] **Step 7: Run automated and manual motion verification**

Run tests, typecheck, and build. In Chrome:

1. Observe normal load and scroll choreography.
2. Verify passive fields remain subtle during reading.
3. Switch tabs and confirm passive motion pauses.
4. Enable reduced motion and reload.
5. Verify all content appears immediately.
6. Test keyboard navigation without relying on hover.

- [ ] **Step 8: Review the diff and request commit approval**

Stop before staging. If approved, use `feat(ai-portfolio): add accessible notebook motion`.

## Task 8: Update durable evidence and route documentation

**Files:**

- Modify: `README.md`
- Modify: `docs/portfolio-evidence.md`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- README is the route and local-verification reference.
- `portfolio-evidence.md` is the authoritative public-claim boundary.

- [ ] **Step 1: Add a failing documentation test**

```js
test("documentation records AI routes and TruthLens evidence limits", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  const evidence = await readFile(new URL("../docs/portfolio-evidence.md", import.meta.url), "utf8");
  assert.ok(readme.includes("`/ai`"));
  assert.ok(readme.includes("`/work/truthlens`"));
  assert.ok(evidence.includes("0.5648"));
  assert.ok(evidence.includes("0.75"));
  assert.ok(evidence.toLowerCase().includes("not uploaded"));
});
```

- [ ] **Step 2: Confirm the documentation test fails**

Run `npm run test:portfolio`. Expected: missing route and evidence statements.

- [ ] **Step 3: Update README**

Document:

- `/ai`
- `/work/truthlens`
- shared canonical FeedbackOS and MedMarket case studies
- role switch behavior
- AI visual/motion summary
- unchanged local verification commands
- no public structured-profile endpoints

- [ ] **Step 4: Update the evidence ledger**

Record:

- repository and approved live-interface URLs
- solo ownership and personal-curiosity origin confirmed by Milind
- current source technologies
- corrected dataset provenance requirement
- rejected `0.5648` LIAR F1 versus `0.75` gate
- artifact not uploaded or activated
- screenshot origins and whether any dashboard view is seeded
- prohibited claims: validated detector, guaranteed calibration, production accuracy, users, customers, or traction

- [ ] **Step 5: Run the full verification suite**

```bash
npm run lint
npm run typecheck
npm run build
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
git diff --check
```

Expected: all pass and `git diff --check` prints nothing.

- [ ] **Step 6: Review docs against rendered pages**

Check every changed public claim against the evidence ledger and TruthLens source. Remove stale statements from affected docs before handoff.

- [ ] **Step 7: Review the diff and request commit approval**

Stop before staging. If approved, use `docs(portfolio): document AI evidence boundaries`.

## Task 9: Final responsive, accessibility, and regression review

**Files:**

- Modify only files proven necessary by failures found during review.
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- This task changes no architecture. It verifies the approved experience end to end.

- [ ] **Step 1: Establish a clean verification baseline**

Run:

```bash
git status --short
npm run lint
npm run typecheck
npm run build
```

Record exact failures. If any fail, invoke `superpowers:systematic-debugging` before editing.

- [ ] **Step 2: Start the production build and run route tests**

```bash
npm run start -- --hostname 127.0.0.1 --port 3017
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

Expected: every existing and new test passes.

- [ ] **Step 3: Inspect all affected routes**

At 375px, 768px, 1024px, and 1440px inspect:

- `/`
- `/ai`
- `/work/truthlens`
- `/work/feedbackos`
- `/work/medmarket`

Check composition, text wrapping, image crop, overflow, header/footer continuity, role-switch state, and screenshot authenticity.

- [ ] **Step 4: Verify interactions and accessibility**

- Tab through every link and control.
- Confirm visible focus is never clipped.
- Confirm pointer effects have keyboard equivalents.
- Confirm headings and landmarks form a coherent outline.
- Confirm normal-text contrast is at least 4.5:1.
- Confirm images have useful alt text and embedded evidence has transcripts.
- Confirm reduced motion produces immediate final states.
- Confirm zoom at 200% remains usable.

- [ ] **Step 5: Run the AI-slop and standalone-identity gate**

Reject the result if any of these are true:

- `/ai` reads as the full-stack homepage with new colors.
- Purple/cyan glow communicates “AI” more than project evidence does.
- Sections collapse into a uniform card grid.
- Generic icons or neural-network imagery appear.
- Motion competes with reading.
- Copy could belong to any AI engineer.
- TruthLens's rejected evaluation is minimized or presented as success.

- [ ] **Step 6: Inspect the complete diff**

```bash
git diff --stat
git diff --check
git diff
git status --short
```

Confirm only approved portfolio files changed, no private address appears, and unrelated user changes remain intact.

- [ ] **Step 7: Produce the risk report**

Report:

- commands run and exact pass/fail state
- routes visually inspected and viewport sizes
- whether TruthLens dashboard imagery is public or seeded
- any live-demo mismatch or unavailable backend behavior
- remaining content, performance, or accessibility risks
- deployment status

- [ ] **Step 8: Stop before publication**

Do not commit, push, publish, or deploy. Ask Milind for the exact next action. Production deployment requires separate explicit approval after local verification.
