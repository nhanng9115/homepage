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

  function getTitle(li){
    const a = li.querySelector('a[href]');
    return a ? clean(a.textContent) : null;
  }

  function getURL(li){
    const a = li.querySelector('a[href]');
    return a ? a.href : null;
  }

  function getVenue(li){
    const em = li.querySelector('em');
    return em ? clean(em.textContent) : "";
  }

  function getYear(li){
    const m = li.textContent.match(/\b(19|20)\d{2}\b/);
    return m ? m[0] : "";
  }

  function getAuthors(li, title){
    const full = clean(li.textContent);
    if(!title) return "";
    const idx = full.indexOf(title);
    if(idx === -1){
      const m = full.match(/“([^”]+)”|"([^"]+)"/);
      const cut = m ? full.indexOf(m[0]) : -1;
      return clean((cut>0?full.slice(0,cut):full)).replace(/,\s*$/,"");
    }
    return clean(full.slice(0, idx)).replace(/,\s*$/,"");
  }

  function isJournal(venue){
    return /Transactions|Journal|Letters/i.test(venue);
  }

  function bibKey(authors, year){
    const firstAuthor = clean((authors.split(",")[0]||"key"));
    const surname = firstAuthor.split(/\s+/).pop().replace(/[^A-Za-z]/g,"") || "key";
    return surname + (year || "");
  }

  function escapeBib(s){ return (s||"").replace(/[{}]/g, "\\$&"); }

  function makeBib(li){
    const title = getTitle(li) || "Untitled";
    const url   = getURL(li);
    const venue = getVenue(li);
    const year  = getYear(li);
    const authors = getAuthors(li, title);

    const key = bibKey(authors, year);
    return `@${isJournal(venue) ? "article" : "inproceedings"}{${key},
  author = {${escapeBib(authors)}},
  title = {${escapeBib(title)}},
  ${isJournal(venue) ? "journal" : "booktitle"} = {${escapeBib(venue)}},
  year = {${year}}${url ? `,\n  url = {${url}}` : ""}
}`;
  }

  function buildPanel(bib){
    const box=document.createElement("div"); box.className="bibtex-box";
    const copy=document.createElement("button"); copy.className="bibtex-copy"; copy.textContent="Copy";
    copy.onclick=()=>{navigator.clipboard.writeText(bib).then(()=>{
      const old=copy.textContent; copy.textContent="Copied!"; setTimeout(()=>copy.textContent=old,1200);
    }).catch(()=>{});};
    const pre=document.createElement("pre"); pre.textContent=bib;
    box.appendChild(copy); box.appendChild(pre);
    return box;
  }

  function addButtons(){
    // target only the publication list(s)
    document.querySelectorAll("ol li").forEach(li=>{
      try{
        if(li.querySelector(".bibtex-btn")) return;
        const btn=document.createElement("button");
        btn.className="bibtex-btn"; btn.textContent="BibTex";
        btn.onclick=()=>{
          document.querySelectorAll(".bibtex-box").forEach(b=>b.remove());
          const bib = makeBib(li);
          btn.insertAdjacentElement("afterend", buildPanel(bib));
        };
        li.appendChild(document.createElement("br"));
        li.appendChild(btn);
      }catch(e){
        // fail soft per-item
      }
    });
  }

  // More robust than DOMContentLoaded on some static-site setups
  if(document.readyState === "complete"){
    addButtons();
  }else{
    window.addEventListener("load", addButtons);
  }
})();
</script>
