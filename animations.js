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
   * 1. SCROLL REVEAL — fade-up con stagger por grupo
   * ══════════════════════════════════════════════════════════════════ */
  (function initScrollReveal() {
    // Marcar todos los targets con estado inicial
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
      '.hero__stars-badge',
      '.hero__title',
      '.hero__subtitle',
      '.hero__actions',
      '.hero__scroll-indicator',
      '.contact-card',
      '.hackathon-time-badge',
      '.star-stat-box',
      '.tag-badge',
    ].join(','));

    targets.forEach(function (el, i) {
      if (prefersReduced) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)';
      el.dataset.revealIndex = i;
    });

    // Hero aparece al cargar (sin necesidad de scroll)
    function revealHero() {
      var heroEls = document.querySelectorAll(
        '.hero__stars-badge, .hero__title, .hero__subtitle, .hero__actions, .hero__scroll-indicator'
      );
      heroEls.forEach(function (el, i) {
        setTimeout(function () {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 120 + i * 90);
      });
    }

    if (prefersReduced) {
      targets.forEach(function (el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    // Stagger por grupos hermanos
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // Calcular delay basado en la posición del sibling
        var parent = el.parentElement;
        var siblings = parent ? Array.from(parent.children) : [el];
        var idx = siblings.indexOf(el);
        var delay = Math.min(idx * 70, 400);
        setTimeout(function () {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, delay);
        observer.unobserve(el);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    targets.forEach(function (el) {
      observer.observe(el);
    });

    // Hero en carga
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', revealHero);
    } else {
      setTimeout(revealHero, 80);
    }
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
   * 6. CURSOR PERSONALIZADO — SVG de cursor con etiqueta "Tú" (desktop)
   * ══════════════════════════════════════════════════════════════════ */
  (function initCustomCursor() {
    if (isMobile || prefersReduced) return;

    // Crear el puntero del usuario con el mismo formato que los cursores simulados
    var cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.className = 'simulated-cursor';
    cursor.style.position = 'fixed';
    cursor.style.top = '0';
    cursor.style.left = '0';
    cursor.style.zIndex = '99999';
    cursor.style.pointerEvents = 'none';
    cursor.style.willChange = 'transform';
    cursor.style.opacity = '0';
    cursor.style.transition = 'opacity 0.2s ease, transform 0.04s linear';

    cursor.innerHTML =
      '<svg class="simulated-cursor__icon" viewBox="0 0 23 28" fill="none">' +
        '<path d="M10.7 15.5L5.7 25.5L0.7 1L21.2 13L10.7 15.5Z" fill="#f43f5e" stroke="#ffffff" stroke-width="1.5"/>' +
      '</svg>';

    document.body.appendChild(cursor);

    var isVisible = false;

    document.addEventListener('mousemove', function (e) {
      if (!isVisible) {
        cursor.style.opacity = '1';
        isVisible = true;
      }
      // Ajustar posición para que la punta del cursor coincida exactamente con las coordenadas del mouse
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });

    document.addEventListener('mouseleave', function () {
      cursor.style.opacity = '0';
      isVisible = false;
    });
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
   * 8. BENTO SPOTLIGHT — seguimiento de haz de luz ambiental en tarjetas
   * ══════════════════════════════════════════════════════════════════ */
  (function initBentoSpotlight() {
    if (prefersReduced) return;
    var bentoCards = document.querySelectorAll('[data-spotlight]');
    if (!bentoCards.length) return;

    bentoCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
      });
    });
  })();


  /* ══════════════════════════════════════════════════════════════════
   * 9. BENTO ACCENT PICKER — laboratorio de acentos interactivos
   * ══════════════════════════════════════════════════════════════════ */
  (function initBentoAccentPicker() {
    var buttons = document.querySelectorAll('.accent-btn');
    var codeVal = document.getElementById('accent-code-val');
    if (!buttons.length) return;

    var colorMap = {
      indigo: { main: '#6366f1', light: '#818cf8' },
      emerald: { main: '#34d399', light: '#6ee7b7' },
      purple: { main: '#c084fc', light: '#e9d5ff' },
      amber: { main: '#fbbf24', light: '#fde68a' }
    };

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var key = btn.dataset.accent;
        var config = colorMap[key];
        if (config) {
          document.documentElement.style.setProperty('--accent', config.main);
          document.documentElement.style.setProperty('--accent-light', config.light);
          if (codeVal) {
            codeVal.textContent = '--accent: ' + config.main;
          }
        }
      });
    });
  })();

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotionSystem);
} else {
  initMotionSystem();
}

