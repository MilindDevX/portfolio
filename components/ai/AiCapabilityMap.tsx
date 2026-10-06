// ABOUTME: Typographic AI capability track linking every claim to concrete project evidence.
import { aiCapabilities } from "@/data/ai-portfolio";
import styles from "./ai.module.css";

export function AiCapabilityMap() {
  return (
    <section
      id="capabilities"
      className={styles.capabilityMap}
      aria-labelledby="capabilities-title"
      data-ai-chapter="CAPABILITIES"
    >
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>05 / 07</p>
        <div><p className={styles.sectionKicker}>Working toolkit</p><h2 id="capabilities-title">What I work with</h2></div>
      </div>
      <ol className={styles.capabilityTrack}>
        {aiCapabilities.map((capability, index) => (
          <li
            key={capability.name}
            data-evidence-project={capability.evidence}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{capability.name}</h3>
            <p>{capability.detail}</p>
            <a href={capability.href}>
              <span>See it in</span>
              {capability.evidence}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
