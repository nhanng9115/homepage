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
  function clean(s){ return (s||"").replace(/\s+/g," ").trim(); }

  // Remove any UI artifacts before reading text
  function liTextClean(li){
    const clone = li.cloneNode(true);
    clone.querySelectorAll(".bibtex-btn,.bibtex-box,.bibtex-copy,script,style").forEach(n=>n.remove());
    return clean(clone.textContent || "");
  }

  function firstLinkHref(el){
    const a = el.querySelector("a[href]");
    return a ? a.href : null;
  }

  // Prefer anchor text as the title; fallback to the first quoted phrase in TEXT (not innerHTML)
  function extractTitle(li){
    const a = li.querySelector("a[href]");
    if (a && clean(a.textContent)) return clean(a.textContent);
    const txt = liTextClean(li);
    const m = txt.match(/"([^"]{3,})"/);
    return m ? clean(m[1]) : null;
  }

  function extractVenue(li){
    const em = li.querySelector("em");
    return em ? clean(em.textContent) : "";
  }

  function extractYear(li){
    const txt = liTextClean(li);
    const m = txt.match(/\b(19|20)\d{2}\b/);
    return m ? m[0] : "";
  }

  function toBibAuthors(beforeTitleText){
    // Trim trailing comma and normalize spaces
    let authors = clean(beforeTitleText).replace(/,\s*$/,"");
    // Convert comma-delimited list to BibTeX "and" format
    // First normalize the Oxford comma " , and " -> " and "
    authors = authors.replace(/\s*,\s*and\s*/i, " and ");
    // Then convert remaining commas between authors to " and "
    authors = authors.replace(/\s*,\s*/g, " and ");
    return authors;
  }

  function firstSurname(authorsStr){
    const first = authorsStr.split(/\s+and\s+/i)[0] || "";
    const parts = first.trim().split(/\s+/);
    const last = parts[parts.length-1] || "key";
    return last.replace(/[^A-Za-z]/g,"");
  }

  function slugifyTitle(title){
    return (title||"").toLowerCase()
      .replace(/[^a-z0-9]+/g," ")
      .trim()
      .split(" ")
      .slice(0,2) // keep it short
      .join("");
  }

  function fallbackBib(li){
    const txt = liTextClean(li);
    const title = extractTitle(li) || "Untitled";
    const venue = extractVenue(li);
    const year = extractYear(li);
    const url = firstLinkHref(li);

    // Split authors from the rest using the title (quoted or plain)
    // Try with a quoted title first, then without quotes as a fallback
    let before = txt;
    const quoted = `"${title}"`;
    if (txt.includes(quoted)) {
      before = txt.split(quoted)[0];
    } else if (txt.includes(title)) {
      before = txt.split(title)[0];
    }

    const authorsBib = toBibAuthors(before);

    const isJournal = /Transactions|Journal|Letters/i.test(venue);
    const keyBase = firstSurname(authorsBib) + (year||"");
    const key = (keyBase || "key") + (slugifyTitle(title)||"");

    const common =
`  author={${authorsBib}},
  title={${title}},`;

    const tail = url ? `,\n  url={${url}}` : "";

    if (isJournal) {
      return `@article{${key},
${common}
  journal={${venue}},
  year={${year}}${tail}
}`;
    } else {
      return `@inproceedings{${key},
${common}
  booktitle={${venue || "Conference"}},
  year={${year}}${tail}
}`;
    }
  }

  function buildPanel(bib){
    const box=document.createElement("div"); box.className="bibtex-box";
    const copy=document.createElement("button"); copy.className="bibtex-copy"; copy.textContent="Copy";
    copy.onclick=()=>{ navigator.clipboard.writeText(bib).then(()=>{ copy.textContent="Copied!"; setTimeout(()=>copy.textContent="Copy",1200); }); };
    const pre=document.createElement("pre"); pre.textContent=bib;
    box.appendChild(copy); box.appendChild(pre);
    return box;
  }

  function addButtons(){
    document.querySelectorAll("li").forEach(li=>{
      if(li.querySelector(".bibtex-btn")) return;
      const txt = liTextClean(li);
      if(!/\b(19|20)\d{2}\b/.test(txt)) return;

      const btn=document.createElement("button");
      btn.className="bibtex-btn";
      btn.textContent="BibTeX";

      btn.onclick=()=>{
        document.querySelectorAll(".bibtex-box").forEach(b=>b.remove());
        const bib = fallbackBib(li);
        btn.insertAdjacentElement("afterend", buildPanel(bib));
      };

      li.appendChild(document.createElement("br"));
      li.appendChild(btn);
    });
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded", addButtons);
  } else {
    addButtons();
  }
})();
</script>
