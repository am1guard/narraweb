// One small script for the page's motion (about 1.5 KB): sequences and Narra's lines play
// once when they come into view, looping animations pause off screen, and browsers without
// scroll-driven animations get the same rise-in through an IntersectionObserver.
// With Reduce Motion nothing is hidden and nothing types; loops are already off in CSS.

const root = document.documentElement;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function once(selector: string, threshold: number, onEnter: (el: HTMLElement) => void) {
  const items = document.querySelectorAll<HTMLElement>(selector);
  if (!items.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        onEnter(entry.target as HTMLElement);
      }
    },
    { threshold, rootMargin: "0px 0px -8% 0px" },
  );
  items.forEach((el) => io.observe(el));
}

// Looping animations run only while their section is on screen.
const loops = document.querySelectorAll<HTMLElement>("[data-loop]");
if (loops.length) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
  });
  loops.forEach((el) => io.observe(el));
}

if (!reduce) {
  // Rise-in fallback where animation-timeline: view() isn't supported.
  if (!CSS.supports("animation-timeline: view()")) {
    once("[data-rise], [data-pop]", 0.15, (el) => el.classList.add("is-in"));
  }

  // One-time sequences (timeline, in-game scene, Files path, chips, save cards, ...).
  once("[data-seq]", 0.3, (el) => el.classList.add("is-in"));

  // Narra's lines in the chapters type themselves out the first time they're read.
  // The full text stays in the DOM (screen readers read it); the typed copy is aria-hidden.
  root.classList.add("type-ready");
  const lang = root.lang;
  const segmenter = "Segmenter" in Intl ? new Intl.Segmenter(lang, { granularity: "grapheme" }) : null;
  const speed = /^(ja|ko|zh)/.test(lang) ? 55 : 24;
  once(".say[data-type]", 0.6, (box) => {
    const full = box.querySelector(".say-full")?.textContent ?? "";
    const out = box.querySelector<HTMLElement>(".say-typed");
    if (!out) return;
    const parts = segmenter ? Array.from(segmenter.segment(full), (s) => s.segment) : Array.from(full);
    let shown = 0;
    let timer = 0;
    const done = () => {
      window.clearTimeout(timer);
      box.classList.remove("is-typing");
      box.classList.add("is-typed");
      out.textContent = "";
    };
    box.classList.add("is-typing");
    box.addEventListener("click", done, { once: true });
    const step = () => {
      shown += 1;
      out.textContent = parts.slice(0, shown).join("");
      if (shown < parts.length) timer = window.setTimeout(step, speed);
      else done();
    };
    timer = window.setTimeout(step, 180);
  });
}
