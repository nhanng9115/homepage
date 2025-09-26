---
permalink: /publications/
title: "Publications"
---

<style>
:root{ --link:#7C3AED; --link-hover:#DB2777; --bib-bg:#F5F3FF; --bib-bg-hover:#EDE9FE; --bib-border:#A855F7; --bib-text:#1E293B; }
@media (prefers-color-scheme: dark){
  :root{ --link:#22D3EE; --link-hover:#06B6D4; --bib-bg:#1E293B; --bib-bg-hover:#334155; --bib-border:#38BDF8; --bib-text:#F8FAFC; }
}
ol li > a[href]{ color:var(--link)!important; text-decoration:underline; text-decoration-color:var(--link);
  text-underline-offset:2px; text-decoration-thickness:1.5px; transition:color .15s,text-decoration-color .15s ease; }
ol li > a[href]:hover, ol li > a[href]:focus{ color:var(--link-hover)!important; text-decoration-color:var(--link-hover); outline:none; }
details > summary > span[data-bibbtn]{ background:var(--bib-bg)!important; border:1px solid var(--bib-border)!important; color:var(--bib-text)!important;
  border-radius:8px; font-weight:600; font-size:12px; line-height:1; padding:2px 10px; min-width:84px; text-align:center; }
details[open] > summary > span[data-bibbtn], details > summary > span[data-bibbtn]:hover{ background:var(--bib-bg-hover)!important; }
.bibtex-panel{ position:relative; margin-top:8px; background:#ffeef5; border:1px solid #f6c5db; border-radius:8px; padding:10px; text-align:left; }
.bibtex-pre{ margin:0; overflow:auto; font-size:12px; line-height:1.25; white-space:pre; }
.bibtex-copy{ position:absolute; top:6px; right:6px; border:1px solid #94A3B8; background:#F1F5F9; border-radius:6px; padding:2px 8px; font-size:12px; cursor:pointer; }
.bibtex-hidden{ position:absolute; left:-9999px; top:-9999px; }
</style>

# 📄 Journal Publications

<ol id="pubs-list"><noscript>Please enable JavaScript to view publications.</noscript></ol>

<!-- ========= PASTE/EDIT ONLY THIS BIBTEX BLOCK ========= -->
<script type="application/x-bibtex" id="bibtex-data">
@article{nguyen2025energy,
  title        = {Energy Efficiency for Massive MIMO Integrated Sensing and Communication Systems},
  author       = {Nguyen, Huy T and Nguyen, Van-Dinh and Nguyen, Nhan Thanh and Luong, Nguyen Cong and Bao, Vo-Nguyen Quoc and Ngo, Hien Quoc and Niyato, Dusit and Chatzinotas, Symeon},
  journal      = {IEEE Journal on Selected Areas in Communications},
  year         = {2025},
  note         = {accepted},
  url          = {https://www.arxiv.org/pdf/2509.10290}
}

@article{zaker2025dynamic,
  title        = {Dynamic Joint Sensing and Communication Beamforming Design: A Lyapunov Approach},
  author       = {Zaker, Abolfazl and Nguyen, Nhan Thanh and Alkhateeb, Ahmed and Juntti, Markku},
  journal      = {IEEE Communications Letters},
  year         = {2025},
  note         = {accepted},
  url          = {https://arxiv.org/pdf/2503.14054}
}
</script>
<!-- ========= END BIBTEX BLOCK ========= -->

<script>
/* ======== CONFIG: set how to bold your name ======== */
const boldAuthorMatches = [
  // Any of these substrings in a BibTeX "author" name will be bolded:
  "Nguyen, Nhan Thanh",
  "N. T. Nguyen" // fallback if you ever provide initials
];

/* ========= SIMPLE BIBTEX PARSER (good for common fields) ========= */
function getBibtexText(){ 
  const el = document.getElementById('bibtex-data');
  return el ? el.textContent : '';
}
function splitEntries(bibtex){
  const parts = bibtex.split(/@(?=[a-zA-Z]+)/).map(s=>s.trim()).filter(Boolean);
  return parts.map(raw=>{
    const m = raw.match(/^([a-zA-Z]+)\s*{\s*([^,]+)\s*,([\s\S]*)}\s*$/);
    if(!m) return null;
    const [, type, key, body] = m;
    const fields = {};
    // Match lines like: key = {value} OR key = "value"
    body.replace(/\s([a-zA-Z]+)\s*=\s*({((?:[^{}]|{[^}]*})*)}|"([^"]*)")\s*,?/g, (_,k,all,braceVal,quoteVal)=>{
      const v = (braceVal ?? quoteVal ?? '').trim();
      fields[k.toLowerCase()] = v;
    });
    return { type: type.toLowerCase(), key: key.trim(), fields };
  }).filter(Boolean);
}

/* ========= AUTHOR FORMATTING ========= */
function toInitials(name){
  // Accepts "Last, First Middle" or "First Middle Last"
  let last='', given='';
  if(name.includes(',')){
    const [l,g] = name.split(',').map(s=>s.trim());
    last=l; given=g||'';
  }else{
    const parts=name.trim().split(/\s+/);
    last = parts.pop()||''; given = parts.join(' ');
  }
  const initials = given.split(/\s+/).filter(Boolean).map(w=>{
    // keep hyphenated initials like Van-Dinh -> V.-D.
    return w.split('-').map(p=>p[0]?.toUpperCase()+'.').join('-');
  }).join(' ');
  return `${initials} ${last}`.replace(/\s+/g,' ').trim();
}
function maybeBold(name){
  const hit = boldAuthorMatches.some(sig => name.toLowerCase().includes(sig.toLowerCase()));
  if(!hit) return name;
  return `<strong>${name}</strong>`;
}
function formatAuthors(authStr){
  // Split authors by " and " (BibTeX convention)
  const names = authStr.split(/\s+and\s+/i).map(s=>s.trim()).filter(Boolean);
  const display = names.map(n => maybeBold(toInitials(n)));
  if(display.length <= 2) return display.join(' and ');
  return display.slice(0,-1).join(', ') + ', and ' + display.slice(-1);
}

/* ========= HTML RENDER ========= */
function escapeHTML(s){ return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

function render(entries){
  const ol = document.getElementById('pubs-list');
  if(!ol) return;
  // Sort by year desc, then title
  entries.sort((a,b)=>{
    const ya = +(a.fields.year||0), yb = +(b.fields.year||0);
    if(yb!==ya) return yb-ya;
    return (a.fields.title||'').localeCompare(b.fields.title||'');
  });
  ol.innerHTML='';
  entries.forEach((e, idx)=>{
    const f = e.fields;
    const authorsHTML = formatAuthors(f.author||'');
    const title = f.title || e.key;
    const url = f.url || '';
    const venue = f.journal || f.booktitle || f.howpublished || '';
    const year = f.year || '';
    const note = f.note ? ` (${f.note})` : '';
    const titleHTML = url ? `<a href="${escapeHTML(url)}" target="_blank">${escapeHTML(title)}</a>` : escapeHTML(title);

    const li = document.createElement('li');
    li.innerHTML = `
      ${authorsHTML},<br>
      "${titleHTML},"<br>
      ${venue ? `<span><em>${escapeHTML(venue)}</em></span>,` : ''} ${escapeHTML(String(year))}.${escapeHTML(note)}
      <details style="display:block; margin-top:6px;">
        <summary style="display:flex; justify-content:flex-start; align-items:center; list-style:none; cursor:pointer; padding:0;">
          <span data-bibbtn>BibTeX</span>
        </summary>
        <div class="bibtex-panel">
          <pre class="bibtex-pre"><code id="bibtex-${idx}">@${e.type}{${e.key},
${Object.entries(f).map(([k,v])=>`  ${k.padEnd(12,' ')}= {${v}}`).join(",\n")}
}</code></pre>
          <textarea id="bibtex-${idx}-src" class="bibtex-hidden" readonly>@${e.type}{${e.key},
${Object.entries(f).map(([k,v])=>`  ${k} = {${v}}`).join(",\n")}
}</textarea>
          <button class="bibtex-copy" data-target="${idx}">Copy</button>
        </div>
      </details>
    `;
    ol.appendChild(li);
  });

  // Copy handlers
  ol.querySelectorAll('.bibtex-copy').forEach(btn=>{
    btn.addEventListener('click', async ()=>{
      const id = btn.getAttribute('data-target');
      const ta = document.getElementById(`bibtex-${id}-src`);
      let ok=false;
      try{
        if(navigator.clipboard?.writeText){ await navigator.clipboard.writeText(ta.value); ok=true; }
        else { ta.select(); document.execCommand('copy'); ok=true; }
      }catch(e){}
      const old = btn.textContent;
      btn.textContent = ok ? 'Copied!' : 'Copy';
      setTimeout(()=>{ btn.textContent=old; }, 1200);
    });
  });
}

/* ========= GO ========= */
(function(){
  const txt = getBibtexText();
  const entries = splitEntries(txt);
  render(entries);
})();
</script>
