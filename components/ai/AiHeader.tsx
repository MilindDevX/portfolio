// ABOUTME: Fixed Signal Cinema navigation with an active chapter output and plain full-stack destination.
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ai.module.css";

export function AiHeader() {
  const pathname = usePathname();
  const initialChapter = pathname.startsWith("/work/truthlens") ? "CASE STUDY" : "INTRO";

  return (
    <header className={styles.signalHeader} data-ai-shell="true">
      <Link className={styles.signalIdentity} href="/ai" aria-current={pathname === "/ai" ? "page" : undefined}>MB / APPLIED AI</Link>
      <span className={styles.signalChapter} data-ai-chapter-output aria-live="off">{initialChapter}</span>
      <Link className={styles.editionLink} href="/">FULL-STACK EDITION ↗</Link>
    </header>
  );
}
