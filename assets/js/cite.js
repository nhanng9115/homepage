// Simple event delegation so it works for all items
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.bib-copy');
  if (!btn) return;

  const box = btn.closest('.bib-box');
  const code = box && box.querySelector('.bibtex');
  const text = code ? (code.innerText || code.textContent || '') : '';
  if (!text) return;

  // Fallback that works on HTTP and strict browsers
  const fallbackCopy = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    ta.setAttribute('readonly', '');
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch {}
    document.body.removeChild(ta);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => showCopied(btn))
      .catch(() => { fallbackCopy(); showCopied(btn); });
  } else {
    fallbackCopy();
    showCopied(btn);
  }
});

function showCopied(btn) {
  const orig = btn.textContent;
  btn.textContent = 'Copied!';
  btn.disabled = true;
  setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 1200);
}
