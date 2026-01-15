const ICONS = {
  'users': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  'calendar': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  'trophy': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M8 21h8"/><path d="M12 17a5 5 0 0 0 5-5V4H7v8a5 5 0 0 0 5 5z"/><path d="M5 8H4a2 2 0 0 0 0 4h1"/><path d="M19 8h1a2 2 0 0 1 0 4h-1"/></svg>`,
  'menu': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  'x': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  'arrow-right': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  'clock': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  'map-pin': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  'mail': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M4 4h16v16H4z" fill="none"/><polyline points="22,6 12,13 2,6"/></svg>`,
  'phone': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  'instagram': (cls='icon') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>`,
};

window.icon = function(name, cls){
  const fn = ICONS[name];
  if(!fn) return '';
  return fn(cls || 'icon');
};


window.renderHeader = function(activeKey){
  const navItems = [
    { label:'Beranda', href:'index.html', key:'home' },
    { label:'Struktur', href:'struktur.html', key:'struktur' },
    { label:'Kegiatan', href:'kegiatan.html', key:'kegiatan' },
    { label:'Galeri', href:'galeri.html', key:'galeri' },
  ];

  return `
  <a class="skip-link" href="#main">Lewati ke konten</a>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="${SITE.name}">
        <span class="brand-mark" aria-hidden="true">
          <img class="brand-logo" src="assets/img/logo.png" alt="Logo ${SITE.name}">
        </span>
        <span class="brand-text">
          ${SITE.name}
          <span class="brand-sub">${SITE.location}</span>
        </span>
      </a>

      <nav class="nav nav--desktop" aria-label="Navigasi utama">
        ${navItems.map(it => `
          <a class="nav-link ${activeKey===it.key ? 'is-active' : ''}" href="${it.href}">${it.label}</a>
        `).join('')}
      </nav>

      <button class="icon-btn nav-toggle" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Buka menu">
        <span class="nav-toggle__open" aria-hidden="true">${icon('menu','icon icon--md')}</span>
        <span class="nav-toggle__close" aria-hidden="true">${icon('x','icon icon--md')}</span>
      </button>
    </div>

    <div class="nav nav--mobile" id="mobileNav" hidden>
      <div class="container">
        <div class="mobile-links">
          ${navItems.map(it => `
            <a class="nav-link ${activeKey===it.key ? 'is-active' : ''}" href="${it.href}">${it.label}</a>
          `).join('')}
        </div>
      </div>
    </div>
  </header>
  `;
};

window.renderFooter = function(){
  const s = SITE.social || {};
  return `
  <footer class="site-footer" role="contentinfo">
    <div class="container footer-inner">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <span class="brand-mark" aria-hidden="true">
              <img class="brand-logo" src="assets/img/logo.png" alt="Logo ${SITE.name}">
            </span>
            <div>
              <div class="footer-brand__title">${SITE.name}</div>
              <div class="footer-brand__subtitle">${SITE.location}</div>
            </div>
          </div>
          <p class="footer-muted">${SITE.tagline || ''}</p>
        </div>

        <div>
          <h4 class="footer-title">Kontak</h4>
          <ul class="footer-contact">
            <li>
              <span class="footer-icon" aria-hidden="true">${icon('map-pin','icon icon--sm')}</span>
              <span>${SITE.address || ''}</span>
            </li>
            <li>
              <span class="footer-icon" aria-hidden="true">${icon('phone','icon icon--sm')}</span>
              <span>${SITE.phone || ''}</span>
            </li>
            <li>
              <span class="footer-icon" aria-hidden="true">${icon('mail','icon icon--sm')}</span>
              <span>${SITE.email || ''}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="footer-title">Sosial Media</h4>
          <div class="social">
            <a class="social-btn" href="${s.facebook || '#'}" aria-label="Facebook">
              ${icon('facebook','icon icon--sm')}
            </a>
            <a class="social-btn" href="${s.instagram || '#'}" aria-label="Instagram">
              ${icon('instagram','icon icon--sm')}
            </a>
            <a class="social-btn" href="${s.twitter || '#'}" aria-label="Twitter">
              ${icon('twitter','icon icon--sm')}
            </a>
          </div>
        </div>

        <div>
          <h4 class="footer-title">Menu</h4>
          <ul class="footer-links">
            <li><a href="index.html">Beranda</a></li>
            <li><a href="struktur.html">Struktur</a></li>
            <li><a href="kegiatan.html">Kegiatan</a></li>
            <li><a href="galeri.html">Galeri</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        © ${new Date().getFullYear()} ${SITE.name} ${SITE.location}. All rights reserved.
      </div>
    </div>
  </footer>
  `;
};
