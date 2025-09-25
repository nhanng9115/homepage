---
permalink: /publications/
title: "Publications"
---

---




# 📄 Journal Publications

<ol>

<li>
  H. T. Nguyen, V.-D. Nguyen, <strong>N. T. Nguyen</strong>, N. C. Luong, V.-N. Q. Bao, H. Q. Ngo, D. Niyato, and S. Chatzinotas,  
  "<a href="https://www.arxiv.org/pdf/2509.10290" target="_blank">Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems</a>,"  
  <span><em>IEEE Journal on Selected Areas in Communications</em></span>, 2025. (accepted)
</li>

<li>
A. Zaker, <strong>N. T. Nguyen</strong>, A. Alkhateeb, and M. Juntti,  
"<a href="https://arxiv.org/pdf/2503.14054" target="_blank">Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach</a>,"  
<span style=""><em>IEEE Communications Letters</em></span>, 2025. (accepted)
</li>

<li>
M. Ma, <strong>N. T. Nguyen</strong>, I. Atzeni, A. L. Swindlehurst, and M. Juntti,  
"<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11008697" target="_blank">Digital and Hybrid Precoding Designs in Massive MIMO with Low-Resolution ADCs</a>,"  
<span style=""><em>IEEE Wireless Communications Letters</em></span>, vol. 14, no. 8, pp. 2446–2450, Aug. 2025.
</li>

</ol>
function fallbackBib(li, title){
  const txt = clean(li.textContent);
  const url = firstLink(li);

  // Authors
  let before = '';
  if (title) {
    const quoted = ' "' + title + '"';
    before = txt.includes(quoted) ? txt.split(quoted)[0] : txt.split(title)[0];
  } else {
    before = txt;
  }
  const authors = clean(before.replace(/,\s*$/,''));

  // Venue & year
  const em = li.querySelector('em');
  let venue = em ? clean(em.textContent) : '';
  const yearMatches = txt.match(/(20\d{2})/g);
  const year = yearMatches ? yearMatches[yearMatches.length-1] : '';

  if (!venue) {
    const v = (txt.match(/,\s*([A-Za-z].*?)\s*,\s*20\d{2}/) || [,''])[1];
    venue = clean((v||'').replace(/\(\*\*.*?\*\*\)/g,''));
  }

  // Extra fields
  const volume = (txt.match(/\bvol\.?\s*([0-9IVXLC]+)\b/i)||[])[1]||'';
  const number = (txt.match(/\bno\.?\s*([A-Za-z0-9\-]+)\b/i)||[])[1]||'';
  const pages  = (txt.match(/\bpp\.?\s*([0-9]+(?:\s*[-–]\s*[0-9]+)?)\b/i)||[])[1]||'';
  const month  = (txt.match(/\b(Jan\.?|Feb\.?|Mar\.?|Apr\.?|May|Jun\.?|Jul\.?|Aug\.?|Sep\.?|Sept\.?|Oct\.?|Nov\.?|Dec\.?)\b/i)||[])[1]||'';

  const isJournal = /Transactions|Journal|Letters|Wireless Communications Letters|Communications Letters|JSAC/i.test(venue||'');
  const firstSurname = (authors.split(',')[0]||'key').split(' ').pop().replace(/[^A-Za-z]/g,'') || 'key';
  const key = `${firstSurname}${year||''}Auto`;

  // Build BibTeX with nice indentation
  let lines = [];
  if (isJournal) {
    lines.push(`@article{${key},`);
    lines.push(`  author  = {${authors}},`);
    lines.push(`  title   = {${title || 'Untitled'}},`);
    lines.push(`  journal = {${venue}},`);
    if (year)   lines.push(`  year    = {${year}},`);
    if (volume) lines.push(`  volume  = {${volume}},`);
    if (number) lines.push(`  number  = {${number}},`);
    if (pages)  lines.push(`  pages   = {${pages}},`);
    if (month)  lines.push(`  month   = {${month}},`);
    if (url)    lines.push(`  url     = {${url}},`);
    // remove last comma
    lines[lines.length-1] = lines[lines.length-1].replace(/,$/,'');
    lines.push('}');
  } else {
    lines.push(`@inproceedings{${key},`);
    lines.push(`  author    = {${authors}},`);
    lines.push(`  title     = {${title || 'Untitled'}},`);
    lines.push(`  booktitle = {${venue || 'Conference'}},`);
    if (year)  lines.push(`  year      = {${year}},`);
    if (pages) lines.push(`  pages     = {${pages}},`);
    if (month) lines.push(`  month     = {${month}},`);
    if (url)   lines.push(`  url       = {${url}},`);
    lines[lines.length-1] = lines[lines.length-1].replace(/,$/,'');
    lines.push('}');
  }
  return lines.join('\n');
}
