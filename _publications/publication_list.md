---
permalink: /publications/
title: "Publications"
---

---

# 📄 Journal Publications

<ol>
<li> H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas, "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>," <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted) </li>
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
  function quotedTitle(li){
    const m=li.innerHTML.match(/"([^"]{3,})"/);
    if(m) return m[1].trim();
    const a=li.querySelector("a[href]");
    return a?clean(a.textContent):null;
  }

  // NEW: return a BibTeX snippet with authors only
  function authorsOnlyBib(li,title){
    const txt=clean(li.textContent);
    // everything before the title should be the authors list
    const before = title ? (txt.split(` "${title}"`)[0] || txt.split(title)[0] || txt) : txt;
    // strip trailing commas/spaces
    let authors = clean(before.replace(/,\s*$/,""));

    // Convert common list formats to BibTeX-friendly "and"-separated list
    // 1) remove Oxford-style ", and " to just ", "
    authors = authors.replace(/,\s*and\s+/i, ", ");
    // 2) split by commas
    const parts = authors.split(/\s*,\s*/).filter(Boolean);
    // 3) join with " and "
    const authorsAnd = parts.join(" and ");

    // Keep a simple @misc with only author — as requested
    const yearMatch = txt.match(/\b(19|20)\d{2}\b/);
    const year = yearMatch ? yearMatch[0] : "";
    const key = (parts[0] || "key").split(" ").pop().replace(/[^A-Za-z]/g,"") + (year || "");

    return `@misc{${key},
  author = {${authorsAnd}}
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
      btn.onclick=()=>{
        document.querySelectorAll(".bibtex-box").forEach(b=>b.remove());
        const bib=authorsOnlyBib(li,quotedTitle(li));
        btn.insertAdjacentElement("afterend",buildPanel(bib));
      };
      li.appendChild(document.createElement("br"));li.appendChild(btn);
    });
  }

  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",addButtons);}else{addButtons();}
})();
</script>
