/* assets/js/bibtex-copy.js */
(function () {
  function addCopyButtons() {
    // Find every <details> that looks like your BibTeX panel
    var panels = document.querySelectorAll('details');
    panels.forEach(function (det) {
      var summary = det.querySelector('summary');
      if (!summary || !/bibtex/i.test(summary.textContent || '')) return;

      var code = det.querySelector('pre > code');
      if (!code) return;

      // Don’t add twice
      if (det.querySelector('.bib-copy-btn')) return;

      // Make sure the container is relatively positioned for the button
      var container = det.querySelector('div') || det;
      if (!container.style.position) container.style.position = 'relative';

      // Create the Copy button (same look you used)
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'bib-copy-btn';
      btn.textContent = 'Copy';
      btn.style.cssText = 'position:absolute;top:6px;right:6px;border:1px solid #c7d2e0;background:#eef2f7;border-radius:6px;padding:2px 8px;font-size:12px;cursor:pointer;';

      btn.addEventListener('click', function () {
        var text = code.innerText || code.textContent || '';
        function flash(ok) {
          var old = btn.textContent;
          btn.textContent = ok ? 'Copied!' : 'Copy';
          setTimeout(function(){ btn.textContent = old; }, 1200);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function(){ flash(true); }).catch(function(){ flash(false); });
        } else {
          // Fallback for older browsers
          var ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          var ok = false;
          try { ok = document.execCommand('copy'); } catch(e) {}
          document.body.removeChild(ta);
          flash(ok);
        }
      });

      container.appendChild(btn);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCopyButtons, { once: true });
  } else {
    addCopyButtons();
  }
})();
