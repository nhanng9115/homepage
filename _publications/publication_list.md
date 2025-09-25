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
  function clean(s){return (s||"").replace(/\s+/g," ").trim();}
  function firstLink(el){const a=el.querySelector("a[href]");return a?a.href:null;}

  // KEEP NAME the same, but prefer the anchor text for the title
  function quotedTitle(li){
    const a=li.querySelector("a[href]");
    if(a) return clean(a.textContent);
    const m=li.textContent.match(/"([^"]{3,})"/);
    return m?m[1].trim():"Untitled";
  }

  // ONLY change internals; keep the same signature (li, titleFromCaller)
  function fallbackBib(li,_title){
    const txt=clean(li.textContent);

    // Title: robustly take from anchor text
    const aEl = li.querySelector("a[href]");
    const title = aEl ? clean(aEl.textContent) : quotedTitle(li);

    // Authors: text BEFORE the first anchor (DOM-safe)
    let authors;
    if(aEl){
      const range=document.createRange();
      range.setStart(li,0);
      range.setEnd(aEl,0);
      authors=clean(range.toString()).replace(/^[\s,:"“”]+|[\s,:"“”]+$/g,"");
    }else{
      // fallback: best effort up to the quoted title
      const parts = txt.split(' "'+title+'"');
      authors = clean((parts[0]||txt).replace(/^[\s,:"“”]+|[\s,:"“”]+$/g,""));
    }

    // Venue & Year
    const em=li.querySelector("em");
    const venue=em?clean(em.textContent):"";
    const years=txt.match(/\b(?:19|20)\d{2}\b/g);
    const year=years?years[years.length-1]:"";

    // Entry type & key
    const isJournal=/Transactions|Journal|Selected Areas in Communications|Letters|JSAC|Wireless Communications Letters|Communications Letters/i.test(venue);
    const firstSurname=(authors.split(",")[0]||"key").split(" ").pop().replace(/[^A-Za-z]/g,"")||"key";
    const key=`${firstSurname}${year||""}Auto`;

    // Pretty-print, one field per line, NO url
    let lines=[];
    if(isJournal){
      lines.push(`@article{${key},`);
      lines.push(`  author  = {${authors}},`);
      lines.push(`  title   = {${title}},`);
      lines.push(`  journal = {${venue}},`);
      if(year) lines.push(`  year    = {${year}},`);
    }else{
      lines.push(`@inproceedings{${key},`);
      lines.push(`  author    = {${authors}},`);
      lines.push(`  title     = {${title}},`);
      lines.push(`  booktitle = {${venue||"Conference"}},`);
      if(year) lines.push(`  year      = {${year}},`);
    }
    // remove trailing comma on the last field
    lines[lines.length-1]=lines[lines.length-1].replace(/,$/,"");
    lines.push("}");
    return lines.join("\n");
  }

  function buildPanel(bib){
    const box=document.createElement("div");box.className="bibtex-box";
    const copy=document.createElement("button");copy.className="bibtex-copy";copy.textContent="Copy";
    copy.onclick=()=>{navigator.clipboard.writeText(bib).then(()=>{copy.textContent="Copied!";setTimeout(()=>copy.textContent="Copy",1200);});};
    const pre=document.createElement("pre");pre.textContent=bib;
    box.appendChild(copy);box.appendChild(pre);return box;
  }

  // *** YOUR ORIGINAL addButtons — UNCHANGED ***
  function addButtons(){
    document.querySelectorAll("li").forEach(li=>{
      if(li.querySelector(".bibtex-btn"))return;
      if(!/(19|20)\d{2}/.test(li.textContent))return;
      const btn=document.createElement("button");btn.className="bibtex-btn";btn.textContent="BibTex";
      btn.onclick=()=>{document.querySelectorAll(".bibtex-box").forEach(b=>b.remove());const bib=fallbackBib(li,quotedTitle(li));btn.insertAdjacentElement("afterend",buildPanel(bib));};
      li.appendChild(document.createElement("br"));li.appendChild(btn);
    });
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",addButtons);}else{addButtons();}
})();
</script>
