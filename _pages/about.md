---
permalink: /
title: "Homepage"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* ------- palette & link styles (kept) ------- */
:root{
  --divider-color:#111; --accent:#1E90FF; --ink:#111; --muted:#6b7280;
  --link:#2563EB; --link-hover:#1D4ED8;
  /* Badge color = same as Publications page */
  --flag-fg:#0F766E; --flag-bg:#CCFBF1; --flag-bd:#14B8A6;
}
@media (prefers-color-scheme: dark){
  :root{
    --divider-color:#eee; --ink:#eee; --muted:#9aa0a6;
    --link:#93C5FD; --link-hover:#60A5FA;
    --flag-fg:#022C22; --flag-bg:#5EEAD4; --flag-bd:#2DD4BF;
  }
}

/* Thick section divider */
hr.section-divider{ border:0; border-top:3px solid var(--divider-color); margin:1.2rem 0; opacity:1; }

/* ====== Justify long lines (left & right edges) ====== */
.justify p, .justify li, .news-list .news-item{ 
  text-align: justify; text-align-last: left; text-justify: inter-word; 
  -webkit-hyphens:auto; hyphens:auto; line-height:1.45;
}
/* keep non-text blocks left-aligned */
.justify pre, .justify code, .justify details, .justify summary, .justify button{ text-align:left; }

/* ====== Teal badge (same as Publications page) ====== */
.flag{
  display:inline-block; font-weight:700; color:var(--flag-fg);
  background:var(--flag-bg); border:1px solid var(--flag-bd);
  border-radius:9999px; padding:2px 8px; line-height:1; white-space:nowrap;
}

/* Main content link styling */
.page__content p a[href], .page__content li a[href]{
  color:var(--link) !important; text-decoration:underline; text-decoration-color:var(--link);
  text-underline-offset:2px; text-decoration-thickness:1.5px; transition:color .15s,text-decoration-color .15s;
}
.page__content p a[href]:hover, .page__content li a[href]:hover{
  color:var(--link-hover) !important; text-decoration-color:var(--link-hover);
}

/* ====== News list: make older = recent style ====== */
.news-list{ margin:0; padding:0; }
.news-item{ list-style:none; margin:0 0 .35rem 0; }
.news-date{ font-weight:700; margin-right:.25rem; white-space:nowrap; }
.news-body i{ font-style:italic; }
</style>

## 👋 Hello there, I’m Nhan.
<div class="justify">
👨🏻‍💻 I’m an **Assistant Professor** and <span class="flag">Academy Research Fellowship</span> holder at Centre for Wireless Communications (CWC), University of Oulu (UOulu), Finland.  
🤖 My research combines rigorous signal processing and machine learning to solve core problems in wireless communications and sensing.
</div>

<hr class="section-divider">

## 📚 About
<div class="justify">
🎓 I received my B.S. in Electronics & Communications Engineering from Hanoi University of Science and Technology (HUST), Vietnam (2014), and my M.S./Ph.D. from Seoul National University of Science and Technology (SeoulTech), South Korea (2017/2020).  
🧑‍🔬 I joined UOulu as a Postdoctoral Researcher in 2020, was conferred the Title of Docent and awarded the prestigious <span class="flag">Academy Research Fellowship</span> in 2023, and was promoted to Assistant Professor (tenure track) in 2024.  
🌍 I have also been a Visiting Scholar at North Carolina State University, USA (2019–2020), Weizmann Institute of Science and Ben-Gurion University of the Negev, Israel (2022), and University of California, Irvine (UCI), USA (2023).

**Research interests:** signal processing and optimization; deep unfolding / machine learning for massive MIMO; mmWave/THz communications; ISAC/JCAS; multimodal-sensing-assisted communications.

🏅 **Selected honors:** <span class="flag">Best Paper Awards</span> (IEEE SPAWC 2024, IEEE SSP 2023, ATC 2021). <span class="flag">Academy of Finland Fellowship</span> (2023). Exemplary Reviewer of IEEE TCOM (2023). Nokia Foundation Award – Jorma Ollila Grant (2022). <span class="flag">Best Master and Doctoral Dissertation Awards</span>, SeoulTech, 2020. Samsung Talent Scholarship, Samsung Vietnam R&D Center, 2014.
</div>

<hr class="section-divider">

## 🏆 Highlighted publications
<div class="justify">

<strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, A. L. Swindlehurst, and M. Juntti, 
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10938928" target="_blank">Performance Analysis and Power Allocation for Massive MIMO ISAC</a>," 
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 73, pp. 1691–1707, Mar. 2025.  
<span class="flag">Top reading in IEEE TSP since publication</span>  

<strong>N. T. Nguyen</strong>, M. Ma, O. Lavi, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti, 
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/47431/nbnfioulu-202401231426.pdf?sequence=1&isAllowed=y" target="_blank">Deep Unfolding Hybrid Beamforming Design for THz Massive MIMO Systems</a>," 
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 3788–3804, Oct. 2023.  
<span class="flag">Top reading in 2023–2024</span>  

<strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, and M. Juntti, 
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10214237" target="_blank">Multiuser MIMO Wideband Joint Communications and Sensing System with Subcarrier Allocation</a>," 
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 2997–3013, Aug. 2023.  
<span class="flag">Top reading &amp; SPS Top-25 downloads (2023–2024)</span>  

M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, and M. Juntti, 
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/43260/nbnfioulu-202311243336.pdf?sequence=1&isAllowed=y" target="_blank">Analysis of Oversampling in Uplink Massive MIMO-OFDM with Low-Resolution ADCs</a>," 
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sep. 2023.  
<span class="flag">Best Student Paper Award</span>  

<strong>N. T. Nguyen</strong>, N. Shlezinger, K.-H. Ngo, V.-D. Nguyen, and M. Juntti, 
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44654/nbnfi-fe20231030141814.pdf?sequence=1&isAllowed=y" target="_blank">Joint communications and sensing design for multi-carrier MIMO systems</a>," 
<span><em>IEEE Statistical Signal Processing Workshop (SSP)</em></span>, July 2023.  
<span class="flag">Best Paper Award</span>  

K.-H. Ngo, <strong>N. T. Nguyen</strong>, T. Q. Dinh, T.-M. Hoang, and M. Juntti, 
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44157/nbnfi-fe202301091858.pdf?sequence=1&isAllowed=y" target="_blank">Low-Latency and Secure Computation Offloading Assisted by Hybrid Relay-Reflecting Intelligent Surface</a>," 
<span><em>International Conference on Advanced Technologies for Communications (ATC)</em></span>, Oct. 2021.  
<span class="flag">Best Paper Award</span>  

</div>

<hr class="section-divider">

## 📰 Recent news
<div class="news-list justify">
  <div class="news-item"><span class="news-date">Sep 23, 2025:</span> Ali's and Phuong's papers accepted to <i>IEEE NFV-SDN 2025</i>.</div>
  <div class="news-item"><span class="news-date">Sep 9, 2025:</span> Paper accepted to <i>IEEE Journal on Selected Areas in Communications</i>.</div>
  <div class="news-item"><span class="news-date">Aug 20, 2025:</span> Abolfazl’s paper accepted to <i>IEEE Communications Letters</i>.</div>
  <div class="news-item"><span class="news-date">Aug 1, 2025:</span> Abolfazl’s paper accepted to <i>IEEE GLOBECOM 2025</i>.</div>
  <div class="news-item"><span class="news-date">Jul 16, 2025:</span> Phuong’s paper accepted to <i>Asilomar 2025</i>.</div>
  <div class="news-item"><span class="news-date">May 25, 2025:</span> Two papers accepted to <i>IEEE SPAWC 2025</i> (by Ali and Smriti).</div>
  <div class="news-item"><span class="news-date">May 17, 2025:</span> Mengyuan’s paper accepted to <i>IEEE Wireless Communications Letters</i>.</div>
  <div class="news-item"><span class="news-date">May 4, 2025:</span> Mengyuan’s paper accepted to <i>IEEE Transactions on Wireless Communications</i>.</div>
  <div class="news-item"><span class="news-date">Mar 18, 2025:</span> Paper accepted to <i>IEEE Transactions on Signal Processing</i>.</div>
</div>

<details>
  <summary><strong>🕰️ Older highlights</strong></summary>
  <div class="news-list justify" style="margin-top:.5rem;">
    <div class="news-item"><span class="news-date">Dec 21, 2024:</span> Three papers accepted to <i>IEEE WCNC</i>.</div>
    <div class="news-item"><span class="news-date">Dec 20, 2024:</span> Two papers accepted to <i>IEEE ICASSP</i>.</div>
    <div class="news-item"><span class="news-date">Dec 12, 2024:</span> EuCAP 2025 acceptance (ML-Assisted RIS for ISAC).</div>
    <div class="news-item"><span class="news-date">Oct 24, 2024:</span> TSP paper listed among SPS Top-25 downloads (Sep 2023–Sep 2024).</div>
    <div class="news-item"><span class="news-date">Sep–Jul 2024:</span> Multiple acceptances: T-VT, JSTSP SI (ISAC), GLOBECOM, Asilomar, SPAWC.</div>
    <div class="news-item"><span class="news-date">2021–2023:</span> <span class="flag">Best Paper Awards</span> (SSP, SPAWC, ATC); major acceptances in TWC, TSP, VTM; <span class="flag">Academy Fellowship</span> awarded (2023).</div>
  </div>
</details>

![Visits](https://hits.sh/nhanng9115.github.io/homepage.svg?style=flat-square&label=visits)
