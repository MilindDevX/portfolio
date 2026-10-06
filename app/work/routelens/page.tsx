import { CaseStudyShell, caseStudyMetadata } from "@/components/CaseStudyShell";
import { projects } from "@/data/portfolio";
export const metadata = caseStudyMetadata(projects[0]);
export default function RouteLensPage() { return <CaseStudyShell project={projects[0]} next={projects[1]} />; }
