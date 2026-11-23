// ABOUTME: Evidence-bounded content for the standalone applied-AI portfolio.
// AI hero proof strip: three AI-relevant figures, each linked to public evidence. The CGPA is in the Current chapter section, so it is not repeated here.
export const aiProofPoints = [
  { figure: "79 tests", label: "evalbar, LLM evals on PyPI", href: "https://pypi.org/project/evalbar/" },
  { figure: "13.5 → 7.5", label: "C-MAPSS near-failure RMSE, five-person team", href: "https://github.com/vks-g/cmapss-rul-hybrid" },
  { figure: "#2293", label: "Merged into nanocoder, an open-source coding agent", href: "https://github.com/Nano-Collective/nanocoder/pull/2293" },
] as const;

export const aiProfile = {
  role: "Applied AI engineer",
  label: "MILIND BANSAL · APPLIED AI ENGINEER",
  headline: "I build with AI. I don’t outsource judgment to it.",
  introduction: "I’m Milind, a CS & AI student who likes taking an idea from a model experiment to working software—and questioning it along the way.",
  availability: "Open to a remote AI engineering internship, January to July 2027. Scoped freelance work welcome.",
  interests: "Off screen: games, manga, music, the gym and friends. My projects start with problems I want solved.",
  contact: {
    label: "Open channel / AI opportunities",
    headline: "An idea worth building?",
    emphasis: "Let’s talk.",
    invitation: "Remote AI internships, January to July 2027, first. Scoped freelance work welcome.",
  },
} as const;

export const truthLens = {
  name: "TruthLens",
  label: "Evaluation experiment · Solo",
  question: "Could I train AI to detect misinformation?",
  summary: "A solo misinformation-classification experiment, from corrected dataset labels to a TF-IDF logistic-regression baseline, held-out evaluation, and a release gate that rejected the artifact.",
  dataset: "ISOT label provenance was corrected before retraining. LIAR train and validation splits were used in development; a separate LIAR test split supplied held-out evaluation.",
  baseline: "TF-IDF and logistic regression",
  evaluation: {
    dataset: "LIAR",
    heldOutF1: "0.5648",
    releaseGate: "0.75",
  },
  releaseDecision: "The experiment missed its release gate. The artifact was rejected and retained for investigation only; it was not uploaded or activated.",
  servingBoundary: "Analysis fails closed and refuses inference when no valid baseline is available.",
  explainability: "SHAP describes baseline token contributions; it does not establish whether a claim is factually true.",
  monitoring: "Drift monitoring can detect distribution change; it cannot guarantee calibration.",
  source: "https://github.com/MilindDevX/TruthLens",
  live: "https://truthlens-milind.vercel.app/",
} as const;

export const modelWork = [
  {
    slug: "evalbar",
    name: "evalbar",
    label: "Open-source tool · Solo · PyPI",
    title: "LLM evals that gate pull requests",
    summary: "Traces tokens, latency, cost and agent tool calls per case, scores RAG retrieval with recall@k, and fails CI when accuracy drops or cost rises. I used it on my feedback-triage classifier.",
    unit: "Classifier accuracy · higher is better",
    scale: 100,
    format: "percent",
    bars: [
      { label: "Sentiment, prompt v1 → v2 (+13% cost)", from: 94, to: 100 },
      { label: "Theme, prompt v2 → v3", from: 96, to: 98 },
    ],
    caption: "50 hand-labelled synthetic cases; not production accuracy.",
    source: "https://github.com/MilindDevX/evalbar",
    links: [
      { label: "PyPI", href: "https://pypi.org/project/evalbar/" },
      { label: "Case study", href: "https://github.com/MilindDevX/evalbar/blob/main/docs/case-study-feedbackos.md" },
    ],
  },
  {
    slug: "amazon-ml",
    name: "Amazon ML Challenge 2026",
    label: "Team competition · Co-built",
    title: "Entity resolution across 1.73M businesses",
    summary: "Multi-route blocking feeds a LightGBM pair classifier; a data-only filter fixed over-prediction in a country unseen in training.",
    unit: "Macro F0.5 · higher is better",
    scale: 1,
    bars: [
      { label: "Held-out, baseline → final", from: 0.848, to: 0.893 },
      { label: "Public leaderboard, first → refined", from: 0.819, to: 0.870 },
    ],
    caption: "Held-out: labelled validation. Public: leaderboard test subset. 28 unit tests.",
  },
  {
    slug: "cmapss",
    name: "C-MAPSS",
    label: "Five-person team · 12 merged PRs",
    title: "Turbofan remaining-useful-life prediction",
    summary: "Leakage-safe engine splits, fold-fitted normalization, raw-versus-engineered comparisons with SHAP, and a validation toolkit.",
    unit: "Near-failure RMSE, official FD001 test engines · lower is better",
    scale: 16,
    bars: [
      { label: "Random Forest, raw → engineered features", from: 13.5, to: 7.5 },
    ],
    caption: "Near failure only; over whole engine lives, 27.6 engineered vs 26.2 raw.",
    source: "https://github.com/vks-g/cmapss-rul-hybrid",
  },
] as const;

export const aiStudies = [
  {
    slug: "feedbackos",
    name: "FeedbackOS",
    label: "Applied AI workflow · Solo",
    summary: "Feedback → queued classification → human review, on Groq, Vercel Queues and Zod.",
    proof: "evalbar exposed two classifier errors. The fix is live, and an 11-case hold-out set went from 9/11 to 11/11.",
    boundary: "Low-confidence output stays reviewable. Its accuracy comes from 50 synthetic cases, not production traffic.",
    href: "/work/feedbackos",
    live: "https://feedbackos.vercel.app/",
    source: "https://github.com/MilindDevX/feedbackos",
    image: "/images/projects/feedbackos-review-queue.webp",
  },
  {
    slug: "medmarket",
    name: "MedMarket",
    label: "Assisted extraction · Solo",
    summary: "A multi-role medicine marketplace with fallible document extraction and human verification.",
    boundary: "Unreadable and fallback states stay explicit. Catalogue and pricing rules sit outside AI.",
    href: "/work/medmarket",
    image: "/images/projects/medmarket-admin-dashboard.webp",
  },
] as const;

export const aiCapabilities = [
  { name: "Model training & evaluation", detail: "Python · LightGBM · XGBoost · scikit-learn · SHAP · LiteLLM · LLM-as-judge", evidence: "Amazon ML / C-MAPSS / evalbar", href: "/ai#model-work" },
  { name: "AI product systems", detail: "Groq · OpenAI-compatible SDK · Vercel Queues · Zod · FastAPI", evidence: "FeedbackOS / TruthLens", href: "/work/feedbackos" },
  { name: "Data and delivery", detail: "pandas · SQL · PostgreSQL · React · TypeScript", evidence: "Beijing PM2.5 / MedMarket", href: "/ai#range" },
] as const;

export const aiRange = [
  {
    name: "RouteLens",
    kind: "Engineering system",
    summary: "Solo API directory and structural JSON diff tool. Engineering, not AI.",
    href: "/work/routelens",
  },
  {
    name: "Beijing PM2.5",
    kind: "Team data coursework",
    summary: "Data & ETL lead in six-person coursework. Cleaned 43,824 hourly observations.",
    href: "https://github.com/MilindDevX/SectionD_G12_BeijingPM25Analysis",
  },
] as const;
