import { CaseStudyShell, caseStudyMetadata } from "@/components/CaseStudyShell";
import { projectBySlug } from "@/data/portfolio";
const project = projectBySlug("routelens");
export const metadata = caseStudyMetadata(project);
export default function RouteLensPage() { return <CaseStudyShell project={project} next={projectBySlug("feedbackos")} />; }
