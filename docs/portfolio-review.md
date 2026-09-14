# Portfolio implementation review

Updated on 2026-09-13. Milind explicitly approved deployment; the compact AI edition is live at `https://portfolio-milind.vercel.app/ai`.

The AI résumé-link addition and approved Next.js 16.3.5 security update are deployed. Production-dependency audit reports zero findings; four development-tool advisories remain. See `docs/ai-resume-publication-review.md`.

## Current route architecture

- `/` remains the warm editorial full-stack portfolio.
- `/ai` is a standalone Signal Cinema applied-AI portfolio.
- `/work/truthlens` is a Signal Cinema experiment-log case study.
- `/work/feedbackos` and `/work/medmarket` remain the shared canonical case studies.
- Plain edition links replace the rejected segmented role switch.
- No `/ai/work/*`, public profile JSON, résumé-context route, or AI résumé placeholder exists.

## Signal Cinema design

The AI edition uses a near-black canvas, warm bone typography, restrained vermilion/cobalt signals, and compact editorial hierarchy. It retains the approved avatar but does not copy the full-stack layout. Generic cards, glass, skill ratings, particle fields, fake progress, generic icons, and sideways screenshot entrances are absent.

The homepage opens with identity rather than a project name. The three-scene TruthLens preview covers the question, the authentic interface, and the rejected release. Screenshots stay in normal flow at fixed geometry; text neither slides nor passes behind pinned media. A scroll-drawn comparison displays the observed `0.5648` held-out LIAR F1 below the `0.75` release gate, with the rejected/not-uploaded/not-activated decision and fail-closed serving boundary.

Three compact toolkit groups replace ten capability descriptions. FeedbackOS and MedMarket use separate copy/media grid areas, and stack below 1100px before minimum widths can collide. Screenshot scale and clip animations are removed. Supporting work, education, personal copy and contact use shorter paragraphs and smaller headings. Technical details remain in canonical case studies.

## Motion and accessibility

- CSS view timelines drive scene exposure and the real comparison lines; the homepage does not pin media.
- One client coordinator observes semantic chapters and updates the quiet navbar label.
- A second observer exists only as the no-scroll-timeline fallback; no scroll listener or scroll hijacking is used.
- Passive signal layers pause when off-screen or when the document is hidden.
- Reduced motion stops scene/line animation and leaves every evidence item visible. Chrome media emulation exercises this path.
- Native links, focus treatments, server-rendered content, useful image alternatives, and preserved TruthLens fragment IDs keep the experience operable without motion.

## Evidence and privacy

- Only `milindsk8r@gmail.com` is published.
- TruthLens is presented as a solo experiment whose artifact failed its release gate—not as a validated misinformation detector.
- FeedbackOS discloses its reviewed hard-coded `429` fallback.
- MedMarket describes extraction as fallible and retains human verification.
- Seeded captures are labeled as demonstrations, not usage or traction.
- The AI hero exposes the approved AI-specific résumé in a new tab. Its public PDF is verified byte-for-byte against the editable résumé workflow's master; the full-stack résumé remains separate.

## Verification state

Local and production verification passed: 49 route/content/privacy regressions and five rendered Chrome checks each, including four viewports, the AI résumé action, and full-stack → AI navigation. Two résumé regressions, PDFKit validation, local lint, typecheck, production build, and diff whitespace review passed. Screenshot inspection covered mobile and desktop project compositions, the hero, and TruthLens interface/result scenes. Browser assertions also verified reduced-motion image visibility, scroll-drawn release lines, and visible/off-screen passive-animation state. See `docs/ai-resume-publication-review.md` for the latest deployment evidence and limits. Next.js 16.3.5's parent-lockfile warning remains non-blocking locally.

## Remaining risk

- Live third-party demos can drift independently of this portfolio.
- CSS scroll timelines vary by browser; the observer fallback and static reduced-motion path remain required.
- Deployment verification and image-visibility limits are recorded in `docs/ai-production-verification.md`.
