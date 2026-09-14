// ABOUTME: Signal Cinema TruthLens case study preserving ten evidence chapters and the rejected release.
import Image from "next/image";
import { truthLens } from "@/data/ai-portfolio";
import { AiMotion } from "./AiMotion";
import styles from "./ai.module.css";

const log = [
  ["01", "The question", truthLens.question],
  ["02", "Dataset provenance", "ISOT label provenance was corrected before retraining. That correction belongs in the record because evaluation is only meaningful when the labels behind a baseline are understood."],
  ["03", "Baseline", "TF-IDF and logistic regression provided an inspectable comparison point. A baseline is a starting point for evaluation, not proof that a detector is reliable."],
  ["04", "Held-out evaluation", "Development used LIAR train and validation splits; evaluation used a separate LIAR test split. That is held-out evidence—not evidence that the entire dataset was unseen, or that the model generalizes to a new distribution."],
  ["05", "Release decision", truthLens.releaseDecision],
  ["06", "Serving boundary", "The API refuses inference when no valid baseline is available. It fails closed instead of returning a result that could be mistaken for a supported analysis."],
  ["07", "Explainability", truthLens.explainability],
  ["08", "Drift monitoring", truthLens.monitoring],
  ["09", "What the experiment established", "A plausible baseline and interface are not a validated detector. The useful result was identifying the release boundary before the artifact could be presented as reliable."],
  ["10", "Next experiment", "Revisit the data and evaluation design, establish a stronger valid baseline, and test it against an independently held-out distribution before considering a release."],
] as const;

export function TruthLensCaseStudy() {
  return (
    <main id="main-content" className={styles.portfolio} data-ai-portfolio data-ai-case="truthlens">
      <AiMotion />
      <div className={styles.caseSignal} data-ai-passive="signal" aria-hidden="true" />
      <article className={styles.caseCinema} aria-labelledby="truthlens-case-title">
        <header className={styles.caseCinemaHero} data-ai-chapter="CASE STUDY">
          <span className={styles.headerSentinel} data-ai-header-sentinel aria-hidden="true" />
          <nav aria-label="Case study breadcrumb" className={styles.caseBreadcrumb}>
            <a href="/ai">Applied AI portfolio</a><span aria-hidden="true">/</span><span aria-current="page">TruthLens</span>
          </nav>
          <p className={styles.caseEyebrow}>EXPERIMENT LOG / SOLO</p>
          <h1 id="truthlens-case-title">Can a model spot <span className={styles.storyQuestionTail}>misinformation?</span></h1>
          <p>{truthLens.summary}</p>
          <div className={styles.caseLinks}>
            <a href={truthLens.source}>Browse source</a>
            <a href={truthLens.live}>Open the live interface</a>
          </div>
        </header>

        <section className={styles.caseOutcome} aria-labelledby="release-result-title" data-ai-chapter="RESULT">
          <div>
            <p className={styles.caseEyebrow}>RELEASE GATE</p>
            <h2 id="release-result-title">The gate did its job.</h2>
          </div>
          <div className={styles.caseOutcomeNumbers} role="group" aria-label={`LIAR held-out F1 ${truthLens.evaluation.heldOutF1} compared with required release gate ${truthLens.evaluation.releaseGate}`}>
            <p><strong>{truthLens.evaluation.heldOutF1}</strong><span>LIAR held-out F1</span></p>
            <i aria-hidden="true" />
            <p><strong>{truthLens.evaluation.releaseGate}</strong><span>required release gate</span></p>
          </div>
          <div className={styles.caseGatePlot} aria-label="Held-out F1 and release gate on the same zero-to-one scale">
            <div><span>Held-out F1</span><i style={{ width: "56.48%" }} /></div>
            <div><span>Release gate</span><i style={{ width: "75%" }} /></div>
            <p>A missed gate, not an accuracy claim. Scale: 0–1.</p>
          </div>
          <p className={styles.caseDecision}>Result: rejected. The artifact was not uploaded or activated.</p>
        </section>

        <div className={styles.caseNarrative}>
          <aside className={styles.caseIndex} aria-label="Experiment chapter index">
            <p>EXPERIMENT / 10 LOGS</p>
            <ol>
              {log.map(([index, title]) => <li key={index}><a href={`#truthlens-log-${index}`}><span>{index}</span>{title}</a></li>)}
            </ol>
          </aside>

          <ol className={styles.caseCinemaLog} aria-label="TruthLens experiment log">
            {log.map(([index, title, detail]) => (
                <li key={index} data-ai-chapter={`LOG ${index}`}>
                  <span>{index}</span>
                  <section aria-labelledby={`truthlens-log-${index}`}>
                    <h2 id={`truthlens-log-${index}`}>{title}</h2>
                    <p>{detail}</p>
                    {index === "04" ? <div className={styles.caseSplitTrace} role="group" aria-label="LIAR split boundaries"><p><span>Development</span>Train + validation</p><p><span>Evaluation</span>Separate test split</p></div> : null}
                    {index === "06" ? (
                      <figure className={styles.caseImageInterlude} aria-label="TruthLens seeded dashboard evidence" aria-describedby="truthlens-analysis-context">
                        <Image src="/images/projects/truthlens-dashboard.webp" width={1440} height={900} sizes="(max-width: 767px) calc(100vw - 100px), 62vw" alt="Empty Analyze Content screen with a text input, word and character counts, and an Analyze control" />
                        <figcaption id="truthlens-analysis-context">
                          <strong>The input screen—not a successful prediction.</strong>
                          <p>The empty form shows how someone starts an analysis: paste text, check its length, then submit. This seeded capture contains no prediction or user data; the API’s fail-closed behavior is established by source, not this image.</p>
                        </figcaption>
                      </figure>
                    ) : null}
                    {index === "09" ? (
                      <figure className={styles.caseImageInterlude} aria-label="TruthLens public interface evidence" aria-describedby="truthlens-landing-context">
                        <Image src="/images/projects/truthlens-landing.webp" width={1440} height={900} sizes="(max-width: 767px) calc(100vw - 100px), 62vw" alt="Public TruthLens landing screen separating source trace, claim review, and model signal, with a backend-delay notice" />
                        <figcaption id="truthlens-landing-context">
                          <strong>Separating model signals from factual evidence.</strong>
                          <p>The landing panel presents source trace, claim review, and model signal separately. That distinction frames the interface—not model validation. Its illustrative trace and visible backend-delay notice do not establish real results or production reliability.</p>
                        </figcaption>
                      </figure>
                    ) : null}
                  </section>
                </li>
            ))}
          </ol>
        </div>

        <nav className={styles.caseNext} aria-label="Continue in the AI portfolio"><a href="/ai#applied-ai">Continue to applied AI studies</a></nav>
      </article>
    </main>
  );
}
