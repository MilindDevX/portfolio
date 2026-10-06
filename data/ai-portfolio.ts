// ABOUTME: Evidence-bounded content for the standalone applied-AI portfolio.
export const aiProfile = {
  role: "Applied AI engineer",
  label: "MILIND BANSAL · APPLIED AI ENGINEER",
  headline: "I build with AI. I don’t outsource judgment to it.",
  introduction: "I’m Milind, a CS & AI student who likes taking an idea from a model experiment to working software—and questioning it along the way.",
  availability: "Looking for a year-long AI engineering internship from early 2027. Scoped freelance work welcome.",
  educationNote: "Finance is my secondary area of study alongside the CS & AI degree—a complementary view of products, incentives, and decisions.",
  interests: "Off screen: games, manga, music, the gym, and time with friends. New projects usually start with something I want solved for myself.",
  contact: {
    label: "Open channel / AI opportunities",
    headline: "An idea worth building?",
    emphasis: "Let’s talk.",
    invitation: "Year-long AI internships from early 2027 first. Scoped freelance work welcome.",
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
  live: "https://frontend-ten-theta-81.vercel.app/",
} as const;

export const modelWork = [
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
    label: "Four-person team · 4 merged PRs",
    title: "Turbofan remaining-useful-life prediction",
    summary: "Leakage-safe engine splits and fold-fitted normalization, then matched raw-versus-engineered model comparisons with SHAP.",
    unit: "FD001 holdout RMSE in cycles · lower is better",
    scale: 40,
    bars: [
      { label: "Random Forest, raw → engineered features", from: 30.8, to: 26.5 },
    ],
    caption: "Mean CV RMSE showed no general advantage; this is one holdout.",
    source: "https://github.com/vks-g/cmapss-rul-hybrid",
  },
] as const;

export const aiStudies = [
  {
    slug: "feedbackos",
    name: "FeedbackOS",
    label: "Applied AI workflow · Solo",
    summary: "Feedback → queued classification → human review. Built with BullMQ, OpenAI, and Zod, with organization-scoped summaries.",
    boundary: "Low-confidence output stays reviewable. Known gap: under OpenAI 429 rate limits, a hard-coded mock fallback can still be returned.",
    href: "/work/feedbackos",
    image: "/images/projects/feedbackos-public-home.webp",
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
  { name: "Model training & evaluation", detail: "Python · LightGBM · XGBoost · scikit-learn · SHAP · cross-validation", evidence: "Amazon ML / C-MAPSS", href: "/ai#model-work" },
  { name: "AI product systems", detail: "OpenAI SDK · BullMQ · Zod · FastAPI", evidence: "FeedbackOS / TruthLens", href: "/work/feedbackos" },
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
