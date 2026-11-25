/* Demo Three interactions */
(function () {
  // image fallback
  const fb = img => { if (img.dataset.fb) return; img.dataset.fb = 1; img.src = `https://picsum.photos/seed/${encodeURIComponent(img.alt || 'cw')}/1200/800`; };
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) fb(img);
    img.addEventListener('error', () => fb(img));
  });

  // sticky header (Betheme style: becomes fixed after scrolling past the header)
  const bar = document.getElementById('Top_bar');
  const onScroll = () => bar && bar.classList.toggle('is-sticky', window.scrollY > 200);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const wrap = document.querySelector('.menu_wrapper');
  toggle && toggle.addEventListener('click', () => wrap.classList.toggle('show'));

  // mega menu: click to open on touch / small screens, and for search on all sizes
  const isDesktop = () => window.matchMedia('(min-width: 1240px)').matches;
  document.querySelectorAll('#mega-menu > li.has-mega > a, #mega-menu > li.has-search > a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const li = a.parentElement;
      if (isDesktop() && li.classList.contains('has-mega')) return;
      const open = li.classList.contains('open');
      document.querySelectorAll('#mega-menu > li.open').forEach(x => x.classList.remove('open'));
      if (!open) {
        li.classList.add('open');
        const inp = li.querySelector('input'); inp && inp.focus();
      }
    });
  });
  document.addEventListener('click', e => { if (!e.target.closest('#mega-menu')) document.querySelectorAll('#mega-menu > li.open').forEach(x => x.classList.remove('open')); });

  // reveal on scroll
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }), { threshold: .15 });
  document.querySelectorAll('.animate').forEach(el => io.observe(el));

  // counters
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, t = parseFloat(el.dataset.count), d = (el.dataset.count.split('.')[1] || '').length, s = performance.now();
    const tick = n => { const p = Math.min((n - s) / 1600, 1); el.textContent = (t * (1 - Math.pow(1 - p, 3))).toFixed(d); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick); cio.unobserve(el);
  }), { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

  // toast for pages not included in the demo
  const toast = document.getElementById('soonToast'); let t;
  window.showSoon = msg => {
    if (!toast) return;
    toast.querySelector('span').textContent = msg || 'This page will be available in the full version.';
    toast.classList.add('show'); clearTimeout(t); t = setTimeout(() => toast.classList.remove('show'), 2600);
  };
  document.addEventListener('click', e => { const a = e.target.closest('[data-soon]'); if (a) { e.preventDefault(); window.showSoon(); } });
  document.querySelectorAll('form[data-demo]').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); window.showSoon(f.dataset.demo); f.reset(); }));

  // back to top
  const btt = document.getElementById('back_to_top');
  btt && btt.addEventListener('click', e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
