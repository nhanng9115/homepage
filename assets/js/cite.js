(function () {
  function getBib(block) {
    const code = block.querySelector('.bibtex');
    return code ? (code.innerText || code.textContent || '').trim() : '';
  }

  function makeDataUrl(text) {
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(text);
  }

  function toast(btn, msg) {
    const orig = btn.textContent;
    btn.textContent = msg;
    setTimeout(() => { btn.textContent = orig; }, 1200);
  }

  // Initialize download links from BibTeX text (runs once on load)
  function initDownloads() {
    document.querySelectorAll('.cite-block').forEach(block => {
      const link = block.querySelector('.download-bib-link');
      if (!link) return;
      const bib = getBib(block);
      if (!bib) return;
      // Ensure filename if missing
      if (!link.getAttribute('download')) {
        const id = block.getAttribute('data-bib-id') || 'citation';
        link.setAttribute('download', id + '.bib');
      }
      link.setAttribute('href', makeDataUrl(bib));
    });
  }

  // Click-to-copy handler (event delegation)
  function onClick(e) {
    const btn = e.target.closest('.copy-bib-btn');
    if (!btn) return;

    const block = btn.closest('.cite-block');
    const bib = block ? getBib(block) : '';
    if (!bib) return;

    const fallbackCopy = () => {
      const ta = document.createElement('textarea');
      ta.value = bib;
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      ta.setAttribute('readonly', '');
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(bib)
        .then(() => toast(btn, 'Copied!'))
        .catch(() => { fallbackCopy(); toast(btn, 'Copied!'); });
    } else {
      // HTTP, file://, or blocked Clipboard API
      fallbackCopy();
      toast(btn, 'Copied!');
    }
  }

  // Wait for DOM ready (defer should already ensure this)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDownloads);
  } else {
    initDownloads();
  }

  document.addEventListener('click', onClick);
})();

