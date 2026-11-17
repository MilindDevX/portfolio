import { CaseStudyShell, caseStudyMetadata } from "@/components/CaseStudyShell";
import { nextFeatured, projectBySlug } from "@/data/portfolio";
const project = projectBySlug("feedbackos");
export const metadata = caseStudyMetadata(project);
export default function FeedbackOSPage() { return <CaseStudyShell project={project} next={nextFeatured("feedbackos")} />; }
