/**
 * Site search: builds an index from the rendered pages and matches queries forgivingly
 * (case, accents, Arabic letter variants and diacritics, Arabic prefixes, Arabic-Indic digits,
 * partial words, simple plurals, synonyms, quoted phrases and one-letter typos).
 */

export type SearchEntry = {
  href: string;
  page: string;
  title: string;
  headings: string;
  body: string;
  /** Normalized copies used for matching. */
  n: { title: string; headings: string; body: string };
};

export type SearchHit = {
  entry: SearchEntry;
  score: number;
  /** Body excerpt split into plain and highlighted parts. */
  snippet: { text: string; mark: boolean }[];
};

export type SearchResult = { hits: SearchHit[]; correctedTo?: string };

// ---------------------------------------------------------------------------
// Normalization

const ARABIC_DIACRITICS = /[ؐ-ًؚ-ٰٟۖ-ۭـ]/g; // harakat, Quranic marks, tatweel
const LATIN_MARKS = /[̀-ͯ]/g;

function normalizeChar(ch: string): string {
  let c = ch.normalize("NFKD").replace(LATIN_MARKS, "").toLowerCase();
  c = c
    .replace(ARABIC_DIACRITICS, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[‐-―−]/g, "-")
    .replace(/[‘’‚‛′`´]/g, "'")
    .replace(/[“”„‟″]/g, '"')
    .replace(/ß/g, "ss")
    .replace(/æ/g, "ae")
    .replace(/œ/g, "oe")
    .replace(/[\s ​-‏]/g, " ");
  return c;
}

/** Normalizes text and keeps a map from each normalized index back to the original string. */
function normalizeWithMap(text: string): { norm: string; map: number[] } {
  let norm = "";
  const map: number[] = [];
  let i = 0;
  for (const ch of text) {
    const n = normalizeChar(ch);
    for (let k = 0; k < n.length; k++) map.push(i);
    norm += n;
    i += ch.length;
  }
  map.push(i);
  return { norm, map };
}

export function normalize(text: string) {
  return normalizeWithMap(text).norm.replace(/\s+/g, " ").trim();
}

// ---------------------------------------------------------------------------
// Query parsing

const STOP_WORDS = new Set([
  "the",
  "a",
  "an",
  "of",
  "and",
  "or",
  "to",
  "in",
  "for",
  "on",
  "with",
  "at",
  "by",
  "is",
  "are",
  "do",
  "you",
  "we",
  "your",
  "our",
  "في",
  "من",
  "علي",
  "الي",
  "عن",
  "مع",
  "و",
]);

/** Light English stemming so "reefers", "shipping" and "certified" reach their stems. */
function stem(term: string) {
  if (!/^[a-z]+$/.test(term)) return term;
  if (term.length > 4 && term.endsWith("ies")) return term.slice(0, -3) + "y";
  if (term.length > 4 && /(ches|shes|sses|xes|zes|oes)$/.test(term)) return term.slice(0, -2);
  if (term.length > 3 && term.endsWith("s") && !term.endsWith("ss")) return term.slice(0, -1);
  if (term.length > 5 && term.endsWith("ing")) return term.slice(0, -3);
  if (term.length > 4 && term.endsWith("ed")) return term.slice(0, -2);
  return term;
}

type Term = { raw: string; phrase: boolean };

function parseQuery(query: string): Term[] {
  const q = normalize(query);
  const terms: Term[] = [];
  for (const m of q.matchAll(/"([^"]+)"|(\S+)/g)) {
    if (m[1]) {
      const phrase = m[1].trim();
      if (phrase) terms.push({ raw: phrase, phrase: true });
      continue;
    }
    let word = m[2].replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
    if (!word || STOP_WORDS.has(word)) continue;
    // Arabic query words may carry the article or a conjunction ("الأفوكادو", "وأفوكادو");
    // the text side already allows these prefixes, so match on the bare word.
    if (isArabic(word)) word = word.replace(/^[وف]?(?:[بكل]?ال|لل)(?=\S{3,})/, "").replace(/^[وف](?=\S{3,})/, "");
    terms.push({ raw: word, phrase: false });
  }
  return terms;
}

// ---------------------------------------------------------------------------
// Synonyms (normalized on first use)

const SYNONYM_GROUPS_RAW: string[][] = [
  ["matoke", "matooke", "banana", "plantain", "cooking banana", "موز", "ماتوكي"],
  ["avocado", "avo", "hass", "fuerte", "أفوكادو"],
  ["pineapple", "ananas", "sugarloaf", "cayenne", "أناناس"],
  ["passion fruit", "passion", "maracuja", "باشون فروت"],
  ["beef", "meat", "cattle", "cow", "carcass", "primal", "لحم", "لحوم", "بقر", "أبقار"],
  ["halal", "zabiha", "dhabiha", "حلال", "ذبح"],
  ["slaughter", "abattoir", "slaughterhouse", "butcher", "مسلخ", "المسالخ", "ذبح"],
  ["feedlot", "fattening", "finishing", "ration", "تسمين"],
  ["shipping", "freight", "logistics", "transport", "shipment", "container", "شحن", "حاويه", "حاويات"],
  ["reefer", "cold chain", "refrigerated", "chilled", "frozen", "temperature", "تبريد", "مبرده", "مبرد"],
  ["price", "pricing", "quote", "cost", "rate", "سعر", "أسعار", "عرض سعر"],
  ["season", "seasonality", "calendar", "harvest", "availability", "month", "موسم", "مواسم", "تقويم"],
  [
    "certificate",
    "certification",
    "certified",
    "phytosanitary",
    "veterinary",
    "document",
    "شهاده",
    "شهادات",
    "مستندات",
  ],
  ["quality", "compliance", "haccp", "globalgap", "audit", "inspection", "الجوده", "المطابقه", "تفتيش"],
  ["farm", "farmer", "grower", "sourcing", "outgrower", "district", "مزارع", "مزارعين", "المزارعين"],
  ["contact", "phone", "call", "email", "whatsapp", "enquiry", "inquiry", "تواصل", "اتصل", "هاتف", "واتساب", "استفسار"],
  ["incoterms", "fob", "cfr", "cif", "exw", "فوب", "سيف"],
  ["payment", "advance", "letter of credit", "l/c", "currency", "usd", "الدفع"],
  ["packing", "packaging", "carton", "pallet", "label", "private label", "التعبئه", "كرتون"],
  [
    "gulf",
    "middle east",
    "uae",
    "dubai",
    "jebel ali",
    "saudi",
    "riyadh",
    "jeddah",
    "doha",
    "qatar",
    "الخليج",
    "جبل علي",
    "جده",
    "الدوحه",
  ],
  ["europe", "eu", "european union", "rotterdam", "الاتحاد الاوروبي"],
  ["uganda", "kampala", "kireka", "wakiso", "entebbe", "mombasa", "اوغندا", "كمبالا"],
];
let synonymGroups: string[][] | null = null;
function groups() {
  synonymGroups ??= SYNONYM_GROUPS_RAW.map((g) => [...new Set(g.map(normalize))]);
  return synonymGroups;
}

function synonymsFor(term: string): string[] {
  if (term.length < 3) return [];
  const out = new Set<string>();
  for (const group of groups()) {
    const hit = group.some((m) => m.startsWith(term) || (m.length >= 4 && term.startsWith(m)));
    if (hit) group.forEach((m) => m !== term && out.add(m));
  }
  return [...out];
}

// ---------------------------------------------------------------------------
// Regex building

// Only regex syntax characters: "\-" and "\/" are invalid escapes in Unicode ("u") mode.
const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const isArabic = (s: string) => /[؀-ۿ]/.test(s);
// Arabic words often carry attached prefixes: و ف ب ك ل and the article ال.
const AR_PREFIX = "(?:[وفبكل]?ال|[وفبكل])?";
const BOUNDARY = "(?<![\\p{L}\\p{N}])";

/** Matches the term at the start of a word (so partial words and plurals match). */
function termPattern(term: string) {
  const body = term
    .split(/[\s\-_/]+/)
    .filter(Boolean)
    .map(escapeRegex)
    .join("[\\s\\-_/·.,]*"); // tolerate "cold-chain", "cold chain", "coldchain"
  return BOUNDARY + (isArabic(term) ? AR_PREFIX : "") + body;
}

function compile(alternatives: string[]) {
  return new RegExp(alternatives.map(termPattern).join("|"), "giu");
}

// ---------------------------------------------------------------------------
// Typo tolerance

function editDistance(a: string, b: string, max: number) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  const prev2 = new Array(b.length + 1).fill(0);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur[j] = v;
      rowMin = Math.min(rowMin, v);
    }
    if (rowMin > max) return max + 1;
    prev2.splice(0, prev2.length, ...prev);
    prev.splice(0, prev.length, ...cur);
  }
  return prev[b.length];
}

// ---------------------------------------------------------------------------
// Index

/**
 * Text of an element with a space between separate text nodes, so cells and blocks
 * laid out side by side ("Avocado" / "Hass and Fuerte") don't run together.
 */
function readableText(el: Element | null) {
  if (!el) return "";
  const doc = el.ownerDocument;
  const walker = doc.createTreeWalker(el, 4 /* NodeFilter.SHOW_TEXT */);
  const parts: string[] = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) parts.push(n.nodeValue ?? "");
  return parts
    .join(" ")
    .replace(/\s+/g, " ")
    .replace(/\s+([.,;:!?،؛)\]])/g, "$1")
    .replace(/([(\[])\s+/g, "$1")
    .trim();
}

/** Extracts one entry per <section> of <main> from a rendered page. */
export function entriesFromDocument(doc: Document, href: string, page: string): SearchEntry[] {
  const out: SearchEntry[] = [];
  doc.querySelectorAll<HTMLElement>("main section").forEach((section) => {
    const text = (el: Element | null) => readableText(el);
    const title = text(section.querySelector("h1, h2")) || text(section.querySelector("h3")) || page;
    const headings = Array.from(section.querySelectorAll("h3, h4"))
      .map((h) => text(h))
      .join(" · ");
    const body = text(section);
    if (!body) return;
    out.push({
      href: section.id ? `${href}#${section.id}` : href,
      page,
      title,
      headings,
      body,
      n: { title: normalize(title), headings: normalize(headings), body: normalize(body) },
    });
  });
  return out;
}

let vocabularyCache = new WeakMap<SearchEntry[], string[]>();
function vocabulary(entries: SearchEntry[]) {
  let words = vocabularyCache.get(entries);
  if (!words) {
    const set = new Set<string>();
    for (const e of entries) {
      for (const w of `${e.n.title} ${e.n.headings} ${e.n.body}`.split(/[^\p{L}\p{N}]+/u))
        if (w.length >= 4) set.add(w);
    }
    words = [...set];
    vocabularyCache.set(entries, words);
  }
  return words;
}

/** Test hook: lets unit tests start from a clean cache. */
export function resetSearchCaches() {
  vocabularyCache = new WeakMap();
  synonymGroups = null;
}

function countMatches(re: RegExp, text: string) {
  re.lastIndex = 0;
  let n = 0;
  while (re.exec(text)) n++;
  return n;
}

// ---------------------------------------------------------------------------
// Search

export function search(entries: SearchEntry[], query: string, limit = 30): SearchResult {
  let terms = parseQuery(query);
  if (!terms.length) return { hits: [] };

  const all = (e: SearchEntry) => `${e.n.title} ${e.n.headings} ${e.n.body}`;

  // Correct single typos for terms that match nothing at all.
  let corrected = false;
  terms = terms.map((t) => {
    if (t.phrase || t.raw.length < 4) return t;
    const re = compile([t.raw, stem(t.raw), ...synonymsFor(t.raw)]);
    if (entries.some((e) => countMatches(re, all(e)) > 0)) return t;
    const max = t.raw.length >= 8 ? 2 : 1;
    let best: string | null = null;
    let bestD = max + 1;
    for (const w of vocabulary(entries)) {
      const d = Math.min(
        editDistance(t.raw, w, max),
        w.length > t.raw.length ? editDistance(t.raw, w.slice(0, t.raw.length), max) : max + 1,
      );
      if (d < bestD) {
        bestD = d;
        best = w;
      }
    }
    if (best) {
      corrected = true;
      return { raw: best, phrase: false };
    }
    // Words typed together ("coldchain", "halalbeef"): split where both halves are real words.
    const words = new Set(vocabulary(entries));
    for (let i = 3; i <= t.raw.length - 3; i++) {
      const a = t.raw.slice(0, i);
      const b = t.raw.slice(i);
      if (words.has(a) && [...words].some((w) => w.startsWith(b))) {
        corrected = true;
        return { raw: `${a} ${b}`, phrase: true };
      }
    }
    return t;
  });

  const compiled = terms.map((t) => {
    const direct = t.phrase ? [t.raw] : [...new Set([t.raw, stem(t.raw)])];
    return { direct: compile(direct), synonyms: t.phrase ? null : synonymsFor(t.raw) };
  });
  const synRes = compiled.map((c) => (c.synonyms?.length ? compile(c.synonyms) : null));

  const scoreEntry = (e: SearchEntry, requireAll: boolean) => {
    let score = 0;
    let matched = 0;
    compiled.forEach((c, i) => {
      const d =
        countMatches(c.direct, e.n.title) * 12 +
        countMatches(c.direct, e.n.headings) * 5 +
        Math.min(countMatches(c.direct, e.n.body), 6) * 2;
      const s = synRes[i]
        ? countMatches(synRes[i]!, e.n.title) * 5 +
          countMatches(synRes[i]!, e.n.headings) * 2 +
          Math.min(countMatches(synRes[i]!, e.n.body), 6)
        : 0;
      if (d + s > 0) matched++;
      score += d + s;
    });
    if (requireAll && matched < compiled.length) return 0;
    return score * (matched / compiled.length);
  };

  let scored = entries.map((e) => ({ e, score: scoreEntry(e, true) })).filter((x) => x.score > 0);
  // Nothing has every word: fall back to entries that match any of them.
  if (!scored.length && compiled.length > 1)
    scored = entries.map((e) => ({ e, score: scoreEntry(e, false) })).filter((x) => x.score > 0);
  scored.sort((a, b) => b.score - a.score);

  const highlight = compile(
    terms.flatMap((t) => (t.phrase ? [t.raw] : [...new Set([t.raw, stem(t.raw), ...synonymsFor(t.raw)])])),
  );

  return {
    hits: scored.slice(0, limit).map(({ e, score }) => ({ entry: e, score, snippet: snippet(e.body, highlight) })),
    correctedTo: corrected ? terms.map((t) => t.raw).join(" ") : undefined,
  };
}

/** ~180-character excerpt around the first match, with every match marked. */
function snippet(body: string, re: RegExp): SearchHit["snippet"] {
  const { norm, map } = normalizeWithMap(body);
  const ranges: [number, number][] = [];
  re.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(norm))) {
    if (m[0].length === 0) {
      re.lastIndex++;
      continue;
    }
    ranges.push([map[m.index], map[m.index + m[0].length]]);
  }
  const first = ranges[0]?.[0] ?? 0;
  let start = Math.max(0, first - 60);
  let end = Math.min(body.length, start + 180);
  if (start > 0) start = body.indexOf(" ", start) + 1 || start;
  if (end < body.length) end = body.lastIndexOf(" ", end) > start ? body.lastIndexOf(" ", end) : end;

  const parts: SearchHit["snippet"] = [];
  let pos = start;
  for (const [a, b] of ranges) {
    if (b <= start || a >= end) continue;
    const s = Math.max(a, start);
    const t = Math.min(b, end);
    if (s > pos) parts.push({ text: body.slice(pos, s), mark: false });
    parts.push({ text: body.slice(s, t), mark: true });
    pos = t;
  }
  if (pos < end) parts.push({ text: body.slice(pos, end), mark: false });
  if (start > 0) parts.unshift({ text: "… ", mark: false });
  if (end < body.length) parts.push({ text: " …", mark: false });
  return parts;
}
