(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    // Mobile menu
    var toggle = document.querySelector('.nav-toggle');
    var mobileNav = document.getElementById('mobileNav');
    if (toggle && mobileNav) {
      var openIcon = toggle.querySelector('.nav-toggle__open');
      var closeIcon = toggle.querySelector('.nav-toggle__close');

      function setState(open) {
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) {
          mobileNav.hidden = false;
          if (openIcon) openIcon.style.display = 'none';
          if (closeIcon) closeIcon.style.display = 'inline';
        } else {
          mobileNav.hidden = true;
          if (openIcon) openIcon.style.display = 'inline';
          if (closeIcon) closeIcon.style.display = 'none';
        }
      }

      setState(false);

      toggle.addEventListener('click', function () {
        var expanded = toggle.getAttribute('aria-expanded') === 'true';
        setState(!expanded);
      });

      // Close menu when clicking a link
      mobileNav.addEventListener('click', function (e) {
        var t = e.target;
        if (t && t.tagName === 'A') {
          setState(false);
        }
      });
    }

    // Lightbox
    var lightbox = document.getElementById('lightbox');
    if (lightbox) {
      var lbImg = lightbox.querySelector('img');
      var lbClose = lightbox.querySelector('.lightbox-close');

      function openLightbox(src, alt) {
        if (lbImg) {
          lbImg.src = src;
          lbImg.alt = alt || 'Gambar';
        }
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lbImg) lbImg.src = '';
      }

      document.querySelectorAll('[data-lightbox]')
        .forEach(function (el) {
          el.addEventListener('click', function () {
            var src = el.getAttribute('data-full') || el.getAttribute('data-src');
            var alt = el.getAttribute('data-alt') || '';
            if (src) openLightbox(src, alt);
          });
        });

      if (lbClose) {
        lbClose.addEventListener('click', function (e) {
          e.stopPropagation();
          closeLightbox();
        });
      }

      lightbox.addEventListener('click', function () {
        closeLightbox();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
      });
    }
  });
})();
