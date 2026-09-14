// ABOUTME: Evidence-bounded content for the standalone applied-AI portfolio.
export const aiProfile = {
  role: "Applied AI engineer",
  label: "MILIND BANSAL · APPLIED AI ENGINEER",
  headline: "I build with AI. I don’t outsource judgment to it.",
  introduction: "I’m Milind, a CS & AI student who likes taking an idea from a model experiment to working software—and questioning it along the way.",
  availability: "Open to AI internships, open-source contributions, and freelance work.",
  educationNote: "Finance is my secondary area of study alongside the CS & AI degree—a complementary view of products, incentives, and decisions.",
  interests: "Off screen: games, manga, music, the gym, and time with friends. New projects usually start with something I want solved for myself.",
  contact: {
    label: "Open channel / AI opportunities",
    headline: "An idea worth building?",
    emphasis: "Let’s talk.",
    invitation: "AI internships first. Open-source contributions and scoped freelance work welcome.",
  },
} as const;

export const truthLens = {
  name: "TruthLens",
  label: "Flagship experiment · Solo",
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

export const aiStudies = [
  {
    slug: "feedbackos",
    name: "FeedbackOS",
    label: "Applied AI workflow · Solo",
    summary: "Feedback → queued classification → human review. Built with BullMQ, OpenAI, and Zod, with organization-scoped summaries.",
    boundary: "429 handling may return a hard-coded mock fallback; low-confidence output stays reviewable.",
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
  { name: "Model training & evaluation", detail: "Python · scikit-learn · TF-IDF · logistic regression · SHAP", evidence: "TruthLens", href: "/work/truthlens" },
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
  {
    name: "BlogApp authentication screens",
    kind: "One accepted Hacktoberfest UI contribution",
    summary: "One merged Hacktoberfest UI contribution to login and registration screens across two React components.",
    href: "https://github.com/Pinfinity07/BlogApp/pull/2",
  },
] as const;
