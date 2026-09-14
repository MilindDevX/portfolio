<!-- ABOUTME: Local acceptance evidence for the compact AI homepage and stable three-scene project preview. -->
# Compact AI homepage review

Verified locally on 2026-09-13. Not deployed.

## Approved scope

Shorten `/ai`, reduce oversized headings, replace the rejected pinned/zoomed TruthLens sequence with three normal-flow scenes, and prevent project screenshots from overlapping copy. Keep the avatar, résumé, full-stack edition, project destinations, and detailed case studies unchanged.

## Acceptance results

- Question → authentic interface → release decision appears as three concise TruthLens scenes, with no sticky screenshot layer or image scaling.
- FeedbackOS and MedMarket copy/media occupy separate grid areas and stack below 1100px.
- Three evidence-linked toolkit groups replace ten descriptions. Supporting evidence, education, personal copy, and contact are compact.
- Rendered homepage contains 497 visible words, including navigation and captions. Detailed evidence remains behind case-study links.
- Chrome checks passed at 375, 768, 1024, and 1440px. Both applied-project images loaded, stayed within the viewport, had no copy overlap or horizontal overflow, and had no transform/clip animation.
- TruthLens captures loaded without scaling. Release comparison bars draw as the result scene enters; passive hero light runs while visible and pauses off-screen.
- Reduced-motion emulation leaves all three scenes fully visible and unanimated.
- Visual inspection covered desktop FeedbackOS, mobile MedMarket and hero, desktop TruthLens interface, and mobile release result. QA captures are temporary files under `/private/tmp/ai-*`.

## Verification

- `npm run lint` — passed.
- `npm run build` — passed; eight page routes emitted.
- `npm run typecheck` — passed after build regenerated duplicate stale `.next/types` artifacts.
- `PORTFOLIO_BASE_URL=http://127.0.0.1:3018 npm run test:portfolio` — 48 passed, including private-route and published-email checks.
- `PORTFOLIO_BASE_URL=http://127.0.0.1:3018 node --test tests/ai-layout.browser.mjs` — four passed.
- `node --test tests/ai-resume.test.mjs` — one passed; résumé was not modified.
- `git diff --check` — passed. Existing unrelated dirty-worktree changes were preserved; nothing staged or committed.

## Diagnosis and test limits

The rejected layout combined oversized headings, minimum grid widths, pinned TruthLens media, and screenshot scale/clip animations. Regression tests failed before the replacement was implemented. Final chapter-order correction likewise had a confirmed failing test before the two labels changed.

Initial dev-browser checks intermittently inspected unloaded images. The harness now waits for a new document and completed page initialization before checking lazily loaded assets; production-build reruns passed. Browser coverage is Chrome only, not a cross-browser or manual screen-reader certification.

Homepage height at 900px viewport height was 7154px/6929px/6317px/5812px for the four tested widths. No percentage reduction is claimed because original rendered heights were not retained.

## Remaining risks

- Next.js still reports the pre-existing multiple-lockfile workspace-root warning. No root configuration was changed.
- CSS view timelines vary by browser; content stays readable without them. Non-Chrome fallback behavior was not rendered in this review.
- Third-party demo destinations can drift.
- This change does not re-audit deeper case-study claims. Earlier reviewed evidence distinguishes held-out LIAR evaluation from the case study's broader OOD wording; homepage uses the narrower verified wording.
- Production remains unchanged. Deployment needs Milind's explicit approval.
