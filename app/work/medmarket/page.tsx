import { CaseStudyShell } from "@/components/CaseStudyShell";
import { projects } from "@/data/portfolio";
export default function MedMarketPage() { return <CaseStudyShell project={projects[2]} next={projects[0]} />; }
