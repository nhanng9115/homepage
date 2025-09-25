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

</ol>
<script>
(function(){
  function clean(s){return (s||"").replace(/\s+/g," ").trim();}
  function firstLink(el){const a=el.querySelector("a[href]");return a?a.href:null;}
  function quotedTitle(li){const m=li.innerHTML.match(/"([^"]{3,})"/);if(m)return m[1].trim();const a=li.querySelector("a[href]");return a?clean(a.textContent):null;}

  // NEW: robustly extract authors = everything before the first <a>
  function authorsFromDOM(li){
    let out = "";
    for(const node of li.childNodes){
      if(node.nodeType === 1 && node.tagName === "A") break; // stop when we reach the first link (title)
      if(node.nodeType === 3) out += node.nodeValue;         // plain text
      else if(node.nodeType === 1) out += " " + node.textContent; // include <strong> etc.
    }
    out = clean(out);
    return out.replace(/,\s*$/,""); // drop trailing comma if present
  }

  // CHANGED: build minimal BibTeX with authors only (keep buttons working)
  function fallbackBib(li,title){
    const authors = authorsFromDOM(li) || "Unknown";
    // simple key = last token of first author (letters only)
    const firstAuthor = clean((authors.split(",")[0]||"key"));
    const key = (firstAuthor.split(/\s+/).pop()||"key").replace(/[^A-Za-z]/g,"") || "key";
    return `@misc{${key},
  author = {${authors}}
}`;
  }

  function buildPanel(bib){
    const box=document.createElement("div");box.className="bibtex-box";
    const copy=document.createElement("button");copy.className="bibtex-copy";copy.textContent="Copy";
    copy.onclick=()=>{navigator.clipboard.writeText(bib).then(()=>{copy.textContent="Copied!";setTimeout(()=>copy.textContent="Copy",1200);});};
    const pre=document.createElement("pre");pre.textContent=bib;box.appendChild(copy);box.appendChild(pre);return box;
  }

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
