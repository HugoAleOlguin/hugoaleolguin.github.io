var CAROUSEL_INTERVAL = 3000;

// Animaciones de entrada al hacer scroll
function iniciarAnimacionesDeScroll() {
  var elementos = document.querySelectorAll(
    ".project-card, .about__content, .skill-item, .stat, .contact__link"
  );

  elementos.forEach(function (el) {
    el.classList.add("fade-in-up");
  });

  var observer = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.08 });

  elementos.forEach(function (el) {
    observer.observe(el);
  });
}

// Efecto de escritura en el hero
function animarConsola() {
  var consola = document.querySelector(".console__prompt");
  if (!consola) return;

  var texto = "~/portfolio $ Hola Mundo";
  var i = 0;
  consola.textContent = "";

  var intervalo = setInterval(function () {
    consola.textContent += texto[i];
    i++;
    if (i >= texto.length) clearInterval(intervalo);
  }, 65);
}

// Carrusel de imágenes en hover — lee las rutas desde data-slides
function iniciarCarruseles() {
  var wrappers = document.querySelectorAll(".project-card__image-wrapper[data-slides]");

  wrappers.forEach(function (wrapper) {
    var slides = JSON.parse(wrapper.dataset.slides);
    if (slides.length < 2) return;

    var img = wrapper.querySelector(".carousel__img");
    var puntos = wrapper.querySelectorAll(".carousel__dot");
    var actual = 0;
    var timer = null;

    function siguiente() {
      actual = (actual + 1) % slides.length;
      img.classList.add("is-fading");

      setTimeout(function () {
        img.src = slides[actual];
        puntos.forEach(function (p, i) {
          p.classList.toggle("carousel__dot--active", i === actual);
        });
        img.classList.remove("is-fading");
      }, 480);
    }

    function start() {
      if (timer) return;
      timer = setInterval(siguiente, CAROUSEL_INTERVAL);
    }

    function reset() {
      clearInterval(timer);
      timer = null;
      actual = 0;
      img.src = slides[0];
      puntos.forEach(function (p, i) {
        p.classList.toggle("carousel__dot--active", i === 0);
      });
    }

    wrapper.addEventListener("mouseenter", start);
    wrapper.addEventListener("mouseleave", reset);
  });
}


function toggleMenuMovil() {
  var boton = document.querySelector('.navbar__toggle');
  var links = document.getElementById('nav-links');
  if (!boton || !links) return;

  boton.addEventListener('click', function () {
    var abierto = links.classList.toggle('open');
    boton.setAttribute('aria-expanded', String(abierto));
  });

  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
      boton.setAttribute('aria-expanded', 'false');
    });
  });
}

// Navbar se oscurece un poco al bajar
function navbarScroll() {
  var navbar = document.getElementById("navbar");
  if (!navbar) return;

  window.addEventListener("scroll", function () {
    navbar.style.backgroundColor = window.scrollY > 40
      ? "rgba(13, 13, 13, 0.98)"
      : "rgba(13, 13, 13, 0.92)";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  iniciarAnimacionesDeScroll();
  animarConsola();
  iniciarCarruseles();
  navbarScroll();
  toggleMenuMovil();
});