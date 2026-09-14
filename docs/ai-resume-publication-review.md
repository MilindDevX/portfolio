<!-- ABOUTME: Verification and publication status for the approved AI portfolio résumé link. -->
# AI résumé link

2026-09-13. Résumé addition and security upgrade approved and deployed. The AI hero now links to the public AI-specific PDF.

- AI hero's existing action row now offers View résumé, opening the approved AI PDF in a new tab with noopener/noreferrer. The existing scroll cue still links to project evidence.
- Public asset `/docs/Milind_Bansal_AI_Internship_Resume.pdf` is byte-identical to the approved master in `docs/resumes/`, including the Web & Tools label and AI portfolio destination.
- Shared destination data contains separate full-stack and AI résumé paths. Full-stack navigation and résumé were not changed.
- The new server-backed regression failed before implementation; it now passes and verifies the fetched PDF bytes/content type and role-specific links.
- Lint, production build, typecheck, 49 portfolio regressions, two résumé checks, and PDFKit validation passed. PDFKit confirmed one page, selectable facts, aligned college/CGPA, eleven clickable links, and no private college address.
- Five rendered Chrome checks passed, including résumé-link visibility, 44px tap height, new-tab target, and viewport containment at 375/768/1024/1440px while preserving all existing screenshot/motion assertions. Mobile hero capture was visually inspected. A preliminary browser attempt could not connect after the QA browser was stopped; restarting it and rerunning the isolated suite passed.

## Publication risk

Local node_modules was absent; npm ci initially restored the existing lockfile. Its audit reported nine affected packages, including critical Next.js advisories in 16.2.4. The upstream [AVIF image-optimization RCE advisory](https://github.com/vercel/next.js/security/advisories/GHSA-2xp9-vwfh-vxw4) lists versions below 16.3.3 as affected. It is conditional on AVIF inputs and is not proof this portfolio was exploitable; other high-severity image-optimization/Server Component advisories also existed. No exploit testing was performed.

Milind approved upgrading, retesting, and deploying. Next.js and eslint-config-next are now pinned to 16.3.5. The compatible baseline-browser-mapping transitive update resolves the remaining production-audit moderate finding. Final lint, build, and typecheck passed; `npm audit --omit=dev` reports zero vulnerabilities. Four development-tool advisories remain (one low, three high in Babel/brace-expansion/Browserslist/js-yaml); these are not represented as fixed. No React change, configuration change, forced audit fix, staging, or commit occurred. The updated Next.js root warning is non-blocking: it ignores the parent lockfile outside this repository rather than inferring it as the root.

## Deployment

Preview `portfolio-jyan09bmw-milind-bansals-projects.vercel.app` built with Next.js 16.3.5. Protected preview checks returned 200 for the AI homepage and résumé PDF; the PDF matched the approved master byte-for-byte. This preview was promoted to the existing `portfolio-milind.vercel.app` domain. The public PDF returned 200 and matched the master; promotion status showed no operation in progress before public-browser verification began.

Live destinations: `/ai` and `/docs/Milind_Bansal_AI_Internship_Resume.pdf`. The full-stack edition continues using `/docs/Milind_Bansal_Full_Stack_Resume.pdf`.

Final public verification: all 49 portfolio regressions and five rendered Chrome checks passed. They verify the exact downloaded résumé bytes, PDF MIME type, AI-only destination, unchanged full-stack link, résumé action visibility/tap height at four widths, authentic screenshots, normal/reduced motion, and mobile role navigation. The production mobile hero was visually inspected with View résumé visibly rendered. Final diff whitespace review passed; no staging, commit, or push occurred.
