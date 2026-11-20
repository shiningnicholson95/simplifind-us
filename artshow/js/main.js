document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10 ? '0 8px 24px rgba(0,0,0,0.06)' : 'none';
    });
  }

  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(22px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      io.observe(el);
    });
  }
});

/* ---------- Lightbox (used on collections.html) ---------- */

function initLightbox(items) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const img = lb.querySelector('img');
  const caption = lb.querySelector('.lightbox-caption');
  let index = 0;

  function show(i) {
    index = (i + items.length) % items.length;
    const item = items[index];
    img.src = item.full;
    img.alt = item.title + (item.artist ? ' — ' + item.artist : '');
    caption.textContent = item.title + ' · No. ' + item.num + (item.artist ? ' · ' + item.artist : '');
  }

  function open(i) {
    show(i);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-art-index]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      open(parseInt(el.dataset.artIndex, 10));
    });
  });

  lb.querySelector('.lightbox-close').addEventListener('click', close);
  lb.querySelector('.lightbox-prev').addEventListener('click', () => show(index - 1));
  lb.querySelector('.lightbox-next').addEventListener('click', () => show(index + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') show(index + 1);
    if (e.key === 'ArrowLeft') show(index - 1);
  });
}
