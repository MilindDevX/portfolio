// ABOUTME: Full-viewport Signal Cinema introduction with perceptible passive layers and the shared avatar.
import Image from "next/image";
import { aiProfile } from "@/data/ai-portfolio";
import { destinations, publicProfile } from "@/data/profile";
import styles from "./ai.module.css";

export function AiHero() {
  return (
    <section id="ai-intro" className={styles.hero} aria-labelledby="ai-intro-title" data-ai-chapter="INTRO">
      <span className={styles.headerSentinel} data-ai-header-sentinel aria-hidden="true" />
      <div className={styles.signalBand} data-ai-passive="signal" aria-hidden="true" />
      <div className={styles.filmGrain} data-ai-passive="grain" aria-hidden="true" />

      <div className={styles.heroCopy}>
        <p className={styles.roleLabel}>{aiProfile.label}</p>
        <h1 id="ai-intro-title">{aiProfile.headline}</h1>
        <p className={styles.heroIntroduction}>{aiProfile.introduction}</p>
        <p className={styles.availability}>{aiProfile.availability}</p>
        <div className={styles.heroActions}>
          <a href={`mailto:${publicProfile.email}`}>START A CONVERSATION ↗</a>
          <a href={destinations.aiResume} target="_blank" rel="noopener noreferrer">VIEW RÉSUMÉ ↗</a>
        </div>
      </div>

      <figure className={styles.heroPortrait}>
        <Image
          src={publicProfile.avatar}
          width={1226}
          height={1283}
          preload
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) 42vw, 440px"
          alt="Illustrated student developer avatar"
        />
      </figure>

      <a className={styles.scrollCue} href="#model-work">SCROLL INTO THE EVIDENCE <span aria-hidden="true" /></a>
    </section>
  );
}
