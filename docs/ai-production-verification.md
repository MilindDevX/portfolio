<!-- ABOUTME: Production deployment and browser verification evidence for the approved compact AI portfolio. -->
# AI portfolio production verification

2026-09-13. Milind requested image rechecking, verification of the previous handoff, production deployment, and an AI link on the full-stack portfolio.

## Findings

- Before deployment, the public `/ai` route returned 404. The local production build returned 200. The previously verified redesign had not been deployed.
- A fresh isolated Chrome profile reproduced no hidden screenshot defect locally, including cold-cache and reduced-motion checks. This does not establish which page or browser state Milind saw; no unsupported CSS fix was applied.
- Full-stack navigation already contains a visible `AI edition ↗` link to `/ai`. A rendered mobile test now clicks it and verifies the standalone AI page opens.
- Homepage measures 497 visible words at all four tested widths. It contains three TruthLens scenes, fixed image geometry, scroll-drawn release comparison lines, and running/paused passive hero animation depending on visibility.
- Avatar, résumé, and production UI source were not modified during this verification task. Previously approved source was deployed; only browser tests and verification documentation were extended.

## Deployment

The existing Vercel project `milind-bansals-projects/portfolio` was used. Preview `portfolio-pbvz3x8pn-milind-bansals-projects.vercel.app` built successfully. Protected-preview checks returned 200 for `/ai` and both optimized applied-project screenshots, with decoded image files measuring 640×427 and 640×400.

The verified preview was promoted to the existing production domain. `/ai` now returns 200 and contains the question/interface/result scenes. No git staging, commit, or push occurred. Vercel CLI created gitignored `.vercel` metadata and a gitignored local authentication environment file automatically; no credentials were printed, included in documentation, or published as assets.

## Verification

- Local lint, typecheck, and production build passed.
- Local and public production route/content/privacy suites: 48 passed each.
- Local cold-cache Chrome suite: five passed, covering 375/768/1024/1440px plus full-stack → AI navigation.
- Browser checks assert image loading, screenshot dimensions, no copy overlap, no horizontal overflow, no screenshot transform/clip, reduced-motion visibility, TruthLens image decoding, release-line scroll animation, and passive-layer pause state.
- Unchanged résumé regression: one passed.
- Screenshot inspection includes mobile FeedbackOS and desktop MedMarket in reduced motion, plus the existing normal-motion hero/interface/result checks.

An initial post-promotion browser run hit the old page during the domain transition at its first viewport. The route subsequently returned the new content; verification was rerun after promotion status showed no operation in progress. Final public cold-cache Chrome suite: five passed, zero failures. Production screenshots were visually inspected for mobile MedMarket and desktop TruthLens, with both interfaces visibly rendered and separated from copy.

## Limits

Chrome rendered coverage is not cross-browser certification. Third-party demos can drift. The existing local multiple-lockfile root warning remains non-blocking. The historical compact-homepage report remains a record of the earlier local-only stage; this document records deployment. Detailed project claims were not newly re-audited; this task verifies the previous UI handoff, not model effectiveness.
