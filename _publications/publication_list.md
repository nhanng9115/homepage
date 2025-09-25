---
permalink: /publications/
title: "Publications"
---

---




# 📄 Journal Publications

<ol>

<li>
  H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,  
  "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"  
  <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)
</li>

<li>
A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2503.14054" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"  
<span style=""><em>IEEE Communications Letters</em></span>, 2025. (accepted)
</li>

<li>
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11008697" target="_blank">Digital and Hybrid Precoding Designs in Massive MIMO with Low-Resolution ADCs</a>,"  
<span style=""><em>IEEE Wireless Communications Letters</em></span>, vol. 14, no. 8, pp. 2446–2450, Aug. 2025.
</li>

</ol>

<!-- Optional overrides (leave {} to rely entirely on auto-generation) -->
<script type="application/json" id="bibtex-db">{}</script>

<style>
  .bibtex-btn{font:inherit;padding:6px 12px;border:1px solid #d0d0d0;border-radius:10px;background:#fff;cursor:pointer;margin-top:6px}
  .bibtex-btn:hover{background:#f6f6f6}
  .bibtex-box{position:relative;margin-top:8px;padding:10px 10px 6px;background:#ffeef3;border:1px solid #ffd6e1;border-radius:12px;overflow:auto}
  .bibtex-copy{position:absolute;right:10px;top:8px;padding:4px 10px;border-radius:8px;border:1px solid #d0d0d0;background:#fff;cursor:pointer;font-size:.9em}
  .bibtex-copy:hover{background:#f6f6f6}
</style>

<script>
(function(){
  // Get all paper <li> elements (fallback to any <li> if no <ol> list found)
  function getPaperItems(){
    let items = Array.from(document.querySelectorAll('ol li'));
    if (!items.length) items = Array.from(document.querySelectorAll('li'));
    // Avoid nav/header/footer lists
    return items.filter(li => !li.closest('nav, header, footer'));
  }

  function loadDB(){
    try {
      const node = document.getElementById('bibtex-db');
      return node ? JSON.parse(node.textContent || '{}') : {};
    } catch(e){ return {}; }
  }

  // Parsing helpers
  function quotedTitle(li){
    const m = li.innerHTML.match(/"([^"]{3,})"/);
    if (m) return m[1].trim();
    const a = li.querySelector('a[href]');
    return a ? a.textContent.trim() : null;
  }
  function firstLink(li){
    const a = li.querySelector('a[href]');
    return a ? a.href : null;
  }
  function cleanText(s){ return (s||'').replace(/\s+/g,' ').trim(); }

  function fallbackBib(li, title){
    const txt = cleanText(li.textContent);
    const url = firstLink(li);

    // Authors: text before the title (quoted or anchor text)
    let before = '';
    if (title) {
      const quoted = ' "' + title + '"';
      before = txt.includes(quoted) ? txt.split(quoted)[0] : txt.split(title)[0];
    } else {
      before = txt;
    }
    const authors = cleanText(before.replace(/,\s*$/,''));

    // Venue from <em> if present, else parse around year
    const em = li.querySelector('em');
    let venue = em ? cleanText(em.textContent) : '';
    const yearMatches = txt.match(/(20\d{2})/g);
    const year = yearMatches ? yearMatches[yearMatches.length-1] : '';

    if (!venue) {
      const v = (txt.match(/,\s*([A-Za-z].*?)\s*,\s*20\d{2}/) || [,''])[1];
      venue = cleanText((v||'').replace(/\(\*\*.*?\*\*\)/g,''));
    }

    // Extra fields
    const volume = (txt.match(/\bvol\.?\s*([0-9IVXLC]+)\b/i)||[])[1]||'';
    const number = (txt.match(/\bno\.?\s*([A-Za-z0-9\-]+)\b/i)||[])[1]||'';
    const pages  = (txt.match(/\bpp\.?\s*([0-9]+(?:\s*[-–]\s*[0-9]+)?)\b/i)||[])[1]||'';
    const month  = (txt.match(/\b(Jan\.?|Feb\.?|Mar\.?|Apr\.?|May|Jun\.?|Jul\.?|Aug\.?|Sep\.?|Sept\.?|Oct\.?|Nov\.?|Dec\.?)\b/i)||[])[1]||'';

    const isJournal = /Transactions|Journal|Letters|Wireless Communications Letters|Communications Letters|JSAC/i.test(venue||'');
    const firstSurname = (authors.split(',')[0]||'key').split(' ').pop().replace(/[^A-Za-z]/g,'') || 'key';
    const key = `${firstSurname}${year||''}Auto`;

    let bib;
    if (isJournal){
      bib = `@article{${key},
  author = {${authors}},
  title  = {${title || 'Untitled'}},
  journal= {${venue}}`;
      if (year)   bib += `,\n  year   = {${year}}`;
      if (volume) bib += `,\n  volume = {${volume}}`;
      if (number) bib += `,\n  number = {${number}}`;
      if (pages)  bib += `,\n  pages  = {${pages}}`;
      if (month)  bib += `,\n  month  = {${month}}`;
      if (url)    bib += `,\n  url    = {${url}}`;
      bib += `\n}`;
    } else {
      bib = `@inproceedings{${key},
  author   = {${authors}},
  title    = {${title || 'Untitled'}},
  booktitle= {${venue || 'Conference'}}`;
      if (year)  bib += `,\n  year     = {${year}}`;
      if (pages) bib += `,\n  pages    = {${pages}}`;
      if (month) bib += `,\n  month    = {${month}}`;
      if (url)   bib += `,\n  url      = {${url}}`;
      bib += `\n}`;
    }
    return bib;
  }

  function buildPanel(bib){
    const box = document.createElement('div');
    box.className = 'bibtex-box';

    const copy = document.createElement('button');
    copy.className = 'bibtex-copy';
    copy.type = 'button';
    copy.textContent = 'Copy';

    function fallbackCopy(text){
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta);
      ta.select(); try { document.execCommand('copy'); } catch(e){}
      document.body.removeChild(ta);
    }

    copy.addEventListener('click', ()=>{
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(bib).then(()=>{
          const t = copy.textContent; copy.textContent='Copied!'; setTimeout(()=>copy.textContent=t, 1200);
        }).catch(()=>{ fallbackCopy(bib); });
      } else {
        fallbackCopy(bib);
      }
    });

    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = bib;
    pre.appendChild(code);

    box.appendChild(copy);
    box.appendChild(pre);
    return box;
  }

  function ensureButtons(){
    const items = getPaperItems();
    items.forEach(li=>{
      if (li.querySelector('.bibtex-btn')) return; // already added
      const btn = document.createElement('button');
      btn.className = 'bibtex-btn';
      btn.type = 'button';
      btn.textContent = 'BibTex';
      li.appendChild(document.createElement('br'));
      li.appendChild(btn);
    });
  }

  // One click handler for the whole page (event delegation)
  document.addEventListener('click', (e)=>{
    if (!e.target.classList.contains('bibtex-btn')) return;
    const li = e.target.closest('li');
    // Close other panels
    document.querySelectorAll('.bibtex-box').forEach(b=>b.remove());

    const title = quotedTitle(li);
    const DB = loadDB();
    const bib = (title && DB[title]) ? DB[title] : fallbackBib(li, title);

    const panel = buildPanel(bib);
    e.target.insertAdjacentElement('afterend', panel);
    panel.scrollIntoView({behavior:'smooth', block:'nearest'});
  });

  // Initial mount + watch for soft navigations/content changes
  function mount(){
    ensureButtons();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
  const mo = new MutationObserver(()=>ensureButtons());
  mo.observe(document.body, { childList: true, subtree: true });
})();
</script>
