// ABOUTME: Full-bleed AI portfolio contact finale with direct public destinations and no résumé placeholder.
import { aiProfile } from "@/data/ai-portfolio";
import { destinations, profile } from "@/data/portfolio";
import styles from "./ai.module.css";

export function AiContact() {
  return (
    <footer id="contact" className={styles.aiContact} data-ai-chapter="CONTACT">
      <div className={styles.contactSignal} data-ai-passive="signal" aria-hidden="true" />
      <div className={styles.contactInner}>
        <p className={styles.sectionKicker}>{aiProfile.contact.label}</p>
        <h2>
          {aiProfile.contact.headline}
          <em>{aiProfile.contact.emphasis}</em>
        </h2>
        <p className={styles.contactInvitation}>{aiProfile.contact.invitation}</p>
        <nav className={styles.contactLinks} aria-label="Contact links">
          <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong></a>
          <a href={destinations.github}><span>Code</span><strong>GitHub ↗</strong></a>
          <a href={destinations.linkedin}><span>Profile</span><strong>LinkedIn ↗</strong></a>
        </nav>
        <div className={styles.contactBase}>
          <span>© 2026 Milind Bansal</span>
          <span>Built around evidence, limits, and useful work.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
