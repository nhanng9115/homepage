---
permalink: /publications/
title: "Publications"
---

---

# 📄 Journal Publications

<ol>
  <li data-bibtex-key="nguyen2025energy">
    H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,
    "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"
    <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)
  </li>

  <!-- ===== Paper 2 ===== -->
  <li data-bibtex-key="zaker2025dynamic">
    A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,
    "<a href="https://arxiv.org/pdf/2503.14054" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"
    <span><em>IEEE Communications Letters</em></span>, 2025. (accepted)
  </li>
</ol>

<style>
  .bibtex-btn{font:inherit;padding:6px 12px;border:1px solid #d0d0d0;border-radius:10px;background:#fff;cursor:pointer;margin-top:6px}
  .bibtex-btn:hover{background:#f6f6f6}
  .bibtex-box{position:relative;margin-top:8px;padding:10px;background:#ffeef3;border:1px solid #ffd6e1;border-radius:12px;white-space:pre-wrap}
  .bibtex-copy{position:absolute;right:10px;top:8px;padding:4px 10px;border:1px solid #d0d0d0;border-radius:8px;background:#fff;cursor:pointer}
</style>

<!-- 🔽 Paste your exact BibTeX here. Keys must match data-bibtex-key above. -->
<script type="application/x-bibtex" id="bibtex-data">
@article{nguyen2025energy,
  title        = {Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems},
  author       = {Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal      = {IEEE Journal on Selected Areas in Communications},
  year         = {2025},
  note         = {accepted},
  url          = {https://www.arxiv.org/pdf/2509.10290}
}

@article{zaker2025dynamic,
  title        = {Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach},
  author       = {Zaker, Abolfazl and Nguyen, Nhan Thanh and Alkhateeb, Ahmed and Juntti, Markku},
  journal      = {IEEE Communications Letters},
  year         = {2025},
  note         = {accepted},
  url          = {https://arxiv.org/pdf/2503.14054}
}
</script>

<script>
(function(){
  // ---------- helpers ----------
  function clean(s){return (s||"").replace(/\s+/g," ").trim();}
  function firstLink(el){const a=el.querySelector("a[href]");return a?a.href:null;}
  function quotedTitle(li){
    const m=li.innerHTML.match(/"([^"]{3,})"/);
    if(m) return m[1].trim();
    const a=li.querySelector("a[href]");
    return a?clean(a.textContent):null;
  }
  function normTitle(t){
    return clean(t||"")
      .toLowerCase()
      .replace(/[\u2010-\u2015]/g,"-")     // normalize dashes
      .replace(/[^a-z0-9]+/g," ");         // strip punctuation
  }

  // ---------- very small BibTeX "parser" that also preserves raw ----------
  function parseBibtex(raw){
    const mapByKey = new Map();
    const mapByTitle = new Map();
    const rx = /@(\w+)\s*{\s*([^,]+)\s*,([\s\S]*?)\n}\s*/g;
    let m;
    while((m = rx.exec(raw)) !== null){
      const type = m[1].trim();
      const key  = m[2].trim();
      const body = m[3];
      const rawEntry = m[0].trim();

      // find title field (best-effort)
      let title = "";
      const titleMatch = body.match(/\btitle\s*=\s*({([^{}]+)}|"([^"]+)")/i);
      if(titleMatch){
        title = (titleMatch[2]||titleMatch[3]||"").trim();
      }

      mapByKey.set(key, {type, key, raw: rawEntry, title});
      if(title) mapByTitle.set(normTitle(title), {type, key, raw: rawEntry, title});
    }
    return {mapByKey, mapByTitle};
  }

  // ---------- fallback (your original generator) ----------
  function fallbackBib(li,title){
    const txt=clean(li.textContent),url=firstLink(li);
    const before=title?(txt.split(` "${title}"`)[0]||txt.split(title)[0]||txt):txt;
    const authors=clean(before.replace(/,\s*$/,""));
    const em=li.querySelector("em");const venue=em?clean(em.textContent):"";
    const year=(txt.match(/(19|20)\d{2}/)||[,""])[1];
    const isJournal=/Transactions|Journal|Letters/i.test(venue);
    const key=(authors.split(",")[0]||"key").split(" ").pop().replace(/[^A-Za-z]/g,"")+(year||"");
    return isJournal?
`@article{${key},
  author={${authors}},
  title={${title||"Untitled"}},
  journal={${venue}},
  year={${year}}${url?`,\n  url={${url}}`:""}
}`:
`@inproceedings{${key},
  author={${authors}},
  title={${title||"Untitled"}},
  booktitle={${venue||"Conference"}},
  year={${year}}${url?`,\n  url={${url}}`:""}
}`;
  }

  function buildPanel(bib){
    const box=document.createElement("div");box.className="bibtex-box";
    const copy=document.createElement("button");copy.className="bibtex-copy";copy.textContent="Copy";
    copy.onclick=()=>{navigator.clipboard.writeText(bib).then(()=>{copy.textContent="Copied!";setTimeout(()=>copy.textContent="Copy",1200);});};
    const pre=document.createElement("pre");pre.textContent=bib;
    box.appendChild(copy);box.appendChild(pre);return box;
  }

  function addButtons(){
    // parse provided bibtex once
    const rawBib = document.getElementById("bibtex-data")?.textContent || "";
    const {mapByKey, mapByTitle} = parseBibtex(rawBib);

    document.querySelectorAll("ol li, ul li").forEach(li=>{
      if(li.querySelector(".bibtex-btn")) return;
      if(!/(19|20)\d{2}/.test(li.textContent)) return;

      const btn=document.createElement("button");btn.className="bibtex-btn";btn.textContent="BibTeX";

      btn.onclick=()=>{
        document.querySelectorAll(".bibtex-box").forEach(b=>b.remove());

        // 1) prefer explicit key
        const key = li.getAttribute("data-bibtex-key");
        let bib = null;
        if(key && mapByKey.has(key)) bib = mapByKey.get(key).raw;

        // 2) fallback by normalized title
        if(!bib){
          const t = quotedTitle(li);
          const hit = t ? mapByTitle.get(normTitle(t)) : null;
          if(hit) bib = hit.raw;
        }

        // 3) last resort: auto-generate
        if(!bib){
          bib = fallbackBib(li, quotedTitle(li));
        }

        btn.insertAdjacentElement("afterend", buildPanel(bib));
      };

      li.appendChild(document.createElement("br"));
      li.appendChild(btn);
    });
  }

  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",addButtons);}else{addButtons();}
})();
</script>
