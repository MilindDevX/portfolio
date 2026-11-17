import Link from "next/link";
import { featuredProjects, labNote, profile, projectBySlug, teamWork } from "@/data/portfolio";
import { modelWork } from "@/data/ai-portfolio";
import { HeroAssembly } from "@/components/HeroAssembly";
import { ProjectSpecimen } from "@/components/ProjectSpecimen";
import { RevealOnView } from "@/components/RevealOnView";
import { ArrowMark } from "@/components/Marks";

export default function Home() {
  const technologyGroups = [
    ["Interfaces", "Next.js · React · TypeScript · Vite"],
    ["Systems", "Go · PostgreSQL · Express · Prisma · Vercel Queues · Prometheus"],
    ["Judgment layers", "Python · LiteLLM · Zod · Auth · AI classification · Tableau"],
  ];
  const evalbar = modelWork[0];
  const routeLens = projectBySlug("routelens");
  return <main id="main-content">
    <HeroAssembly />
    <section className="selected-work shell" id="work" aria-labelledby="work-title"><header className="section-intro"><p className="section-label">01 / Selected work</p><h2 id="work-title">Three ways work goes wrong.<br/><em>Three systems that handle it.</em></h2></header>{featuredProjects.map((project, index) => <ProjectSpecimen project={project} index={index} key={project.slug}/>)}</section>
    <RevealOnView><section className="open-source shell ruled-section" aria-labelledby="oss-title"><p className="section-label">02 / Open source</p><div className="oss-grid"><div><span className="lab-role">{evalbar.label}</span><h2 id="oss-title">{evalbar.name}</h2><p className="oss-title">{evalbar.title}</p><p>{evalbar.summary} 79 tests, published on PyPI.</p><div className="inline-links"><a href={evalbar.source}>Source <ArrowMark /></a>{evalbar.links.map((link) => <a key={link.href} href={link.href}>{link.label} <ArrowMark /></a>)}</div></div><figure className="data-figure"><dl className="oss-bars">{evalbar.bars.map((bar) => <div key={bar.label}><dt>{bar.label}</dt><dd><span className="oss-track"><i style={{width:`${bar.from}%`}}/><b style={{width:`${bar.to}%`}}/></span><strong>{bar.from}% → {bar.to}%</strong></dd></div>)}</dl><figcaption>{evalbar.unit}. {evalbar.caption}</figcaption></figure></div></section></RevealOnView>
    <RevealOnView><section className="lab-note shell ruled-section" aria-labelledby="lab-title"><p className="section-label">03 / Data lab</p><div className="lab-grid"><div><span className="lab-role">{labNote.label} · {labNote.role}</span><h2 id="lab-title">{labNote.name}</h2><p>{labNote.summary}</p><div className="inline-links"><a href={labNote.source}>Source <ArrowMark /></a><a href={labNote.tableau}>Tableau workbook <ArrowMark /></a></div></div><figure className="data-figure"><div className="data-number">43,824<span>hourly observations</span></div><div className="threshold-bar"><i style={{width:"21.153%"}}/><span>21.153%</span></div><figcaption>{labNote.finding} Observational coursework, not a causal claim.</figcaption></figure></div></section></RevealOnView>
    <RevealOnView><section className="team-work shell ruled-section" aria-labelledby="team-work-title"><p className="section-label">04 / Team + earlier work</p><div><h2 id="team-work-title">Beyond the main three.</h2><ul className="team-work-list">{teamWork.map((item) => <li key={item.name}><p className="team-work-label">{item.label}</p><h3>{item.name}</h3><p>{item.summary}</p>{"url" in item && <a className="action-link" href={item.url}>Inspect the repository <ArrowMark /></a>}</li>)}<li><p className="team-work-label">Earlier work · Developer tool · Solo</p><h3>{routeLens.name}</h3><p>{routeLens.summary}</p><Link className="action-link" href="/work/routelens">Read the case study <ArrowMark /></Link></li></ul></div></section></RevealOnView>
    <section className="technology shell ruled-section" aria-labelledby="technology-title"><p className="section-label">05 / Technology index</p><div><h2 id="technology-title">Tools follow the problem.</h2><p className="technology-intro">This is an evidence index, not a skill meter. Every item appears in work shown above.</p><dl>{technologyGroups.map(([term, description], index) => <div key={term}><dt><span>0{index + 1}</span>{term}</dt><dd>{description}</dd></div>)}</dl></div></section>
    <section className="about shell ruled-section" id="about" aria-labelledby="about-title"><p className="section-label">06 / About + off screen</p><div className="about-grid"><h2 id="about-title">Curious enough to open the box.<br/><em>Patient enough to map it.</em></h2><div className="about-copy"><p>{profile.about}</p><section className="current-chapter" aria-labelledby="education-title"><p className="section-label">Current chapter</p><h3 id="education-title">{profile.degree}</h3><p>{profile.institution}</p><dl><div><dt>Period</dt><dd>{profile.period}</dd></div><div><dt>Academic</dt><dd>{profile.gpa} · {profile.minor}</dd></div></dl></section><aside><span>OFF SCREEN</span><p>{profile.offScreen}</p></aside></div></div></section>
  </main>;
}
