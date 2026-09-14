# AI case-study and audit revision

Approved for local implementation 2026-09-13. Publication separately approved and completed 2026-09-14 with the updated full-stack résumé. Earlier entries below record pre-publication verification.

## Scope and acceptance

- TruthLens stays on the approved Signal Cinema canvas. Short chapters use content height rather than viewport-height padding; chapter headings remain proportional to readable body text.
- All ten log anchors remain, including the homepage's release-decision deep link. Authentic landing/dashboard screenshots remain unscaled and visible. A same-scale release comparison and development/test split trace carry evidence rather than decoration.
- Screenshot-context correction: the empty analysis screen belongs inside serving boundary (log 06), showing input workflow, not a successful prediction or proof of fail-closed serving. The landing capture belongs inside experiment limits (log 09), showing separation of source/claim/model signals, not model validation. Each has an associated, readable explanation identifying visible details and limits; no freestanding screenshot interludes remain. Every included element must have a defensible visitor-facing purpose.
- AI education renders one CGPA label and explains the Finance minor in one sentence. Opportunity priority is internships, open-source contributions, then scoped freelance work.
- The AI identity marks `/ai` as the current page only on that exact route. BlogApp copy identifies login/registration screens without inflating ownership.
- LIAR wording is held-out evaluation, not blanket OOD validation: reviewed training source uses LIAR train/validation and a separate test split. No unverified in-domain score added.
- Approved avatar, personal intro, toolkit heading, full-stack design, and both résumé files are unchanged.

## Rejected audit suggestions

The named AI_ML résumé is not the current artifact. The live Internship résumé returned HTTP 200 and matched the approved PDF; it has correct GPA and no third-year, 91.3%, or W&B claim. No rename/replacement warranted. The scroll cue is a CSS line, not an icon-font dependency. Earlier intro wording does not override later approved compact copy. Keep the human toolkit heading.

## Verification

Case layout regressions first failed at all four widths (375/768/1024/1440): headings overwhelmed body and desktop chapters occupied 612px for short content. Current case checks cover readable body text, heading/body ratio, chapter density, image bounds/loading, viewport overflow, and both normal/reduced motion, with rendered screenshots.

Route checks cover singular credentials, exact-route current-page semantics, preserved evidence anchors and résumé byte identity. Full AI homepage checks retain project-image separation, visible passive motion, paused off-screen layers, active release comparison, reduced-motion content, and full-stack-to-AI navigation.

Typecheck initially found duplicate automatically generated `.next/types/* 2.ts` declarations. Those three exact generated copies were moved recoverably to a task-specific temporary archive; production source/configuration was not altered to hide the error.

Final local verification: 52 route/content/résumé-source checks and nine rendered browser checks passed against the production build. Lint, typecheck, production build, PDFKit (one page, selectable facts, eleven links, no private college address), and diff whitespace checks passed. Desktop/mobile case views, tablet/reduced-motion screenshot evidence, project-image compositions, and education layouts were visually inspected. Native release-chapter links also cleared sticky navigation at all four widths.

No commit, push, preview publication, or production deployment performed. The unrelated parent-directory lockfile warning remains; it did not prevent build or workflow verification.

Screenshot-context follow-up: the added rendered regression first failed because both figures had no containing argument (`chapter: null`). It now verifies correct chapter ownership and programmatic caption association. The revised production build passes the same 52 route/source checks and nine browser checks; contextual captures were visually inspected at mobile, tablet, and desktop sizes. No résumé or full-stack changes were introduced.

The native-anchor test's fixed 500ms delay sampled ongoing long-distance smooth scrolling on desktop after the figures moved into chapters. Replaced that delay with bounded polling for the existing scroll-padding inset; all four case/anchor checks passed with no production scrolling change.

## Publication — 2026-09-14

Verified preview `portfolio-boiyt8xc4-milind-bansals-projects.vercel.app` in the existing Vercel project, then promoted it to `portfolio-milind.vercel.app`. Preview case context and both résumé PDFs matched the local deliverables. Production promotion status confirmed no pending operation; public downloads of both role-specific PDFs matched their masters. Full-stack résumé now uses the AI résumé format, verified project evidence, and the full-stack portfolio destination; the AI PDF is unchanged. No staging, commit, or push performed.

Final public verification passed: 51 portfolio regressions and nine rendered responsive/motion checks, including contextual figures, native chapter links, current-route semantics, public résumé byte identity, and mobile edition navigation. Both downloaded PDFs passed PDFKit checks; the full-stack PDF was rendered and inspected. Lint, typecheck, production build, and final whitespace review passed locally. Private brain stayed outside all uploaded files.
