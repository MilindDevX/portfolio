import { CaseStudyShell, caseStudyMetadata } from "@/components/CaseStudyShell";
import { projects } from "@/data/portfolio";
export const metadata = caseStudyMetadata(projects[2]);
export default function MedMarketPage() { return <CaseStudyShell project={projects[2]} next={projects[0]} />; }
