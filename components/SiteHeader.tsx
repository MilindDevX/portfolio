// ABOUTME: Route-aware site navigation with dedicated AI and full-stack presentations.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { destinations } from "@/data/portfolio";
import { ArrowMark } from "./Marks";
import { AiHeader } from "./ai/AiHeader";

export function SiteHeader() {
  const pathname = usePathname();
  const isAi = pathname === "/ai" || pathname.startsWith("/work/truthlens");
  if (isAi) return <AiHeader />;

  return <header className="site-header shell">
    <Link href="/" className="wordmark" aria-label="Milind Bansal, home"><span aria-hidden="true">MB</span><strong>Milind Bansal</strong></Link>
    <nav className="primary-nav" aria-label="Primary navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav>
    <Link className="edition-link" href="/ai">AI edition ↗</Link>
    <a className="header-resume" href={destinations.resume}>Current résumé <ArrowMark /></a>
  </header>;
}
