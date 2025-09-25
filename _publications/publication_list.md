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
<script>
(function(){
  // ---- 1) Exact BibTeX for known entries (keyed by canonical link) ----
  const bibByUrl = {
    // First paper: exact BibTeX you provided
    "https://www.arxiv.org/pdf/2509.10290": `@article{nguyen2025energy, 
  title={Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems},
  author={Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal={IEEE Journal on Selected Areas in Communications},
  year={2025},
  publisher={IEEE}
}`
  };

  // Utility: normalize URLs so http/https and trailing slashes match
  function norm(u){
    try{
      const url = new URL(u);
      url.hash = "";
      url.search = "";
      return url.toString().replace(/\/+$/,"");
    }catch(_){ return (u||"").replace(/\/+$/,""); }
  }

  // ---- 2) Helpers for robust fallback parsing (when no exact BibTeX is provided) ----
  function clean(s){ return (s||"").replace(/\s+/g," ").trim(); }

  function liTextClean(li){
    const clone = li.cloneNode(true);
    clone.querySelectorAll("script,style,.bibtex-box,.bibtex-copy,.bibtex-btn").forEach(n=>n.remove());
    return clean(clone.textContent || "");
  }

  function firstLink(li){
    const a=li.querySelector("a[href]");
    return a ? {href:norm(a.href), text:clean(a.textContent||"")} : {href:null, text:null};
  }

  function extractVenue(li){
    const em=li.querySelector("em");
    return em ? clean(em.textContent) : "";
  }

  function extractYear(txt){
    const m = txt.match(/\b(19|20)\d{2}\b/);
    return m ? m[0] : "";
  }

  function extractTitle(li, txt){
    const a = li.querySelector("a[href]");
    if (a && clean(a.textContent)) return clean(a.textContent);
    const m = txt.match(/"([^"]{3,})"/);
    return m ? clean(m[1]) : "Untitled";
  }

  function toBibAuthors(beforeTitleText){
    let authors = clean(beforeTitleText).replace(/,\s*$/,"");
    authors = authors.replace(/\s*,\s*and\s*/i, " and ");
    authors = authors.replace(/\s*,\s*/g, " and ");
    return authors;
  }

  function firstSurname(authorsStr){
    const first = (authorsStr.split(/\s+and\s+/i)[0]||"").trim();
    const parts = first.split(/\s+/);
    const last = parts[parts.length-1] || "key";
    return last.replace(/[^A-Za-z]/g,"");
  }

  function slugifyTitle(title){
    return (title||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim().split(" ").slice(0,2).join("");
  }

  function fallbackBib(li){
    const txt = liTextClean(li);
    const {href:url, text:alink} = firstLink(li);
    const venue = extractVenue(li);
    const year = extractYear(txt);
    const title = extractTitle(li, txt);

    // Authors: text before the title
    let before = txt;
    const quoted = `"${title}"`;
    if (txt.includes(quoted)) before = txt.split(quoted)[0];
    else if (txt.includes(title)) before = txt.split(title)[0];
    const authorsBib = toBibAuthors(before);

    const isJournal = /Transactions|Journal|Letters/i.test(venue);
    const key = (firstSurname(authorsBib) + (year||"") + slugifyTitle(title)) || "key";

    const fields = [];
    fields.push(`  author={${authorsBib}}`);
    fields.push(`  title={${title}}`);
    if (isJournal) fields.push(`  journal={${venue}}`); else fields.push(`  booktitle={${venue || "Conference"}}`);
    if (year) fields.push(`  year={${year}}`);
    if (url) fields.push(`  url={${url}}`);

    const body = fields.join(",\n");
    return (isJournal ? `@article{${key},\n${body}\n}` : `@inproceedings{${key},\n${body}\n}`);
  }

  // ---- 3) Render BibTeX under each <li> (no buttons) ----
  function renderBib(li){
    // Avoid duplicates
    if (li.querySelector(".bibtex-box")) return;

    const {href:url} = firstLink(li);
    let bib = null;

    // Try exact lookup by URL
    if (url && bibByUrl[norm(url)]) {
      bib = bibByUrl[norm(url)];
    } else {
      // Fallback parser
      bib = fallbackBib(li);
    }

    const box = document.createElement("div");
    box.className = "bibtex-box";
    const pre = document.createElement("pre");
    pre.textContent = bib;
    box.appendChild(pre);
    li.appendChild(box);
  }

  function run(){
    document.querySelectorAll("ol li, ul li").forEach(li=>{
      // Only render for items that look like publications (contain a year)
      const txt = liTextClean(li);
      if (/\b(19|20)\d{2}\b/.test(txt)) renderBib(li);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
</script>
