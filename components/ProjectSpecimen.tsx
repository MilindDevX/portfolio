import Image from "next/image";
import Link from "next/link";
import type { projects } from "@/data/portfolio";
import { ArrowMark, AsteriskMark } from "./Marks";
import { RevealOnView } from "./RevealOnView";

type Project = (typeof projects)[number];

function SystemSpecimen({ project }: { project: Project }) {
  if (project.slug === "routelens") return <div className="screen-capture"><Image src="/images/projects/routelens-directory-home.webp" width={1440} height={900} sizes="(max-width: 767px) 92vw, 57vw" alt="RouteLens API Directory home workspace" /><details className="artifact-transcript"><summary>Artifact transcript</summary><p>The screen presents the API Directory home with OpenAPI paste, quick-add, and URL-loading paths plus an empty route state. No account or private data is visible.</p></details></div>;
  if (project.slug === "feedbackos") return <div className="screen-capture authentic-capture"><Image src="/images/projects/feedbackos-review-queue.webp" width={1440} height={900} sizes="(max-width: 767px) 92vw, 57vw" alt="FeedbackOS feedback list with AI labels and Needs Review flags" /></div>;
  return <div className="screen-capture authentic-capture"><Image src="/images/projects/medmarket-admin-dashboard.webp" width={1440} height={900} sizes="(max-width: 767px) 92vw, 57vw" alt="MedMarket public demo admin dashboard" /></div>;
}

export function ProjectSpecimen({ project, index }: { project: Project; index: number }) {
  return <RevealOnView><article className={`project-specimen project-${project.slug}`} aria-labelledby={`${project.slug}-title`}>
    <header><p className="section-label">0{index + 1} / {project.kind}</p><p>{project.strapline}</p></header>
    <div className="project-grid"><div className="project-copy"><h3 id={`${project.slug}-title`}>{project.name}</h3><p>{project.summary}</p><ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul><Link className="action-link" href={`/work/${project.slug}`}>Read the case study <ArrowMark /></Link></div>
      <figure className="project-visual"><div className="specimen-label"><span>AUTHENTIC SPECIMEN</span><AsteriskMark /></div><SystemSpecimen project={project}/><figcaption>{project.slug === "routelens" ? "RouteLens public API Directory home. Built solo for a Digital Heroes internship qualifying round; not client work or an endorsement." : project.slug === "feedbackos" ? "Local build signed in as the seeded demo user: 48 seed items. Needs Review marks low-confidence classifications; not usage or traction." : "Public demo admin dashboard with seeded data; not usage or traction."}</figcaption></figure>
    </div>
  </article></RevealOnView>;
}
