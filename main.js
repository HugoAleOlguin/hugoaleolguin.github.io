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

// ===== 2. Animación de Contadores Numéricos =====
function iniciarContadores() {
  var contadores = document.querySelectorAll('[data-target]');
  var observados = new Set();

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !observados.has(entry.target)) {
          observados.add(entry.target);
          animarContador(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  contadores.forEach(function (contador) {
    observer.observe(contador);
  });
}

function animarContador(el) {
  var objetivo = parseInt(el.getAttribute('data-target'), 10);
  if (isNaN(objetivo)) return;

  var duracion = 1200;
  var inicio = 0;
  var pasoTiempo = 20;
  var incremento = objetivo / (duracion / pasoTiempo);

  var timer = setInterval(function () {
    inicio += incremento;
    if (inicio >= objetivo) {
      el.textContent = objetivo;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(inicio);
    }
  }, pasoTiempo);
}

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

// ===== 4. Sistema de Modal Motion Black =====
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

  if (!modalOverlay) return;

  var currentSlides = [];
  var currentSlideIndex = 0;

  function renderizarFoto(index) {
    if (!currentSlides || currentSlides.length === 0) return;
    currentSlideIndex = (index + currentSlides.length) % currentSlides.length;

    modalImg.style.opacity = '0.3';
    setTimeout(function () {
      modalImg.src = currentSlides[currentSlideIndex];
      modalImg.style.opacity = '1';
    }, 100);

    if (imgCounter) {
      imgCounter.textContent = (currentSlideIndex + 1) + ' / ' + currentSlides.length;
    }

    if (modalDots) {
      modalDots.innerHTML = '';
      currentSlides.forEach(function (_, i) {
        var dot = document.createElement('span');
        dot.className = 'carousel__dot' + (i === currentSlideIndex ? ' carousel__dot--active' : '');
        dot.addEventListener('click', function () { renderizarFoto(i); });
        modalDots.appendChild(dot);
      });
    }
  }

  function abrirModal(id) {
    var data = PROYECTOS_DATA[id];
    if (!data) return;

    currentSlides = data.slides || [data.image];
    currentSlideIndex = 0;

    renderizarFoto(0);

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Badges libres de Emojis
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

    // Features libres de Emojis (usando guion sobrio)
    modalFeatures.innerHTML = '';
    data.features.forEach(function (feat) {
      var div = document.createElement('div');
      div.className = 'modal-feature-item';
      div.innerHTML = '<span class="modal-feature-bullet">-</span><span>' + feat + '</span>';
      modalFeatures.appendChild(div);
    });

    // Tags
    modalTags.innerHTML = '';
    data.tags.forEach(function (tag) {
      var span = document.createElement('span');
      span.className = 'tag-badge';
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    // Buttons y Avisos
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
    document.body.style.overflow = 'hidden';
  }

  function cerrarModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
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
    if (e.key === 'Escape') cerrarModal();
    if (e.key === 'ArrowLeft') renderizarFoto(currentSlideIndex - 1);
    if (e.key === 'ArrowRight') renderizarFoto(currentSlideIndex + 1);
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

// ===== Filtros de Proyectos y Mostrar Más en Mobile =====
function iniciarFiltrosYVerMasProyectos() {
  var filterButtons = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');
  var showMoreBtn = document.getElementById('btn-show-more-projects');
  var isExpanded = false;
  var currentFilter = 'all';

  function applyVisibility() {
    var isMobile = window.innerWidth < 768;
    var visibleCount = 0;

    projectCards.forEach(function (card) {
      var categories = (card.getAttribute('data-category') || '').split(' ');
      var matchesFilter = currentFilter === 'all' || categories.indexOf(currentFilter) !== -1;

      if (!matchesFilter) {
        card.style.display = 'none';
        card.classList.remove('project-card--hidden-mobile');
      } else {
        card.style.display = '';
        visibleCount++;

        // En mobile con filtro "all", colapsar a partir del 5to proyecto si no está expandido
        if (isMobile && currentFilter === 'all' && !isExpanded && visibleCount > 4) {
          card.classList.add('project-card--hidden-mobile');
        } else {
          card.classList.remove('project-card--hidden-mobile');
        }
      }
    });

    if (showMoreBtn) {
      if (isMobile && currentFilter === 'all' && visibleCount > 4) {
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

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentFilter = btn.getAttribute('data-filter');
      isExpanded = false;
      applyVisibility();
    });
  });

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
      isExpanded = !isExpanded;
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

// ===== 5. Contacto Prime: Copiar Email y Parallax Atmosférico =====
function iniciarContactoPrime() {
  var copyBtn = document.getElementById('btn-copy-email');
  var badge = document.getElementById('email-badge-status');
  var email = 'hugoolguin777@gmail.com';

  if (copyBtn && badge) {
    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(mostrarCopiado);
      } else {
        var textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          mostrarCopiado();
        } catch (err) {
          window.location.href = 'mailto:' + email;
        }
        document.body.removeChild(textArea);
      }
    });

    function mostrarCopiado() {
      badge.textContent = '¡Copiado! ✓';
      badge.classList.add('contact-card-btn__badge--copied');
      setTimeout(function () {
        badge.textContent = 'Copiar';
        badge.classList.remove('contact-card-btn__badge--copied');
      }, 2400);
    }
  }

  // Parallax suave con el mouse sobre el avatar en desktop
  var avatarWrapper = document.querySelector('.contact-avatar-wrapper');
  var contactSection = document.getElementById('contacto');
  if (avatarWrapper && contactSection && window.innerWidth >= 992) {
    contactSection.addEventListener('mousemove', function (e) {
      var rect = contactSection.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      avatarWrapper.style.transform = 'translate(' + (x * 16).toFixed(1) + 'px, ' + (y * 12).toFixed(1) + 'px)';
    });

    contactSection.addEventListener('mouseleave', function () {
      avatarWrapper.style.transform = 'translate(0px, 0px)';
    });
  }
}

// ===== Inicialización General =====
document.addEventListener('DOMContentLoaded', function () {
  iniciarBarraProgresoScroll();
  iniciarEfectoNeonBadges();
  iniciarScrollRevealYDock();
  iniciarContadores();
  iniciarNavegacionTarjetas();
  iniciarModalProyectos();
  iniciarFiltrosYVerMasProyectos();
  iniciarContactoPrime();
});