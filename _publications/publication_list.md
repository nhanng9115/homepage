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
<style>
  .bibtex-btn{font:inherit;padding:6px 12px;border:1px solid #d0d0d0;border-radius:10px;background:#fff;cursor:pointer;margin-top:6px}
  .bibtex-btn:hover{background:#f6f6f6}
  .bibtex-box{position:relative;margin-top:8px;padding:10px;background:#ffeef3;border:1px solid #ffd6e1;border-radius:12px}
  .bibtex-copy{position:absolute;right:10px;top:8px;padding:4px 10px;border:1px solid #d0d0d0;border-radius:8px;background:#fff;cursor:pointer}
</style>

<script>
(function(){
  function clean(s){ return (s||"").replace(/\s+/g," ").trim(); }
  function firstLink(el){ const a=el.querySelector("a[href]"); return a ? a.href : null; }

  // Prefer the <a> text; fall back to quoted text in *textContent* (not innerHTML)
  function quotedTitle(li){
    const a = li.querySelector("a[href]");
    if (a) return clean(a.textContent);
    const m = li.textContent.match(/["“]([^"”]{3,})["”]/);
    return m ? m[1].trim() : null;
  }

  // Normalize authors for BibTeX: "A, B, C and D" -> "A and B and C and D"
  function authorsToBib(authorsText){
    const replaced = authorsText.replace(/\s+and\s+/gi, ", ");
    const parts = replaced.split(/\s*,\s*/).map(clean).filter(Boolean);
    return parts.join(" and ");
  }

  // Escape braces in fields
  function escapeBib(s){ return (s||"").replace(/[{}]/g, "\\$&"); }

  function fallbackBib(li, title){
    const txt = clean(li.textContent);
    const url = firstLink(li);

    // Find authors as the text before the first occurrence of the title (remove stray quotes/commas)
    let authorsBlock = txt;
    if (title){
      const idx = txt.indexOf(title);
      if (idx > -1) authorsBlock = txt.slice(0, idx);
    }
    authorsBlock = clean(authorsBlock.replace(/["“”]/g,"")).replace(/,\s*$/,"");
    const authorsBib = authorsToBib(authorsBlock);

    const em = li.querySelector("em");
    const venue = em ? clean(em.textContent) : "";
    // Full 4-digit year (fixes previous capture-group bug)
    const year = (txt.match(/\b(19|20)\d{2}\b/)||[""])[0];

    const isJournal = /Transactions|Journal|Letters/i.test(venue);
    // Key: first author's surname (letters only) + year
    const firstAuthor = (authorsBlock.split(",")[0]||"key").trim();
    const surname = (firstAuthor.split(/\s+/).pop()||"key").replace(/[^A-Za-z]/g,"") || "key";
    const key = surname + (year||"");

    const safeTitle = escapeBib(title || "Untitled");
    const safeVenue = escapeBib(venue);

    return isJournal ?
`@article{${key},
  author = {${escapeBib(authorsBib)}},
  title = {${safeTitle}},
  journal = {${safeVenue}},
  year = {${year}}${url ? `,\n  url = {${url}}` : ""}
}` :
`@inproceedings{${key},
  author = {${escapeBib(authorsBib)}},
  title = {${safeTitle}},
  booktitle = {${safeVenue || "Conference"}},
  year = {${year}}${url ? `,\n  url = {${url}}` : ""}
}`;
  }

  function buildPanel(bib){
    const box=document.createElement("div"); box.className="bibtex-box";
    const copy=document.createElement("button"); copy.className="bibtex-copy"; copy.textContent="Copy";
    copy.onclick=()=>{navigator.clipboard.writeText(bib).then(()=>{
      copy.textContent="Copied!"; setTimeout(()=>copy.textContent="Copy",1200);
    });};
    const pre=document.createElement("pre"); pre.textContent=bib;
    box.appendChild(copy); box.appendChild(pre);
    return box;
  }

  function addButtons(){
    document.querySelectorAll("li").forEach(li=>{
      if(li.querySelector(".bibtex-btn")) return;
      // Keep your existing requirement: only items that contain a year get a button
      if(!/\b(19|20)\d{2}\b/.test(li.textContent)) return;

      const btn=document.createElement("button");
      btn.className="bibtex-btn";
      btn.textContent="BibTex";
      btn.onclick=()=>{
        document.querySelectorAll(".bibtex-box").forEach(b=>b.remove());
        const bib = fallbackBib(li, quotedTitle(li));
        btn.insertAdjacentElement("afterend", buildPanel(bib));
      };
      li.appendChild(document.createElement("br"));
      li.appendChild(btn);
    });
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded", addButtons);
  }else{
    addButtons();
  }
})();
</script>
