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

    <!-- 🔽 Paste the exact Google Scholar BibTeX for THIS item here -->
    <script type="application/x-bibtex" class="bibtex-data">
@article{nguyen2025energy,
  title={Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems},
  author={Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal={IEEE Journal on Selected Areas in Communications},
  year={2025},
  publisher={IEEE}
}
    </script>
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
  function clean(s){return (s||"").replace(/\s+\n/g,"\n").replace(/\n\s+/g,"\n").trim();}

  function buildPanel(bib){
    const box = document.createElement("div");
    box.className = "bibtex-box";

    const copy = document.createElement("button");
    copy.className = "bibtex-copy";
    copy.textContent = "Copy";
    copy.onclick = () => {
      navigator.clipboard.writeText(bib).then(()=>{
        copy.textContent = "Copied!";
        setTimeout(()=>copy.textContent="Copy", 1200);
      });
    };

    const pre = document.createElement("pre");
    pre.textContent = bib;

    box.appendChild(copy);
    box.appendChild(pre);
    return box;
  }

  function addButtons(){
    document.querySelectorAll("ol li").forEach(li=>{
      // Only add a button if there is embedded BibTeX data
      const data = li.querySelector("script.bibtex-data[type='application/x-bibtex']");
      if(!data) return;
      if(li.querySelector(".bibtex-btn")) return; // already added

      const btn = document.createElement("button");
      btn.className = "bibtex-btn";
      btn.textContent = "BibTeX";

      btn.onclick = () => {
        // Close any open panels in this LI
        li.querySelectorAll(".bibtex-box").forEach(b=>b.remove());
        // Show current
        const bib = clean(data.textContent || data.innerText || "");
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
  // in case of late content hydration
  window.addEventListener("load", ()=> setTimeout(addButtons, 0));
})();
</script>
