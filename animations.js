/**
 * animations.js — Motion System para hugoaleolguin.github.io
 *
 * Módulos:
 *  1. ScrollReveal  — Intersection Observer con stagger por sección
 *  2. CountUp       — Animación de números cuando entran al viewport
 *  3. TiltCard      — Perspectiva 3D suave en project-cards (desktop)
 *  4. MagneticBtn   — Efecto magnético en botones primarios (desktop)
 *  5. HeroParallax  — Parallax muy suave en el hero al scroll
 *  6. CursorGlow    — Cursor personalizado con blob que sigue al mouse (desktop)
 *  7. HoverLine     — Línea animada en section__title al entrar al viewport
 *
 * 100% vanilla JS · IntersectionObserver · requestAnimationFrame
 * respeta prefers-reduced-motion
 */

function initMotionSystem() {
  'use strict';

  /* ─── Accessibility guard ──────────────────────────────────────────── */
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 768;

  /* ══════════════════════════════════════════════════════════════════
   * 1. SCROLL REVEAL — fade-up con stagger por grupo (sin demorar LCP)
   * ══════════════════════════════════════════════════════════════════ */
  (function initScrollReveal() {
    if (prefersReduced) return;

    // Solo targets debajo del fold para no retrasar LCP ni First Paint
    var targets = document.querySelectorAll([
      '.section__header',
      '.section__label',
      '.section__title',
      '.about__text p',
      '.about__metrics',
      '.metric-card',
      '.skills-card',
      '.skills-group',
      '.skill-pill',
      '.project-card',
      '.contact-card-btn',
      '.hackathon-time-badge',
      '.star-stat-box',
      '.tag-badge'
    ].join(','));

    targets.forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
      el.dataset.revealIndex = i;
    });

    // Stagger por grupos hermanos
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var parent = el.parentElement;
        var siblings = parent ? Array.from(parent.children) : [el];
        var idx = siblings.indexOf(el);
        var delay = Math.min(idx * 50, 300);
        setTimeout(function () {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, delay);
        observer.unobserve(el);
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    targets.forEach(function (el) {
      observer.observe(el);
    });
  })();


  /* ══════════════════════════════════════════════════════════════════
   * 2. COUNT-UP — anima data-target cuando entra al viewport
   * ══════════════════════════════════════════════════════════════════ */
  (function initCountUp() {
    var counters = document.querySelectorAll('[data-target]');
    if (!counters.length) return;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function animateCounter(el) {
      var target = parseInt(el.dataset.target, 10);
      var duration = 1400;
      var start = performance.now();
      var startVal = 0;

      function step(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var val = Math.round(easeOutQuart(progress) * (target - startVal) + startVal);
        el.textContent = val + (el.dataset.suffix || '');
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target + (el.dataset.suffix || '');
      }
      requestAnimationFrame(step);
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { obs.observe(el); });
  })();


  /* ══════════════════════════════════════════════════════════════════
   * 3. TILT CARD — perspectiva 3D ultra-sutil en project-cards (desktop only)
   * ══════════════════════════════════════════════════════════════════ */
  (function initTilt() {
    if (isMobile || prefersReduced) return;

    var cards = document.querySelectorAll('.project-card');
    var MAX_TILT = 2; // grados máximos muy sutiles y elegantes
    var SCALE = 1.006;

    cards.forEach(function (card) {
      card.style.transition = 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease';
      card.style.willChange = 'transform';

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var cx = rect.left + rect.width / 2;
        var cy = rect.top + rect.height / 2;
        var dx = (e.clientX - cx) / (rect.width / 2);
        var dy = (e.clientY - cy) / (rect.height / 2);
        var rotX = -dy * MAX_TILT;
        var rotY = dx * MAX_TILT;
        card.style.transform =
          'perspective(1200px) rotateX(' + rotX.toFixed(2) + 'deg) rotateY(' + rotY.toFixed(2) + 'deg) scale(' + SCALE + ') translateY(-2px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease';
        card.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) scale(1) translateY(0)';
      });
    });
  })();


  /* ══════════════════════════════════════════════════════════════════
   * 4. MAGNETIC BUTTON — efecto magnético en .btn--primary (desktop)
   * ══════════════════════════════════════════════════════════════════ */
  (function initMagnetic() {
    if (isMobile || prefersReduced) return;

    var btns = document.querySelectorAll('.btn--primary');
    var STRENGTH = 0.35;

    btns.forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var rect = btn.getBoundingClientRect();
        var dx = e.clientX - (rect.left + rect.width / 2);
        var dy = e.clientY - (rect.top + rect.height / 2);
        btn.style.transform = 'translate(' + dx * STRENGTH + 'px, ' + dy * STRENGTH + 'px) scale(1.04)';
        btn.style.transition = 'transform 0.15s ease';
      });

      btn.addEventListener('mouseleave', function () {
        btn.style.transform = 'translate(0,0) scale(1)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)';
      });
    });
  })();


  /* ══════════════════════════════════════════════════════════════════
   * 5. HERO PARALLAX — desplazamiento y desvanecimiento suave al scroll
   * ══════════════════════════════════════════════════════════════════ */
  (function initParallax() {
    if (prefersReduced) return;
    var heroEls = document.querySelectorAll('.hero__content, .hero__rubik-wrapper');
    if (!heroEls.length) return;

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var sy = window.scrollY;
          var offset = sy * 0.18;
          var opacity = Math.max(0, 1 - sy / 520) + '';
          heroEls.forEach(function (el) {
            el.style.transform = 'translateY(' + offset + 'px)';
            el.style.opacity = opacity;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  })();





  /* ══════════════════════════════════════════════════════════════════
   * 7. SECTION TITLE LINE — animación de línea decorativa al revelar
   * ══════════════════════════════════════════════════════════════════ */
  (function initTitleLine() {
    if (prefersReduced) return;
    var titles = document.querySelectorAll('.section__title');
    titles.forEach(function (t) {
      t.classList.add('title-line-anim');
    });

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('title-line-anim--visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    titles.forEach(function (t) { obs.observe(t); });
  })();

  /* ══════════════════════════════════════════════════════════════════
   * 8. PARALLAX DE FONDO CON SCROLL
   * ══════════════════════════════════════════════════════════════════ */
  (function initBackgroundParallax() {
    if (prefersReduced) return;
    var bgSvg = document.querySelector('.topographic-waves-svg');
    if (!bgSvg) return;

    var rafPending = false;

    function updateOnScroll() {
      var scrollTop = window.scrollY || window.pageYOffset || 0;
      var docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      var progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      var maxShift = Math.max(bgSvg.offsetHeight - window.innerHeight, 0) * 0.75;
      var shiftY = -(progress * maxShift);
      bgSvg.style.transform = 'translate3d(0, ' + shiftY.toFixed(2) + 'px, 0)';
      rafPending = false;
    }

    window.addEventListener('scroll', function () {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(updateOnScroll);
      }
    }, { passive: true });

    updateOnScroll();
  })();

  /* ══════════════════════════════════════════════════════════════════
   * 9. DYNAMIC ISLAND (UI MORPHING EN HERO)
   * ══════════════════════════════════════════════════════════════════ */
  (function initDynamicIsland() {
    var island = document.getElementById('dynamic-island');
    var textEl = document.getElementById('dynamic-island-text');
    if (!island || !textEl) return;

    var states = [
      { label: 'Disponible para proyectos', cls: '' },
      { label: '200+ GitHub Stars', cls: 'dynamic-island--gold' },
      { label: 'Copiar Email: hugod.ies9012@gmail.com', cls: 'dynamic-island--indigo', copy: 'hugod.ies9012@gmail.com' }
    ];
    var idx = 0;
    var timer = null;

    function setState(nextIdx) {
      idx = nextIdx % states.length;
      var st = states[idx];
      island.classList.add('is-morphing');
      setTimeout(function () {
        textEl.textContent = st.label;
        island.classList.remove('dynamic-island--gold', 'dynamic-island--indigo', 'dynamic-island--copied');
        if (st.cls) island.classList.add(st.cls);
        island.classList.remove('is-morphing');
      }, 140);
    }

    island.addEventListener('click', function () {
      var current = states[idx];
      if (current.copy && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(current.copy).then(function () {
          textEl.textContent = '✓ ¡Email copiado!';
          island.classList.add('dynamic-island--copied');
          setTimeout(function () { setState(0); }, 1800);
        });
        return;
      }
      setState(idx + 1);
    });

    if (!prefersReduced) {
      timer = setInterval(function () {
        if (!island.matches(':hover')) setState(idx + 1);
      }, 4200);
      island.addEventListener('mouseenter', function () { clearInterval(timer); });
      island.addEventListener('mouseleave', function () {
        clearInterval(timer);
        timer = setInterval(function () {
          if (!island.matches(':hover')) setState(idx + 1);
        }, 4200);
      });
    }
  })();

  /* ══════════════════════════════════════════════════════════════════
   * 10. SPOTLIGHT + TILT 3D SUTIL EN TARJETAS (GPU, SIN LAG)
   * ══════════════════════════════════════════════════════════════════ */
  (function initCardSpotlightAndTilt() {
    if (prefersReduced || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    var cards = document.querySelectorAll('.bento-card, .project-card');
    if (!cards.length) return;

    cards.forEach(function (card) {
      var rafId = null;
      var rect = null;

      card.addEventListener('mouseenter', function () {
        rect = card.getBoundingClientRect();
      }, { passive: true });

      card.addEventListener('mousemove', function (e) {
        if (rafId) return;
        rafId = requestAnimationFrame(function () {
          if (!rect) rect = card.getBoundingClientRect();
          var x = e.clientX - rect.left;
          var y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', x + 'px');
          card.style.setProperty('--mouse-y', y + 'px');

          var rx = ((y / rect.height) - 0.5) * -2.2;
          var ry = ((x / rect.width) - 0.5) * 2.2;
          card.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-2px)';
          rafId = null;
        });
      }, { passive: true });

      card.addEventListener('mouseleave', function () {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        rect = null;
        card.style.transform = '';
      }, { passive: true });
    });
  })();

  /* ══════════════════════════════════════════════════════════════════
   * 11. MORPHING DE ESTADO EN BOTONES (EMAIL & CV)
   * ══════════════════════════════════════════════════════════════════ */
  (function initButtonMorphing() {
    var emailBtn = document.getElementById('link-email');
    if (emailBtn) {
      emailBtn.addEventListener('click', function () {
        emailBtn.classList.add('is-morphed');
        setTimeout(function () { emailBtn.classList.remove('is-morphed'); }, 2200);
      });
    }

    var cvBtns = document.querySelectorAll('.btn--cv');
    cvBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var span = btn.querySelector('span');
        if (!span || btn.classList.contains('is-morphed')) return;
        var orig = span.textContent;
        btn.classList.add('is-morphed');
        span.textContent = '✓ Descargando...';
        setTimeout(function () {
          btn.classList.remove('is-morphed');
          span.textContent = orig;
        }, 1800);
      });
    });
  })();

  /* ══════════════════════════════════════════════════════════════════
   * 12. STAGGER REVEAL EN CHIPS Y MÓDULOS
   * ══════════════════════════════════════════════════════════════════ */
  (function initStaggerReveal() {
    if (prefersReduced) return;
    var groups = document.querySelectorAll('.bento-tech-chips, .timeline-modules, .timeline-entry__footer');
    if (!groups.length) return;

    groups.forEach(function (group) {
      var items = group.children;
      for (var i = 0; i < items.length; i++) {
        items[i].classList.add('stagger-item');
        items[i].style.setProperty('--stagger-i', i);
      }
    });

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var items = entry.target.children;
        for (var i = 0; i < items.length; i++) {
          items[i].classList.add('stagger-item--visible');
        }
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15 });

    groups.forEach(function (g) { obs.observe(g); });
  })();

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotionSystem);
} else {
  initMotionSystem();
}

