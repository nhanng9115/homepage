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

<ol>

<!-- Keep empty if you don't want to hand-enter any BibTeX -->
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
  function ready(fn){
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else { fn(); }
    // For themes using Turbolinks/Swup/etc.
    window.addEventListener('pageshow', fn, { once: true });
  }

  ready(function initBibtex(){
    // Load overrides
    let DB = {};
    try { DB = JSON.parse(document.getElementById('bibtex-db')?.textContent || '{}'); } catch(e){ DB = {}; }

    const items = Array.from(document.querySelectorAll('ol li'));
    if (!items.length) {
      console.warn('[bibtex] No <ol><li> items found on this page.');
      return;
    }

    function quotedTitle(li){
      const m = li.innerHTML.match(/"([^"]{3,})"/);
      return m ? m[1].trim() : null;
    }
    function firstLink(li){
      const a = li.querySelector('a[href]');
      return a ? a.getAttribute('href') : null;
    }
    function cleanText(s){ return s.replace(/\s+/g,' ').trim(); }
    function fallbackBib(li, title){
      const txt = cleanText(li.textContent);
      const before = title ? txt.split(' "'+title+'"')[0] : txt;
      const authors = before.replace(/,\s*$/,'');
      const year = (txt.match(/,\s*(20\d{2})\./) || [,''])[1];
      const venue = (txt.match(/,\s*([A-Za-z].*?)\s*,\s*20\d{2}/) || [,''])[1].replace(/\(\*\*.*?\*\*\)/g,'').trim();
      const url = firstLink(li);
      const isJournal = /Transactions|Journal/i.test(venue);
      const key = (authors.split(',')[0]||'key').trim().split(' ').pop() + (year||'') + 'Auto';
      const head = isJournal ?
`@article{${key},
  author = {${authors}},
  title  = {${title}},
  journal= {${venue}},
  year   = {${year}}` :
`@inproceedings{${key},
  author   = {${authors}},
  title    = {${title}},
  booktitle= {${venue}},
  year     = {${year}}`;
      return head + (url ? `,\n  url    = {${url}}\n}` : `\n}`);
    }
    function buildPanel(bib){
      const box = document.createElement('div');
      box.className = 'bibtex-box';
      const copy = document.createElement('button');
      copy.className = 'bibtex-copy';
      copy.type = 'button';
      copy.textContent = 'Copy';
      copy.addEventListener('click', ()=>{
        navigator.clipboard.writeText(bib).then(()=>{
          const t = copy.textContent; copy.textContent='Copied!'; setTimeout(()=>copy.textContent=t, 1200);
        });
      });
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.textContent = bib;
      pre.appendChild(code);
      box.appendChild(copy);
      box.appendChild(pre);
      return box;
    }

    // Prevent double-initialization (e.g., PJAX revisits)
    if (document.body.dataset.bibtexInit === '1') return;
    document.body.dataset.bibtexInit = '1';

    items.forEach(li=>{
      // Skip if already has a button (avoid duplicates on soft na
