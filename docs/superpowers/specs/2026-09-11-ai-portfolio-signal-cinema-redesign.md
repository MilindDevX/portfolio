# AI Portfolio Signal Cinema Redesign

## Status

Approved section by section in conversation on 2026-09-11. This specification replaces the visual composition, navigation, and motion direction in `2026-09-10-ai-portfolio-design.md`. Existing verified facts, evidence limits, route boundaries, avatar choice, public contact details, and project ownership remain authoritative.

This document authorizes planning only. It does not authorize implementation, committing, publishing, or deployment.

## Objective

Rebuild `/ai` as an immersive, recruiter-readable applied-AI portfolio that demonstrates frontend engineering through meaningful scroll choreography. Redesign `/work/truthlens` in the same visual world. Preserve the successful full-stack portfolio and shared canonical FeedbackOS and MedMarket case studies.

The redesign must feel like an interactive product experience rather than a conventional portfolio page. It must remain understandable without animation and scannable by a recruiter.

## Rejected direction

The current warm Inference Notebook interface is rejected in full. Do not reuse its paper canvas, notebook numbering, card composition, segmented role switch, reveal-on-entry picture slides, or visually negligible passive motion.

Only these foundations survive:

- verified personal and project facts
- existing route architecture
- approved avatar, unchanged
- authentic project captures
- evidence and privacy boundaries
- accessibility requirements

## Design lock: Signal Cinema

Signal Cinema uses a near-black cinematic canvas, warm bone typography, and two restrained signal colors: vermilion and cobalt. Huge typography establishes a human perspective before any project appears. Thin dividers and full-bleed project scenes replace cards, rounded panels, notebook rows, and decorative UI chrome.

It uses one visual archetype: a custom cinematic interpretation of Industrial Telemetry. It keeps telemetry's dark substrate, evidence precision, and technical motion, while rejecting dense dashboard styling, scanline clichés, terminal cosplay, and decorative fake data.

### Palette

- canvas: near-black `#070707`
- primary text: warm bone close to `#f3f0e8`
- secondary text: accessible warm grey
- decision signal: vermilion close to `#ef593f`
- model/evidence signal: restrained cobalt close to `#526dff`

Gradients are permitted only as slow spectral signal bands crossing the canvas or image edges. No gradient text, mesh gradients, glowing blobs, purple-neon fields, or particle backgrounds.

### Typography

- Bricolage Grotesque: oversized display typography with aggressive but readable composition
- Atkinson Hyperlegible: supporting and long-form copy
- system monospace: measurements, evidence labels, and experiment metadata only

Use the existing licensed local font files. Do not add font downloads or dependencies.

### Surfaces

- full-bleed scenes
- thin structural dividers
- authentic screenshots
- no cards, glass, shadows, decorative icons, pill controls, or rounded container grids

Screenshots begin slightly desaturated and gain focus or contrast only when their supporting evidence becomes active.

## Navigation

Remove the segmented `Full-stack / AI` switch entirely.

Desktop fixed navigation:

- left: `MB / APPLIED AI`
- centre: current chapter derived from actual scroll position, such as `INTRO`, `TRUTHLENS`, `APPLIED AI`, and `ABOUT`
- right: `FULL-STACK EDITION ↗`

The row begins transparent and gains a restrained opaque or blurred substrate only after scrolling. The chapter indicator must represent actual section state; it must never loop or move autonomously.

Mobile navigation keeps identity and the full-stack link visible. The current chapter becomes a thin text line below them. No hamburger icon, generic icon, switch pill, bordered button cluster, or bulky navigation row.

When an AI-specific résumé exists, desktop navigation becomes `RÉSUMÉ ↗ · FULL-STACK EDITION ↗`; mobile keeps the résumé visible and moves the full-stack link below. Until then, `/ai` exposes no résumé link.

## Page narrative

### 1. Identity hero

A full-viewport introduction with no project names in the headline. Keep the approved positioning:

> I build with AI. I don’t outsource judgment to it.

The composition may re-break or shorten supporting display lines for rhythm, but cannot change their meaning into a project claim. Supporting copy describes interest in the whole system: training, uncertain outputs, release judgment, and useful software.

The unchanged avatar appears once. It may be integrated as a cinematic portrait layer but cannot perform an activity, carry labels, or include a disclaimer.

### 2. TruthLens flagship sequence

TruthLens receives the only long cinematic pinned sequence. Its authentic interface capture remains in place while evidence changes around it:

1. personal question: could Milind train AI to detect misinformation?
2. corrected dataset provenance and baseline training
3. out-of-distribution LIAR evaluation
4. held-out F1 `0.5648` against release gate `0.75`
5. rejected release decision
6. artifact not uploaded or activated
7. fail-closed serving boundary
8. explanation and drift-monitoring limits

Images crop, enlarge, refocus, and release based on scroll progress. They never slide into the page as generic reveal animations. Evidence values appear only when the relevant decision enters the narrative.

### 3. Capabilities from evidence

Capabilities emerge as consequences of the TruthLens narrative and later project decisions. Do not render a skill grid, proficiency meter, card collection, icon wall, or résumé-style list.

Each capability retains a direct evidence destination. The presentation may use a full-width typographic index, connected evidence track, or expanding inline annotations as long as it remains keyboard accessible and compact.

### 4. Applied AI product scenes

FeedbackOS and MedMarket receive shorter, distinct interactions so the page avoids repeating the TruthLens pinning pattern.

- FeedbackOS focuses on queued work, structured-output validation, uncertainty, review paths, and the documented rate-limit fallback boundary.
- MedMarket focuses on fallible document extraction, unreadable states, human verification, and catalogue/pricing rules outside the AI boundary.

Both use authentic captures. Neither may imply validated customers, traction, model accuracy, or executed tests that were not run.

### 5. Engineering range reel

RouteLens, Beijing PM2.5 coursework, and the accepted open-source UI contribution appear in one compact range sequence. They are supporting evidence, not AI projects.

The section should show breadth without interrupting the primary AI narrative or becoming a grid of mini project cards.

### 6. Personal chapter

Present education once:

- B.Tech in Computer Science and Artificial Intelligence
- Newton School of Technology at Rishihood University
- 2024–2028
- CGPA 9.28/10
- Finance minor explained as complementary understanding of products, incentives, and decisions

Include one concise personal passage covering approved interests without a hobby inventory or Marvel reference.

### 7. Contact finale

Continue the same Signal Cinema canvas. Include personal email, GitHub, and LinkedIn. State opportunity priority: AI internships, open-source collaboration, then scoped freelance work.

Reserve a future résumé position in the information architecture, but render no empty, disabled, or coming-soon résumé control.

## Motion system

### Passive motion

Passive motion must be perceptible within a few seconds while remaining readable:

- slow vermilion/cobalt spectral signal movement across the background and image edges
- fine film-like grain shifting in restrained discrete steps
- small contrast breathing in selected secondary hero text
- subtle depth or parallax in project screenshots

Passive effects cannot pretend to represent metrics, progress, confidence, or system state. They pause when off-screen or when the document is hidden.

### Active motion

- TruthLens media pins while evidence progresses
- screenshots crop, enlarge, refocus, and release according to scroll position
- exact evidence appears at its corresponding narrative moment
- navigation chapter follows actual section visibility
- hover and keyboard focus trigger the same restrained text-layer response

No generic slide-in images, fake progress bars, looping metrics, floating blobs, particles, scroll hijacking, cursor replacement, or animation on every element.

### Technical implementation

- use native `position: sticky` for pinned scenes
- use CSS scroll-driven animations for transforms, crop, focus, and evidence timing where supported
- provide one small observer-based fallback for browsers without scroll timelines
- animate transform, opacity, filter, or clip-path only when profiling confirms smooth rendering
- avoid continuous React state updates and raw scroll listeners
- add no animation dependency unless native implementation fails documented browser tests

Reduced-motion mode removes pinning and reveals a complete, ordered static composition. No information or action may depend on motion.

## Responsive behavior

- desktop: wide cinematic layout with sticky project media and changing evidence
- tablet: shorter pinned sequences with balanced text and screenshot weight
- mobile: stacked project chapters with short sticky image moments; no squeezed desktop split
- limited-height viewports: shorten or remove pinning before content becomes obstructed
- reduced motion: static stacked composition across every width

Preserve all content on mobile. Do not use horizontal carousels, hidden projects, tiny evidence labels, or horizontal overflow.

## Route and case-study boundaries

- `/` remains the existing full-stack portfolio and stays visually unchanged
- `/ai` receives the complete Signal Cinema redesign
- `/work/truthlens` receives the same Signal Cinema design language and a complete evidence-led case study
- `/work/feedbackos` and `/work/medmarket` remain shared canonical full-stack case-study pages
- AI homepage previews must contain enough role-specific evidence that leaving `/ai` is optional
- do not create duplicate `/ai/work/*` routes

## Content, privacy, and evidence constraints

- public email: `milindsk8r@gmail.com`
- private college email remains absent from source, routes, assets, documents, and rendered output
- no public `/profile.json`, `/resume-context`, or equivalent structured résumé endpoint
- no AI résumé link until an AI-specific résumé exists
- TruthLens must remain described as a rejected experiment, not a validated detector
- TruthLens live URL demonstrates interface and system shape, not model validity
- RL hackathon remains omitted
- no unsupported metrics, users, clients, customers, revenue, or model-performance claims

## Accessibility and performance

- semantic landmarks and one coherent H1
- visible keyboard focus never clipped by sticky scenes
- hover behavior mirrored by keyboard focus
- normal text contrast at least 4.5:1
- useful screenshot alternative text and textual equivalents for visual evidence
- content readable in server HTML before JavaScript enhancement
- full page understandable with JavaScript disabled
- no information conveyed by motion or color alone
- reserve image dimensions to avoid layout shift
- pause off-screen continuous animation
- avoid layout thrashing and continuous React scroll state

## Verification

Before handoff:

1. Run portfolio route tests, ESLint, TypeScript, production build, and `git diff --check`.
2. Inspect `/ai` and `/work/truthlens` at 375, 768, 1024, and 1440 pixels plus a short-height laptop viewport.
3. Smoke-test `/`, `/work/feedbackos`, and `/work/medmarket` for regressions.
4. Test complete keyboard traversal and visible focus.
5. Test normal motion, reduced motion, hidden-tab pause, and observer fallback.
6. Confirm no horizontal overflow or obstructed content.
7. Confirm project links, image loading, screenshot provenance, and exact TruthLens evidence.
8. Review affected source and docs for private data, unsupported claims, stale direction, and unrelated edits.

## Acceptance criteria

- **Given** a visitor opens `/ai`, **when** the first viewport renders, **then** it feels like a cinematic interactive product experience and introduces Milind before naming a project.
- **Given** the page remains still for a few seconds, **when** passive motion is enabled, **then** motion is clearly perceptible without resembling fake progress, particles, or decorative AI wallpaper.
- **Given** a visitor scrolls through TruthLens, **when** project evidence changes, **then** the authentic interface remains spatially continuous while crop, focus, and annotations progress with actual scroll position.
- **Given** TruthLens missed its release gate, **when** evaluation appears, **then** the page accurately shows `0.5648` against `0.75` and states that the artifact was rejected, not uploaded, and not activated.
- **Given** a visitor uses the navbar, **when** they move through `/ai`, **then** the chapter label reflects the actual visible section and the plain full-stack link replaces the rejected switch pill.
- **Given** a recruiter scans rather than watches every sequence, **when** they move quickly through the page, **then** project names, roles, decisions, and destinations remain immediately discoverable.
- **Given** a visitor uses keyboard navigation, reduced motion, disabled JavaScript, or a narrow viewport, **when** they consume the portfolio, **then** all content and actions remain available in correct reading order.
- **Given** a visitor opens the full-stack portfolio or shared canonical case studies, **when** the AI redesign ships, **then** those experiences retain their existing visual identity and behavior.

## Explicitly out of scope

- AI résumé creation
- TruthLens model retraining or redeployment
- full-stack portfolio redesign
- redesigning shared FeedbackOS or MedMarket case-study pages
- separate AI domain or deployment
- duplicate AI case-study routes
- avatar changes
- generic AI illustrations or icons
- commit, push, pull request, publication, or production deployment without separate explicit approval
