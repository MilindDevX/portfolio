import { CaseStudyShell, caseStudyMetadata } from "@/components/CaseStudyShell";
import { nextFeatured, projectBySlug } from "@/data/portfolio";
const project = projectBySlug("medmarket");
export const metadata = caseStudyMetadata(project);
export default function MedMarketPage() { return <CaseStudyShell project={project} next={nextFeatured("medmarket")} />; }
