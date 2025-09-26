---
permalink: /publications/
title: "Publications"
---

---

# 📄 Journal Publications

<ol>

<!-- //======================== PAPER 1 ======================== -->
<li>
  H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,  
  "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"  
  <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)

  <details style="display:block; margin-top:6px;">
    <summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;">
      <span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:8px; color:#0F766E; font-weight:600; font-size:12px; line-height:1;">BibTeX</span>
    </summary>

    <div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;">
      <!-- 👇 Paste/edit BibTeX here -->
      <pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;">
<code id="bibtex-2">
// ===== BEGIN BIBTEX =====
@article{nguyen2025energy,
  title        = {Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems},
  author       = {Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal      = {IEEE Journal on Selected Areas in Communications},
  year         = {2025},
  note         = {accepted},
  url          = {https://www.arxiv.org/pdf/2509.10290}
}
// ===== END BIBTEX =====
</code></pre>

      <button
        style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;"
        onclick="copyBib('bibtex-2', this); return false;">
        Copy
      </button>
    </div>
  </details>
</li>

<!-- //======================== PAPER 2 ======================== -->
<li>
  A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
  "<a href="https://arxiv.org/pdf/2503.14054" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"  
  <span><em>IEEE Communications Letters</em></span>, 2025. (accepted)

  <details style="display:block; margin-top:6px;">
    <summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;">
      <span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:8px; color:#0F766E; font-weight:600; font-size:12px; line-height:1;">BibTeX</span>
    </summary>

    <div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;">
      <!-- 👇 Paste/edit BibTeX here -->
      <pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;">
<code id="bibtex-3">
// ===== BEGIN BIBTEX =====
@article{zaker2025dynamic,
  title        = {Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach},
  author       = {Zaker, Abolfazl and Nguyen, Nhan Thanh and Alkhateeb, Ahmed and Juntti, Markku},
  journal      = {IEEE Communications Letters},
  year         = {2025},
  note         = {accepted},
  url          = {https://arxiv.org/pdf/2503.14054}
}
// ===== END BIBTEX =====
</code></pre>

      <button
        style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;"
        onclick="copyBib('bibtex-3', this); return false;">
        Copy
      </button>
    </div>
  </details>
</li>

</ol>

<!-- Tiny helper: copies from the visible <code> text (single source). -->
<script>
function copyBib(codeId, btn){
  const code = document.getElementById(codeId);
  if(!code) return;
  const ta = document.createElement('textarea');
  ta.value = code.textContent;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  let ok = false;
  try { ok = document.execCommand('copy'); } catch(e){}
  document.body.removeChild(ta);
  const old = btn.textContent;
  btn.textContent = ok ? 'Copied!' : 'Copy';
  setTimeout(()=>{ btn.textContent = old; }, 1200);
}
</script>
