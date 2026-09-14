// ABOUTME: Ordered standalone AI portfolio composition and its single motion boundary.
import { AiHero } from "./AiHero";
import { AiCapabilityMap } from "./AiCapabilityMap";
import { AiCurrentChapter } from "./AiCurrentChapter";
import { AiMotion } from "./AiMotion";
import { AiRange } from "./AiRange";
import { AppliedAiStudies } from "./AppliedAiStudies";
import { TruthLensPreview } from "./TruthLensPreview";
import styles from "./ai.module.css";

export function AiPortfolio() {
  return (
    <main id="main-content" className={styles.portfolio} data-ai-portfolio>
      <AiMotion />
      <AiHero />
      <TruthLensPreview />
      <AppliedAiStudies />
      <AiCapabilityMap />
      <AiRange />
      <AiCurrentChapter />
    </main>
  );
}
