---
permalink: /publications/
title: "Publications"
---

---

<style>
/* --- Exciting Cosmic Neon palette with fixed dark mode --- */
:root{
  /* Light mode (unchanged) */
  --link:#7C3AED;            /* violet-600 */
  --link-hover:#DB2777;      /* pink-600 */
  --bib-bg:#F5F3FF;          /* violet-50 */
  --bib-bg-hover:#EDE9FE;    /* violet-100 */
  --bib-border:#A855F7;      /* violet-400 */
  --bib-text:#1E293B;        /* slate-900 */
}
@media (prefers-color-scheme: dark){
  :root{
    --link:#22D3EE;          /* cyan-400, bright aqua */
    --link-hover:#06B6D4;    /* cyan-500, deeper teal */
    --bib-bg:#1E293B;        /* slate-800, softer dark */
    --bib-bg-hover:#334155;  /* slate-700, lighter hover */
    --bib-border:#38BDF8;    /* cyan-300 */
    --bib-text:#F8FAFC;      /* slate-50, nearly white */
  }
}





  /* Paper title links (keep underline) */
  ol li > a[href]{
    color:var(--link) !important;
    text-decoration:underline;
    text-decoration-color:var(--link);
    text-underline-offset:2px;
    text-decoration-thickness:1.5px;
    transition:color .15s ease, text-decoration-color .15s ease;
  }
  ol li > a[href]:hover,
  ol li > a[href]:focus{
    color:var(--link-hover) !important;
    text-decoration-color:var(--link-hover);
    outline:none;
  }

  /* “BibTex” button (matches your inline span inside <summary>) */
  details > summary > span[style*="min-width:84px"]{
    background:var(--bib-bg) !important;
    border-color:var(--bib-border) !important;
    color:var(--bib-text) !important;
    transition:background-color .15s ease, color .15s ease, border-color .15s ease;
  }
  details[open] > summary > span[style*="min-width:84px"],
  details > summary > span[style*="min-width:84px"]:hover,
  details > summary > span[style*="min-width:84px"]:focus{
    background:var(--bib-bg-hover) !important;
    border-color:var(--bib-border) !important;
    color:var(--bib-text) !important;
    outline:none;
  }
</style>


# 📄 Journal Publications

<ol>

<li>
  H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,  
  "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"  
  <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)

  <!-- ===== BibTex button on a separate line (left), panel left-aligned ===== -->
  <details style="display:block; margin-top:6px;">
    <summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;">
      <span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:8px; color:#0F766E; font-weight:600; font-size:12px; line-height:1;">BibTex</span>
    </summary>

    <div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;">
      <pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-2">@article{nguyen2025energy,
  title={Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems},
  author={Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal={IEEE Journal on Selected Areas in Communications},
  year={2025},
  publisher={IEEE}
}</code></pre>

      <textarea id="bibtex-2-src" readonly style="position:absolute; left:-9999px; top:-9999px;">@article{nguyen2025energy,
  title={Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems},&#13;
  author={Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},&#13;
  journal={IEEE Journal on Selected Areas in Communications},&#13;
  year={2025},&#13;
  publisher={IEEE}&#13;
}</textarea>

      <button
        style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;"
        onclick="(function(btn){var ta=document.getElementById('bibtex-2-src');ta.select();ta.setSelectionRange(0,999999);var ok=false;try{ok=document.execCommand('copy')}catch(e){}if(!ok&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(ta.value).then(function(){ok=true}).catch(function(){})}var old=btn.textContent;btn.textContent=ok?'Copied!':'Copy';setTimeout(function(){btn.textContent=old},1200)})(this);return false;">
        Copy
      </button>
    </div>
  </details>
</li>

<li>
A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2503.14054" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"  
<span><em>IEEE Communications Letters</em></span>, 2025. (accepted)

<!-- ===== BibTex button on a separate line (left), panel left-aligned ===== -->
<details style="display:block; margin-top:6px;">
  <summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;">
    <span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:8px; color:#0F766E; font-weight:600; font-size:12px; line-height:1;">BibTex</span>
  </summary>

  <div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;">
    <pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-3">@article{ZakerCL2025,
  author = {Zaker, A. and Nguyen, N. T. and Alkhateeb, A. and Juntti, M.},
  title = {Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach},
  journal = {IEEE Communications Letters},
  year = {2025},
}</code></pre>

    <textarea id="bibtex-3-src" readonly style="position:absolute; left:-9999px; top:-9999px;">@article{ZakerCL2025,&#13;
  author = {Zaker, A. and Nguyen, N. T. and Alkhateeb, A. and Juntti, M.},&#13;
  title = {Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach},&#13;
  journal = {IEEE Communications Letters},&#13;
  year = {2025},&#13;
}</textarea>

    <button
      style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;"
      onclick="(function(btn){var ta=document.getElementById('bibtex-3-src');ta.select();ta.setSelectionRange(0,999999);var ok=false;try{ok=document.execCommand('copy')}catch(e){}if(!ok&&navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(ta.value).then(function(){ok=true}).catch(function(){})}var old=btn.textContent;btn.textContent=ok?'Copied!':'Copy';setTimeout(function(){btn.textContent=old},1200)})(this);return false;">
      Copy
    </button>
  </div>
</details>
</li>

</ol>

