// ABOUTME: Canonical full-stack case evidence with concise, evidence-bounded AI workflow context.
import Image from "next/image";
import type { projects } from "@/data/portfolio";
import { RevealOnView } from "./RevealOnView";

type Project = (typeof projects)[number];

export function CaseEvidence({ project }: { project: Project }) {
  if (project.slug === "routelens") return <RevealOnView><section className="case-evidence case-artifact shell" data-composition="artifact" aria-labelledby="artifact-title">
    <div className="evidence-heading"><p className="section-label">04 / Authentic artifact</p><h2 id="artifact-title">The comparison starts with structure.</h2></div>
    <figure><Image src="/images/projects/routelens-directory-home.webp" width={1440} height={900} sizes="(max-width: 767px) 92vw, 82vw" alt="RouteLens API Directory home workspace"/><figcaption>RouteLens public API Directory home. Built solo for a Digital Heroes internship qualifying round; not client work or an endorsement.</figcaption></figure>
    <details className="artifact-transcript"><summary>Artifact transcript</summary><p>The screen presents the API Directory home with OpenAPI paste, quick-add, and URL-loading paths plus an empty route state. No account or private data is visible.</p></details>
  </section></RevealOnView>;

  if (project.slug === "feedbackos") return <RevealOnView><section className="case-evidence case-pipeline shell" data-composition="pipeline" aria-labelledby="pipeline-title">
    <div className="evidence-heading"><p className="section-label">04 / System evidence</p><h2 id="pipeline-title">Uncertainty stays in the workflow.</h2></div>
    <figure className="evidence-capture"><Image src="/images/projects/feedbackos-public-home.webp" width={960} height={640} sizes="(max-width: 767px) 92vw, 50vw" alt="FeedbackOS public home entry"/><figcaption>Public home entry; authenticated workspace is not shown.</figcaption></figure>
    <ol className="pipeline-diagram" aria-label="FeedbackOS processing pipeline"><li><span>01</span><strong>Bounded intake</strong><p>CSV limits protect the request boundary.</p></li><li><span>02</span><strong>Queued work</strong><p>BullMQ separates ingestion from classification.</p></li><li><span>03</span><strong>Validation boundary</strong><p>Zod checks model output before persistence.</p></li><li><span>04</span><strong>Human review</strong><p>Low-confidence items remain inspectable.</p></li></ol>
    <aside><strong>AI boundary</strong><p>Reviewed source uses Zod validation and includes a low-confidence review path for malformed output. It uses organization-scoped aggregate cache keys. Upstream rate-limited 429 handling may return a hard-coded mock fallback; the reviewed tests were not executed.</p><p>The authentic capture stops at the public home entry. The diagram documents reviewed source behavior; it is not a fabricated product screen.</p></aside>
  </section></RevealOnView>;

  return <RevealOnView><section className="case-evidence case-roles shell" data-composition="roles" aria-labelledby="roles-title">
    <div className="evidence-heading"><p className="section-label">04 / Role composition</p><h2 id="roles-title">Shared records. Different responsibilities.</h2></div>
    <figure className="evidence-capture"><Image src="/images/projects/medmarket-admin-dashboard.webp" width={1440} height={900} sizes="(max-width: 767px) 92vw, 50vw" alt="MedMarket public demo admin dashboard"/><figcaption>Public demo admin dashboard with seeded data; not usage or traction.</figcaption></figure>
    <div className="roles-diagram" aria-label="MedMarket role and rule map"><article><span>01</span><h3>Customer</h3><p>Discover medicines and place orders.</p></article><article><span>02</span><h3>Pharmacy owner</h3><p>Manage inventory and expiry notices.</p></article><article><span>03</span><h3>Administrator</h3><p>Review applications and complaints.</p></article><div><strong>Controller-enforced rules</strong><p>OTC inventory · recorded price ≤ MRP · role-aware access</p></div></div>
    <p className="evidence-boundary">Extraction is assistance: unreadable documents fall back for human verification. Catalogue eligibility and price invariants remain controller-enforced outside the AI boundary. This is a code-native responsibility map based on reviewed routes and controllers—not a simulated product interface.</p>
  </section></RevealOnView>;
}
