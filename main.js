// Base de datos de proyectos enriquecida con galerías completas de imágenes
var PROYECTOS_DATA = {
  scribd: {
    title: "Scribd Downloader Premium",
    badges: ["100+ GitHub Stars", "Browser Extension"],
    desc: "Extensión para Chromium y Firefox que descarga documentos públicos de Scribd directamente como PDF de alta resolución, inyectando un panel flotante transparente nativo.",
    features: [
      "Inyección nativa de interfaz sobre la web oficial sin redirecciones.",
      "Descarga instantánea a formato PDF de alta resolución.",
      "100% de procesamiento cliente local sin servidores de terceros."
    ],
    tags: ["JavaScript", "Browser Extension", "Chrome API", "Firefox WebExt"],
    slides: [
      "assets/screenshots/scribd/scribd (1).webp",
      "assets/screenshots/scribd/scribd (2).webp",
      "assets/screenshots/scribd/scribd (3).webp"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/HugoAleOlguin/Scribd-Downloader-Premium"
  },
  talentia: {
    title: "Talentia — Chatbot de Entrevistas con IA",
    badges: ["Hackathon Mendoza 2026", "Creado en <24hs"],
    desc: "Plataforma conversacional desarrollada durante el Hackathon Mendoza 2026 en menos de 24hs. Utiliza IA para simular entrevistas laborales adaptativas y generar reportes con feedback al finalizar.",
    features: [
      "Simulación dinámica de entrevistas laborales en tiempo real impulsada por IA.",
      "Generación de reportes de desempeño personalizados con puntos a mejorar.",
      "Desarrollado y desplegado de punta a punta en Vercel en <24 horas."
    ],
    tags: ["Inteligencia Artificial", "JavaScript", "Vercel", "TailwindCSS"],
    slides: [
      "assets/screenshots/talentia/talentia-1.webp",
      "assets/screenshots/talentia/talentia-2.webp",
      "assets/screenshots/talentia/talentia-3.webp"
    ],
    liveUrl: "https://my-talentia.vercel.app/talentia",
    githubUrl: ""
  },
  jueguitos: {
    title: "Jueguitos Piola",
    badges: ["En vivo", "Open Source"],
    desc: "Portal web para la exploración y descarga directa de videojuegos para PC sin publicidad invasiva ni instaladores sospechosos.",
    features: [
      "Catálogo limpio organizado con enlaces directos.",
      "Diseño adaptable y veloz alojado en GitHub Pages.",
      "Filtros por género y requisitos del sistema."
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    slides: [
      "assets/screenshots/jueguitos/jueguitos (1).webp",
      "assets/screenshots/jueguitos/jueguitos (2).webp",
      "assets/screenshots/jueguitos/jueguitos (3).webp",
      "assets/screenshots/jueguitos/jueguitos (4).webp",
      "assets/screenshots/jueguitos/jueguitos (5).webp"
    ],
    liveUrl: "https://hugoaleolguin.github.io/jueguitos-piola/",
    githubUrl: "https://github.com/HugoAleOlguin/jueguitos-piola"
  },
  mano: {
    title: "Mano Musical (Computer Vision)",
    badges: ["Python", "OpenCV"],
    desc: "Sintetizador interactivo que mapea los puntos clave de la mano capturados por la webcam para producir tonos de audio dinámicos en tiempo real.",
    features: [
      "Reconocimiento de mano mediante MediaPipe con baja latencia.",
      "Modulación de frecuencia sonora basada en la distancia de los dedos.",
      "Interfaz gráfica de depuración en vivo con OpenCV."
    ],
    tags: ["Python", "MediaPipe", "OpenCV", "PyAudio"],
    slides: [
      "assets/screenshots/mano/mano (1).webp",
      "assets/screenshots/mano/mano (2).webp"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/HugoAleOlguin/Mano_Musical"
  },
  ruleta: {
    title: "Ruleta Rusa LAN (Networking)",
    badges: ["Python", "Sockets"],
    desc: "Juego multijugador para redes locales que implementa comunicación por sockets cliente-servidor para partidas síncronas entre múltiples dispositivos.",
    features: [
      "Arquitectura cliente-servidor multihilo en Python puro.",
      "Detección automática de salas en la red local (LAN).",
      "Protocolo de mensajes liviano en formato JSON."
    ],
    tags: ["Python", "Sockets", "Threading", "JSON"],
    slides: [
      "assets/screenshots/ruleta/ruleta (1).webp",
      "assets/screenshots/ruleta/ruleta (2).webp",
      "assets/screenshots/ruleta/ruleta (3).webp"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/HugoAleOlguin/Ruleta-Rusa-Lan"
  },
  despensa: {
    title: "Despensa Simple (El Tato)",
    badges: ["CRUD App", "Vanilla JS"],
    desc: "Sistema de gestión de inventario y punto de venta simplificado diseñado para pequeños comercios y despensas de barrio.",
    features: [
      "Control de stock con alertas de productos en nivel crítico.",
      "Cálculo de ganancias y resumen de ventas diarias.",
      "Persistencia de datos en almacenamiento local (LocalStorage)."
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    slides: [
      "assets/screenshots/despensa/despensa (1).webp",
      "assets/screenshots/despensa/despensa (2).webp",
      "assets/screenshots/despensa/despensa (3).webp",
      "assets/screenshots/despensa/despensa (4).webp"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/HugoAleOlguin/Despensa-Simple-El-Tato"
  },
  ortopedia: {
    title: "Sitio Ortopedia Backup",
    badges: ["En vivo", "Web Corporativa"],
    desc: "Sitio web comercial para la presentación de productos ortopédicos, atención al cliente y ubicación de sucursal.",
    features: [
      "Diseño limpio enfocado en la usabilidad de adultos mayores.",
      "Catálogo interactivo con imágenes y especificaciones técnicas.",
      "Integración de mapa dinámico y botón de contacto por WhatsApp."
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Google Maps API"],
    slides: [
      "assets/screenshots/ortopedia/ortopedia (1).webp",
      "assets/screenshots/ortopedia/ortopedia (2).webp",
      "assets/screenshots/ortopedia/ortopedia (3).webp",
      "assets/screenshots/ortopedia/ortopedia (4).webp"
    ],
    liveUrl: "https://hugoaleolguin.github.io/Sitio-Otopedia-Backup/",
    githubUrl: "https://github.com/HugoAleOlguin/Sitio-Otopedia-Backup"
  },
  clashbot: {
    title: "Py Clash Bot (Español)",
    badges: ["Python", "Open Source"],
    desc: "Fork open-source de py-clash-bot enfocado en traducir la interfaz gráfica y personalizar las rutinas de automatización para la comunidad hispanohablante.",
    features: [
      "Traducción integral al español de la interfaz gráfica y notificaciones.",
      "Ajustes de resolución optimizados para emuladores Android.",
      "Documentación paso a paso en español para instalación."
    ],
    tags: ["Python", "PyAutoGUI", "OpenSource", "Localization"],
    slides: [
      "assets/screenshots/pyclash/pyclash (1).webp",
      "assets/screenshots/pyclash/pyclash (2).webp",
      "assets/screenshots/pyclash/pyclash (3).webp"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/HugoAleOlguin/py-clash-bot-spanish"
  },
  trailerpelis: {
    title: "TrailerPelis",
    badges: ["En vivo", "Streaming UI"],
    desc: "Portal web de entretenimiento diseñado para la búsqueda y reproducción instantánea de tráileres de cine.",
    features: [
      "Interfaz oscura inspirada en servicios de streaming líderes.",
      "Buscador dinámico de películas con autocompletado.",
      "Reproductor de video de alta definición integrado."
    ],
    tags: ["HTML5", "CSS3", "JavaScript"],
    slides: [
      "assets/screenshots/trailerpelis/trailerpelis-1.webp",
      "assets/screenshots/trailerpelis/trailerpelis-2.webp",
      "assets/screenshots/trailerpelis/trailerpelis-3.webp"
    ],
    liveUrl: "https://luszczak.github.io/TrailerPelis/",
    githubUrl: "https://github.com/HugoAleOlguin/TrailerPelis"
  }
};

// ===== 1. Scroll Reveal & Floating Dock State =====
function iniciarScrollRevealYDock() {
  var elementosReveal = document.querySelectorAll('.reveal');
  var dockLinks = document.querySelectorAll('.dock__link');
  var secciones = document.querySelectorAll('section[id]');
  var ticking = false;

  function manejarScroll() {
    var triggerBottom = window.innerHeight * 0.88;
    elementosReveal.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('visible');
      }
    });

    var scrollPos = window.scrollY + 160;

    secciones.forEach(function (seccion) {
      var top = seccion.offsetTop;
      var height = seccion.offsetHeight;
      var id = seccion.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        dockLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === id) {
            link.classList.add('active');
          }
        });
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(manejarScroll);
      ticking = true;
    }
  }, { passive: true });

  manejarScroll();
}

// ===== 2. Gestión de Contadores Numéricos =====
// Nota: La animación con curve easing rAF suave se delega exclusivamente a animations.js
// para evitar condiciones de carrera entre runtimes.

// ===== 3. Navegación Manual por Flechas (‹ y ›) en Tarjetas =====
function iniciarNavegacionTarjetas() {
  var previews = document.querySelectorAll('.project-card__preview[data-slides]');

  previews.forEach(function (preview) {
    var rawSlides = preview.getAttribute('data-slides');
    if (!rawSlides) return;

    var slides;
    try {
      slides = JSON.parse(rawSlides);
    } catch (e) {
      return;
    }

    if (!Array.isArray(slides) || slides.length < 2) return;

    var img = preview.querySelector('.carousel__img');
    var prevBtn = preview.querySelector('.card-nav-btn--prev');
    var nextBtn = preview.querySelector('.card-nav-btn--next');
    var dots = preview.querySelectorAll('.carousel__dot');
    if (!img) return;

    var currentIndex = 0;

    function cambiarFoto(index) {
      currentIndex = (index + slides.length) % slides.length;
      img.style.opacity = '0.3';
      setTimeout(function () {
        img.src = slides[currentIndex];
        img.style.opacity = '1';

        if (dots.length > 0) {
          dots.forEach(function (dot, i) {
            dot.classList.toggle('carousel__dot--active', i === currentIndex);
          });
        }
      }, 100);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        cambiarFoto(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        cambiarFoto(currentIndex + 1);
      });
    }
  });
}

// Mapeo temático dinámico para resplandor y metadatos del modal Studio Stage
var MODAL_THEMES = {
  scribd: {
    accent: '#f59e0b',
    accentLight: '#fbbf24',
    glow: 'rgba(245, 158, 11, 0.35)',
    slug: 'scribd-premium://chrome-ext'
  },
  talentia: {
    accent: '#a855f7',
    accentLight: '#c084fc',
    glow: 'rgba(168, 85, 247, 0.35)',
    slug: 'talentia-ai://hackathon-mendoza'
  },
  jueguitos: {
    accent: '#06b6d4',
    accentLight: '#22d3ee',
    glow: 'rgba(6, 182, 212, 0.35)',
    slug: 'jueguitos-piola://catalog-browser'
  },
  mano: {
    accent: '#10b981',
    accentLight: '#34d399',
    glow: 'rgba(16, 185, 129, 0.35)',
    slug: 'cv-hand-synth://realtime-audio'
  },
  ruleta: {
    accent: '#3b82f6',
    accentLight: '#60a5fa',
    glow: 'rgba(59, 130, 246, 0.35)',
    slug: 'lan-network://socket-multiplayer'
  },
  despensa: {
    accent: '#10b981',
    accentLight: '#34d399',
    glow: 'rgba(16, 185, 129, 0.35)',
    slug: 'el-tato://pos-retail-system'
  },
  ortopedia: {
    accent: '#38bdf8',
    accentLight: '#7dd3fc',
    glow: 'rgba(56, 189, 248, 0.35)',
    slug: 'ortopedia-backup://corporate-web'
  },
  clashbot: {
    accent: '#f43f5e',
    accentLight: '#fb7185',
    glow: 'rgba(244, 63, 94, 0.35)',
    slug: 'py-clash-bot://spanish-edition'
  },
  trailerpelis: {
    accent: '#f43f5e',
    accentLight: '#fb7185',
    glow: 'rgba(244, 63, 94, 0.35)',
    slug: 'trailer-pelis://stream-cinema'
  }
};

// ===== 4. Sistema de Modal Immersive Studio Stage (Anti-Flicker & Zero Blank-Flash) =====
function iniciarModalProyectos() {
  var modalOverlay = document.getElementById('project-modal');
  var closeBtn = document.getElementById('modal-close-btn');
  var modalImg = document.getElementById('modal-img');
  var prevBtn = document.getElementById('modal-prev-btn');
  var nextBtn = document.getElementById('modal-next-btn');
  var imgCounter = document.getElementById('modal-img-counter');
  var modalDots = document.getElementById('modal-dots');
  var modalTitle = document.getElementById('modal-title');
  var modalBadges = document.getElementById('modal-badges');
  var modalDesc = document.getElementById('modal-desc');
  var modalFeatures = document.getElementById('modal-features');
  var modalTags = document.getElementById('modal-tags');
  var modalBtnLive = document.getElementById('modal-btn-live');
  var modalBtnGithub = document.getElementById('modal-btn-github');
  var modalPrivateNote = document.getElementById('modal-private-note');
  var modalWindowSlug = document.getElementById('modal-window-slug');

  if (!modalOverlay) return;

  var currentSlides = [];
  var currentSlideIndex = 0;
  var imageCache = {};

  // Precarga asíncrona de todas las capturas del proyecto para evitar parpadeos
  function precargarSlides(slides) {
    if (!slides || !slides.length) return;
    slides.forEach(function (src) {
      if (!imageCache[src]) {
        var img = new Image();
        img.src = src;
        imageCache[src] = img;
      }
    });
  }

  var lastFocusedElement = null;

  // Renderizado suave y fluido de la imagen activa
  function renderizarFoto(index) {
    if (!currentSlides || currentSlides.length === 0) return;
    currentSlideIndex = (index + currentSlides.length) % currentSlides.length;
    var targetSrc = currentSlides[currentSlideIndex];

    var imgObj = imageCache[targetSrc] || new Image();
    imgObj.src = targetSrc;
    imageCache[targetSrc] = imgObj;

    function aplicarCambio() {
      modalImg.style.opacity = '0';
      setTimeout(function () {
        modalImg.src = targetSrc;
        var currentProjectData = PROYECTOS_DATA[modalOverlay.dataset.currentProjectId];
        var projectTitle = currentProjectData ? currentProjectData.title : 'Proyecto';
        modalImg.alt = projectTitle + ' - Captura ' + (currentSlideIndex + 1) + ' de ' + currentSlides.length;
        modalImg.style.opacity = '1';
      }, 60);
    }

    imgObj.onerror = function () {
      modalImg.style.opacity = '1';
    };

    if (imgObj.complete) {
      aplicarCambio();
    } else {
      imgObj.onload = aplicarCambio;
    }

    if (imgCounter) {
      imgCounter.textContent = (currentSlideIndex + 1) + ' / ' + currentSlides.length;
    }

    if (modalDots) {
      modalDots.innerHTML = '';
      currentSlides.forEach(function (_, i) {
        var dot = document.createElement('span');
        dot.className = 'carousel__dot' + (i === currentSlideIndex ? ' carousel__dot--active' : '');
        dot.setAttribute('role', 'button');
        dot.setAttribute('tabindex', '0');
        dot.setAttribute('aria-label', 'Ver imagen ' + (i + 1));
        dot.addEventListener('click', function () { renderizarFoto(i); });
        dot.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            renderizarFoto(i);
          }
        });
        modalDots.appendChild(dot);
      });
    }
  }

  function abrirModal(id) {
    var data = PROYECTOS_DATA[id];
    if (!data) return;

    lastFocusedElement = document.activeElement;
    modalOverlay.dataset.currentProjectId = id;

    currentSlides = data.slides || [data.image];
    currentSlideIndex = 0;

    // Precargar inmediatamente todas las diapositivas
    precargarSlides(currentSlides);

    // Configurar tema de color reactivo y slug de ventana del proyecto
    var theme = MODAL_THEMES[id] || {
      accent: '#6366f1',
      accentLight: '#818cf8',
      glow: 'rgba(99, 102, 241, 0.35)',
      slug: (id || 'app') + '://preview-stage'
    };

    modalOverlay.style.setProperty('--modal-accent', theme.accent);
    modalOverlay.style.setProperty('--modal-accent-light', theme.accentLight);
    modalOverlay.style.setProperty('--modal-glow', theme.glow);

    if (modalWindowSlug) {
      modalWindowSlug.textContent = theme.slug;
    }

    modalImg.src = currentSlides[0];
    modalImg.style.opacity = '1';
    renderizarFoto(0);

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Badges con micro-diseño
    modalBadges.innerHTML = '';
    data.badges.forEach(function (badge) {
      var span = document.createElement('span');
      span.className = 'tag-badge';
      if (badge.includes('100+')) span.className += ' project-card__tag-pill--stars';
      if (badge.includes('Hackathon')) span.className += ' project-card__tag-pill--hackathon';
      if (badge.includes('Prime') || badge.includes('Flagship')) span.className += ' project-card__tag-pill--prime';
      span.textContent = badge;
      modalBadges.appendChild(span);
    });

    // Highlights & Funcionalidades (DOM seguro contra XSS)
    modalFeatures.innerHTML = '';
    data.features.forEach(function (feat) {
      var div = document.createElement('div');
      div.className = 'modal-feature-item';
      var bullet = document.createElement('span');
      bullet.className = 'modal-feature-bullet';
      bullet.textContent = '✦';
      var text = document.createElement('span');
      text.textContent = feat;
      div.appendChild(bullet);
      div.appendChild(text);
      modalFeatures.appendChild(div);
    });

    // Tags de Stack
    modalTags.innerHTML = '';
    data.tags.forEach(function (tag) {
      var span = document.createElement('span');
      span.className = 'tag-badge';
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    // Botones CTA
    if (data.liveUrl) {
      modalBtnLive.style.display = 'inline-flex';
      modalBtnLive.href = data.liveUrl;
    } else {
      modalBtnLive.style.display = 'none';
    }

    if (data.githubUrl) {
      modalBtnGithub.style.display = 'inline-flex';
      modalBtnGithub.href = data.githubUrl;
    } else {
      modalBtnGithub.style.display = 'none';
    }

    if (modalPrivateNote) {
      if (!data.liveUrl && !data.githubUrl) {
        modalPrivateNote.style.display = 'inline-flex';
      } else {
        modalPrivateNote.style.display = 'none';
      }
    }

    modalOverlay.classList.add('active');
    bloquearScrollFondo(true);

    // Mover el foco al botón de cerrar dentro del modal (Accesibilidad)
    setTimeout(function () {
      if (closeBtn) closeBtn.focus();
    }, 50);
  }

  function cerrarModal() {
    modalOverlay.classList.remove('active');
    bloquearScrollFondo(false);
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  function bloquearScrollFondo(bloquear) {
    if (bloquear) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }

  // Navegación de galería del modal
  if (prevBtn) {
    prevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      renderizarFoto(currentSlideIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      renderizarFoto(currentSlideIndex + 1);
    });
  }

  // Clic en tarjetas
  var tarjetas = document.querySelectorAll('.project-card[data-project-id]');
  tarjetas.forEach(function (tarjeta) {
    tarjeta.addEventListener('click', function (e) {
      if (e.target.closest('a') || e.target.closest('.card-nav-btn')) return;
      var id = tarjeta.getAttribute('data-project-id');
      if (id) abrirModal(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', cerrarModal);
  if (modalPrivateNote) modalPrivateNote.addEventListener('click', cerrarModal);

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) cerrarModal();
  });

  document.addEventListener('keydown', function (e) {
    if (!modalOverlay.classList.contains('active')) return;
    if (e.key === 'Escape') {
      cerrarModal();
      return;
    }
    if (e.key === 'ArrowLeft') {
      renderizarFoto(currentSlideIndex - 1);
      return;
    }
    if (e.key === 'ArrowRight') {
      renderizarFoto(currentSlideIndex + 1);
      return;
    }
    if (e.key === 'Tab') {
      var focusables = modalOverlay.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])');
      var visibleFocusables = Array.prototype.filter.call(focusables, function (el) {
        return el.offsetParent !== null;
      });
      if (visibleFocusables.length === 0) return;
      var first = visibleFocusables[0];
      var last = visibleFocusables[visibleFocusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });
}

// ===== Barra de Progreso de Scroll Superior =====
function iniciarBarraProgresoScroll() {
  var progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  function actualizarProgreso() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    var docHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
    var porcentaje = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(100, Math.max(0, porcentaje)) + '%';
  }

  window.addEventListener('scroll', actualizarProgreso, { passive: true });
  window.addEventListener('resize', actualizarProgreso, { passive: true });
  actualizarProgreso();
}

// ===== Efecto Neón Interactivo que Sigue al Mouse en Badges y Tarjetas =====
function iniciarEfectoNeonBadges() {
  var elementos = document.querySelectorAll('.skill-pill, .metric-card, .hero__stars-badge, .contact-button');
  elementos.forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var rect = el.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', x.toFixed(1) + 'px');
      el.style.setProperty('--mouse-y', y.toFixed(1) + 'px');
    });
  });
}

// ===== Mostrar Más Proyectos en Mobile =====
function iniciarVerMasProyectos() {
  var projectCards = document.querySelectorAll('.project-card');
  var showMoreBtn = document.getElementById('btn-show-more-projects');
  var isExpanded = false;

  function applyVisibility() {
    var isMobile = window.innerWidth < 768;
    var visibleCount = 0;

    projectCards.forEach(function (card) {
      card.style.display = '';
      visibleCount++;

      // En mobile, colapsar a partir del 5to proyecto si no está expandido
      if (isMobile && !isExpanded && visibleCount > 4) {
        card.classList.add('project-card--hidden-mobile');
      } else {
        card.classList.remove('project-card--hidden-mobile');
      }
    });

    if (showMoreBtn) {
      if (isMobile && visibleCount > 4) {
        showMoreBtn.style.display = 'inline-flex';
        var textEl = showMoreBtn.querySelector('.btn-show-more__text');
        var iconEl = showMoreBtn.querySelector('.btn-show-more__icon');
        if (isExpanded) {
          if (textEl) textEl.textContent = 'Mostrar menos proyectos';
          if (iconEl) iconEl.style.transform = 'rotate(180deg)';
        } else {
          if (textEl) textEl.textContent = 'Ver todos los proyectos (+5)';
          if (iconEl) iconEl.style.transform = 'rotate(0deg)';
        }
      } else {
        showMoreBtn.style.display = 'none';
      }
    }
  }

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
      isExpanded = !isExpanded;
      showMoreBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      applyVisibility();
      if (!isExpanded) {
        var sec = document.getElementById('proyectos');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  window.addEventListener('resize', function () {
    applyVisibility();
  }, { passive: true });

  applyVisibility();
}

// ===== Botón de Contacto por Email con Copiado Seguro =====
function iniciarBotonEmail() {
  var emailBtn = document.getElementById('link-email');
  var feedback = document.getElementById('email-feedback');
  if (!emailBtn) return;

  emailBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var user = emailBtn.getAttribute('data-user') || 'hugod.ies9012';
    var domain = emailBtn.getAttribute('data-domain') || 'gmail.com';
    var email = user + '@' + domain;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(function () {
        if (feedback) {
          feedback.style.opacity = '1';
          setTimeout(function () { feedback.style.opacity = '0'; }, 2200);
        }
      }).catch(function () {
        window.location.href = 'mailto:' + email;
      });
    } else {
      window.location.href = 'mailto:' + email;
    }
  });
}

// ===== Inicialización General =====
document.addEventListener('DOMContentLoaded', function () {
  iniciarBarraProgresoScroll();
  iniciarEfectoNeonBadges();
  iniciarScrollRevealYDock();
  iniciarNavegacionTarjetas();
  iniciarModalProyectos();
  iniciarVerMasProyectos();
  iniciarBotonEmail();
});