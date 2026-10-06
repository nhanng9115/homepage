---
permalink: /publications/
title: "Publications"
show_bibtex: true   # change to false to hide BibTeX buttons
---

<style>
/* ======================================================================
   Muted, understated palette + compact two-column layout
   ====================================================================== */
:root {
  --acc: #7c3aed;          /* AI violet-purple */
  --acc2: #5b21b6;         /* deep purple */
  --acc-grad: linear-gradient(135deg, var(--acc), var(--acc2));
  --acc-dark: #4c1d95;
  --acc-soft: #f3ecfe;     /* light purple tint for chips/hover */
  --acc-border: #e2cffb;
  --card-bg: linear-gradient(135deg, #f7f1ff 0%, #f1e9fe 48%, #ece3fb 100%);
  --card-border: #ddc9f7;
  --ink: #1f2937;
  --muted: #64748b;
  --line: #e5e9ee;
  --warm: #a66a3b;         /* muted terracotta, used sparingly */
  --warm-soft: #faf1e8;
}

/* ---- Section titles ---- */
.pub-section-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 26px 0 12px 0;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--acc-border);
  display: inline-block;
  color: var(--ink);
}

/* ---- Stats strip: plain white cards with a colored icon chip ---- */
.pub-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 4px 0 24px 0;
}
.pub-stat-card {
  flex: 1 1 150px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: 0 1px 3px rgba(124, 58, 237, 0.07);
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}
.pub-stat-card:hover {
  box-shadow: 0 8px 18px rgba(124, 58, 237, 0.16);
  border-color: var(--acc);
  transform: translateY(-2px);
}
.pub-stat-icon {
  flex: 0 0 auto;
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: var(--acc-grad);
  box-shadow: 0 3px 8px rgba(124, 58, 237, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
}
.pub-stat-text { display: flex; flex-direction: column; line-height: 1.15; }
.pub-stat-num { font-size: 18px; font-weight: 800; color: var(--ink); }
.pub-stat-label { font-size: 10.5px; color: var(--muted); font-weight: 600; }

/* ---- Tabs ---- */
.pub-tabs { display: flex; gap: 8px; margin: 10px 0 20px 0; flex-wrap: wrap; }
.pub-tab-btn {
  padding: 7px 16px;
  border: 1px solid var(--acc-border);
  border-radius: 8px;
  background: #ffffff;
  color: var(--acc);
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.pub-tab-btn:hover { background: var(--acc-soft); border-color: var(--acc); color: var(--acc-dark); }
.pub-tab-btn.active {
  background: var(--acc-grad);
  border-color: transparent;
  color: #ffffff;
  box-shadow: 0 3px 10px rgba(124, 58, 237, 0.3);
}

/* ---- Card-style entries, two-column: content left / actions right ---- */
.pub-justify {
  list-style: none;
  padding-left: 0;
  counter-reset: pubnum;
}
.pub-justify li {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  text-align: left;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 9px 14px 9px 38px;
  margin-bottom: 7px;
  box-shadow: 0 1px 2px rgba(124, 58, 237, 0.05);
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}
/* While its BibTeX popover is open, lift this entry above the cards below
   it (a li with an active :hover transform otherwise creates its own
   stacking context and traps the popover under the next sibling card). */
.pub-justify li.pub-li-open {
  z-index: 40;
}
.pub-justify li:hover {
  box-shadow: 0 8px 18px rgba(124, 58, 237, 0.14);
  border-color: var(--acc);
  transform: translateY(-1px);
}
.pub-justify li::before {
  counter-increment: pubnum;
  content: counter(pubnum);
  position: absolute;
  left: 10px;
  top: 11px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--acc-grad);
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pub-main {
  flex: 1 1 380px;
  min-width: 0;
  text-align: justify;
  text-align-last: left;
  text-justify: inter-word;
  -webkit-hyphens: auto;
  hyphens: auto;
  line-height: 1.45;
}

/* Journal / conference name: soft violet-gray italic */
.pub-justify li span em {
  color: #5b67a3;
  font-weight: 500;
  font-style: italic;
}

/* Title links: calm ink color, no underline (the View Paper button already
   signals the link); accent color + underline only appears on hover */
.pub-justify li a {
  color: var(--ink) !important;
  font-weight: 600;
  text-decoration: none !important;
}
.pub-justify li a:hover {
  color: var(--acc) !important;
  text-decoration: underline !important;
}

/* ---- Right-hand actions column: View Paper + BibTeX, same button style ---- */
.pub-actions {
  flex: 0 0 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.pub-justify li a.pub-view-btn,
.pub-justify li summary span {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  width: 68px;
  padding: 3px 0 !important;
  border-radius: 6px !important;
  background: #ffffff !important;
  border: 1px solid var(--acc-border) !important;
  color: var(--acc-dark) !important;
  font-weight: 600 !important;
  font-size: 10.5px;
  text-decoration: none !important;
  white-space: nowrap;
  text-align: center;
  box-sizing: border-box;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
.pub-justify li a.pub-view-btn:hover,
.pub-justify li summary:hover span {
  background: var(--acc-grad) !important;
  border-color: transparent !important;
  color: #ffffff !important;
}

/* BibTeX toggle: button sits in the actions column, the revealed box pops
   out as a floating card so it never squeezes the narrow actions column */
.pub-justify li details {
  position: relative;
  display: block;
}
.pub-justify li summary {
  transition: filter 0.15s ease, transform 0.1s ease;
}
.pub-justify li summary:active { transform: scale(0.97); }
.pub-justify li details > div {
  position: absolute !important;
  top: calc(100% + 6px);
  right: 0;
  z-index: 30;
  width: 320px;
  max-width: 85vw;
  box-sizing: border-box;
  background: #fbfaff !important;
  border: 1px solid var(--acc-border) !important;
  box-shadow: 0 10px 24px rgba(124, 58, 237, 0.18) !important;
}
.pub-justify li details pre {
  white-space: pre-wrap !important;
  word-break: break-word;
}
.pub-justify li details > div button {
  background: #ffffff !important;
  border-color: var(--acc-border) !important;
  color: var(--acc) !important;
}
@keyframes pubBibReveal {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}
.pub-justify li details[open] > div {
  animation: pubBibReveal 0.2s ease;
}

@media (max-width: 680px) {
  .pub-justify li { flex-direction: column; align-items: stretch; justify-content: flex-start; padding: 9px 12px 9px 36px; }
  .pub-main { flex: 1 1 auto; }
  .pub-actions { flex: 0 0 auto; flex-direction: row; flex-wrap: wrap; justify-content: flex-start; align-items: flex-start; gap: 8px; margin-top: 4px; }
  .pub-justify li details > div {
    position: static !important;
    width: 100% !important;
    max-width: 100% !important;
    margin-top: 8px;
  }
}
</style>
{% unless page.show_bibtex %}
<style>
  details { display: none !important; }
</style>
{% endunless %}

<div class="pub-stats">
  <div class="pub-stat-card">
    <span class="pub-stat-icon">📚</span>
    <span class="pub-stat-text">
      <span class="pub-stat-num">57</span>
      <span class="pub-stat-label">Journal &amp; Book</span>
    </span>
  </div>
  <div class="pub-stat-card">
    <span class="pub-stat-icon">🎤</span>
    <span class="pub-stat-text">
      <span class="pub-stat-num">61</span>
      <span class="pub-stat-label">Conference Papers</span>
    </span>
  </div>
  <div class="pub-stat-card">
    <span class="pub-stat-icon">📝</span>
    <span class="pub-stat-text">
      <span class="pub-stat-num">16</span>
      <span class="pub-stat-label">Under Review</span>
    </span>
  </div>
  <div class="pub-stat-card">
    <span class="pub-stat-icon">&Sigma;</span>
    <span class="pub-stat-text">
      <span class="pub-stat-num">118</span>
      <span class="pub-stat-label">Total Publications</span>
    </span>
  </div>
</div>

<div class="pub-tabs">
  <button type="button" class="pub-tab-btn active" id="pub-tab-btn-journals" onclick="showPubTab('journals')">📚 Journals</button>
  <button type="button" class="pub-tab-btn" id="pub-tab-btn-conference" onclick="showPubTab('conference')">🎤 Conference Papers</button>
</div>

<div id="pubtab-journals" class="pubtab-panel">

<h2 class="pub-section-title">📘 Book Chapter</h2>

<ol class="pub-justify">
<li>
<div class="pub-main">
"<a href="https://www.wiley.com/en-us/6G+to+Build+a+Sustainable+Future-p-9781394363575#description-section" target="_blank">Integrated Sensing and Communication</a>,"  
<span><em>John Wiley & Sons</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://www.wiley.com/en-us/6G+to+Build+a+Sustainable+Future-p-9781394363575#description-section" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-1">@article{fang2025optimal,
  title={Integrated Sensing and Communication},
  author={Integrated Sensing and Communication},
  journal={John Wiley & Sons},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-1', this); return false;">Copy</button></div></details>
</div>
</li>


</ol>
  
<h2 class="pub-section-title">📝 Submitted and Under Revision</h2>

<ol class="pub-justify">

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
A. Raza, <strong>N. T. Nguyen</strong>, N. Shlezinger, and M. Juntti,    
"DoA Estimation Via Atomic Norm Approximation Using Model-Based Machine Learning," <span><em>IEEE Signal Processing Letters</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-2">@article{raza2026doa,
  title={DoA Estimation Via Atomic Norm Approximation Using Model-Based Machine Learning},
  author={A. Raza and N. T. Nguyen and N. Shlezinger and M. Juntti},
  journal={IEEE Signal Process. Lett.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-2', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
Huy T. Nguyen, Huy G. Tran, Trung Hieu Vu, Hoa T. Nguyen, <strong>N. T. Nguyen</strong>, Vo-Nguyen Quoc Bao,  
"Robust Energy-Efficient Design for Imperfect Integrated Sensing and Communication Systems," <span><em>International Conference on Computing and Communication Technologies (RIVF)</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-3">@inproceedings{nguyen2026robust,
  title={Robust Energy-Efficient Design for Imperfect Integrated Sensing and Communication Systems},
  author={Huy T. Nguyen and Huy G. Tran and Trung Hieu Vu and Hoa T. Nguyen and N. T. Nguyen and Vo-Nguyen Quoc Bao},
  booktitle={International Conference on Computing and Communication Technologies (RIVF)},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-3', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, P. N. Tran, M. Ma, H. T. Nguyen, A. Alkhateeb, and M. Juntti,  
"Energy-Efficient Spiking Neural Networks for Sensing-Aided Beam Prediction," <span><em>International Conference on Computing and Communication Technologies (RIVF)</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-4">@inproceedings{nguyen2026energyefficient,
  title={Energy-Efficient Spiking Neural Networks for Sensing-Aided Beam Prediction},
  author={N. T. Nguyen and P. N. Tran and M. Ma and H. T. Nguyen and A. Alkhateeb and M. Juntti},
  booktitle={International Conference on Computing and Communication Technologies (RIVF)},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-4', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, P. N. Tran, K. Deka, M. D. Renzo, A. G. Armada, and M. Juntti,  
"Spike-Native Neural Networks for Switch Configuration in Hybrid Beamforming," <span><em>IEEE International Conference on Communications (ICC)</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-5">@inproceedings{nguyen2026spikenative,
  title={Spike-Native Neural Networks for Switch Configuration in Hybrid Beamforming},
  author={N. T. Nguyen and P. N. Tran and K. Deka and M. D. Renzo and A. G. Armada and M. Juntti},
  booktitle={Proc. {IEEE} Int. Conf. Commun.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-5', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
L. Ribeiro, E. M. Taghavi, R. S. Bhagavathula, <strong>N. T. Nguyen</strong>, D. Kumar, M. Tayyab, M. Jada, D. Laselva, and M. Juntti,  
"Energy‑Efficient 6G Radio Networks: An Industry Review of Transmit Antenna and Power Adaptations," <span><em>IEEE Wireless Communications</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-6">@article{ribeiro2026energyefficient,
  title={Energy‑Efficient {6G} Radio Networks: An Industry Review of Transmit Antenna and Power Adaptations},
  author={L. Ribeiro and E. M. Taghavi and R. S. Bhagavathula and N. T. Nguyen and D. Kumar and M. Tayyab and M. Jada and D. Laselva and M. Juntti},
  journal={IEEE Wireless Commun. Mag.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-6', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
Vo P. S., V.-D. Nguyen, <strong>N. T. Nguyen</strong>, T.-V. Truong, and S. Shatzinotas,  
"Performance Analysis and Sensing-Aware Resource Allocation for FD mMIMO ISCC Networks," <span><em>IEEE Transactions on Wireless Communications</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-7">@article{s2026performance,
  title={Performance Analysis and Sensing-Aware Resource Allocation for {FD} {mMIMO} {ISCC} Networks},
  author={Vo P. S. and V.-D. Nguyen and N. T. Nguyen and T.-V. Truong and S. Shatzinotas},
  journal={IEEE Trans. Wireless Commun.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-7', this); return false;">Copy</button></div></details>
</div>
</li>


<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
S. Uniyal, T. Fang, V.-D. Nguye, H. Q. Ngo, M. Juntti, <strong>N. T. Nguyen</strong>,  
"<a href="https://arxiv.org/pdf/2609.18467" target="_blank">Massive MIMO ISAC Under Target-Angle Uncertainty: CRLB Outage Analysis and Robust Resource Allocation</a>," <span><em>IEEE Transactions on Signal Processing</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2609.18467" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-8">@article{uniyal2026massive,
  title={Massive {MIMO} {ISAC} Under Target-Angle Uncertainty: {CRLB} Outage Analysis and Robust Resource Allocation},
  author={S. Uniyal and T. Fang and V.-D. Nguye and H. Q. Ngo and M. Juntti and N. T. Nguyen},
  journal={IEEE Trans. Signal Process.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-8', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
A. S. Gharagezlou, P. Mobaraki, M. Monemi, <strong>N. T. Nguyen</strong>, M. Rasti, S. Ali, and M. Matti Latva-aho,  
"<a href="https://oulurepo.oulu.fi/handle/10024/64432" target="_blank">Deep-Unfolded Wideband ISAC Beamforming for DMA Under Frequency-Selective Lorentzian Model</a>," <span><em>IEEE Transactions on Communications</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/handle/10024/64432" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-9">@article{gharagezlou2026deepunfolded,
  title={Deep-Unfolded Wideband {ISAC} Beamforming for {DMA} Under Frequency-Selective Lorentzian Model},
  author={A. S. Gharagezlou and P. Mobaraki and M. Monemi and N. T. Nguyen and M. Rasti and S. Ali and M. Matti Latva-aho},
  journal={IEEE Trans. Commun.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-9', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
S. Tavakolian, A. Zaker, A. Alkhateeb, M. Juntti, and <strong>N. T. Nguyen</strong>,  
"GNN-enabled mmWave beam prediction using sub-6GHz channels in cell-free massive MIMO systems," <span><em>IEEE Transactions on Communications</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-10">@article{tavakolian2026gnnenabled,
  title={GNN-Enabled mmWave Beam Prediction Using Sub-6GHz Channels in Cell-Free Massive {MIMO} Systems},
  author={S. Tavakolian and A. Zaker and A. Alkhateeb and M. Juntti and N. T. Nguyen},
  journal={IEEE Trans. Commun.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-10', this); return false;">Copy</button></div></details>
</div>
</li>


<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
P. Mobaraki, A. Zaker, M. D. Renzo, M. Juntti, and  <strong>N. T. Nguyen</strong>,  
"<a href="https://arxiv.org/pdf/2607.04889" target="_blank">Energy Efficiency Maximization for Hybrid RIS-Aided Communications via Deep Unfolding</a>," <span><em>IEEE Transactions on Wireless Communications</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2607.04889" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-11">@article{mobaraki2026energy,
  title={Energy Efficiency Maximization for Hybrid {RIS}-Aided Communications Via Deep Unfolding},
  author={P. Mobaraki and A. Zaker and M. D. Renzo and M. Juntti and N. T. Nguyen},
  journal={IEEE Trans. Wireless Commun.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-11', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
C. K. Singh, S. Uniyal, <strong>N. T. Nguyen</strong>, A. S. d. Sena, S.-A. Kim, J. Kim, M. Latva-aho, and M. Juntti,  
"Performance Analysis of Hybrid STAR-RIS-Assisted Bistatic ISAC-RSMA Systems," <span><em>IEEE Transactions on Communications</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-12">@article{singh2026performance,
  title={Performance Analysis of Hybrid STAR-{RIS}-Assisted Bistatic {ISAC}-{RSMA} Systems},
  author={C. K. Singh and S. Uniyal and N. T. Nguyen and A. S. d. Sena and S.-A. Kim and J. Kim and M. Latva-aho and M. Juntti},
  journal={IEEE Trans. Commun.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-12', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
E. Ataeebojd, <strong>N. T. Nguyen</strong>, S. Yoo, J. Kang, M. Juntti, M. Latva-aho, and M. Rasti,  
"<a href="https://arxiv.org/pdf/2605.03558" target="_blank">Resource Allocation and AoI-Aware Detection for ISAC with Stacked Intelligent Metasurfaces</a>," <span><em>IEEE Transactions on Wireless Communications</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2605.03558" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-13">@article{ataeebojd2026resource,
  title={Resource Allocation and {AoI}-Aware Detection for {ISAC} With Stacked Intelligent Metasurfaces},
  author={E. Ataeebojd and N. T. Nguyen and S. Yoo and J. Kang and M. Juntti and M. Latva-aho and M. Rasti},
  journal={IEEE Trans. Wireless Commun.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-13', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
P. N. Tran, <strong>N. T. Nguyen</strong>, H. Q. Ngo, and M. Juntti,  
"Graph Attention DRL for Energy-Efficient Joint AP, Antenna, and Power Control in Cell-Free Networks," <span><em>IEEE Transactions on Wireless Communications</em></span>, 2026. (<strong>major revision</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-14">@article{tran2026graph,
  title={Graph Attention {DRL} for Energy-Efficient Joint AP, Antenna, and Power Control in Cell-Free Networks},
  author={P. N. Tran and N. T. Nguyen and H. Q. Ngo and M. Juntti},
  journal={IEEE Trans. Wireless Commun.},
  year={2026},
  note={major revision}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-14', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 6 ======================== -->
<li>
<div class="pub-main">
T. Fang, M. Ma, M. Juntti, I. Lee, J. Kang, and <strong>N. T. Nguyen</strong>,  
"<a href="https://oulurepo.oulu.fi/handle/10024/61879" target="_blank">Tri-Hybrid Beamforming Design for Large-Scale MIMO ISAC Systems</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/handle/10024/61879" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-15">@article{fang2026trihybrid,
  title={Tri-Hybrid Beamforming Design for Large-Scale {MIMO} {ISAC} Systems},
  author={T. Fang and M. Ma and M. Juntti and I. Lee and J. Kang and N. T. Nguyen},
  journal={IEEE Trans. Signal Process.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-15', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 5 ======================== -->
<li>
<div class="pub-main">
T. Fang, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"Deep Unfolded Shifted Power Iteration based ISAC Beamforming for Sum Rate and CRLB Balancing,"  
<span><em>IEEE Communications Letter</em></span>, 2026. (<strong>submitted</strong>)
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-16">@article{fang2026deep,
  title={Deep Unfolded Shifted Power Iteration Based {ISAC} Beamforming for Sum Rate and {CRLB} Balancing},
  author={T. Fang and N. T. Nguyen and M. Juntti},
  journal={IEEE Commun. Lett.},
  year={2026},
  note={submitted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-16', this); return false;">Copy</button></div></details>
</div>
</li>


<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
S. Uniyal, T. Fang, M. D. Renzo, M. Juntti, and <strong>N. T. Nguyen</strong>,  
"<a href="https://arxiv.org/pdf/2608.02169" target="_blank">Performance Analysis and Joint Beamforming for Hybrid RIS-Aided Massive MIMO ISAC</a>," <span><em>IEEE Transactions on Wireless Communications</em></span>, 2026. (<strong>minor revision</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2608.02169" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-17">@article{uniyal2026performance,
  title={Performance Analysis and Joint Beamforming for Hybrid {RIS}-Aided Massive {MIMO} {ISAC}},
  author={S. Uniyal and T. Fang and M. D. Renzo and M. Juntti and N. T. Nguyen},
  journal={IEEE Trans. Wireless Commun.},
  year={2026},
  note={minor revision}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-17', this); return false;">Copy</button></div></details>
</div>
</li>



</ol>


<hr style="height:6px;background:currentColor;border:0;border-radius:9999px;opacity:.6;margin:28px 0;">
<h2 class="pub-section-title">📄 Journal Publications</h2>

<ol class="pub-justify">

<!-- ======================== SUBMISSION 2 ======================== -->
<li>
<div class="pub-main">
M. Hatami, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/handle/10024/64538" target="_blank">Beamforming Design and Subcarrier Allocation for Multicarrier Multiuser MIMO ISAC</a>,"  
<span><em>IEEE Transactions on Communications</em></span>, 2026. (<strong>accepted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/handle/10024/64538" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-18">@article{ma2025knowledge,
  title={Beamforming Design and Subcarrier Allocation for Multicarrier Multiuser {MIMO} {ISAC}},
  author={Hatami, Mohammad and Nguyen, Nhan Thanh and Juntti, Markku},
  journal={IEEE Trans. Commun.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-18', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 2 ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2509.11419" target="_blank">Knowledge Distillation for Sensing-Assisted Long-Term Beam Tracking in mmWave Communications</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, 2026. (<strong>accepted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2509.11419" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-19">@article{ma2025knowledge,
  title={Knowledge Distillation for Sensing-Assisted Long-Term Beam Tracking in {mmWave} Communications},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  journal={arXiv preprint arXiv:2509.11419},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-19', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 11 ======================== -->
<li>
<div class="pub-main">
A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2509.19092" target="_blank">Data-free knowledge distillation for LiDAR-aided beam tracking</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, 2026. (<strong>accepted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2509.19092" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-20">@article{zaker2026datafree,
  title={Data-Free Knowledge Distillation for {LiDAR}-Aided Beam Tracking},
  author={A. Zaker and N. T. Nguyen and A. Alkhateeb and M. Juntti},
  journal={IEEE Trans. Veh. Technol.},
  year={2026},
  note={accepted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-20', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 6 ======================== -->
<li>
<div class="pub-main">
T. Fang, M. Ma, M. Juntti, N. Shlezinger, A. L. Swindlehurst, and <strong>N. T. Nguyen</strong>,  
"<a href="https://arxiv.org/pdf/2503.09489" target="_blank">Optimal ISAC Beamforming Structure and Efficient Algorithms for Sum Rate and CRLB Balancing</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, 2026. (<strong>accepted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2503.09489" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-21">@article{fang2025optimal,
  title={Optimal {ISAC} Beamforming Structure and Efficient Algorithms for Sum Rate and {CRLB} Balancing},
  author={Fang, Tianyu and Ma, Mengyuan and Juntti, Markku and Shlezinger, Nir and Swindlehurst, A Lee and Nguyen, Nhan Thanh},
  journal={arXiv preprint arXiv:2503.09489},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-21', this); return false;">Copy</button></div></details>
</div>
</li>


<!-- ======================== SUBMISSION 8 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, M. Ma, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2603.16116" target="_blank">Knowledge distillation for collaborative learning in distributed communications and sensing</a>,"  
<span><em>IEEE Communications Magazine</em></span>, 2026. (<strong>accepted</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2603.16116" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-22">@article{nguyen2026knowledge,
  title={Knowledge Distillation for Collaborative Learning in Distributed Communications and Sensing},
  author={N. T. Nguyen and M. Ma and N. Shlezinger and Y. C. Eldar and A. L. Swindlehurst and M. Juntti},
  journal={IEEE Commun. Mag.},
  year={2026},
  note={accepted}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-22', this); return false;">Copy</button></div></details>
</div>
</li>


<!-- ======================== SUBMISSION 4 ======================== -->
<li>
<div class="pub-main">
S. Bhandari, Thang X. Vu, <strong>N. T. Nguyen</strong>, and S. Chatzinotas,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11404193" target="_blank">ISAC-Enabled Handover Design in LEO Satellite Networks</a>,"  
<span><em>IEEE Transactions on Communications</em></span>, vol. 74, pp. 5215–5231, Feb.2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11404193" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-23">@article{bhandari2026isacenabled,
  title={ISAC-Enabled Handover Design in {LEO} Satellite Networks},
  author={S. Bhandari and Thang X. Vu and N. T. Nguyen and S. Chatzinotas},
  journal={IEEE Trans. Commun.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-23', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 3 ======================== -->
<li>
<div class="pub-main">
I. Perera, <strong>N. T. Nguyen</strong>, P. Pirinen, and N. Rajatheva,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11370420" target="_blank">Bi-Static ISAC Beamforming Design in Multi-User MIMO Systems</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, Feb. 2026. (<strong>early access</strong>)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11370420" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-24">@article{perera2026bistatic,
  title={Bi-Static {ISAC} Beamforming Design in Multi-User {MIMO} Systems},
  author={I. Perera and N. T. Nguyen and P. Pirinen and N. Rajatheva},
  journal={IEEE Trans. Veh. Technol.},
  year={2026},
  note={early access}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-24', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 3 ======================== -->
<li>
<div class="pub-main">
S. Uniyal, <strong>N. T. Nguyen</strong>, G. Kumar, M. D. Renzo, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11367008" target="_blank">Outage, Symbol Error Probability, and Rate of RIS-Assisted MIMO Systems with Phase Errors</a>,"  
<span><em>IEEE Transactions on Communications</em></span>, vol. 74, pp. 4538–4554, Jan. 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11367008" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-25">@article{uniyal2026outage,
  title={Outage, Symbol Error Probability, and Rate of {RIS}-Assisted {MIMO} Systems With Phase Errors},
  author={S. Uniyal and N. T. Nguyen and G. Kumar and M. D. Renzo and M. Juntti},
  journal={IEEE Trans. Commun.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-25', this); return false;">Copy</button></div></details>
</div>
</li>


<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
L. V. Nguyen, R. Liu, <strong>N. T. Nguyen</strong>, M. Juntti, B. Ottersten, and A. L. Swindlehurst,  
"<a href="https://ieeexplore.ieee.org/abstract/document/11360621" target="_blank">Exploiting Symmetric Non-Convexity for Multi-Objective Symbol-Level DFRC Signal Design</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 25, pp. 10530–10545, Jan. 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/abstract/document/11360621" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-26">@article{nguyen2026exploiting,
  title={Exploiting Symmetric Non-Convexity for Multi-Objective Symbol-Level {DFRC} Signal Design},
  author={L. V. Nguyen and R. Liu and N. T. Nguyen and M. Juntti and B. Ottersten and A. L. Swindlehurst},
  journal={IEEE Trans. Wireless Commun.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-26', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 2 ======================== -->

<li>
<div class="pub-main">
S. Deka, K. Deka, <strong>N. T. Nguyen</strong>, S. Sharma, V. Bhatia,  and N. Rajatheva,  
"<a href="https://arxiv.org/pdf/2502.05952" target="_blank">Comprehensive Review of Deep Unfolding Techniques for Next-Generation Wireless Communication Systems</a>,"  
<span><em>IEEE Internet of Things Journal</em></span>, vol. 13, no. 6, pp. 10379–10406, Jan. 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2502.05952" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-27">@article{deka2026comprehensive,
  title={Comprehensive Review of Deep Unfolding Techniques for Next-Generation Wireless Communication Systems},
  author={S. Deka and K. Deka and N. T. Nguyen and S. Sharma and V. Bhatia and N. Rajatheva},
  journal={IEEE Internet Things J.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-27', this); return false;">Copy</button></div></details>
</div>
</li>

<li>
<div class="pub-main">
P. Zivuku, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, K. Ntontin, S. Chatzinotas, and B. Ottersten,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11268332" target="_blank">Resource Allocation for RIS-Enhanced OFDM-MIMO ISAC Systems</a>,"  
<span><em>IEEE Transactions on Communications</em></span>, vol. 74, pp. 1777–1792, Nov. 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11268332" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-28">@article{zivuku2025resource,
  title={Resource Allocation for {RIS}-Enhanced OFDM-{MIMO} {ISAC} Systems},
  author={P. Zivuku and V.-D. Nguyen and N. T. Nguyen and K. Ntontin and S. Chatzinotas and B. Ottersten},
  journal={IEEE Trans. Commun.},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-28', this); return false;">Copy</button></div></details>
</div>
</li>

<li>
<div class="pub-main">
D. Abueida, M. A. Albreem, S. Abdallah, A. A. Salem, S. Shahabuddin, K. Alnajjar, M. Saad, <strong>N. T. Nguyen</strong>, M. Juntti,  
  "<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11218982" target="_blank">Signal Processing for Cell-Free Massive MIMO: Techniques and Trends in Estimation, Detection, and Precoding</a>,"  
  <span><em>IEEE Open Journal of the Communications Society</em></span>, vol. 6, pp. 9392–9434, Oct. 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11218982" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-29">@article{abueida2025signal,
  title={Signal Processing for Cell-Free Massive {MIMO}: Techniques and Trends in Estimation, Detection, and Precoding},
  author={D. Abueida and M. A. Albreem and S. Abdallah and A. A. Salem and S. Shahabuddin and K. Alnajjar and M. Saad and N. T. Nguyen and M. Juntti},
  journal={IEEE Open J. Commun. Society},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-29', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 1 ======================== -->
<li>
<div class="pub-main">
H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,  
  "<a href="https://ieeexplore.ieee.org/abstract/document/11168825" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"  
  <span><em>IEEE Journal on Selected Areas in Communications</em></span>, vol. 14, pp. 165–180, Sep. 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/abstract/document/11168825" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-30">@article{nguyen2025energy,
  title={Energy Efficiency for Massive {MIMO} Integrated Sensing and Communication Systems},
  author={Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal={IEEE J. Sel. Areas Commun.},
  volume={},
  number={},
  pages={},
  year={2025},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-30', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 2 ======================== -->
<li>
<div class="pub-main">
A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11145153" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"  
<span><em>IEEE Communications Letters</em></span>, vol. 14, no. 11, pp. 3779–3783, Nov. 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11145153" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-31">@article{zakeri2025dynamic,
  title={Dynamic Joint Communications and Sensing Precoding Design: {A Lyapunov} Approach},
  author={Zakeri, Abolfazl and Nguyen, Nhan Thanh and Alkhateeb, Ahmed and Juntti, Markku},
  journal={arXiv preprint arXiv:2503.14054},
  volume={},
  number={},
  pages={},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-31', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 3 ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11008697" target="_blank">Digital and Hybrid Precoding Designs in Massive MIMO with Low-Resolution ADCs</a>,"  
<span><em>IEEE Wireless Communications Letters</em></span>, vol. 14, no. 8, pp. 2446–2450, Aug. 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11008697" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-32">@article{ma2025digital,
  title={Digital and Hybrid Precoding Designs in Massive {MIMO} with Low-Resolution {ADCs}},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Atzeni, Italo and Swindlehurst, A Lee and Juntti, Markku},
  journal={IEEE Wireless Commun. Lett.},
  volume={14},
  number={8},
  pages={2446--2450},
  year={2025},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-32', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 4 ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11006401" target="_blank">Joint Beamforming Design and Bit Allocation in Massive MIMO with Resolution-Adaptive ADCs</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 24, no. 10, pp. 8711–8726, May 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11006401" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-33">@article{ma2025joint,
  title={Joint beamforming design and bit allocation in massive {MIMO} with resolution-adaptive {ADCs}},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Atzeni, Italo and Juntti, Markku},
  journal={IEEE Trans. Wireless Commun.},
  volume={},
  number={},
  pages={},
  year={2025},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-33', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 5 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10938928" target="_blank">Performance Analysis and Power Allocation for Massive MIMO ISAC</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 73, pp. 1691–1707, Mar. 2025. <span style="color:#dc2626; font-weight:700;">(Top reading 2025)</span>
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10938928" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-34">@article{nguyen2025performance,
  title={Performance analysis and power allocation for massive {MIMO ISAC} systems},
  author={Nguyen, Nhan Thanh and Nguyen, Van-Dinh and Nguyen, Hieu V and Ngo, Hien Quoc and Swindlehurst, A Lee and Juntti, Markku},
  journal={IEEE Trans. Signal Process.},
  volume={73},
  number={},
  pages={1691–1707},
  year={2025},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-34', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 6 ======================== -->
<li>
<div class="pub-main">
E. Egashira, D. M. Osorio, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53753/nbnfioulu-202501171238.pdf?sequence=1" target="_blank">Secure mmWave MIMO Networks Employing Hybrid Active-Passive RIS</a>,"  
<span><em>IEEE Transactions on Communications</em></span>, vol. 73, no. 11, pp. 12161–12173, Nov. 2024.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/53753/nbnfioulu-202501171238.pdf?sequence=1" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-35">@article{egashira2024secure,
  title={Secure mmWave {MIMO} Networks Employing Hybrid Active-Passive {RIS}},
  author={Egashira, Edson Nobuyuki and Osorio, Diana Pamela Moya and Nguyen, Nhan Thanh and Juntti, Markku},
  journal={IEEE Trans. Commun.},
  volume={},
  number={},
  pages={},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-35', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 7 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, L. V. Nguyen, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10684532" target="_blank">Joint Communications and Sensing Hybrid Beamforming Design via Deep Unfolding</a>,"  
<span><em>IEEE Journal of Selected Topics in Signal Processing</em></span>, vol. 18, no. 5, pp. 901–916, Jul. 2024.  <span style="color:#dc2626; font-weight:700;">(Top reading and download in 2024–2025, invited to present at IEEE 2026 SPS Webinar)</span>
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10684532" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-36">@article{nguyen2024joint,
  title={Joint communications and sensing hybrid beamforming design via deep unfolding},
  author={Nguyen, Nhan Thanh and Nguyen, Ly V and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  journal={IEEE J. Sel. Topics Signal Process.},
  volume={18},
  number={5},
  pages={901–916},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-36', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 8 ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10697466" target="_blank">Switch-Based Hybrid Beamforming Transceiver Design for Wideband Communications With Beam Squint</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 74, no. 2, pp. 2840–2855, Sep. 2024.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10697466" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-37">@article{ma2024switch,
  title={Switch-based hybrid beamforming transceiver design for wideband communications with beam squint},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Juntti, Markku},
  journal={IEEE Trans. Veh. Technol.},
  volume={74},
  number={2},
  pages={2840–2855},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-37', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 9 ======================== -->
<li>
<div class="pub-main">
I. Bilbao, E. Iradier, J. Montalban, P. Angueira, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10568545" target="_blank">Deep Unfolding-Powered Analog Beamforming for In-Band Full-Duplex</a>,"  
<span><em>IEEE Open Journal of the Communications Society</em></span>, vol. 5, pp. 3753–3761, Jun. 2024.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10568545" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-38">@article{bilbao2024deep,
  title={Deep unfolding-powered analog beamforming for in-band full-duplex},
  author={Bilbao, I{\~n}igo and Iradier, Eneko and Montalb{\'a}n, Jon and Angueira, Pablo and Nguyen, Nhan Thanh and Juntti, Markku},
  journal={IEEE Open J. Commun. Society},
  volume={5},
  number={},
  pages={3753--3761},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-38', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 10 ======================== -->
<li>
<div class="pub-main">
N. Shlezinger, M. Ma, O. Lavi, <strong>N. T. Nguyen</strong>, Y. C. Eldar, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/51866/nbnfioulu-202409165877.pdf?sequence=1" target="_blank">Artificial Intelligence-Empowered Hybrid Multiple-Input/Multiple-Output Beamforming: Learning to Optimize for High-Throughput Scalable MIMO</a>,"  
<span><em>IEEE Vehicular Technology Magazine</em></span>, vol. 19, no. 3, pp. 58–67, 2024.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/51866/nbnfioulu-202409165877.pdf?sequence=1" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-39">@article{shlezinger2024artificial,
  title={Artificial intelligence-empowered hybrid multiple-input/multiple-output beamforming: {L}earning to optimize for high-throughput scalable {MIMO}},
  author={Shlezinger, Nir and Ma, Mengyuan and Lavi, Ortal and Nguyen, Nhan Thanh and Eldar, Yonina C and Juntti, Markku},
  journal={IEEE Veh. Technol. Mag.},
  volume={19},
  number={3},
  pages={58--67},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-39', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 11 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, Q. Wu, A. Tolli, S. Chatzinotas, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10266977" target="_blank">Fairness Enhancement of UAV Systems with Hybrid Active-Passive RIS</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 23, no. 5, pp. 4379–4396, 2023.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10266977" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-40">@article{nguyen2023fairness,
  title={Fairness enhancement of {UAV} systems with hybrid active-passive {RIS}},
  author={Nguyen, Nhan Thanh and Nguyen, Van-Dinh and Van Nguyen, Hieu and Wu, Qingqing and T{\"o}lli, Antti and Chatzinotas, Symeon and Juntti, Markku},
  journal={IEEE Trans. Wireless Commun.},
  volume={23},
  number={5},
  pages={4379--4396},
  year={2023},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-40', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 12 ======================== -->
<li>
<div class="pub-main">
V.-D. Nguyen, T. X. Vu, <strong>N. T. Nguyen</strong>, D. C. Nguyen, M. Juntti, Nguyen C. L., Dinh T. H., D. N. Nguyen, and S. Chatzinotas,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/48422/nbnfioulu-202403212382.pdf?sequence=1&isAllowed=y" target="_blank">Network-Aided Intelligent Traffic Steering in 6G ORAN: A Multi-Layer Optimization Framework</a>,"  
<span><em>IEEE Journal on Selected Areas in Communications</em></span>, vol. 42, no. 2, pp. 398–405, Nov. 2023.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/48422/nbnfioulu-202403212382.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-41">@article{nguyen2023network,
  title={Network-aided intelligent traffic steering in {6G O-RAN: A} multi-layer optimization framework},
  author={Nguyen, Van-Dinh and Vu, Thang X and Nguyen, Nhan Thanh and Nguyen, Dinh C and Juntti, Markku and Luong, Nguyen Cong and Hoang, Dinh Thai and Nguyen, Diep N and Chatzinotas, Symeon},
  journal={IEEE J. Sel. Areas Commun.},
  volume={42},
  number={2},
  pages={389--405},
  year={2023},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-41', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 13 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, M. Ma, O. Lavi, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/47431/nbnfioulu-202401231426.pdf?sequence=1&isAllowed=y" target="_blank">Deep Unfolding Hybrid Beamforming Design for THz Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 3788–3804, Oct. 2023.   <span style="color:#dc2626; font-weight:700;">(Top reading in 2023–2024)</span>
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/47431/nbnfioulu-202401231426.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-42">@article{nguyen2023deep,
  title={Deep unfolding hybrid beamforming designs for {THz} massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Ma, Mengyuan and Lavi, Ortal and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  journal={IEEE Trans. Signal Process.},
  volume={71},
  pages={3788--3804},
  year={2023},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-42', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 14 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10214237" target="_blank">Multiuser MIMO Wideband Joint Communications and Sensing System with Subcarrier Allocation</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 2997–3013, Aug. 2023.   <span style="color:#dc2626; font-weight:700;">(Top reading and download in 2023–2024, <a href="https://rc.signalprocessingsociety.org/education/webinars/sps_ed_web_vid_032625" target="_blank"><span style="color:#dc2626; font-weight:700;">IEEE SPS Webinar</span></a>, <a href="https://rc.signalprocessingsociety.org/education/webinars/sps_ed_web_sli_032625" target="_blank"><span style="color:#dc2626; font-weight:700;">Slides</span></a>)</span>
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10214237" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-43">@article{nguyen2023multiuser,
  title={Multiuser {MIMO} wideband joint communications and sensing system with subcarrier allocation},
  author={Nguyen, Nhan Thanh and Shlezinger, Nir and Eldar, Yonina C and Juntti, Markku},
  journal={IEEE Trans. Signal Process.},
  volume={71},
  pages={2997--3013},
  year={2023},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-43', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 15 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, V.-H. Nguyen, H. Q. Ngo, S. Chatzinotas, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9940169" target="_blank">Spectral Efficiency Analysis of Hybrid Relay-Reflecting Intelligent Surface-Assisted Cell-Free Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 22, no. 5, pp. 3397–3416, Nov. 2022.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9940169" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-44">@article{nguyen2022spectral,
  title={Spectral efficiency analysis of hybrid relay-reflecting intelligent surface-assisted cell-free massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Nguyen, Van-Dinh and Van Nguyen, Hieu and Ngo, Hien Quoc and Chatzinotas, Symeon and Juntti, Markku},
  journal={IEEE Trans. Wireless Commun.},
  volume={22},
  number={5},
  pages={3397--3416},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-44', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 16 ======================== -->
<li>
<div class="pub-main">
L. V. Nguyen, <strong>N. T. Nguyen</strong>, N. H. Tran, M. Juntti, A. L. Swindlehurst, and D. H. N. Nguyen,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44744/nbnfi-fe202301265946.pdf?sequence=1&isAllowed=y" target="_blank">Leveraging Deep Neural Networks for Massive MIMO Data Detection</a>,"  
<span><em>IEEE Wireless Communications</em></span>, vol. 30, no. 1, pp. 174–180, May 2022.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/44744/nbnfi-fe202301265946.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-45">@article{nguyen2022leveraging,
  title={Leveraging deep neural networks for massive {MIMO} data detection},
  author={Nguyen, Ly V and Nguyen, Nhan T and Tran, Nghi H and Juntti, Markku and Swindlehurst, A Lee and Nguyen, Duy HN},
  journal={IEEE Wireless Commun.},
  volume={30},
  number={1},
  pages={174--180},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-45', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 17 ======================== -->
<li>
<div class="pub-main">
A. Shojaeifard, K.-K. Wong, K.-F. Tong, Z. Chu, A. Mourad, A. Haghighat, I. Hemadeh, <strong>N. T. Nguyen</strong>, V. Tapio, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/32277/nbnfi-fe2022100661285.pdf?sequence=1" target="_blank">MIMO Evolution Beyond 5G Through Reconfigurable Intelligent Surfaces and Fluid Antenna Systems</a>,"  
<span><em>Proceedings of the IEEE</em></span>, vol. 110, no. 9, pp. 1244–1265, May 2022.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/32277/nbnfi-fe2022100661285.pdf?sequence=1" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-46">@article{shojaeifard2022mimo,
  title={MIMO evolution beyond 5G through reconfigurable intelligent surfaces and fluid antenna systems},
  author={Shojaeifard, Arman and Wong, Kai-Kit and Tong, Kin-Fai and Chu, Zhiyuan and Mourad, Alain and Haghighat, Afshin and Hemadeh, Ibrahim and Nguyen, Nhan Thanh and Tapio, Visa and Juntti, Markku},
  journal={Proc. IEEE},
  volume={110},
  number={9},
  pages={1244--1265},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-46', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 18 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, K. Lee, and H. Dai,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/45145/nbnfi-fe2023032332877.pdf?sequence=1&isAllowed=y" target="_blank">Hybrid Beamforming and Adaptive RF Chain Activation for Cell-Free Millimeter-Wave Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 71, no. 8, pp. 8739–8755, May 2022.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/45145/nbnfi-fe2023032332877.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-47">@article{nguyen2022hybrid,
  title={Hybrid beamforming and adaptive {RF} chain activation for uplink cell-free millimeter-wave massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun and Dai, Huaiyu},
  journal={IEEE Trans. Veh. Technol.},
  volume={71},
  number={8},
  pages={8739--8755},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-47', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 19 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, Q.-D. Vu, K. Lee, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9733238" target="_blank">Hybrid Relay-Reflecting Intelligent Surface-Assisted Wireless Communications</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 71, no. 6, pp. 6228–6244, Mar. 2022 <span style="color:#dc2626; font-weight:700;">(Two (2) Best Paper Awards for conference versions)</span>.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9733238" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-48">@article{nguyen2022hybrid,
  title={Hybrid relay-reflecting intelligent surface-assisted wireless communications},
  author={Nguyen, Nhan Thanh and Vu, Quang-Doanh and Lee, Kyungchun and Juntti, Markku},
  journal={IEEE Trans. Veh. Technol.},
  volume={71},
  number={6},
  pages={6228--6244},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-48', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 20 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, K. Lee, and H. Dai,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/30148/nbnfi-fe2021122162809.pdf?sequence=1&isAllowed=y" target="_blank">Application of Deep Learning to Sphere Decoding for Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 20, no. 10, pp. 6787–6803, May 2021.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/30148/nbnfi-fe2021122162809.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-49">@article{nguyen2021application,
  title={Application of deep learning to sphere decoding for large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun and DaiIEEE, Huaiyu},
  journal={IEEE Trans. Wireless Commun.},
  volume={20},
  number={10},
  pages={6787--6803},
  year={2021},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-49', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 21 ======================== -->
<li>
<div class="pub-main">
Q.-V. Pham, <strong>N. T. Nguyen</strong>, T. T. Huynh, L. B. Le, K. Lee, W.-J. Hwang,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9448043" target="_blank">Intelligent Radio Signal Processing: A Survey</a>,"  
<span><em>IEEE Access</em></span>, vol. 9, pp. 83818–83850, Jun. 2021.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9448043" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-50">@article{pham2021intelligent,
  title={Intelligent radio signal processing: {A} survey},
  author={Pham, Quoc-Viet and Nguyen, Nhan Thanh and Huynh-The, Thien and Le, Long Bao and Lee, Kyungchun and Hwang, Won-Joo},
  journal={IEEE Access},
  volume={9},
  pages={83818--83850},
  year={2021},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-50', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 22 ======================== -->
<li>
<div class="pub-main">
G. M. Gadiel, <strong>N. T. Nguyen</strong>, and K. Lee,  
"<a href="https://ieeexplore.ieee.org/abstract/document/9374093" target="_blank">Dynamic Unequally Sub-Connected Hybrid Beamforming Architecture for Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 70, no. 4, pp. 3469–3478, Mar. 2021.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/abstract/document/9374093" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-51">@article{gadiel2021dynamic,
  title={Dynamic unequally sub-connected hybrid beamforming architecture for massive {MIMO} systems},
  author={Gadiel, Godwin Mruma and Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Veh. Technol.},
  volume={70},
  number={4},
  pages={3469--3478},
  year={2021},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-51', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 23 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://arxiv.org/pdf/1909.01683" target="_blank">Deep Learning-Aided Tabu Search Detection for Large MIMO Systems</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 19, no. 6, pp. 4262–4275, Jun. 2020.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/1909.01683" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-52">@article{nguyen2020deep,
  title={Deep learning-aided tabu search detection for large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Wireless Commun.},
  volume={19},
  number={6},
  pages={4262--4275},
  year={2020},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-52', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 24 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://arxiv.org/pdf/1908.10056" target="_blank">Unequally Sub-Connected Architecture for Hybrid Beamforming in Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 19, no. 2, pp. 1127–1140, Feb. 2020.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/1908.10056" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:8px; color:#0F766E; font-weight:600; font-size:12px; cursor:pointer; line-height:1;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-53">@article{nguyen2019unequally,
  title={Unequally sub-connected architecture for hybrid beamforming in massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Wireless Commun.},
  volume={19},
  number={2},
  pages={1127--1140},
  year={2019},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-53', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 25 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://arxiv.org/pdf/1909.13606" target="_blank">Groupwise Neighbor Examination for Tabu Search Detection in Large MIMO Systems</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 69, no. 1, pp. 1136–1140, Jan. 2020.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/1909.13606" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-54">@article{nguyen2019groupwise,
  title={Groupwise neighbor examination for tabu search detection in large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Veh. Technol.},
  volume={69},
  number={1},
  pages={1136--1140},
  year={2019},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-54', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 26 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, K. Lee, and H. Dai,  
"<a href="https://ieeexplore.ieee.org/abstract/document/8668468" target="_blank">QR-Decomposition-Aided Tabu Search Detection for Large MIMO Systems</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 68, no. 5, pp. 4857–4870, May 2019.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/abstract/document/8668468" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-55">@article{nguyen2019qr,
  title={QR-decomposition-aided tabu search detection for large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun and Dai, Huaiyu},
  journal={IEEE Trans. Veh. Technol.},
  volume={68},
  number={5},
  pages={4857--4870},
  year={2019},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-55', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 27 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://ieeexplore.ieee.org/abstract/document/8453856" target="_blank">Coverage and Cell-Edge Sum-Rate Analysis of MmWave Massive MIMO Systems with ORP Schemes and MMSE Receivers</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 66, no. 20, pp. 5349–5363, Oct. 2018.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/abstract/document/8453856" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-56">@article{nguyen2018coverage,
  title={Coverage and cell-edge sum-rate analysis of mmWave massive {MIMO} systems with {ORP} schemes and {MMSE} receivers},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Signal Process.},
  volume={66},
  number={20},
  pages={5349--5363},
  year={2018},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-56', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== PAPER 28 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7895219" target="_blank">Cell Coverage Extension with Orthogonal Random Precoding for Massive MIMO Systems</a>,"  
<span><em>IEEE Access</em></span>, vol. 5, Apr. 2017.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7895219" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-57">@article{nguyen2017cell,
  title={Cell coverage extension with orthogonal random precoding for massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Access},
  volume={5},
  pages={5410--5424},
  year={2017},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-57', this); return false;">Copy</button></div></details>
</div>
</li>

</ol>

</div>

<div id="pubtab-conference" class="pubtab-panel" style="display:none;">

<h2 class="pub-section-title">🎤 Conference Publications</h2>


<ol class="pub-justify">

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
A. Zakeri, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2606.31690" target="_blank">Resource-Efficient WiFi CSI Sensing via Exploiting the Age of Samples</a>," <span><em>IEEE Integrated Sensing and Communication Conference (ISAC)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2606.31690" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-58">@inproceedings{zakeri2026resourceefficient,
  title={Resource-Efficient {WiFi} {CSI} Sensing Via Exploiting the Age of Samples},
  author={A. Zakeri and N. T. Nguyen and M. Juntti},
  booktitle={IEEE Integrated Sensing and Communication Conference (ISAC)},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-58', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
M. Ma, A. Alkhateeb, <strong>N. T. Nguyen</strong>, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2607.00936" target="_blank">Lightweight Vision-Aided Beam Tracking for Cross-Environment mmWave Communications</a>," <span><em>IEEE Integrated Sensing and Communication Conference (ISAC)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2607.00936" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-59">@inproceedings{ma2026lightweight,
  title={Lightweight Vision-Aided Beam Tracking for Cross-Environment mmWave Communications},
  author={M. Ma and A. Alkhateeb and N. T. Nguyen and A. L. Swindlehurst and M. Juntti},
  booktitle={IEEE Integrated Sensing and Communication Conference (ISAC)},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-59', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
L. Mendez-Monsanto, K. C.-Hu, M. J. F.-G. Garcia, A. G. Armada, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"Low-Ambiguity 5G NR-Compatible Pilot Design for Multi-Domain Channel Estimation in ISAC," <span><em>IEEE Integrated Sensing and Communication Conference (ISAC)</em></span>, 2026.
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-60">@inproceedings{mendezmonsanto2026lowambiguity,
  title={Low-Ambiguity {5G} {NR}-Compatible Pilot Design for Multi-Domain Channel Estimation in {ISAC}},
  author={L. Mendez-Monsanto and K. C.-Hu and M. J. F.-G. Garcia and A. G. Armada and N. T. Nguyen and M. Juntti},
  booktitle={IEEE Integrated Sensing and Communication Conference (ISAC)},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-60', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
M. Hatami, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"Beamforming vs. Waveform Design in ISAC: Is Linear Beamforming Sufficient?," <span><em>IEEE Integrated Sensing and Communication Conference (ISAC)</em></span>, 2026.
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-61">@inproceedings{hatami2026beamforming,
  title={Beamforming vs. Waveform Design in {ISAC}: Is Linear Beamforming Sufficient?},
  author={M. Hatami and N. T. Nguyen and M. Juntti},
  booktitle={IEEE Integrated Sensing and Communication Conference (ISAC)},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-61', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
S. Prasad, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"Low-Complexity Dynamic Deep Unfolding for ISAC Beamforming," <span><em>IEEE Integrated Sensing and Communication Conference (ISAC)</em></span>, 2026.
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-62">@inproceedings{prasad2026lowcomplexity,
  title={Low-Complexity Dynamic Deep Unfolding for {ISAC} Beamforming},
  author={S. Prasad and N. T. Nguyen and M. Juntti},
  booktitle={IEEE Integrated Sensing and Communication Conference (ISAC)},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-62', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
<div class="pub-main">
P. N. Tran, <strong>N. T. Nguyen</strong>, H. Q. Ngo, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2608.03237" target="_blank">Deep-Unfolded Accelerated Projected Gradient for Energy-Efficient Cell-Free Massive MIMO</a>," <span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2608.03237" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-63">@inproceedings{tran2026deepunfolded,
  title={Deep-Unfolded Accelerated Projected Gradient for Energy-Efficient Cell-Free Massive {MIMO}},
  author={P. N. Tran and N. T. Nguyen and H. Q. Ngo and M. Juntti},
  booktitle={Proc. {IEEE} Global Commun. Conf.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-63', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
S. Tavakolian, A. Zaker, A. Alkhateeb, M. Juntti, and <strong>N. T. Nguyen</strong>,  
"<a href="https://arxiv.org/pdf/2608.30524" target="_blank">Beamforming Design Via GNN in mmWave Cell-Free Massive MIMO Using Sub-6 GHz CSI</a>," <span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2608.30524" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-64">@inproceedings{tavakolian2026beamforming,
  title={Beamforming Design Via {GNN} in mmWave Cell-Free Massive {MIMO} Using Sub-6 GHz {CSI}},
  author={S. Tavakolian and A. Zaker and A. Alkhateeb and M. Juntti and N. T. Nguyen},
  booktitle={Proc. {IEEE} Works. on Sign. Proc. Adv. in Wirel. Comms.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-64', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 2 ======================== -->
<li>
<div class="pub-main">
M. Hassam, A. Zakeri, M. Ma, A. Alkhateeb, and <strong>N. T. Nguyen</strong>,  
"Dynamic Multimodal Sensing-Aided Beam Prediction via Deep Reinforcement Learning," <span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, 2026.
</div>
<div class="pub-actions">

<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-65">@inproceedings{hassam2026dynamic,
  title={Dynamic Multimodal Sensing-Aided Beam Prediction Via Deep Reinforcement Learning},
  author={M. Hassam and A. Zakeri and M. Ma and A. Alkhateeb and N. T. Nguyen},
  booktitle={Proc. {IEEE} Works. on Sign. Proc. Adv. in Wirel. Comms.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-65', this); return false;">Copy</button></div></details>
</div>
</li>


<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
M. Ma, I. Welgamage, A. Alkhateeb, A. L. Swindlehurst, M. Juntti, and <strong>N. T. Nguyen</strong>,  
"<a href="https://arxiv.org/pdf/2604.16708" target="_blank">Knowledge Distillation for Lightweight Multimodal Sensing-Aided mmWave Beam Tracking</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2604.16708" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-66">@inproceedings{ma2026knowledge,
  title={Knowledge Distillation for Lightweight Multimodal Sensing-Aided mmWave Beam Tracking},
  author={M. Ma and I. Welgamage and A. Alkhateeb and A. L. Swindlehurst and M. Juntti and N. T. Nguyen},
  booktitle={Proc. {IEEE} Works. on Sign. Proc. Adv. in Wirel. Comms.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-66', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
M. Hatami, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2608.16290" target="_blank">Beamforming and Filter Design for Bistatic ISAC under Known and Unknown Transmit Symbols</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2608.16290" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-67">@inproceedings{hatami2026beamforminga,
  title={Beamforming and Filter Design for Bistatic {ISAC} Under Known and Unknown Transmit Symbols},
  author={M. Hatami and N. T. Nguyen and M. Juntti},
  booktitle={Proc. {IEEE} Works. on Sign. Proc. Adv. in Wirel. Comms.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-67', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
K. Lin, H. Luo, <strong>N. T. Nguyen</strong>, and A. Alkhateeb,  
"<a href="" target="_blank">Wireless Digital Twin Construction Using Multi-Modal Sensory Data</a>,"  
<span><em>International Conference on Computer Communications and Networks (ICCCN)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-68">@inproceedings{lin2026wireless,
  title={Wireless Digital Twin Construction Using Multi-Modal Sensory Data},
  author={K. Lin and H. Luo and N. T. Nguyen and A. Alkhateeb},
  booktitle={International Conference on Computer Communications and Networks (ICCCN)},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-68', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
A. Zakeri, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2511.01406" target="_blank">AoI-Aware Machine Learning for Constrained Multimodal Sensing-Aided Communications</a>,"  
<span><em>IEEE International Conference on Communications (ICC)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2511.01406" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-69">@inproceedings{zakeri2026aoiaware,
  title={AoI-Aware Machine Learning for Constrained Multimodal Sensing-Aided Communications},
  author={A. Zakeri and N. T. Nguyen and A. Alkhateeb and M. Juntti},
  booktitle={Proc. {IEEE} Int. Conf. Commun.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-69', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
P. Tran, <strong>N. T. Nguyen</strong>, H. Q. Ngo, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2601.13934" target="_blank">Deep Reinforcement Learning-Based Dynamic Resource Allocation in Cell-Free Massive MIMO</a>,"  
<span><em>IEEE International Conference on Communications (ICC)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2601.13934" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-70">@inproceedings{tran2026deep,
  title={Deep Reinforcement Learning-Based Dynamic Resource Allocation in Cell-Free Massive {MIMO}},
  author={P. Tran and N. T. Nguyen and H. Q. Ngo and M. Juntti},
  booktitle={Proc. {IEEE} Int. Conf. Commun.},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-70', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
T. Fang, M. Ma, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2601.16036" target="_blank">Tri-Hybrid Beamforming Design for Integrated Sensing and Communications</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2601.16036" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-71">@inproceedings{fang2026trihybrida,
  title={Tri-Hybrid Beamforming Design for Integrated Sensing and Communications},
  author={T. Fang and M. Ma and N. T. Nguyen and M. Juntti},
  booktitle={Proc. {IEEE} Int. Conf. Acoust., Speech, Signal Processing},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-71', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
A. Zakeri, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2509.19130" target="_blank">Deep Reinforcement Learning for Dynamic Sensing and Communications</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2509.19130" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-72">@inproceedings{zakeri2026deep,
  title={Deep Reinforcement Learning for Dynamic Sensing and Communications},
  author={A. Zakeri and N. T. Nguyen and A. Alkhateeb and M. Juntti},
  booktitle={Proc. {IEEE} Int. Conf. Acoust., Speech, Signal Processing},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-72', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
S. Tavakolian, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://arxiv.org/abs/2602.04703" target="_blank">Knowledge Distillation for mmWave Beam Prediction Using Sub-6 GHz Channels</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/abs/2602.04703" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-73">@inproceedings{tavakolian2026knowledge,
  title={Knowledge Distillation for mmWave Beam Prediction Using Sub-6 GHz Channels},
  author={S. Tavakolian and N. T. Nguyen and A. Alkhateeb and M. Juntti},
  booktitle={Proc. {IEEE} Int. Conf. Acoust., Speech, Signal Processing},
  year={2026}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-73', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2509.11725" target="_blank">Attention-Enhanced Learning for Sensing-Assisted Long-Term Beam Tracking in mmWave Communications</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, 2026.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2509.11725" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-74">@article{ma2025attention,
  title={Attention-Enhanced Learning for Sensing-Assisted Long-Term Beam Tracking in {mmWave} Communications},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Shlezinger, Nir and Eldar, Yonina C and Juntti, Markku},
  journal={arXiv preprint arXiv:2509.11725},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-74', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 1 ======================== -->
<li>
<div class="pub-main">
G. Charan, <strong>N. T. Nguyen</strong>, and A. Alkhateeb,  
"<a href="https://oulurepo.oulu.fi/handle/10024/61961" target="_blank">Advancing Vision-Aided Beam Prediction: Knowledge Distillation Meets Active Learning</a>,"  
<span><em>IEEE International Workshop on Computational Advances in Multi-Sensor Adaptive Processing (CAMSAP)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/handle/10024/61961" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-75">@inproceedings{charan2025advancing,
  title={Advancing Vision-Aided Beam Prediction: Knowledge Distillation Meets Active Learning},
  author={G. Charan and N. T. Nguyen and A. Alkhateeb},
  booktitle={IEEE International Workshop on Computational Advances in Multi-Sensor Adaptive Processing (CAMSAP)},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-75', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 1 ======================== -->
<li>
<div class="pub-main">
H. T. Nguyen, T.-H. Nguyen, Vo N. Q. B., V.-D. Nguyen, and <strong>N. T. Nguyen</strong>,  
"<a href="https://ieeexplore.ieee.org/abstract/document/11365077" target="_blank">Energy Efficiency Maximization for RIS-aided Integrated Sensing and Communication</a>,"  
<span><em>RIVF International Conference on Computing and Communication Technologies</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/abstract/document/11365077" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-76">@inproceedings{nguyen2025energy,
  title={Energy Efficiency Maximization for {RIS}-Aided Integrated Sensing and Communication},
  author={H. T. Nguyen and T.-H. Nguyen and Vo N. Q. B. and V.-D. Nguyen and N. T. Nguyen},
  booktitle={RIVF International Conference on Computing and Communication Technologies},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-76', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 1 ======================== -->
<li>
<div class="pub-main">
H. T. Nguyen, <strong>N. T. Nguyen</strong>, Nguyen C. L., T.-H. Nguyen, and Vo N. Q. B.,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/59312/nbnfioulu-202511206843.pdf?sequence=-1" target="_blank">Max-Min Rate Optimization for Reconfigurable Intelligent Surfaces Aided ISAC Systems</a>,"  
<span><em>24th International Symposium on Communications and Information Technologies (ISCIT)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/59312/nbnfioulu-202511206843.pdf?sequence=-1" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-77">@inproceedings{nguyen2025maxmin,
  title={Max-Min Rate Optimization for Reconfigurable Intelligent Surfaces Aided {ISAC} Systems},
  author={H. T. Nguyen and N. T. Nguyen and Nguyen C. L. and T.-H. Nguyen and Vo N. Q. B.},
  booktitle={24th International Symposium on Communications and Information Technologies (ISCIT)},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-77', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 2 ======================== -->
<li>
<div class="pub-main">
A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/handle/10024/61504" target="_blank">Constrained Multimodal Sensing-Aided Communications: A Dynamic Beamforming Design</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/handle/10024/61504" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-78">@inproceedings{zaker2025constrained,
  title={Constrained Multimodal Sensing-Aided Communications: A Dynamic Beamforming Design},
  author={A. Zaker and N. T. Nguyen and A. Alkhateeb and M. Juntti},
  booktitle={Proc. {IEEE} Global Commun. Conf.},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-78', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 3 ======================== -->
<li>
<div class="pub-main">
P. Tran, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2601.18453" target="_blank">Deep Reinforcement Learning for Hybrid RIS Assisted MIMO Communications</a>,"  
<span><em>Asilomar Conference on Signals, Systems, and Computers (ASILOMAR)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://arxiv.org/pdf/2601.18453" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-79">@inproceedings{tran2025deep,
  title={Deep Reinforcement Learning for Hybrid {RIS} Assisted {MIMO} Communications},
  author={P. Tran and N. T. Nguyen and M. Juntti},
  booktitle={Proc. Annual Asilomar Conf. Signals, Syst., Comp.},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-79', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 4 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong> and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/document/11361681" target="_blank">Hybrid RIS-aided Wireless Communications</a>,"  
<span><em>International Symposium on Antennas and Propagation (ISAP)</em></span>, 2025 <span style="color:#dc2626; font-weight:700;">(Best Paper Award)</span>.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/document/11361681" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-80">@inproceedings{nguyen2025hybrid,
  title={Hybrid {RIS}-Aided Wireless Communications},
  author={N. T. Nguyen and M. Juntti},
  booktitle={International Symposium on Antennas and Propagation (ISAP)},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-80', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 5 ======================== -->
<li>
<div class="pub-main">
A. Raza, <strong>NN. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/abstract/document/11143326" target="_blank">Deep Unfolding of Atomic Norm Minimization for DoA Estimation</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/abstract/document/11143326" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-81">@inproceedings{raza2025deep,
  title={Deep Unfolding of Atomic Norm Minimization for {DoA} Estimation},
  author={Raza, Ali and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={IEEE 26th International Workshop on Signal Processing and Artificial Intelligence for Wireless Communications (SPAWC)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-81', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 6 ======================== -->
<li>
<div class="pub-main">
S. Uniyal, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/document/11143254" target="_blank">Outage and Capacity Analysis of HRIS-Aided RSMA Systems</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/document/11143254" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-82">@inproceedings{uniyal2025outage,
  title={Outage and Capacity Analysis of {HRIS}-Aided {RSMA} Systems},
  author={Uniyal, Smriti and Nguyen, Nhan Thanh and Kumar, Guddu and Juntti, Markku},
  booktitle={2025 IEEE 26th International Workshop on Signal Processing and Artificial Intelligence for Wireless Communications (SPAWC)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-82', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 7 ======================== -->
<li>
<div class="pub-main">
S. Tavakolian, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58411/nbnfioulu-202509185933.pdf?sequence=1&isAllowed=y" target="_blank">Sparse Semantic Encoding for Reduced Data Load in Vision-Position Aided mmWave Beam Prediction</a>,"  
<span><em>German Microwave Conference</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/58411/nbnfioulu-202509185933.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-83">@inproceedings{tavakolian2025sparse,
  title={Sparse Semantic Encoding for Reduced Data Load in Vision-Position Aided {mmWave} Beam Prediction},
  author={Tavakolian, Sina and Nguyen, Nhan and Juntti, Markku},
  booktitle={2025 16th German Microwave Conference (GeMiC)},
  pages={514--517},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-83', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 8 ======================== -->
<li>
<div class="pub-main">
M. Hatami, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/56813/nbnfioulu-202506064211.pdf?sequence=1&isAllowed=y" target="_blank">Energy Efficient Waveform Design and Subcarrier Allocation for Multicarrier MIMO JCAS</a>,"  
<span><em>IEEE Wireless Communications and Networking Conference (WCNC)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/56813/nbnfioulu-202506064211.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-84">@inproceedings{hatami2025energy,
  title={Energy Efficient Waveform Design and Subcarrier Allocation for Multicarrier {MIMO JCAS}},
  author={Hatami, Mohammad and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2025 IEEE Wireless Communications and Networking Conference (WCNC)},
  pages={1--6},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-84', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 9 ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/56710/nbnfioulu-202506094216.pdf?sequence=1&isAllowed=y" target="_blank">Hybrid Receiver Design for Massive MIMO-OFDM With Low-Resolution ADCs and Oversampling</a>,"  
<span><em>IEEE Wireless Communications and Networking Conference (WCNC)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/56710/nbnfioulu-202506094216.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-85">@inproceedings{ma2025hybrid,
  title={Hybrid receiver design for massive {MIMO-OFDM} with low-resolution {ADCs} and oversampling},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Atzeni, Italo and Juntti, Markku},
  booktitle={2025 IEEE Wireless Communications and Networking Conference (WCNC)},
  pages={1--6},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-85', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 10 ======================== -->
<li>
<div class="pub-main">
S. Uniyal, <strong>N. T. Nguyen</strong>, G. Kumar, M. D. Renzo, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58412/nbnfioulu-202509185934.pdf?sequence=1&isAllowed=y" target="_blank">Sum Rate and Cramér-Rao Lower Bound Analysis for RIS-Assisted Multiuser Large-Antenna ISAC</a>,"  
<span><em>IEEE Wireless Communications and Networking Conference (WCNC)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/58412/nbnfioulu-202509185934.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-86">@inproceedings{uniyal2025sum,
  title={Sum Rate and {C}ram{\'e}r-{Rao} Lower Bound Analysis for {RIS}-Assisted Multiuser Large-Antenna {ISAC}},
  author={Uniyal, Smriti and Nguyen, Nhan Thanh and Kumar, Guddu and Di Renzo, Marco and Juntti, Markku},
  booktitle={2025 IEEE Wireless Communications and Networking Conference (WCNC)},
  pages={1--6},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-86', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 11 ======================== -->
<li>
<div class="pub-main">
M. Ma, T. Fang, N. Shlezinger, L. Swindlehurst, M. Juntti, and <strong>N. T. Nguyen</strong>,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/54619/nbnfioulu-202501241331.pdf?sequence=1&isAllowed=y" target="_blank">Model-Based Machine Learning for Max-Min Fairness Beamforming Design in JCAS Systems</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/54619/nbnfioulu-202501241331.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-87">@inproceedings{ma2025model,
  title={Model-Based Machine Learning for Max-Min Fairness Beamforming Design in {JCAS} Systems},
  author={Ma, Mengyuan and Fang, Tianyu and Shlezinger, Nir and Swindlehurst, AL and Juntti, Markku and Nguyen, Nhan},
  booktitle={ICASSP 2025-2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-87', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 12 ======================== -->
<li>
<div class="pub-main">
T. Fang, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/54613/nbnfioulu-202503192097.pdf?sequence=1&isAllowed=y" target="_blank">Low-Complexity Cramér–Rao Lower Bound and Sum Rate Optimization in ISAC Systems</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/54613/nbnfioulu-202503192097.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-88">@inproceedings{fang2025low,
  title={Low-complexity {C}ram{\'e}r-{Rao} lower bound and sum rate optimization in {ISAC} systems},
  author={Fang, Tianyu and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={ICASSP 2025-2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-88', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 13 ======================== -->
<li>
<div class="pub-main">
T. D. Phan, D. Q. Nguyen, N. Takanen, <strong>N. T. Nguyen</strong>, M. Juntti, and P. J. Soh,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/56987/nbnfioulu-202506164496.pdf?sequence=1&isAllowed=y" target="_blank">ML-Assisted RIS for ISAC Systems: Initial Results in the 6G Study Band</a>,"  
<span><em>European Conference on Antennas and Propagation (EuCAP)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/56987/nbnfioulu-202506164496.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-89">@inproceedings{phan2025ml,
  title={ML-Assisted {RIS} for {ISAC} Systems: {I}nitial Results in the {6G} Study Band},
  author={Phan, Duy Tung and Nguyen, Quoc Duy and Takanen, Niklas and Nguyen, Thanh Nhan and Juntti, Markku and Soh, Ping Jack},
  booktitle={2025 19th European Conference on Antennas and Propagation (EuCAP)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-89', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 14 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, L. V. Nguyen, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58413/nbnfioulu-202509185938.pdf?sequence=1&isAllowed=y" target="_blank">Deep Unfolding-Empowered MmWave Massive MIMO Joint Communications and Sensing</a>,"  
<span><em>IEEE Joint Communications and Sensing Symposium (JC&S)</em></span>, 2025.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/58413/nbnfioulu-202509185938.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-90">@inproceedings{nguyen2025deep,
  title={Deep Unfolding-Empowered mmWave Massive {MIMO} Joint Communications and Sensing},
  author={Nguyen, Nhan Thanh and Nguyen, Ly V and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  booktitle={2025 IEEE 5th International Symposium on Joint Communications \& Sensing (JC\&S)},
  pages={1--6},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-90', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 15 ======================== -->
<li>
<div class="pub-main">
M. Hatami, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/document/10880646" target="_blank">Joint Waveform Design and Sub-Carrier Allocation for Multiuser MIMO ISAC</a>,"  
<span><em>IEEE JC&S Symposium</em></span>, 2024.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://ieeexplore.ieee.org/document/10880646" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-91">@INPROCEEDINGS{10880646,
  author={Hatami, Mohammad and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2025 IEEE 5th International Symposium on Joint Communications & Sensing (JC&S)}, 
  title={Joint Waveform Design and Sub-Carrier Allocation for Multiuser {MIMO ISAC}}, 
  year={2025},
  volume={},
  number={},
  pages={1-6},
  doi={10.1109/JCS64661.2025.10880646}}
</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-91', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 16 ======================== -->
<li>
<div class="pub-main">
P. Mobaraki, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/54975/nbnfioulu-202504092482.pdf?sequence=1&isAllowed=y" target="_blank">Deep Unfolding-Empowered Energy Efficiency Optimization in RIS-Assisted Wireless Communications</a>,"  
<span><em>International Workshop on Energy-Aware Mobile IoT (Eware-IoT)</em></span>, 2024.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/54975/nbnfioulu-202504092482.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-92">@inproceedings{mobaraki2024deep,
  title={Deep Unfolding-Empowered Energy Efficiency Optimization in {RIS}-Assisted Wireless Communications},
  author={Mobaraki, Pouya and T. Nguyen, Nhan and Juntti, Markku},
  booktitle={Proceedings of the 14th International Conference on the Internet of Things},
  pages={238--243},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-92', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 17 ======================== -->
<li>
<div class="pub-main">
S. Uniyal, <strong>N. T. Nguyen</strong>, G. Kumar, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58414/nbnfioulu-202509185937.pdf?sequence=1&isAllowed=y" target="_blank">Outage Probability and Capacity Analysis of Active RIS-Assisted UAV RSMA Communications</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, 2024.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/58414/nbnfioulu-202509185937.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-93">@inproceedings{uniyal2024outage,
  title={Outage Probability and Capacity Analysis of Active {RIS}-Assisted {UAV RSMA} Communications},
  author={Uniyal, Smriti and Nguyen, Nhan Thanh and Kumar, Guddu and Juntti, Markku},
  booktitle={GLOBECOM 2024-2024 IEEE Global Communications Conference},
  pages={2882--2887},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-93', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 18 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, T. Fang, H. Q. Ngo, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58410/nbnfioulu-202509185935.pdf?sequence=1&isAllowed=y" target="_blank">Multi-static Cell-Free Massive MIMO ISAC: Performance Analysis and Optimization</a>,"  
<span><em>Asilomar Conference on Signals, Systems, and Computers (ASILOMAR)</em></span>, 2024.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/58410/nbnfioulu-202509185935.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-94">@inproceedings{nguyen2024multi,
  title={Multi-Static Cell-Free Massive {MIMO ISAC}: {P}erformance Analysis and Power Allocation},
  author={Nguyen, Nhan Thanh and Fang, Tianyu and Ngo, Hien Quoc and Juntti, Markku},
  booktitle={2024 58th Asilomar Conference on Signals, Systems, and Computers},
  pages={647--652},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-94', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 19 ======================== -->
<li>
<div class="pub-main">
T. Fang, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53076/nbnfioulu-202412097104.pdf?sequence=1&isAllowed=y" target="_blank">Beamforming Design for Max-Min Fairness Performance Balancing in ISAC Systems</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sept. 2024, Lucca, Italy.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/53076/nbnfioulu-202412097104.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-95">@inproceedings{fang2024beamforming,
  title={Beamforming design for max-min fairness performance balancing in {ISAC} systems},
  author={Fang, Tianyu and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2024 IEEE 25th International Workshop on Signal Processing Advances in Wireless Communications (SPAWC)},
  pages={336--340},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-95', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 20 ======================== -->
<li>
<div class="pub-main">
M. Hatami, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/52351/nbnfioulu-202410186389.pdf?sequence=1&isAllowed=y" target="_blank">Waveform Design for Multi-Carrier Multi-User MIMO Joint Communications and Sensing</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sept. 2024, Lucca, Italy.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/52351/nbnfioulu-202410186389.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-96">@inproceedings{hatami2024waveform,
  title={Waveform design for multi-carrier multiuser {MIMO} joint communications and sensing},
  author={Hatami, Mohammad and Nguyen, Nhan and Juntti, Markku},
  booktitle={2024 IEEE 25th International Workshop on Signal Processing Advances in Wireless Communications (SPAWC)},
  pages={346--350},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-96', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 21 ======================== -->
<li>
<div class="pub-main">
T. D. Gian, T.-H. Nguyen, <strong>N. T. Nguyen</strong>, and V.-D. Nguyen,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53074/nbnfioulu-202412097102.pdf?sequence=1&isAllowed=y" target="_blank">WiLHPE: WiFi-enabled Lightweight Channel Frequency Dynamic Convolution for HPE Tasks</a>,"  
<span><em>IEEE International Conference on Communications and Electronics (ICCE)</em></span>, Aug. 2024, Da Nang City, Vietnam.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/53074/nbnfioulu-202412097102.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-97">@inproceedings{gian2024wilhpe,
  title={WiLHPE: WiFi-enabled Lightweight Channel Frequency Dynamic Convolution for {HPE} Tasks},
  author={Gian, Toan D and Nguyen, Tien-Hoa and Nguyen, Nhan Thanh and Nguyen, Van-Dinh},
  booktitle={2024 Tenth International Conference on Communications and Electronics (ICCE)},
  pages={516--521},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-97', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 22 ======================== -->
<li>
<div class="pub-main">
I. Bilbao, <strong>N. T. Nguyen</strong>, D. P. Moya Osorio, V. Tapio, M. Juntti, E. Iradier, J. Montalbán, and P. Angueira,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53075/nbnfioulu-202412097103.pdf?sequence=1&isAllowed=y" target="_blank">Physical layer security beamforming design via deep unfolding</a>,"  
<span><em>IEEE International Mediterranean Conference on Communications and Networking (MEDITCOM)</em></span>, July 2024, Madrid, Spain.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/53075/nbnfioulu-202412097103.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-98">@inproceedings{bilbao2024physical,
  title={Physical Layer Security Beamforming Design via Deep Unfolding},
  author={Bilbao, I{\~n}igo and Nguyen, Nhan T and Osorio, Diana P Moya and Tapio, Visa and Juntti, Markku and Iradier, Eneko and Montalb{\'a}n, Jon and Angueira, Pablo},
  booktitle={2024 IEEE International Mediterranean Conference on Communications and Networking (MeditCom)},
  pages={251--256},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-98', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 23 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/51885/nbnfioulu-202409175895.pdf?sequence=1&isAllowed=y" target="_blank">Massive MIMO Joint Communications and Sensing with MRT Beamforming</a>,"  
<span><em>IEEE Radar Conference (RadarConf24)</em></span>, 2024, Denver, CO, USA.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/51885/nbnfioulu-202409175895.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-99">@inproceedings{nguyen2024massive,
  title={Massive {MIMO} joint communications and sensing with {MRT} beamforming},
  author={Nguyen, Nhan T and Nguyen, V-Dinh and Nguyen, Hieu V and Ngo, Hien Q and Swindlehurst, AL and Juntti, Markku},
  booktitle={2024 IEEE Radar Conference (RadarConf24)},
  pages={1--6},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-99', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 24 ======================== -->
<li>
<div class="pub-main">
P. Krishnananthalingam, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53799/nbnfioulu-202501221287.pdf?sequence=1&isAllowed=y" target="_blank">Constant Modulus Waveform Design for Wideband Multicarrier Joint Communications and Sensing via Deep Unfolding</a>,"  
<span><em>IEEE Wireless Communications and Networking Conference (WCNC)</em></span>, 2024.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/53799/nbnfioulu-202501221287.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-100">@inproceedings{krishnananthalingam2024constant,
  title={Constant modulus waveform design for wideband multicarrier joint communications and sensing via deep unfolding},
  author={Krishnananthalingam, Prashanth and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2024 IEEE Wireless Communications and Networking Conference (WCNC)},
  pages={1--6},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-100', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 25 ======================== -->
<li>
<div class="pub-main">
V.-D. Nguyen, T. X. Vu, <strong>N. T. Nguyen</strong>, D. C. Nguyen, M. Juntti, Nguyen C. L., Dinh T. H., D. N. Nguyen, and S. Chatzinotas,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/48394/nbnfioulu-202403202353.pdf?sequence=1&isAllowed=y" target="_blank">Enabling Intelligent Traffic Steering in A Hierarchical Open Radio Access Network</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, 2023, Kuala Lumpur, Malaysia.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/48394/nbnfioulu-202403202353.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-101">@inproceedings{nguyen2023enabling,
  title={Enabling Intelligent Traffic Steering in A Hierarchical Open Radio Access Network},
  author={Nguyen, Van-Dinh and Vu, Thang X and Nguyen, Nhan Thanh and Nguyen, Dinh C and Juntti, Markku and Luong, Nguyen Cong and Hoang, Dinh Thai and Nguyen, Diep N and Chatzinotas, Symeon},
  booktitle={GLOBECOM 2023-2023 IEEE Global Communications Conference},
  pages={5232--5237},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-101', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 26 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, L. V. Nguyen, N. Shlezinger, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/51884/nbnfioulu-202409175894.pdf?sequence=1&isAllowed=y" target="_blank">Fast Deep Unfolded Hybrid Beamforming in Multiuser Large MIMO Systems</a>,"  
<span><em>Asilomar Conference on Signals, Systems, and Computers (ASILOMAR)</em></span>, 2023, Pacific Grove, CA, USA. (accepted)
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/51884/nbnfioulu-202409175894.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-102">@inproceedings{nguyen2023fast,
  title={Fast deep unfolded hybrid beamforming in multiuser large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Van Nguyen, Ly and Shlezinger, Nir and Swindlehurst, A Lee and Juntti, Markku},
  booktitle={2023 57th Asilomar Conference on Signals, Systems, and Computers},
  pages={486--490},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-102', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 27 ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/43260/nbnfioulu-202311243336.pdf?sequence=1&isAllowed=y" target="_blank">Analysis of Oversampling in Uplink Massive MIMO-OFDM with Low-Resolution ADCs</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sept. 2023, Shanghai, China. <span style="color:#dc2626; font-weight:700;">(Best Student Paper Award)</span>
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/43260/nbnfioulu-202311243336.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-103">@inproceedings{ma2023analysis,
  title={Analysis of oversampling in uplink massive {MIMO-OFDM} with low-resolution {ADCs}},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Atzeni, Italo and Juntti, Markku},
  booktitle={2023 IEEE 24th International Workshop on Signal Processing Advances in Wireless Communications (SPAWC)},
  pages={626--630},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-103', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 28 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, N. Shlezinger, K.-H. Ngo, V.-D. Nguyen, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44654/nbnfi-fe20231030141814.pdf?sequence=1&isAllowed=y" target="_blank">Joint communications and sensing design for multi-carrier MIMO systems</a>,"  
<span><em>IEEE Statistical Signal Processing Workshop (SSP)</em></span>, July 2023, Hanoi, Vietnam. <span style="color:#dc2626; font-weight:700;">(Best Paper Award)</span>
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/44654/nbnfi-fe20231030141814.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-104">@inproceedings{nguyen2023joint,
  title={Joint communications and sensing design for multi-carrier {MIMO} systems},
  author={Nguyen, Nhan Thanh and Shlezinger, Nir and Ngo, Khac-Hoang and Nguyen, Van-Dinh and Juntti, Markku},
  booktitle={2023 IEEE Statistical Signal Processing Workshop (SSP)},
  pages={110--114},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-104', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 29 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, M. Ma, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44290/nbnfi-fe20230823103204.pdf?sequence=1&isAllowed=y" target="_blank">Deep unfolding-enabled hybrid beamforming design for mmWave massive MIMO systems</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, June 2023, Rhodes Island, Greece.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/44290/nbnfi-fe20230823103204.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-105">@inproceedings{nguyen2023deep,
  title={Deep unfolding-enabled hybrid beamforming design for {mmWave} massive {MIMO} systems},
  author={Nguyen, Nhan and Ma, Mengyuan and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  booktitle={ICASSP 2023-2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={1--5},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-105', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 30 ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/47366/nbnfioulu-202401191355.pdf?sequence=1&isAllowed=y" target="_blank">Beam Squint Analysis and Mitigation via Hybrid Beamforming Design in THz Communications</a>,"  
<span><em>IEEE International Conference on Communications (ICC)</em></span>, May 2023, Rome, Italy.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/47366/nbnfioulu-202401191355.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-106">@inproceedings{ma2023beam,
  title={Beam squint analysis and mitigation via hybrid beamforming design in {THz} communications},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={ICC 2023-IEEE International Conference on Communications},
  pages={6486--6491},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-106', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 31 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, J. Kokkoniemi, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44965/nbnfi-fe2023021627492.pdf?sequence=1&isAllowed=y" target="_blank">Beam Squint Effects in THz Communications with UPA and ULA: Comparison and Hybrid Beamforming Design</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM) Workshop</em></span>, Dec. 2022, Rio de Janeiro, Brazil.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/44965/nbnfi-fe2023021627492.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-107">@inproceedings{nguyen2022beam,
  title={Beam squint effects in {THz} communications with {UPA and ULA: C}omparison and hybrid beamforming design},
  author={Nguyen, Nhan Thanh and Kokkoniemi, Joonas and Juntti, Markku},
  booktitle={2022 IEEE Globecom Workshops (GC Wkshps)},
  pages={1754--1759},
  year={2022}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-107', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 32 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, Q. Wu, A. Tolli, S. Chatzinotas, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/43582/nbnfi-fe2023032332879.pdf?sequence=1&isAllowed=y" target="_blank">Hybrid Active-Passive Reconfigurable Intelligent Surface-Assisted UAV Communications</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, Dec. 2022, Rio de Janeiro, Brazil.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/43582/nbnfi-fe2023032332879.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-108">@inproceedings{nguyen2022hybrid,
  title={Hybrid active-passive reconfigurable intelligent surface-assisted {UAV} communications},
  author={Nguyen, Nhan T and Nguyen, V-Dinh and Wu, Qingqing and T{\"o}lli, Antti and Chatzinotas, Symeon and Juntti, Markku},
  booktitle={GLOBECOM 2022-2022 IEEE Global Communications Conference},
  pages={3126--3131},
  year={2022}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-108', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 33 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, Q. Wu, A. Tolli, S. Chatzinotas, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44165/nbnfi-fe202301091855.pdf?sequence=1&isAllowed=y" target="_blank">Hybrid Active-Passive Reconfigurable Intelligent Surface-Assisted Multi-User MISO Systems</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, July 2022, Oulu, Finland.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/44165/nbnfi-fe202301091855.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-109">@inproceedings{nguyen2022hybrid,
  title={Hybrid active-passive reconfigurable intelligent surface-assisted multi-user {MISO} systems},
  author={Nguyen, Nhan T and Nguyen, V-Dinh and Wu, Qingqing and T{\"o}lli, Antti and Chatzinotas, Symeon and Juntti, Markku},
  booktitle={2022 IEEE 23rd International Workshop on Signal Processing Advances in Wireless Communication (SPAWC)},
  pages={1--5},
  year={2022}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-109', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 34 ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, S. Chatzinotas, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44153/nbnfi-fe202301091846.pdf?sequence=1&isAllowed=y" target="_blank">Downlink Throughput of Cell-Free Massive MIMO Systems Assisted by Hybrid Relay-Reflecting Intelligent Surfaces</a>,"  
<span><em>IEEE International Conference on Communications (ICC)</em></span>, May 2022, Seoul, South Korea.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/44153/nbnfi-fe202301091846.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-110">@inproceedings{nguyen2022downlink,
  title={Downlink throughput of cell-free massive {MIMO} systems assisted by hybrid relay-reflecting intelligent surfaces},
  author={Nguyen, Nhan T and Nguyen, V and Nguyen, Hieu V and Ngo, Hien Q and Chatzinotas, Symeon and Juntti, Markku and others},
  booktitle={ICC 2022: IEEE International Conference on Communications},
  year={2022},
  organization={Institute of Electrical and Electronics Engineers}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-110', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER 35 ======================== -->
<li>
<div class="pub-main">
E. Egashira, D. Osorio, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/33525/nbnfi-fe2022091258396.pdf?sequence=1&isAllowed=y" target="_blank">Secrecy Capacity Maximization for a Hybrid Relay-RIS Scheme in mmWave MIMO Networks</a>,"  
<span><em>IEEE Vehicular Technology Conference (VTC Spring)</em></span>, June 2022, Helsinki, Finland.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/33525/nbnfi-fe2022091258396.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-111">@inproceedings{egashira2022secrecy,
  title={Secrecy capacity maximization for a hybrid relay-{RIS} scheme in {mmWave MIMO} networks},
  author={Egashira, Edson Nobuyuki and Osorio, Diana Pamela Moya and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2022 IEEE 95th Vehicular Technology Conference:(VTC2022-Spring)},
  pages={1--6},
  year={2022}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-111', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER A ======================== -->
<li>
<div class="pub-main">
T. H.-The, Q.-V. Pham, T.-V. Nguyen, V.-S. Doan, <strong>N. T. Nguyen</strong>, D. B. d. Costa, and D.-S. Kim,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/34153/nbnfi-fe202201031020.pdf?sequence=1&isAllowed=y" target="_blank">Densely-Accumulated Convolutional Network for Accurate LPI Radar Waveform Recognition</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, Dec. 2021, Madrid, Spain.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/34153/nbnfi-fe202201031020.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-112">@inproceedings{huynh2021densely,
  title={Densely-accumulated convolutional network for accurate {LPI} radar waveform recognition},
  author={Huynh-The, Thien and Pham, Quoc-Viet and Nguyen, Toan-Van and Doan, Van-Sang and Nguyen, Nhan Thanh and da Costa, Daniel Benevides and Kim, Dong-Seong},
  booktitle={2021 IEEE Global Communications Conference (GLOBECOM)},
  pages={1--6},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-112', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER B ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/52175/nbnfioulu-202410076207.pdf?sequence=1&isAllowed=y" target="_blank">Switch-based Hybrid Beamforming for Wideband Multi-Carrier Communications</a>,"  
<span><em>IEEE International ITG Workshop on Smart Antennas (WSA)</em></span>, Nov. 2021, French Riviera, France.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/52175/nbnfioulu-202410076207.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-113">@inproceedings{ma2021switch,
  title={Switch-based hybrid beamforming for wideband multi-carrier communications},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={WSA 2021; 25th International ITG Workshop on Smart Antennas},
  pages={1--6},
  year={2021},
  organization={VDE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-113', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER C ======================== -->
<li>
<div class="pub-main">
M. Ma, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/43618/nbnfi-fe2023032332868.pdf?sequence=1&isAllowed=y" target="_blank">Closed-Form Hybrid Beamforming Solution for Spectral Efficiency Upper Bound Maximization in MmWave MIMO-OFDM Systems</a>,"  
<span><em>IEEE Vehicular Technology Conference (VTC Fall)</em></span>, Sept. 2021, Norman, OK, USA.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/43618/nbnfi-fe2023032332868.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-114">@inproceedings{ma2021closed,
  title={Closed-form hybrid beamforming solution for spectral efficiency upper bound maximization in {mmWave MIMO-OFDM} systems},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2021 IEEE 94th Vehicular Technology Conference (VTC2021-Fall)},
  pages={1--5},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-114', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER D ======================== -->
<li>
<div class="pub-main">
K.-H. Ngo, <strong>N. T. Nguyen</strong>, T. Q. Dinh, T.-M. Hoang, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44157/nbnfi-fe202301091858.pdf?sequence=1&isAllowed=y" target="_blank">Low-Latency and Secure Computation Offloading Assisted by Hybrid Relay-Reflecting Intelligent Surface</a>,"  
<span><em>International Conference on Advanced Technologies for Communications (ATC)</em></span>, Oct. 2021, Hanoi, Vietnam. <span style="color:#dc2626; font-weight:700;">(Best Paper Award)</span>
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/44157/nbnfi-fe202301091858.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-115">@inproceedings{ngo2021low,
  title={Low-latency and secure computation offloading assisted by hybrid relay-reflecting intelligent surface},
  author={Ngo, Khac-Hoang and Nguyen, Nhan Thanh and Dinh, Thinh Quang and Hoang, Trong-Minh and Juntti, Markku},
  booktitle={2021 International Conference on Advanced Technologies for Communications (ATC)},
  pages={306--311},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-115', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER E ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, L. V. Nguyen, T. Huynh-T., D. H. N. Nguyen, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/45210/nbnfi-fe2023040434974.pdf?sequence=1&isAllowed=y" target="_blank">Machine Learning-based Reconfigurable Intelligent Surface-aided MIMO Systems</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sept. 2021, Lucca, Italy.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/45210/nbnfi-fe2023040434974.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-116">@inproceedings{nguyen2021machine,
  title={Machine learning-based reconfigurable intelligent surface-aided {MIMO} systems},
  author={Nguyen, Nhan Thanh and Nguyen, Ly V and Huynh-The, Thien and Nguyen, Duy HN and Swindlehurst, A Lee and Juntti, Markku},
  booktitle={2021 IEEE 22nd International Workshop on Signal Processing Advances in Wireless Communications (SPAWC)},
  pages={101--105},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-116', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER F ======================== -->
<li>
<div class="pub-main">
J. He, <strong>N. T. Nguyen</strong>, R. Schroeder, Visa Tapio, J. Kokkoniemi, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/30719/nbnfi-fe2021100149102.pdf?sequence=1&isAllowed=y" target="_blank">Channel Estimation and Hybrid Architectures for RIS-Assisted Communications</a>,"  
<span><em>EuCNC & 6G Summit</em></span>, June 2021, Grenoble, France.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/30719/nbnfi-fe2021100149102.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-117">@inproceedings{he2021channel,
  title={Channel estimation and hybrid architectures for {RIS}-assisted communications},
  author={He, Jiguang and Nguyen, Nhan Thanh and Schroeder, Rafaela and Tapio, Visa and Kokkoniemi, Joonas and Juntti, Markku},
  booktitle={2021 Joint European Conference on Networks and Communications \& 6G Summit (EuCNC/6G Summit)},
  pages={60--65},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-117', this); return false;">Copy</button></div></details>
</div>
</li>

<!-- ======================== CONF PAPER G ======================== -->
<li>
<div class="pub-main">
<strong>N. T. Nguyen</strong>, Q.-D. Vu, K. Lee, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/32680/nbnfi-fe2022032124246.pdf?sequence=1&isAllowed=y" target="_blank">Spectral Efficiency Optimization for Hybrid Relay-Reflecting Intelligent Surface</a>,"  
<span><em>IEEE International Conference on Communications (ICC) Workshop</em></span>, June 2021, Montreal, Canada.
</div>
<div class="pub-actions">
<a class="pub-view-btn" href="https://oulurepo.oulu.fi/bitstream/handle/10024/32680/nbnfi-fe2022032124246.pdf?sequence=1&isAllowed=y" target="_blank">View</a>
<details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bib-118">@inproceedings{nguyen2021spectral,
  title={Spectral efficiency optimization for hybrid relay-reflecting intelligent surface},
  author={Nguyen, Nhan Thanh and Vu, Quang-Doanh and Lee, Kyungchun and Juntti, Markku},
  booktitle={2021 IEEE International Conference on Communications Workshops (ICC Workshops)},
  pages={1--6},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bib-118', this); return false;">Copy</button></div></details>
</div>
</li>

</ol>

</div>

<!-- Copy helper -->
<script>
function showPubTab(tabId){
  document.getElementById('pubtab-journals').style.display = (tabId === 'journals') ? '' : 'none';
  document.getElementById('pubtab-conference').style.display = (tabId === 'conference') ? '' : 'none';
  document.getElementById('pub-tab-btn-journals').classList.toggle('active', tabId === 'journals');
  document.getElementById('pub-tab-btn-conference').classList.toggle('active', tabId === 'conference');
}
document.querySelectorAll('.pub-justify li details').forEach(function(d){
  d.addEventListener('toggle', function(){
    const li = d.closest('li');
    if (!li) return;
    li.classList.toggle('pub-li-open', d.open);
  });
});
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
