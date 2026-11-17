import { CaseStudyShell, caseStudyMetadata } from "@/components/CaseStudyShell";
import { nextFeatured, projectBySlug } from "@/data/portfolio";
const project = projectBySlug("skipq");
export const metadata = caseStudyMetadata(project);
export default function SkipqPage() { return <CaseStudyShell project={project} next={nextFeatured("skipq")} />; }
