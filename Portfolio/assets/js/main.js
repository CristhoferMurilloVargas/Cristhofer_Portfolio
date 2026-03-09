/* ═══════════════════════════════════════════════
   PORTFOLIO SPA — main.js
   ═══════════════════════════════════════════════

   Módulos:
   1. Nav active on scroll (IntersectionObserver)
   2. Mobile hamburger toggle
   3. Scroll reveal
═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────
     1. NAV ACTIVE ON SCROLL
  ───────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => navObserver.observe(s));


  /* ─────────────────────────────
     2. MOBILE HAMBURGER TOGGLE
  ───────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    const spans = toggle.querySelectorAll('span');

    const openMenu = () => {
      links.classList.add('open');
      spans[0].style.transform = 'translateY(6px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    };

    const closeMenu = () => {
      links.classList.remove('open');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    };

    toggle.addEventListener('click', () => {
      links.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Cierra al hacer click en un link
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });
  }


  /* ─────────────────────────────
     3. SCROLL REVEAL
  ───────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

});
