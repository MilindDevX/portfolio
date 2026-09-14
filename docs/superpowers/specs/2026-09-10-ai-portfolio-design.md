# AI Role Portfolio Design

## Status

Approved in conversation on 2026-09-10. This document defines the design only. It does not authorize implementation, committing, publishing, or deployment.

## Objective

Add a standalone AI-engineer portfolio at `/ai` within the existing portfolio application. It must represent Milind as an applied AI/product engineer targeting AI internships first, with open-source collaboration and carefully scoped freelance work as secondary opportunities.

The AI portfolio must feel like a complete portfolio of its own. It may share identity facts, the unchanged avatar, navigation infrastructure, contact details, and canonical project evidence with the full-stack portfolio. It must not reuse the full-stack portfolio's composition, section rhythm, visual metaphors, or page layout.

## Positioning

Public role label:

> MILIND BANSAL · APPLIED AI ENGINEER

Hero headline:

> I build with AI. I don’t outsource judgment to it.

Supporting direction:

> I’m Milind, a Computer Science and AI student interested in the whole journey—from training models to turning uncertain outputs into software people can actually use.

The first line introduces Milind's perspective, not a project. Project evidence begins immediately after the hero.

## Audience and opportunity hierarchy

1. AI internship recruiters and engineering teams
2. Open-source maintainers seeking useful AI or product-engineering contributions
3. Freelance clients with well-scoped applied-AI work

Copy must remain personal, specific, evidence-led, and free of corporate résumé language.

## Routes and navigation

- `/` remains the full-stack portfolio.
- `/ai` is the standalone AI portfolio.
- `/work/truthlens` is the new TruthLens flagship case study.
- `/work/feedbackos` and `/work/medmarket` remain the canonical case studies for those projects.
- The shared header exposes a persistent text role switch: `Full-stack` and `AI`.
- The current role is visibly and accessibly marked.
- Direct URLs must never require a gateway or mode-selection screen.
- No `/ai/work/*` duplicate case-study routes are introduced.

## Information architecture

The `/ai` page uses a focused, seven-part narrative:

1. **Identity-first hero** — approved headline, supporting copy, availability, primary contact action, and unchanged avatar.
2. **TruthLens flagship** — an experiment-log preview that begins with curiosity and ends with the rejected model release and the engineering response.
3. **Capability map** — evidence-linked AI capabilities rather than a technology-logo grid.
4. **Applied AI studies** — FeedbackOS followed by MedMarket, each introduced through its AI-specific decisions.
5. **Data and engineering range** — compact evidence from Beijing PM2.5, RouteLens, and the accepted open-source UI contribution.
6. **Current chapter** — education appears once, followed by a brief personal note.
7. **Contact** — a continuation of the same canvas, not a detached color card.

The page should be scannable in roughly two minutes. Deep detail belongs on case-study pages.

## Project hierarchy and evidence

### TruthLens — flagship

TruthLens is a solo, end-to-end project motivated by a personal question: could Milind train AI to detect misinformation?

The case study uses an experiment-log structure:

1. Question and hypothesis
2. Dataset provenance and label handling
3. TF-IDF and logistic-regression baseline
4. Evaluation approach
5. Out-of-distribution LIAR result
6. Rejected release decision
7. Fail-closed serving and release safeguards
8. SHAP explanations and drift monitoring
9. What the experiment established
10. Next valid experiment

The rejected experiment is a central proof of judgment:

- Held-out LIAR F1: `0.5648`
- Required release gate: `0.75`
- Result: the artifact was not uploaded or activated
- Serving boundary: analysis refuses service when no valid baseline is available

The portfolio must not describe the rejected model as accurate, production-validated, or successfully deployed. In-dataset scores must not substitute for OOD evidence.

Approved links:

- Source: `https://github.com/MilindDevX/TruthLens`
- Live interface: `https://frontend-ten-theta-81.vercel.app/`

The live link is an interface and system demonstration, not proof of model validity. Portfolio copy must not repeat the live page's claim that drift monitoring “ensures” calibration; monitoring can detect drift but cannot guarantee calibration.

### FeedbackOS — applied AI workflow

The canonical `/work/feedbackos` case study remains shared, but gains explicit evidence covering:

- queued classification work
- model-output validation with Zod
- confidence-aware human review
- malformed, uncertain, delayed, and rate-limited output behavior
- organization-scoped aggregate caching

### MedMarket — assisted extraction

The canonical `/work/medmarket` case study remains shared, but gains explicit evidence covering:

- document extraction as assistance rather than authority
- unreadable and fallback states
- human verification
- catalogue and pricing safeguards outside the AI boundary

### Supporting evidence

- Beijing PM2.5 remains labeled as a six-person data-analysis coursework project with Milind's specific leadership role.
- RouteLens remains engineering evidence, not an AI project.
- The accepted BlogApp pull request remains a small open-source contribution, not a major project.
- The RL hackathon is omitted because Milind's contribution was ideation and environment testing without a distinct owned artifact.

## Capability map

Capabilities must link to evidence rather than appear as unsupported self-ratings:

- model training and dataset provenance — TruthLens
- evaluation and release gates — TruthLens
- explainability — TruthLens
- inference serving and fail-closed behavior — TruthLens
- drift detection — TruthLens
- queued AI workflows — FeedbackOS
- schema validation and review paths — FeedbackOS
- fallible extraction and fallback design — MedMarket
- data preparation and exploratory analysis — Beijing PM2.5
- full-stack delivery — all primary projects

No percentages, progress bars, proficiency scores, generic icons, or technology-logo walls.

## Visual direction: Inference Notebook

The AI portfolio's visual system is a warm, paper-dominant experimental notebook.

### Palette

- warm bone and ivory primary surfaces
- deep charcoal ink
- muted rust for evaluation and attribution emphasis
- muted cobalt for probability and comparison emphasis
- extremely subtle warm/cool spectral stains

Gradients must resemble printed heat, faded evidence, or probability fields. They must not resemble purple neon illumination or generic mesh-gradient AI branding.

### Typography

- Bricolage Grotesque for personal display moments
- Atkinson Hyperlegible for long-form reading
- restrained monospace for measurements, dataset notes, and evaluation metadata only

No futuristic display fonts.

### Composition

- asymmetric editorial layouts
- thin rules and notebook margins
- calibration curves, token-attribution marks, confidence bands, and evidence annotations
- varied section rhythm rather than repeated bento or card grids
- real product screenshots with restrained annotations
- no neural-network nodes, floating particles, glassmorphism, sci-fi panels, generic AI icons, emoji icons, or laptop mockup clutter

The avatar asset remains unchanged, appears once in the hero, performs no activity, and carries no labels or disclaimer.

## Motion system

### Passive motion

- probability fields drift very slowly beneath the paper surface
- grain shifts subtly without visible flicker
- selected calibration traces breathe through small opacity changes
- passive motion pauses when the document is not visible

### Active motion

- hero content assembles as an annotated experiment sheet
- the TruthLens calibration/evaluation curve draws with scroll progress
- token-attribution words respond to pointer and keyboard focus
- evidence rows reveal in a deliberate sequence
- screenshot annotations appear as their evidence enters view
- the role switch preserves spatial continuity between destinations

### Motion guardrails

- motion is controlled and cinematic, with calm intervals
- no cursor replacement
- no scroll hijacking
- no animation on every element
- no endless particles
- prefer transform and opacity for performance
- `prefers-reduced-motion: reduce` receives complete, legible static states
- mobile keeps all information with simpler choreography

## Project visuals

Use authentic product images:

- TruthLens current hosted landing and dashboard views
- FeedbackOS public home/dashboard views
- MedMarket dashboard view

If an authenticated TruthLens dashboard cannot be captured without private or fabricated data, use a locally rendered, clearly seeded interface state derived from the actual source. Do not invent product functionality or present seeded values as user traction.

Annotations must explain actual boundaries and decisions. Abstract AI illustration and generic device frames are excluded.

## Education and personal context

Education appears once inside the “Current chapter” section:

- B.Tech in Computer Science and Artificial Intelligence
- Newton School of Technology at Rishihood University
- 2024–2028
- CGPA 9.28/10
- Finance minor

The section must explain the meaning of the Finance minor plainly rather than leaving it as an unexplained badge.

Interests remain one compact human note: music, travel, games, coding, tinkering, gym, books, sleep, manga, movies, anime, sports, friends, and building ideas that solve an experienced problem or create genuine excitement. Marvel wording remains excluded.

## Contact and résumé policy

- Public email: `milindsk8r@gmail.com`
- College email must not appear in source, output, assets, or generated documents.
- Contact copy explicitly welcomes AI internships first, open-source collaboration second, and scoped freelance work third.
- Contact uses the same notebook canvas without a detached footer color.
- No résumé link appears on `/ai` until an AI-specific résumé exists.
- The current full-stack résumé remains available only in its existing full-stack context.

## Internal data boundaries

Use one private build-time identity source plus separate full-stack and AI content modules. Shared facts include identity, public contact, education, avatar, and social destinations. Role-specific modules own positioning, project order, section copy, and role-specific calls to action.

Do not create public `/profile.json`, `/resume-context`, or equivalent machine-readable résumé endpoints.

## Accessibility, responsiveness, and performance

- Semantic landmarks and heading order
- Visible keyboard focus
- Text contrast of at least 4.5:1 for normal text
- Pointer interactions mirrored by keyboard behavior
- Descriptive screenshot alternative text
- No meaning communicated by color or motion alone
- No horizontal overflow at 375px
- Responsive review at 375px, 768px, 1024px, and 1440px
- Motion verified under normal and reduced-motion preferences
- Reserve image space to avoid layout shift
- Pause or simplify off-screen continuous animation

## Test-driven implementation requirements

Before production changes, add failing tests that cover:

- `/ai` returns a successful page with the approved positioning and project hierarchy
- `/work/truthlens` returns a complete evidence-led case study
- TruthLens source and approved live-interface links are correct
- the rejected model result and release boundary are represented accurately
- FeedbackOS and MedMarket retain canonical routes and include AI-specific evidence
- the role switch marks the current role accessibly
- education appears once on `/ai`
- no AI résumé link appears
- the private college address is absent from all published routes and assets
- `/profile.json`, `/resume-context`, and unknown project routes remain unavailable
- approved avatar and screenshot assets resolve
- reduced-motion CSS provides immediate final states

Then implement the smallest change that passes those tests.

## Verification before handoff

1. Run the portfolio test suite.
2. Run ESLint.
3. Run TypeScript without emit.
4. Build the production application.
5. Inspect `/ai`, `/work/truthlens`, and changed shared case studies at all target widths.
6. Verify keyboard navigation, focus, contrast, active motion, passive motion, and reduced motion.
7. Verify real project links and screenshot authenticity.
8. Review the complete diff for unrelated changes, unsupported claims, duplicated facts, and stale documentation.
9. Update README route and verification documentation.
10. Report remaining risks.

No commit, push, publication, or deployment occurs without Milind's explicit approval.

## Acceptance criteria

- **Given** a visitor opens `/ai`, **when** the first viewport renders, **then** it introduces Milind's applied-AI perspective without discussing a project in the headline.
- **Given** a recruiter scans the page, **when** they follow the narrative, **then** TruthLens leads, FeedbackOS and MedMarket provide applied-AI evidence, and non-AI work remains clearly secondary.
- **Given** the TruthLens experiment failed its release gate, **when** the case study presents the result, **then** it shows `0.5648` against the `0.75` requirement and states that the artifact was rejected.
- **Given** a visitor moves between `/` and `/ai`, **when** they use the role switch, **then** each destination remains a complete standalone portfolio rather than a recolored shared template.
- **Given** a visitor uses keyboard navigation or reduced-motion preferences, **when** they interact with the page, **then** no information or action depends on hover or animation.
- **Given** a visitor reaches contact, **when** the final section appears, **then** the visual canvas continues without a detached color block and exposes only the personal public email.
- **Given** a crawler or visitor requests machine-readable résumé routes, **when** `/profile.json` or `/resume-context` is requested, **then** the route remains unavailable.

## Explicitly out of scope

- AI résumé creation
- TruthLens model retraining or redeployment
- A separate AI domain or deployment
- Duplicate AI-specific case-study routes
- Public structured profile endpoints
- RL hackathon presentation
- Changes to the avatar
- Commit, push, pull request, or production deployment
