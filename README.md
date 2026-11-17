# Milind Bansal — portfolio

Evidence-led full-stack and applied-AI engineering portfolio built with Next.js 16 and React 19.

Source: https://github.com/MilindDevX/portfolio. Live full-stack edition: https://portfolio-milind.vercel.app/; applied-AI edition: https://portfolio-milind.vercel.app/ai. The previous portfolio is preserved in a separate private archived repository; its history is not part of this project.

## Routes

- `/` — full-stack portfolio
- `/ai` — standalone applied-AI portfolio
- `/full-stack` — temporary 307 redirect to `/`
- `/work/truthlens` — TruthLens experiment-log case study
- `/work/feedbackos`
- `/work/skipq`
- `/work/medmarket`
- `/work/routelens` (earlier work)

Plain edition links move directly between the full-stack and AI portfolios; there is no segmented role switch. FeedbackOS and MedMarket remain canonical shared case studies, with no duplicate `/ai/work/*` routes. There are intentionally no public profile or résumé-context data endpoints. Public facts live in `data/portfolio.ts` and `data/ai-portfolio.ts`; each case study shows the evidence behind its claims.

The AI hero's View résumé link opens `/docs/Milind_Bansal_AI_Internship_Resume.pdf` in a new tab; the full-stack edition links its own résumé. Each public PDF must be byte-identical to its copy in `docs/resumes/`, and `swift tests/ai-resume-pdf.swift` and `swift tests/full-stack-resume-pdf.swift` check their facts and links.

TruthLens's ten evidence logs use content-sized chapters, consistent heading/body scale, authentic interface captures, and a same-scale release comparison. Its LIAR result is described as held-out evaluation, not evidence that the entire dataset was unseen.
## Local verification

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3017
PORTFOLIO_BASE_URL=http://127.0.0.1:3017 npm run test:portfolio
```

The interface uses local licensed fonts, the MB line mark (favicon and header), the FeedbackOS seeded review queue (local build), a rendered skipq `go test -race` run, the MedMarket seeded demo dashboard, the RouteLens directory home, and TruthLens landing plus seeded dashboard captures.

Since 2026-10-06 the AI edition opens with a Model work section (Amazon ML Challenge 2026, C-MAPSS) whose before/after metrics share one scale per study; TruthLens follows as chapter 03 of 07. The full-stack home leads with three featured case studies (FeedbackOS, skipq, MedMarket), then evalbar as open source, then team, competition and earlier work. A small point travels each section rule while that section is on screen; reduced motion leaves it still. Every route has its own title, canonical URL and share image (`app/**/opengraph-image.png`), plus `sitemap.xml` and `robots.txt`. `next.config.ts` sends CSP, nosniff, referrer, permissions and frame-deny headers; Next's inline bootstrap requires `'unsafe-inline'` without per-request nonces.

The AI portfolio uses the Signal Cinema system: near-black canvas, warm text, restrained vermilion/cobalt signals, and compact editorial type. Its three-scene TruthLens preview covers the question, authentic interface, and release decision without pinning or scaling screenshots. CSS view timelines change scene exposure and draw the real evaluation comparison. One client coordinator updates the current chapter, pauses off-screen/hidden-document passive layers, and supplies an IntersectionObserver fallback when scroll timelines are unavailable. Three toolkit groups replace the long capability list; detailed evidence stays in case studies. `prefers-reduced-motion` leaves complete static content.

## Content policy

Project copy is limited to repository evidence and facts directly confirmed by Milind. Unexecuted project test suites are never represented as passing, seeded figures are not presented as traction, and the retained PM2.5 screenshot with disputed embedded wording is not rendered publicly.
