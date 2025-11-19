---
permalink: /publications/
title: "Publications"
---

<style>
/* Fully justify publication lines, but keep code/BibTeX left-aligned */
.pub-justify li {
  text-align: justify;
  text-align-last: left;      /* last line stays left */
  text-justify: inter-word;
  -webkit-hyphens: auto;      /* nicer wraps */
  hyphens: auto;
  line-height: 1.4;
}

/* Left-align code, BibTeX, or collapsible details */
.pub-justify li pre,
.pub-justify li code,
.pub-justify li details,
.pub-justify li summary {
  text-align: left;
  text-align-last: left;
}

/* Style for publication titles (linked PDFs) */
.pub-justify li a {
  color: #0056b3;             /* professional blue */
  font-weight: 600;           /* semi-bold for emphasis */
  text-decoration: underline; /* always underline */
  text-decoration-thickness: 1.5px; /* slightly thicker underline */
  text-underline-offset: 2px; /* spacing between text and line */
  transition: color 0.2s ease;
}

/* Hover effect */
.pub-justify li a:hover {
  color: #d6336c;             /* elegant magenta hover */
}
</style>

<!-- ======================== Show or hide bibtex ======================== -->
show_bibtex: false   # change to true to show
{% unless page.show_bibtex %}
<style>
  details { display: none !important; }
</style>
{% endunless %}

# 📝 Submitted and Under Revision  

<ol class="pub-justify">

<!-- ======================== SUBMISSION 12 ======================== -->
<li>
I. Welgamage, S. Tavakolian, A. Zaker, A. Alkhateeb, M. Juntti, and <strong>N. T. Nguyen</strong>,  
"Knowledge distillation for distributed vision-assisted beam management in mmWave communications," 2025. (<strong>manuscript in preparation</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s12">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s12', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 13 ======================== -->
<li>
S. Tavakolian, A. Zaker, A. Alkhateeb, M. Juntti, and <strong>N. T. Nguyen</strong>,  
"GNN-enabled mmWave beam prediction using sub-6GHz channels in cell-free massive MIMO systems," 2025. (<strong>manuscript in preparation</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s13">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s13', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 1 ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2509.11725" target="_blank">Attention-Enhanced Learning for Sensing-Assisted Long-Term Beam Tracking in mmWave Communications</a>,"  
<span><em>IEEE ICASSP</em></span>, 2025. (<strong>submitted</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s1">@article{ma2025attention,
  title={Attention-Enhanced Learning for Sensing-Assisted Long-Term Beam Tracking in {mmWave} Communications},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Shlezinger, Nir and Eldar, Yonina C and Juntti, Markku},
  journal={arXiv preprint arXiv:2509.11725},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s1', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 2 ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2509.11419" target="_blank">Knowledge Distillation for Sensing-Assisted Long-Term Beam Tracking in mmWave Communications</a>,"  
<span><em>IEEE Transactions on Communications</em></span>, 2025. (<strong>submitted</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s2">@article{ma2025knowledge,
  title={Knowledge Distillation for Sensing-Assisted Long-Term Beam Tracking in {mmWave} Communications},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  journal={arXiv preprint arXiv:2509.11419},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s2', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 5 ======================== -->
<li>
T. Fang, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"Deep Unfolded Shifted Power Iteration based ISAC Beamforming for Sum Rate and CRLB Balancing,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, 2025. (<strong>submitted</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s5">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s5', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 6 ======================== -->
<li>
T. Fang, M. Ma, M. Juntti, N. Shlezinger, A. L. Swindlehurst, and <strong>N. T. Nguyen</strong>,  
"<a href="https://arxiv.org/pdf/2503.09489" target="_blank">Optimal ISAC Beamforming Structure and Efficient Algorithms for Sum Rate and CRLB Balancing</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, 2025. (<strong>submitted</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s6">@article{fang2025optimal,
  title={Optimal {ISAC} Beamforming Structure and Efficient Algorithms for Sum Rate and {CRLB} Balancing},
  author={Fang, Tianyu and Ma, Mengyuan and Juntti, Markku and Shlezinger, Nir and Swindlehurst, A Lee and Nguyen, Nhan Thanh},
  journal={arXiv preprint arXiv:2503.09489},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s6', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 7 ======================== -->
<li>
T. D. Gian, V.-D. Nguyen, Vo P. S., <strong>N. T. Nguyen</strong>, D. T. Hoang, D. N. Nguyen, Nguyen C. L., and S. Chatzinotas,  
"WiLHPE: Advanced WiFi-based HPE with Lightweight Dynamic Convolutional Kernels and Multi-Modal Sensors,"  
<span><em>IEEE Transactions on Mobile Computing</em></span>, 2025. (<strong>submitted</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s7">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s7', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 8 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, M. Ma, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"Knowledge distillation for collaborative learning in distributed communications and sensing,"  
<span><em>IEEE Communications Magazine</em></span>, 2025. (<strong>submitted</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s8">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s8', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 11 ======================== -->
<li>
A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2509.19092" target="_blank">Data-free knowledge distillation for LiDAR-aided beam tracking</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, 2025. (<strong>submitted</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s11">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s11', this); return false;">Copy</button></div></details>
</li>


<!-- ======================== SUBMISSION 3 ======================== -->
<li>
I. Perera, <strong>N. T. Nguyen</strong>, P. Pirinen, and N. Rajatheva,,  
"Bi-Static ISAC Beamforming Design in Multi-User MIMO Systems,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, 2025. (<strong>major revision</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s3">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s3', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 3 ======================== -->
<li>
S. Uniyal, <strong>N. T. Nguyen</strong>, G. Kumar, M. D. Renzo, and M. Juntti,  
"Outage, Symbol Error Probability, and Rate of RIS-Assisted MIMO Systems with Phase Errors,"  
<span><em>IEEE Transactions on Communications</em></span>, 2025. (<strong>major revision</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s3">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s3', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 4 ======================== -->
<li>
S. Bhandari, Thang X. Vu, <strong>N. T. Nguyen</strong>, and S. Chatzinotas,  
"ISAC-Enabled Handover Design in LEO Satellite Networks,"  
<span><em>IEEE Transactions on Communications</em></span>, 2025. (<strong>major revision</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s4">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s4', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== SUBMISSION 10 ======================== -->
<li>
L. V. Nguyen, R. Liu, <strong>N. T. Nguyen</strong>, M. Juntti, B. Ottersten, and A. L. Swindlehurst,  
"<a href="https://arxiv.org/pdf/2504.14281" target="_blank">Exploiting Symmetric Non-Convexity for Multi-Objective Symbol-Level DFRC Signal Design</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, 2025. (<strong>minor revision</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s10">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s10', this); return false;">Copy</button></div></details>
</li>

</ol>


<hr style="height:6px;background:currentColor;border:0;border-radius:9999px;opacity:.6;margin:28px 0;">
# 📄 Journal Publications

<ol class="pub-justify">

<!-- ======================== PAPER 1 ======================== -->
<li>
P. Zivuku, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, K. Ntontin, S. Chatzinotas, and B. Ottersten,  
"Resource Allocation for RIS-Enhanced OFDM-MIMO ISAC Systems,"  
<span><em>IEEE Transactions on Communications</em></span>, 2025. (<strong>accepted</strong>)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-s9">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-s9', this); return false;">Copy</button></div></details>
</li>

<li>
  D. Abueida, M. A. Albreem, S. Abdallah, A. A. Salem, S. Shahabuddin, K. Alnajjar, M. Saad, <strong>N. T. Nguyen</strong>, M. Juntti,  
  "<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/59037/nbnfioulu-202510296487.pdf?sequence=1&isAllowed=y" target="_blank">Signal Processing for Cell-Free Massive MIMO: Techniques and Trends in Estimation, Detection, and Precoding</a>,"  
  <span><em>IEEE Open Journal of the Communications Society</em></span>, 2025. (accepted)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-1"></code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-1', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 1 ======================== -->
<li>
  H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,  
  "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"  
  <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-1">@article{nguyen2025energy,
  title={Energy Efficiency for Massive {MIMO} Integrated Sensing and Communication Systems},
  author={Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal={IEEE J. Sel. Areas Commun.},
  volume={},
  number={},
  pages={},
  year={2025},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-1', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 2 ======================== -->
<li>
A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2503.14054" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"  
<span><em>IEEE Communications Letters</em></span>, 2025. (accepted)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-2">@article{zakeri2025dynamic,
  title={Dynamic Joint Communications and Sensing Precoding Design: {A Lyapunov} Approach},
  author={Zakeri, Abolfazl and Nguyen, Nhan Thanh and Alkhateeb, Ahmed and Juntti, Markku},
  journal={arXiv preprint arXiv:2503.14054},
  volume={},
  number={},
  pages={},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-2', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 3 ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11008697" target="_blank">Digital and Hybrid Precoding Designs in Massive MIMO with Low-Resolution ADCs</a>,"  
<span><em>IEEE Wireless Communications Letters</em></span>, vol. 14, no. 8, pp. 2446–2450, Aug. 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-3">@article{ma2025digital,
  title={Digital and Hybrid Precoding Designs in Massive {MIMO} with Low-Resolution {ADCs}},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Atzeni, Italo and Swindlehurst, A Lee and Juntti, Markku},
  journal={IEEE Wireless Commun. Lett.},
  volume={14},
  number={8},
  pages={2446--2450},
  year={2025},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-3', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 4 ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11006401" target="_blank">Joint Beamforming Design and Bit Allocation in Massive MIMO with Resolution-Adaptive ADCs</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, 2025. (accepted) 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-4">@article{ma2025joint,
  title={Joint beamforming design and bit allocation in massive {MIMO} with resolution-adaptive {ADCs}},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Atzeni, Italo and Juntti, Markku},
  journal={IEEE Trans. Wireless Commun.},
  volume={},
  number={},
  pages={},
  year={2025},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-4', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 5 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10938928" target="_blank">Performance Analysis and Power Allocation for Massive MIMO ISAC</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 73, pp. 1691–1707, Mar. 2025. <span style="color:#dc2626; font-weight:700;">(Top reading 2025)</span>
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-5">@article{nguyen2025performance,
  title={Performance analysis and power allocation for massive {MIMO ISAC} systems},
  author={Nguyen, Nhan Thanh and Nguyen, Van-Dinh and Nguyen, Hieu V and Ngo, Hien Quoc and Swindlehurst, A Lee and Juntti, Markku},
  journal={IEEE Trans. Signal Process.},
  volume={73},
  number={},
  pages={1691–1707},
  year={2025},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-5', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 6 ======================== -->
<li>
E. Egashira, D. M. Osorio, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53753/nbnfioulu-202501171238.pdf?sequence=1" target="_blank">Secure mmWave MIMO Networks Employing Hybrid Active-Passive RIS</a>,"  
<span><em>IEEE Transactions on Communications</em></span>, 2024 (accepted). 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-6">@article{egashira2024secure,
  title={Secure mmWave {MIMO} Networks Employing Hybrid Active-Passive {RIS}},
  author={Egashira, Edson Nobuyuki and Osorio, Diana Pamela Moya and Nguyen, Nhan Thanh and Juntti, Markku},
  journal={IEEE Trans. Commun.},
  volume={},
  number={},
  pages={},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-6', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 7 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, L. V. Nguyen, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10684532" target="_blank">Joint Communications and Sensing Hybrid Beamforming Design via Deep Unfolding</a>,"  
<span><em>IEEE Journal of Selected Topics in Signal Processing</em></span>, vol. 18, no. 5, pp. 901–916, Jul. 2024. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-7">@article{nguyen2024joint,
  title={Joint communications and sensing hybrid beamforming design via deep unfolding},
  author={Nguyen, Nhan Thanh and Nguyen, Ly V and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  journal={IEEE J. Sel. Topics Signal Process.},
  volume={18},
  number={5},
  pages={901–916},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-7', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 8 ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10697466" target="_blank">Switch-Based Hybrid Beamforming Transceiver Design for Wideband Communications With Beam Squint</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 74, no. 2, pp. 2840–2855, Sep. 2024. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-8">@article{ma2024switch,
  title={Switch-based hybrid beamforming transceiver design for wideband communications with beam squint},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Juntti, Markku},
  journal={IEEE Trans. Veh. Technol.},
  volume={74},
  number={2},
  pages={2840–2855},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-8', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 9 ======================== -->
<li>
I. Bilbao, E. Iradier, J. Montalban, P. Angueira, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10568545" target="_blank">Deep Unfolding-Powered Analog Beamforming for In-Band Full-Duplex</a>,"  
<span><em>IEEE Open Journal of the Communications Society</em></span>, vol. 5, pp. 3753–3761, Jun. 2024.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-9">@article{bilbao2024deep,
  title={Deep unfolding-powered analog beamforming for in-band full-duplex},
  author={Bilbao, I{\~n}igo and Iradier, Eneko and Montalb{\'a}n, Jon and Angueira, Pablo and Nguyen, Nhan Thanh and Juntti, Markku},
  journal={IEEE Open J. Commun. Society},
  volume={5},
  number={},
  pages={3753--3761},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-9', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 10 ======================== -->
<li>
N. Shlezinger, M. Ma, O. Lavi, <strong>N. T. Nguyen</strong>, Y. C. Eldar, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/51866/nbnfioulu-202409165877.pdf?sequence=1" target="_blank">Artificial Intelligence-Empowered Hybrid Multiple-Input/Multiple-Output Beamforming: Learning to Optimize for High-Throughput Scalable MIMO</a>,"  
<span><em>IEEE Vehicular Technology Magazine</em></span>, vol. 19, no. 3, pp. 58–67, 2024. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-10">@article{shlezinger2024artificial,
  title={Artificial intelligence-empowered hybrid multiple-input/multiple-output beamforming: {L}earning to optimize for high-throughput scalable {MIMO}},
  author={Shlezinger, Nir and Ma, Mengyuan and Lavi, Ortal and Nguyen, Nhan Thanh and Eldar, Yonina C and Juntti, Markku},
  journal={IEEE Veh. Technol. Mag.},
  volume={19},
  number={3},
  pages={58--67},
  year={2024},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-10', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 11 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, Q. Wu, A. Tolli, S. Chatzinotas, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10266977" target="_blank">Fairness Enhancement of UAV Systems with Hybrid Active-Passive RIS</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 23, no. 5, pp. 4379–4396, 2023.  
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-11">@article{nguyen2023fairness,
  title={Fairness enhancement of {UAV} systems with hybrid active-passive {RIS}},
  author={Nguyen, Nhan Thanh and Nguyen, Van-Dinh and Van Nguyen, Hieu and Wu, Qingqing and T{\"o}lli, Antti and Chatzinotas, Symeon and Juntti, Markku},
  journal={IEEE Trans. Wireless Commun.},
  volume={23},
  number={5},
  pages={4379--4396},
  year={2023},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-11', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 12 ======================== -->
<li>
V.-D. Nguyen, T. X. Vu, <strong>N. T. Nguyen</strong>, D. C. Nguyen, M. Juntti, Nguyen C. L., Dinh T. H., D. N. Nguyen, and S. Chatzinotas,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/48422/nbnfioulu-202403212382.pdf?sequence=1&isAllowed=y" target="_blank">Network-Aided Intelligent Traffic Steering in 6G ORAN: A Multi-Layer Optimization Framework</a>,"  
<span><em>IEEE Journal on Selected Areas in Communications</em></span>, vol. 42, no. 2, pp. 398–405, Nov. 2023. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-12">@article{nguyen2023network,
  title={Network-aided intelligent traffic steering in {6G O-RAN: A} multi-layer optimization framework},
  author={Nguyen, Van-Dinh and Vu, Thang X and Nguyen, Nhan Thanh and Nguyen, Dinh C and Juntti, Markku and Luong, Nguyen Cong and Hoang, Dinh Thai and Nguyen, Diep N and Chatzinotas, Symeon},
  journal={IEEE J. Sel. Areas Commun.},
  volume={42},
  number={2},
  pages={389--405},
  year={2023},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-12', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 13 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, M. Ma, O. Lavi, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/47431/nbnfioulu-202401231426.pdf?sequence=1&isAllowed=y" target="_blank">Deep Unfolding Hybrid Beamforming Design for THz Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 3788–3804, Oct. 2023.   <span style="color:#dc2626; font-weight:700;">(Top reading in 2023–2024)</span>
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-13">@article{nguyen2023deep,
  title={Deep unfolding hybrid beamforming designs for {THz} massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Ma, Mengyuan and Lavi, Ortal and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  journal={IEEE Trans. Signal Process.},
  volume={71},
  pages={3788--3804},
  year={2023},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-13', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 14 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, N. Shlezinger, Y. C. Eldar, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10214237" target="_blank">Multiuser MIMO Wideband Joint Communications and Sensing System with Subcarrier Allocation</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 71, pp. 2997–3013, Aug. 2023.   <span style="color:#dc2626; font-weight:700;">(Top reading and download in 2023–2024, <a href="https://rc.signalprocessingsociety.org/education/webinars/sps_ed_web_vid_032625" target="_blank"><span style="color:#dc2626; font-weight:700;">IEEE SPS Webinar</span></a>, <a href="https://rc.signalprocessingsociety.org/education/webinars/sps_ed_web_sli_032625" target="_blank"><span style="color:#dc2626; font-weight:700;">Slides</span></a>)</span>
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-14">@article{nguyen2023multiuser,
  title={Multiuser {MIMO} wideband joint communications and sensing system with subcarrier allocation},
  author={Nguyen, Nhan Thanh and Shlezinger, Nir and Eldar, Yonina C and Juntti, Markku},
  journal={IEEE Trans. Signal Process.},
  volume={71},
  pages={2997--3013},
  year={2023},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-14', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 15 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, V.-H. Nguyen, H. Q. Ngo, S. Chatzinotas, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9940169" target="_blank">Spectral Efficiency Analysis of Hybrid Relay-Reflecting Intelligent Surface-Assisted Cell-Free Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 22, no. 5, pp. 3397–3416, Nov. 2022. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-15">@article{nguyen2022spectral,
  title={Spectral efficiency analysis of hybrid relay-reflecting intelligent surface-assisted cell-free massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Nguyen, Van-Dinh and Van Nguyen, Hieu and Ngo, Hien Quoc and Chatzinotas, Symeon and Juntti, Markku},
  journal={IEEE Trans. Wireless Commun.},
  volume={22},
  number={5},
  pages={3397--3416},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-15', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 16 ======================== -->
<li>
L. V. Nguyen, <strong>N. T. Nguyen</strong>, N. H. Tran, M. Juntti, A. L. Swindlehurst, and D. H. N. Nguyen,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44744/nbnfi-fe202301265946.pdf?sequence=1&isAllowed=y" target="_blank">Leveraging Deep Neural Networks for Massive MIMO Data Detection</a>,"  
<span><em>IEEE Wireless Communications</em></span>, vol. 30, no. 1, pp. 174–180, May 2022. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-16">@article{nguyen2022leveraging,
  title={Leveraging deep neural networks for massive {MIMO} data detection},
  author={Nguyen, Ly V and Nguyen, Nhan T and Tran, Nghi H and Juntti, Markku and Swindlehurst, A Lee and Nguyen, Duy HN},
  journal={IEEE Wireless Commun.},
  volume={30},
  number={1},
  pages={174--180},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-16', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 17 ======================== -->
<li>
A. Shojaeifard, K.-K. Wong, K.-F. Tong, Z. Chu, A. Mourad, A. Haghighat, I. Hemadeh, <strong>N. T. Nguyen</strong>, V. Tapio, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/32277/nbnfi-fe2022100661285.pdf?sequence=1" target="_blank">MIMO Evolution Beyond 5G Through Reconfigurable Intelligent Surfaces and Fluid Antenna Systems</a>,"  
<span><em>Proceedings of the IEEE</em></span>, vol. 110, no. 9, pp. 1244–1265, May 2022. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-17">@article{shojaeifard2022mimo,
  title={MIMO evolution beyond 5G through reconfigurable intelligent surfaces and fluid antenna systems},
  author={Shojaeifard, Arman and Wong, Kai-Kit and Tong, Kin-Fai and Chu, Zhiyuan and Mourad, Alain and Haghighat, Afshin and Hemadeh, Ibrahim and Nguyen, Nhan Thanh and Tapio, Visa and Juntti, Markku},
  journal={Proc. IEEE},
  volume={110},
  number={9},
  pages={1244--1265},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-17', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 18 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, K. Lee, and H. Dai,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/45145/nbnfi-fe2023032332877.pdf?sequence=1&isAllowed=y" target="_blank">Hybrid Beamforming and Adaptive RF Chain Activation for Cell-Free Millimeter-Wave Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 71, no. 8, pp. 8739–8755, May 2022.  
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-18">@article{nguyen2022hybrid,
  title={Hybrid beamforming and adaptive {RF} chain activation for uplink cell-free millimeter-wave massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun and Dai, Huaiyu},
  journal={IEEE Trans. Veh. Technol.},
  volume={71},
  number={8},
  pages={8739--8755},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-18', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 19 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, Q.-D. Vu, K. Lee, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9733238" target="_blank">Hybrid Relay-Reflecting Intelligent Surface-Assisted Wireless Communications</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 71, no. 6, pp. 6228–6244, Mar. 2022 <span style="color:#dc2626; font-weight:700;">(Two (2) Best Paper Awards for conference versions)</span>.  
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-19">@article{nguyen2022hybrid,
  title={Hybrid relay-reflecting intelligent surface-assisted wireless communications},
  author={Nguyen, Nhan Thanh and Vu, Quang-Doanh and Lee, Kyungchun and Juntti, Markku},
  journal={IEEE Trans. Veh. Technol.},
  volume={71},
  number={6},
  pages={6228--6244},
  year={2022},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-19', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 20 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, K. Lee, and H. Dai,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/30148/nbnfi-fe2021122162809.pdf?sequence=1&isAllowed=y" target="_blank">Application of Deep Learning to Sphere Decoding for Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 20, no. 10, pp. 6787–6803, May 2021.  
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-20">@article{nguyen2021application,
  title={Application of deep learning to sphere decoding for large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun and DaiIEEE, Huaiyu},
  journal={IEEE Trans. Wireless Commun.},
  volume={20},
  number={10},
  pages={6787--6803},
  year={2021},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-20', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 21 ======================== -->
<li>
Q.-V. Pham, <strong>N. T. Nguyen</strong>, T. T. Huynh, L. B. Le, K. Lee, W.-J. Hwang,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9448043" target="_blank">Intelligent Radio Signal Processing: A Survey</a>,"  
<span><em>IEEE Access</em></span>, vol. 9, pp. 83818–83850, Jun. 2021. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-21">@article{pham2021intelligent,
  title={Intelligent radio signal processing: {A} survey},
  author={Pham, Quoc-Viet and Nguyen, Nhan Thanh and Huynh-The, Thien and Le, Long Bao and Lee, Kyungchun and Hwang, Won-Joo},
  journal={IEEE Access},
  volume={9},
  pages={83818--83850},
  year={2021},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-21', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 22 ======================== -->
<li>
G. M. Gadiel, <strong>N. T. Nguyen</strong>, and K. Lee,  
"<a href="https://ieeexplore.ieee.org/abstract/document/9374093" target="_blank">Dynamic Unequally Sub-Connected Hybrid Beamforming Architecture for Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 70, no. 4, pp. 3469–3478, Mar. 2021.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-22">@article{gadiel2021dynamic,
  title={Dynamic unequally sub-connected hybrid beamforming architecture for massive {MIMO} systems},
  author={Gadiel, Godwin Mruma and Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Veh. Technol.},
  volume={70},
  number={4},
  pages={3469--3478},
  year={2021},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-22', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 23 ======================== -->
<li>
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://arxiv.org/pdf/1909.01683" target="_blank">Deep Learning-Aided Tabu Search Detection for Large MIMO Systems</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 19, no. 6, pp. 4262–4275, Jun. 2020.  
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-23">@article{nguyen2020deep,
  title={Deep learning-aided tabu search detection for large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Wireless Commun.},
  volume={19},
  number={6},
  pages={4262--4275},
  year={2020},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-23', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 24 ======================== -->
<li>
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://arxiv.org/pdf/1908.10056" target="_blank">Unequally Sub-Connected Architecture for Hybrid Beamforming in Massive MIMO Systems</a>,"  
<span><em>IEEE Transactions on Wireless Communications</em></span>, vol. 19, no. 2, pp. 1127–1140, Feb. 2020.  
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:2px 10px; min-width:84px; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:8px; color:#0F766E; font-weight:600; font-size:12px; cursor:pointer; line-height:1;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-24">@article{nguyen2019unequally,
  title={Unequally sub-connected architecture for hybrid beamforming in massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Wireless Commun.},
  volume={19},
  number={2},
  pages={1127--1140},
  year={2019},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-24', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 25 ======================== -->
<li>
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://arxiv.org/pdf/1909.13606" target="_blank">Groupwise Neighbor Examination for Tabu Search Detection in Large MIMO Systems</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 69, no. 1, pp. 1136–1140, Jan. 2020.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-25">@article{nguyen2019groupwise,
  title={Groupwise neighbor examination for tabu search detection in large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Veh. Technol.},
  volume={69},
  number={1},
  pages={1136--1140},
  year={2019},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-25', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 26 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, K. Lee, and H. Dai,  
"<a href="https://ieeexplore.ieee.org/abstract/document/8668468" target="_blank">QR-Decomposition-Aided Tabu Search Detection for Large MIMO Systems</a>,"  
<span><em>IEEE Transactions on Vehicular Technology</em></span>, vol. 68, no. 5, pp. 4857–4870, May 2019. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-26">@article{nguyen2019qr,
  title={QR-decomposition-aided tabu search detection for large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun and Dai, Huaiyu},
  journal={IEEE Trans. Veh. Technol.},
  volume={68},
  number={5},
  pages={4857--4870},
  year={2019},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-26', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 27 ======================== -->
<li>
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://ieeexplore.ieee.org/abstract/document/8453856" target="_blank">Coverage and Cell-Edge Sum-Rate Analysis of MmWave Massive MIMO Systems with ORP Schemes and MMSE Receivers</a>,"  
<span><em>IEEE Transactions on Signal Processing</em></span>, vol. 66, no. 20, pp. 5349–5363, Oct. 2018. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-27">@article{nguyen2018coverage,
  title={Coverage and cell-edge sum-rate analysis of mmWave massive {MIMO} systems with {ORP} schemes and {MMSE} receivers},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Trans. Signal Process.},
  volume={66},
  number={20},
  pages={5349--5363},
  year={2018},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-27', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== PAPER 28 ======================== -->
<li>
<strong>N. T. Nguyen</strong> and K. Lee,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=7895219" target="_blank">Cell Coverage Extension with Orthogonal Random Precoding for Massive MIMO Systems</a>,"  
<span><em>IEEE Access</em></span>, vol. 5, Apr. 2017. 
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-28">@article{nguyen2017cell,
  title={Cell coverage extension with orthogonal random precoding for massive {MIMO} systems},
  author={Nguyen, Nhan Thanh and Lee, Kyungchun},
  journal={IEEE Access},
  volume={5},
  pages={5410--5424},
  year={2017},
  publisher={IEEE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-28', this); return false;">Copy</button></div></details>
</li>

</ol>

<hr style="height:6px;background:currentColor;border:0;border-radius:9999px;opacity:.6;margin:28px 0;">
# 🎤 Conference Publications  


<ol class="pub-justify">

<!-- ======================== CONF PAPER 1 ======================== -->
<li>
  H. T. Nguyen, T.-H. Nguyen, Vo N. Q. B., V.-D. Nguyen, and <strong>N. T. Nguyen</strong>,  
"Energy Efficiency Maximization for RIS-aided Integrated Sensing and Communication,"  
<span><em>RIVF International Conference on Computing and Communication Technologies</em></span>, 2025 (<strong>accepted</strong>).
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-1">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-1', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 1 ======================== -->
<li>
  H. T. Nguyen, <strong>N. T. Nguyen</strong>, Nguyen C. L., T.-H. Nguyen, and Vo N. Q. B.,  
"Max-Min Rate Optimization for Reconfigurable Intelligent Surfaces Aided ISAC Systems,"  
<span><em>24th International Symposium on Communications and Information Technologies (ISCIT)</em></span>, 2025 (<strong>accepted</strong>).
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-1">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-1', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 2 ======================== -->
<li>
A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="" target="_blank">Constrained Multimodal Sensing-Aided Communications: A Dynamic Beamforming Design</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, 2025 (<strong>accepted</strong>).
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-2">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-2', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 3 ======================== -->
<li>
P. Tran, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://nhanng9115.github.io/homepage/publications/" target="_blank">Deep Reinforcement Learning for Hybrid RIS Assisted MIMO Communications</a>,"  
<span><em>Asilomar Conference on Signals, Systems, and Computers (ASILOMAR)</em></span>, 2025 (<strong>accepted</strong>).
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-3">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-3', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 4 ======================== -->
<li>
<strong>N. T. Nguyen</strong> and M. Juntti,  
"<a href="https://nhanng9115.github.io/homepage/publications/" target="_blank">Hybrid RIS-aided Wireless Communications</a>,"  
<span><em>International Symposium on Antennas and Propagation (ISAP)</em></span>, 2025 <span style="color:#dc2626; font-weight:700;">(Best Paper Award)</span>.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-4">BIBTEX</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-4', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 5 ======================== -->
<li>
A. Raza, <strong>NN. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/abstract/document/11143326" target="_blank">Deep Unfolding of Atomic Norm Minimization for DoA Estimation</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, 2025 (<strong>accepted</strong>).
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-5">@inproceedings{raza2025deep,
  title={Deep Unfolding of Atomic Norm Minimization for {DoA} Estimation},
  author={Raza, Ali and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={IEEE 26th International Workshop on Signal Processing and Artificial Intelligence for Wireless Communications (SPAWC)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-5', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 6 ======================== -->
<li>
S. Uniyal, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/document/11143254" target="_blank">Outage and Capacity Analysis of HRIS-Aided RSMA Systems</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-6">@inproceedings{uniyal2025outage,
  title={Outage and Capacity Analysis of {HRIS}-Aided {RSMA} Systems},
  author={Uniyal, Smriti and Nguyen, Nhan Thanh and Kumar, Guddu and Juntti, Markku},
  booktitle={2025 IEEE 26th International Workshop on Signal Processing and Artificial Intelligence for Wireless Communications (SPAWC)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-6', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 7 ======================== -->
<li>
S. Tavakolian, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58411/nbnfioulu-202509185933.pdf?sequence=1&isAllowed=y" target="_blank">Sparse Semantic Encoding for Reduced Data Load in Vision-Position Aided mmWave Beam Prediction</a>,"  
<span><em>German Microwave Conference</em></span>, 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-7">@inproceedings{tavakolian2025sparse,
  title={Sparse Semantic Encoding for Reduced Data Load in Vision-Position Aided {mmWave} Beam Prediction},
  author={Tavakolian, Sina and Nguyen, Nhan and Juntti, Markku},
  booktitle={2025 16th German Microwave Conference (GeMiC)},
  pages={514--517},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-7', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 8 ======================== -->
<li>
M. Hatami, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/56813/nbnfioulu-202506064211.pdf?sequence=1&isAllowed=y" target="_blank">Energy Efficient Waveform Design and Subcarrier Allocation for Multicarrier MIMO JCAS</a>,"  
<span><em>IEEE Wireless Communications and Networking Conference (WCNC)</em></span>, 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-8">@inproceedings{hatami2025energy,
  title={Energy Efficient Waveform Design and Subcarrier Allocation for Multicarrier {MIMO JCAS}},
  author={Hatami, Mohammad and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2025 IEEE Wireless Communications and Networking Conference (WCNC)},
  pages={1--6},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-8', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 9 ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/56710/nbnfioulu-202506094216.pdf?sequence=1&isAllowed=y" target="_blank">Hybrid Receiver Design for Massive MIMO-OFDM With Low-Resolution ADCs and Oversampling</a>,"  
<span><em>IEEE Wireless Communications and Networking Conference (WCNC)</em></span>, 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-9">@inproceedings{ma2025hybrid,
  title={Hybrid receiver design for massive {MIMO-OFDM} with low-resolution {ADCs} and oversampling},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Atzeni, Italo and Juntti, Markku},
  booktitle={2025 IEEE Wireless Communications and Networking Conference (WCNC)},
  pages={1--6},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-9', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 10 ======================== -->
<li>
S. Uniyal, <strong>N. T. Nguyen</strong>, G. Kumar, M. D. Renzo, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58412/nbnfioulu-202509185934.pdf?sequence=1&isAllowed=y" target="_blank">Sum Rate and Cramér-Rao Lower Bound Analysis for RIS-Assisted Multiuser Large-Antenna ISAC</a>,"  
<span><em>IEEE Wireless Communications and Networking Conference (WCNC)</em></span>, 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-10">@inproceedings{uniyal2025sum,
  title={Sum Rate and {C}ram{\'e}r-{Rao} Lower Bound Analysis for {RIS}-Assisted Multiuser Large-Antenna {ISAC}},
  author={Uniyal, Smriti and Nguyen, Nhan Thanh and Kumar, Guddu and Di Renzo, Marco and Juntti, Markku},
  booktitle={2025 IEEE Wireless Communications and Networking Conference (WCNC)},
  pages={1--6},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-10', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 11 ======================== -->
<li>
M. Ma, T. Fang, N. Shlezinger, L. Swindlehurst, M. Juntti, and <strong>N. T. Nguyen</strong>,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/54619/nbnfioulu-202501241331.pdf?sequence=1&isAllowed=y" target="_blank">Model-Based Machine Learning for Max-Min Fairness Beamforming Design in JCAS Systems</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-11">@inproceedings{ma2025model,
  title={Model-Based Machine Learning for Max-Min Fairness Beamforming Design in {JCAS} Systems},
  author={Ma, Mengyuan and Fang, Tianyu and Shlezinger, Nir and Swindlehurst, AL and Juntti, Markku and Nguyen, Nhan},
  booktitle={ICASSP 2025-2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-11', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 12 ======================== -->
<li>
T. Fang, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/54613/nbnfioulu-202503192097.pdf?sequence=1&isAllowed=y" target="_blank">Low-Complexity Cramér–Rao Lower Bound and Sum Rate Optimization in ISAC Systems</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-12">@inproceedings{fang2025low,
  title={Low-complexity {C}ram{\'e}r-{Rao} lower bound and sum rate optimization in {ISAC} systems},
  author={Fang, Tianyu and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={ICASSP 2025-2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-12', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 13 ======================== -->
<li>
T. D. Phan, D. Q. Nguyen, N. Takanen, <strong>N. T. Nguyen</strong>, M. Juntti, and P. J. Soh,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/56987/nbnfioulu-202506164496.pdf?sequence=1&isAllowed=y" target="_blank">ML-Assisted RIS for ISAC Systems: Initial Results in the 6G Study Band</a>,"  
<span><em>European Conference on Antennas and Propagation (EuCAP)</em></span>, 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-13">@inproceedings{phan2025ml,
  title={ML-Assisted {RIS} for {ISAC} Systems: {I}nitial Results in the {6G} Study Band},
  author={Phan, Duy Tung and Nguyen, Quoc Duy and Takanen, Niklas and Nguyen, Thanh Nhan and Juntti, Markku and Soh, Ping Jack},
  booktitle={2025 19th European Conference on Antennas and Propagation (EuCAP)},
  pages={1--5},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-13', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 14 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, L. V. Nguyen, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58413/nbnfioulu-202509185938.pdf?sequence=1&isAllowed=y" target="_blank">Deep Unfolding-Empowered MmWave Massive MIMO Joint Communications and Sensing</a>,"  
<span><em>IEEE Joint Communications and Sensing Symposium (JC&S)</em></span>, 2025.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-14">@inproceedings{nguyen2025deep,
  title={Deep Unfolding-Empowered mmWave Massive {MIMO} Joint Communications and Sensing},
  author={Nguyen, Nhan Thanh and Nguyen, Ly V and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  booktitle={2025 IEEE 5th International Symposium on Joint Communications \& Sensing (JC\&S)},
  pages={1--6},
  year={2025}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-14', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 15 ======================== -->
<li>
M. Hatami, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/document/10880646" target="_blank">Joint Waveform Design and Sub-Carrier Allocation for Multiuser MIMO ISAC</a>,"  
<span><em>IEEE JC&S Symposium</em></span>, 2024.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-15">@INPROCEEDINGS{10880646,
  author={Hatami, Mohammad and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2025 IEEE 5th International Symposium on Joint Communications & Sensing (JC&S)}, 
  title={Joint Waveform Design and Sub-Carrier Allocation for Multiuser {MIMO ISAC}}, 
  year={2025},
  volume={},
  number={},
  pages={1-6},
  doi={10.1109/JCS64661.2025.10880646}}
</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-15', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 16 ======================== -->
<li>
P. Mobaraki, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/54975/nbnfioulu-202504092482.pdf?sequence=1&isAllowed=y" target="_blank">Deep Unfolding-Empowered Energy Efficiency Optimization in RIS-Assisted Wireless Communications</a>,"  
<span><em>International Workshop on Energy-Aware Mobile IoT (Eware-IoT)</em></span>, 2024.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-16">@inproceedings{mobaraki2024deep,
  title={Deep Unfolding-Empowered Energy Efficiency Optimization in {RIS}-Assisted Wireless Communications},
  author={Mobaraki, Pouya and T. Nguyen, Nhan and Juntti, Markku},
  booktitle={Proceedings of the 14th International Conference on the Internet of Things},
  pages={238--243},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-16', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 17 ======================== -->
<li>
S. Uniyal, <strong>N. T. Nguyen</strong>, G. Kumar, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58414/nbnfioulu-202509185937.pdf?sequence=1&isAllowed=y" target="_blank">Outage Probability and Capacity Analysis of Active RIS-Assisted UAV RSMA Communications</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, 2024.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-17">@inproceedings{uniyal2024outage,
  title={Outage Probability and Capacity Analysis of Active {RIS}-Assisted {UAV RSMA} Communications},
  author={Uniyal, Smriti and Nguyen, Nhan Thanh and Kumar, Guddu and Juntti, Markku},
  booktitle={GLOBECOM 2024-2024 IEEE Global Communications Conference},
  pages={2882--2887},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-17', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 18 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, T. Fang, H. Q. Ngo, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/58410/nbnfioulu-202509185935.pdf?sequence=1&isAllowed=y" target="_blank">Multi-static Cell-Free Massive MIMO ISAC: Performance Analysis and Optimization</a>,"  
<span><em>Asilomar Conference on Signals, Systems, and Computers (ASILOMAR)</em></span>, 2024.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-18">@inproceedings{nguyen2024multi,
  title={Multi-Static Cell-Free Massive {MIMO ISAC}: {P}erformance Analysis and Power Allocation},
  author={Nguyen, Nhan Thanh and Fang, Tianyu and Ngo, Hien Quoc and Juntti, Markku},
  booktitle={2024 58th Asilomar Conference on Signals, Systems, and Computers},
  pages={647--652},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-18', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 19 ======================== -->
<li>
T. Fang, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53076/nbnfioulu-202412097104.pdf?sequence=1&isAllowed=y" target="_blank">Beamforming Design for Max-Min Fairness Performance Balancing in ISAC Systems</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sept. 2024, Lucca, Italy.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-19">@inproceedings{fang2024beamforming,
  title={Beamforming design for max-min fairness performance balancing in {ISAC} systems},
  author={Fang, Tianyu and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2024 IEEE 25th International Workshop on Signal Processing Advances in Wireless Communications (SPAWC)},
  pages={336--340},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-19', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 20 ======================== -->
<li>
M. Hatami, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/52351/nbnfioulu-202410186389.pdf?sequence=1&isAllowed=y" target="_blank">Waveform Design for Multi-Carrier Multi-User MIMO Joint Communications and Sensing</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sept. 2024, Lucca, Italy.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-20">@inproceedings{hatami2024waveform,
  title={Waveform design for multi-carrier multiuser {MIMO} joint communications and sensing},
  author={Hatami, Mohammad and Nguyen, Nhan and Juntti, Markku},
  booktitle={2024 IEEE 25th International Workshop on Signal Processing Advances in Wireless Communications (SPAWC)},
  pages={346--350},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-20', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 21 ======================== -->
<li>
T. D. Gian, T.-H. Nguyen, <strong>N. T. Nguyen</strong>, and V.-D. Nguyen,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53074/nbnfioulu-202412097102.pdf?sequence=1&isAllowed=y" target="_blank">WiLHPE: WiFi-enabled Lightweight Channel Frequency Dynamic Convolution for HPE Tasks</a>,"  
<span><em>IEEE International Conference on Communications and Electronics (ICCE)</em></span>, Aug. 2024, Da Nang City, Vietnam.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-21">@inproceedings{gian2024wilhpe,
  title={WiLHPE: WiFi-enabled Lightweight Channel Frequency Dynamic Convolution for {HPE} Tasks},
  author={Gian, Toan D and Nguyen, Tien-Hoa and Nguyen, Nhan Thanh and Nguyen, Van-Dinh},
  booktitle={2024 Tenth International Conference on Communications and Electronics (ICCE)},
  pages={516--521},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-21', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 22 ======================== -->
<li>
I. Bilbao, <strong>N. T. Nguyen</strong>, D. P. Moya Osorio, V. Tapio, M. Juntti, E. Iradier, J. Montalbán, and P. Angueira,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53075/nbnfioulu-202412097103.pdf?sequence=1&isAllowed=y" target="_blank">Physical layer security beamforming design via deep unfolding</a>,"  
<span><em>IEEE International Mediterranean Conference on Communications and Networking (MEDITCOM)</em></span>, July 2024, Madrid, Spain.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-22">@inproceedings{bilbao2024physical,
  title={Physical Layer Security Beamforming Design via Deep Unfolding},
  author={Bilbao, I{\~n}igo and Nguyen, Nhan T and Osorio, Diana P Moya and Tapio, Visa and Juntti, Markku and Iradier, Eneko and Montalb{\'a}n, Jon and Angueira, Pablo},
  booktitle={2024 IEEE International Mediterranean Conference on Communications and Networking (MeditCom)},
  pages={251--256},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-22', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 23 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/51885/nbnfioulu-202409175895.pdf?sequence=1&isAllowed=y" target="_blank">Massive MIMO Joint Communications and Sensing with MRT Beamforming</a>,"  
<span><em>IEEE Radar Conference (RadarConf24)</em></span>, 2024, Denver, CO, USA.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-23">@inproceedings{nguyen2024massive,
  title={Massive {MIMO} joint communications and sensing with {MRT} beamforming},
  author={Nguyen, Nhan T and Nguyen, V-Dinh and Nguyen, Hieu V and Ngo, Hien Q and Swindlehurst, AL and Juntti, Markku},
  booktitle={2024 IEEE Radar Conference (RadarConf24)},
  pages={1--6},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-23', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 24 ======================== -->
<li>
P. Krishnananthalingam, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/53799/nbnfioulu-202501221287.pdf?sequence=1&isAllowed=y" target="_blank">Constant Modulus Waveform Design for Wideband Multicarrier Joint Communications and Sensing via Deep Unfolding</a>,"  
<span><em>IEEE Wireless Communications and Networking Conference (WCNC)</em></span>, 2024.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-24">@inproceedings{krishnananthalingam2024constant,
  title={Constant modulus waveform design for wideband multicarrier joint communications and sensing via deep unfolding},
  author={Krishnananthalingam, Prashanth and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2024 IEEE Wireless Communications and Networking Conference (WCNC)},
  pages={1--6},
  year={2024}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-24', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 25 ======================== -->
<li>
V.-D. Nguyen, T. X. Vu, <strong>N. T. Nguyen</strong>, D. C. Nguyen, M. Juntti, Nguyen C. L., Dinh T. H., D. N. Nguyen, and S. Chatzinotas,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/48394/nbnfioulu-202403202353.pdf?sequence=1&isAllowed=y" target="_blank">Enabling Intelligent Traffic Steering in A Hierarchical Open Radio Access Network</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, 2023, Kuala Lumpur, Malaysia.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-25">@inproceedings{nguyen2023enabling,
  title={Enabling Intelligent Traffic Steering in A Hierarchical Open Radio Access Network},
  author={Nguyen, Van-Dinh and Vu, Thang X and Nguyen, Nhan Thanh and Nguyen, Dinh C and Juntti, Markku and Luong, Nguyen Cong and Hoang, Dinh Thai and Nguyen, Diep N and Chatzinotas, Symeon},
  booktitle={GLOBECOM 2023-2023 IEEE Global Communications Conference},
  pages={5232--5237},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-25', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 26 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, L. V. Nguyen, N. Shlezinger, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/51884/nbnfioulu-202409175894.pdf?sequence=1&isAllowed=y" target="_blank">Fast Deep Unfolded Hybrid Beamforming in Multiuser Large MIMO Systems</a>,"  
<span><em>Asilomar Conference on Signals, Systems, and Computers (ASILOMAR)</em></span>, 2023, Pacific Grove, CA, USA. (accepted)
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-26">@inproceedings{nguyen2023fast,
  title={Fast deep unfolded hybrid beamforming in multiuser large {MIMO} systems},
  author={Nguyen, Nhan Thanh and Van Nguyen, Ly and Shlezinger, Nir and Swindlehurst, A Lee and Juntti, Markku},
  booktitle={2023 57th Asilomar Conference on Signals, Systems, and Computers},
  pages={486--490},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-26', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 27 ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/43260/nbnfioulu-202311243336.pdf?sequence=1&isAllowed=y" target="_blank">Analysis of Oversampling in Uplink Massive MIMO-OFDM with Low-Resolution ADCs</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sept. 2023, Shanghai, China. <span style="color:#dc2626; font-weight:700;">(Best Student Paper Award)</span>
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-27">@inproceedings{ma2023analysis,
  title={Analysis of oversampling in uplink massive {MIMO-OFDM} with low-resolution {ADCs}},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Atzeni, Italo and Juntti, Markku},
  booktitle={2023 IEEE 24th International Workshop on Signal Processing Advances in Wireless Communications (SPAWC)},
  pages={626--630},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-27', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 28 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, N. Shlezinger, K.-H. Ngo, V.-D. Nguyen, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44654/nbnfi-fe20231030141814.pdf?sequence=1&isAllowed=y" target="_blank">Joint communications and sensing design for multi-carrier MIMO systems</a>,"  
<span><em>IEEE Statistical Signal Processing Workshop (SSP)</em></span>, July 2023, Hanoi, Vietnam. <span style="color:#dc2626; font-weight:700;">(Best Paper Award)</span>
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-28">@inproceedings{nguyen2023joint,
  title={Joint communications and sensing design for multi-carrier {MIMO} systems},
  author={Nguyen, Nhan Thanh and Shlezinger, Nir and Ngo, Khac-Hoang and Nguyen, Van-Dinh and Juntti, Markku},
  booktitle={2023 IEEE Statistical Signal Processing Workshop (SSP)},
  pages={110--114},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-28', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 29 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, M. Ma, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44290/nbnfi-fe20230823103204.pdf?sequence=1&isAllowed=y" target="_blank">Deep unfolding-enabled hybrid beamforming design for mmWave massive MIMO systems</a>,"  
<span><em>IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP)</em></span>, June 2023, Rhodes Island, Greece.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-29">@inproceedings{nguyen2023deep,
  title={Deep unfolding-enabled hybrid beamforming design for {mmWave} massive {MIMO} systems},
  author={Nguyen, Nhan and Ma, Mengyuan and Shlezinger, Nir and Eldar, Yonina C and Swindlehurst, A Lee and Juntti, Markku},
  booktitle={ICASSP 2023-2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  pages={1--5},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-29', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 30 ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/47366/nbnfioulu-202401191355.pdf?sequence=1&isAllowed=y" target="_blank">Beam Squint Analysis and Mitigation via Hybrid Beamforming Design in THz Communications</a>,"  
<span><em>IEEE International Conference on Communications (ICC)</em></span>, May 2023, Rome, Italy.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-30">@inproceedings{ma2023beam,
  title={Beam squint analysis and mitigation via hybrid beamforming design in {THz} communications},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={ICC 2023-IEEE International Conference on Communications},
  pages={6486--6491},
  year={2023}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-30', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 31 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, J. Kokkoniemi, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44965/nbnfi-fe2023021627492.pdf?sequence=1&isAllowed=y" target="_blank">Beam Squint Effects in THz Communications with UPA and ULA: Comparison and Hybrid Beamforming Design</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM) Workshop</em></span>, Dec. 2022, Rio de Janeiro, Brazil.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-31">@inproceedings{nguyen2022beam,
  title={Beam squint effects in {THz} communications with {UPA and ULA: C}omparison and hybrid beamforming design},
  author={Nguyen, Nhan Thanh and Kokkoniemi, Joonas and Juntti, Markku},
  booktitle={2022 IEEE Globecom Workshops (GC Wkshps)},
  pages={1754--1759},
  year={2022}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-31', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 32 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, Q. Wu, A. Tolli, S. Chatzinotas, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/43582/nbnfi-fe2023032332879.pdf?sequence=1&isAllowed=y" target="_blank">Hybrid Active-Passive Reconfigurable Intelligent Surface-Assisted UAV Communications</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, Dec. 2022, Rio de Janeiro, Brazil.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-32">@inproceedings{nguyen2022hybrid,
  title={Hybrid active-passive reconfigurable intelligent surface-assisted {UAV} communications},
  author={Nguyen, Nhan T and Nguyen, V-Dinh and Wu, Qingqing and T{\"o}lli, Antti and Chatzinotas, Symeon and Juntti, Markku},
  booktitle={GLOBECOM 2022-2022 IEEE Global Communications Conference},
  pages={3126--3131},
  year={2022}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-32', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 33 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, Q. Wu, A. Tolli, S. Chatzinotas, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44165/nbnfi-fe202301091855.pdf?sequence=1&isAllowed=y" target="_blank">Hybrid Active-Passive Reconfigurable Intelligent Surface-Assisted Multi-User MISO Systems</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, July 2022, Oulu, Finland.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-33">@inproceedings{nguyen2022hybrid,
  title={Hybrid active-passive reconfigurable intelligent surface-assisted multi-user {MISO} systems},
  author={Nguyen, Nhan T and Nguyen, V-Dinh and Wu, Qingqing and T{\"o}lli, Antti and Chatzinotas, Symeon and Juntti, Markku},
  booktitle={2022 IEEE 23rd International Workshop on Signal Processing Advances in Wireless Communication (SPAWC)},
  pages={1--5},
  year={2022}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-33', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 34 ======================== -->
<li>
<strong>N. T. Nguyen</strong>, V.-D. Nguyen, H. V. Nguyen, H. Q. Ngo, S. Chatzinotas, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44153/nbnfi-fe202301091846.pdf?sequence=1&isAllowed=y" target="_blank">Downlink Throughput of Cell-Free Massive MIMO Systems Assisted by Hybrid Relay-Reflecting Intelligent Surfaces</a>,"  
<span><em>IEEE International Conference on Communications (ICC)</em></span>, May 2022, Seoul, South Korea.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-34">@inproceedings{nguyen2022downlink,
  title={Downlink throughput of cell-free massive {MIMO} systems assisted by hybrid relay-reflecting intelligent surfaces},
  author={Nguyen, Nhan T and Nguyen, V and Nguyen, Hieu V and Ngo, Hien Q and Chatzinotas, Symeon and Juntti, Markku and others},
  booktitle={ICC 2022: IEEE International Conference on Communications},
  year={2022},
  organization={Institute of Electrical and Electronics Engineers}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-34', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER 35 ======================== -->
<li>
E. Egashira, D. Osorio, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/33525/nbnfi-fe2022091258396.pdf?sequence=1&isAllowed=y" target="_blank">Secrecy Capacity Maximization for a Hybrid Relay-RIS Scheme in mmWave MIMO Networks</a>,"  
<span><em>IEEE Vehicular Technology Conference (VTC Spring)</em></span>, June 2022, Helsinki, Finland.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="conf-35">@inproceedings{egashira2022secrecy,
  title={Secrecy capacity maximization for a hybrid relay-{RIS} scheme in {mmWave MIMO} networks},
  author={Egashira, Edson Nobuyuki and Osorio, Diana Pamela Moya and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2022 IEEE 95th Vehicular Technology Conference:(VTC2022-Spring)},
  pages={1--6},
  year={2022}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('conf-35', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER A ======================== -->
<li>
T. H.-The, Q.-V. Pham, T.-V. Nguyen, V.-S. Doan, <strong>N. T. Nguyen</strong>, D. B. d. Costa, and D.-S. Kim,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/34153/nbnfi-fe202201031020.pdf?sequence=1&isAllowed=y" target="_blank">Densely-Accumulated Convolutional Network for Accurate LPI Radar Waveform Recognition</a>,"  
<span><em>IEEE Global Communications Conference (GLOBECOM)</em></span>, Dec. 2021, Madrid, Spain.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-c1">@inproceedings{huynh2021densely,
  title={Densely-accumulated convolutional network for accurate {LPI} radar waveform recognition},
  author={Huynh-The, Thien and Pham, Quoc-Viet and Nguyen, Toan-Van and Doan, Van-Sang and Nguyen, Nhan Thanh and da Costa, Daniel Benevides and Kim, Dong-Seong},
  booktitle={2021 IEEE Global Communications Conference (GLOBECOM)},
  pages={1--6},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-c1', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER B ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/52175/nbnfioulu-202410076207.pdf?sequence=1&isAllowed=y" target="_blank">Switch-based Hybrid Beamforming for Wideband Multi-Carrier Communications</a>,"  
<span><em>IEEE International ITG Workshop on Smart Antennas (WSA)</em></span>, Nov. 2021, French Riviera, France.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-c2">@inproceedings{ma2021switch,
  title={Switch-based hybrid beamforming for wideband multi-carrier communications},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={WSA 2021; 25th International ITG Workshop on Smart Antennas},
  pages={1--6},
  year={2021},
  organization={VDE}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-c2', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER C ======================== -->
<li>
M. Ma, <strong>N. T. Nguyen</strong>, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/43618/nbnfi-fe2023032332868.pdf?sequence=1&isAllowed=y" target="_blank">Closed-Form Hybrid Beamforming Solution for Spectral Efficiency Upper Bound Maximization in MmWave MIMO-OFDM Systems</a>,"  
<span><em>IEEE Vehicular Technology Conference (VTC Fall)</em></span>, Sept. 2021, Norman, OK, USA.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-c3">@inproceedings{ma2021closed,
  title={Closed-form hybrid beamforming solution for spectral efficiency upper bound maximization in {mmWave MIMO-OFDM} systems},
  author={Ma, Mengyuan and Nguyen, Nhan Thanh and Juntti, Markku},
  booktitle={2021 IEEE 94th Vehicular Technology Conference (VTC2021-Fall)},
  pages={1--5},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-c3', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER D ======================== -->
<li>
K.-H. Ngo, <strong>N. T. Nguyen</strong>, T. Q. Dinh, T.-M. Hoang, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/44157/nbnfi-fe202301091858.pdf?sequence=1&isAllowed=y" target="_blank">Low-Latency and Secure Computation Offloading Assisted by Hybrid Relay-Reflecting Intelligent Surface</a>,"  
<span><em>International Conference on Advanced Technologies for Communications (ATC)</em></span>, Oct. 2021, Hanoi, Vietnam. <span style="color:#dc2626; font-weight:700;">(Best Paper Award)</span>
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-c4">@inproceedings{ngo2021low,
  title={Low-latency and secure computation offloading assisted by hybrid relay-reflecting intelligent surface},
  author={Ngo, Khac-Hoang and Nguyen, Nhan Thanh and Dinh, Thinh Quang and Hoang, Trong-Minh and Juntti, Markku},
  booktitle={2021 International Conference on Advanced Technologies for Communications (ATC)},
  pages={306--311},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-c4', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER E ======================== -->
<li>
<strong>N. T. Nguyen</strong>, L. V. Nguyen, T. Huynh-T., D. H. N. Nguyen, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/45210/nbnfi-fe2023040434974.pdf?sequence=1&isAllowed=y" target="_blank">Machine Learning-based Reconfigurable Intelligent Surface-aided MIMO Systems</a>,"  
<span><em>IEEE Workshop on Signal Processing Advances in Wireless Communications (SPAWC)</em></span>, Sept. 2021, Lucca, Italy.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-c5">@inproceedings{nguyen2021machine,
  title={Machine learning-based reconfigurable intelligent surface-aided {MIMO} systems},
  author={Nguyen, Nhan Thanh and Nguyen, Ly V and Huynh-The, Thien and Nguyen, Duy HN and Swindlehurst, A Lee and Juntti, Markku},
  booktitle={2021 IEEE 22nd International Workshop on Signal Processing Advances in Wireless Communications (SPAWC)},
  pages={101--105},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-c5', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER F ======================== -->
<li>
J. He, <strong>N. T. Nguyen</strong>, R. Schroeder, Visa Tapio, J. Kokkoniemi, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/30719/nbnfi-fe2021100149102.pdf?sequence=1&isAllowed=y" target="_blank">Channel Estimation and Hybrid Architectures for RIS-Assisted Communications</a>,"  
<span><em>EuCNC & 6G Summit</em></span>, June 2021, Grenoble, France.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-c6">@inproceedings{he2021channel,
  title={Channel estimation and hybrid architectures for {RIS}-assisted communications},
  author={He, Jiguang and Nguyen, Nhan Thanh and Schroeder, Rafaela and Tapio, Visa and Kokkoniemi, Joonas and Juntti, Markku},
  booktitle={2021 Joint European Conference on Networks and Communications \& 6G Summit (EuCNC/6G Summit)},
  pages={60--65},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-c6', this); return false;">Copy</button></div></details>
</li>

<!-- ======================== CONF PAPER G ======================== -->
<li>
<strong>N. T. Nguyen</strong>, Q.-D. Vu, K. Lee, and M. Juntti,  
"<a href="https://oulurepo.oulu.fi/bitstream/handle/10024/32680/nbnfi-fe2022032124246.pdf?sequence=1&isAllowed=y" target="_blank">Spectral Efficiency Optimization for Hybrid Relay-Reflecting Intelligent Surface</a>,"  
<span><em>IEEE International Conference on Communications (ICC) Workshop</em></span>, June 2021, Montreal, Canada.
  <details style="display:block; margin-top:6px;"><summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;"><span style="display:inline-block; padding:4px 8px; min-width:auto; text-align:center; background:#E6FFFA; border:1px solid #14B8A6; border-radius:4px; color:#0F766E; font-weight:600; font-size:12px; line-height:1.2;">BibTeX</span></summary><div style="position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left;"><pre style="margin:0; overflow:auto; font-size:12px; line-height:1.25;"><code id="bibtex-c7">@inproceedings{nguyen2021spectral,
  title={Spectral efficiency optimization for hybrid relay-reflecting intelligent surface},
  author={Nguyen, Nhan Thanh and Vu, Quang-Doanh and Lee, Kyungchun and Juntti, Markku},
  booktitle={2021 IEEE International Conference on Communications Workshops (ICC Workshops)},
  pages={1--6},
  year={2021}
}</code></pre><button style="position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:8px; padding:2px 8px; font-size:12px; cursor:pointer;" onclick="copyBib('bibtex-c7', this); return false;">Copy</button></div></details>
</li>

</ol>
<!-- Copy helper -->
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
