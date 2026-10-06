// ABOUTME: Three concise TruthLens scenes with stable interface captures and a real release comparison.
import Image from "next/image";
import { truthLens } from "@/data/ai-portfolio";
import styles from "./ai.module.css";

export function TruthLensPreview() {
  return (
    <section id="ai-work" className={styles.truthLens} aria-labelledby="truthlens-title" data-ai-chapter="TRUTHLENS" data-ai-story="truthlens">
      <header className={`${styles.truthScene} ${styles.questionScene}`} data-ai-scene="question">
        <p className={styles.flagshipLabel}>03 / 07 · TRUTHLENS / SOLO EXPERIMENT</p>
        <h2 id="truthlens-title">Could AI detect <span className={styles.storyQuestionTail}>misinformation?</span></h2>
        <p>I started with that question, then built a TF-IDF / logistic-regression baseline, corrected the dataset labels, and tested it on held-out LIAR data.</p>
        <nav className={styles.sceneLinks} aria-label="TruthLens destinations">
          <a href="/work/truthlens">Case study ↗</a><a href={truthLens.live}>Live interface ↗</a><a href={truthLens.source}>Source ↗</a>
        </nav>
      </header>
      <div className={`${styles.truthScene} ${styles.interfaceScene}`} data-ai-scene="interface">
        <div className={styles.sceneHeading}><p className={styles.sectionKicker}>01 / The interface</p><h3>Built to inspect. Not to pretend.</h3></div>
        <div className={styles.interfaceFrames}>
          <figure><Image src="/images/projects/truthlens-landing.webp" width={1440} height={900} sizes="(max-width: 900px) calc(100vw - 40px), 52vw" alt="TruthLens public landing page showing Verify the signal, keep the evidence beside an evidence-trace panel" /><figcaption>Public interface—not model validation.</figcaption></figure>
          <figure><Image src="/images/projects/truthlens-dashboard.webp" width={1440} height={900} sizes="(max-width: 900px) calc(100vw - 40px), 36vw" alt="TruthLens Analyze Content dashboard in a seeded empty state with no user data" /><figcaption>Seeded empty dashboard. No user data.</figcaption></figure>
        </div>
      </div>
      <div className={`${styles.truthScene} ${styles.resultScene}`} data-ai-scene="result">
        <div className={styles.sceneHeading}>
          <p className={styles.sectionKicker}>02 / The result</p><h3>The evidence stopped the release.</h3>
          <p>Rejected. Not uploaded. Not activated. Serving remains fail-closed without a valid baseline.</p>
          <a href="/work/truthlens#truthlens-log-05">Inspect the release decision ↗</a>
        </div>
        <div className={styles.releaseComparison} aria-label="Held-out LIAR F1 0.5648 versus required release gate 0.75, on a zero-to-one scale">
          <div><p><span>Held-out F1</span><strong>{truthLens.evaluation.heldOutF1}</strong></p><div className={styles.releaseTrack}><i className={styles.releaseBar} style={{ width: "56.48%" }} /></div></div>
          <div><p><span>Required gate</span><strong>{truthLens.evaluation.releaseGate}</strong></p><div className={styles.releaseTrack}><i className={styles.releaseBar} style={{ width: "75%" }} /></div></div>
          <p className={styles.scaleCaption}>Same scale: 0 → 1. A missed gate, not an accuracy claim.</p>
        </div>
      </div>
    </section>
  );
}
