// ABOUTME: Server-backed public portfolio contracts, privacy checks, and static visual-system invariants.
import assert from "node:assert/strict";
import test from "node:test";
import { readFile, readdir } from "node:fs/promises";

const origin = process.env.PORTFOLIO_BASE_URL || "http://127.0.0.1:3017";
const get = (path, init) => fetch(new URL(path, origin), init);
const page = async (path) => {
  const response = await get(path);
  return { response, html: (await response.text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "") };
};

const publishableText = async (directory) => {
  const entries = await readdir(new URL(directory, import.meta.url), { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => entry.isDirectory()
    ? publishableText(`${directory}/${entry.name}`)
    : /\.(?:css|html|json|md|ts|tsx)$/i.test(entry.name)
      ? readFile(new URL(`${directory}/${entry.name}`, import.meta.url), "utf8")
      : ""));
  return files.join("\n");
};

test("landing page publishes the approved full-stack profile", async () => {
  const { response, html } = await page("/");
  assert.equal(response.status, 200);
  for (const fact of ["Milind Bansal", "Computer Science and Artificial Intelligence", "Newton School of Technology at Rishihood University", "9.28/10", "milindsk8r@gmail.com", "RouteLens", "FeedbackOS", "MedMarket", "Beijing PM2.5", "Amazon ML Challenge 2026", "C-MAPSS"]) {
    assert.ok(html.includes(fact), `Missing approved fact: ${fact}`);
  }
  for (const singular of ["Newton School of Technology at Rishihood University", "CGPA: 9.28/10"]) {
    assert.equal(html.split(singular).length - 1, 1, `${singular} must render exactly once`);
  }
  assert.ok(html.includes("Built solo for a Digital Heroes internship qualifying round; not client work or an endorsement."));
  assert.ok(html.includes("Artifact transcript"));
});

const work = [
  ["routelens", "RouteLens", "https://github.com/MilindDevX/routelens", "https://routelens-xi.vercel.app"],
  ["feedbackos", "FeedbackOS", "https://github.com/MilindDevX/feedbackos", "https://feedbackos.vercel.app"],
  ["medmarket", "MedMarket", "https://github.com/MilindDevX/MedMarket", "https://med-market-self.vercel.app"],
];

for (const [slug, name, source, demo] of work) {
  test(`${name} has a static evidence-led case study`, async () => {
    const { response,
      html } = await page(`/work/${slug}`);
    assert.equal(response.status, 200);
    assert.ok(html.includes("<h1") && html.includes(name));
    assert.ok(html.includes(`href="${source}"`));
    assert.ok(html.includes(`href="${demo}"`));
    for (const section of ["The problem", "Constraints", "Decisions", "Reflection"]) assert.ok(html.includes(section), `${name} is missing ${section}`);
  });
}

test("reserved full-stack route is a temporary redirect", async () => {
  const response = await get("/full-stack", { redirect: "manual" });
  assert.equal(response.status, 307);
  assert.equal(new URL(response.headers.get("location"), origin).pathname, "/");
});

test("AI portfolio has an independent role-aware shell", async () => {
  const { response, html } = await page("/ai");
  assert.equal(response.status, 200);
  assert.ok(html.includes("I build with AI. I don’t outsource judgment to it."));
  assert.ok(!html.includes("Current résumé"));
  assert.ok(!html.includes("Milind_Bansal_Full_Stack_Resume.pdf"));
});

test("AI routes use Signal Cinema navigation without a segmented role switch", async () => {
  for (const path of ["/ai", "/work/truthlens"]) {
    const { html } = await page(path);
    assert.ok(html.includes('data-ai-shell="true"'));
    assert.ok(html.includes("data-ai-chapter-output"));
    assert.ok(html.includes('href="/"'));
    assert.ok(html.includes("FULL-STACK EDITION"));
    assert.ok(!html.includes('aria-label="Portfolio role"'));
    assert.ok(!html.includes('class="role-switch"'));
  }
});

test("full-stack navigation exposes AI as a plain edition link", async () => {
  const { html } = await page("/");
  assert.ok(html.includes('href="/ai"'));
  assert.ok(html.includes("AI edition"));
  assert.ok(!html.includes('aria-label="Portfolio role"'));
});

test("AI hero is identity-first and uses the approved unchanged avatar", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes("MILIND BANSAL · APPLIED AI ENGINEER"));
  assert.ok(html.includes("I build with AI. I don’t outsource judgment to it."));
  assert.ok(html.includes("student-developer-portrait-v2.webp"));
  assert.equal(html.split('alt="Illustrated student developer avatar"').length - 1, 1);
  assert.ok(!html.includes("My favorite AI result"));
  assert.ok(!html.includes("neural network"));
});

test("AI hero renders the approved Signal Cinema identity scene", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes('data-ai-chapter="INTRO"'));
  assert.ok(html.includes('data-ai-passive="signal"'));
  assert.ok(html.includes('data-ai-passive="grain"'));
  assert.ok(html.includes("I build with AI. I don’t outsource judgment to it."));
  assert.equal(html.split('alt="Illustrated student developer avatar"').length - 1, 1);
});

test("AI source rejects notebook and generic card design patterns", async () => {
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  const portfolio = await readFile(new URL("../components/ai/AiPortfolio.tsx", import.meta.url), "utf8");
  for (const rejected of ["--ai-paper", "sectionPlaceholder", "probability-drift", "slide-in"])
    assert.ok(!`${css}\n${portfolio}`.includes(rejected), `Rejected pattern remains: ${rejected}`);
});

test("TruthLens leads the AI portfolio with honest release evidence", async () => {
  const { html } = await page("/ai");
  assert.ok(html.indexOf("TruthLens") < html.indexOf("FeedbackOS"));
  for (const fact of ["0.5648", "0.75", "rejected", "fail-closed"])
    assert.ok(html.toLowerCase().includes(fact.toLowerCase()), `Missing TruthLens fact: ${fact}`);
  assert.ok(html.includes('href="/work/truthlens"'));
  assert.ok(html.includes('href="https://github.com/MilindDevX/TruthLens"'));
  assert.ok(html.includes('href="https://frontend-ten-theta-81.vercel.app/"'));
});

test("TruthLens authentic captures ship as optimized assets", async () => {
  for (const asset of [
    "/images/projects/truthlens-landing.webp",
    "/images/projects/truthlens-dashboard.webp",
  ]) assert.equal((await get(asset)).status, 200, `${asset} must be public`);
});

test("TruthLens has a complete experiment-log case study", async () => {
  const { response, html } = await page("/work/truthlens");
  assert.equal(response.status, 200);
  for (const section of [
    "The question",
    "Dataset provenance",
    "Baseline",
    "Held-out evaluation",
    "Release decision",
    "Serving boundary",
    "Explainability",
    "Next experiment",
  ]) assert.ok(html.includes(section), `TruthLens missing ${section}`);
  assert.ok(html.includes("0.5648"));
  assert.ok(html.includes("0.75"));
  assert.ok(html.toLowerCase().includes("not uploaded"));
});

test("AI capabilities are linked to real project evidence", async () => {
  const { html } = await page("/ai");
  for (const capability of [
    "Model training",
    "AI product systems",
    "Data and delivery",
  ]) assert.ok(html.includes(capability), `Missing capability: ${capability}`);
  assert.ok(html.indexOf("FeedbackOS") < html.indexOf("MedMarket"));
  assert.ok(!html.includes("skill-level"));
  assert.ok(!html.includes("progressbar"));
});

test("shared case studies expose their AI boundaries", async () => {
  const feedback = await page("/work/feedbackos");
  const market = await page("/work/medmarket");
  for (const phrase of ["malformed", "low-confidence", "rate-limited"])
    assert.ok(feedback.html.toLowerCase().includes(phrase));
  for (const phrase of ["extraction", "unreadable", "human verification"])
    assert.ok(market.html.toLowerCase().includes(phrase));
});

test("AI portfolio keeps supporting evidence compact and education singular", async () => {
  const { html } = await page("/ai");
  for (const fact of ["RouteLens", "Beijing PM2.5", "Amazon ML Challenge 2026", "C-MAPSS", "0.893", "Finance minor"])
    assert.ok(html.includes(fact), `Missing supporting fact: ${fact}`);
  assert.equal(html.split("Newton School of Technology at Rishihood University").length - 1, 1);
  assert.match(html, /<dt>CGPA<\/dt><dd>9\.28\/10<\/dd>/);
  assert.ok(html.includes("mailto:milindsk8r@gmail.com"));
  assert.ok(!html.toLowerCase().includes("marvel"));
});

test("AI identity marks only its exact page as current", async () => {
  const home = await page('/ai');
  assert.match(home.html, /<a(?=[^>]*href="\/ai")(?=[^>]*aria-current="page")[^>]*>/);
  const study = await page('/work/truthlens');
  assert.doesNotMatch(study.html, /<a(?=[^>]*href="\/ai")(?=[^>]*aria-current="page")[^>]*>/);
});

test("AI motion tracks real chapters, pauses passive layers, and provides native fallback", async () => {
  const source = await readFile(new URL("../components/ai/AiMotion.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.ok(source.includes('CSS.supports("animation-timeline: view()")'));
  assert.ok(source.includes("data-ai-chapter"));
  assert.ok(source.includes("visibilitychange"));
  assert.ok(source.includes("passiveObserver"));
  assert.ok(source.includes("data-ai-offscreen"));
  assert.ok(source.includes("data-ai-scene"));
  assert.ok(!source.includes('addEventListener("scroll"'));
  assert.match(css, /\[data-paused="true"\][^{]*\{[^}]*animation-play-state:\s*paused/s);
  assert.match(css, /\.portfolio\[data-paused="true"\]\s*~\s*\.aiContact\s*\[data-ai-passive\]/);
  assert.match(css, /\[data-ai-passive\]\[data-ai-offscreen="true"\][^{]*\{[^}]*animation-play-state:\s*paused/s);
  assert.ok(!css.includes("cursor: none"));
  assert.ok(!css.includes("scroll-behavior: smooth"));
});

test("AI header transitions onto a substrate after its top sentinel leaves", async () => {
  const source = await readFile(new URL("../components/ai/AiMotion.tsx", import.meta.url), "utf8");
  const hero = await readFile(new URL("../components/ai/AiHero.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.ok(hero.includes("data-ai-header-sentinel"));
  assert.ok(source.includes("headerObserver"));
  assert.ok(source.includes("data-scrolled"));
  assert.match(css, /\.signalHeader\s*\{[^}]*background:\s*transparent/s);
  assert.match(css, /\.signalHeader\[data-scrolled="true"\][^{]*\{[^}]*background:\s*rgb\(7 7 7 \/ 92%\)/s);
});

test("TruthLens release comparison belongs to its own result scene", async () => {
  const source = await readFile(new URL("../components/ai/TruthLensPreview.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.ok(source.includes('data-ai-scene="result"'));
  assert.ok(source.includes('width: "56.48%"'));
  assert.ok(source.includes('width: "75%"'));
  assert.match(css, /\.releaseBar[^{]*\{[^}]*animation-timeline:\s*--result-scene/s);
});

test("AI routes publish dark viewport and route-specific social identity", async () => {
  for (const [pathname, title] of [["/ai", "Applied AI engineer"], ["/work/truthlens", "TruthLens"]]) {
    const { html } = await page(pathname);
    assert.ok(html.includes('<meta name="theme-color" content="#070707"'));
    assert.ok(html.includes('<meta name="color-scheme" content="dark"'));
    assert.match(html, new RegExp(`<meta property="og:title" content="[^"]*${title}`));
    assert.ok(!html.includes('<meta property="og:title" content="Milind Bansal — Full-stack engineer"'));
  }
});

test("reduced motion resolves Signal Cinema to complete static content", async () => {
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  const block = css.match(/@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{[\s\S]*$/)?.[0] ?? "";
  assert.ok(block.includes("position: relative"));
  assert.ok(block.includes("animation: none"));
  assert.ok(block.includes("opacity: 1"));
  assert.ok(block.includes("transform: none"));
  assert.match(block, /\.truthScene[^{]*\{[^}]*opacity:\s*1[^}]*animation:\s*none/s);
});

test("TruthLens deep case study uses Signal Cinema while preserving evidence anchors", async () => {
  const { html } = await page("/work/truthlens");
  assert.ok(html.includes('data-ai-case="truthlens"'));
  assert.ok(html.includes('data-ai-passive="signal"'));
  for (let index = 1; index <= 10; index++)
    assert.ok(html.includes(`id="truthlens-log-${String(index).padStart(2, "0")}"`));
  assert.ok(html.includes("0.5648"));
  assert.ok(html.includes("0.75"));
  assert.ok(html.includes("Result: rejected"));
});

test("TruthLens uses three full-width scenes without pinned or scaled screenshots", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes('data-ai-chapter="TRUTHLENS"'));
  assert.ok(html.includes('data-ai-story="truthlens"'));
  assert.ok(!html.includes("data-ai-sticky-media"));
  assert.ok(!html.includes("data-ai-story-step"));
  assert.equal((html.match(/data-ai-scene=/g) ?? []).length, 3);
  for (const fact of ["0.5648", "0.75", "not uploaded", "not activated", "fail-closed"])
    assert.ok(html.toLowerCase().includes(fact.toLowerCase()));
});

test("mobile TruthLens heading contains its longest word without shrinking the desktop scene", async () => {
  const source = await readFile(new URL("../components/ai/TruthLensPreview.tsx", import.meta.url), "utf8");
  const caseSource = await readFile(new URL("../components/ai/TruthLensCaseStudy.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.ok(source.includes("storyQuestionTail"));
  assert.ok(caseSource.includes("storyQuestionTail"));
  assert.match(css, /@media\s*\(max-width:\s*767px\)[\s\S]*\.storyQuestionTail\s*\{[^}]*font-size:\s*0\.72em/s);
  assert.match(css, /@media\s*\(max-width:\s*767px\)[\s\S]*\.caseCinemaHero > p:last-of-type\s*\{[^}]*width:\s*100%[^}]*margin-left:\s*0/s);
});

test("Signal Cinema animates scene exposure and evidence lines, never screenshot geometry", async () => {
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.match(css, /\.truthScene[^{]*\{[^}]*animation:\s*scene-exposure/s);
  assert.match(css, /\.feedbackMedia img,\s*\.marketMedia img[^{]*\{[^}]*animation:\s*none[^}]*transform:\s*none[^}]*clip-path:\s*none/s);
  assert.match(css, /animation-timeline:\s*view\(\)/);
  assert.match(css, /@supports\s*\(animation-timeline:\s*view\(\)\)/);
  assert.ok(!css.includes("translateY(24px)"), "Generic slide-up reveal must be absent from AI CSS");
});

test("capabilities form a linked evidence track without cards or self-ratings", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes('data-ai-chapter="CAPABILITIES"'));
  assert.equal((html.match(/data-evidence-project=/g) ?? []).length, 3);
  for (const banned of ["proficiency", "percent", "skill-card", "progressbar"])
    assert.ok(!html.toLowerCase().includes(banned));
});

test("applied AI projects use distinct scenes and retain canonical destinations", async () => {
  const { html } = await page("/ai");
  assert.ok(html.includes('data-ai-chapter="APPLIED AI"'));
  assert.equal((html.match(/data-ai-study="feedbackos"/g) ?? []).length, 1);
  assert.equal((html.match(/data-ai-study="medmarket"/g) ?? []).length, 1);
  assert.ok(html.includes('href="/work/feedbackos"'));
  assert.ok(html.includes('href="/work/medmarket"'));
  assert.ok(html.includes("hard-coded mock fallback"));
  assert.ok(html.includes("human verification"));
});

test("AI chapter numbers follow the work-first homepage order", async () => {
  const { html } = await page("/ai");
  const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  assert.deepEqual([...visible.matchAll(/>(0[2-7]) \/ 07</g)].map(match => match[1]), ["02", "04", "05", "06", "07"]);
});

test("AI range, personal chapter, and contact form one cinematic ending", async () => {
  const { html } = await page("/ai");
  for (const chapter of ["RANGE", "ABOUT", "CONTACT"])
    assert.ok(html.includes(`data-ai-chapter="${chapter}"`));
  assert.match(html, /<dt>CGPA<\/dt><dd>9\.28\/10<\/dd>/);
  assert.ok(html.includes("Finance minor"));
  assert.ok(html.includes("mailto:milindsk8r@gmail.com"));
  assert.ok(html.includes('href="/docs/Milind_Bansal_AI_Internship_Resume.pdf"'));
  assert.ok(!html.includes('Milind_Bansal_Full_Stack_Resume.pdf'));
});

test("AI portfolio serves the approved AI resume rather than its full-stack counterpart", async () => {
  const { html } = await page('/ai');
  assert.match(html, /<a[^>]*href="\/docs\/Milind_Bansal_AI_Internship_Resume.pdf"[^>]*target="_blank"[^>]*rel="noopener noreferrer"[^>]*>VIEW RÉSUMÉ ↗<\/a>/);
  const response = await get('/docs/Milind_Bansal_AI_Internship_Resume.pdf');
  assert.equal(response.status, 200);
  assert.ok(response.headers.get('content-type')?.includes('application/pdf'));
  const approved = await readFile(new URL('../docs/resumes/Milind_Bansal_AI_Internship_Resume.pdf', import.meta.url));
  assert.deepEqual(Buffer.from(await response.arrayBuffer()), approved, 'Published AI resume must match approved PDF');
  const fullStack = await page('/');
  assert.ok(fullStack.html.includes('href="/docs/Milind_Bansal_Full_Stack_Resume.pdf"'));
  assert.ok(!fullStack.html.includes('Milind_Bansal_AI_Internship_Resume.pdf'));
});

test("full-stack edition serves its current resume master", async () => {
  const {html}=await page('/');
  assert.ok(html.includes('href="/docs/Milind_Bansal_Full_Stack_Resume.pdf"'));
  const response=await get('/docs/Milind_Bansal_Full_Stack_Resume.pdf');
  assert.equal(response.status,200);
  assert.ok(response.headers.get('content-type')?.includes('application/pdf'));
  const master=await readFile(new URL('../docs/resumes/Milind_Bansal_Full_Stack_Resume.pdf',import.meta.url));
  assert.ok(Buffer.from(await response.arrayBuffer()).equals(master),'Full-stack public PDF must match current master');
});

test("Signal Cinema colors meet the accessible dark-canvas boundary", async () => {
  const aiCss = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  const token = (source, name) => source.match(new RegExp(`--${name}:\\s*#([0-9a-f]{6})`, "i"))?.[1];
  const luminance = (hex) => hex.match(/../g).map((value) => Number.parseInt(value, 16) / 255).map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4).reduce((total, channel, index) => total + channel * [0.2126, 0.7152, 0.0722][index], 0);
  const contrast = (a, b) => (Math.max(luminance(a), luminance(b)) + 0.05) / (Math.min(luminance(a), luminance(b)) + 0.05);
  const canvas = token(aiCss, "signal-canvas");
  const ink = token(aiCss, "signal-ink");
  const copy = token(aiCss, "signal-copy");
  const red = token(aiCss, "signal-red");
  for (const [name, value] of [["canvas", canvas], ["ink", ink], ["copy", copy], ["red", red]])
    assert.ok(value, `Missing Signal Cinema ${name} token`);
  assert.ok(contrast(ink, canvas) >= 4.5, "Primary text on Signal Cinema canvas must meet AA");
  assert.ok(contrast(copy, canvas) >= 4.5, "Supporting text on Signal Cinema canvas must meet AA");
  assert.ok(contrast(red, canvas) >= 4.5, "Vermilion text on Signal Cinema canvas must meet AA");
});

test("AI contact owns its full-bleed Signal Cinema finale", async () => {
  const { html } = await page("/ai");
  const css = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.match(html, /<footer[^>]*data-ai-chapter="CONTACT"/);
  assert.match(css, /\.aiContact\s*\{[^}]*--signal-canvas:\s*#070707[^}]*background:\s*var\(--signal-canvas\)/s);
  assert.match(css, /\.contactLinks a:is\(:hover,\s*:focus-visible\)[^{]*\{[^}]*color:\s*var\(--signal-red\)[^}]*background:/s);
  assert.ok(!html.includes("site-footer--ai"));
  assert.ok(!html.includes("footer-links--ai"));
});

test("AI-context public copy stays evidence-bounded and publishable source stays private", async () => {
  const [ai, truthLens, feedback, aiData, caseEvidence, sources] = await Promise.all([
    page("/ai"), page("/work/truthlens"), page("/work/feedbackos"),
    readFile(new URL("../data/ai-portfolio.ts", import.meta.url), "utf8"),
    readFile(new URL("../components/CaseEvidence.tsx", import.meta.url), "utf8"),
    Promise.all(["../app", "../components", "../data"].map(publishableText)),
  ]);
  for (const result of [ai, truthLens]) {
    assert.ok(!result.html.includes("Current résumé"));
    assert.ok(!result.html.includes("Milind_Bansal_Full_Stack_Resume.pdf"));
  }
  for (const text of [ai.html, feedback.html, aiData, caseEvidence]) {
    assert.ok(text.includes("hard-coded mock fallback"), "FeedbackOS must disclose its reviewed 429 fallback");
    assert.ok(!text.includes("prevents"), "Evidence copy must not claim unexecuted prevention behavior");
  }
  const privateAddress = "@nst.rishihood.edu.in";
  assert.ok(!sources.join("\n").toLowerCase().includes(privateAddress), "Private college address leaked into publishable source");
});

test("touched AI sources and task report carry accurate ABOUTME evidence", async () => {
  const files = [
    "../components/ai/AiHero.tsx",
    "../components/ai/AiPortfolio.tsx",
    "../components/ai/AiContact.tsx",
    "../components/ai/TruthLensPreview.tsx",
    "../components/CaseEvidence.tsx",
    "../data/ai-portfolio.ts",
    "../app/globals.css",
  ];
  for (const file of files) assert.match(await readFile(new URL(file, import.meta.url), "utf8"), /^(?:\/\/ ABOUTME:|\/\* ABOUTME:)/, `${file} needs a file-leading ABOUTME comment`);
  const aiCss = await readFile(new URL("../components/ai/ai.module.css", import.meta.url), "utf8");
  assert.match(aiCss, /\.contactLinks a:focus-visible\s*\{/);
  const report = await readFile(new URL("../.superpowers/sdd/2026-09-10-ai-portfolio/tasks-4-8-report.md", import.meta.url), "utf8");
  assert.ok(!report.includes("New AI source and stylesheet files include file-leading `ABOUTME` comments"));
});

test("documentation records AI routes and TruthLens evidence limits", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  const evidence = await readFile(new URL("../docs/portfolio-evidence.md", import.meta.url), "utf8");
  assert.ok(readme.includes("`/ai`"));
  assert.ok(readme.includes("`/work/truthlens`"));
  assert.ok(evidence.includes("0.5648"));
  assert.ok(evidence.includes("0.75"));
  assert.ok(evidence.toLowerCase().includes("not uploaded"));
});

test("documentation records Signal Cinema and rejects stale notebook claims", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  const review = await readFile(new URL("../docs/portfolio-review.md", import.meta.url), "utf8");
  assert.ok(readme.includes("Signal Cinema"));
  assert.ok(review.includes("three-scene TruthLens"));
  assert.ok(!readme.includes("Inference Notebook"));
  assert.ok(!review.includes("Inference Notebook"));
});

test("AI homepage keeps its recruiter summary under 650 words", async () => {
  const { html } = await page('/ai');
  const text = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ').trim();
  assert.ok(text.split(/\s+/).length < 650, 'Homepage must stay concise; detailed evidence belongs in case studies');
});

test("unknown and machine-readable résumé routes stay private", async () => {
  for (const path of ["/work/not-a-project", "/profile.json", "/resume-context"]) assert.equal((await get(path)).status, 404, `${path} must return 404`);
});

test("private college address stays absent from raw published artifacts", async () => {
  const privateAddress = "@nst.rishihood.edu.in";
  const paths = ["/", "/ai", "/work/truthlens", ...work.map(([slug]) => `/work/${slug}`), "/docs/Milind_Bansal_Full_Stack_Resume.pdf"];
  for (const path of paths) {
    const response = await get(path);
    const raw = Buffer.from(await response.arrayBuffer()).toString("utf8").toLowerCase();
    assert.ok(!raw.includes(privateAddress), `Private college address leaked through ${path}`);
  }
});

test("approved destinations and current résumé are public", async () => {
  const { html } = await page("/");
  for (const destination of ["mailto:milindsk8r@gmail.com", "https://github.com/MilindDevX", "https://www.linkedin.com/in/milind-bansal-177606244/", "https://github.com/MilindDevX/SectionD_G12_BeijingPM25Analysis", "https://public.tableau.com/app/profile/milind.bansal5979/viz/DVA2-Capstone/RiskSeverityOverview"]) assert.ok(html.includes(`href="${destination}"`), `Missing destination: ${destination}`);
  const pdf = await get("/docs/Milind_Bansal_Full_Stack_Resume.pdf");
  assert.equal(pdf.status, 200);
  assert.equal(Buffer.from(await pdf.arrayBuffer()).subarray(0, 5).toString(), "%PDF-");
});

test("portfolio omits fictitious and disallowed résumé claims", async () => {
  const pages = await Promise.all(["/", ...work.map(([slug]) => `/work/${slug}`)].map(page));
  const html = pages.map((result) => result.html).join("\n").toLowerCase();
  for (const forbidden of ["years of experience", "50+ clients", "expert level", "production customers", "cdsco verified", "who guideline"]) assert.ok(!html.includes(forbidden), `Forbidden claim found: ${forbidden}`);
});

test("reveal content is visible in server HTML before JavaScript enhancement", async () => {
  const { html } = await page("/");
  assert.match(html, /class="reveal(?:\s|\")/, "Reveal wrappers must render in server HTML");
  assert.ok(!html.includes('data-visible="reduced"'), "Server HTML must not opt content into a hidden state");
  const source = await readFile(new URL("../components/RevealOnView.tsx", import.meta.url), "utf8");
  assert.ok(source.includes('className={`reveal ${className}`}'), "Reveal must use a visible base class");
  assert.ok(source.includes('classList.add("reveal-ready")'), "JavaScript may opt into motion after mount");
});

test("case studies expose distinct evidence compositions", async () => {
  const [routeLens, feedback, market] = await Promise.all(work.map(([slug]) => page(`/work/${slug}`)));
  assert.ok(routeLens.html.includes('data-composition="artifact"'));
  assert.ok(routeLens.html.includes("Built solo for a Digital Heroes internship qualifying round; not client work or an endorsement."));
  assert.ok(routeLens.html.includes("Artifact transcript"));
  assert.ok(feedback.html.includes('data-composition="pipeline"'));
  assert.ok(feedback.html.includes("Validation boundary"));
  assert.ok(market.html.includes('data-composition="roles"'));
  assert.ok(market.html.includes("Controller-enforced rules"));
  for (const [index, result] of [routeLens, feedback, market].entries()) {
    assert.ok(result.html.includes('aria-current="page"'), `${work[index][1]} needs a current-page marker`);
  }
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.site-header\s*\{[^}]*position:\s*sticky/s, "Site header must remain visible while scrolling");
});

test("optimized local identity and approved fonts ship as WebP/WOFF2", async () => {
  for (const asset of [
    "/images/avatar/student-developer-portrait-v2.webp",
    "/images/projects/routelens-directory-home.webp",
    "/images/projects/feedbackos-review-queue.webp",
    "/images/projects/medmarket-admin-dashboard.webp",
    "/fonts/bricolage-grotesque-variable.woff2",
    "/fonts/atkinson-hyperlegible-next-variable.woff2",
  ]) assert.equal((await get(asset)).status, 200, `${asset} must be public`);
  assert.equal((await get("/images/avatar/student-developer-editorial.webp")).status, 404, "Superseded avatar must not remain public");
});

test("project specimens use authentic home or demo dashboard captures", async () => {
  const [landing, routeLens, feedback, market] = await Promise.all([page("/"), page("/work/routelens"), page("/work/feedbackos"), page("/work/medmarket")]);
  for (const result of [landing, routeLens]) assert.ok(result.html.includes("routelens-directory-home.webp"), "RouteLens needs its public directory home");
  for (const result of [landing, feedback]) assert.ok(result.html.includes("feedbackos-review-queue.webp"), "FeedbackOS needs its seeded review-queue capture");
  for (const result of [landing, market]) assert.ok(result.html.includes("medmarket-admin-dashboard.webp"), "MedMarket needs its public demo dashboard");
  assert.ok(landing.html.includes("48 seed items. Needs Review marks low-confidence classifications; not usage or traction."));
  assert.ok(landing.html.includes("Public demo admin dashboard with seeded data; not usage or traction."));
  assert.ok(feedback.html.includes("so it shows seed data, not usage."));
  assert.ok(!feedback.html.includes("The authentic capture stops at the public sign-in."));
  assert.ok(!landing.html.includes('class="assembly-lines"'), "Avatar must not include unexplained line decoration");
  assert.ok(!landing.html.includes("something Marvel"), "Off-screen copy must omit the unwanted Marvel phrase");
});

test("approved polish keeps education singular, labels credentials, and strengthens restrained motion", async () => {
  const [{ html }, pageSource, heroSource, revealSource, caseEvidenceSource, css] = await Promise.all([
    page("/"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/HeroAssembly.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/RevealOnView.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/CaseEvidence.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.ok(!pageSource.includes("proof-strip"), "Education must not be repeated in a proof strip");
  assert.ok(html.includes("Minor: Finance"), "Finance must be explicitly labeled as the minor");
  assert.ok(html.includes("CGPA: 9.28/10"), "CGPA must be explicitly labeled");
  assert.ok(!heroSource.includes("assembly-lines"), "Hero must not render unexplained structural lines");
  assert.ok(!heroSource.includes("hero-annotations"), "Avatar must not carry system/data labels");
  assert.ok(!heroSource.includes("<figcaption>"), "Avatar must not show a fictional-likeness warning");
  assert.ok(!heroSource.includes("not a literal likeness"), "Avatar warning copy must be removed");
  assert.ok(revealSource.includes('data-reveal-sequence="true"'), "Scroll reveals need a sequence hook");
  assert.match(css, /\.site-footer\s*\{[^}]*background:\s*var\(--paper\)[^}]*color:\s*var\(--ink\)/s, "Footer must continue the page substrate");
  assert.match(css, /\.footer-call h2 em\s*\{[^}]*color:\s*var\(--blue\)/s, "Footer callout must reuse the site accent");
  assert.match(css, /\.reveal\[data-visible="true"\][^}]*\.project-/s, "Project specimens need sequenced reveals");
  assert.ok(caseEvidenceSource.includes("<RevealOnView>"), "Case-study evidence needs one-time scroll enhancement");
  assert.match(css, /\.reveal\[data-visible="true"\][^}]*\.pipeline-diagram/s, "Architecture diagrams need a one-time sequence");
});

test("education facts render once and mobile anchors clear the sticky header", async () => {
  const [{ html }, css] = await Promise.all([
    page("/"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  assert.equal((html.match(/Newton School of Technology at Rishihood University/g) || []).length, 1);
  assert.equal((html.match(/CGPA: 9\.28\/10/g) || []).length, 1);
  const aboutStart = html.indexOf('id="about"');
  const currentChapter = html.indexOf('class="current-chapter"');
  const contactStart = html.indexOf('id="contact"');
  assert.ok(aboutStart >= 0 && currentChapter > aboutStart && currentChapter < contactStart, "Education must read as current context inside About");
  assert.ok(!html.includes('<section class="education shell"'), "Standalone education strip must be removed");
  const mobileOffset = css.match(/@media\s*\(max-width:767px\)[\s\S]*?scroll-padding-top:\s*(\d+)px/s)?.[1];
  assert.ok(Number(mobileOffset) >= 124, "Mobile anchor offset must clear the rendered two-row header");
});

test("coral text combinations meet WCAG AA", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const token = (name) => css.match(new RegExp(`--${name}:#([0-9a-f]{6})`, "i"))?.[1];
  const luminance = (hex) => {
    const channels = hex.match(/../g).map((value) => Number.parseInt(value, 16) / 255).map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  };
  const contrast = (a, b) => (Math.max(luminance(a), luminance(b)) + 0.05) / (Math.min(luminance(a), luminance(b)) + 0.05);
  assert.ok(contrast(token("coral"), token("paper")) >= 4.5, "Coral labels on paper must meet AA");
  assert.ok(contrast(token("surface"), token("coral")) >= 4.5, "Surface text on coral must meet AA");
  assert.ok(!css.includes("#ffe0d6"), "Low-contrast pale text must not remain on coral surfaces");
});

test("minor BlogApp layout PR no longer appears as headline evidence", async () => {
  for (const path of ["/", "/ai"]) assert.ok(!(await page(path)).html.includes("BlogApp"), `${path} still lists BlogApp`);
});

test("every public route carries its own title, canonical URL, and share image", async () => {
  for (const [path, title] of [["/", "Full-stack engineer"], ["/ai", "Applied AI engineer"], ["/work/feedbackos", "FeedbackOS —"], ["/work/medmarket", "MedMarket —"], ["/work/routelens", "RouteLens —"], ["/work/truthlens", "TruthLens —"]]) {
    const { html } = await page(path);
    assert.match(html, new RegExp(`<title>[^<]*${title}`), `${path} title`);
    assert.ok(html.includes(`<link rel="canonical" href="https://portfolio-milind.vercel.app${path === "/" ? "" : path}"`), `${path} canonical`);
    assert.match(html, /<meta property="og:image" content="https:\/\/portfolio-milind\.vercel\.app\/[^"]*opengraph-image/, `${path} og:image`);
  }
  assert.equal((await get("/sitemap.xml")).status, 200);
  assert.ok((await (await get("/robots.txt")).text()).includes("sitemap.xml"));
});

test("responses carry baseline security headers", async () => {
  const response = await get("/");
  assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.ok(response.headers.get("referrer-policy"));
});
