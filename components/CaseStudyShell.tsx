import type { Metadata } from "next";
import Link from "next/link";
import type { projects } from "@/data/portfolio";
import { ArrowMark } from "./Marks";
import { CaseEvidence } from "./CaseEvidence";

type Project = (typeof projects)[number];

export function caseStudyMetadata(project: Project): Metadata {
  const title = `${project.name} — ${project.strapline.replace(/\.$/, "")} | Milind Bansal`;
  return { title, description: project.summary, alternates: { canonical: `/work/${project.slug}` }, openGraph: { type: "article", locale: "en_US", siteName: "Milind Bansal", title, description: project.summary, images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Milind Bansal, full-stack engineer: Milind builds the whole path." }] } };
}

export function CaseStudyShell({ project, next }: { project: Project; next: Project }) {
  return <main className={`case-study case-${project.slug}`} id="main-content">
    <section className="case-hero shell"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/#work">Selected work</Link><span aria-hidden="true">/</span><span aria-current="page">{project.name}</span></nav><p className="section-label">{project.kind}</p><h1>{project.name}<em>{project.strapline}</em></h1><p className="case-deck">{project.summary}</p><div className="case-links"><a href={project.demo}>Open live project <ArrowMark /></a><a href={project.source}>Inspect source <ArrowMark /></a>{"apiDocs" in project && <a href={project.apiDocs}>Read API docs <ArrowMark /></a>}</div></section>
    <section className="case-context shell ruled-section"><p className="section-label">01 / Context + ownership</p><div><h2>The problem</h2><p>{project.problem}</p><aside><strong>{project.ownership}</strong><span>{project.origin}</span></aside></div></section>
    <section className="case-constraints shell ruled-section"><p className="section-label">02 / Edges</p><div><h2>Constraints</h2><ol>{project.constraints.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div></section>
    <section className="case-decisions shell ruled-section"><p className="section-label">03 / What shaped the system</p><div><h2>Decisions</h2><div className="decision-list">{project.decisions.map((decision, index) => <article key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{decision.title}</h3><p>{decision.detail}</p></article>)}</div></div></section>
    <CaseEvidence project={project}/>
    <section className="case-behavior shell ruled-section"><p className="section-label">05 / Verified behavior</p><div><h2>Interface and system behavior</h2><p>{project.behavior}</p><blockquote>{project.evidence}</blockquote></div></section>
    <section className="case-reflection shell ruled-section"><p className="section-label">06 / Looking back</p><div><h2>Reflection</h2><p>{project.reflection}</p><h3>Next improvement</h3><p>{project.next}</p></div></section>
    <nav className="next-work shell" aria-label="Next case study"><span>Next system</span><Link href={`/work/${next.slug}`}><strong>{next.name}</strong><ArrowMark /></Link></nav>
  </main>;
}
