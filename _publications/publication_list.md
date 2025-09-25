---
permalink: /publications/
title: "Publications"
---

# 📄 Journal Publications

<ol>

<li>
  H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,
  "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"
  <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)
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

  // Authors = everything before the first <a>
  function authorsFromDOM(li){
    let out = "";
    for(const node of li.childNodes){
      if(node.nodeType === 1 && node.tagName === "A") break; // stop at first link (title)
      if(node.nodeType === 3) out += node.nodeValue;
      else if(node.nodeType === 1) out += " " + node.textContent; // include <strong> etc.
    }
    out = clean(out);
    return out.replace(/,\s*$/,""); // drop trailing comma
  }

  // Minimal BibTeX: authors only (for debugging buttons + parsing)
  function fallbackBib(li){
    const authors = authorsFromDOM(li) || "Unknown";
    const firstAuthor = clean((authors.split(",")[0]||"key"));
    const key = (firstAuthor.split(/\s+/).pop()||"key").replace(/[^A-Za-z]/g,"") || "key";
    return `@misc{${key},
  author = {${authors}}
}`;
  }

  function buildPanel(bib){
    const box = document.createElement("div"); box.className = "bibtex-box";
    const copy = document.createElement("button"); copy.className = "bibtex-copy"; copy.textContent = "Copy";
    copy.onclick = () => {
      navigator.clipboard.writeText(bib).then(()=>{
        copy.textContent = "Copied!";
        setTimeout(()=>copy.textContent="Copy", 1200);
      });
    };
    const pre = document.createElement("pre"); pre.textContent = bib;
    box.appendChild(copy); box.appendChild(pre);
    return box;
  }

  function addButtons(){
    document.querySelectorAll("ol > li").forEach(li=>{
      if(li.querySelector(".bibtex-btn")) return;
      // simple guard: only add to items that look like publications
      if(!/\b(19|20)\d{2}\b/.test(li.textContent)) return;

      const btn = document.createElement("button");
      btn.className = "bibtex-btn";
      btn.textContent = "BibTeX";
      btn.onclick = () => {
        document.querySelectorAll(".bibtex-box").forEach(b=>b.remove());
        const bib = fallbackBib(li);
        btn.insertAdjacentElement("afterend", buildPanel(bib));
      };

      li.appendChild(document.createElement("br"));
      li.appendChild(btn);
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", addButtons);
  }else{
    addButtons();
  }
})();
</script>
