"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function RevealOnView({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.classList.add("reveal-ready");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.dataset.visible = "true"; observer.disconnect(); }
    }, { rootMargin: "0px 0px -8%" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} data-reveal-sequence="true">{children}</div>;
}
