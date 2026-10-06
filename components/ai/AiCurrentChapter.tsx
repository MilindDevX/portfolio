// ABOUTME: Single source of public education facts and a brief human context for the AI portfolio.
import { aiProfile } from "@/data/ai-portfolio";
import { education } from "@/data/profile";
import styles from "./ai.module.css";

export function AiCurrentChapter() {
  return (
    <section id="ai-about" className={styles.currentChapter} aria-labelledby="ai-about-title" data-ai-chapter="ABOUT">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionIndex}>07 / 07</p>
        <div><p className={styles.sectionKicker}>Current chapter</p><h2 id="ai-about-title">Learning the whole system</h2></div>
      </div>
      <div className={styles.chapterBody}>
        <div className={styles.educationLine}>
          <p>{education.degree}</p>
          <h3>{education.institution}</h3>
          <dl>
            <div><dt>Period</dt><dd>{education.period}</dd></div>
            <div><dt>CGPA</dt><dd>{education.gpa.replace(/^CGPA:\s*/, "")}</dd></div>
            <div><dt>Minor</dt><dd>{education.minor}</dd></div>
          </dl>
          <p>{aiProfile.educationNote}</p>
        </div>
        <p className={styles.personalLine}>{aiProfile.interests}</p>
      </div>
    </section>
  );
}
