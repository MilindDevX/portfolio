// ABOUTME: Checks factual and ATS-friendly structure of the AI internship resume source.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('AI internship resume contains verified identity, education, skills, and selected projects', async () => {
  const html = await readFile(new URL('../docs/resumes/Milind_Bansal_AI_Internship_Resume.html', import.meta.url), 'utf8');
  for (const fact of ['Milind Bansal', 'milindsk8r@gmail.com', '9.28/10', '2024-2028', 'TruthLens', 'FeedbackOS', 'Beijing PM2.5', '43,824', 'scikit-learn', 'FastAPI', '0.5648', '0.75']) assert.ok(html.includes(fact), fact);
  assert.ok(html.includes('@page'));
  assert.ok(html.includes('size: A4'));
  assert.ok(html.includes('mailto:milindsk8r@gmail.com'));
  assert.ok(html.includes('https://github.com/MilindDevX/TruthLens'));
  assert.ok(html.includes('href="https://feedbackos.vercel.app/"'));
  assert.ok(html.includes('href="https://public.tableau.com/app/profile/milind.bansal5979/viz/DVA2-Capstone/RiskSeverityOverview"'));
  assert.ok(html.includes('href="https://github.com/MilindDevX">GitHub</a>'));
  assert.ok(html.includes('href="https://www.linkedin.com/in/milind-bansal-177606244/">LinkedIn</a>'));
  assert.ok(!html.includes('<table'));
  assert.ok(!html.includes('<img'));
  assert.ok(!html.includes('nst.rishihood.edu.in'));
  for (const claim of ['99% accuracy', 'production-ready', 'AI expert', 'reinforcement learning', 'out-of-distribution', '58 passing']) assert.ok(!html.includes(claim), claim);
});

test('AI resume has concise contacts, aligned education, and balanced project evidence', async () => {
  const html = await readFile(new URL('../docs/resumes/Milind_Bansal_AI_Internship_Resume.html', import.meta.url), 'utf8');
  assert.ok(html.includes('href="https://portfolio-milind.vercel.app/ai">Portfolio</a>'));
  assert.ok(html.includes('href="mailto:milindsk8r@gmail.com">Email</a>'));
  assert.ok(html.includes('<h2 id="projects">Projects</h2>'));
  assert.ok(!html.includes('AI Engineering Intern</p>'));
  assert.ok(!html.includes('India ·'));
  assert.ok(!html.includes('Solo end-to-end project'));
  assert.equal((html.match(/Solo project/g) ?? []).length, 2);
  assert.ok(html.includes('class="education-heading"'));
  const projects = [...html.matchAll(/<article>([\s\S]*?)<\/article>/g)].map(match => match[1]);
  assert.deepEqual(projects.map(project => (project.match(/<li>/g) ?? []).length), [3, 3, 3]);
  for (const project of projects) assert.deepEqual([...project.matchAll(/<a href="[^"]+">([^<]+)<\/a>/g)].map(match => match[1]), ['GitHub', 'Live']);
});
