---
permalink: /publications/
title: "Publications"
---

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
  function clean(s){ return (s||"").replace(/\s+/g," ").trim(); }

  function getAnchor(li){
    return li.querySelector('a[href]');
  }

  // Robust title from anchor text (not innerHTML)
  function getTitle(li){
    const a = getAnchor(li);
    if(!a) return null;
    return clean(a.textContent);
  }

  // Authors = all text before the first <a>
  function getAuthors(li){
    let s = "";
    for (const node of li.childNodes){
      if (node.nodeType === 1 && node.tagName === "A") break;   // stop at first link
      if (node.nodeType === 3) s += node.nodeValue;
      else if (node.nodeType === 1) s += " " + node.textContent;
    }
    s = clean(s);
    // drop trailing comma if present
    s = s.replace(/,\s*$/,"");
    return s;
  }

  function getVenue(li){
    const em = li.querySelector("em");
    return em ? clean(em.textContent) : "";
  }

  // Take the last 4-digit year present (handles multiple numbers in the string)
  function getYear(li){
    const txt = li.textContent || "";
    const matches = Array.from(txt.matchAll(/\b(19|20)\d{2}\b/g));
    return matches.length ? matches[matches.length-1][0] : "";
  }

  function getUrl(li){
    const a = getAnchor(li);
    return a ? a.href : null;
  }

  function getNote(li){
    const txt = (li.textContent || "").toLowerCase();
    if (/\baccepted\b/.test(txt)) return "accepted";
    if (/\bin press\b/.test(txt)) return "in press";
    return "";
  }

  function bibKey(authors, year){
    // Use last token of the first author (letters only) + year
    const firstAuthor = clean(authors.split(",")[0] || "key");
    const lastToken = clean(firstAuthor).split(/\s+/).pop().replace(/[^A-Za-z]/g,"") || "key";
    return lastToken + (year || "");
  }

  function isJournal(venue){
    return /Transactions|Journal|Letters/i.test(venue);
  }

  function escapeLatex(s){
    // Very light escaping for common special chars in BibTeX fields
    return s.replace(/([\\{}%_#&])/g, "\\$1");
  }

  function buildBib(li){
    const title = getTitle(li) || "Untitled";
    const authors = getAuthors(li);
    const venue = getVenue(li);
    const year = getYear(li);
    const url = getUrl(li);
    const note = getNote(li);
    const key = bibKey(authors, year);

    const type = isJournal(venue) ? "article" : "inproceedings";
    const venueField = isJournal(venue) ? "journal" : "booktitle";

    let bib =
`@${type}{${key},
  author = {${escapeLatex(authors)}},
  title = {${escapeLatex(title)}},
  ${venueField} = {${escapeLatex(venue)}},
  year = {${year}}`;

    if (url) bib += `,\n  url = {${url}}`;
    if (note) bib += `,\n  note = {${note}}`;
    bib += `\n}`;

    return bib;
  }

  function buildPanel(bib){
    const box=document.createElement("div");box.className="bibtex-box";
    const copy=document.createElement("button");copy.className="bibtex-copy";copy.textContent="Copy";
    copy.onclick=()=>{navigator.clipboard.writeText(bib).then(()=>{copy.textContent="Copied!";setTimeout(()=>copy.textContent="Copy",1200);});};
    const pre=document.createElement("pre");pre.textContent=bib;box.appendChild(copy);box.appendChild(pre);return box;
  }

  function addButtons(){
    document.querySelectorAll("li").forEach(li=>{
      if(li.querySelector(".bibtex-btn")) return;
      if(!/\b(19|20)\d{2}\b/.test(li.textContent)) return;

      const btn=document.createElement("button");
      btn.className="bibtex-btn";
      btn.textContent="BibTeX";
      btn.onclick=()=>{
        document.querySelectorAll(".bibtex-box").forEach(b=>b.remove());
        const bib = buildBib(li);
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
