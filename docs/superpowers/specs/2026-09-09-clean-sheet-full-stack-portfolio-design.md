# Clean-Sheet Full-Stack Portfolio Design

**Date:** 2026-09-09
**Status:** Design approved in chat; awaiting written-spec and visual-reference approval
**Owner:** Milind Bansal

## Goal

Create an original, polished portfolio that demonstrates frontend craft and credible full-stack engineering judgment. The first release targets internships, freelance engagements, and open-source collaboration. It must be detailed enough that a future résumé agent can understand Milind's work from the visible site, without publishing dedicated machine-readable résumé endpoints.

## Scope

### First release

- A canonical full-stack portfolio at `/`.
- Dedicated case studies for RouteLens, FeedbackOS, and MedMarket.
- A compact Beijing PM2.5 data-analysis lab note.
- A compact, exact open-source contribution item for the merged BlogApp Hacktoberfest UI pull request.
- A fictional illustrated college-student developer avatar, approximately age 20. It is an identity device, not a claimed likeness.
- An existing résumé PDF exposed as “Current résumé.”
- Direct contact through personal email, GitHub, and LinkedIn.

### Later, not in this release

- AI-engineer and data-analysis role views.
- Tailored full-stack, AI-engineer, and data-analysis résumés.
- Deployment or publication.

### Explicit exclusions

- No public `/profile.json`, `/resume-context`, résumé API, or hidden résumé-data route.
- No contact form, CMS, analytics, dark mode, role switcher, or speculative role-model abstraction.

## Audience and positioning

Primary reviewers are internship hiring managers, freelance clients, and open-source maintainers. The portfolio must communicate range without presenting Milind as a generic “does everything” candidate.

Working positioning:

> I’m Milind Bansal, a Computer Science and Artificial Intelligence student who builds full-stack tools for messy workflows—from comparing API responses, to routing product feedback with AI, to coordinating medicine discovery and inventory. I like owning the path from data and system design to interfaces people can act on.

Writing is specific, understated, and slightly playful. Case studies remain professional. Avoid corporate résumé language, empty adjectives, AI copy clichés, invented impact, and seniority claims.

## Confirmed public facts

- Name: Milind Bansal.
- Degree: B.Tech in Computer Science and Artificial Intelligence.
- Institution: Newton School of Technology at Rishihood University.
- Study period: 2024–2028.
- Minor: Finance.
- GPA: 9.281/10 internally; display as 9.28/10.
- Location statement: India; open to remote internships, freelance work, and open-source collaboration.
- Availability: now.
- Public portfolio email: `milindsk8r@gmail.com`.
- Public GitHub: `https://github.com/MilindDevX`.
- Public LinkedIn: `https://www.linkedin.com/in/milind-bansal-177606244/`.

No private contact address may appear in application code, assets, tests, documentation, metadata, or generated output.

### Claim ledger

| Claim | Approval or evidence |
|---|---|
| Degree, institution, period, Finance minor, GPA, availability, location wording, and public email | Confirmed directly by Milind during the 2026-09-09 design interview |
| RouteLens, FeedbackOS, and MedMarket solo ownership | Confirmed directly by Milind during the 2026-09-09 design interview |
| RouteLens hiring-challenge origin and MedMarket self-directed origin | Confirmed directly by Milind during the 2026-09-09 design interview |
| Project source and live destinations | Public GitHub repository metadata and links listed below |
| Beijing PM2.5 role and quantitative findings | Repository contribution matrix, Git history, authored report, and Tableau artifact; wording must remain within those sources |
| BlogApp contribution | Merged upstream pull request listed below |
| Existing résumé contact | PDF audit confirms only the approved personal email appears |

## Information architecture

### Routes

- `/`: canonical full-stack landing page.
- `/full-stack`: redirect to `/` until role variants exist.
- `/work/routelens`: static RouteLens case study.
- `/work/feedbackos`: static FeedbackOS case study.
- `/work/medmarket`: static MedMarket case study.

No public résumé-data route exists.

`/full-stack` uses a temporary 307 redirect because the path is reserved for a future role view. Unknown `/work/*` paths return 404.

### Landing-page sequence

1. Hero with avatar, positioning, availability, and “View selected work.”
2. Compact proof line: current degree, GPA, and focus.
3. Three selected project specimens.
4. Beijing PM2.5 lab note.
5. Accepted BlogApp open-source contribution.
6. Technology index grounded in displayed project evidence.
7. About and “Off screen” personal layer.
8. Direct contact, GitHub, LinkedIn, and current résumé.

### Project case-study grammar

Each project route uses the same semantic content contract while receiving its own composition:

1. Problem and context.
2. Milind's solo ownership.
3. Constraints.
4. Consequential product and engineering decisions.
5. Interface and system behavior.
6. Testing, accessibility, security, or performance evidence when the repository proves it.
7. Verified live destination when available, source, and authentic artifacts.
8. Reflection and next improvement.

RouteLens is a solo project originating from a hiring challenge. It must not imply employment, endorsement, users, or acceptance by the evaluator. MedMarket is a self-directed exploration. None of the three main projects may claim user traction.

## Evidence rules

- Use one internal typed content source for approved public facts and project metadata.
- Do not expose that source through a dedicated public endpoint.
- Every quantitative or technical claim must be verified against source, tests, an artifact, or an authored report before publication.
- Use authentic screenshots or interaction captures from live demos. Never present fabricated mockups as shipped UI.
- Label Beijing PM2.5 as team coursework and describe only evidenced individual contribution.
- Describe BlogApp as one accepted Hacktoberfest UI contribution with its exact merged pull-request link. Do not imply broad open-source history.
- Remove all fictitious employers, generic placeholder projects, example links, skill levels, years-of-experience counters, client counts, and invented performance or compliance claims.
- Technologies appear only when supported by a displayed project or verified source.

### Verified link bundle

- RouteLens source: `https://github.com/MilindDevX/routelens`
- RouteLens demo: `https://routelens-xi.vercel.app`
- FeedbackOS source: `https://github.com/MilindDevX/feedbackos`
- FeedbackOS demo: `https://feedbackos.vercel.app`
- MedMarket source: `https://github.com/MilindDevX/MedMarket`
- MedMarket frontend: `https://med-market-self.vercel.app`
- MedMarket API documentation: `https://medmarket-g08v.onrender.com/api/docs`
- Beijing PM2.5 source: `https://github.com/MilindDevX/SectionD_G12_BeijingPM25Analysis`
- Beijing PM2.5 Tableau artifact: `https://public.tableau.com/app/profile/milind.bansal5979/viz/DVA2-Capstone/RiskSeverityOverview`
- BlogApp merged contribution: `https://github.com/Pinfinity07/BlogApp/pull/2`

Automated tests assert exact destinations but do not require external sites to return 200. External availability is verified manually to avoid flaky tests. If a demo is unavailable during final verification, retain the source link and label the demo unavailable rather than hiding or fabricating it.

## Personal content

> **Latest 2026-09-10 decision:** The published Off-screen paragraph omits Marvel while retaining the other approved interests.

The About section frames Milind as curious and problem-led. New projects often start from an exciting idea or a problem he wants solved for himself.

An “Off screen” section may mention gaming, manga, films, anime, Marvel, music, sports, the gym, travel, books, friends, and rest. It must be edited into a short human paragraph rather than a hobby inventory. Personal interests remain secondary to work evidence.

## Visual direction

### Archetype

Use **Soft Structuralism** in direct, clean-sheet mode. The site is warm, confident, technically sharp, and approachable. It must not reuse the existing portfolio's layout, style, animation, visual hierarchy, or narrative structure.

### Visual system

- Warm ivory `#F4F0E8` substrate, soft surface `#FFFDF8`, charcoal `#171918` ink, and muted text `#595B57`.
- Cobalt `#1D4ED8` is the action/focus accent. Coral `#D94F30` and butter `#F0D46B` are supporting fills, not body-text colors.
- Display: Bricolage Grotesque, open-font-license local variable files, `700–800`, tight tracking, fluid `clamp(3.75rem, 10vw, 9rem)` hero size.
- Body: Atkinson Hyperlegible Next, open-font-license local variable files, minimum `1rem`, `1.6` line height, approximately `65ch` prose width.
- Mono: a local open-license monospace used only for technical metadata.
- Asymmetric 12-column composition with deliberate negative space.
- Spacing tokens: 4, 8, 12, 16, 24, 32, 48, 72, and 112px. Fluid page gutters: 20px mobile, 32px tablet, 64px desktop. Content max-width: 1440px.
- Radius tokens: 0, 12, and 24px. Pills are limited to compact tags or statuses.
- Borders use `#CAC5B9`. Any depth uses at most `0 24px 60px -32px rgb(23 25 24 / 18%)`.
- Large project “interface specimens,” annotations, leader lines, and decision callouts instead of generic card grids.
- Soft structural depth only where hierarchy needs it; no decorative shadows.
- No gradients, glassmorphism, neon terminal treatment, generic bento dashboard, stock tech-logo clouds, or generic icon library.
- Use typography, custom SVG marks, and project-specific diagrams for navigation and actions.

### Image-first gate

Before production UI code, create and review 11 distinct visual concepts: one for each of the eight landing-page sections and one for each of the three case-study routes. Each concept requires a readable 1440px horizontal reference and a 375px mobile reference. Do not compress the site into one tall board. Record Milind's approval for every concept before implementation.

The AI-slop review fails a concept if it uses centered-everything composition, a generic identical-card grid, decorative glass/gradient treatment, fake product UI, stock/generic icons, a tech-logo cloud, or filler copy. References must use authentic content, vary composition while sharing tokens, and make the interface specimen—not decoration—the dominant project visual.

### Avatar

> **Latest 2026-09-10 decision:** Remove all avatar labels, disclaimers, and decorative structural lines. Keep only the fictional illustrated portrait, concise alt text, and restrained entrance motion.

Generate a clearly illustrated, non-photorealistic fictional avatar depicting a college-student developer around age 20. A nearby visible caption identifies it as an “editorial avatar,” and identity-bearing use receives concise alt text such as “Editorial avatar of a student developer assembling interface layers.” Do not state or imply that it is Milind's literal likeness. Use an editorial cutout treatment and a consistent silhouette. If Milind rejects it, request explicit consent and handling instructions before using reference photos.

**Superseded 2026-09-10.** Milind approved the fictional illustrated avatar but asked to remove its visible disclaimer and Interface/System/Data labels. The concise image alt remains; structural line animation remains decorative.

### Responsive composition

- Below 768px, source order is hero identity and positioning, CTA, avatar, then annotations.
- Desktop leader-line annotations become an ordered stacked list on mobile; no crossing lines or absolute-positioned readable copy.
- Project specimens become full-width within page gutters. Captions and transcripts follow each specimen in DOM order.
- Case-study navigation and evidence links remain visible and reachable; no content is hidden solely to simplify mobile.
- Long repository URLs wrap safely, and all media preserve intrinsic aspect ratio.

## Motion direction

The signature hero behavior is **Interface Assembly**:

> **Latest 2026-09-10 decision:** The avatar no longer carries annotations or structural SVG lines. Its only motion is the portrait entrance.

1. Identity, positioning, availability, and CTA are visible in the initial DOM.
2. The avatar settles into the composition as enhancement only.
3. Interface, API/system, and data annotations lock into place.

**Superseded 2026-09-10.** The avatar annotation labels were removed. The structural SVG lines still draw into place as the restrained hero motion.

Project artifacts reveal in layers that mirror inspection and explanation. Motion remains functional:

- One orchestrated hero reveal, approximately 700–1000ms.
- Exponential deceleration, never linear or bouncy easing.
- Hover and focus responses approximately 120–220ms.
- Animate transforms, opacity, and SVG strokes only.
- No looping spectacle, scroll-jacking, custom cursor, autoplay marquee, or pointer-following avatar.
- `prefers-reduced-motion` renders the completed state immediately.
- The hero runs once per route navigation and never delays focus or interaction. Project reveals run once, without scroll pinning. Resize, tab interruption, or animation cancellation leaves a stable completed state.
- Reduced motion disables entrance displacement, SVG drawing, parallax, and smooth scrolling before hydration while preserving clear focus, hover, active, and route-state feedback.

## Technical architecture

- Preserve the existing Next.js 16 App Router and React 19 stack.
- Use Server Components for static page and case-study content.
- Isolate required motion in the smallest practical client leaf.
- Prefer CSS and SVG animation; use the already-installed Framer Motion only when it materially simplifies orchestration.
- Store optimized avatar and project media locally as appropriately sized WebP or AVIF assets.
- Use `next/image` with reserved dimensions to prevent layout shift.
- Implement three static case-study route components. Share semantic shell components—navigation, evidence list, media caption/transcript, and next-work navigation—without forcing identical compositions.
- Keep approved public content in `data/portfolio.ts`, exported as `as const satisfies` objects for profile, projects, lab note, contribution, and destinations. Composition stays in route components. Do not add a CMS, repository/service layer, runtime schema package, role enum, or future-role visibility matrix.
- Internal source means non-addressable, not secret: anything rendered can appear in HTML or the React Server Component response. Private facts never enter the application bundle.
- Do not add packages unless an approved design requirement cannot be met natively.
- Replace `app/page.tsx`, `app/layout.tsx`, and `app/globals.css` with the approved clean-sheet implementation.
- Retain configuration files, the résumé PDF, the current authentic RouteLens image until superseded, and these design/spec artifacts.
- Remove the obsolete untracked component scaffold, generic project/skill data, contact-form hook, and validation helper only after the implementation plan records exact paths and confirms the new build has no imports from them.
- Remove `@phosphor-icons/react` only if the final reference and import audit confirms no retained use. Update the lockfile mechanically.
- Do not overwrite or delete any path omitted from the implementation plan's retain/replace/remove manifest.

## Accessibility and responsive behavior

- Semantic landmarks and heading order.
- One `h1` per route, a skip link, named landmarks, logical source order, current-page indication, descriptive repeated-link names, and sticky-header focus offset.
- Keyboard access to every action.
- Visible focus that is never obscured.
- Minimum 44×44px interactive targets with adequate separation.
- WCAG AA contrast: at least 4.5:1 for body text and 3:1 for large text and UI components. Focus indicators are at least 2px and maintain at least 3:1 state contrast.
- Useful alt text for identity-bearing and product images; empty alt for decorative marks. Complex screenshots receive adjacent captions or structured transcripts instead of overloaded alt text.
- No critical information available only on hover, through motion, or by color.
- Mobile-first layouts verified at 375px, 768px, 1024px, and 1440px, plus 320 CSS-pixel reflow/400% zoom, 200% text zoom, user text-spacing overrides, and mobile landscape.
- No horizontal document overflow.
- Mobile recomposes content; it does not remove critical content.

## Testing and verification

Production changes follow test-driven development:

1. Add the smallest failing behavior test.
2. Confirm failure for the intended reason.
3. Implement the minimum passing behavior.
4. Run the focused test.
5. Refactor only after green.

Required final checks:

- Use the existing Node test runner and HTTP-response tests; do not add a test dependency solely for this release. Start a local Next server as an explicit test precondition.
- Route, 307 redirect, unknown-route 404, approved-fact, exact-destination, PDF signature, asset, and forbidden-placeholder tests.
- Assert `/profile.json` and `/resume-context` return 404.
- TypeScript type check.
- Scoped lint, then full lint with baseline distinctions.
- Production build.
- Rendered visual inspection at required breakpoints.
- Manual browser verification of keyboard traversal, focus visibility, mobile reflow, complex-image captions, and responsive source order.
- Reduced-motion behavior with the preference active before page load.
- Live project, source, social, email, and résumé destinations.
- Browser console and asset-request review.
- Verify every meaningful image loads and has reserved dimensions; verify no content is clipped by long links, text zoom, or interrupted motion.
- Diff review, acceptance-criteria review, and affected documentation update.

## Acceptance criteria

- **Given** a first-time reviewer at `/`, **when** the hero settles, **then** the reviewer can identify Milind, his full-stack focus, student status, availability, and primary work action without waiting for animation.
- **Given** any selected project, **when** a reviewer opens its case study, **then** they can distinguish the problem, Milind's ownership, decisions, evidence, source, demo, and reflection.
- **Given** a request for `/full-stack`, **when** the route resolves, **then** it returns a temporary 307 redirect with `Location: /`; unknown work slugs return 404.
- **Given** a request for `/profile.json` or `/resume-context`, **when** the route resolves, **then** it returns 404.
- **Given** a résumé writer uses only the visible site, **when** they inspect the portfolio, **then** they can recover confirmed education, GPA, availability, project ownership, supported technologies, links, and contribution history without encountering contradictory or fictitious facts.
- **Given** a keyboard-only visitor, **when** they traverse the site, **then** every interactive element is reachable, visibly focused, and understandable.
- **Given** reduced motion is enabled, **when** pages load and content enters the viewport, **then** final states appear immediately without missing content.
- **Given** a 375px viewport, **when** every route renders, **then** critical content remains readable and actionable with no horizontal overflow.
- **Given** 768px, 1024px, or 1440px viewports, **when** every route renders, **then** composition, media, and navigation use the available space without collision, clipping, or missing content.
- **Given** 320 CSS-pixel reflow, 200% text zoom, or user text-spacing overrides, **when** a route renders, **then** content remains readable, ordered, and operable without two-dimensional scrolling.
- **Given** the repository's old scaffold, **when** the final diff is inspected, **then** fictitious projects, employers, metrics, contacts, and skill ratings are absent from active and searchable project content.
- **Given** Milind has not approved publication, **when** implementation completes, **then** no commit, push, PR, or deployment has occurred.

## Risks and controls

- **Thin outcome evidence:** emphasize decisions and working artifacts; never manufacture impact.
- **Live-demo drift:** capture local optimized artifacts and verify external destinations separately.
- **Animation cost:** reserve dimensions, use compositor-friendly properties, and keep one small client boundary.
- **Generic portfolio aesthetics:** section-specific image references and a final AI-slop review gate.
- **False identity implication:** label the avatar through context as an illustration and avoid likeness claims.
- **Future role fragmentation:** keep facts centralized internally; add role views only after the full-stack release is verified.
