---
permalink: /publications/
title: "Publications"
---

---

# 📄 Journal Publications

<ol>
  <!-- ===== Paper 1 ===== -->
  <li>
    H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,
    "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"
    <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)

    <!-- Hidden BibTeX (protected from Liquid by raw tags) -->
    {% raw %}
    <pre class="bibtex-data" style="display:none">
@article{nguyen2025energy,
  title={Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems},
  author={Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal={IEEE Journal on Selected Areas in Communications},
  year={2025},
  publisher={IEEE}
}
    </pre>
    {% endraw %}
  </li>

  <!-- ===== Paper 2 ===== -->
  <li>
    A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,
    "<a href="https://arxiv.org/pdf/2503.14054" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"
    <span><em>IEEE Communications Letters</em></span>, 2025. (accepted)

    <!-- Hidden BibTeX (protected from Liquid by raw tags) -->
    {% raw %}
    <pre class="bibtex-data" style="display:none">
@article{zakeri2025dynamic,
  title={Dynamic Joint Communications and Sensing Precoding Design: A Lyapunov Approach},
  author={Zakeri, Abolfazl and Nguyen, Nhan Thanh and Alkhateeb, Ahmed and Juntti, Markku},
  journal={arXiv preprint arXiv:2503.14054},
  year={2025}
}
    </pre>
    {% endraw %}
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
  function buildPanel(bib){
    const box=document.createElement("div");
    box.className="bibtex-box";

    const copy=document.createElement("button");
    copy.className="bibtex-copy";
    copy.textContent="Copy";
    copy.addEventListener("click", ()=>{
      navigator.clipboard.writeText(bib).then(()=>{
        copy.textContent="Copied!";
        setTimeout(()=>copy.textContent="Copy",1200);
      });
    });

    const pre=document.createElement("pre");
    pre.textContent=bib;

    box.appendChild(copy);
    box.appendChild(pre);
    return box;
  }

  function addButtons(){
    document.querySelectorAll("li").forEach(li=>{
      if(li.querySelector(".bibtex-btn")) return;
      const data = li.querySelector(".bibtex-data");
      if(!data) return; // only add if hidden BibTeX exists

      const btn=document.createElement("button");
      btn.className="bibtex-btn";
      btn.textContent="BibTeX";

      btn.addEventListener("click", ()=>{
        // remove any existing panels in THIS li
        li.querySelectorAll(".bibtex-box").forEach(b=>b.remove());
        const bib = (data.textContent || data.innerText || "").trim();
        btn.insertAdjacentElement("afterend", buildPanel(bib));
      });

      li.appendChild(document.createElement("br"));
      li.appendChild(btn);
    });
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded", addButtons);
  } else {
    addButtons();
  }
  window.addEventListener("load", ()=>setTimeout(addButtons,0));
})();
</script>
