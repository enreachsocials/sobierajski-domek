/*!
 * sobie…Rajski Domek — Animation Layer
 * GSAP 3 + ScrollTrigger: scroll-based section animations
 * Framer Motion-equivalent micro-interactions via GSAP
 *
 * NOTE: Framer Motion requires React — all FM-style interactions are
 * replicated here with GSAP for identical visual behaviour in plain HTML.
 */

(function () {
  'use strict';

  // ── Guard: wait for GSAP to load ──────────────────────────────────────────
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // ── Override CSS reveal system — GSAP takes full control ─────────────────
  const overrideStyle = document.createElement('style');
  overrideStyle.textContent = `
    .reveal, .reveal.visible {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
    .btn { transition: box-shadow 0.15s !important; }
  `;
  document.head.appendChild(overrideStyle);

  // ════════════════════════════════════════════════════════════════════════════
  // 1. PAGE ENTRANCE
  // ════════════════════════════════════════════════════════════════════════════

  gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out' });

  // Stagger nav items on load
  gsap.fromTo('.navbar .nav-links li',
    { opacity: 0, y: -12 },
    { opacity: 1, y: 0, duration: 0.45, stagger: 0.07, ease: 'power3.out', delay: 0.25 }
  );
  gsap.fromTo('.navbar .nav-actions .btn',
    { opacity: 0, scale: 0.88 },
    { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.6)', delay: 0.5 }
  );

  // ════════════════════════════════════════════════════════════════════════════
  // 2. HERO — staggered fade-in (subpage heroes)
  // ════════════════════════════════════════════════════════════════════════════

  const subHero = document.querySelector('.page-hero, .page-hero-yellow');
  if (subHero) {
    const heroItems = subHero.querySelectorAll(
      '.breadcrumb, h1, p, .hero-open-badge, .hero-pills > *, ' +
      '.hero-hours, .hero-quick-contact, .savings-badge, ' +
      '.hero-stats-box, .hero-search, .hero-contact-card'
    );
    // Blobs parallax
    subHero.querySelectorAll('.phb, .pyb-blob, .page-hero-blob').forEach((blob, i) => {
      gsap.set(blob, { transformOrigin: 'center center' });
      gsap.to(blob, {
        y: i % 2 === 0 ? -70 : 70,
        ease: 'none',
        scrollTrigger: {
          trigger: subHero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.4
        }
      });
    });
    // Content stagger
    gsap.fromTo(heroItems,
      { opacity: 0, y: 44 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.09, ease: 'power3.out', delay: 0.1 }
    );
  }

  // Homepage hero (index.html) — split left / right
  const homeHeroLeft = document.querySelector('.hero-left, .hero-content');
  if (homeHeroLeft) {
    gsap.fromTo(Array.from(homeHeroLeft.children),
      { opacity: 0, x: -52 },
      { opacity: 1, x: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
    );
  }
  const homeHeroRight = document.querySelector('.hero-right, .hero-photo');
  if (homeHeroRight) {
    gsap.fromTo(homeHeroRight,
      { opacity: 0, x: 52, scale: 0.94 },
      { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out', delay: 0.45 }
    );
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 3. SCROLL-TRIGGERED: Section headers — slide in from left
  // ════════════════════════════════════════════════════════════════════════════

  gsap.utils.toArray('.section-header').forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -38 },
      {
        opacity: 1, x: 0, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 87%', once: true }
      }
    );
  });

  // ════════════════════════════════════════════════════════════════════════════
  // 4. SCROLL-TRIGGERED: Generic .reveal elements — staggered fade-up
  // ════════════════════════════════════════════════════════════════════════════

  // Group siblings so they stagger together
  const revealEls = gsap.utils.toArray('.reveal');
  const grouped = new Map();
  revealEls.forEach(el => {
    const parent = el.parentElement;
    if (!grouped.has(parent)) grouped.set(parent, []);
    grouped.get(parent).push(el);
  });

  grouped.forEach((els, parent) => {
    if (els.length === 1) {
      gsap.fromTo(els[0],
        { opacity: 0, y: 44 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: els[0], start: 'top 88%', once: true }
        }
      );
    } else {
      gsap.fromTo(els,
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0, duration: 0.65, stagger: 0.11, ease: 'power3.out',
          scrollTrigger: { trigger: parent, start: 'top 85%', once: true }
        }
      );
    }
  });

  // ════════════════════════════════════════════════════════════════════════════
  // 5. SCROLL-TRIGGERED: Feature cards — slide-up with stagger
  // ════════════════════════════════════════════════════════════════════════════

  const featureCardContainers = [
    '.why-cards', '.cards-grid', '.program-grid',
    '.team-grid', '.cert-grid', '.testimonials-grid',
    '.process-steps-row', '.steps-row', '.gov-cards',
    '.locations-grid', '.contact-inner', '.intro-stats',
    '.pricing-extra-cards', '.how-steps', '.faq-category'
  ];

  featureCardContainers.forEach(sel => {
    document.querySelectorAll(sel).forEach(container => {
      const cards = container.querySelectorAll(
        ':scope > .card, :scope > .feature-card, :scope > .program-card, ' +
        ':scope > .team-card, :scope > .cert-card, :scope > .testimonial-card, ' +
        ':scope > .process-step, :scope > .step, :scope > .gov-card, ' +
        ':scope > .location-card, :scope > .contact-card, :scope > .intro-stat, ' +
        ':scope > .pricing-extra, :scope > .how-step, :scope > .accordion-item'
      );
      if (!cards.length) return;
      gsap.fromTo(cards,
        { opacity: 0, y: 56 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.09, ease: 'power3.out',
          scrollTrigger: { trigger: container, start: 'top 84%', once: true }
        }
      );
    });
  });

  // ════════════════════════════════════════════════════════════════════════════
  // 6. SCROLL-TRIGGERED: Stats — scale-up (dashboard effect)
  // ════════════════════════════════════════════════════════════════════════════

  const statSelectors = [
    '.stat-num', '.trust-stat-num', '.hs-num', '.fb-stat-val',
    '.savings-amount', '.intro-stat-val', '.hero-phone',
    '.pricing-price-placeholder', '.cq-info a'
  ].join(', ');

  document.querySelectorAll(statSelectors).forEach(el => {
    gsap.fromTo(el,
      { scale: 0.55, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.65, ease: 'back.out(1.8)',
        scrollTrigger: { trigger: el, start: 'top 87%', once: true }
      }
    );
  });

  // ════════════════════════════════════════════════════════════════════════════
  // 7. SCROLL-TRIGGERED: Timeline nodes — pop in sequence
  // ════════════════════════════════════════════════════════════════════════════

  const timeline = document.querySelector('.timeline');
  if (timeline) {
    gsap.fromTo(timeline.querySelectorAll('.tl-node, .timeline-item, .tl-year'),
      { scale: 0, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.55, stagger: 0.18, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: timeline, start: 'top 82%', once: true }
      }
    );
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 8. SCROLL-TRIGGERED: Gallery grid — cascade scale-up
  // ════════════════════════════════════════════════════════════════════════════

  const galleryGrid = document.querySelector('.gallery-grid');
  if (galleryGrid) {
    gsap.fromTo(galleryGrid.querySelectorAll('.photo-item'),
      { opacity: 0, scale: 0.88, y: 28 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.52, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: galleryGrid, start: 'top 84%', once: true }
      }
    );
  }

  // ════════════════════════════════════════════════════════════════════════════
  // 9. SCROLL-TRIGGERED: CTA banners — scale-up pop
  // ════════════════════════════════════════════════════════════════════════════

  document.querySelectorAll('.cta-section, .cta-strip, .funding-section, .enrollment-cta-box').forEach(banner => {
    gsap.fromTo(banner.querySelectorAll('h2, p, .btn, .cta-actions'),
      { opacity: 0, scale: 0.93, y: 30 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'back.out(1.3)',
        scrollTrigger: { trigger: banner, start: 'top 82%', once: true }
      }
    );
  });

  // ════════════════════════════════════════════════════════════════════════════
  // 10. SCROLL-TRIGGERED: FAQ accordion items — slide from left
  // ════════════════════════════════════════════════════════════════════════════

  document.querySelectorAll('.faq-category').forEach(cat => {
    gsap.fromTo(cat.querySelectorAll('.accordion-item'),
      { opacity: 0, x: -28 },
      {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out',
        scrollTrigger: { trigger: cat, start: 'top 85%', once: true }
      }
    );
  });

  // ════════════════════════════════════════════════════════════════════════════
  // MICRO-INTERACTIONS  ↓  (Framer Motion-equivalent in GSAP)
  // ════════════════════════════════════════════════════════════════════════════

  // ── A. BUTTONS: hover scale/lift + press depress ──────────────────────────
  document.querySelectorAll('.btn').forEach(btn => {
    btn.style.willChange = 'transform';

    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.055, y: -3, duration: 0.18, ease: 'power2.out',
        overwrite: true });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, y: 0, duration: 0.22, ease: 'power2.inOut',
        overwrite: true });
    });
    btn.addEventListener('mousedown', () => {
      gsap.to(btn, { scale: 0.96, y: 1, duration: 0.09, ease: 'power3.in',
        overwrite: true });
    });
    btn.addEventListener('mouseup', () => {
      gsap.to(btn, { scale: 1.04, y: -2, duration: 0.15, ease: 'power2.out',
        overwrite: true });
    });
  });

  // ── B. CARDS: hover lift + shadow deepen ─────────────────────────────────
  const liftCardSel = [
    '.contact-card', '.location-card', '.gov-card', '.process-step',
    '.bottom-contact-card', '.pricing-extra', '.form-info-item',
    '.cq-item', '.city-badge-box', '.fb-preview', '.hero-pill',
    '.intro-stat', '.program-card', '.team-card', '.cert-card',
    '.testimonial-card', '.faq-q', '.how-step'
  ].join(', ');

  document.querySelectorAll(liftCardSel).forEach(card => {
    card.style.willChange = 'transform, box-shadow';
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -6, duration: 0.22, ease: 'power2.out', overwrite: true,
        boxShadow: '0 16px 44px rgba(0,0,0,0.13)'
      });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0, duration: 0.26, ease: 'power2.inOut', overwrite: true,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
      });
    });
  });

  // ── C. PULSING STATUS DOT ─────────────────────────────────────────────────
  document.querySelectorAll('.open-dot, .status-dot').forEach(dot => {
    dot.style.animation = 'none'; // kill CSS keyframe
    gsap.to(dot, {
      scale: 1.55, opacity: 0.35,
      duration: 0.88, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });
  });

  // ── D. NAV LINKS: subtle scale on hover ──────────────────────────────────
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { scale: 1.04, duration: 0.14, ease: 'power2.out', overwrite: true });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { scale: 1, duration: 0.16, ease: 'power2.inOut', overwrite: true });
    });
  });

  // ── E. LOGO ICON: wobble on hover ────────────────────────────────────────
  const logoIcon = document.querySelector('.nav-logo .logo-icon');
  if (logoIcon) {
    const logoEl = logoIcon.closest('.nav-logo');
    logoEl.addEventListener('mouseenter', () => {
      gsap.to(logoIcon, { rotation: 14, scale: 1.18, duration: 0.25, ease: 'back.out(2)' });
    });
    logoEl.addEventListener('mouseleave', () => {
      gsap.to(logoIcon, { rotation: 0, scale: 1, duration: 0.25, ease: 'power2.inOut' });
    });
  }

  // ── F. TOPBAR LINKS: slide right on hover ────────────────────────────────
  document.querySelectorAll('.topbar-left a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { x: 5, duration: 0.15, ease: 'power2.out', overwrite: true });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { x: 0, duration: 0.18, ease: 'power2.inOut', overwrite: true });
    });
  });

  // ── G. SOCIAL ICONS: rotate + scale ──────────────────────────────────────
  document.querySelectorAll('.social-icon-btn').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      gsap.to(icon, { rotation: 10, scale: 1.14, duration: 0.2, ease: 'back.out(2)' });
    });
    icon.addEventListener('mouseleave', () => {
      gsap.to(icon, { rotation: 0, scale: 1, duration: 0.2, ease: 'power2.inOut' });
    });
  });

  // ── H. FILTER TABS: float up on hover ────────────────────────────────────
  document.querySelectorAll('.filter-tab, .cat-tab').forEach(tab => {
    tab.addEventListener('mouseenter', () => {
      if (!tab.classList.contains('active')) {
        gsap.to(tab, { y: -2, duration: 0.14, ease: 'power2.out', overwrite: true });
      }
    });
    tab.addEventListener('mouseleave', () => {
      gsap.to(tab, { y: 0, duration: 0.16, ease: 'power2.inOut', overwrite: true });
    });
  });

  // ── I. FOOTER LINKS: color-shift x-offset ────────────────────────────────
  document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, { x: 6, duration: 0.15, ease: 'power2.out', overwrite: true });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(link, { x: 0, duration: 0.18, ease: 'power2.inOut', overwrite: true });
    });
  });

  // ── J. STEP CIRCLES: bounce on scroll entry ───────────────────────────────
  document.querySelectorAll('.step-circle, .process-step-num, .how-step-num, .ems-num').forEach(el => {
    gsap.fromTo(el,
      { scale: 0, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(2)',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });

  // ── K. PARALLAX: floating blobs in sections ───────────────────────────────
  document.querySelectorAll('.phb, .pyb-blob, .page-hero-blob').forEach((blob, i) => {
    const trigger = blob.closest('section, div') || document.body;
    gsap.to(blob, {
      y: i % 2 === 0 ? -60 : 60,
      ease: 'none',
      scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
    });
  });

  // ── L. PHOTO ITEMS: tilt on hover (gallery) ──────────────────────────────
  document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { scale: 1.03, duration: 0.25, ease: 'power2.out', overwrite: true });
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { scale: 1, duration: 0.28, ease: 'power2.inOut', overwrite: true });
    });
  });

  // ── M. ACCORDION: GSAP-powered smooth height animation ───────────────────
  // Wrap native toggleAccordion with GSAP height tween
  function patchAccordion(toggleFnName) {
    const orig = window[toggleFnName];
    if (typeof orig !== 'function') return;

    window[toggleFnName] = function (arg) {
      const item = arg.closest ? arg.closest('.accordion-item') : null;
      if (!item) { orig(arg); return; }

      const answerEl = item.querySelector('.accordion-a');
      const arrow    = item.querySelector('.accordion-arrow');
      const isOpen   = item.classList.contains('open');

      // Close siblings
      const siblings = item.closest('.faq-category, section') ?
        item.closest('.faq-category, section').querySelectorAll('.accordion-item') : [];
      siblings.forEach(sib => {
        if (sib !== item && sib.classList.contains('open')) {
          sib.classList.remove('open');
          gsap.to(sib.querySelector('.accordion-a'), { maxHeight: 0, duration: 0.32, ease: 'power2.inOut' });
          const sibArrow = sib.querySelector('.accordion-arrow');
          if (sibArrow) gsap.to(sibArrow, { rotation: 0, duration: 0.25 });
        }
      });

      if (!isOpen) {
        item.classList.add('open');
        gsap.fromTo(answerEl, { maxHeight: 0 }, { maxHeight: 500, duration: 0.4, ease: 'power2.out' });
        if (arrow) gsap.to(arrow, { rotation: 180, duration: 0.28, ease: 'power2.out' });
      } else {
        item.classList.remove('open');
        gsap.to(answerEl, { maxHeight: 0, duration: 0.3, ease: 'power2.inOut' });
        if (arrow) gsap.to(arrow, { rotation: 0, duration: 0.24 });
      }
    };
  }
  patchAccordion('toggleAccordion');
  patchAccordion('toggleFaq');

  // ── N. LOCATION CARDS: stagger on scroll ─────────────────────────────────
  const locGrid = document.querySelector('.locations-grid');
  if (locGrid) {
    gsap.fromTo(locGrid.querySelectorAll('.location-card'),
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.65, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: locGrid, start: 'top 82%', once: true }
      }
    );
  }

  // ── O. FORM FIELDS: focus ring pop ───────────────────────────────────────
  document.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('focus', () => {
      gsap.to(field, { scale: 1.012, duration: 0.15, ease: 'power2.out', overwrite: true });
    });
    field.addEventListener('blur', () => {
      gsap.to(field, { scale: 1, duration: 0.15, ease: 'power2.inOut', overwrite: true });
    });
  });

  // ── P. TRUST BAR: items slide up from below ──────────────────────────────
  const trustBar = document.querySelector('.trust-bar, .trust-bar-items');
  if (trustBar) {
    gsap.fromTo(trustBar.querySelectorAll('.trust-item, .trust-stat'),
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: trustBar, start: 'top 90%', once: true }
      }
    );
  }

})();
