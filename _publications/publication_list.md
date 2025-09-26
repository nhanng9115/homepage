---
permalink: /publications/
title: "Publications"
---

<style>
:root{
  --link:#7C3AED; --link-hover:#DB2777;
  --bib-bg:#F5F3FF; --bib-bg-hover:#EDE9FE;
  --bib-border:#A855F7; --bib-text:#1E293B;
}
@media (prefers-color-scheme: dark){
  :root{
    --link:#22D3EE; --link-hover:#06B6D4;
    --bib-bg:#1E293B; --bib-bg-hover:#334155;
    --bib-border:#38BDF8; --bib-text:#F8FAFC;
  }
}
ol li > a[href]{color:var(--link)!important;text-decoration:underline;
  text-decoration-color:var(--link);text-underline-offset:2px;text-decoration-thickness:1.5px;
  transition:color .15s,text-decoration-color .15s ease;}
ol li > a[href]:hover,ol li > a[href]:focus{color:var(--link-hover)!important;text-decoration-color:var(--link-hover);outline:none;}
details > summary > span[data-bibbtn]{background:var(--bib-bg)!important;border:1px solid var(--bib-border)!important;
  color:var(--bib-text)!important;border-radius:8px;font-weight:600;font-size:12px;line-height:1;
  padding:2px 10px;min-width:84px;text-align:center;}
details[open] > summary > span[data-bibbtn],details > summary > span[data-bibbtn]:hover{background:var(--bib-bg-hover)!important;}
.bibtex-panel{position:relative;margin-top:8px;background:#ffeef5;border:1px solid #f6c5db;border-radius:8px;padding:10px;text-align:left;}
.bibtex-pre{margin:0;overflow:auto;font-size:12px;line-height:1.25;white-space:pre;}
.bibtex-copy{position:absolute;top:6px;right:6px;border:1px solid #94A3B8;background:#F1F5F9;border-radius:6px;padding:2px 8px;font-size:12px;cursor:pointer;}
.bibtex-hidden{position:absolute;left:-9999px;top:-9999px;}
</style>

# 📄 Journal Publications

{%- comment -%}
  Paste each paper's BibTeX ONCE inside a {% capture %} block,
  then we reuse it for visible <pre> and hidden <textarea>.
{%- endcomment -%}

{%- capture bib_nguyen2025 -%}
@article{nguyen2025energy,
  title        = {Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems},
  author       = {Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal      = {IEEE Journal on Selected Areas in Communications},
  year         = {2025},
  note         = {accepted},
  url          = {https://www.arxiv.org/pdf/2509.10290}
}
{%- endcapture -%}

{%- capture bib_zaker2025 -%}
@article{zaker2025dynamic,
  title        = {Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach},
  author       = {Zaker, Abolfazl and Nguyen, Nhan Thanh and Alkhateeb, Ahmed and Juntti, Markku},
  journal      = {IEEE Communications Letters},
  year         = {2025},
  note         = {accepted},
  url          = {https://arxiv.org/pdf/2503.14054}
}
{%- endcapture -%}

<ol>

  <li>
    H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,  
    "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"  
    <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)

    <details style="display:block; margin-top:6px;">
      <summary style="display:flex;justify-content:flex-start;align-items:center;list-style:none;cursor:pointer;padding:0;">
        <span data-bibbtn>BibTeX</span>
      </summary>
      <div class="bibtex-panel">
        <!-- Visible code block: escape HTML so braces etc. render correctly -->
        <pre class="bibtex-pre"><code>{{ bib_nguyen2025 | escape }}</code></pre>

        <!-- Hidden textarea: raw text for the Copy button -->
        <textarea id="bib-nguyen2025" class="bibtex-hidden" readonly>{{- bib_nguyen2025 -}}</textarea>

        <button class="bibtex-copy" data-copysrc="bib-nguyen2025">Copy</button>
      </div>
    </details>
  </li>

  <li>
    A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
    "<a href="https://arxiv.org/pdf/2503.14054" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"  
    <span><em>IEEE Communications Letters</em></span>, 2025. (accepted)

    <details style="display:block; margin-top:6px;">
      <summary style="display:flex;justify-content:flex-start;align-items:center;list-style:none;cursor:pointer;padding:0;">
        <span data-bibbtn>BibTeX</span>
      </summary>
      <div class="bibtex-panel">
        <pre class="bibtex-pre"><code>{{ bib_zaker2025 | escape }}</code></pre>
        <textarea id="bib-zaker2025" class="bibtex-hidden" readonly>{{- bib_zaker2025 -}}</textarea>
        <button class="bibtex-copy" data-copysrc="bib-zaker2025">Copy</button>
      </div>
    </details>
  </li>

</ol>

<!-- Tiny copy helper. If inline JS is blocked, BibTeX still shows; only Copy won't work. -->
<script>
(function(){
  document.querySelectorAll('.bibtex-copy[data-copysrc]').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const id = btn.getAttribute('data-copysrc');
      const ta = document.getElementById(id);
      if(!ta) return;
      let ok=false;
      try{
        if(navigator.clipboard?.writeText){ await navigator.clipboard.writeText(ta.value); ok=true; }
        else { ta.select(); document.execCommand('copy'); ok=true; }
      }catch(e){}
      const old=btn.textContent;
      btn.textContent = ok ? 'Copied!' : 'Copy';
      setTimeout(()=>btn.textContent=old,1200);
    });
  });
})();
</script>
