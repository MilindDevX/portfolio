# AI Portfolio Signal Cinema Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the rejected Inference Notebook AI experience with the approved Signal Cinema portfolio and TruthLens case study while preserving verified evidence and the full-stack portfolio.

**Architecture:** Keep the existing Next.js App Router and build-time evidence modules. Add a route-aware AI header, rebuild `components/ai/*` into full-bleed cinematic sections, and coordinate document visibility, active chapter state, and scroll-timeline fallback through one client component. Use native sticky positioning and CSS scroll-driven animation first; keep all public content server-rendered.

**Tech Stack:** Next.js 16.2.4 App Router, React 19.2.4, TypeScript 5, CSS Modules, `next/image`, native CSS scroll timelines, IntersectionObserver fallback, Node test runner.

**Spec:** `docs/superpowers/specs/2026-09-11-ai-portfolio-signal-cinema-redesign.md`

## Global Constraints

- Treat `.superpowers/brainstorm/66078-1789135146/content/signal-cinema-v2.html` as the approved visual reference, not production code.
- Preserve verified copy and destinations from `data/profile.ts` and `data/ai-portfolio.ts`.
- Preserve exact TruthLens facts: held-out LIAR F1 `0.5648`, release gate `0.75`, rejected artifact, not uploaded, not activated, fail-closed serving.
- Preserve the unchanged avatar `/images/avatar/student-developer-portrait-v2.webp`.
- Keep `/`, `/work/feedbackos`, and `/work/medmarket` in their existing full-stack visual system except for replacing the segmented role switch with a plain AI-edition link.
- Remove the segmented `Full-stack / AI` switch from every route.
- Render no AI résumé link until an AI-specific résumé exists.
- Do not create `/profile.json`, `/resume-context`, `/ai/work/*`, or another public structured résumé route.
- Publish only `milindsk8r@gmail.com`; keep the private college address absent from source, output, assets, tests, and docs.
- Use no cards, glass, shadows, pills, generic icons, particles, fake progress, looping metrics, slide-in screenshots, cursor replacement, or scroll hijacking.
- Use no new dependency unless native scroll animation fails documented browser verification and Milind approves the dependency separately.
- All public content must exist in server HTML before client enhancement.
- Every pointer response needs a keyboard equivalent. Respect `prefers-reduced-motion` and document visibility.
- Work in the current dirty worktree. Preserve unrelated files and changes.
- Before every production edit: add a failing test, run it, confirm the intended failure, then make the smallest passing implementation.
- If behavior differs from expectation, establish root cause with `superpowers:systematic-debugging` before editing.
- Do not stage, commit, push, publish, or deploy without Milind's explicit approval at that action boundary.

## Planned File Structure

### Create

- `components/ai/AiHeader.tsx` — route-aware Signal Cinema navigation and active chapter output.
- `components/ai/AiContact.tsx` — AI-only contact finale without résumé content.

### Rewrite in place

- `components/ai/AiPortfolio.tsx` — ordered Signal Cinema composition and shared motion boundary.
- `components/ai/AiHero.tsx` — full-viewport identity scene and unchanged avatar.
- `components/ai/TruthLensPreview.tsx` — long sticky flagship sequence.
- `components/ai/AiCapabilityMap.tsx` — full-width evidence track rather than a skill grid.
- `components/ai/AppliedAiStudies.tsx` — two short, visually distinct product scenes.
- `components/ai/AiRange.tsx` — compact engineering range reel.
- `components/ai/AiCurrentChapter.tsx` — single education and personal chapter.
- `components/ai/TruthLensCaseStudy.tsx` — Signal Cinema deep case study.
- `components/ai/AiMotion.tsx` — active chapter, pause state, and no-scroll-timeline fallback.
- `components/ai/ai.module.css` — complete Signal Cinema tokens, layout, motion, fallbacks, and responsive rules.

### Modify

- `components/SiteHeader.tsx` — select AI header for `/ai` and `/work/truthlens`; replace full-stack role switch with plain AI-edition link.
- `components/SiteFooter.tsx` — render `AiContact` for AI routes; preserve existing full-stack footer.
- `app/globals.css` — remove role-switch rules in Task 1, remove rejected AI footer rules in Task 6, and add only shared plain edition-link styles.
- `tests/portfolio.test.mjs` — navigation, structure, evidence, motion, fallback, privacy, and regression contracts.
- `README.md` — describe Signal Cinema routes and verification.
- `docs/portfolio-review.md` — replace stale Inference Notebook review claims with final observed behavior.
- `docs/portfolio-evidence.md` — keep evidence boundaries synchronized with rendered copy.

### Delete after reference check

- `components/RoleSwitch.tsx` — delete only after `rg -n "RoleSwitch|role-switch" app components tests` confirms no remaining consumers.

---

### Task 1: Replace segmented role navigation with route-aware edition navigation

**Files:**

- Create: `components/ai/AiHeader.tsx`
- Modify: `components/SiteHeader.tsx`
- Modify: `app/globals.css`
- Delete after verification: `components/RoleSwitch.tsx`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- `AiHeader` consumes no props and reads `usePathname()` only to choose the initial chapter label for `/ai` versus `/work/truthlens`.
- `AiMotion` later writes the active chapter into the document-level `[data-ai-chapter-output]` and `data-active-chapter` on `[data-ai-shell]`.
- `SiteHeader` renders `<AiHeader />` for `/ai` and `/work/truthlens`; other routes preserve existing navigation with one plain `AI edition ↗` link to `/ai`.

- [ ] **Step 1: Replace rejected role-switch assertions and add failing navigation tests**

In the existing `AI portfolio has an independent role-aware shell` test, remove assertions that require `Full-stack`, `AI`, `aria-current="page"`, or `Portfolio role`. Preserve its route, headline, privacy, and résumé assertions. Then add:

Add this test to `tests/portfolio.test.mjs`:

```js
test("AI routes use Signal Cinema navigation without a segmented role switch", async () => {
  for (const path of ["/ai", "/work/truthlens"]) {
    const { html } = await page(path);
    assert.ok(html.includes('data-ai-shell="true"'));
    assert.ok(html.includes('data-ai-chapter-output'));
    assert.ok(html.includes('href="/"'));
    assert.ok(html.includes("FULL-STACK EDITION"));
    assert.ok(!html.includes('aria-label="Portfolio role"'));
    assert.ok(!html.includes('class="role-switch"'));
  }
});

test("full-stack navigation exposes AI as a plain edition link", async () => {
  const { html } = await page("/");
  assert.ok(html.includes('href="/ai"'));
  assert.ok(html.includes("AI edition"));
  assert.ok(!html.includes('aria-label="Portfolio role"'));
});
```

- [ ] **Step 2: Run tests and confirm RED**

Run:

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

Expected: both new tests fail because `RoleSwitch` and `aria-label="Portfolio role"` still render.

- [ ] **Step 3: Create the AI header**

Create `components/ai/AiHeader.tsx` with this public structure:

```tsx
// ABOUTME: Fixed Signal Cinema navigation with an active chapter output and plain full-stack destination.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ai.module.css";

export function AiHeader() {
  const pathname = usePathname();
  const initialChapter = pathname.startsWith("/work/truthlens") ? "CASE STUDY" : "INTRO";

  return (
    <header className={styles.signalHeader} data-ai-shell="true">
      <Link className={styles.signalIdentity} href="/ai">MB / APPLIED AI</Link>
      <span className={styles.signalChapter} data-ai-chapter-output aria-live="off">{initialChapter}</span>
      <Link className={styles.editionLink} href="/">FULL-STACK EDITION ↗</Link>
    </header>
  );
}
```

- [ ] **Step 4: Branch the shared header**

In `components/SiteHeader.tsx`, return `<AiHeader />` before the full-stack markup when `isAi` is true. Remove `RoleSwitch`. Add a plain `Link` with class `edition-link` and text `AI edition ↗` to the full-stack header without changing its existing work/about/contact and résumé controls.

- [ ] **Step 5: Remove rejected shared styles and component**

Remove `.role-switch` declarations from `app/globals.css`. Keep the old AI-footer rules until Task 6 replaces the footer so every intermediate task remains renderable. Confirm no role-switch reference remains:

```bash
rg -n "RoleSwitch|role-switch|Portfolio role" app components tests
```

Expected: no production reference. Then delete `components/RoleSwitch.tsx` with the narrow file-removal operation approved by this spec.

- [ ] **Step 6: Run GREEN verification**

Run the focused route suite, lint, and typecheck:

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
npm run lint
npm run typecheck
```

Expected: all pass. Inspect `/` and `/ai` at 375px and 1440px before moving on.

- [ ] **Step 7: Review checkpoint**

Review only Task 1 files. Confirm full-stack composition is unchanged except for the plain edition link. Do not stage or commit.

---

### Task 2: Establish Signal Cinema canvas and identity hero

**Files:**

- Modify: `components/ai/AiPortfolio.tsx`
- Rewrite: `components/ai/AiHero.tsx`
- Rewrite foundation block: `components/ai/ai.module.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- `AiPortfolio` retains `[data-ai-portfolio]` as the client motion root.
- `AiHero` emits `data-ai-chapter="INTRO"` and passive layers marked `data-ai-passive`.
- `AiMotion` later pauses those layers by setting `data-paused="true"` on the portfolio root.

- [ ] **Step 1: Replace notebook hero assertions and add failing design-boundary tests**

Keep the existing approved headline, avatar-count, and no-project-first-line assertions. Remove requirements for notebook-specific reveal hooks before adding:

```js
test("AI hero renders the approved Signal Cinema identity scene", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes('data-ai-chapter="INTRO"'));
  assert.ok(html.includes('data-ai-passive="signal"'));
  assert.ok(html.includes('data-ai-passive="grain"'));
  assert.ok(html.includes("I build with AI. I don’t outsource judgment to it."));
  assert.equal(html.split('alt="Illustrated student developer avatar"').length - 1, 1);
});

test("AI source rejects notebook and generic card design patterns", async () => {
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  const portfolio = await readFile(new URL("../components/ai/AiPortfolio.tsx", import.meta.url), "utf8");
  for (const rejected of ["--ai-paper", "sectionPlaceholder", "probability-drift", "slide-in"])
    assert.ok(!`${css}\n${portfolio}`.includes(rejected), `Rejected pattern remains: ${rejected}`);
});
```

- [ ] **Step 2: Run tests and confirm RED**

Expected: missing `data-ai-chapter`, signal/grain layers, and rejected notebook tokens still present.

- [ ] **Step 3: Rebuild the hero markup**

Keep the H1 text and server-rendered supporting copy. Replace action-button styling with restrained text links. Render these stable hooks:

```tsx
<section id="ai-intro" data-ai-chapter="INTRO" className={styles.hero}>
  <div className={styles.signalBand} data-ai-passive="signal" aria-hidden="true" />
  <div className={styles.filmGrain} data-ai-passive="grain" aria-hidden="true" />
  <div className={styles.heroCopy}>...</div>
  <figure className={styles.heroPortrait}>...</figure>
  <a className={styles.scrollCue} href="#ai-work">SCROLL INTO THE EVIDENCE</a>
</section>
```

The avatar remains unchanged, appears once, and has no activity label or disclaimer.

- [ ] **Step 4: Replace CSS foundation**

At the top of `ai.module.css`, replace notebook tokens and paper pseudo-elements with scoped Signal Cinema variables:

```css
.portfolio {
  --signal-canvas: #070707;
  --signal-ink: #f3f0e8;
  --signal-copy: #b8b5af;
  --signal-rule: rgb(243 240 232 / 16%);
  --signal-red: #ef593f;
  --signal-blue: #526dff;
  min-height: 100svh;
  color: var(--signal-ink);
  background: var(--signal-canvas);
}
```

Add full-viewport hero composition, perceptible 8–14 second signal movement, restrained stepped grain, and accessible focus. No decorative bar or fake progress element.

- [ ] **Step 5: Run GREEN verification**

Run the focused route suite, lint, typecheck, and production build. Expected: pass.

- [ ] **Step 6: Visual checkpoint**

Compare the hero against `signal-cinema-v2.html` at 375, 768, 1024, 1440, and 1440×700. Confirm visible passive motion within five seconds, no image clipping, no old paper surface, and no project name in the first viewport headline.

---

### Task 3: Build the TruthLens scroll-controlled flagship sequence

**Files:**

- Rewrite: `components/ai/TruthLensPreview.tsx`
- Modify: `components/ai/ai.module.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- The section emits `data-ai-chapter="TRUTHLENS"`.
- Sticky root: `[data-ai-story="truthlens"]`.
- Evidence steps: `[data-ai-story-step]` with numeric `data-step` values `1` through `8`.
- Media stage: `[data-ai-sticky-media]`; figures keep existing `next/image` sources and alt text.
- Fallback coordinator reads these attributes but never rewrites evidence content.

- [ ] **Step 1: Replace entry-reveal and curve-animation assertions with failing flagship structure tests**

Preserve current TruthLens facts, source/live links, asset, proportional gate, alt-text, and privacy assertions. Remove tests that require `data-ai-reveal`, sequence numbers, or entry-triggered curve drawing. Then add:

```js
test("TruthLens is a scroll-controlled evidence sequence rather than slide-in content", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes('data-ai-chapter="TRUTHLENS"'));
  assert.ok(html.includes('data-ai-story="truthlens"'));
  assert.ok(html.includes("data-ai-sticky-media"));
  assert.equal((html.match(/data-ai-story-step/g) ?? []).length, 8);
  for (const fact of ["0.5648", "0.75", "not uploaded", "not activated", "fail-closed"])
    assert.ok(html.toLowerCase().includes(fact.toLowerCase()));
});

test("Signal Cinema uses sticky and scroll-timeline contracts", async () => {
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.match(css, /position:\s*sticky/);
  assert.match(css, /animation-timeline:\s*view\(\)/);
  assert.match(css, /@supports\s*\(animation-timeline:\s*view\(\)\)/);
  assert.ok(!css.includes("translateY(24px)"), "Generic slide-up reveal must be absent from AI CSS");
});
```

- [ ] **Step 2: Run tests and confirm RED**

Expected: story hooks and eight steps are absent; old reveal system still drives the preview.

- [ ] **Step 3: Rewrite the semantic story**

Use one section containing:

- project label, title, summary, and three destinations
- an ordered list of eight server-rendered evidence steps
- one sticky media stage containing the landing and seeded dashboard captures
- one proportional release-gate visualization with textual equivalent

Keep the exact existing evidence strings from `truthLens`; do not create new performance claims.

- [ ] **Step 4: Implement desktop scroll choreography**

Use a tall story track with a sticky media region. Bind crop, scale, saturation, and annotation opacity to a view timeline. Preserve normal document order for assistive technology; visual positioning must not reorder the DOM.

- [ ] **Step 5: Implement tablet, mobile, and short-height behavior**

- 768–1023px: shorten the story track and sticky duration.
- 375–767px: stack evidence and use short image-stick moments without side-by-side compression.
- height below 720px: disable long pinning and use a compact static flow.

- [ ] **Step 6: Run GREEN verification**

Run route tests, lint, typecheck, and build. Inspect the complete scroll at all target widths. Confirm no screenshot slides in from outside the viewport.

---

### Task 4: Replace the capability grid with an evidence-derived track

**Files:**

- Rewrite: `components/ai/AiCapabilityMap.tsx`
- Modify: `components/ai/ai.module.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- Section emits `data-ai-chapter="CAPABILITIES"`.
- Each capability remains a native link and exposes `data-evidence-project` using its existing `evidence` value.
- No client state is required.

- [ ] **Step 1: Add failing semantic tests**

```js
test("capabilities form a linked evidence track without cards or self-ratings", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes('data-ai-chapter="CAPABILITIES"'));
  assert.equal((html.match(/data-evidence-project=/g) ?? []).length, 10);
  for (const banned of ["proficiency", "percent", "skill-card", "progressbar"])
    assert.ok(!html.toLowerCase().includes(banned));
});
```

- [ ] **Step 2: Confirm RED**

Expected: chapter and evidence-project hooks are absent.

- [ ] **Step 3: Implement a full-width typographic track**

Render a semantic ordered list. Each row contains capability, one-sentence decision, and native evidence link. Vary text scale using content hierarchy, not arbitrary alternating card sizes. Add identical hover and `:focus-visible` text-layer offsets of at most 3px.

- [ ] **Step 4: Run GREEN verification**

Run tests, lint, and typecheck. Keyboard-tab through all ten evidence links and confirm focus is visible against the dark canvas.

---

### Task 5: Build distinct FeedbackOS and MedMarket product scenes

**Files:**

- Rewrite: `components/ai/AppliedAiStudies.tsx`
- Modify: `components/ai/ai.module.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- Parent section emits `data-ai-chapter="APPLIED AI"`.
- FeedbackOS scene emits `data-ai-study="feedbackos"` and retains its canonical link.
- MedMarket scene emits `data-ai-study="medmarket"` and retains its canonical link.
- Both consume `aiStudies` without adding claims.

- [ ] **Step 1: Add failing scene-contract tests**

```js
test("applied AI projects use distinct scenes and retain canonical destinations", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes('data-ai-chapter="APPLIED AI"'));
  assert.equal((html.match(/data-ai-study="feedbackos"/g) ?? []).length, 1);
  assert.equal((html.match(/data-ai-study="medmarket"/g) ?? []).length, 1);
  assert.ok(html.includes('href="/work/feedbackos"'));
  assert.ok(html.includes('href="/work/medmarket"'));
  assert.ok(html.includes("hard-coded mock fallback"));
  assert.ok(html.includes("human verification"));
});
```

- [ ] **Step 2: Confirm RED**

Expected: new chapter and study hooks are absent.

- [ ] **Step 3: Implement FeedbackOS scene**

Use a horizontal queue trace that reveals `QUEUE → VALIDATE → REVIEW` as the capture changes crop. Keep its rate-limit fallback statement visible beside the link, not hidden in a tooltip or motion-only layer.

- [ ] **Step 4: Implement MedMarket scene**

Use a vertical extraction boundary where `EXTRACT → UNREADABLE → HUMAN CHECK → CATALOGUE RULE` changes image focus. Do not reuse FeedbackOS layout or timing.

- [ ] **Step 5: Run GREEN verification**

Run tests, lint, typecheck, and inspect both scenes at 375px and 1440px. Confirm they remain shorter than TruthLens and do not behave like repeated cards.

---

### Task 6: Rebuild engineering range, personal chapter, and AI contact finale

**Files:**

- Rewrite: `components/ai/AiRange.tsx`
- Rewrite: `components/ai/AiCurrentChapter.tsx`
- Create: `components/ai/AiContact.tsx`
- Modify: `components/SiteFooter.tsx`
- Modify: `app/globals.css`
- Modify: `components/ai/ai.module.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- Range emits `data-ai-chapter="RANGE"` and consumes `aiRange`.
- Current chapter emits `data-ai-chapter="ABOUT"` and consumes `publicProfile.education`, `aiProfile.educationNote`, and `aiProfile.interests`.
- `AiContact` renders a `<footer id="contact">` and consumes public email, GitHub, LinkedIn, and `aiProfile.contact`.
- `SiteFooter` returns `<AiContact />` on AI routes and preserves existing full-stack markup otherwise.

- [ ] **Step 1: Replace notebook-footer assertions and add failing range/contact tests**

Preserve the existing public-email, opportunity-priority, education-singularity, contact-link, and no-AI-résumé assertions. Remove requirements for notebook footer tokens or notebook canvas names. Then add:

```js
test("AI range, personal chapter, and contact form one cinematic ending", async () => {
  const { html } = await page("/ai");
  for (const chapter of ["RANGE", "ABOUT", "CONTACT"])
    assert.ok(html.includes(`data-ai-chapter="${chapter}"`));
  assert.equal(html.split("CGPA: 9.28/10").length - 1, 1);
  assert.ok(html.includes("Finance minor"));
  assert.ok(html.includes("mailto:milindsk8r@gmail.com"));
  assert.ok(!html.toLowerCase().includes("résumé"));
  assert.ok(!html.toLowerCase().includes("resume"));
});
```

- [ ] **Step 2: Confirm RED**

Expected: Signal Cinema chapter hooks and dedicated AI contact are absent.

- [ ] **Step 3: Implement the range reel**

Render RouteLens, Beijing PM2.5, and the accepted BlogApp contribution in a compact typographic reel with native links. Keep `Engineering system`, `Team data coursework`, and `One accepted Hacktoberfest UI contribution` visible so none is mistaken for an AI flagship.

- [ ] **Step 4: Implement personal chapter**

Render education once and one concise interest passage. No cards, badge chips, repeated GPA, Marvel copy, or unexplained Finance-minor label.

- [ ] **Step 5: Implement AI contact**

Create a full-bleed dark finale with one strong question, opportunity priority, email, GitHub, and LinkedIn. Do not render or reserve a visible résumé placeholder.

- [ ] **Step 6: Branch shared footer**

In `SiteFooter`, return `<AiContact />` for `/ai` and `/work/truthlens`; leave the full-stack footer markup unchanged.

Remove the now-dead `.site-footer--ai`, `.footer-links--ai`, and `--ai-notebook-*` rules and tokens from `app/globals.css`. Confirm the full-stack footer still uses its existing selectors and colors.

- [ ] **Step 7: Run GREEN verification**

Run route tests, lint, typecheck, and inspect footer continuity at 375px and 1440px.

---

### Task 7: Implement meaningful passive motion, active chapters, and fallbacks

**Files:**

- Rewrite: `components/ai/AiMotion.tsx`
- Modify: `components/ai/ai.module.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- `[data-ai-portfolio]` receives `data-motion-ready`, optional `data-paused`, and optional `data-scroll-fallback`.
- `[data-ai-chapter]` supplies chapter names.
- `[data-ai-chapter-output]` displays the currently intersecting chapter.
- `[data-ai-story-step]` receives `data-active="true"` only in the no-scroll-timeline fallback.
- Use one visibility listener and at most two observers: one for chapter state, one only when fallback is required.

- [ ] **Step 1: Replace old reveal-motion assertions and add failing motion architecture tests**

Remove current tests that require `probability-drift`, `data-ai-reveal`, sequence delays, or SVG entry reveals. Preserve assertions for hidden-document pausing, semantic evidence, focus, reduced motion, and absence of a raw scroll listener. Then add:

```js
test("AI motion tracks real chapters, pauses passive layers, and provides native fallback", async () => {
  const source = await readFile(new URL("../components/ai/AiMotion.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.ok(source.includes('CSS.supports("animation-timeline: view()")'));
  assert.ok(source.includes("data-ai-chapter"));
  assert.ok(source.includes("visibilitychange"));
  assert.ok(source.includes("data-ai-story-step"));
  assert.ok(!source.includes('addEventListener("scroll"'));
  assert.match(css, /\[data-paused="true"\][^{]*\{[^}]*animation-play-state:\s*paused/s);
});

test("reduced motion resolves Signal Cinema to complete static content", async () => {
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  const block = css.match(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{[\s\S]*$/)?.[0] ?? "";
  assert.ok(block.includes("position: relative"));
  assert.ok(block.includes("animation: none"));
  assert.ok(block.includes("opacity: 1"));
  assert.ok(block.includes("transform: none"));
});
```

- [ ] **Step 2: Confirm RED**

Expected: current motion component lacks chapter output, scroll-timeline detection, and story fallback.

- [ ] **Step 3: Implement chapter state**

Observe document-level `[data-ai-chapter]` elements at a centre-weighted root margin so the contact footer outside `<main>` participates. Write the active string into `[data-ai-chapter-output]` and `data-active-chapter` on the document-level AI shell. Do not expose changing chapter text as a live announcement.

- [ ] **Step 4: Implement passive pause state**

Keep one `visibilitychange` listener. Toggle `data-paused` on the portfolio root. CSS pauses signal, grain, contrast breathing, and screenshot depth animations.

- [ ] **Step 5: Implement no-scroll-timeline fallback**

When `CSS.supports("animation-timeline: view()")` is false, set `data-scroll-fallback` and observe story steps. Mark the most visible step active; CSS uses opacity, crop, and transform transitions. Do not attach a scroll listener or update React state.

- [ ] **Step 6: Implement reduced-motion final state**

Within `prefers-reduced-motion: reduce`, stop all passive animation, remove sticky positioning, show all evidence, clear transforms and clips, and preserve the visual hierarchy.

- [ ] **Step 7: Run automated and browser verification**

Run tests, lint, typecheck, build. In Chrome verify normal motion, reduced motion, hidden-tab pause, native scroll timeline, and forced fallback. Record exact observed behavior in the task report.

---

### Task 8: Redesign the TruthLens deep case study

**Files:**

- Rewrite: `components/ai/TruthLensCaseStudy.tsx`
- Modify: `components/ai/ai.module.css`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- Case-study root uses `[data-ai-portfolio]` so the same motion coordinator and header chapter output work.
- Ten existing experiment-log entries retain IDs `truthlens-log-01` through `truthlens-log-10` so current deep links remain valid.
- Existing source/live links and authentic captures remain unchanged.

- [ ] **Step 1: Add failing case-study design tests**

```js
test("TruthLens deep case study uses Signal Cinema while preserving evidence anchors", async () => {
  const { html } = await page("/work/truthlens");
  assert.ok(html.includes('data-ai-case="truthlens"'));
  assert.ok(html.includes('data-ai-passive="signal"'));
  for (let index = 1; index <= 10; index++)
    assert.ok(html.includes(`id="truthlens-log-${String(index).padStart(2, "0")}"`));
  assert.ok(html.includes("0.5648"));
  assert.ok(html.includes("0.75"));
  assert.ok(html.includes("Result: rejected"));
});
```

- [ ] **Step 2: Confirm RED**

Expected: `data-ai-case` and passive signal layer are absent.

- [ ] **Step 3: Recompose the case study**

Build a cinematic hero, sticky experiment index, ten readable evidence chapters, authentic image interludes, and final next-experiment reflection. Preserve all evidence strings and anchor IDs. Do not reuse the homepage TruthLens sequence verbatim.

- [ ] **Step 4: Apply responsive and reduced-motion rules**

Desktop uses a sticky chapter index; mobile and reduced motion use normal document flow. Keep every log entry visible and navigable by URL fragment.

- [ ] **Step 5: Run GREEN verification**

Run the complete route suite, lint, typecheck, and build. Test the `/work/truthlens#truthlens-log-07` deep link and keyboard traversal.

---

### Task 9: Update durable documentation and remove stale AI-design claims

**Files:**

- Modify: `README.md`
- Modify: `docs/portfolio-review.md`
- Modify if rendered facts changed: `docs/portfolio-evidence.md`
- Test: `tests/portfolio.test.mjs`

**Interfaces:**

- README remains the route and local-verification reference.
- `portfolio-review.md` records observed design and QA state.
- `portfolio-evidence.md` remains the claim boundary; design wording cannot weaken it.

- [ ] **Step 1: Add failing documentation tests**

```js
test("documentation records Signal Cinema and rejects stale notebook claims", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  const review = await readFile(new URL("../docs/portfolio-review.md", import.meta.url), "utf8");
  assert.ok(readme.includes("Signal Cinema"));
  assert.ok(review.includes("scroll-controlled TruthLens"));
  assert.ok(!readme.includes("Inference Notebook"));
  assert.ok(!review.includes("Inference Notebook"));
});
```

- [ ] **Step 2: Confirm RED**

Expected: README and review still describe Inference Notebook.

- [ ] **Step 3: Update README and review**

Document Signal Cinema, native-first motion, route boundaries, reduced-motion fallback, no public structured résumé routes, and exact verification commands. Replace claims based on the rejected design.

- [ ] **Step 4: Reconcile evidence ledger**

Compare every public claim touched during redesign against `docs/portfolio-evidence.md`. Change the ledger only if wording or provenance needs clarification; do not change confirmed metrics or ownership.

- [ ] **Step 5: Run documentation and privacy checks**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
rg -n --hidden --glob '!node_modules/**' --glob '!.next/**' 'milind\.bansal2024@nst\.rishihood\.edu\.in' .
git diff --check
```

Expected: tests pass, private-email scan has no output, diff check has no output.

---

### Task 10: Final production, responsive, accessibility, and regression verification

**Files:**

- Modify only files proven necessary by a failing test or observed browser defect.
- Record: `.superpowers/sdd/2026-09-11-ai-signal-cinema/task-10-report.md`

**Interfaces:**

- This task introduces no new product interface.

- [ ] **Step 1: Record worktree baseline**

```bash
git status --short
git diff --check
```

Preserve unrelated dirty files. If a merge, rebase, or conflict exists, stop before editing.

- [ ] **Step 2: Run static verification**

```bash
npm run lint
npm run typecheck
npm run build
```

Expected: all exit zero. Treat the existing multiple-lockfile workspace-root message as a warning unless it changes build output.

- [ ] **Step 3: Start production and run route suite**

```bash
npm run start -- --hostname 127.0.0.1 --port 3017
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

Expected: every test passes against the optimized build.

- [ ] **Step 4: Inspect target routes and viewports**

Inspect `/ai` and `/work/truthlens` at:

- 375×812
- 768×1024
- 1024×768
- 1440×900
- 1440×700

Smoke-test `/`, `/work/feedbackos`, and `/work/medmarket` at 375×812 and 1440×900. Check overflow, header/footer continuity, typography wrapping, image crop, lazy loading, anchor offsets, and edition navigation.

- [ ] **Step 5: Verify interaction and accessibility paths**

- Tab through every link in `/ai` and `/work/truthlens`.
- Confirm focus outline is visible and not clipped.
- Confirm hover/focus text responses match.
- Confirm one H1 and coherent heading order.
- Confirm screenshot alt text and metric transcripts.
- Confirm text contrast at least 4.5:1.
- Confirm content remains readable with JavaScript disabled.

- [ ] **Step 6: Verify motion modes**

- Observe passive motion for at least ten seconds.
- Scroll through the full TruthLens sequence slowly and quickly.
- Switch tabs and confirm passive animation pauses.
- Emulate `prefers-reduced-motion: reduce`, reload, and confirm complete static flow.
- Force the no-scroll-timeline fallback and confirm evidence activation without a scroll listener.
- Inspect browser console for errors and warnings.

- [ ] **Step 7: Review requirements and complete diff**

Check every acceptance criterion in the approved spec. Search for rejected patterns, unsupported claims, private email, stale docs, public structured routes, and accidental full-stack visual changes.

- [ ] **Step 8: Write final report**

Record exact commands, pass counts, browser matrix, manual observations, unresolved risks, and confirmation that nothing was staged, committed, pushed, published, or deployed.

- [ ] **Step 9: Stop before Git or deployment actions**

Present the verified local result to Milind. Request separate approval before staging, committing, pushing, or deploying.
