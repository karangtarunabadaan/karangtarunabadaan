function esc(str){
  return String(str ?? '').replace(/[&<>"']/g, (m) => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[m]));
}

window.renderKegiatanTerbaru = function(containerId, limit=3){
  const el = document.getElementById(containerId);
  if(!el) return;
  const list = (window.KEGIATAN || []).slice(0, limit);
  el.innerHTML = list.map(k => `
    <article class="card">
      <img class="card-media" src="${esc(k.image)}" alt="${esc(k.title)}" loading="lazy">
      <div class="card-body">
        <span class="badge badge-secondary">Kegiatan</span>

        <h3 style="margin:10px 0 6px; font-size:18px; line-height:1.3;">
          ${esc(k.title)}
        </h3>

        ${k.desc ? `<p style="margin:0 0 12px; color:var(--muted);">${esc(k.desc)}</p>` : ``}

        <div class="event-meta">📅 ${esc(k.date)}</div>
        <div class="event-meta">📍 ${esc(k.location)}</div>
      </div>
    </article>
  `).join('');
};

window.renderKegiatanAll = function(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const list = (window.KEGIATAN || []);
  el.innerHTML = list.map(k => `
    <article class="card">
      <img class="card-media" src="${esc(k.image)}" alt="${esc(k.title)}" loading="lazy">
      <div class="card-body">
        <span class="badge badge-secondary">Kegiatan</span>

        <h3 style="margin:10px 0 8px; font-size:20px; line-height:1.2;">
          ${esc(k.title)}
        </h3>

        ${k.desc ? `<p style="margin:0 0 12px; color:var(--muted);">${esc(k.desc)}</p>` : ``}

        <div class="event-meta">📅 ${esc(k.date)}</div>
        <div class="event-meta">📍 ${esc(k.location)}</div>
      </div>
    </article>
  `).join('');
};

window.renderGaleri = function(containerId){
  const el = document.getElementById(containerId);
  if(!el) return;
  const list = (window.GALERI || []);
  el.innerHTML = list.map(p => `
    <div class="gallery-item" data-lightbox data-full="${esc(p.url)}" data-alt="${esc(p.title)}">
      <img src="${esc(p.url)}" alt="${esc(p.title)}" loading="lazy">
      <div class="gallery-overlay">
        <div>
          <div style="font-weight:700;">${esc(p.title)}</div>
        </div>
      </div>
    </div>
  `).join('');
};

window.renderStruktur = function(){
  // org chart
  const ketua = (window.PENGURUS || [])[0];
  const others = (window.PENGURUS || []).slice(1);

  const orgKetua = document.getElementById('orgKetua');
  const orgOthers = document.getElementById('orgOthers');
  const orgDivisi = document.getElementById('orgDivisi');

  if(orgKetua && ketua){
    orgKetua.innerHTML = `
      <div class="org-node">
        <div class="org-node__title">${esc(ketua.position)}</div>
        <div class="org-node__subtitle">${esc(ketua.name)}</div>
      </div>
    `;
  }

  if(orgOthers){
    orgOthers.innerHTML = others.map(m => `
      <div class="org-node">
        <div class="org-node__title">${esc(m.position)}</div>
        <div class="org-node__subtitle">${esc(m.name)}</div>
      </div>
    `).join('');
  }

  if(orgDivisi){
    orgDivisi.innerHTML = (window.DIVISI || []).map(d => `
      <div class="org-node">
        <div class="org-node__title">${esc(d.name)}</div>
        <div class="org-node__subtitle">Ketua: ${esc(d.head)}</div>
      </div>
    `).join('');
  }

  // cards pengurus inti
  const pengurusGrid = document.getElementById('pengurusGrid');
  if(pengurusGrid){
    pengurusGrid.innerHTML = (window.PENGURUS || []).map(m => `
      <article class="card" style="text-align:center;">
        <div class="card-body">
          <div style="width:120px; height:120px; border-radius:999px; overflow:hidden; margin:0 auto 12px; border:4px solid var(--primary); box-shadow: var(--shadow-sm);">
            <img src="${esc(m.photo)}" alt="${esc(m.name)}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
          </div>

          <div style="font-weight:800; font-size:16px; margin:0 0 4px;">
            ${esc(m.name)}
          </div>

          <div style="color:var(--primary); font-weight:700;">
            ${esc(m.position)}
          </div>
        </div>
      </article>
    `).join('');
  }

  // cards divisi
  const divisiGrid = document.getElementById('divisiGrid');
  if(divisiGrid){
    divisiGrid.innerHTML = (window.DIVISI || []).map(d => `
      <article class="card">
        <div class="card-body">
          <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px;">
            <div>
              <div style="font-weight:800; font-size:18px; line-height:1.2;">${esc(d.name)}</div>
              <div style="color:var(--muted); font-size:13px; margin-top:4px;">Ketua: ${esc(d.head)}</div>
            </div>
            <span class="badge badge-secondary">${esc(d.members)} anggota</span>
          </div>

          ${d.description ? `
            <div style="margin-top:12px; padding:12px; background: var(--muted-bg); border:1px solid var(--border); border-radius:12px;">
              <div style="font-weight:700; margin-bottom:6px;">Deskripsi Divisi</div>
              <p style="margin:0; color:var(--muted); font-size:13px; line-height:1.6;">${esc(d.description)}</p>
            </div>
          ` : `
            <p style="margin:12px 0 0; color:var(--muted); font-size:13px;">Belum ada deskripsi untuk divisi ini.</p>
          `}
        </div>
      </article>
    `).join('');
  }
};
