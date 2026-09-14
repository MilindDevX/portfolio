# Clean-Sheet Full-Stack Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to execute this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Ship a clean-sheet, evidence-backed full-stack portfolio with an editorial avatar, purposeful motion, three deep case studies, and enough visible detail to support a future résumé.

**Architecture:** Next.js App Router renders public facts from one internal typed module. Static route components share only semantic shell primitives; visual compositions remain project-specific. Native CSS, SVG, and one small IntersectionObserver client leaf provide motion without a UI or icon library.

**Tech Stack:** Next.js 16.2.4, React 19.2.4, TypeScript 5, native CSS, `next/image`, Node test runner, browser automation/inspection tools, ImageGen.

**Spec:** `docs/superpowers/specs/2026-09-09-clean-sheet-full-stack-portfolio-design.md`

> **2026-09-10 polish supersession:** Milind removed the avatar's visible disclaimer and Interface/System/Data labels while retaining concise alt text and structural line motion. He also replaced the planned project specimens with the RouteLens directory home, FeedbackOS public home entry, and MedMarket seeded public-demo admin dashboard recorded in `docs/portfolio-evidence.md`. Earlier file names and avatar-label assertions below remain as execution history, not current requirements.

## Global constraints

> **Latest 2026-09-10 polish decision:** Remove the remaining decorative avatar lines, keep only its entrance motion, move the single education presentation into About as a ruled “Current chapter,” and omit Marvel from Off-screen copy. This supersedes older line-motion, standalone-education, and interest-copy steps below.

- Existing portfolio supplies verified basic facts only. Reuse none of its design, layout, animation, visual hierarchy, or narrative structure.
- Do not commit, stage, push, publish, deploy, open a PR, or send an external message.
- Do not place any private email or private evidence path in app code, assets, tests, docs, metadata, or generated output.
- Do not expose `/profile.json`, `/resume-context`, or another résumé-data endpoint.
- Do not use generic icons, an icon library, stock tech-logo clouds, gradients, glassmorphism, skill meters, or invented claims.
- Before production code, approve 11 desktop and 11 mobile visual references.
- Before each production change: failing test, confirmed failure, minimal implementation, passing test, then refactor.
- Preserve every path not listed in the manifest below.
- Use no extra worktree; agents share this worktree and must not revert one another.

## File structure

### Retain

- `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`
- `public/docs/Milind_Bansal_Full_Stack_Resume.pdf`
- `public/images/routelens.png` until a fresh verified capture supersedes it
- `docs/superpowers/specs/2026-09-09-clean-sheet-full-stack-portfolio-design.md`
- `docs/superpowers/plans/2026-09-09-clean-sheet-full-stack-portfolio.md`
- `.superpowers/brainstorm/**` until design approval is complete

### Replace

- `app/page.tsx` — landing composition only
- `app/layout.tsx` — metadata, local fonts, skip-link shell
- `app/globals.css` — complete token and responsive system
- `package.json`, `package-lock.json` — scripts and removal of unused UI/Tailwind dependencies
- `tests/portfolio.test.mjs` — route/content contract replacing obsolete disclosure assertions
- `README.md` — truthful project setup, architecture, verification, and content rules

### Create

- `app/full-stack/page.tsx` — temporary redirect
- `app/work/routelens/page.tsx`
- `app/work/feedbackos/page.tsx`
- `app/work/medmarket/page.tsx`
- `components/SiteHeader.tsx`
- `components/SiteFooter.tsx`
- `components/HeroAssembly.tsx`
- `components/ProjectSpecimen.tsx`
- `components/CaseStudyShell.tsx`
- `components/RevealOnView.tsx`
- `data/portfolio.ts`
- `docs/portfolio-evidence.md`
- `docs/portfolio-review.md`
- `docs/design-references/desktop/*.png` — 11 approved references
- `docs/design-references/mobile/*.png` — 11 approved references
- `public/fonts/bricolage-grotesque-variable.woff2`
- `public/fonts/atkinson-hyperlegible-next-variable.woff2`
- `public/fonts/ibm-plex-mono-regular.woff2`
- `public/fonts/OFL-Bricolage-Grotesque.txt`
- `public/fonts/OFL-Atkinson-Hyperlegible-Next.txt`
- `public/fonts/OFL-IBM-Plex-Mono.txt`
- `public/images/avatar/student-developer-editorial.webp`
- `public/images/projects/routelens-overview.webp`
- `public/images/projects/feedbackos-overview.webp`
- `public/images/projects/medmarket-overview.webp`
- `public/images/projects/pm25-analysis.webp`

### Remove only after import and provenance checks

- `components/Button.tsx`
- `components/Footer.tsx`
- `components/Header.tsx`
- `components/ProjectCard.tsx`
- `components/SectionContainer.tsx`
- `components/sections/AboutSection.tsx`
- `components/sections/ContactSection.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/ProjectsSection.tsx`
- `components/sections/SkillsSection.tsx`
- `data/projects.ts`
- `data/skills.ts`
- `hooks/useContactForm.ts`
- `utils/validation.ts`
- `tailwind.config.mjs`
- `postcss.config.mjs` if Tailwind is fully removed
- `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, and `public/window.svg` if no final reference uses them
- `public/fonts/archivo-black.ttf`, `public/fonts/archivo-regular.ttf`, `public/fonts/archivo-semibold.ttf`, `public/fonts/OFL-Archivo.txt`, and `public/fonts/OFL-ArchivoBlack.txt` if no final reference uses them

---

## Test-server lifecycle

HTTP contract tests use one explicit server session. Keep it running across Tasks 3–9 so Next development reloads follow edits.

1. Start persistent terminal A:

```bash
npm run dev -- --hostname 127.0.0.1 --port 3017
```

2. In terminal B, wait for readiness:

```bash
curl --fail --retry 30 --retry-delay 1 --retry-connrefused http://127.0.0.1:3017/
```

3. Run each HTTP suite with:

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

4. After the task batch, send Ctrl-C to terminal A and confirm exit.

For final production verification, run `npm run build`; start `npm run start -- --hostname 127.0.0.1 --port 3017` in terminal A; repeat the readiness probe and full HTTP suite; then stop it with Ctrl-C.

---

### Task 1: Verify project evidence and capture authentic artifacts

**Files:**

- Create: `docs/portfolio-evidence.md`
- Create: `public/images/projects/*.webp`
- Inspect: public repositories, live demos, Tableau artifact, merged BlogApp PR

**Interfaces:**

- Produces: approved evidence ledger consumed by `data/portfolio.ts` and design prompts.
- Produces: four authentic, locally optimized product images with source URLs, capture dates, dimensions, and captions.

- [ ] **Step 1: Dispatch independent read-only evidence agents**

Assign RouteLens, FeedbackOS, and MedMarket/PM2.5/BlogApp as disjoint evidence domains. Require exact source paths/URLs and forbid design reuse or code edits.

- [ ] **Step 2: Inspect authoritative Next.js guidance**

Read completely:

```text
node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md
node_modules/next/dist/docs/01-app/01-getting-started/04-linking-and-navigating.md
node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md
node_modules/next/dist/docs/01-app/01-getting-started/12-images.md
node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md
node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md
node_modules/next/dist/docs/01-app/02-guides/redirecting.md
node_modules/next/dist/docs/01-app/02-guides/production-checklist.md
```

- [ ] **Step 3: Verify every project claim**

For each main project, record problem, solo ownership, actual stack, two consequential decisions, tested behavior, live/source destinations, authentic media, limitation, and next improvement. Mark unsupported claims excluded.

- [ ] **Step 4: Capture live artifacts**

Capture one readable state per project at source resolution. Exclude passwords, tokens, cookies, private data, browser chrome containing accounts, provider contradictions, and fabricated metrics.

- [ ] **Step 5: Optimize assets without altering product truth**

Convert captures to WebP, preserve readable content, reserve aspect ratio, and record final byte size. Do not AI-edit screenshots.

- [ ] **Step 6: Write and audit the evidence ledger**

Include exact evidence source, wording allowed, wording forbidden, artifact caption/transcript, and verification date. Run:

```bash
rg -n "TBD|TODO|example\.com|github\.com\"|Expert|yearsExperience|50\+|client count" docs/portfolio-evidence.md
```

Expected: no placeholder or fictitious claim.

### Task 2: Generate and approve visual references and avatar

**Files:**

- Create: `docs/design-references/desktop/*.png`
- Create: `docs/design-references/mobile/*.png`
- Create: `public/images/avatar/student-developer-editorial.webp`
- Update: `docs/portfolio-review.md` with approval ledger

**Interfaces:**

- Consumes: approved spec and `docs/portfolio-evidence.md`.
- Produces: implementation source of truth for all landing sections and case studies.
- Hard gate: stop before Task 3 until Milind approves all 22 references and the avatar.

- [ ] **Step 1: Load the required visual skills**

Read and follow `imagegen-frontend-web`, `imagegen`, `frontend-taste`, and the approved Soft Structuralism tokens. Do not use existing portfolio screenshots as design references.

- [ ] **Step 2: Generate eight separate 1440px landing-section references**

Generate one horizontal image each for hero, proof line, selected work, PM2.5 lab, open-source proof, technology index, About/Off screen, and contact/footer.

- [ ] **Step 3: Generate three separate 1440px case-study references**

Generate RouteLens, FeedbackOS, and MedMarket references as distinct compositions sharing navigation and evidence invariants.

- [ ] **Step 4: Run the desktop AI-slop gate**

Reject centered-everything layouts, identical card grids, generic icons, tech-logo clouds, gradients, fake product UI, filler copy, excessive pills, or left-copy/right-image repetition.

- [ ] **Step 5: Generate matching 375px mobile references**

Create a mobile counterpart for each approved concept. Recompose leader-line annotations into ordered lists and keep CTA, artifacts, and captions.

- [ ] **Step 6: Generate the fictional editorial avatar**

Create a non-photorealistic approximately 20-year-old college-student developer with a consistent silhouette, warm editorial cutout treatment, transparent background, and no generic laptop/code clichés. Do not imply likeness.

- [ ] **Step 7: Present references in the visual companion**

Show one readable image per screen or small related group. Record approve/revise status for all 22 references and the avatar in `docs/portfolio-review.md`.

- [ ] **Step 8: Stop for explicit user approval**

Do not start production code until every reference and the avatar is approved.

### Task 3: Replace obsolete tests with the public contract

**Files:**

- Modify: `tests/portfolio.test.mjs`
- Modify: `package.json`

**Interfaces:**

- Consumes: approved public facts and link bundle from the spec/evidence ledger.
- Produces: `npm run test:portfolio`, expecting a server at `PORTFOLIO_BASE_URL` or `http://127.0.0.1:3017`.

- [ ] **Step 1: Write failing route and content tests**

Test `/`, `/work/routelens`, `/work/feedbackos`, `/work/medmarket`, `/full-stack`, one unknown work route, `/profile.json`, `/resume-context`, and the résumé PDF. Assert approved facts, exact URLs, 307 redirect, 404 exclusions, PDF signature, and absence of known fictitious strings.

- [ ] **Step 2: Run against the existing site and confirm intended failure**

```bash
# Terminal A
npm run dev -- --hostname 127.0.0.1 --port 3017

# Terminal B, after the readiness probe
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 node --test tests/portfolio.test.mjs
```

Expected: case-study routes/content and redirect assertions fail; server itself starts.

- [ ] **Step 3: Add the native test script**

```json
"test:portfolio": "node --test tests/portfolio.test.mjs"
```

- [ ] **Step 4: Re-run and preserve the red state**

Expected: same contract failures through `npm run test:portfolio`; no syntax or harness failure.

### Task 4: Build the typed factual source and route skeleton

**Files:**

- Create: `data/portfolio.ts`
- Create: `app/full-stack/page.tsx`
- Create: `app/work/routelens/page.tsx`
- Create: `app/work/feedbackos/page.tsx`
- Create: `app/work/medmarket/page.tsx`
- Modify: `app/page.tsx`

**Interfaces:**

- Produces: `profile`, `projects`, `labNote`, `contribution`, and `destinations` as `as const satisfies` public-content objects.
- Produces: static route components and temporary `redirect('/')` route.
- Does not produce: runtime schemas, public data endpoints, role types, or generic project renderer registry.

- [ ] **Step 1: Add only verified public content to `data/portfolio.ts`**

Keep types beside data. Include captions/transcripts and evidence-safe case-study fields. Never include private contact or local evidence paths.

- [ ] **Step 2: Add the temporary full-stack redirect**

Use Next's `redirect('/')` in a Server Component; do not use `permanentRedirect`.

- [ ] **Step 3: Add minimal semantic route content**

Render one `h1`, source/demo links, and verified project text per route. Use plain markup only.

- [ ] **Step 4: Run the route/content tests**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

Expected: routes, redirects, approved facts, links, endpoint exclusions, and PDF tests pass; visual behavior remains unimplemented.

- [ ] **Step 5: Type-check**

```bash
npx tsc --noEmit
```

Expected: exit 0.

### Task 5: Implement global shell and Interface Assembly hero

**Files:**

- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Create: `components/SiteHeader.tsx`
- Create: `components/SiteFooter.tsx`
- Create: `components/HeroAssembly.tsx`
- Create: `components/RevealOnView.tsx`
- Create: `public/fonts/*`
- Use: `public/images/avatar/student-developer-editorial.webp`

**Interfaces:**

- `HeroAssembly` renders visible identity, positioning, availability, CTA, avatar, and three annotations before animation.
- `RevealOnView` applies a one-time `data-visible` state and immediately completes under reduced motion.

- [ ] **Step 1: Add failing HTML/CSS contract assertions**

Assert skip-link target, one landing `h1`, visible positioning text, editorial-avatar caption/alt, primary CTA, public contact links, local image path, and reduced-motion stylesheet marker.

- [ ] **Step 2: Confirm the new assertions fail**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

- [ ] **Step 3: Acquire approved local fonts and licenses**

Request network approval before downloading only the approved OFL font artifacts. Verify license files and font MIME responses.

- [ ] **Step 4: Implement tokens, local fonts, metadata, skip link, header, and footer**

Use CSS custom properties from the spec. Keep navigation typographic; custom SVG marks only when text cannot express the action.

- [ ] **Step 5: Implement the static hero state**

Match approved desktop and mobile references before adding motion. Reserve avatar dimensions with `next/image`.

- [ ] **Step 6: Add Interface Assembly enhancement**

Keep identity/CTA visible. Animate avatar and annotations through transform, opacity, and SVG strokes only; total sequence at most 1000ms.

- [ ] **Step 7: Implement reduced-motion and interruption stability**

Before hydration, reduced motion must show final state. Page resize, tab interruption, or focus must never leave essential content hidden.

- [ ] **Step 8: Run tests and inspect hero at 375px and 1440px**

Expected: tests pass, no overflow, reference match, keyboard focus visible, no console error.

### Task 6: Implement the landing evidence sections

**Files:**

- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Create: `components/ProjectSpecimen.tsx`

**Interfaces:**

- `ProjectSpecimen` consumes one approved project entry and an explicit composition variant; it renders no invented defaults.
- Landing renders project specimens, lab note, open-source proof, technology index, About/Off screen, and contact in approved source order.

- [ ] **Step 1: Add failing tests for every landing section**

Assert section landmarks/headings, three project routes, PM2.5/BlogApp evidence links, exact personal copy anchors, technology evidence, and current-résumé label.

- [ ] **Step 2: Confirm failure**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

- [ ] **Step 3: Implement static sections to match approved references**

Use real project assets, custom diagrams, captions, and transcripts. Do not use an identical card grid.

- [ ] **Step 4: Add one-time reveal enhancement**

Limit stagger to readable groups. Do not delay focus, links, or semantic content.

- [ ] **Step 5: Run tests and inspect 375px, 768px, and 1440px**

Expected: all section assertions pass; no content collision, clipping, or horizontal overflow.

### Task 7: Implement the three case studies

**Files:**

- Create: `components/CaseStudyShell.tsx`
- Modify: `app/work/routelens/page.tsx`
- Modify: `app/work/feedbackos/page.tsx`
- Modify: `app/work/medmarket/page.tsx`
- Modify: `app/globals.css`

**Interfaces:**

- `CaseStudyShell` owns skip/header context, project metadata, evidence destinations, media transcript, back-to-work action, and next-work navigation.
- Each route owns its distinct approved composition and decision narrative.

- [ ] **Step 1: Add failing case-study invariant tests**

For every route assert one `h1`, solo ownership, problem, at least two verified decisions, source, demo/status, limitation/reflection, media caption/transcript, back link, and next-work link.

- [ ] **Step 2: Confirm failure**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

- [ ] **Step 3: Implement RouteLens case study**

Match its approved reference and hiring-challenge disclaimer. Do not imply evaluator acceptance or employment.

- [ ] **Step 4: Run focused RouteLens assertions**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 node --test --test-name-pattern="RouteLens" tests/portfolio.test.mjs
```

- [ ] **Step 5: Implement FeedbackOS case study**

Use only repository-proven AI classification, queue, data, security, and test claims.

- [ ] **Step 6: Run focused FeedbackOS assertions**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 node --test --test-name-pattern="FeedbackOS" tests/portfolio.test.mjs
```

- [ ] **Step 7: Implement MedMarket case study**

Frame it as a self-directed multi-role commerce/inventory exploration; distinguish frontend and API destinations.

- [ ] **Step 8: Run focused MedMarket assertions and full portfolio tests**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 node --test --test-name-pattern="MedMarket" tests/portfolio.test.mjs
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

### Task 8: Responsive, accessibility, and interaction hardening

**Files:**

- Modify: `app/globals.css`
- Modify only affected components/routes discovered by rendered inspection
- Update: `docs/portfolio-review.md`

**Interfaces:**

- Produces: verified behavior at 320/375/768/1024/1440 widths, mobile landscape, 200% text zoom, 400% reflow, text-spacing overrides, keyboard-only input, and reduced motion.

- [ ] **Step 1: Record the current rendered failures**

Inspect every route at required viewports. Capture exact overflow, focus, order, or reference mismatch before editing.

- [ ] **Step 2: Fix one evidenced responsive failure at a time**

Use container/media queries and source-order-safe CSS. Do not hide content or add breakpoint-specific duplicate markup.

- [ ] **Step 3: Verify keyboard navigation**

Check skip link, header, CTAs, repeated links, case-study navigation, visible focus, sticky-header offset, and current-page state.

- [ ] **Step 4: Verify reduced motion before hydration**

Confirm no entrance displacement, stroke drawing, parallax, or smooth scroll; focus/active states remain clear.

- [ ] **Step 5: Verify text and complex-image accessibility**

Check 200% text zoom, user text spacing, 320 CSS-pixel reflow, readable captions/transcripts, and descriptive repeated links.

- [ ] **Step 6: Run full functional checks**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
npx tsc --noEmit
npm run lint
npm run build
```

Expected: exit 0 or exact pre-existing unrelated lint findings documented separately; no new finding.

### Task 9: Remove obsolete scaffold and unused dependencies

**Files:**

- Remove only paths in the approved remove manifest
- Modify: `package.json`, `package-lock.json`
- Modify: `README.md`

**Interfaces:**

- Produces: searchable repository free of fictitious employers, projects, metrics, contacts, skill levels, and unused generic-icon code.

- [ ] **Step 1: Re-run import and provenance inventory**

```bash
rg -n "components/(Button|Footer|Header|ProjectCard|SectionContainer)|components/sections|data/(projects|skills)|useContactForm|utils/validation|@phosphor-icons/react|framer-motion|tailwind" app components data hooks utils package.json 2>/dev/null
```

Expected: only obsolete scaffold/package references remain.

- [ ] **Step 2: Present exact deletion list and obtain confirmation if it differs from this plan**

Do not broaden deletion through globs or recursive commands.

- [ ] **Step 3: Delete approved obsolete files individually**

Use patch-based deletion. Preserve résumé, evidence, references, approved media, and unrelated paths.

- [ ] **Step 4: Remove unused packages mechanically**

Remove `@phosphor-icons/react`, Tailwind packages/config, and Framer Motion only when import checks show zero final use. Keep any dependency proven necessary by the approved implementation.

- [ ] **Step 5: Test after cleanup**

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
npx tsc --noEmit
npm run lint
npm run build
```

Expected: no missing import; all checks pass.

- [ ] **Step 6: Replace starter README**

Document purpose, verified content source, local commands, route map, asset provenance, accessibility/motion rules, and publication status. Do not include private contact or design history from the replaced portfolio.

### Task 10: Final visual and acceptance review

**Files:**

- Update: `docs/portfolio-review.md`
- Update only files required by evidenced final defects

**Interfaces:**

- Produces: auditable completion record mapped to every acceptance criterion.

- [ ] **Step 1: Run final automated verification**

```bash
npx tsc --noEmit
npm run lint
npm run build
git diff --check
```

Start the production server using the lifecycle above, then run:

```bash
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

- [ ] **Step 2: Inspect every route at every required viewport**

Compare against approved references. Verify no horizontal overflow, collision, clipped content, layout shift, failed image, or generic icon.

- [ ] **Step 3: Exercise affected workflows**

Use keyboard-only navigation, reduced motion, text zoom, long URL wrapping, résumé download, email/GitHub/LinkedIn links, project source/demo links, redirect, and 404 paths.

- [ ] **Step 4: Inspect console, network, performance, and metadata**

Confirm local assets return successfully, no client errors, no avoidable client bundle, reserved image dimensions, one `h1`, accurate titles/descriptions, and no private or fictitious content.

- [ ] **Step 5: Audit privacy and forbidden endpoints**

```bash
rg -n -i --pcre2 '\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b' app components data public docs tests README.md package.json package-lock.json next.config.ts | rg -v 'milindsk8r@gmail\.com'
rg --files app | rg 'route\.(ts|js)$'
```

Expected: the first pipeline has no unapproved email matches across application, documentation, and metadata; the second shows no résumé/profile data handler. Extract the résumé PDF text with an available PDF inspection tool and confirm it contains only the approved personal address. Visually inspect generated images for unintended contact or account data.

- [ ] **Step 6: Run the final AI-slop and credibility gates**

Reject implementation if it drifts into identical cards, generic icons, decorative effects, filler copy, fake metrics, or weak reference matching.

- [ ] **Step 7: Review Git status and diff**

Confirm only manifest paths changed. Do not stage or commit.

- [ ] **Step 8: Complete `docs/portfolio-review.md`**

Record commands, results, screenshots inspected, external-link status, unresolved risk, and each acceptance criterion as pass/fail.

- [ ] **Step 9: Hand off for publication approval**

Report changed files, verification evidence, remaining risks, and exact uncommitted status. Ask separately before any commit or deployment.
