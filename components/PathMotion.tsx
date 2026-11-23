// ABOUTME: Runs the ambient "start point" travelling each section rule only while that section is on screen.
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PathMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".ruled-section, .project-specimen, .hero-proof");
    if (!nodes.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) (entry.target as HTMLElement).dataset.pathOnscreen = String(entry.isIntersecting);
    }, { rootMargin: "0px 0px -10%" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
