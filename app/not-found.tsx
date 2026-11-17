import Link from "next/link";
import { ArrowMark } from "@/components/Marks";

export default function NotFound() {
  return <main id="main-content" className="not-found shell">
    <p className="section-label">404 / Off the path</p>
    <h1>This page isn’t on the path. <em>The work is.</em></h1>
    <p>The link may be old or mistyped. The case studies and both résumés are one click away.</p>
    <div className="inline-links"><Link href="/#work">Selected work <ArrowMark /></Link><Link href="/ai">AI edition <ArrowMark /></Link><Link href="/">Home <ArrowMark /></Link></div>
  </main>;
}
