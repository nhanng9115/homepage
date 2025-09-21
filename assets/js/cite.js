/* /assets/js/pubs-bibtex.js */
(function () {
  const YEAR_RX = /(20\d{2})/;
  const isJournalLike = (v) => /journal|transactions|letters|magazine|proceedings of the ieee/i.test(v || "");
  const enc = (s) => String(s||"").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  function makeBibKey(authors, title, year) {
    const parts = (authors||"").split(/,|\band\b/i).map(s=>s.trim()).filter(Boolean);
    let first = parts[0] || "Author";
    if (/,/.test(first)) first = first.split(",")[0].trim();
    else first = (first.split(/\s+/).pop() || "Author");
    const core = first.replace(/[^A-Za-z]/g,"");
    const y = year || new Date().getFullYear();
    const tword = (title||"Paper").split(/\W+/).filter(Boolean)[0] || "Paper";
    return `${core}${tword}${y}`;
  }

  function buildDetailsHTML(id, bibtex) {
    const codeId = `bibtex-${id}`;
    const taId   = `bibtex-${id}-src`;
    const btnId  = `bibtex-${id}-btn`;
    const rawBib = bibtex;
    return `
<details style="display:block; margin-top:6px;">
  <summary style="display:flex; justify-content:flex-end; align-items:center; list-style:none; cursor:pointer; padding:0;">
    <span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#eef2f7; border:1px solid #c7d2e0; border-radius:8px; font-weight:600; font-size:12px; line-height:1;"> BibTeX </span>
  </summary>
  <div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;">
    <pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="${codeId}">${enc(rawBib)}</code></pre>
    <textarea id="${taId}" readonly style="position:absolute; left:-9999px; top:-9999px;">${rawBib}</textarea>
    <button id="${btnId}" style="position:absolute; top:6px; right:6px; border:1px solid #c7d2e0; background:#eef2f7; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;"
      onclick="(function(btn){var ta=document.getElementById('${taId}');if(!ta){return;}ta.select();ta.setSelectionRange(0,999999);var ok=false;try{ok=document.execCommand('copy');}catch(e){} if(!ok&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(ta.value).then(function(){ok=true;}).catch(function(){});} var old=btn.textContent;btn.textContent=ok?'Copied!':'Copy';setTimeout(function(){btn.textContent=old;},1200);})(this); return false;">Copy</button>
  </div>
</details>`;
  }

  function parseLi(li) {
    const custom = li.getAttribute('data-bibtex');
    if (custom) return { customBib: custom };

    const a   = li.querySelector('a[href]');
    const em  = li.querySelector('em');

    const title = a ? (a.textContent || "").replace(/^"\s*|\s*"$/g, '').trim() : "";
    const url   = a ? a.getAttribute('href') : "";

    let authors = "";
    for (const n of li.childNodes) {
      if (n.nodeType === Node.TEXT_NODE) {
        const t = (n.textContent || "").trim();
        if (t) { authors = t.replace(/[,;.\s]+$/, ''); break; }
      }
      if (n.nodeType === Node.ELEMENT_NODE && !/^(A|EM|DETAILS)$/i.test(n.tagName)) {
        const t = (n.textContent || "").trim();
        if (t) { authors = t.replace(/[,;.\s]+$/, ''); break; }
      }
    }

    const venue = em ? em.textContent.trim() : "";
    const txt   = li.textContent || "";
    const yrMatch = txt.match(YEAR_RX);
    const year  = yrMatch ? yrMatch[1] : "";

    const statusMatch = txt.match(/\(\*\*(.*?)\*\*\)|\((submitted|accepted|major revision|in press|to appear|manuscript in preparation)\)/i);
    const status = statusMatch ? (statusMatch[1] || statusMatch[2]) : "";

    return { authors, title, venue, year, url, status };
  }

  function toBib(fields) {
    if (fields.customBib) return fields.customBib;
    const { authors, title, venue, year, url, status } = fields;
    const type = isJournalLike(venue) ? 'article' : 'inproceedings';
    const key  = makeBibKey(authors || "Author", title || "Title", year || "");
    const lines = [];
    lines.push(`author = {${authors || "Unknown"}}`);
    lines.push(`title = {${title || "Untitled"}}`);
    if (type === 'article') lines.push(`journal = {${venue || "Journal"}}`);
    else lines.push(`booktitle = {${venue || "Proceedings"}}`);
    if (year)  lines.push(`year = {${year}}`);
    if (status) lines.push(`note = {${status}}`);
    if (url)   lines.push(`url = {${url}}`);
    return `@${type}{${key},\n  ${lines.join(",\n  ")}\n}`;
  }

  function enhance() {
    const lis = Array.from(document.querySelectorAll('ol > li'));
    if (!lis.length) return;
    let idx = 1;
    lis.forEach(li => {
      if (li.querySelector('details')) return; // already has panel
      const parsed = parseLi(li);
      const bib = toBib(parsed);
      const holder = document.createElement('div');
      holder.innerHTML = buildDetailsHTML(idx++, bib);
      const node = holder.firstElementChild;
      if (node) li.appendChild(node);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance, { once: true });
  } else {
    enhance();
  }
})();
