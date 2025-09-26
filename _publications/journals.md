---
permalink: /publications/
title: "Publications"
layout: default
---
# 📝 Submitted and Under Revision  
<style>
/* --- Wider page just here --- */
@media (min-width: 992px){
  .pub-breakout{
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    padding: 0 16px;
    max-width: none !important;
  }
}

/* --- Responsive 1/2/3 column grid --- */
.pub-grid{
  display: grid;
  gap: 24px;
}
@media (min-width: 640px){ .pub-grid{ grid-template-columns: repeat(2, minmax(0,1fr)); } }
@media (min-width: 1024px){ .pub-grid{ grid-template-columns: repeat(3, minmax(0,1fr)); } }

/* Column cards */
.pub-col{
  background: var(--pub-card-bg, #ffffff);
  border: 1px solid var(--pub-card-bd, #e5e7eb);
  border-radius: 12px;
  padding: 16px;
}
@media (prefers-color-scheme: dark){
  :root{
    --pub-card-bg:#0b1220; --pub-card-bd:#233045;
  }
}

.pub-col h2{
  margin: 0 0 10px 0;
  font-size: 1.25rem;
}
.pub-col ol{ margin: 0; padding-left: 1.1em; }
.pub-col li{ margin-bottom: 12px; }

/* Keep long BibTeX blocks scrollable */
pre{ overflow:auto; }

/* Optional: nicer link underline */
.pub-col ol li > a[href]{ text-decoration: underline; text-underline-offset: 2px; }
</style>

<div class="pub-breakout">
  <h1>Publications</h1>

  <div class="pub-grid">

    <!-- ======================== COLUMN A: Submitted & Under Revision ======================== -->
    <section class="pub-col">
      <h2>Submitted &amp; Under Revision</h2>
      <!-- Paste your SUBMITTED list items here -->
      <ol>
        <!-- example -->
        <li>
          M. Ma, <strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, and M. Juntti,  
          "<a href="https://arxiv.org/pdf/2509.11725" target="_blank">Attention-Enhanced Learning for Sensing-Assisted Long-Term Beam Tracking in mmWave Communications</a>,"
          <span><em>IEEE ICASSP</em></span>, 2025. (<strong>submitted</strong>)
          <!-- one-line BibTeX wrapper (leave as-is, replace BIBTEX when ready) -->
          <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:8px; color:#0F766E; font-weight:600; font-size:12px; line-height:1;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s1">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s1', this); return false;">Copy</button></div></details>
        </li>

        <!-- paste the rest of your SUBMISSION items (s2…s13) here in the same format -->
      </ol>
    </section>

    <!-- ======================== COLUMN B: Journal Publications ======================== -->
    <section class="pub-col">
      <h2>Journal Publications</h2>
      <!-- Paste your JOURNAL list items here -->
      <ol>
        <!-- example -->
        <li>
          H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,  
          "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"
          <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)
          <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:8px; color:#0F766E; font-weight:600; font-size:12px; line-height:1;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-j1">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-j1', this); return false;">Copy</button></div></details>
        </li>

        <!-- paste the rest of your JOURNAL items here -->
      </ol>
    </section>

    <!-- ======================== COLUMN C: Conference Publications ======================== -->
    <section class="pub-col">
      <h2>Conference Publications</h2>
      <!-- Paste your CONFERENCE list items here -->
      <ol>
        <!-- example -->
        <li>
          A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
          "<a href="https://arxiv.org/pdf/2503.14054" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"
          <span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, 2025.
          <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:8px; color:#0F766E; font-weight:600; font-size:12px; line-height:1;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-c1">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-c1', this); return false;">Copy</button></div></details>
        </li>

        <!-- paste the rest of your CONFERENCE items here -->
      </ol>
    </section>

  </div>
</div>

<!-- Your existing copy helper (unchanged) -->
<script>
function copyBib(codeId, btn){
  const code = document.getElementById(codeId);
  if(!code) return;
  const ta = document.createElement('textarea');
  ta.value = code.textContent;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.focus(); ta.select();
  let ok=false; try{ ok=document.execCommand('copy'); }catch(e){}
  document.body.removeChild(ta);
  const old=btn.textContent; btn.textContent= ok ? 'Copied!' : 'Copy';
  setTimeout(()=>{ btn.textContent=old; }, 1200);
}
</script>
