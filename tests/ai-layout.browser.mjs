// ABOUTME: Rendered Chrome checks for visible AI screenshots, non-overlapping copy, and three static-layout scenes.
import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';

const origin = process.env.PORTFOLIO_BASE_URL || 'http://127.0.0.1:3017';
let socket;
let id = 0;
const pending = new Map();
async function command(method, params = {}) {
  const requestId = ++id;
  const promise = new Promise((resolve, reject) => pending.set(requestId, { resolve, reject }));
  socket.send(JSON.stringify({ id: requestId, method, params }));
  return promise;
}
const evaluate = async (fn) => {
  const result = await command('Runtime.evaluate', { expression: `(${fn.toString()})()`, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
};
const pause = (ms) => new Promise(resolve => setTimeout(resolve, ms));
before(async () => {
  const target = await (await fetch('http://127.0.0.1:9229/json/new?about:blank', { method: 'PUT' })).json();
  socket = new WebSocket(target.webSocketDebuggerUrl);
  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (!message.id) return;
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
  });
  await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }));
  await command('Page.enable');
  await command('Network.enable');
  await command('Network.setCacheDisabled', { cacheDisabled: true });
});
after(() => socket?.close());

for (const width of [375, 768, 1024, 1440]) {
  test(`AI project screenshots remain visible and separate from copy at ${width}px`, async () => {
    await command('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
    const previousDocument = await evaluate(() => performance.timeOrigin);
    await command('Page.navigate', { url: `${origin}/ai` });
    for (let attempt = 0; attempt < 60; attempt++) {
      const state = await evaluate(() => ({ origin: performance.timeOrigin, ready: document.readyState === 'complete' && document.querySelector('[data-motion-ready="true"]') != null }));
      if (state.origin !== previousDocument && state.ready) break;
      await pause(200);
    }
    await evaluate(async () => { await document.fonts.ready; });
    await evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
    await pause(200);
    const heroShot = await command('Page.captureScreenshot', { format: 'png' });
    await writeFile(`/private/tmp/ai-hero-${width}.png`, Buffer.from(heroShot.data, 'base64'));
    const resumeLink = await evaluate(() => { const a=document.querySelector('#ai-intro a[href="/docs/Milind_Bansal_AI_Internship_Resume.pdf"]'); if (!a) return null; const r=a.getBoundingClientRect(); return {left:r.left, right:r.right, height:r.height, target:a.target, visible:getComputedStyle(a).visibility}; });
    assert.ok(resumeLink && resumeLink.left>=0 && resumeLink.right<=width && resumeLink.height>=44, 'AI resume link must be visible and tappable');
    assert.equal(resumeLink.target, '_blank');
    assert.equal(resumeLink.visible, 'visible');
    await evaluate(() => document.querySelector('#ai-about').scrollIntoView({block:'center',behavior:'instant'}));
    const aboutShot=await command('Page.captureScreenshot', {format:'png'});
    await writeFile(`/private/tmp/ai-about-${width}.png`, Buffer.from(aboutShot.data,'base64'));
    await evaluate(() => scrollTo({top:0,behavior:'instant'}));
    await pause(200);
    assert.equal(await evaluate(() => getComputedStyle(document.querySelector('[data-ai-passive="signal"]')).animationPlayState), 'running', 'Visible passive signal runs');
    for (const project of ['feedbackos', 'medmarket']) {
      await command('Runtime.evaluate', { expression: `document.querySelector('[data-ai-study="${project}"] figure')?.scrollIntoView({block:'center',behavior:'instant'})` });
      await pause(400);
      for (let attempt = 0; attempt < 30; attempt++) {
        const ready = await command('Runtime.evaluate', { expression: `(() => { const img=document.querySelector('[data-ai-study="${project}"] figure img'); return img?.complete && img.naturalWidth>0; })()`, returnByValue: true });
        if (ready.result.value) break;
        await pause(100);
      }
      const shot = await command('Page.captureScreenshot', { format: 'png' });
      await writeFile(`/private/tmp/ai-${project}-${width}.png`, Buffer.from(shot.data, 'base64'));
      const state = await command('Runtime.evaluate', { expression: `(() => {
        const article = document.querySelector('[data-ai-study="${project}"]');
        const image = article?.querySelector('figure img');
        if (!image) return null;
        const r = image.getBoundingClientRect();
        const copy = [...article.querySelectorAll('h3, p, a')].filter(x => !x.closest('figure'));
        const overlaps = copy.filter(x => { const t=x.getBoundingClientRect(); return t.left<r.right-1 && t.right>r.left+1 && t.top<r.bottom-1 && t.bottom>r.top+1; }).map(x=>x.textContent);
        const s=getComputedStyle(image);
        return {loaded:image.complete && image.naturalWidth>0, src:image.currentSrc, complete:image.complete, width:r.width, left:r.left, right:r.right, overlaps, transform:s.transform, clip:s.clipPath, overflow:document.documentElement.scrollWidth>innerWidth};
      })()`, returnByValue: true });
      const value = state.result.value;
      assert.ok(value?.loaded, `${project}: image did not load: ${JSON.stringify(value)}`);
      assert.ok(value.width >= 260, `${project}: screenshot too small`);
      assert.deepEqual(value.overlaps, [], `${project}: copy overlaps screenshot`);
      assert.equal(value.transform, 'none', `${project}: screenshot must not scale`);
      assert.equal(value.clip, 'none', `${project}: screenshot must not be clipped`);
      assert.ok(value.left >= 0 && value.right <= width, `${project}: screenshot outside viewport`);
      assert.equal(value.overflow, false, 'Horizontal overflow');
    }
    assert.equal(await evaluate(() => document.querySelectorAll('[data-ai-scene]').length), 3);
    assert.equal(await evaluate(() => document.querySelector('[data-ai-sticky-media]') != null), false);
    for (const scene of ['interface', 'result']) {
      await command('Runtime.evaluate', { expression: `document.querySelector('[data-ai-scene="${scene}"]').scrollIntoView({block:'center',behavior:'instant'})` });
      await pause(300);
      await evaluate(async () => { await Promise.all([...document.querySelectorAll('[data-ai-scene] img')].map(img => img.decode())); });
      const sceneShot = await command('Page.captureScreenshot', { format: 'png' });
      await writeFile(`/private/tmp/ai-truthlens-${scene}-${width}.png`, Buffer.from(sceneShot.data, 'base64'));
    }
    assert.equal(await evaluate(() => [...document.querySelectorAll('[data-ai-scene] img')].every(img => img.naturalWidth > 0 && getComputedStyle(img).transform === 'none')), true, 'TruthLens screenshots load without scaling');
    assert.equal(await evaluate(() => getComputedStyle(document.querySelector('[data-ai-passive="signal"]')).animationPlayState), 'paused', 'Off-screen passive signal pauses');
    if (await evaluate(() => CSS.supports('animation-timeline: view()'))) {
      await evaluate(() => { const scene = document.querySelector('[data-ai-scene="result"]'); scrollTo({ top: scene.getBoundingClientRect().top + scrollY - innerHeight + 5, behavior: 'instant' }); });
      await pause(100);
      const entryScale = await evaluate(() => new DOMMatrixReadOnly(getComputedStyle(document.querySelector('[data-ai-scene="result"] i')).transform).a);
      await evaluate(() => document.querySelector('[data-ai-scene="result"]').scrollIntoView({ block: 'center', behavior: 'instant' }));
      await pause(100);
      const centerScale = await evaluate(() => new DOMMatrixReadOnly(getComputedStyle(document.querySelector('[data-ai-scene="result"] i')).transform).a);
      assert.ok(centerScale > entryScale, 'Release comparison draws as its result scene enters');
    }
    const summary = await evaluate(() => ({ words: document.body.innerText.trim().split(/\s+/).length, height: document.documentElement.scrollHeight }));
    console.log(`${width}px homepage: ${summary.words} words, ${summary.height}px height`);
    await command('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
    const reduced = await evaluate(() => [...document.querySelectorAll('[data-ai-scene]')].every(x => getComputedStyle(x).opacity === '1' && getComputedStyle(x).animationName === 'none'));
    assert.equal(reduced, true, 'Reduced-motion scenes must be complete and static');
    for (const project of ['feedbackos', 'medmarket']) {
      await command('Runtime.evaluate', { expression: `document.querySelector('[data-ai-study="${project}"] figure').scrollIntoView({block:'center',behavior:'instant'})` });
      await pause(200);
      const visible = await command('Runtime.evaluate', { expression: `(() => { const img = document.querySelector('[data-ai-study="${project}"] img'); for (let el=img; el; el=el.parentElement) {const s=getComputedStyle(el); if (s.display==='none' || s.visibility==='hidden' || Number(s.opacity)<0.5) return false; } return img.complete && img.naturalWidth>0; })()`, returnByValue: true });
      assert.equal(visible.result.value, true, `${project}: reduced-motion screenshot must remain visible`);
      const shot = await command('Page.captureScreenshot', { format: 'png' });
      await writeFile(`/private/tmp/ai-${project}-reduced-${width}.png`, Buffer.from(shot.data, 'base64'));
    }
    await command('Emulation.setEmulatedMedia', { features: [] });
  });
}

for (const width of [375, 768, 1024, 1440]) {
  test(`TruthLens case has readable, content-sized chapters at ${width}px`, async () => {
    await command('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: false });
    const previous = await evaluate(() => performance.timeOrigin);
    await command('Page.navigate', { url: `${origin}/work/truthlens` });
    for (let attempt=0; attempt<60; attempt++) {
      if (await evaluate(() => performance.timeOrigin !== 0 && document.readyState==='complete' && document.querySelector('[data-ai-case]') != null && document.querySelector('[data-motion-ready="true"]') != null) && await evaluate(() => performance.timeOrigin) !== previous) break;
      await pause(200);
    }
    await evaluate(async () => { await document.fonts.ready; });
    const chapters = await evaluate(() => [...document.querySelectorAll('[data-ai-case] li[data-ai-chapter]')].map(li => {
      const heading=li.querySelector('h2'), body=li.querySelector('section > p');
      return { height:li.getBoundingClientRect().height, heading:parseFloat(getComputedStyle(heading).fontSize), body:parseFloat(getComputedStyle(body).fontSize), image:li.querySelector('figure') != null };
    }));
    assert.equal(chapters.length, 10);
    const imageContext=await evaluate(() => [...document.querySelectorAll('[data-ai-case] figure')].map(figure=>({
      chapter:figure.closest('section')?.querySelector('h2')?.id ?? null,
      description:figure.getAttribute('aria-describedby'),
      captionId:figure.querySelector('figcaption')?.id,
      explanation:figure.querySelector('figcaption')?.innerText ?? '',
    })));
    assert.deepEqual(imageContext.map(x=>x.chapter), ['truthlens-log-06','truthlens-log-09'], 'Interface images belong to serving and interface-limit arguments, not evaluation or drift');
    for (const context of imageContext) {
      assert.equal(context.description, context.captionId, 'Image explanation is programmatically associated');
      assert.ok(context.explanation.split(/\s+/).length >= 30, 'Caption explains the visible decision and its evidence limit');
    }
    for (const chapter of chapters) {
      assert.ok(chapter.body >= 16, 'Body text stays readable');
      assert.ok(chapter.heading / chapter.body <= 2.6, `Chapter heading overwhelms body: ${JSON.stringify(chapter)}`);
      if (!chapter.image) assert.ok(chapter.height < 500, `Short chapter padded beyond content: ${JSON.stringify(chapter)}`);
    }
    for (const reduced of [false, true]) {
      await command('Emulation.setEmulatedMedia', { features: reduced ? [{ name:'prefers-reduced-motion', value:'reduce' }] : [] });
      for (const selector of ['[data-ai-case] header', '#release-result-title', '#truthlens-log-04', '[aria-label="TruthLens public interface evidence"]', '[aria-label="TruthLens seeded dashboard evidence"]', '#truthlens-log-10']) {
        await command('Runtime.evaluate', { expression: `document.querySelector(${JSON.stringify(selector)}).scrollIntoView({block:'center',behavior:'instant'})` });
        await evaluate(async () => { await Promise.all([...document.querySelectorAll('[data-ai-case] img')].map(img=>{ img.loading='eager'; return img.decode(); })); });
        await pause(120);
        assert.equal(await evaluate(() => document.documentElement.scrollWidth>innerWidth), false, 'No horizontal overflow');
        const shot=await command('Page.captureScreenshot', {format:'png'});
        await writeFile(`/private/tmp/ai-case-${width}-${reduced ? 'reduced' : 'normal'}-${selector.replace(/[^a-z0-9]/gi,'').slice(-35)}.png`, Buffer.from(shot.data,'base64'));
      }
      assert.equal(await evaluate(() => [...document.querySelectorAll('[data-ai-case] img')].every(img => { const r=img.getBoundingClientRect(); return img.naturalWidth>0 && r.width>=260 && r.left>=0 && r.right<=innerWidth && getComputedStyle(img).transform==='none'; })), true);
    }
    await command('Emulation.setEmulatedMedia', { features: [] });
    await evaluate(() => document.querySelector('a[href="#truthlens-log-05"]').click());
    let anchor;
    for (let attempt=0; attempt<30; attempt++) {
      await pause(100);
      anchor=await evaluate(() => ({top:document.querySelector('#truthlens-log-05').getBoundingClientRect().top, header:document.querySelector('[data-ai-shell]').getBoundingClientRect().bottom, inset:parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)}));
      if (Math.abs(anchor.top-anchor.inset)<2) break;
    }
    assert.ok(anchor.top >= anchor.header, `Release deep link clears sticky navigation: ${JSON.stringify(anchor)}`);
  });
}

test('Full-stack AI portfolio link opens the standalone AI edition', async () => {
  await command('Emulation.setDeviceMetricsOverride', { width: 375, height: 900, deviceScaleFactor: 1, mobile: false });
  await command('Page.navigate', { url: origin });
  for (let attempt=0; attempt<60; attempt++) {
    if (await evaluate(() => location.pathname==='/' && document.querySelector('a.edition-link')!=null)) break;
    await pause(200);
  }
  const link = await evaluate(() => { const a=document.querySelector('a.edition-link'); const r=a.getBoundingClientRect(); return {href:a.getAttribute('href'), width:r.width, left:r.left, right:r.right}; });
  assert.equal(link.href, '/ai');
  assert.ok(link.width>0 && link.left>=0 && link.right<=375, 'AI edition link visible on mobile');
  await evaluate(() => document.querySelector('a.edition-link').click());
  for (let attempt=0; attempt<60; attempt++) {
    if (await evaluate(() => location.pathname==='/ai' && document.querySelectorAll('[data-ai-scene]').length===3)) break;
    await pause(200);
  }
  assert.equal(await evaluate(() => location.pathname==='/ai' && document.querySelectorAll('[data-ai-scene]').length===3), true);
});
