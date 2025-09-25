// publications-bibtex.js (no inline JS needed)
(function () {
  "use strict";

  // ===== Utilities =====
  const log = (...a) => console.debug("[bibtex]", ...a);

  function cleanText(s) { return (s || "").replace(/\s+/g, " ").trim(); }

  function firstLink(el) {
    const a = el.querySelector("a[href]");
    return a ? a.href : null;
  }

  function quotedTitle(li) {
    // Prefer quoted "...", else use first link text
    const m = li.innerHTML.match(/"([^"]{3,})"/);
    if (m) return m[1].trim();
    const a = li.querySelector("a[href]");
    return a ? cleanText(a.textContent) : null;
  }

  function guessVenue(li, txt) {
    const em = li.querySelector("em");
    if (em) return cleanText(em.textContent);
    const m = txt.match(/,\s*([A-Za-z].*?)\s*,\s*20\d{2}/);
    return m ? cleanText(m[1]).replace(/\(\*\*.*?\*\*\)/g, "") : "";
  }

  function guessYear(txt) {
    const ys = txt.match(/(19|20)\d{2}/g);
    return ys ? ys[ys.length - 1] : "";
  }

  function fallbackBib(li, title) {
    const txt = cleanText(li.textContent);
    const url = firstLink(li);

    // Authors = text before the title occurrence
    let before;
    if (title) {
      const quoted = ` "${title}"`;
      before = txt.includes(quoted) ? txt.split(quoted)[0] : txt.split(title)[0];
    } else {
      before = txt;
    }
    const authors = cleanText(before.replace(/,\s*$/, ""));

    const venue = guessVenue(li, txt);
    const year = guessYear(txt);

    // Extra fields (very tolerant)
    const volume = (txt.match(/\bvol\.?\s*([0-9IVXLC]+)\b/i) || [,""])[1];
    const number = (txt.match(/\bno\.?\s*([A-Za-z0-9\-]+)\b/i) || [,""])[1];
    const pages  = (txt.match(/\bpp\.?\s*([0-9]+(?:\s*[-–]\s*[0-9]+)?)\b/i) || [,""])[1];
    const month  = (txt.match(/\b(Jan\.?|Feb\.?|Mar\.?|Apr\.?|May|Jun\.?|Jul\.?|Aug\.?|Sep\.?|Sept\.?|Oct\.?|Nov\.?|Dec\.?)\b/i) || [,""])[1];

    const isJournal = /Transactions|Journal|Letters|Wireless Communications Letters|Communications Letters|JSAC/i.test(venue || "");
    const firstSurname = (authors.split(",")[0] || "key").split(" ").pop().replace(/[^A-Za-z]/g, "") || "key";
    const key = `${firstSurname}${year || ""}Auto`;

    const fields = [];
    if (isJournal) {
      fields.push(`author = {${authors}}`);
      fields.push(`title  = {${title || "Untitled"}}`);
      fields.push(`journal= {${venue}}`);
      if (year)   fields.push(`year   = {${year}}`);
      if (volume) fields.push(`volume = {${volume}}`);
      if (number) fields.push(`number = {${number}}`);
      if (pages)  fields.push(`pages  = {${pages}}`);
      if (month)  fields.push(`month  = {${month}}`);
      if (url)    fields.push(`url    = {${url}}`);
      return `@article{${key},\n  ${fields.join(",\n  ")}\n}`;
    } else {
      fields.push(`author   = {${authors}}`);
      fields.push(`title    = {${title || "Untitled"}}`);
      fields.push(`booktitle= {${venue || "Conference"}}`);
      if (year)  fields.push(`year     = {${year}}`);
      if (pages) fields.push(`pages    = {${pages}}`);
      if (month) fields.push(`month    = {${month}}`);
      if (url)   fields.push(`url      = {${url}}`);
      return `@inproceedings{${key},\n  ${fields.join(",\n  ")}\n}`;
    }
  }

  function buildPanel(bib) {
    const box = document.createElement("div");
    box.className = "bibtex-box";

    const copy = document.createElement("button");
    copy.className = "bibtex-copy";
    copy.type = "button";
    copy.textContent = "Copy";

    function fallbackCopy(text) {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      document.body.removeChild(ta);
    }

    copy.addEventListener("click", () => {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(bib).then(() => {
          const t = copy.textContent; copy.textContent = "Copied!"; setTimeout(() => copy.textContent = t, 1200);
        }).catch(() => fallbackCopy(bib));
      } else {
        fallbackCopy(bib);
      }
    });

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = bib;
    pre.appendChild(code);

    box.appendChild(copy);
    box.appendChild(pre);
    return box;
  }

  // ===== Main logic =====
  const processed = new WeakSet();
  let overrides = {};

  function loadOverridesOnce() {
    // If already loaded via <link rel="preload">, the fetch still hits cache
    return fetch("/assets/bibtex.json", { credentials: "same-origin" })
      .then(r => r.ok ? r.json() : {})
      .catch(() => ({}))
      .then(db => { overrides = db || {}; log("overrides loaded", overrides); });
  }

  function isPaperLi(li) {
    // Exclude nav/header/footer lists and already processed ones
    if (processed.has(li)) return false;
    if (li.closest("nav, header, footer")) return false;
    // Heuristic: must contain a year or an <em> venue or an <a>
    const text = cleanText(li.textContent);
    const hasYear = /(19|20)\d{2}/.test(text);
    const hasVenue = !!li.querySelector("em");
    const hasLink = !!li.querySelector("a[href]");
    return hasYear || hasVenue || hasLink;
  }

  function ensureButtons(root = document) {
    const items = Array.from(root.querySelectorAll("li"));
    let added = 0;
    items.forEach(li => {
      if (!isPaperLi(li)) return;
      if (li.querySelector(".bibtex-btn")) { processed.add(li); return; }

      const btn = document.createElement("button");
      btn.className = "bibtex-btn";
      btn.type = "button";
      btn.textContent = "BibTex";

      li.appendChild(document.createElement("br"));
      li.appendChild(btn);
      processed.add(li);
      added++;
    });
    if (added) log(`added ${added} BibTex buttons`);
  }

  // Event delegation: one handler for all buttons
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".bibtex-btn");
    if (!btn) return;
    const li = btn.closest("li");
    if (!li) return;

    // Close other panels
    document.querySelectorAll(".bibtex-box").forEach(b => b.remove());

    const title = quotedTitle(li);
    let bib;
    if (title && overrides && overrides[title]) {
      bib = overrides[title];
    } else {
      bib = fallbackBib(li, title);
    }

    const panel = buildPanel(bib);
    btn.insertAdjacentElement("afterend", panel);
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  function start() {
    ensureButtons();
    // Watch for soft navigations / content injected later
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.addedNodes && m.addedNodes.length) {
          ensureButtons(document);
        }
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  // Load overrides then start
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => loadOverridesOnce().finally(start));
  } else {
    loadOverridesOnce().finally(start);
  }

  // ===== Minimal CSS injection (only if you don't have your own CSS) =====
  const style = document.createElement("style");
  style.textContent = `
  .bibtex-btn{font:inherit;padding:6px 12px;border:1px solid #d0d0d0;border-radius:10px;background:#fff;cursor:pointer;margin-top:6px}
  .bibtex-btn:hover{background:#f6f6f6}
  .bibtex-box{position:relative;margin-top:8px;padding:10px 10px 6px;background:#ffeef3;border:1px solid #ffd6e1;border-radius:12px;overflow:auto}
  .bibtex-copy{position:absolute;right:10px;top:8px;padding:4px 10px;border-radius:8px;border:1px solid #d0d0d0;background:#fff;cursor:pointer;font-size:.9em}
  .bibtex-copy:hover{background:#f6f6f6}
  `;
  document.head.appendChild(style);
})();
