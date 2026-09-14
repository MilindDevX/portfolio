// ABOUTME: Two compositionally distinct studies showing where AI output stays bounded inside products.
import Image from "next/image";
import { aiStudies } from "@/data/ai-portfolio";
import styles from "./ai.module.css";

export function AppliedAiStudies() {
  const [feedback, market] = aiStudies;
  return (
    <section
      id="applied-ai"
      className={styles.appliedStudies}
      aria-labelledby="applied-ai-title"
      data-ai-chapter="APPLIED AI"
    >
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>03 / 06</p>
        <div><p className={styles.sectionKicker}>Applied studies</p><h2 id="applied-ai-title">AI inside complete products</h2></div>
      </div>

      <article className={styles.feedbackScene} data-ai-study="feedbackos">
        <div className={styles.feedbackCopy}>
          <p className={styles.studyLabel}>{feedback.label}</p>
          <h3>{feedback.name}</h3>
          <p>{feedback.summary}</p>
          <p className={styles.studyBoundary}>{feedback.boundary}</p>
          <a href={feedback.href}>Case study ↗</a>
        </div>
        <div className={styles.queueTrace} aria-label="FeedbackOS AI workflow">
          <span>Queue</span><i aria-hidden="true" /><span>Validate</span><i aria-hidden="true" /><span>Review</span>
        </div>
        <figure className={styles.feedbackMedia}>
          <Image src={feedback.image} width={960} height={640} sizes="(max-width: 1100px) calc(100vw - 40px), 52vw" alt="FeedbackOS public home entry" />
          <figcaption>Public home entry; the authenticated workflow is not shown.</figcaption>
        </figure>
      </article>

      <article className={styles.marketScene} data-ai-study="medmarket">
        <div className={styles.extractionTrace} aria-label="MedMarket assisted extraction boundary">
          <span>Extract</span><i aria-hidden="true" />
          <span>Unreadable</span><i aria-hidden="true" />
          <span>Human check</span><i aria-hidden="true" />
          <span>Catalogue rule</span>
        </div>
        <figure className={styles.marketMedia}>
          <Image src={market.image} width={1440} height={900} sizes="(max-width: 1100px) calc(100vw - 40px), 46vw" alt="MedMarket public demo admin dashboard with seeded data" />
          <figcaption>Public seeded demo dashboard; not usage or traction.</figcaption>
        </figure>
        <div className={styles.marketCopy}>
          <p className={styles.studyLabel}>{market.label}</p>
          <h3>{market.name}</h3>
          <p>{market.summary}</p>
          <p className={styles.studyBoundary}>{market.boundary}</p>
          <a href={market.href}>Case study ↗</a>
        </div>
      </article>
    </section>
  );
}
