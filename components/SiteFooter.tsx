// ABOUTME: Route-aware contact footer preserving separate full-stack and AI visual systems.
"use client";

import { usePathname } from "next/navigation";
import { destinations, profile } from "@/data/portfolio";
import { ArrowMark } from "./Marks";
import { AiContact } from "./ai/AiContact";

export function SiteFooter() {
  const pathname = usePathname();
  const isAi = pathname === "/ai" || pathname.startsWith("/work/truthlens");

  if (isAi) return <AiContact />;

  return <footer className="site-footer" id="contact">
    <div className="shell footer-shell">
      <div className="footer-call"><p className="section-label">Open channel / Internship 2027</p><div><h2>Have a useful problem?<br/><em>Send it over.</em></h2></div></div>
      <div className="footer-links" aria-label="Contact links">
        <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong><ArrowMark /></a>
        <a href={destinations.github}><span>Code</span><strong>GitHub</strong><ArrowMark /></a>
        <a href={destinations.linkedin}><span>Profile</span><strong>LinkedIn</strong><ArrowMark /></a>
        <a href={destinations.resume}><span>PDF</span><strong>Current résumé</strong><ArrowMark /></a>
      </div>
      <div className="footer-base"><span>© 2026 Milind Bansal</span><span>Designed as an evidence trail, not a scorecard.</span><a href="#top">Back to top ↑</a></div>
    </div>
  </footer>;
}
