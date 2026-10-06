# Portfolio evidence ledger

Verified 2026-09-11. This is the source of truth for portfolio copy. Repository facts, user-confirmed ownership, authentic media, and unexecuted tests remain explicitly distinguished.

## TruthLens

**Sources and ownership.** [Repository](https://github.com/MilindDevX/TruthLens); [approved live interface](https://frontend-ten-theta-81.vercel.app/). Milind confirmed that TruthLens began with his personal question of whether he could train AI to detect misinformation, and that he owned the project end to end. Current reviewed source evidence covers a TF-IDF/logistic-regression baseline, SHAP explanations, drift monitoring, and the React presentation components used for the public interface.

**Dataset and release boundary.** ISOT label provenance was corrected before retraining. Reviewed source at `0542a76377d1e37384c65d4d0a1023a4521bfdad` loads LIAR train/validation splits into development and evaluates against a separate LIAR test split (`ml/training/text/train_baseline.py`, lines 111–120 and 193–204). This supports held-out evaluation, not a claim that all LIAR data was unseen or that the result establishes out-of-distribution generalization. Reconciled 2026-09-13. The held-out LIAR F1 was `0.5648` against a required release gate of `0.75`; the artifact was rejected, retained for investigation, and **not uploaded or activated**. Serving refuses inference without a valid baseline. SHAP describes baseline token contribution rather than factual truth, and drift monitoring can detect distribution change but cannot guarantee calibration.

**Prohibited claims.** Do not call TruthLens a validated detector, claim guaranteed calibration, production accuracy, reliable misinformation detection, users, customers, or traction. The live interface is a product-surface demonstration, not evidence that the rejected model is valid.

**Authentic landing media.** `public/images/projects/truthlens-landing.webp` comes from the approved live interface at [frontend-ten-theta-81.vercel.app](https://frontend-ten-theta-81.vercel.app/). It was captured with Chrome on 2026-09-11 at a 1440 × 900 viewport, with browser chrome excluded. The public page is preserved as rendered: no DOM or copy was modified, and the visible backend-latency banner records the live interface state at capture time. The PNG capture was converted losslessly to WebP with `cwebp -lossless -z 9`. Output: 1440 × 900. SHA-256: `5a9d413b027a3963b16cc3248f8158d0ea7b8e4e061801717179a597f9324413`.

**Authentic dashboard media.** `public/images/projects/truthlens-dashboard.webp` derives from the current TruthLens frontend at source revision [`0542a76377d1e37384c65d4d0a1023a4521bfdad`](https://github.com/MilindDevX/TruthLens/tree/0542a76377d1e37384c65d4d0a1023a4521bfdad). The current `Navbar` and `Dashboard` presentation components were rendered locally in an empty fixture explicitly labeled `LOCAL SEEDED INTERFACE PREVIEW · NO USER DATA`. A temporary, local-only null-safe adjustment was needed because the blank dashboard calls `isPublishedFactCheck(null)` during render; neither the fixture wrapper nor that adjustment is a portfolio deliverable. No external account was created, no private data was entered or transmitted, and no analysis result, confidence score, usage number, user count, or traction value was seeded. The input remained empty and disabled. The PNG capture was converted losslessly to WebP with `cwebp -lossless -z 9`. Output: 1440 × 900. SHA-256: `cde12dfb503cd9d94ad7368ceb773ff64887976a4ecd8f439b7f49103b380b2d`.

## RouteLens

**Sources.** [Repository revision](https://github.com/MilindDevX/routelens/tree/a8e3daf55473630db26d9cf25173da0723edbf16); [live directory](https://routelens-xi.vercel.app/); [live response-diff route](https://routelens-xi.vercel.app/diff/).

**Allowed wording.** Browser-based utility that turns OpenAPI/Swagger specifications and hand-entered routes into a searchable API directory and compares JSON responses structurally. The reviewed source uses Next.js 14.2.35, React 18, strict TypeScript, Tailwind CSS, and `js-yaml`. It persists directory and baseline data in guarded browser storage, parses JSON before YAML, resolves internal references defensively, and uses identity keys when suitable arrays are compared.

**Ownership provenance.** Milind directly confirmed that he built RouteLens solo, end to end, for a Digital Heroes internship qualifying round. It is challenge work, not employment, endorsement, selection, or client work.

**Evidence and limits.** Directory code deduplicates by project, HTTP method, and path. No test files or test script exist in the reviewed revision. External and circular references are reported rather than expanded; arrays without usable identity keys compare by position. Do not claim automated-test coverage, zero outbound traffic, universal reference support, performance, users, or adoption.

**Authentic media.** `public/images/projects/routelens-directory-home.webp`, 1440 × 900, optimized from the 2026-09-10 public-directory capture retained as `docs/evidence/routelens-directory-home-original.png`. Caption: “RouteLens public API Directory home. Built solo for a Digital Heroes internship qualifying round; not client work or an endorsement.” The adjacent transcript names the visible input paths and empty route state. SHA-256: `9de6e1476e34a34ebb560c8677e543e8fc30250c3391271a54d57acdeb197cb4`.

## FeedbackOS

**Sources.** [Repository revision](https://github.com/MilindDevX/feedbackos/tree/440bdf5c970e0b084781fb28507a3d3d6845be30); [public demo](https://feedbackos.vercel.app).

**Allowed wording.** Full-stack feedback-triage prototype that ingests feedback, queues classification into theme, sentiment, and product area, then presents filtered feedback and aggregate trends. The reviewed source uses Next.js 16.2.7, React 19.2.4, TypeScript, Prisma/PostgreSQL, Redis/BullMQ, NextAuth, Zod, and the OpenAI SDK. It includes separate queue workers, bounded classification concurrency, Zod-validated model output, a low-confidence review path, organization-scoped cached summaries, capped CSV ingestion, and AES-256-GCM integration-credential storage.

**Ownership provenance.** Milind directly confirmed that he designed and built this solo, end to end. Repository inspection alone does not establish contribution scope.

**Evidence and limits.** Unit, integration, and Playwright files exist but were not executed. The public demo exposes only sign-in; the portfolio capture comes from a local build. The classifier fallback can return a hard-coded mock result on upstream `429`. Do not claim passing tests, real-time guarantees, model accuracy, customers, adoption, or uninterrupted AI classification.

**Authentic media (current, 2026-10-06).** `public/images/projects/feedbackos-review-queue.webp`, 1440 × 900, from a local `next dev --webpack` build on an isolated database seeded by `prisma/seed.ts`, signed in as the seeded `demo@feedbackos.app` via the console-printed magic link; all secrets overridden with throwaway values; Next dev badge hidden. Original: `docs/evidence/feedbackos-review-queue-original.png`. Shows 48 seed items and two Needs Review flags. Caption: “Local build signed in as the seeded demo user: 48 seed items. Needs Review marks low-confidence classifications; not usage or traction.” SHA-256: `860ca771610ef189cc2dab30ad66feb7a822c3455dce44f32bec3b77f2debc3e`. Not used: the dashboard view, because its 21-item total disagrees with the 48-item list and its first axis label is clipped.

**Previous media (retired from pages).** `public/images/projects/feedbackos-public-home.webp`, 960 × 640, optimized from the responsive public-home capture retained as `docs/evidence/feedbackos-public-home-original.png` on 2026-09-10. It shows the real public entry only; no authenticated workspace or private data is shown. Caption: “Public home entry; authenticated workspace is not shown.” SHA-256: `4a7574c41706bb5d3b77207dd5ac5260fbe0c403a30e4bc73ccd6f7dbda55088`.

## MedMarket

**Sources.** [Repository revision](https://github.com/MilindDevX/MedMarket/tree/98b5edad9fc4525a503bff05cc00719a1ceb6986); [public frontend](https://med-market-self.vercel.app); [API documentation](https://medmarket-g08v.onrender.com/api/docs).

**Allowed wording.** Self-directed exploration of consumer, pharmacy-owner, and admin medicine-marketplace workflows. The reviewed source uses React 19/Vite, Express 5/TypeScript, Prisma 7/PostgreSQL, and JWT authentication. It separates role-aware routes, enforces OTC/MRP rules in controller logic, emits tiered expiry notifications, and treats AI document extraction as fallible with fallback and unreadable states.

**Ownership provenance.** Milind directly confirmed that he designed and built this solo, end to end. Repository inspection alone does not establish contribution scope.

**Evidence and limits.** The source contains 38 backend and 20 frontend test definitions, but they were not rerun. Phase-one inventory is OTC-only. Do not claim database-level MRP enforcement, regulatory verification, production adoption, real transaction volume, compliance certification, or 58 passing tests. Seeded figures are not traction.

**Authentic media.** `public/images/projects/medmarket-admin-dashboard.webp`, 1440 × 900, optimized from the public demo admin-dashboard capture retained as `docs/evidence/medmarket-admin-dashboard-original.png` on 2026-09-10. Access used credentials displayed by the public demo. The visible records and metrics are seeded demonstration data, not private records, usage, or traction. Caption: “Public demo admin dashboard with seeded data; not usage or traction.” SHA-256: `3ac822b2085f046a212dd3d67599a24d8ad938e779dc089e862ca09bd788c117`.

## Beijing PM2.5 analysis

**Sources.** [Repository](https://github.com/MilindDevX/SectionD_G12_BeijingPM25Analysis); [Tableau workbook](https://public.tableau.com/app/profile/milind.bansal5979/viz/DVA2-Capstone/RiskSeverityOverview).

**Allowed wording.** In a six-person data-visualization capstone, Milind led data sourcing and ETL/cleaning for 43,824 hourly Beijing PM2.5 observations, then supported analysis, Tableau work, and reporting. The cleaned data shows 9,270 of 43,824 hours (21.153%) above the project’s 150 µg/m³ analysis threshold. Seasonal and hourly views are observational, not causal.

**Evidence and limits.** The contribution matrix assigns project, data, and ETL lead roles to Milind; other teammates led analysis and visualization. The committed processed CSV has 14 columns. Mean PM2.5 is 97.801 µg/m³, median 72 µg/m³, maximum 994 µg/m³. Do not claim sole dashboard ownership, prediction, health or policy impact, causal weather effects, or WHO-guideline findings.

**Authentic media.** `docs/evidence/beijing-pm25-temporal-patterns.webp` is retained as provenance only and excluded from deployment. Its visible WHO/hazardous wording conflicts with verified evidence; a caption cannot neutralize embedded claims.

## Amazon ML Challenge 2026 (added 2026-10-06)

**Source.** Local methodology `student_resource/Documentation_template.md` (Team Noobs, prepared 2026-10-01) and code under `student_resource/code/business_entity_resolution/`. No public repository.

**Allowed wording.** Team competition entry, co-built (Milind confirmed equal contribution). Multi-route blocking feeding a LightGBM pair classifier over 1,732,544 test S1 rows. Held-out macro F0.5 0.8476 → 0.8925; pair recall 0.8433 → 0.9068; public-leaderboard F0.5 0.819 → 0.869733 after a data-only unseen-country filter. 28 unit tests re-run and passing on 2026-10-06.

**Limits.** Public scores come from a leaderboard test subset, not the private result; no rank is known. The held-out group was used for threshold tuning, so it is not an untouched test estimate. Do not claim sole authorship.

## C-MAPSS team project (added 2026-10-06)

**Source.** [Public repository](https://github.com/vks-g/cmapss-rul-hybrid); Milind's merged PRs #28, #29, #30, #37; `docs/ml-models-notebook.md`.

**Allowed wording.** Four-person team; 4 merged PRs covering engine-level splits, fold-fitted regime normalization with tests, EDA, and matched raw-vs-engineered model comparison with tree SHAP. FD001 holdout RMSE: Random Forest raw 30.759 → engineered 26.472.

**Limits.** Mean CV RMSE did not improve for any model, so the holdout gain is not a general feature advantage. Do not claim review counts or ownership of teammates' phases.

## BlogApp contribution (retired from public pages 2026-10-06)

Removed from both résumés and both portfolio editions as too minor to headline. Kept here as provenance.

**Source.** [Merged pull request #2](https://github.com/Pinfinity07/BlogApp/pull/2).

**Allowed wording.** One accepted Hacktoberfest UI contribution: a merged login and signup layout update across two React components.

**Limits.** Do not claim broad maintainer ownership, measured UX impact, or implemented remember-me/password-reset behavior; those controls were presentation-only.
