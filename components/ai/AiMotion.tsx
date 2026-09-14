// ABOUTME: Coordinates active AI chapters, hidden-tab pausing, and the native scroll-animation fallback.
"use client";

import { useEffect } from "react";

export function AiMotion() {
  useEffect(() => {
    const portfolio = document.querySelector<HTMLElement>("[data-ai-portfolio]");
    const shell = document.querySelector<HTMLElement>("[data-ai-shell]");
    const chapterOutput = document.querySelector<HTMLElement>("[data-ai-chapter-output]");
    if (!portfolio) return;

    portfolio.dataset.motionReady = "true";

    const chapters = [...document.querySelectorAll<HTMLElement>("[data-ai-chapter]")];
    const chapterRatios = new Map<Element, number>();
    const chapterObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) chapterRatios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
      const active = chapters.reduce<HTMLElement | null>((best, chapter) => {
        if (!best) return chapterRatios.get(chapter) ? chapter : null;
        return (chapterRatios.get(chapter) ?? 0) > (chapterRatios.get(best) ?? 0) ? chapter : best;
      }, null);
      const chapterName = active?.dataset.aiChapter;
      if (!chapterName) return;
      if (chapterOutput) chapterOutput.textContent = chapterName;
      if (shell) shell.dataset.activeChapter = chapterName;
    }, { rootMargin: "-34% 0px -50% 0px", threshold: [0, 0.05, 0.2, 0.5, 0.8] });
    chapters.forEach((chapter) => chapterObserver.observe(chapter));

    const headerSentinel = document.querySelector<HTMLElement>("[data-ai-header-sentinel]");
    const headerObserver = new IntersectionObserver(([entry]) => {
      if (!shell) return;
      if (entry?.isIntersecting) shell.removeAttribute("data-scrolled");
      else shell.setAttribute("data-scrolled", "true");
    }, { rootMargin: "-68px 0px 0px", threshold: 0 });
    if (headerSentinel) headerObserver.observe(headerSentinel);

    const passiveLayers = [...document.querySelectorAll<HTMLElement>("[data-ai-passive]")];
    const passiveObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.removeAttribute("data-ai-offscreen");
        else entry.target.setAttribute("data-ai-offscreen", "true");
      }
    }, { rootMargin: "120px 0px", threshold: 0 });
    passiveLayers.forEach((layer) => passiveObserver.observe(layer));

    const setPauseState = () => {
      if (document.hidden) portfolio.dataset.paused = "true";
      else delete portfolio.dataset.paused;
    };
    setPauseState();
    document.addEventListener("visibilitychange", setPauseState);

    let storyObserver: IntersectionObserver | undefined;
    if (!CSS.supports("animation-timeline: view()")) {
      portfolio.dataset.scrollFallback = "true";
      const steps = [...portfolio.querySelectorAll<HTMLElement>("[data-ai-scene]")];
      const stepRatios = new Map<Element, number>();
      storyObserver = new IntersectionObserver((entries) => {
        for (const entry of entries) stepRatios.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
        const active = steps.reduce<HTMLElement | null>((best, step) => {
          if (!best) return stepRatios.get(step) ? step : null;
          return (stepRatios.get(step) ?? 0) > (stepRatios.get(best) ?? 0) ? step : best;
        }, null);
        for (const step of steps) {
          if (step === active) step.dataset.active = "true";
          else delete step.dataset.active;
        }
      }, { rootMargin: "-18% 0px -18% 0px", threshold: [0, 0.2, 0.5, 0.8] });
      steps.forEach((step) => storyObserver?.observe(step));
    }

    return () => {
      chapterObserver.disconnect();
      headerObserver.disconnect();
      passiveObserver.disconnect();
      storyObserver?.disconnect();
      document.removeEventListener("visibilitychange", setPauseState);
    };
  }, []);

  return null;
}
