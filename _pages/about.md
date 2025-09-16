---
permalink: /
title: "👋 Hello there, I’m Nhan."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* ——— Card styling that adapts to light/dark mode ——— */
:root{
  --card-bg: #ffffff;
  --card-bg-alt: #f6f7f9;
  --card-border: rgba(0,0,0,0.08);
  --card-shadow: 0 1px 2px rgba(0,0,0,0.06);
  --muted: rgba(0,0,0,0.65);
}
@media (prefers-color-scheme: dark){
  :root{
    --card-bg: #14181d;
    --card-bg-alt: #0f1317;
    --card-border: rgba(255,255,255,0.12);
    --card-shadow: 0 1px 2px rgba(0,0,0,0.6);
    --muted: rgba(255,255,255,0.8);
  }
}
.section-card{
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 14px;
  box-shadow: var(--card-shadow);
  padding: 1.1rem 1.2rem;
  margin: 1rem 0 1.2rem 0;
}
.section-card.alt{
  background: var(--card-bg-alt);
}
.section-card h2{
  margin-top: 0;
  margin-bottom: .4rem;
}
.btn-group .btn{ margin-right:.4rem; }
.small-muted{ font-size:0.95rem; color:var(--muted); }
.details-clean summary{
  cursor:pointer;
  font-weight:600;
  list-style:none;
}
.details-clean summary::-webkit-details-marker{ display:none; }
.details-clean summary::after{
  content:" ▾";
  font-weight:400;
  opacity:.8;
}
.news-list li{ margin-bottom:.25rem; }
.life-wrap{
  display:flex; align-items:center; gap:1rem; flex-wrap:wrap;
}
.life-text{ flex: 1 1 260px; }
.life-photo{ flex: 0 0 210px; text-align:center; }
.life-photo img{
  border-radius:12px; max-width:100%; height:auto; border:1px solid var(--card-border);
}
</style>

<div class="section-card">
  <p>
    I’m an <strong>Assistant Professor</strong> and <strong>Academy Research Fellow</strong> at the Centre for Wireless Communications (CWC), University of Oulu (UOulu), Finland.<br>
    My research combines rigorous signal processing and machine learning to solve core problems in wireless communications and sensing.
  </p>

  <div class="btn-group" style="margin:.6rem 0 0;">
    <a class="btn btn--primary" href="/publications/">📄 Publications</a>
    <a class="btn" href="/portfolio/">👥 Research Team</a>
    <a class="btn" href="/year-archive/">💡 Projects</a>
    <a class="btn" href="https://nhanng9115.github.io/homepage/files/Resume.pdf" target="_blank" rel="noopener">📑 CV (PDF)</a>
  </div>
</div>

<div class="section-card alt">
  <h2>📚 About</h2>
  <p class="small-muted">
    B.S. in Electronics & Communications Engineering, Hanoi University of Science and Technology (HUST), Vietnam (2014);<br>
    M.S./Ph.D., Seoul National University of Science and Technology (SeoulTech), South Korea (2017/2020);<br>
    Postdoctoral Researcher, University of Oulu (2020).
  </p>
  <p class="small-muted">
    Research visits: North Carolina State University, USA (2019–2020); Weizmann Institute of Science & Ben-Gurion University of the Negev, Israel (2022); University of California, Irvine (2023).
  </p>
  <p><strong>Research interests:</strong> signal processing and optimization; deep unfolding / machine learning for massive MIMO; mmWave/THz communications; ISAC/JCAS; multimodal-sensing-assisted communications.</p>

  <p><strong>Selected honors:</strong></p>
  <ul class="small-muted" style="margin-top:.2rem;">
    <li><em>Best Student Paper Award</em> (Mengyuan’s work at IEEE SPAWC 2024)</li>
    <li><em>Docentship</em>, Faculty of ITEE, UOulu</li>
    <li><em>Best Paper Award</em> (IEEE SSP 2023)</li>
    <li><strong>Academy of Finland Fellowship</strong> (2023)</li>
    <li><em>Exemplary Reviewer</em> of IEEE TCOM (2023)</li>
    <li><em>Nokia Foundation – Jorma Ollila Grant</em> (2022)</li>
    <li><em>Best Paper Award</em> (ATC 2021)</li>
    <li><em>Best Doctoral Dissertation Award</em>, SeoulTech (2020)</li>
    <li><em>Best Master Thesis Award</em>, SeoulTech (2017)</li>
    <li><em>Excellent Graduation Award</em>, HUST (2014)</li>
    <li><em>Samsung Talent Scholarship</em>, SVMC (2014)</li>
  </ul>
</div>

<div class="section-card">
  <h2>📰 Recent news</h2>
  <ul class="news-list">
    <li><strong>Sept 9, 2025</strong> — Paper accepted to <em>IEEE JSAC</em>: <span class="small-muted">Energy Efficiency for Massive MIMO ISAC</span>.</li>
    <li><strong>Aug 20, 2025</strong> — Abolfazl’s paper accepted to <em>IEEE Communications Letters</em>.</li>
    <li><strong>Aug 1, 2025</strong> — Abolfazl’s paper accepted to <em>GLOBECOM 2025</em>.</li>
    <li><strong>Jul 16, 2025</strong> — Phuong’s paper accepted to <em>Asilomar 2025</em>.</li>
    <li><strong>May 25, 2025</strong> — Two papers accepted to <em>IEEE SPAWC</em> (Ali & Smriti).</li>
    <li><strong>May 17, 2025</strong> — Mengyuan’s paper accepted to <em>IEEE WCL</em>.</li>
    <li><strong>May 4, 2025</strong> — Mengyuan’s paper accepted to <em>IEEE TWC</em>.</li>
    <li><strong>Mar 18, 2025</strong> — Paper accepted to <em>IEEE TSP</em>: <span class="small-muted">Performance Analysis and Power Allocation for Massive MIMO ISAC</span>.</li>
  </ul>

  <details class="details-clean" style="margin-top:.6rem;">
    <summary>🕰️ Older highlights</summary>
    <ul class="news-list" style="margin-top:.5rem;">
      <li><strong>Dec 21, 2024</strong> — Three papers accepted to <em>IEEE WCNC</em>.</li>
      <li><strong>Dec 20, 2024</strong> — Two papers accepted to <em>IEEE ICASSP</em>.</li>
      <li><strong>Dec 12, 2024</strong> — EuCAP 2025 acceptance (ML-Assisted RIS for ISAC).</li>
      <li><strong>Oct 24, 2024</strong> — TSP paper listed among SPS Top-25 downloads.</li>
      <li><strong>Sep–Jul 2024</strong> — Acceptances: T-VT, JSTSP SI (ISAC), Globecom, Asilomar, SPAWC.</li>
      <li><strong>2021–2023</strong> — Best Paper Awards (SSP, SPAWC, ATC); major acceptances in TWC, TSP, VTM; Academy Fellowship (2023).</li>
    </ul>
  </details>
</div>

<div class="section-card alt">
  <h2>👨‍👩‍👦 Life</h2>
  <div class="life-wrap">
    <div class="life-text">
      Meet <strong>Ben</strong> — my favorite co-author in life. He keeps our sprint velocity high and our snack budget higher.
    </div>
    <div class="life-photo">
      <img src="/homepage/images/Ben.jpg" alt="Ben smiling">
    </div>
  </div>
</div>
