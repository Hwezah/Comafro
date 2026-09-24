"use client";

import { useEffect } from "react";

/**
 * Page-level behaviours ported from the design reference's runtime:
 * - scroll reveal for h1–h4 and [data-reveal]
 * - the hairline rule that draws under ochre eyebrow labels
 * - mobile-portrait tagging (data-boxed / data-markerrow / data-caplead / data-linkrow)
 *   that the centering rules in site.css key off, plus the padding/border symmetry pass
 *
 * It re-runs whenever <main> changes (route changes, the contact form's sent state).
 */

const MOBILE = "(max-width: 640px) and (orientation: portrait)";
const REDUCED = "(prefers-reduced-motion: reduce)";

function scanReveal(io: IntersectionObserver) {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>("h1, h2, h3, h4, [data-reveal]"));
  const groups = new Map<Element, number>();
  nodes.forEach((el) => {
    if (el.dataset.rv) return;
    el.dataset.rv = "1";
    const sect = el.closest("section") ?? el.parentNode!;
    const n = groups.get(sect as Element) ?? 0;
    groups.set(sect as Element, n + 1);
    el.dataset.rvDelay = String(90 + Math.min(n, 4) * 120);
    const big = el.tagName === "H1" || el.tagName === "H2";
    el.style.opacity = "0";
    el.style.transform = `translateY(${big ? 30 : 18}px)`;
    el.style.transition =
      "opacity 620ms cubic-bezier(.22,.7,.2,1), transform 820ms cubic-bezier(.16,.84,.24,1)";
    el.style.willChange = "opacity, transform";
    io.observe(el);
  });
}

function resolveColor(value: string) {
  const probe = document.createElement("span");
  probe.style.color = value;
  document.body.appendChild(probe);
  const color = getComputedStyle(probe).color.replace(/\s/g, "");
  probe.remove();
  return color;
}

function scanRules(io: IntersectionObserver) {
  const eyebrow = resolveColor("var(--ochre-deep)");
  document.querySelectorAll<HTMLElement>("main p").forEach((el) => {
    if (el.dataset.rule) return;
    const next = el.nextElementSibling;
    if (!next || !/^H[12]$/.test(next.tagName)) return;
    if (getComputedStyle(el).color.replace(/\s/g, "") !== eyebrow) return;
    el.dataset.rule = "1";
    const rtl = !!el.closest('[dir="rtl"]');
    el.style.display = "block";
    el.style.width = "max-content";
    el.style.maxWidth = "100%";
    el.style.whiteSpace = "nowrap";
    const bar = document.createElement("span");
    bar.style.cssText =
      "display:block;height:1px;width:calc(100% + 5.5em);background:var(--ochre);opacity:.5;margin-top:10px;" +
      `transform:scaleX(0);transform-origin:${rtl ? "right" : "left"};` +
      "animation:comafro-rule 900ms cubic-bezier(.22,.7,.2,1) 1 forwards;animation-play-state:paused";
    el.appendChild(bar);
    io.observe(el);
  });
}

function symmetryPass(main: HTMLElement) {
  const mobile = window.matchMedia(MOBILE).matches;
  main.querySelectorAll<HTMLElement>("div").forEach((el) => {
    if (!mobile) {
      if (el.dataset.sym) {
        el.style.borderRightWidth = "";
        el.style.borderLeftWidth = "";
        el.style.paddingLeft = "";
        el.style.paddingRight = "";
        delete el.dataset.sym;
      }
      return;
    }
    const cs = getComputedStyle(el);
    const bl = parseFloat(cs.borderLeftWidth) || 0;
    const br = parseFloat(cs.borderRightWidth) || 0;
    const pl = parseFloat(cs.paddingLeft) || 0;
    const pr = parseFloat(cs.paddingRight) || 0;
    const gtc = cs.gridTemplateColumns || "";
    const single = /^(\d|\.)+px$/.test(gtc) || gtc.split(" ").length === 1;
    let touched = false;
    if (bl !== br && single) {
      el.style.borderRightWidth = "0px";
      el.style.borderLeftWidth = "0px";
      touched = true;
    }
    if (pl !== pr) {
      const p = Math.min(pl, pr) + "px";
      el.style.paddingLeft = p;
      el.style.paddingRight = p;
      touched = true;
    }
    if (touched) el.dataset.sym = "1";
  });
}

function tagLayout(main: HTMLElement) {
  const mw = main.getBoundingClientRect().width;
  main.querySelectorAll<HTMLElement>("div, figure, form, aside").forEach((el) => {
    const cs = getComputedStyle(el);
    const bw = [cs.borderTopWidth, cs.borderRightWidth, cs.borderBottomWidth, cs.borderLeftWidth].map(
      (w) => parseFloat(w) || 0
    );
    const framed = bw.filter((w) => w > 0).length >= 3;
    const bg = cs.backgroundColor || "";
    const hasBg = bg && bg !== "transparent" && !/rgba\([^)]*,\s*0\)$/.test(bg);
    const w = el.getBoundingClientRect().width;
    const inset = w > 0 && w <= mw - 8;
    const box = framed || (hasBg && inset && (parseFloat(cs.paddingTop) || 0) > 6);
    if (box) el.dataset.boxed = "1";
    else delete el.dataset.boxed;
  });

  // Rows whose first cell is a short label or number marker keep their prose left-aligned.
  main.querySelectorAll<HTMLElement>("div").forEach((el) => {
    const cs = getComputedStyle(el);
    const row = (cs.display === "flex" && !/column/.test(cs.flexDirection)) || cs.display === "grid";
    const kids = Array.from(el.children);
    let mark = false;
    if (row && kids.length >= 2 && kids.length <= 3) {
      const a = kids[0];
      const b = kids[kids.length - 1];
      const at = (a.textContent || "").trim();
      const bt = (b.textContent || "").trim();
      const words = at.split(/\s+/).filter(Boolean).length;
      const short = at.length > 0 && at.length <= 30 && words <= 3;
      const labelish = /mono|JetBrains/i.test(getComputedStyle(a).fontFamily) || /^[\d٠-٩]/.test(at);
      mark = short && labelish && bt.length > 0 && b !== a && !a.querySelector("h1,h2,h3,h4");
    }
    if (mark) el.dataset.markerrow = "1";
    else delete el.dataset.markerrow;
  });

  // Leading / closing caption lines read as centered labels.
  main
    .querySelectorAll<HTMLElement>("figcaption, [data-boxed] > p, [data-boxed] > div, [data-boxed] > figcaption > p")
    .forEach((el) => {
      const p = el.parentElement;
      if (!p) return;
      const edge = el === p.firstElementChild || el === p.lastElementChild;
      const cs = getComputedStyle(el);
      const mono = /mono|JetBrains/i.test(cs.fontFamily);
      const small = parseFloat(cs.fontSize) <= 13.5;
      const plain = !el.querySelector("ul, ol, li, table, h1, h2, h3, h4, img, svg");
      const single = el.children.length <= 1;
      if ((el.tagName === "FIGCAPTION" && single) || (edge && mono && small && plain && single && p.children.length > 1))
        el.dataset.caplead = "1";
      else delete el.dataset.caplead;
    });

  // Rows made only of links are centered too.
  main.querySelectorAll<HTMLElement>("div").forEach((el) => {
    const kids = Array.from(el.children);
    if (kids.length > 1 && kids.every((k) => k.tagName === "A")) el.dataset.linkrow = "1";
    else delete el.dataset.linkrow;
  });
}

/** A column must be at least this much shorter than its neighbour before it sticks. */
const STICKY_MIN_DIFF = 100;
const STICKY_GAP = 24;

function insideScroller(el: HTMLElement, main: HTMLElement) {
  for (let p = el.parentElement; p && p !== main; p = p.parentElement) {
    const cs = getComputedStyle(p);
    if (cs.overflowX !== "visible" || cs.overflowY !== "visible") return true;
  }
  return false;
}

/**
 * Where two or more columns sit side by side and one is clearly shorter, the shorter
 * column sticks below the header while the taller one scrolls past it.
 */
function stickyPass(main: HTMLElement) {
  main.querySelectorAll<HTMLElement>("[data-sticky]").forEach((el) => {
    el.style.position = el.dataset.stickyPos ?? "";
    el.style.top = el.dataset.stickyTop ?? "";
    el.style.alignSelf = el.dataset.stickyAlign ?? "";
    delete el.dataset.sticky;
    delete el.dataset.stickyPos;
    delete el.dataset.stickyTop;
    delete el.dataset.stickyAlign;
  });

  const header = document.querySelector("header");
  const top = (header?.getBoundingClientRect().height ?? 0) + STICKY_GAP;
  const room = window.innerHeight - top - STICKY_GAP;

  main.querySelectorAll<HTMLElement>("div, section, form").forEach((row) => {
    const cs = getComputedStyle(row);
    const isRow = cs.display === "grid" || (cs.display === "flex" && !/column/.test(cs.flexDirection));
    if (!isRow) return;
    const cols = Array.from(row.children).filter(
      (c): c is HTMLElement => c instanceof HTMLElement && /^(static|relative)$/.test(getComputedStyle(c).position)
    );
    if (cols.length < 2) return;

    // Measure each column at its natural height instead of the stretched row height.
    const saved = cols.map((c) => c.style.alignSelf);
    cols.forEach((c) => (c.style.alignSelf = "start"));
    const rects = cols.map((c) => c.getBoundingClientRect());
    cols.forEach((c, i) => (c.style.alignSelf = saved[i]));

    // Only columns laid out on one line, side by side.
    const sameLine = rects.every((r) => Math.abs(r.top - rects[0].top) < 2);
    const sideBySide = new Set(rects.map((r) => Math.round(r.left))).size === rects.length;
    if (!sameLine || !sideBySide || rects.some((r) => r.width < 160)) return;
    // Hero rows keep their designed alignment: they are already on screen when the page opens.
    if (rects[0].top + window.scrollY < window.innerHeight * 0.6) return;

    const tallest = Math.max(...rects.map((r) => r.height));
    cols.forEach((col, i) => {
      const h = rects[i].height;
      if (tallest - h < STICKY_MIN_DIFF || h > room || insideScroller(col, main)) return;
      if (col.parentElement?.closest("[data-sticky]")) return;
      col.dataset.sticky = "1";
      col.dataset.stickyPos = col.style.position;
      col.dataset.stickyTop = col.style.top;
      col.dataset.stickyAlign = col.style.alignSelf;
      col.style.position = "sticky";
      col.style.top = `${top}px`;
      col.style.alignSelf = "start";
    });
  });
}

export function Enhancer() {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const motion = "IntersectionObserver" in window && !window.matchMedia(REDUCED).matches;

    const revealIO = motion
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (!en.isIntersecting) return;
              const el = en.target as HTMLElement;
              el.style.transitionDelay = `${Number(el.dataset.rvDelay || 0)}ms`;
              el.style.opacity = "1";
              el.style.transform = "none";
              revealIO!.unobserve(el);
            });
          },
          { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
        )
      : null;

    const ruleIO = motion
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              const bar = en.target.lastElementChild as HTMLElement | null;
              if (!bar) return;
              if (en.isIntersecting) {
                bar.style.animation = "none";
                void bar.offsetWidth;
                bar.style.animation = "comafro-rule 900ms cubic-bezier(.22,.7,.2,1) 1 forwards";
              } else {
                bar.style.animation = "none";
                bar.style.transform = "scaleX(0)";
              }
            });
          },
          { threshold: 0.6 }
        )
      : null;

    const run = () => {
      if (revealIO && ruleIO) {
        scanRules(ruleIO);
        scanReveal(revealIO);
      }
      symmetryPass(main);
      tagLayout(main);
      stickyPass(main);
    };

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(run);
    };

    if (!motion) document.documentElement.classList.remove("rv");
    run();
    const mo = new MutationObserver(schedule);
    mo.observe(main, { childList: true, subtree: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("orientationchange", schedule);

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      revealIO?.disconnect();
      ruleIO?.disconnect();
      window.removeEventListener("resize", schedule);
      window.removeEventListener("orientationchange", schedule);
    };
  }, []);

  return null;
}
