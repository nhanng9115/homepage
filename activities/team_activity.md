---
permalink: /activities/
title: "Team Activities"
---

<h1>September 18, 2025</h1>

<p>
Our group enjoyed an outing at <strong>Koitelinkoski, Oulu</strong>. It was a fun evening with international <strong>BBQ traditions</strong> and great teamwork. 🌍🔥🙌
</p>

<style>
  /* Small image styling */
  .zoomable {
    cursor: zoom-in;
    border-radius: 8px;
    transition: transform 0.15s ease;
  }
  .zoomable:hover {
    transform: scale(1.02);
  }

  /* Modal overlay */
  .lightbox-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.8);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 2rem;
  }
  .lightbox-overlay.open {
    display: flex;
  }

  /* Large image container */
  .lightbox-content {
    position: relative;
    max-width: 95vw;
    max-height: 90vh;
  }
  .lightbox-content img {
    max-width: 100%;
    max-height: 90vh;
    width: auto;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  /* Close button */
  .lightbox-close {
    position: absolute;
    top: -12px;
    right: -12px;
    background: #fff;
    border: none;
    border-radius: 999px;
    width: 36px;
    height: 36px;
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    cursor: pointer;
  }

  /* Make table images responsive on small screens */
  @media (max-width: 820px) {
    table.responsive-gallery,
    table.responsive-gallery tr,
    table.responsive-gallery td {
      display: block;
      width: 100%;
    }
    table.responsive-gallery td {
      margin-bottom: 12px;
    }
    table.responsive-gallery img {
      width: 100% !important;
      height: auto !important;
    }
  }
</style>

<table class="responsive-gallery">
  <tr>
    <td>
      <img class="zoomable" alt="Team at Koitelinkoski 1"
           src="https://github.com/nhanng9115/homepage/blob/master/images/687A69C4-C4BF-4F76-A6CD-4D5AD470429A_1_105_c.jpeg?raw=1"
           width="260">
    </td>
    <td>
      <img class="zoomable" alt="Team at Koitelinkoski 2"
           src="https://github.com/nhanng9115/homepage/blob/master/images/93308D9A-1874-41CB-99D3-9B12EF7F3418_1_105_c.jpeg?raw=1"
           width="260">
    </td>
    <td>
      <img class="zoomable" alt="Team at Koitelinkoski 3"
           src="https://github.com/nhanng9115/homepage/blob/master/images/F08387B9-F23F-44E6-9C8C-542A740A6F18_1_105_c.jpeg?raw=1"
           width="260">
    </td>
  </tr>
</table>

<!-- Lightbox modal (one per page) -->
<div class="lightbox-overlay" id="lightbox" aria-modal="true" role="dialog" aria-label="Image preview">
  <div class="lightbox-content">
    <button class="lightbox-close" id="lightboxClose" aria-label="Close preview">×</button>
    <img id="lightboxImg" alt="">
  </div>
</div>

<script>
  (function () {
    const overlay = document.getElementById('lightbox');
    const bigImg  = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');

    function openLightbox(src, alt) {
      bigImg.src = src;
      bigImg.alt = alt || '';
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeLightbox() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      bigImg.src = '';
      bigImg.alt = '';
    }

    // Open on click of any small image
    document.querySelectorAll('.zoomable').forEach(img => {
      img.addEventListener('click', () => {
        // Use the same source; GitHub raw links are already high-res.
        openLightbox(img.src, img.alt);
      });
    });

    // Close interactions
    overlay.addEventListener('click', (e) => {
      // Close when clicking on the dimmed backdrop, not when clicking the image
      if (e.target === overlay) closeLightbox();
    });
    closeBtn.addEventListener('click', closeLightbox);

    // Close on Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeLightbox();
      }
    });
  })();
</script>
