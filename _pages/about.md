---
permalink: /
title: "👋 Hello there, I’m Nhan."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* High-contrast section dividers (black in light mode, white in dark mode) */
:root { --divider-color: #111; --accent:#1E90FF; --ink:#111; --muted:#6b7280; }
@media (prefers-color-scheme: dark){
  :root { --divider-color: #eee; --ink:#eee; --muted:#9aa0a6; }
}
hr.section-divider{
  border: 0;
  border-top: 3px solid var(--divider-color);
  margin: 1.2rem 0 1.2rem 0;
  opacity: 1;
}

/* Highlighted publications (compact, light purple) */
:root { --hl-bg:#f5f3ff; --hl-border:rgba(124,58,237,.25); }          /* purple-50 / purple-600 tint */
@media (prefers-color-scheme: dark){
  :root { --hl-bg:#241b35; --hl-border:rgba(203,180,255,.25); }       /* deep purple for dark mode */
}
.hl-wrap { display:grid; gap:.75rem; }
.hl-card{
  border:1.5px solid var(--hl-border);
  border-radius:14px;
  padding:.8rem 1rem;
  background:var(--hl-bg);
}
.hl-title{
  font-weight:700;
  display:flex; align-items:center; gap:.5rem;
  line-height:1.25;
}
.hl-title .icon{ font-size:1.05rem; }
.hl-authors{ margin-top:.1rem; font-size:.98rem; }
.hl-authors strong{ font-weight:800; }
.hl-venue-line{
  margin-top:.1rem;
  font-size:.96rem;
  opacity:.92;
  white-space:normal;
}
.hl-venue-line em{ font-style:italic; }
.hl-flag{ font-weight:700; }
.linklike{ text-decoration:underline; text-underline-offset:2px; }
</style>

👨🏻‍💻 I’m an **Assistant Professor** and **Academy Research Fellow** at Centre for Wireless Communications (CWC), University of Oulu (UOulu), Finland.  
🤖 My research combines rigorous signal processing and machine learning to solve core problems in wireless communications and sensing.

<hr class="section-divider">

## 📚 About
I received my B.S. in Electronics & Communications Engineering from Hanoi University of Science and Technology (HUST), Vietnam (2014), and my M.S./Ph.D. from Seoul National University of Science and Technology (SeoulTech), South Korea (2017/2020). I joined the University of Oulu as a Postdoctoral Researcher in 2020.  
I have also been a Visiting Scholar at North Carolina State University, USA (2019–2020), Weizmann Institute of Science and Ben-Gurion University of the Negev, Israel (2022), and University of California, Irvine (UCI), USA (2023).

**Research interests:** signal processing and optimization; deep unfolding / machine learning for massive MIMO; mmWave/THz communications; ISAC/JCAS; multimodal-sensing-assisted communications.

🏅 **Selected honors:**
- Best Student Paper Award (Mengyuan's work at IEEE 25th SPAWC, 2024).
- Docentship at Faculty of ITEE, UOulu. 
- Best Paper Award (IEEE SSP, 2023).
- **Academy of Finland Fellowship** (2023)
- Exemplary Reviewer of IEEE TCOM (2023)
- Nokia Foundation Award  - Jorma Ollila Grant (2022)
- Best Paper Award (Int. Conf. Advanced Technol. Commun. (ATC), 2021).
- Best Doctoral Dissertation Award, SeoulTech, 2020.
- Best Master Thesis Award, SeoulTech, 2017.
- Excellent Graduation Award, HUST, 2014.
- Samsung Talent Scholarship, Samsung Vietnam R&D Center, 2014.

<hr class="section-divider">

## 🏆 Highlighted publications
<div class="hl-wrap">

  <div class="hl-card">
    <div class="hl-title"><span class="icon">🏅</span> "Performance Analysis and Power Allocation for Massive MIMO ISAC"</div>
    <div class="hl-authors"><strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, A. L. Swindlehurst, M. Juntti</div>
    <div class="hl-venue-line"><em>IEEE Transactions on Signal Processing</em>, vol. 73, pp. 1691–1707, March 2025 — <span class="hl-flag">Top reading list in IEEE TSP</span></div>
  </div>

  <div class="hl-card">
    <div class="hl-title"><span class="icon">⭐</span> "Deep Unfolding Hybrid Beamforming Design for THz Massive MIMO Systems"</div>
    <div class="hl-authors"><strong>N. T. Nguyen</strong>, M. Ma, O. Lavi, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, M. Juntti</div>
    <div class="hl-venue-line"><em>IEEE Transactions on Signal Processing</em>, vol. 71, pp. 3788–3804, Oct. 2023 — <span class="hl-flag">Top reading 2023–2024</span> · <span class="linklike">[PDF]</span> <span class="linklike">[Code]</span></div>
  </div>

  <div class="hl-card">
    <div class="hl-title"><span class="icon">📈</span> "Multiuser MIMO Wideband Joint Communications and Sensing System with Subcarrier Allocation"</div>
    <div class="hl-authors"><strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, M. Juntti</div>
    <div class="hl-venue-line"><em>IEEE Transactions on Signal Processing</em>, vol. 71, pp. 2997–3013, Aug. 2023 — <span class="hl-flag">IEEE SPS Top-25 downloads (Sep 2023–Sep 2024)</span> · <span class="linklike">[PDF]</span> <span class="linklike">[Code]</span></div>
  </div>

  <div class="hl-card">
    <div class="hl-title"><span class="icon">🥇</span> "An analysis of oversampling in uplink massive MIMO-OFDM with low-resolution ADCs"</div>
    <div class="hl-authors">M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, M. Juntti</div>
    <div class="hl-venue-line"><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em>, Sept. 2023, Shanghai, China — <span class="hl-flag">Best Student Paper Award</span></div>
  </div>

  <div class="hl-card">
    <div class="hl-title"><span class="icon">🥇</span> "Joint communications and sensing design for multi-carrier MIMO systems"</div>
    <div class="hl-authors"><strong>N. T. Nguyen</strong>, N. Shlezinger, K.-H. Ngo, V.-D. Nguyen, M. Juntti</div>
    <div class="hl-venue-line"><em>IEEE Statistical Signal Processing Workshop (SSP)</em>, July 2023, Hanoi, Vietnam — <span class="hl-flag">Best Paper Award</span></div>
  </div>

  <div class="hl-card">
    <div class="hl-title"><span class="icon">🥇</span> "Low-Latency and Secure Computation Offloading Assisted by Hybrid Relay-Reflecting Intelligent Surface"</div>
    <div class="hl-authors">K.-H. Ngo, <strong>N. T. Nguyen</strong>, T. Q. Dinh, T.-M. Hoang, M. Juntti</div>
    <div class="hl-venue-line"><em>IEEE Conference on Advanced Technologies for Communications (ATC)</em>, Oct. 2021, Hanoi, Vietnam — <span class="hl-flag">Best Paper Award</span></div>
  </div>

</div>

<hr class="section-divider">

## 📰 Recent news
- **Sept 9, 2025** — Paper accepted to **IEEE JSAC**: *Energy Efficiency for Massive MIMO ISAC*.  
- **Aug 20, 2025** — Abolfazl’s paper accepted to **IEEE Communications Letters**.  
- **Aug 1, 2025** — Abolfazl’s paper accepted to **GLOBECOM 2025**.  
- **Jul 16, 2025** — Phuong’s paper accepted to **Asilomar 2025**.  
- **May 25, 2025** — Two papers accepted to **IEEE SPAWC** (by Ali and Smriti).  
- **May 17, 2025** — Mengyuan’s paper accepted to **IEEE Wireless Communications Letters**.  
- **May 4, 2025** — Mengyuan’s paper accepted to **IEEE Transactions on Wireless Communications**.  
- **Mar 18, 2025** — Paper accepted to **IEEE Transactions on Signal Processing**: *Performance Analysis and Power Allocation for Massive MIMO ISAC*.  

<details>
<summary><strong>🕰️ Older highlights</strong></summary>

<ul>
  <li><b>Dec 21, 2024</b> — Three papers accepted to <i>IEEE WCNC</i>.</li>
  <li><b>Dec 20, 2024</b> — Two papers accepted to <i>IEEE ICASSP</i>.</li>
  <li><b>Dec 12, 2024</b> — EuCAP 2025 acceptance (ML-Assisted RIS for ISAC).</li>
  <li><b>Oct 24, 2024</b> — TSP paper listed among SPS Top 25 downloads (Sep 2023–Sep 2024).</li>
  <li><b>Sep–Jul 2024</b> — Multiple acceptances: T-VT, JSTSP SI (ISAC), Globecom, Asilomar, SPAWC.</li>
  <li><b>Earlier (2021–2023)</b> — Best Paper Awards (SSP, SPAWC, ATC); major acceptances in TWC, TSP, VTM; Academy Fellowship awarded (2023).</li>
</ul>

</details>
