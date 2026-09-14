import { destinations as sharedDestinations, education, publicProfile } from "./profile";

export { education, publicProfile } from "./profile";

type Project = {
  slug: "routelens" | "feedbackos" | "medmarket";
  name: string;
  strapline: string;
  kind: string;
  summary: string;
  origin: string;
  ownership: string;
  problem: string;
  constraints: readonly string[];
  decisions: readonly { title: string; detail: string }[];
  behavior: string;
  evidence: string;
  reflection: string;
  next: string;
  stack: readonly string[];
  source: string;
  demo: string;
  apiDocs?: string;
};

export const profile = {
  name: publicProfile.name,
  role: "Full-stack engineer",
  location: publicProfile.location,
  availability: "Available now for internships, freelance work, and open-source collaboration.",
  degree: education.degree,
  institution: education.institution,
  period: education.period,
  minor: "Minor: Finance",
  gpa: education.gpa,
  email: publicProfile.email,
  introduction: "I build full-stack tools for messy workflows—from comparing API responses, to routing product feedback with AI, to coordinating medicine discovery and inventory. I like owning the path from data and system design to interfaces people can act on.",
  about: "Most of my projects begin with an idea I cannot leave alone, or a problem I want solved for myself. I enjoy moving between the interface, the data model, and the awkward edge cases in between—then explaining the decisions without pretending the trade-offs disappeared.",
  offScreen: "Off screen, I’m usually gaming, reading manga or books, watching films or anime, listening to music, training at the gym, following sports, travelling, or simply catching up with friends. Rest counts too.",
} as const;

export const destinations = {
  github: sharedDestinations.github,
  linkedin: sharedDestinations.linkedin,
  resume: sharedDestinations.fullStackResume,
} as const;

export const projects = [
  {
    slug: "routelens",
    name: "RouteLens",
    strapline: "APIs, made inspectable.",
    kind: "Developer tool · Solo",
    summary: "A browser-based route directory and structural JSON comparison tool for working with OpenAPI specifications and response changes.",
    origin: "Built end-to-end as an internship qualification challenge. The submission received no response, so the work is presented as an independent project—not an endorsement or employment claim.",
    ownership: "Solo product design, interface, and implementation.",
    problem: "Raw specifications are hard to scan, while text diffs often confuse structural changes with formatting or array order. The useful question is not only ‘what text changed?’ but ‘what changed in the response shape?’",
    constraints: ["Runs in the browser", "Defensive handling for imperfect specifications", "Useful comparison without assuming every array has stable IDs"],
    decisions: [
      { title: "Parse before comparing", detail: "JSON is parsed into structures so field, value, and type changes can be discussed directly." },
      { title: "Match arrays when identity exists", detail: "Suitable identity keys reduce noisy positional differences; otherwise the comparison falls back to position." },
      { title: "Keep imports honest", detail: "Internal references resolve defensively. External and circular references are surfaced rather than silently invented." },
    ],
    behavior: "Specifications become a searchable, deduplicated route directory. A separate workspace compares baseline and current JSON responses recursively.",
    evidence: "Reviewed source uses Next.js 14.2.35, React 18, strict TypeScript, Tailwind CSS, and js-yaml. No automated test suite was present in the reviewed revision.",
    reflection: "The interface benefits from putting the comparison result—not configuration—at the center. Its honest boundary is reference handling: unsupported graphs should be explicit.",
    next: "Add a tested parser and diff suite, then broaden external-reference handling.",
    stack: ["Next.js", "React", "TypeScript", "OpenAPI", "js-yaml"],
    source: "https://github.com/MilindDevX/routelens",
    demo: "https://routelens-xi.vercel.app",
  },
  {
    slug: "feedbackos",
    name: "FeedbackOS",
    strapline: "Feedback, routed with judgment.",
    kind: "AI workflow · Solo",
    summary: "A full-stack feedback-triage prototype that queues classification, preserves a review path, and turns scattered input into filtered product signals.",
    origin: "A solo end-to-end product exploration for the workflow between feedback intake and product review.",
    ownership: "Solo architecture, product workflow, data model, workers, and interface.",
    problem: "Feedback arrives as unstructured text across sources. Before a team can act, it needs consistent themes, sentiment, product areas, and a way to review uncertain classification.",
    constraints: ["AI output can be malformed or uncertain", "Imports need hard size and row bounds", "Organization data and Dashboard summaries must remain organization-scoped"],
    decisions: [
      { title: "Queue slow work", detail: "BullMQ workers separate ingestion from classification and cap concurrency instead of blocking requests." },
      { title: "Validate model output", detail: "Zod guards the classification boundary; low-confidence items stay reviewable rather than posing as certainty." },
      { title: "Scope cached summaries", detail: "Dashboard aggregates use organization-aware cache keys with a five-minute lifetime." },
    ],
    behavior: "Feedback moves from bounded intake through queued classification into searchable records and aggregate trend views.",
    evidence: "Reviewed source uses Next.js 16, React 19, Prisma/PostgreSQL, Redis/BullMQ, NextAuth, Zod, and the OpenAI SDK. Test files exist, but were not executed for this portfolio review.",
    reflection: "The hard part is not adding AI; it is designing what happens when AI is late, uncertain, rate-limited, or wrong.",
    next: "Reconcile the UI’s advertised upload size with the server limit, then capture a sanitized authenticated workflow with authorization.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Zod", "OpenAI SDK"],
    source: "https://github.com/MilindDevX/feedbackos",
    demo: "https://feedbackos.vercel.app",
  },
  {
    slug: "medmarket",
    name: "MedMarket",
    strapline: "One market. Three points of view.",
    kind: "Marketplace system · Solo",
    summary: "A self-directed, multi-sided medicine marketplace exploration connecting consumer discovery, pharmacy inventory, and administrative review.",
    origin: "A self-directed solo exploration, built to understand how role-specific workflows meet in one product.",
    ownership: "Solo product architecture, frontend, API, and data model for the published snapshot.",
    problem: "Customers, pharmacy owners, and administrators touch the same catalogue but have different responsibilities, risks, and decisions.",
    constraints: ["Phase-one inventory is OTC-only", "AI extraction is fallible", "Price and expiry rules need visible, role-aware feedback"],
    decisions: [
      { title: "Separate role surfaces", detail: "Consumer, owner, and admin routes expose the responsibilities relevant to each actor." },
      { title: "Enforce catalogue rules", detail: "Controller logic rejects non-OTC inventory and recorded prices above MRP." },
      { title: "Treat extraction as assistance", detail: "Document extraction includes fallback and unreadable states instead of assuming model output is correct." },
    ],
    behavior: "Consumers discover and order; pharmacy owners manage inventory and expiry notices; administrators review applications and complaints.",
    evidence: "Reviewed source uses React 19/Vite, Express 5 with TypeScript, Prisma 7/PostgreSQL, and JWT authentication. It contains 38 backend and 20 frontend test definitions; they were not rerun for this portfolio review.",
    reflection: "Multi-role products become clearer when each interface explains responsibility, not simply permission.",
    next: "Move critical catalogue invariants closer to the database and align deployed states with current source.",
    stack: ["React", "Vite", "Express", "TypeScript", "Prisma", "PostgreSQL", "JWT"],
    source: "https://github.com/MilindDevX/MedMarket",
    demo: "https://med-market-self.vercel.app",
    apiDocs: "https://medmarket-g08v.onrender.com/api/docs",
  },
] as const satisfies readonly Project[];

export const labNote = {
  name: "Beijing PM2.5",
  label: "Data lab · Six-person coursework",
  role: "Project, data, and ETL lead",
  summary: "I led sourcing and cleaning for 43,824 hourly observations from 2010–2014, then supported exploratory analysis, Tableau work, and reporting.",
  finding: "9,270 hours—21.153% of the dataset—sat above the project’s 150 µg/m³ analysis threshold.",
  source: "https://github.com/MilindDevX/SectionD_G12_BeijingPM25Analysis",
  tableau: "https://public.tableau.com/app/profile/milind.bansal5979/viz/DVA2-Capstone/RiskSeverityOverview",
} as const;

export const contribution = {
  name: "BlogApp authentication screens",
  label: "One accepted Hacktoberfest UI contribution",
  summary: "A merged login and signup layout update across two React components: +120 / −69 lines in pull request #2.",
  url: "https://github.com/Pinfinity07/BlogApp/pull/2",
} as const;
