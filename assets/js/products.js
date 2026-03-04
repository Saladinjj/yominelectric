/* ═══════════════════════════════════════════════════════════════
   YOMIN ELECTRIC — products.js  v11.2
   Single-page catalog: sidebar + grid + inline detail panel
   ═══════════════════════════════════════════════════════════════ */
'use strict';

const CATS = [
  { id:'Energy Meter',                 label:'Energy Meters',          icon:'⚡', tKey:'prod_cat_energy_meter' },
  { id:'Voltage Stabilizer/Regulator', label:'Voltage Stabilizers',    icon:'🔄', tKey:'prod_cat_voltage_stabilizer' },
  { id:'Current Transformer',          label:'Current Transformers',   icon:'🔵', tKey:'prod_cat_current_transformer' },
  { id:'Variac/Transformer',           label:'Variac / Transformers',  icon:'🔃', tKey:'prod_cat_variac' },
  { id:'Terminal & Connector',         label:'Terminals & Connectors', icon:'🔩', tKey:'prod_cat_terminal' },
  { id:'Solar/PV Products',            label:'Solar & PV',             icon:'☀️',  tKey:'prod_cat_solar' },
  { id:'Fuse & Protection',            label:'Fuses & Protection',     icon:'⚠️',  tKey:'prod_cat_fuse' },
  { id:'Voltage Protector',            label:'Voltage Protectors',     icon:'🛡️',  tKey:'prod_cat_voltage_protector' },
  { id:'Socket & Wiring',              label:'Sockets & Wiring',       icon:'🔌', tKey:'prod_cat_socket' },
  { id:'Tile Leveling System',         label:'Tile Leveling',          icon:'🧱', tKey:'prod_cat_tile' },
  { id:'Tools & Hardware',             label:'Tools & Hardware',       icon:'🔧', tKey:'prod_cat_tools' },
  { id:'Security Seal',                label:'Security Seals',         icon:'🔒', tKey:'prod_cat_seal' },
  { id:'Other',                        label:'Other Products',         icon:'📦', tKey:'prod_cat_other' },
];

/* ── Translation helper ── */
function catLabel(c) {
  const d = (typeof T !== 'undefined' && typeof currentLang !== 'undefined') ? T[currentLang] : null;
  return (d && c.tKey && d[c.tKey]) ? d[c.tKey] : c.label;
}

const CAT_APPS = {
  'Energy Meter':['Residential Buildings','Commercial Premises','Industrial Panels','Sub-metering','Solar Grid-tie','Smart Grid AMI'],
  'Voltage Stabilizer/Regulator':['Household Appliances','Medical Equipment','CNC Machines','HVAC Systems','Data Centers','Sensitive Electronics'],
  'Variac/Transformer':['Lab & Testing','Voltage Adjustment','Motor Speed Control','Audio Equipment','R&D Applications','Industrial Testing'],
  'Current Transformer':['LV Panel Metering','Protection Relays','Revenue Metering','Energy Audits','Sub-metering','SCADA Integration'],
  'Terminal & Connector':['Panel Wiring','Control Cabinets','DIN Rail Systems','Cable Management','Industrial Installations','Switchboards'],
  'Fuse & Protection':['Overcurrent Protection','Solar PV Systems','Distribution Boards','Industrial Safety','LV Networks','Panel Protection'],
  'Solar/PV Products':['Solar Arrays','Grid-tie Systems','Off-grid Power','PV Combiner Boxes','Renewable Energy','EV Charging'],
  'Tile Leveling System':['Floor Tile Installation','Wall Tiling','Ceramic Tiles','Porcelain Tiles','Construction Projects','Professional Use'],
  'Voltage Protector':['Household Appliances','Refrigerators & ACs','Small Business','Surge Protection','Motor Protection','Phase Protection'],
  'Socket & Wiring':['Smart Homes','Office Automation','Kitchen Appliances','EV Charging','Commercial Spaces','App Control'],
  'Tools & Hardware':['Industrial Control','Machine Tool','Isolation Power','Factory Equipment','Control Panels','OEM Projects'],
  'Security Seal':['Meter Sealing','Revenue Protection','Anti-tampering','Utility Metering','Smart Grid','Compliance'],
  'Other':['Industrial Use','Commercial Buildings','Export Ready','OEM Available','CE Certified','ISO9001'],
};

let ALL=[],FILTERED=[],activeFilter='all',searchQuery='',sortMode='default',shown=60;
const PAGE=60;

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const r = await fetch('data/products.json');
    if (!r.ok) throw new Error('HTTP '+r.status);
    ALL = await r.json();
  } catch(e) {
    console.warn('products.json failed:', e);
    const g = document.getElementById('prod-grid');
    if(g) g.innerHTML='<div class="empty-state"><h3>Could not load products</h3><p>Ensure data/products.json is present.</p></div>';
    const m = document.getElementById('area-meta');
    if(m) m.textContent='Load error';
    return;
  }
  const urlCat = new URLSearchParams(location.search).get('cat')||new URLSearchParams(location.search).get('category');
  if(urlCat && urlCat!=='all') activeFilter=decodeURIComponent(urlCat);

  buildSidebar(); buildMobileFilter(); initSbSearch(); initSort(); initLoadMore();
  applyAndRender();

  const urlId = new URLSearchParams(location.search).get('id');
  if(urlId){ const p=ALL.find(x=>x.id===urlId); if(p) setTimeout(()=>openDetail(p),400); }
});

/* ── Sidebar ── */
function buildSidebar(){
  const list=document.getElementById('sb-list'); if(!list) return;
  const counts={};
  ALL.forEach(p=>{counts[p.category]=(counts[p.category]||0)+1;});
  const allLabel = (typeof T !== 'undefined' && typeof currentLang !== 'undefined' && T[currentLang] && T[currentLang].prod_all) ? T[currentLang].prod_all : 'All Products';
  let html=`<button class="sb-all ${activeFilter==='all'?'active':''}" data-filter="all" data-t="prod_all">
    <span style="display:flex;align-items:center;gap:8px"><span style="font-size:14px">🗂</span>${esc(allLabel)}</span>
    <span class="sb-count">${ALL.length}</span></button>`;
  CATS.forEach(c=>{
    const n=counts[c.id]||0; if(!n) return;
    html+=`<button class="sb-item ${activeFilter===c.id?'active':''}" data-filter="${esc(c.id)}">
      <span class="sb-item-inner"><span class="sb-item-icon">${c.icon}</span><span class="sb-item-label">${esc(catLabel(c))}</span></span>
      <span class="sb-count">${n}</span></button>`;
  });
  list.innerHTML=html;
  list.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
}

function buildMobileFilter(){
  const bar=document.getElementById('mob-filter'); if(!bar) return;
  const counts={};
  ALL.forEach(p=>{counts[p.category]=(counts[p.category]||0)+1;});
  const mAllLabel = (typeof T !== 'undefined' && typeof currentLang !== 'undefined' && T[currentLang] && T[currentLang].prod_all) ? T[currentLang].prod_all : 'All Products';
  let html=`<button class="mfbtn ${activeFilter==='all'?'active':''}" data-filter="all">${esc(mAllLabel)} (${ALL.length})</button>`;
  CATS.forEach(c=>{
    const n=counts[c.id]||0; if(!n) return;
    html+=`<button class="mfbtn ${activeFilter===c.id?'active':''}" data-filter="${esc(c.id)}">${c.icon} ${esc(catLabel(c))} (${n})</button>`;
  });
  bar.innerHTML=html;
  bar.querySelectorAll('.mfbtn').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.filter)));
}

function setFilter(val){
  activeFilter=val; searchQuery='';
  const sb=document.getElementById('sb-search'); if(sb) sb.value='';
  document.querySelectorAll('.sb-item,.sb-all').forEach(b=>b.classList.toggle('active',b.dataset.filter===val));
  document.querySelectorAll('.mfbtn').forEach(b=>b.classList.toggle('active',b.dataset.filter===val));
  const t=document.getElementById('area-title');
  if(t){
    const allLbl = (typeof T !== 'undefined' && typeof currentLang !== 'undefined' && T[currentLang] && T[currentLang].prod_all) ? T[currentLang].prod_all : 'All Products';
    if(val==='all'){t.textContent=allLbl;}else{const c=CATS.find(c=>c.id===val);t.textContent=c?catLabel(c):val;}
  }
  shown=PAGE; applyAndRender();
}

function initSbSearch(){
  const sb=document.getElementById('sb-search'); if(!sb) return;
  sb.addEventListener('input',e=>{searchQuery=e.target.value.trim().toLowerCase();shown=PAGE;applyAndRender();});
}

/* ── Sort ── */
function initSort(){
  const btn=document.getElementById('sort-btn'),drop=document.getElementById('sort-drop');
  if(!btn||!drop) return;
  btn.addEventListener('click',e=>{e.stopPropagation();drop.classList.toggle('op');});
  document.addEventListener('click',()=>drop.classList.remove('op'));
  drop.querySelectorAll('.sort-opt').forEach(opt=>opt.addEventListener('click',()=>{
    sortMode=opt.dataset.sort;
    drop.querySelectorAll('.sort-opt').forEach(o=>o.classList.remove('act')); opt.classList.add('act');
    drop.classList.remove('op');
    const d = (typeof T !== 'undefined' && typeof currentLang !== 'undefined') ? T[currentLang] : null;
    const lbl={default:(d&&d.prod_sort)||'Sort','price-asc':(d&&d.prod_price_asc)||'Price ↑','price-desc':(d&&d.prod_price_desc)||'Price ↓',az:(d&&d.prod_az)||'A–Z',za:(d&&d.prod_za)||'Z–A'};
    const fn=btn.childNodes[0]; if(fn) fn.textContent=(lbl[sortMode]||((d&&d.prod_sort)||'Sort'))+' ';
    shown=PAGE; applyAndRender();
  }));
}

/* ── Load More ── */
function initLoadMore(){
  const btn=document.getElementById('load-more'); if(!btn) return;
  btn.addEventListener('click',()=>{
    shown=Math.min(shown+PAGE,FILTERED.length);
    renderGrid(false); updateMeta(); updateLoadMore();
  });
}

/* ── Apply + Render ── */
function applyAndRender(){
  FILTERED=activeFilter==='all'?[...ALL]:ALL.filter(p=>p.category===activeFilter);
  if(searchQuery){
    const q=searchQuery;
    FILTERED=FILTERED.filter(p=>
      p.title.toLowerCase().includes(q)||
      (p.description||'').toLowerCase().includes(q)||
      p.category.toLowerCase().includes(q)||
      Object.values(p.specs||{}).some(v=>String(v).toLowerCase().includes(q))
    );
  }
  if(sortMode==='az') FILTERED.sort((a,b)=>a.title.localeCompare(b.title));
  else if(sortMode==='za') FILTERED.sort((a,b)=>b.title.localeCompare(a.title));
  else if(sortMode==='price-asc') FILTERED.sort((a,b)=>priceMin(a.price)-priceMin(b.price));
  else if(sortMode==='price-desc') FILTERED.sort((a,b)=>priceMin(b.price)-priceMin(a.price));
  shown=PAGE; renderGrid(true); updateMeta(); updateLoadMore();
}

function priceMin(s){if(!s) return 9999; const m=String(s).match(/[\d.]+/); return m?parseFloat(m[0]):9999;}

/* ── Grid render ── */
function renderGrid(animate){
  const grid=document.getElementById('prod-grid'); if(!grid) return;
  const slice=FILTERED.slice(0,shown);
  if(!slice.length){
    grid.innerHTML='<div class="empty-state"><div style="font-size:40px;opacity:.3;margin-bottom:16px">🔍</div><h3>No products found</h3><p>Try a different search or category.</p></div>';
    return;
  }
  grid.innerHTML=slice.map(p=>productCard(p)).join('');
  grid.querySelectorAll('.pcard').forEach(card=>{
    card.addEventListener('click',e=>{
      e.preventDefault();
      const p=ALL.find(x=>x.id===card.dataset.id);
      if(p) openDetail(p);
    });
  });
  if(animate){
    grid.querySelectorAll('.pcard').forEach((el,i)=>{
      el.style.opacity='0'; el.style.transform='translateY(16px)';
      requestAnimationFrame(()=>setTimeout(()=>{
        el.style.transition='opacity .3s ease,transform .3s ease,border-color .25s,box-shadow .25s';
        el.style.opacity='1'; el.style.transform='translateY(0)';
      },Math.min(i*18,500)));
    });
  }
}

function productCard(p){
  const specs=p.specs||{};
  const pills=Object.keys(specs).slice(0,3).map(k=>`<span class="spec-pill">${esc(specs[k])}</span>`).join('');
  const imgHtml=p.image
    ?`<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="pcard-img-fb" style="display:none">${catSvg(p.category)}</div>`
    :`<div class="pcard-img-fb">${catSvg(p.category)}</div>`;
  return `<a class="pcard" href="#" data-id="${esc(p.id)}" title="${esc(p.title)}">
    <div class="pcard-img">${imgHtml}</div>
    <div class="pcard-body">
      <div class="pcard-cat">${esc(p.category)}</div>
      <div class="pcard-name">${esc(p.title)}</div>
      ${pills?`<div class="pcard-specs">${pills}</div>`:''}
    </div>
    <div class="pcard-foot">
      <span class="pcard-price">${esc(p.price||'Get Quote')}</span>
      <span class="pcard-arrow">View →</span>
    </div>
  </a>`;
}

function updateMeta(){
  const el=document.getElementById('area-meta'); if(!el) return;
  el.textContent=`Showing ${Math.min(shown,FILTERED.length)} of ${FILTERED.length} product${FILTERED.length!==1?'s':''}`;
}
function updateLoadMore(){
  const btn=document.getElementById('load-more'); if(!btn) return;
  const rem=FILTERED.length-shown;
  if(rem<=0){btn.style.display='none';return;}
  btn.style.display='inline-flex';
  const loadMoreLbl = (typeof T !== 'undefined' && typeof currentLang !== 'undefined' && T[currentLang] && T[currentLang].prod_load_more) ? T[currentLang].prod_load_more : 'Load More';
  btn.textContent=`${loadMoreLbl} (${Math.min(rem,PAGE)})`;
}

/* ══ DETAIL PANEL ════════════════════════════════════════════ */
function openDetail(p){
  const panel=document.getElementById('detail-panel'); if(!panel) return;
  const specs=p.specs||{};
  const apps=CAT_APPS[p.category]||CAT_APPS['Other'];
  const cfg=CATS.find(c=>c.id===p.category);
  const icon=cfg?cfg.icon:'📦';

  const imgHtml=p.image
    ?`<img src="${esc(p.image)}" alt="${esc(p.title)}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="dp-img-fb" style="display:none">${catSvg(p.category,90)}</div>`
    :`<div class="dp-img-fb">${catSvg(p.category,90)}</div>`;

  const specDefs=['Phase','Voltage','Communication','Display','Control Type','Capacity','Frequency','Current Type','Power'];
  const specRows=specDefs.filter(k=>specs[k]).map(k=>
    `<div class="dp-spec-row"><span class="dp-spec-key">${esc(k)}</span><span class="dp-spec-val">${esc(specs[k])}</span></div>`
  ).join('');

  const extraRows=`
    <div class="dp-spec-row"><span class="dp-spec-key">Certification</span><span class="dp-spec-val">CE, ISO 9001</span></div>
    <div class="dp-spec-row"><span class="dp-spec-key">Warranty</span><span class="dp-spec-val">2 Years</span></div>
    <div class="dp-spec-row"><span class="dp-spec-key">Lead Time</span><span class="dp-spec-val">15–25 days</span></div>
    <div class="dp-spec-row"><span class="dp-spec-key">Min. Order</span><span class="dp-spec-val">100 units</span></div>
    <div class="dp-spec-row"><span class="dp-spec-key">Origin</span><span class="dp-spec-val">Zhejiang, China</span></div>`;

  const appIcons=['🏠','🏪','⚡','🏭','🌐','🔌','📡','🔧'];
  const appChips=apps.map((a,i)=>`<span class="dp-app-chip">${appIcons[i%appIcons.length]} ${esc(a)}</span>`).join('');

  panel.innerHTML=`
    <div class="dp-inner">
      <button class="dp-close" id="dp-close" aria-label="Close">✕</button>
      <div class="dp-left">
        <div class="dp-img-wrap">${imgHtml}</div>
        <div class="dp-price-wrap">
          ${p.price?`<div class="dp-price">${esc(p.price)}</div>`:''}
          <a class="dp-quote-btn" href="contact.html?product=${encodeURIComponent(p.title)}">Request Quote →</a>
        </div>
      </div>
      <div class="dp-right">
        <div class="dp-badge">${icon} ${esc(p.category)}</div>
        <h2 class="dp-title">${esc(p.title)}</h2>
        <p class="dp-desc">${esc(p.description||buildAutoDesc(p))}</p>
        <div class="dp-section-label">Specifications</div>
        <div class="dp-specs-grid">${specRows}${extraRows}</div>
        <div class="dp-section-label" style="margin-top:22px">Applications</div>
        <div class="dp-apps">${appChips}</div>
      </div>
    </div>`;

  panel.style.display='block';
  panel.classList.remove('dp-visible');
  requestAnimationFrame(()=>requestAnimationFrame(()=>panel.classList.add('dp-visible')));
  panel.scrollIntoView({behavior:'smooth',block:'start'});

  document.querySelectorAll('.pcard').forEach(c=>c.classList.toggle('pcard-active',c.dataset.id===p.id));
  document.getElementById('dp-close')?.addEventListener('click',closeDetail);
}

function closeDetail(){
  const panel=document.getElementById('detail-panel'); if(!panel) return;
  panel.classList.remove('dp-visible');
  setTimeout(()=>{panel.style.display='none';panel.innerHTML='';},320);
  document.querySelectorAll('.pcard').forEach(c=>c.classList.remove('pcard-active'));
}

function buildAutoDesc(p){
  const s=p.specs||{},parts=[];
  if(s.Phase) parts.push(s.Phase);
  if(s.Voltage) parts.push(s.Voltage+' rated');
  if(s.Capacity) parts.push(s.Capacity);
  if(s.Communication) parts.push(s.Communication+' connectivity');
  return (parts.length?parts.join(' · ')+'. ':'')+
    `High-quality ${p.category.toLowerCase()} from Zhejiang Yomin Electric Co., Ltd. CE certified, ISO9001, exported to 95+ countries.`;
}

/* ── SVG fallbacks ── */
function catSvg(cat,size=64){
  const p={
    'Energy Meter':`<path d="M14 12h36v18H14z" fill="rgba(200,169,110,.1)" stroke="#c8a96e" stroke-width="1.5" rx="3"/><text x="32" y="25" text-anchor="middle" fill="#c8a96e" font-size="9" font-family="monospace">kWh</text><line x1="18" y1="38" x2="46" y2="38" stroke="#c8a96e" stroke-width="1.2"/><circle cx="32" cy="48" r="6" stroke="#c8a96e" stroke-width="1.2" fill="none"/>`,
    'Voltage Stabilizer/Regulator':`<rect x="8" y="14" width="48" height="36" rx="4" fill="rgba(200,169,110,.07)" stroke="#c8a96e" stroke-width="1.5"/><path d="M14 38L22 22L30 42L38 28L46 38L52 32" stroke="#c8a96e" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    'Current Transformer':`<circle cx="32" cy="32" r="22" stroke="#c8a96e" stroke-width="1.5" fill="rgba(200,169,110,.05)"/><circle cx="32" cy="32" r="10" stroke="#c8a96e" stroke-width="1.2" fill="rgba(200,169,110,.12)"/><line x1="32" y1="10" x2="32" y2="22" stroke="#c8a96e" stroke-width="1.5"/><line x1="32" y1="42" x2="32" y2="54" stroke="#c8a96e" stroke-width="1.5"/>`,
    'Variac/Transformer':`<circle cx="22" cy="32" r="14" stroke="#c8a96e" stroke-width="1.5" fill="rgba(200,169,110,.06)"/><circle cx="42" cy="32" r="14" stroke="#c8a96e" stroke-width="1.5" fill="rgba(200,169,110,.06)"/><line x1="8" y1="32" x2="13" y2="32" stroke="#c8a96e" stroke-width="1.5"/><line x1="51" y1="32" x2="56" y2="32" stroke="#c8a96e" stroke-width="1.5"/>`,
    'Solar/PV Products':`<circle cx="32" cy="32" r="10" fill="rgba(200,169,110,.15)" stroke="#c8a96e" stroke-width="1.5"/><path d="M32 10v8M32 46v8M10 32h8M46 32h8M16 16l6 6M42 42l6 6M42 16l-6 6M16 42l6-6" stroke="#c8a96e" stroke-width="1.5" stroke-linecap="round"/>`,
    'Tile Leveling System':`<rect x="8" y="16" width="20" height="20" rx="2" fill="rgba(200,169,110,.1)" stroke="#c8a96e" stroke-width="1.5"/><rect x="36" y="16" width="20" height="20" rx="2" fill="rgba(200,169,110,.1)" stroke="#c8a96e" stroke-width="1.5"/><rect x="22" y="32" width="20" height="20" rx="2" fill="rgba(200,169,110,.1)" stroke="#c8a96e" stroke-width="1.5"/>`,
    'Terminal & Connector':`<rect x="12" y="22" width="40" height="24" rx="3" fill="rgba(200,169,110,.07)" stroke="#c8a96e" stroke-width="1.5"/><line x1="24" y1="22" x2="24" y2="46" stroke="#c8a96e" stroke-width="1"/><line x1="40" y1="22" x2="40" y2="46" stroke="#c8a96e" stroke-width="1"/><rect x="19" y="12" width="10" height="12" rx="2" fill="rgba(200,169,110,.25)"/><rect x="35" y="12" width="10" height="12" rx="2" fill="rgba(200,169,110,.25)"/>`,
    'Fuse & Protection':`<rect x="24" y="10" width="16" height="44" rx="4" fill="rgba(200,169,110,.1)" stroke="#c8a96e" stroke-width="1.5"/><line x1="32" y1="10" x2="32" y2="4" stroke="#c8a96e" stroke-width="2"/><line x1="32" y1="54" x2="32" y2="60" stroke="#c8a96e" stroke-width="2"/><line x1="26" y1="32" x2="38" y2="32" stroke="#c8a96e" stroke-width="1.5"/>`,
  };
  const d=p[cat]||`<rect x="10" y="10" width="44" height="44" rx="4" fill="rgba(200,169,110,.07)" stroke="#c8a96e" stroke-width="1.5"/><path d="M22 46L22 30M32 46L32 20M42 46L42 36" stroke="#c8a96e" stroke-width="2.5" stroke-linecap="round"/>`;
  return `<svg viewBox="0 0 64 64" fill="none" width="${size}" height="${size}">${d}</svg>`;
}

function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
