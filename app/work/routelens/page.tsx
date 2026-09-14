import { CaseStudyShell } from "@/components/CaseStudyShell";
import { projects } from "@/data/portfolio";
export default function RouteLensPage() { return <CaseStudyShell project={projects[0]} next={projects[1]} />; }
