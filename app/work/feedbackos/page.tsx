import { CaseStudyShell, caseStudyMetadata } from "@/components/CaseStudyShell";
import { projects } from "@/data/portfolio";
export const metadata = caseStudyMetadata(projects[1]);
export default function FeedbackOSPage() { return <CaseStudyShell project={projects[1]} next={projects[2]} />; }
