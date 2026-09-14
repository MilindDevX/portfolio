import { CaseStudyShell } from "@/components/CaseStudyShell";
import { projects } from "@/data/portfolio";
export default function FeedbackOSPage() { return <CaseStudyShell project={projects[1]} next={projects[2]} />; }
