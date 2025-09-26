---
permalink: /publications/
title: "Publications"
---

<style>
/* --- Exciting Cosmic Neon palette with fixed dark mode --- */
:root{
  --link:#7C3AED; --link-hover:#DB2777;
  --bib-bg:#F5F3FF; --bib-bg-hover:#EDE9FE;
  --bib-border:#A855F7; --bib-text:#1E293B;
}
@media (prefers-color-scheme: dark){
  :root{
    --link:#22D3EE; --link-hover:#06B6D4;
    --bib-bg:#1E293B; --bib-bg-hover:#334155;
    --bib-border:#38BDF8; --bib-text:#F8FAFC;
  }
}

/* Paper title links (keep underline) */
ol li > a[href]{
  color:var(--link)!important; text-decoration:underline;
  text-decoration-color:var(--link); text-underline-offset:2px;
  text-decoration-thickness:1.5px; transition:color .15s,text-decoration-color .15s ease;
}
ol li > a[href]:hover, ol li > a[href]:focus{
  color:var(--link-hover)!important; text-decoration-color:var(--link-hover); outline:none;
}

/* “BibTex” button (matches your inline span inside <summary>) */
details > summary > span[data-bibbtn]{
  background:var(--bib-bg)!important; border:1px solid var(--bib-border)!important;
  color:var(--bib-text)!important; border-radius:8px; font-weight:600; font-size:12px; line-height:1;
  padding:2px 10px; min-width:84px; text-align:center;
  transition:background-color .15s ease,color .15s ease,border-color .15s ease;
}
details[open] > summary > span[data-bibbtn],
details > summary > span[data-bibbtn]:hover,
details > summary > span[data-bibbtn]:focus{
  background:var(--bib-bg-hover)!important; outline:none;
}

/* BibTex panel */
.bibtex-panel{
  position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db;
  border-radius:8px; padding:10px; text-align:left;
}
.bibtex-copy{
  position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9;
  border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer;
}
.bibtex-pre{ margin:0; overflow:auto; font-size:12px; line-height:1.25; }
.bibtex-hidden{ position:absolute; left:-9999px; top:-9999px; }
</style>

# 📄 Journal Publications

<ol id="pubs-list"></ol>

<script>
/** ==== CONFIG ==== **/
const myNameForBold = "N. T. Nguyen";   // how your name appears in author strings for bolding

/** ==== DATA: add new entries here (or load JSON) ==== **/
/*
Fields:
- id: BibTeX key (string, unique)
- type: "article" | "inproceedings" | "misc" (choose what fits)
- title: string
- authors: array of strings, as you'd like them shown
- venue: journal or conference name (maps to 'journal' for article, 'booktitle' for inproceedings)
- year: number
- url: string (paper link)
- note: optional status like "(accepted)" or "(early access)"
*/
const publications = [
  {
    id: "NguyenJSAC2025",
    type: "article",
    title: "Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems",
    authors: [
      "H. T. Nguyen","V.-D. Nguyen","N. T. Nguyen","N. C. Luong",
      "V.-N. Q. Bao","H. Q. Ngo","D. Niyato","S. Chatzinotas"
    ],
    venue: "IEEE Journal on Selected Areas in Communications",
    year: 2025,
    url: "https://www.arxiv.org/pdf/2509.10290",
    note: "(accepted)"
  },
  {
    id: "ZakerCL2025",
    type: "article",
    title: "Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach",
    authors: ["A. Zaker","N. T. Nguyen","A. Alkhateeb","M. Juntti"],
    venue: "IEEE Communications Letters",
    year: 2025,
    url: "https://arxiv.org/pdf/2503.14054",
    note: "(accepted)"
  }
];

/** ==== RENDERING HELPERS ==== **/
const escapeHTML = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const joinAuthorsForDisplay = (arr) =>
  arr.map(a => a === myNameForBold ? `<strong>${escapeHTML(a)}</strong>` : escapeHTML(a))
     .join(", ");

function makeBibtex(entry){
  const esc = s => s.replace(/[{}]/g, m => ({'{':'\\{','}':'\\}'}[m]));
  const lines = [];
  const field = (k,v) => `  ${k} = {${esc(v)}},`;
  const isArticle = entry.type === "article";
  const isInproc = entry.type === "inproceedings";

  lines.push(`@${entry.type || "misc"}{${entry.id},`);
  lines.push(field("author", entry.authors.join(" and ")));
  lines.push(field("title", entry.title));
  if(isArticle) lines.push(field("journal", entry.venue));
  else if(isInproc) lines.push(field("booktitle", entry.venue));
  else if(entry.venue) lines.push(field("howpublished", entry.venue));
  if(entry.year) lines.push(field("year", String(entry.year)));
  if(entry.url)  lines.push(field("url", entry.url));
  if(entry.note) lines.push(field("note", entry.note));
  // remove trailing comma from last field
  lines[lines.length-1] = lines[lines.length-1].replace(/,$/,"");
  lines.push("}");
  return lines.join("\n");
}

function copyText(text){
  // Try Clipboard API first, fall back to execCommand
  if(navigator.clipboard && navigator.clipboard.writeText){
    return navigator.clipboard.writeText(text);
  }
  return new Promise(resolve=>{
    const ta = document.createElement("textarea");
    ta.className = "bibtex-hidden";
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch(e){}
    document.body.removeChild(ta);
    resolve();
  });
}

function renderPublications(list){
  const ol = document.getElementById("pubs-list");
  ol.innerHTML = "";
  list.forEach((p, idx) => {
    const li = document.createElement("li");

    // Authors line
    const authorsHTML = joinAuthorsForDisplay(p.authors);
    // Title link
    const titleLink = p.url ? `<a href="${escapeHTML(p.url)}" target="_blank">${escapeHTML(p.title)}</a>`
                            : escapeHTML(p.title);
    // Venue + year + note
    const venueHTML = `<span><em>${escapeHTML(p.venue)}</em></span>${p.year ? `, ${p.year}.` : ""} ${p.note ? escapeHTML(p.note) : ""}`;

    li.innerHTML = `
      ${authorsHTML},<br>
      "${titleLink},"<br>
      ${venueHTML}
      <details style="display:block; margin-top:6px;">
        <summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;">
          <span data-bibbtn>BibTex</span>
        </summary>
        <div class="bibtex-panel">
          <pre class="bibtex-pre"><code id="bibtex-${idx}">${escapeHTML(makeBibtex(p))}</code></pre>
          <button class="bibtex-copy" data-copy="#bibtex-${idx}">Copy</button>
        </div>
      </details>
    `;

    ol.appendChild(li);
  });

  // Wire up copy buttons
  ol.querySelectorAll("button.bibtex-copy").forEach(btn=>{
    btn.addEventListener("click", async (e)=>{
      const sel = btn.getAttribute("data-copy");
      const code = ol.querySelector(sel);
      const text = code ? code.textContent : "";
      const old = btn.textContent;
      try {
        await copyText(text);
        btn.textContent = "Copied!";
      } catch(e){
        btn.textContent = "Copy";
      }
      setTimeout(()=>{ btn.textContent = old; }, 1200);
    });
  });
}

renderPublications(publications);

/** OPTIONAL: if you prefer an external JSON file:
fetch("/assets/publications.json").then(r=>r.json()).then(renderPublications);
*/
</script>
