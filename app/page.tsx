import { labNote, profile, projects, teamWork } from "@/data/portfolio";
import { HeroAssembly } from "@/components/HeroAssembly";
import { ProjectSpecimen } from "@/components/ProjectSpecimen";
import { RevealOnView } from "@/components/RevealOnView";
import { ArrowMark } from "@/components/Marks";

export default function Home() {
  const technologyGroups = [
    ["Interfaces", "Next.js · React · TypeScript · Vite"],
    ["Systems", "Express · PostgreSQL · Prisma · Redis · BullMQ"],
    ["Judgment layers", "OpenAPI · Zod · Auth · AI classification · Tableau"],
  ];
  return <main id="main-content">
    <HeroAssembly />
    <section className="selected-work shell" id="work" aria-labelledby="work-title"><header className="section-intro"><p className="section-label">01 / Selected work</p><h2 id="work-title">Three messy workflows.<br/><em>Three different systems.</em></h2></header>{projects.map((project, index) => <ProjectSpecimen project={project} index={index} key={project.slug}/>)}</section>
    <RevealOnView><section className="lab-note shell ruled-section" aria-labelledby="lab-title"><p className="section-label">02 / Data lab</p><div className="lab-grid"><div><span className="lab-role">{labNote.label} · {labNote.role}</span><h2 id="lab-title">{labNote.name}</h2><p>{labNote.summary}</p><div className="inline-links"><a href={labNote.source}>Source <ArrowMark /></a><a href={labNote.tableau}>Tableau workbook <ArrowMark /></a></div></div><figure className="data-figure"><div className="data-number">43,824<span>hourly observations</span></div><div className="threshold-bar"><i style={{width:"21.153%"}}/><span>21.153%</span></div><figcaption>{labNote.finding} Observational coursework, not a causal claim.</figcaption></figure></div></section></RevealOnView>
    <RevealOnView><section className="team-work shell ruled-section" aria-labelledby="team-work-title"><p className="section-label">03 / Team + competition</p><div><h2 id="team-work-title">Beyond solo builds.</h2><ul className="team-work-list">{teamWork.map((item) => <li key={item.name}><p className="team-work-label">{item.label}</p><h3>{item.name}</h3><p>{item.summary}</p>{"url" in item && <a className="action-link" href={item.url}>Inspect the repository <ArrowMark /></a>}</li>)}</ul></div></section></RevealOnView>
    <section className="technology shell ruled-section" aria-labelledby="technology-title"><p className="section-label">04 / Technology index</p><div><h2 id="technology-title">Tools follow the problem.</h2><p className="technology-intro">This is an evidence index, not a skill meter. Every item appears in work shown above.</p><dl>{technologyGroups.map(([term, description], index) => <div key={term}><dt><span>0{index + 1}</span>{term}</dt><dd>{description}</dd></div>)}</dl></div></section>
    <section className="about shell ruled-section" id="about" aria-labelledby="about-title"><p className="section-label">05 / About + off screen</p><div className="about-grid"><h2 id="about-title">Curious enough to open the box.<br/><em>Patient enough to map it.</em></h2><div className="about-copy"><p>{profile.about}</p><section className="current-chapter" aria-labelledby="education-title"><p className="section-label">Current chapter</p><h3 id="education-title">{profile.degree}</h3><p>{profile.institution}</p><dl><div><dt>Period</dt><dd>{profile.period}</dd></div><div><dt>Academic</dt><dd>{profile.gpa} · {profile.minor}</dd></div></dl></section><aside><span>OFF SCREEN</span><p>{profile.offScreen}</p></aside></div></div></section>
  </main>;
}
