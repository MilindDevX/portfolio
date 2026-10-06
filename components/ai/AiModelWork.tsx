// ABOUTME: Leading AI evidence: team model work with before/after metrics drawn on one honest scale.
import { modelWork } from "@/data/ai-portfolio";
import styles from "./ai.module.css";

const percent = (value: number, scale: number) => `${((value / scale) * 100).toFixed(2)}%`;
const metric = (value: number, scale: number) => value.toFixed(scale === 1 ? 3 : 1);

export function AiModelWork() {
  return (
    <section id="model-work" className={styles.modelWork} aria-labelledby="model-work-title" data-ai-chapter="MODEL WORK">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>02 / 07</p>
        <div><p className={styles.sectionKicker}>Model work</p><h2 id="model-work-title">Numbers I can defend</h2></div>
      </div>
      <div className={styles.modelGrid}>
        {modelWork.map((study) => (
          <article key={study.slug} className={styles.modelStudy} aria-labelledby={`${study.slug}-title`}>
            <p className={styles.studyLabel}>{study.label}</p>
            <h3 id={`${study.slug}-title`}>{study.name}</h3>
            <p className={styles.modelTitle}>{study.title}</p>
            <p>{study.summary}</p>
            <div className={styles.modelMetrics}>
              <p className={styles.modelUnit}>{study.unit}</p>
              {study.bars.map((bar) => (
                <div key={bar.label} className={styles.modelMetric}>
                  <p><span>{bar.label}</span><strong>{metric(bar.from, study.scale)} → {metric(bar.to, study.scale)}</strong></p>
                  <div className={styles.modelTrack} aria-hidden="true"><i className={styles.modelFrom} style={{ width: percent(bar.from, study.scale) }} /></div>
                  <div className={styles.modelTrack} aria-hidden="true"><i className={styles.modelTo} style={{ width: percent(bar.to, study.scale) }} /></div>
                </div>
              ))}
              <p className={styles.modelCaption}>{study.caption}</p>
            </div>
            {"source" in study && <a href={study.source}>Source ↗</a>}
          </article>
        ))}
      </div>
    </section>
  );
}
