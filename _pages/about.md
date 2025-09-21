---
permalink: /
title: "👋 Hello there, I’m Nhan."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* High-contrast section dividers */
:root { 
  --divider-color: #111; 
  --accent:#1E90FF;       /* keep your original accent blue */
  --ink:#111; 
  --muted:#6b7280; 
  --highlight:#d97706;    /* teal highlight */
}
@media (prefers-color-scheme: dark){
  :root { 
    --divider-color: #eee; 
    --ink:#eee; 
    --muted:#9aa0a6; 
    --highlight:#0d9488;  /* same teal for dark mode */
  }
}
hr.section-divider{
  border: 0;
  border-top: 3px solid var(--divider-color);
  margin: 1.2rem 0 1.2rem 0;
  opacity: 1;
}
.hl-flag{ 
  color:var(--highlight); 
  font-weight:600; 
}
</style>

<style>
  /* --- Sapphire Blue palette with auto light/dark --- */
  :root{
    /* Light mode */
    --link:#2563EB;            /* blue-600 */
    --link-hover:#1D4ED8;      /* blue-700 */
    --bib-bg:#EFF6FF;          /* blue-50 */
    --bib-bg-hover:#DBEAFE;    /* blue-100 */
    --bib-border:#60A5FA;      /* blue-400 */
    --bib-text:#1E3A8A;        /* indigo-900 */
  }
  @media (prefers-color-scheme: dark){
    :root{
      /* Dark mode */
      --link:#93C5FD;          /* blue-300 */
      --link-hover:#60A5FA;    /* blue-400 */
      --bib-bg:#0B1220;        /* deep navy */
      --bib-bg-hover:#13203A;  /* slightly lighter */
      --bib-border:#3B82F6;    /* blue-500 */
      --bib-text:#DBEAFE;      /* blue-200 */
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


👨🏻‍💻 I’m an **Assistant Professor** and **Academy Research Fellow** at Centre for Wireless Communications (CWC), University of Oulu (UOulu), Finland.  
🤖 My research combines rigorous signal processing and machine learning to solve core problems in wireless communications and sensing.

<hr class="section-divider">

## 📚 About
🎓 I received my B.S. in Electronics & Communications Engineering from Hanoi University of Science and Technology (HUST), Vietnam (2014), and my M.S./Ph.D. from Seoul National University of Science and Technology (SeoulTech), South Korea (2017/2020).  
🧑‍🔬 I joined UOulu as a Postdoctoral Researcher in 2020, was conferred the Title of Docent and awarded the prestigious _Academy Research Fellowship_ in 2023, and was promoted to Assistant Professor (tenure track) in 2024.  
🌍 I have also been a Visiting Scholar at North Carolina State University, USA (2019–2020), Weizmann Institute of Science and Ben-Gurion University of the Negev, Israel (2022), and University of California, Irvine (UCI), USA (2023).

**Research interests:** signal processing and optimization; deep unfolding / machine learning for massive MIMO; mmWave/THz communications; ISAC/JCAS; multimodal-sensing-assisted communications.

🏅 **Selected honors:** **Best Paper Awards** (IEEE SPAWC 2024, IEEE SSP 2023, ATC 2021). **Academy of Finland Fellowship** (2023). Exemplary Reviewer of IEEE TCOM (2023). Nokia Foundation Award – Jorma Ollila Grant (2022). **Best Master and Doctoral Dissertation Awards**, SeoulTech, 2020. Samsung Talent Scholarship, Samsung Vietnam R&D Center, 2014.

<hr class="section-divider">

## 🏆 Highlighted publications

<strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, A. L. Swindlehurst, and M. Juntti, 
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10938928" target="_blank">Performance Analysis and Power Allocation for Massive MIMO ISAC</a>," 
<span style=""><em>IEEE Transactions on Signal Processing</em></span>, vol. 73, pp. 1691–1707, Mar. 2025.  
<span class="hl-flag">Top reading in IEEE TSP since publication</span>  

<strong>N. T. Nguyen</strong>, M. Ma, O. Lavi, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti, 
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/47431/nbnfioulu-202401231426.pdf?sequence=1&isAllowed=y" target="_blank">Deep Unfolding Hybrid Beamforming Design for THz Massive MIMO Systems</a>," 
<span style=""><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 3788–3804, Oct. 2023.  
<span class="hl-flag">Top reading in IEEE TSP (2023–2024)</span>  

<strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, and M. Juntti, 
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10214237" target="_blank">Multiuser MIMO Wideband Joint Communications and Sensing System with Subcarrier Allocation</a>," 
<span style=""><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 2997–3013, Aug. 2023.  
<span class="hl-flag">Top reading in IEEE TSP and IEEE SPS Top-25 downloads (2023–2024)</span>  

M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, and M. Juntti, 
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/43260/nbnfioulu-202311243336.pdf?sequence=1&isAllowed=y" target="_blank">Analysis of Oversampling in Uplink Massive MIMO-OFDM with Low-Resolution ADCs</a>," 
<span style=""><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sep. 2023.  
<span class="hl-flag">Best Student Paper Award</span>  

<strong>N. T. Nguyen</strong>, N. Shlezinger, K.-H. Ngo, V.-D. Nguyen, and M. Juntti, 
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44654/nbnfi-fe20231030141814.pdf?sequence=1&isAllowed=y" target="_blank">Joint communications and sensing design for multi-carrier MIMO systems</a>," 
<span style=""><em>IEEE Statistical Signal Processing Workshop (SSP)</em></span>, July 2023.  
<span class="hl-flag">Best Paper Award</span>  

K.-H. Ngo, <strong>N. T. Nguyen</strong>, T. Q. Dinh, T.-M. Hoang, and M. Juntti, 
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44157/nbnfi-fe202301091858.pdf?sequence=1&isAllowed=y" target="_blank">Low-Latency and Secure Computation Offloading Assisted by Hybrid Relay-Reflecting Intelligent Surface</a>," 
<span style=""><em>International Conference on Advanced Technologies for Communications (ATC)</em></span>, Oct. 2021.  
<span class="hl-flag">Best Paper Award</span>  

<hr class="section-divider">

## 📰 Recent news
**Sep 9, 2025** — Paper accepted to **_IEEE Journal on Selected Areas in Communications_**.  
**Aug 20, 2025** — Abolfazl’s paper accepted to **_IEEE Communications Letters_**.  
**Aug 1, 2025** — Abolfazl’s paper accepted to **_IEEE GLOBECOM 2025_**.  
**Jul 16, 2025** — Phuong’s paper accepted to **_Asilomar 2025_**.  
**May 25, 2025** — Two papers accepted to **_IEEE SPAWC 2025_** (by Ali and Smriti).  
**May 17, 2025** — Mengyuan’s paper accepted to **_IEEE Wireless Communications Letters_**.  
**May 4, 2025** — Mengyuan’s paper accepted to **_IEEE Transactions on Wireless Communications_**.  
**Mar 18, 2025** — Paper accepted to **_IEEE Transactions on Signal Processing_**.  

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

![Visits](https://hits.sh/nhanng9115.github.io/homepage.svg?style=flat-square&label=visits)
