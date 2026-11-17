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
    <Link href="/" className="wordmark" aria-label="Milind Bansal, home"><span aria-hidden="true"><svg className="wordmark-mark" viewBox="0 0 512 512"><path d="M113 372V140l96 146 96-146v232h56a58 58 0 0 0 0-116h-56 48a58 58 0 0 0 0-116h-48" /><circle cx="113" cy="372" r="20" /></svg></span><strong>Milind Bansal</strong></Link>
    <nav className="primary-nav" aria-label="Primary navigation"><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav>
    <Link className="edition-link" href="/ai">AI edition ↗</Link>
    <a className="header-resume" href={destinations.resume}>Current résumé <ArrowMark /></a>
  </header>;
}
