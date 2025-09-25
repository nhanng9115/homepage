// /assets/js/publications-bibtex.js
(function () {
  "use strict";

  // --- Debug logging so you can see what's happening ---
  const log = (...a) => console.log("[bibtex]", ...a);

  // Inject minimal CSS (so you don't need to add <style> in the md)
  (function injectCSS(){
    const style = document.createElement("style");
    style.textContent = `
      .bibtex-btn{font:inherit;padding:6px 12px;border:1px solid #d0d0d0;border-radius:10px;background:#fff;cursor:pointer;margin-top:6px}
      .bibtex-btn:hover{background:#f6f6f6}
      .bibtex-box{position:relative;margin-top:8px;padding:10px;background:#ffeef3;border:1px solid #ffd6e1;border-radius:12px}
      .bibtex-copy{position:absolute;right:10px;top:8px;padding:4px 10px;border:1px solid #d0d0d0;border-radius:8px;background:#fff;cursor:pointer}
    `;
    document.head.appendChild(style);
  })();

  function clean(s){ return (s||"").replace(/\s+/g," ").trim(); }
  function firstLink(el){ const a = el.querySelector("a[href]"); return a ? a.href : null; }
  function quotedTitle(li){
    const m = li.innerHTML.match(/"([^"]{3,})"/); if (m) return m[1].trim();
    const a = li.querySelector("a[href]"); return a ? clean(a.textContent) : null;
  }

  function fallbackBib(li, title){
    const txt = clean(li.textContent);
    const url = firstLink(li);
    const before = title ? (txt.split(` "${title}"`)[0] || txt.split(title)[0] || txt) : txt;
    const authors = clean(before.replace(/,\s*$/,""));
    const em = li.querySelector("em");
    const venue = em ? clean(em.textContent) : "";
    const yearMatch = txt.match(/(19|20)\d{2}/g);
    const year = yearMatch ? yearMatch[yearMatch.length-1] : "";
    const isJournal = /Transactions|Journal|Letters|JSAC|Wireless Communications Letters|Communications Letters/i.test(venue);
    const key = (authors.split(",")[0] || "key").split(" ").pop().replace(/[^A-Za-z]/g,"") + (year||"");

    if (isJournal) {
      return `@article{${key},
  author={${authors}},
  title={${title || "Untitled"}},
  journal={${venue}},
  year={${year}}${url ? `,\n  url={${url}}` : ""}
}`;
    } else {
      return `@inproceedings{${key},
  author={${authors}},
  title={${title || "Untitled"}},
  booktitle={${venue || "Conference"}},
  year={${year}}${url ? `,\n  url={${url}}` : ""}
}`;
    }
  }

  function buildPanel(bib){
    const box = document.createElement("div");
    box.className = "bibtex-box";
    const copy = document.createElement("button");
    copy.className = "bibtex-copy";
    copy.type = "button";
    copy.textContent = "Copy";
    copy.addEventListener("click", ()=>{
      (navigator.clipboard?.writeText ? navigator.clipboard.writeText(bib) : Promise.reject())
        .catch(()=>{const ta=document.createElement("textarea");ta.value=bib;document.body.appendChild(ta);ta.select();document.execCommand("copy");document.body.removeChild(ta);})
        .finally(()=>{ const t=copy.textContent; copy.textContent="Copied!"; setTimeout(()=>copy.textContent=t, 1200); });
    });
    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = bib;
    pre.appendChild(code);
    box.appendChild(copy);
    box.appendChild(pre);
    return box;
  }

  function isPaperLi(li){
    if (li.closest("nav,header,footer")) return false;
    const t = clean(li.textContent);
    return /(19|20)\d{2}/.test(t) || li.querySelector("em") || li.querySelector("a[href]");
  }

  function addButtons(){
    const lis = Array.from(document.querySelectorAll("li")).filter(isPaperLi);
    let added = 0;
    lis.forEach(li=>{
      if (li.querySelector(".bibtex-btn")) return;
      const btn = document.createElement("button");
      btn.className = "bibtex-btn";
      btn.type = "button";
      btn.textContent = "BibTex";
      btn.addEventListener("click", ()=>{
        document.querySelectorAll(".bibtex-box").forEach(b=>b.remove());
        const title = quotedTitle(li);
        const bib = fallbackBib(li, title);
        btn.insertAdjacentElement("afterend", buildPanel(bib));
      });
      li.appendChild(document.createElement("br"));
      li.appendChild(btn);
      added++;
    });
    if (added) log(`added ${added} buttons`);
  }

  // Run ASAP, then retry a few times in case content comes late
  function start(){
    log("script loaded; initializing…");
    addButtons();
    // Retry for SPA/pjax themes: 10 times over ~5s
    let tries = 0;
    const timer = setInterval(()=>{
      tries++; addButtons();
      if (tries >= 10) clearInterval(timer);
    }, 500);

    // And observe future DOM changes
    const mo = new MutationObserver(()=>addButtons());
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
