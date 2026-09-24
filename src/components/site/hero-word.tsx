"use client";

import { useEffect, useState } from "react";

import type { Locale } from "@/lib/i18n";

const WORDS: Record<Locale, string[]> = {
  en: ["your port.", "Jebel Ali.", "Jeddah.", "Doha.", "Mombasa."],
  ar: ["ميناءكم.", "جبل علي.", "جدة.", "الدوحة.", "مومباسا."],
};

/** Hero destination typewriter: holds a word, backspaces it, then types the next one. */
export function HeroWord({ lang }: { lang: Locale }) {
  const words = WORDS[lang];
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number;
    let index = 0;
    let current = words[0];
    let deleting = true;

    const tick = () => {
      const full = words[index];
      if (deleting) {
        if (current.length > 0) {
          current = current.slice(0, -1);
          setText(current);
          timer = window.setTimeout(tick, 26);
          return;
        }
        deleting = false;
        index = (index + 1) % words.length;
        timer = window.setTimeout(tick, 260);
        return;
      }
      if (current.length < full.length) {
        current = full.slice(0, current.length + 1);
        setText(current);
        timer = window.setTimeout(tick, 52 + Math.random() * 46);
        return;
      }
      deleting = true;
      timer = window.setTimeout(tick, 2100);
    };

    timer = window.setTimeout(tick, 2000);
    return () => window.clearTimeout(timer);
  }, [words]);

  return <>{text}</>;
}
