// ABOUTME: Compact supporting evidence that distinguishes engineering and coursework.
import { aiRange } from "@/data/ai-portfolio";
import styles from "./ai.module.css";

export function AiRange() {
  return (
    <section id="range" className={styles.range} aria-labelledby="range-title" data-ai-chapter="RANGE">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>06 / 07</p>
        <div><p className={styles.sectionKicker}>Supporting evidence</p><h2 id="range-title">Beyond models</h2></div>
      </div>
      <ol className={styles.rangeReel}>
        {aiRange.map((item, index) => (
          <li key={item.name}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item.kind}</p>
            <h3><a href={item.href}>{item.name}</a></h3>
            <p>{item.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
