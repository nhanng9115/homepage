---
permalink: /
title: "Homepage"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* =========================
   Theme scope: MAIN CONTENT ONLY
   (navigation/sidebar untouched)
   Palette: Sapphire Blue (clean, academic)
   ========================= */

/* Light mode defaults */
:root{
  --divider-color:#111;
  --accent:#1E90FF;   /* keep your original accent blue */
  --ink:#111;
  --muted:#6b7280;
  --highlight:#d97706; /* your badge accent */

  /* Main-text link colors */
  --link:#2563EB;        /* blue-600 */
  --link-hover:#1D4ED8;  /* blue-700 */

  /* Keyword highlight chip */
  --key-fg:#1E3A8A;      /* indigo-900 */
  --key-bg:#EFF6FF;      /* blue-50 */
  --key-brd:#60A5FA;     /* blue-400 */
}

/* Dark mode variants */
@media (prefers-color-scheme: dark){
  :root{
    --divider-color:#eee;
    --ink:#eee;
    --muted:#9aa0a6;
    --highlight:#F59E0B;  /* better contrast for badges */

    --link:#93C5FD;       /* blue-300 */
    --link-hover:#60A5FA; /* blue-400 */

    --key-fg:#DBEAFE;     /* blue-200 */
    --key-bg:#0B1220;     /* deep navy */
    --key-brd:#3B82F6;    /* blue-500 */
  }
}

/* Section dividers (unchanged) */
hr.section-divider{
  border:0;
  border-top:3px solid var(--divider-color);
  margin:1.2rem 0;
  opacity:1;
}

/* Badge/highlight text (unchanged color variable) */
.hl-flag{
  color:var(--highlight);
  font-weight:600;
}

/* ===== MAIN TEXT LINK STYLES (scoped) =====
   Only affect links inside the main content area */
.page__content p a[href],
.page__content li a[href]{
  color:var(--link) !important;
  text-decoration:underline;
  text-decoration-color:var(--link);
  text-underline-offset:2px;
  text-decoration-thickness:1.5px;
  transition:color .15s ease, text-decoration-color .15s ease;
}
.page__content p a[href]:hover,
.page__content p a[href]:focus,
.page__content li a[href]:hover,
.page__content li a[href]:focus{
  color:var(--link-hover) !important;
  text-decoration-color:var(--link-hover);
  outline:none;
}

/* ===== Keyword color highlight (use instead of bold black) =====
   Usage: wrap words with <span class="key">…</span> */
.page__content .key{
  color:var(--key-fg);
  background:var(--key-bg);
  border:1px solid var(--key-brd);
  border-radius:.35rem;
  padding:0 .28em;
  font-weight:600;
  white-space:nowrap;
}

/* Title-only link style (wins over the generic rule) */
.page__content a.pub-title[href]{
  color:#0056b3 !important;
  font-weight:600;
  text-decoration:underline;
  text-decoration-thickness:1.5px;
  text-underline-offset:2px;
  transition:color .2s ease;
}
.page__content a.pub-title[href]:hover{ color:#003e82 !important; }

/* optional dark mode */
@media (prefers-color-scheme: dark){
  .page__content a.pub-title[href]{ color:#60A5FA !important; }
  .page__content a.pub-title[href]:hover{ color:#93C5FD !important; }
}
</style>

## Hello, I’m Nhan — welcome to my page. ![Visits](https://hits.sh/nhanng9115.github.io/homepage.svg?style=flat-square&label=visits)
👨🏻‍💻 I’m an **Assistant Professor** and **Academy Research Fellow** at Centre for Wireless Communications (CWC), University of Oulu (UOulu), Finland.  
🤖 My research combines rigorous signal processing and machine learning to solve core problems in wireless communications and sensing.

<hr class="section-divider">

## 📚 About
🎓 I received my B.S. in Electronics & Communications Engineering from Hanoi University of Science and Technology (HUST), Vietnam (2014), and my M.S./Ph.D. from Seoul National University of Science and Technology (SeoulTech), South Korea (2017/2020).  
🧑‍🔬 I joined UOulu as a Postdoctoral Researcher in 2020, was conferred the <span style="color:#dc2626; font-weight:700;">_Title of Docent_</span> and awarded the prestigious <span style="color:#dc2626; font-weight:700;">_Academy Research Fellowship_</span> in 2023, and was promoted to Assistant Professor (tenure track) in 2024.  
🌍 I have also been a Visiting Scholar at North Carolina State University, USA (2019–2020), Weizmann Institute of Science and Ben-Gurion University of the Negev, Israel (2022), and University of California, Irvine (UCI), USA (2023).

**Research interests:** signal processing and optimization; deep unfolding / machine learning for massive MIMO; mmWave/THz communications; ISAC/JCAS; multimodal-sensing-assisted communications.

🏅 **Selected honors:** <span style="color:#dc2626; font-weight:700;">4 Best Paper Awards</span> (ISAP 2025, IEEE SPAWC 2024, IEEE SSP 2023, ATC 2021). <span style="color:#dc2626; font-weight:700;">Academy of Finland Fellowship</span> (2023). Exemplary Reviewer of IEEE TCOM (2023). Nokia Foundation Award – Jorma Ollila Grant (2022). <span style="color:#dc2626; font-weight:700;">Best Master and Doctoral Dissertation Awards</span>, SeoulTech, 2020. Samsung Talent Scholarship, Samsung Vietnam R&D Center, 2014.

<hr class="section-divider">

## 🏆 Highlighted publications

<strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, A. L. Swindlehurst, and M. Juntti, 
"<a class="pub-title" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10938928" target="_blank">Performance Analysis and Power Allocation for Massive MIMO ISAC</a>," 
<span style=""><em>IEEE Transactions on Signal Processing</em></span>, vol. 73, pp. 1691–1707, Mar. 2025.  
<span style="color:#dc2626; font-weight:700;">Top reading in IEEE TSP since publication</span>  

<strong>N. T. Nguyen</strong>, L. V. Nguyen, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti, 
"<a class="pub-title" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10684532&tag=1" target="_blank">Joint Communications and Sensing Hybrid Beamforming Design via Deep Unfolding</a>," 
<span style=""><em>IEEE Journal of Selected Topics in Signal Processing</em></span>, vol. 18, no. 5, pp. 901–916, Jul. 2024.  
<span style="color:#dc2626; font-weight:700;">Top reading in IEEE TSP and IEEE SPS Top-25 downloads (2024–2025)</span> 

<strong>N. T. Nguyen</strong>, M. Ma, O. Lavi, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti, 
"<a class="pub-title" href="https://oulurepo.oulu.fi/bitstream/handle/10024/47431/nbnfioulu-202401231426.pdf?sequence=1&isAllowed=y" target="_blank">Deep Unfolding Hybrid Beamforming Design for THz Massive MIMO Systems</a>," 
<span style=""><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 3788–3804, Oct. 2023.  
<span style="color:#dc2626; font-weight:700;">Top reading in IEEE TSP (2023–2024)</span>  

<strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, and M. Juntti, 
"<a class="pub-title" href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10214237" target="_blank">Multiuser MIMO Wideband Joint Communications and Sensing System with Subcarrier Allocation</a>," 
<span style=""><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 2997–3013, Aug. 2023.  
<span style="color:#dc2626; font-weight:700;">Top reading in IEEE TSP and IEEE SPS Top-25 downloads (2023–2024)</span>  

<strong>N. T. Nguyen</strong> and M. Juntti, 
"<a class="pub-title" href="" target="_blank">Hybrid RIS-aided Wireless Communications</a>," 
<span style=""><em>International Symposium on Antennas and Propagation (ISAP)</em></span>, Nov. 2025.  
<span style="color:#dc2626; font-weight:700;">Best Paper Award</span> 

M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, and M. Juntti, 
"<a class="pub-title" href="https://oulurepo.oulu.fi/bitstream/handle/10024/43260/nbnfioulu-202311243336.pdf?sequence=1&isAllowed=y" target="_blank">Analysis of Oversampling in Uplink Massive MIMO-OFDM with Low-Resolution ADCs</a>," 
<span style=""><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sep. 2023.  
<span style="color:#dc2626; font-weight:700;">Best Student Paper Award</span>  

<strong>N. T. Nguyen</strong>, N. Shlezinger, K.-H. Ngo, V.-D. Nguyen, and M. Juntti, 
"<a class="pub-title" href="https://oulurepo.oulu.fi/bitstream/handle/10024/44654/nbnfi-fe20231030141814.pdf?sequence=1&isAllowed=y" target="_blank">Joint communications and sensing design for multi-carrier MIMO systems</a>," 
<span style=""><em>IEEE Statistical Signal Processing Workshop (SSP)</em></span>, July 2023.  
<span style="color:#dc2626; font-weight:700;">Best Paper Award</span>  

K.-H. Ngo, <strong>N. T. Nguyen</strong>, T. Q. Dinh, T.-M. Hoang, and M. Juntti, 
"<a class="pub-title" href="https://oulurepo.oulu.fi/bitstream/handle/10024/44157/nbnfi-fe202301091858.pdf?sequence=1&isAllowed=y" target="_blank">Low-Latency and Secure Computation Offloading Assisted by Hybrid Relay-Reflecting Intelligent Surface</a>," 
<span style=""><em>International Conference on Advanced Technologies for Communications (ATC)</em></span>, Oct. 2021.  
<span style="color:#dc2626; font-weight:700;">Best Paper Award</span>  

<hr class="section-divider">

## 📰 Recent news
- **Dec 12, 2025:** 🏆📈 Our paper “Joint Communications and Sensing Hybrid Beamforming Design via Deep Unfolding” is listed among the 25 most downloaded papers in **_IEEE Journal of Selected Topics in Signal Processing_** for Sep. 2024 to Sep. 2025. An invited webinar highlighting the key findings will be released early next year.
- **Oct 30, 2025:** 🏆 Our paper “Hybrid RIS Aided Wireless Communications” won the **Best Paper Award** at **_ISAP 2025_**.
- **Sep 23, 2025:** 📄 Ali’s and Phuong’s papers accepted to **_IEEE NFV-SDN 2025_**.
- **Sep 9, 2025:** 📄 Paper accepted to **_IEEE Journal on Selected Areas in Communications_**.
- **Aug 20, 2025:** 📄 Abolfazl’s paper accepted to **_IEEE Communications Letters_**.
- **Aug 1, 2025:** 📄 Abolfazl’s paper accepted to **_IEEE GLOBECOM 2025_**.
- **Jul 16, 2025:** 📄 Phuong’s paper accepted to **_Asilomar 2025_**.
- **May 25, 2025:** 📄📄 Two papers accepted to **_IEEE SPAWC 2025_** by Ali and Smriti.
- **May 17, 2025:** 📄 Mengyuan’s paper accepted to **_IEEE Wireless Communications Letters_**.
- **May 4, 2025:** 📄 Mengyuan’s paper accepted to **_IEEE Transactions on Wireless Communications_**.
- **Mar 18, 2025:** 📄 Paper accepted to **_IEEE Transactions on Signal Processing_**.

## 🕰️ Older highlights
- **Dec 21, 2024:** 📄 Three papers accepted to <i>IEEE WCNC</i>.
- **Dec 20, 2024:** 📄 Two papers accepted to <i>IEEE ICASSP</i>.
- **Dec 12, 2024:** 📄 EuCAP 2025 acceptance on ML-assisted RIS for ISAC.
- **Oct 24, 2024:** 🏆📈 TSP paper listed among SPS Top 25 downloads for Sep 2023 to Sep 2024.
- **Sep to Jul 2024:** 📄 Multiple acceptances in T-VT, JSTSP SI on ISAC, GLOBECOM, Asilomar, and SPAWC.
- **2021 to 2023:** 🏆 Best Paper Awards at SSP, SPAWC, and ATC; major journal acceptances including TWC, TSP, and VTM; Academy Fellowship awarded in 2023.

