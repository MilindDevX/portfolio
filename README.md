# Milind Bansal — portfolio

Evidence-led full-stack and applied-AI engineering portfolio built with Next.js 16 and React 19.

Source: https://github.com/MilindDevX/portfolio. Live full-stack edition: https://portfolio-milind.vercel.app/; applied-AI edition: https://portfolio-milind.vercel.app/ai. The previous portfolio is preserved in a separate private archived repository; its history is not part of this project.

## Routes

- `/` — full-stack portfolio
- `/ai` — standalone applied-AI portfolio
- `/full-stack` — temporary 307 redirect to `/`
- `/work/truthlens` — TruthLens experiment-log case study
- `/work/routelens`
- `/work/feedbackos`
- `/work/medmarket`

Plain edition links move directly between the full-stack and AI portfolios; there is no segmented role switch. FeedbackOS and MedMarket remain canonical shared case studies, with no duplicate `/ai/work/*` routes. There are intentionally no public profile or résumé-context data endpoints. Approved public facts live in `data/portfolio.ts`; evidence and claim limits live in `docs/portfolio-evidence.md`.

The AI hero's View résumé link opens `/docs/Milind_Bansal_AI_Internship_Resume.pdf` in a new tab. This public asset must match the approved master in `docs/resumes/`; the full-stack edition retains its separate résumé.

TruthLens's ten evidence logs use content-sized chapters, consistent heading/body scale, authentic interface captures, and a same-scale release comparison. Its LIAR result is described as held-out evaluation, not evidence that the entire dataset was unseen. Local audit decisions and verification scope: `docs/ai-case-study-audit-review.md`.

## Local verification

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3017
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

The interface uses local licensed fonts, the unchanged student-developer avatar, the RouteLens directory home, FeedbackOS public home entry, MedMarket seeded demo dashboard, and TruthLens landing plus seeded dashboard captures.

Since 2026-10-06 the AI edition opens with a Model work section (Amazon ML Challenge 2026, C-MAPSS) whose before/after metrics share one scale per study; TruthLens follows as chapter 03 of 07. The full-stack home replaces the BlogApp section with Team + competition work. Every route has its own title, canonical URL and share image (`app/**/opengraph-image.png`), plus `sitemap.xml` and `robots.txt`. `next.config.ts` sends CSP, nosniff, referrer, permissions and frame-deny headers; Next's inline bootstrap requires `'unsafe-inline'` without per-request nonces.

The AI portfolio uses the Signal Cinema system: near-black canvas, warm text, restrained vermilion/cobalt signals, and compact editorial type. Its three-scene TruthLens preview covers the question, authentic interface, and release decision without pinning or scaling screenshots. CSS view timelines change scene exposure and draw the real evaluation comparison. One client coordinator updates the current chapter, pauses off-screen/hidden-document passive layers, and supplies an IntersectionObserver fallback when scroll timelines are unavailable. Three toolkit groups replace the long capability list; detailed evidence stays in case studies. `prefers-reduced-motion` leaves complete static content.

## Content policy

Project copy is limited to repository evidence and facts directly confirmed by Milind. Unexecuted project test suites are never represented as passing, seeded figures are not presented as traction, and the retained PM2.5 screenshot with disputed embedded wording is not rendered publicly.
