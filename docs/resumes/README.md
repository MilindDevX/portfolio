# AI internship resume

## Full-stack counterpart

Updated 2026-09-14 at Milind's request using the AI résumé's single-column A4 format, typography, contact labels, aligned education/CGPA, and section hierarchy. Editable source: `Milind_Bansal_Full_Stack_Resume.html`; master PDF: `Milind_Bansal_Full_Stack_Resume.pdf`; identical public asset: `/docs/Milind_Bansal_Full_Stack_Resume.pdf`. Portfolio opens `/`, not `/ai`.

FeedbackOS, MedMarket, and RouteLens each have three substantive bullets; BlogApp remains a bounded merged contribution. Evidence is from `docs/portfolio-evidence.md`. Removed unverified latency, passing-test implications, blanket infrastructure/ML skills, unverified coursework/phone, and database-constraint claims from the older PDF. RouteLens is qualifying-round work, not employment. The AI résumé is unchanged.

Verification: `swift tests/full-stack-resume-pdf.swift docs/resumes/Milind_Bansal_Full_Stack_Resume.pdf` checks one page, selectable facts, aligned education, generic clickable contacts, correct portfolio destination, and absence of obsolete claims; it renders a PNG for visual review. Public byte-identity regression failed before replacement and now passes. Rendered PDF inspected with no clipping or overlap.

Master deliverable for general AI engineering internship applications. The AI portfolio hero links to the identical public PDF at `/docs/Milind_Bansal_AI_Internship_Resume.pdf`; editable HTML remains local.

Published 2026-09-13 after explicit approval: the AI hero's View résumé link opens the current PDF in a new tab. Preview and public PDF downloads were byte-identical to the master. Earlier local-only verification entries below describe the document's pre-publication revisions.

- `Milind_Bansal_AI_Internship_Resume.pdf` — application-ready, single-page A4 PDF.
- `Milind_Bansal_AI_Internship_Resume.html` — editable authoritative source; print with A4 and no browser headers/footers.

## Evidence and wording

Identity, education, ownership and project limits come from `data/profile.ts` and `docs/portfolio-evidence.md`. Python/scikit-learn/FastAPI/SHAP are corroborated by the local TruthLens review at revision `0542a76377d1e37384c65d4d0a1023a4521bfdad`; pandas is corroborated by the Beijing coursework notebooks and ETL script.

The TruthLens source at that revision uses LIAR train/validation splits as well as a separate held-out LIAR test split. Therefore this resume deliberately says **held-out evaluation**, not that the whole LIAR dataset was unseen or that the result establishes out-of-distribution generalization. The portfolio ledger and TruthLens case study were reconciled to this narrower evidence boundary on 2026-09-13; the approved PDF did not change.

The resume does not claim passing project tests, model accuracy, production adoption, regulatory compliance, professional employment, or reinforcement-learning implementation. The RL hackathon is excluded because Milind's confirmed contribution was ideation and environment testing, not implementation. Project links consistently use GitHub and Live; TruthLens's rejected baseline is not described as active.

Project dates and phone number are omitted because no verified values were available. Portfolio links to the deployed `/ai` edition. Contact links use Email, GitHub, LinkedIn, and Portfolio. The redundant internship-role headline and country label are omitted. The college timeline sits alongside the college name; CGPA sits underneath, alongside the course name. Each project has three evidence-backed bullets, and solo ownership uses Solo project.

TruthLens, FeedbackOS and Beijing PM2.5 form the three-project AI-focused selection. MedMarket and RouteLens remain portfolio evidence rather than crowding this one-page resume. Conventional fonts replace the portfolio's variable fonts because PDF extraction fragmented words in the first render. The web-development skills group uses the approved short label Web & Tools; its skills are unchanged.

## Verification

Published 2026-09-14 after explicit approval: both résumés now align 2024-2028 with the college name and CGPA: 9.28/10 with the course name. PDFKit checked both row alignments, one-page fit, selectable content, and eleven clickable links per PDF. Both rendered pages were visually inspected. Preview and production PDF downloads are byte-identical to the masters. Full-stack remains linked from `/`; AI remains linked from `/ai`. Local 53 source/server checks, lint, typecheck, and build passed. The broad production runner ended prematurely after 31 passing checks; direct production downloads verified both PDF assets.

Run `node --test tests/ai-resume.test.mjs` and `swift tests/ai-resume-pdf.swift`. Confirm PDF has exactly one page, readable/selectable text, working link annotations, complete last section, and no private college email before sending. Tailor this master resume to each actual job description without adding unsupported skills or metrics.

Verified 2026-09-13: both checks passed; PDFKit confirmed one page, intact selectable facts and eleven link annotations, including FeedbackOS's hosted demo entry and the Beijing Tableau dashboard. GitHub and LinkedIn contact URLs use short clickable labels. Rendered PDF visually inspected: all sections fit without clipping. ESLint and `git diff --check` passed. No portfolio application files changed, no public resume link added, and no commit or publication performed.

Revised 2026-09-13: Portfolio now opens `/ai`; Email and Portfolio use generic clickable labels. Projects, Solo project, and GitHub/Live wording are consistent. Each project has three substantive bullets. The role/country header is removed and CGPA is right-aligned beside the college. Two source checks passed; PDFKit verified one page, selectable facts, eleven links, contact labels and college/CGPA alignment. Final PDF raster was visually inspected. The PDF remains local, not publicly hosted.
