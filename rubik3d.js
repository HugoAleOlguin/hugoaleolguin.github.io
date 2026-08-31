/**
 * rubik3d.js — Motor 3D de Cubo Rubik Profesional para Hugo Olguin Portfolio
 * Desarrollado con Three.js · Estética Premium Speedcube Matte
 *
 * Correcciones:
 *  - Marco refinado (margen de 8px y bordes redondeados elegantes).
 *  - Matriz 3D con Snap Ortonormal indestructible (sin cambio ni intercambio de colores).
 *  - Caras internas en plástico negro y pegatinas únicamente en el exterior.
 *  - Mezcla inicial instantánea en 0ms al recargar (elimina parpadeo/giros veloces).
 *  - Giros autónomos continuos suavizados cada ~3.2s.
 */

function initRubik3D() {
  'use strict';

  var container = document.getElementById('rubik-canvas-container');
  if (!container) return;

  if (typeof THREE === 'undefined') {
    console.warn('Three.js no está disponible.');
    return;
  }

  container.innerHTML = '';

  /* ─── 1. Dimensiones y Escena Three.js ─── */
  var width = container.clientWidth || 580;
  var height = container.clientHeight || 560;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
  camera.position.set(4.8, 3.9, 5.5);
  camera.lookAt(0, 0, 0);

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  /* ─── 2. Iluminación Sobria ─── */
  var ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
  scene.add(ambientLight);

  var dirLight1 = new THREE.DirectionalLight(0xffffff, 0.75);
  dirLight1.position.set(10, 14, 12);
  scene.add(dirLight1);

  var dirLight2 = new THREE.DirectionalLight(0x818cf8, 0.35);
  dirLight2.position.set(-10, -10, -10);
  scene.add(dirLight2);

  /* ─── 3. Texturas de Pegatinas Finitas y Elegantes ─── */
  function createMatteStickerTexture(colorHex) {
    var canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    var ctx = canvas.getContext('2d');

    // Fondo plástico negro mate del cubito
    ctx.fillStyle = '#121418';
    ctx.fillRect(0, 0, 256, 256);

    // Sticker plano suavemente redondeado (margen fino de 8px)
    ctx.fillStyle = colorHex;
    var margin = 8;
    var radius = 24;
    var w = 256 - margin * 2;
    var h = 256 - margin * 2;

    ctx.beginPath();
    ctx.roundRect(margin, margin, w, h, radius);
    ctx.fill();

    // Borde sutil de definición
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.stroke();

    return new THREE.CanvasTexture(canvas);
  }

  // Material plástico negro para caras internas del cubito
  var blackInnerMaterial = new THREE.MeshStandardMaterial({
    color: 0x121418,
    roughness: 0.55,
    metalness: 0.1
  });

  // Materiales de colores para stickers de las 6 caras exteriores
  var redMat = new THREE.MeshStandardMaterial({ map: createMatteStickerTexture('#ef4444'), roughness: 0.35, metalness: 0.05 });
  var orangeMat = new THREE.MeshStandardMaterial({ map: createMatteStickerTexture('#f97316'), roughness: 0.35, metalness: 0.05 });
  var whiteMat = new THREE.MeshStandardMaterial({ map: createMatteStickerTexture('#f8fafc'), roughness: 0.35, metalness: 0.05 });
  var yellowMat = new THREE.MeshStandardMaterial({ map: createMatteStickerTexture('#eab308'), roughness: 0.35, metalness: 0.05 });
  var blueMat = new THREE.MeshStandardMaterial({ map: createMatteStickerTexture('#3b82f6'), roughness: 0.35, metalness: 0.05 });
  var greenMat = new THREE.MeshStandardMaterial({ map: createMatteStickerTexture('#10b981'), roughness: 0.35, metalness: 0.05 });

  /* ─── 4. Geometría y Construcción de los 27 Cubies ─── */
  var rubikGroup = new THREE.Group();
  scene.add(rubikGroup);

  var CUBIE_SIZE = 0.96;
  var SPACING = 0.04;
  var OFFSET = CUBIE_SIZE + SPACING; // 1.0

  var baseGeometry = new THREE.BoxGeometry(CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE);
  var cubies = [];

  for (var x = -1; x <= 1; x++) {
    for (var y = -1; y <= 1; y++) {
      for (var z = -1; z <= 1; z++) {
        var cubieMaterials = [
          x === 1 ? redMat : blackInnerMaterial,     // Right (+X)
          x === -1 ? orangeMat : blackInnerMaterial, // Left (-X)
          y === 1 ? whiteMat : blackInnerMaterial,  // Top (+Y)
          y === -1 ? yellowMat : blackInnerMaterial,// Bottom (-Y)
          z === 1 ? blueMat : blackInnerMaterial,   // Front (+Z)
          z === -1 ? greenMat : blackInnerMaterial  // Back (-Z)
        ];

        var cubie = new THREE.Mesh(baseGeometry, cubieMaterials);
        cubie.position.set(x * OFFSET, y * OFFSET, z * OFFSET);
        rubikGroup.add(cubie);
        cubies.push(cubie);
      }
    }
  }

  /* ─── 5. Control de Órbita por Mouse / Touch ─── */
  var targetRotX = 0.35;
  var targetRotY = -0.55;
  var currentRotX = targetRotX;
  var currentRotY = targetRotY;

  var isDragging = false;
  var prevMouse = { x: 0, y: 0 };
  var idleTimer = 0;

  function onMouseDown(e) {
    isDragging = true;
    prevMouse = { x: e.clientX, y: e.clientY };
  }

  function onMouseMove(e) {
    if (!isDragging) return;
    var deltaX = e.clientX - prevMouse.x;
    var deltaY = e.clientY - prevMouse.y;

    targetRotY += deltaX * 0.007;
    targetRotX += deltaY * 0.007;
    targetRotX = Math.max(-1.2, Math.min(1.2, targetRotX));

    prevMouse = { x: e.clientX, y: e.clientY };
    idleTimer = 0;
  }

  function onMouseUp() {
    isDragging = false;
  }

  renderer.domElement.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  renderer.domElement.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) {
      isDragging = true;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, { passive: true });

  window.addEventListener('touchmove', function (e) {
    if (!isDragging || e.touches.length !== 1) return;
    var deltaX = e.touches[0].clientX - prevMouse.x;
    var deltaY = e.touches[0].clientY - prevMouse.y;

    targetRotY += deltaX * 0.007;
    targetRotX += deltaY * 0.007;
    targetRotX = Math.max(-1.2, Math.min(1.2, targetRotX));

    prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    idleTimer = 0;
  }, { passive: true });

  window.addEventListener('touchend', function () { isDragging = false; });

  /* ─── 6. Snap Ortonormal 3D Indestructible y Rotación de Capas ─── */
  function snapCubieOrientation(cubie) {
    cubie.updateMatrix();
    var m = cubie.matrix.elements;

    var vx = new THREE.Vector3(m[0], m[1], m[2]);
    var vy = new THREE.Vector3(m[4], m[5], m[6]);

    function snapVector(v) {
      var ax = Math.abs(v.x);
      var ay = Math.abs(v.y);
      var az = Math.abs(v.z);

      if (ax >= ay && ax >= az) {
        v.set(Math.sign(v.x) || 1, 0, 0);
      } else if (ay >= ax && ay >= az) {
        v.set(0, Math.sign(v.y) || 1, 0);
      } else {
        v.set(0, 0, Math.sign(v.z) || 1);
      }
    }

    snapVector(vx);
    snapVector(vy);

    var vz = new THREE.Vector3().crossVectors(vx, vy).normalize();

    var rotMatrix = new THREE.Matrix4().makeBasis(vx, vy, vz);
    cubie.quaternion.setFromRotationMatrix(rotMatrix);

    cubie.position.x = Math.round(cubie.position.x / OFFSET) * OFFSET;
    cubie.position.y = Math.round(cubie.position.y / OFFSET) * OFFSET;
    cubie.position.z = Math.round(cubie.position.z / OFFSET) * OFFSET;

    cubie.updateMatrix();
  }

  var isRotatingSlice = false;

  function rotateSlice(axis, sliceIndex, angleDegree, duration, onComplete) {
    if (isRotatingSlice) return;
    isRotatingSlice = true;

    var rad = (angleDegree * Math.PI) / 180;
    var pivot = new THREE.Group();
    rubikGroup.add(pivot);

    var selectedCubies = [];
    var targetCoord = sliceIndex * OFFSET;

    cubies.forEach(function (cubie) {
      var pos = cubie.position;
      var coord = axis === 'x' ? pos.x : (axis === 'y' ? pos.y : pos.z);
      if (Math.abs(coord - targetCoord) < 0.25) {
        selectedCubies.push(cubie);
      }
    });

    selectedCubies.forEach(function (cubie) {
      pivot.add(cubie);
    });

    var startTime = performance.now();

    function animateSlice(now) {
      var elapsed = now - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      pivot.rotation[axis] = rad * ease;

      if (progress < 1) {
        requestAnimationFrame(animateSlice);
      } else {
        pivot.rotation[axis] = rad;
        pivot.updateMatrixWorld(true);

        selectedCubies.forEach(function (cubie) {
          cubie.applyMatrix4(pivot.matrix);
          rubikGroup.add(cubie);
          snapCubieOrientation(cubie);
        });

        rubikGroup.remove(pivot);
        isRotatingSlice = false;
        if (onComplete) onComplete();
      }
    }

    requestAnimationFrame(animateSlice);
  }

  /* ─── 7. Mezcla Inicial Instantánea al Cargar (Sin Feo Parpadeo Rápido) ─── */
  function instantScramble(movesCount) {
    var axes = ['x', 'y', 'z'];
    var slices = [-1, 0, 1];
    var angles = [90, -90];

    for (var i = 0; i < movesCount; i++) {
      var axis = axes[Math.floor(Math.random() * axes.length)];
      var sliceIndex = slices[Math.floor(Math.random() * slices.length)];
      var angleDegree = angles[Math.floor(Math.random() * angles.length)];
      var rad = (angleDegree * Math.PI) / 180;

      var pivot = new THREE.Group();
      rubikGroup.add(pivot);

      var selectedCubies = [];
      var targetCoord = sliceIndex * OFFSET;

      cubies.forEach(function (cubie) {
        var pos = cubie.position;
        var coord = axis === 'x' ? pos.x : (axis === 'y' ? pos.y : pos.z);
        if (Math.abs(coord - targetCoord) < 0.25) {
          selectedCubies.push(cubie);
        }
      });

      selectedCubies.forEach(function (cubie) {
        pivot.add(cubie);
      });

      pivot.rotation[axis] = rad;
      pivot.updateMatrixWorld(true);

      selectedCubies.forEach(function (cubie) {
        cubie.applyMatrix4(pivot.matrix);
        rubikGroup.add(cubie);
        snapCubieOrientation(cubie);
      });

      rubikGroup.remove(pivot);
    }
  }

  // Realizar mezcla inicial de 25 movimientos en 0ms para cargar perfecto
  instantScramble(25);

  // Giro autónomo periódico suave
  function triggerAutonomousTurn() {
    if (isRotatingSlice || isDragging) return;
    var axes = ['x', 'y', 'z'];
    var slices = [-1, 0, 1];
    var angles = [90, -90];

    var randomAxis = axes[Math.floor(Math.random() * axes.length)];
    var randomSlice = slices[Math.floor(Math.random() * slices.length)];
    var randomAngle = angles[Math.floor(Math.random() * angles.length)];

    rotateSlice(randomAxis, randomSlice, randomAngle, 550);
  }

  setInterval(triggerAutonomousTurn, 3200);

  /* ─── 8. Loop de Animación Principal (Render & Smooth Drift con Viewport Observer) ─── */
  var isHeroVisible = true;
  var isAnimating = false;

  function animate() {
    if (!isHeroVisible) {
      isAnimating = false;
      return;
    }
    isAnimating = true;
    requestAnimationFrame(animate);

    currentRotX += (targetRotX - currentRotX) * 0.08;
    currentRotY += (targetRotY - currentRotY) * 0.08;

    rubikGroup.rotation.x = currentRotX;
    rubikGroup.rotation.y = currentRotY;

    idleTimer += 0.016;
    if (!isDragging) {
      targetRotY += 0.0015;
      rubikGroup.position.y = Math.sin(idleTimer * 1.4) * 0.08;
    } else {
      rubikGroup.position.y = 0;
    }

    renderer.render(scene, camera);
  }

  var heroObserver = new IntersectionObserver(function (entries) {
    isHeroVisible = entries[0].isIntersecting;
    if (isHeroVisible && !isAnimating) {
      animate();
    }
  }, { threshold: 0.05 });
  heroObserver.observe(container);

  animate();

  /* ─── 9. Responsive Resize ─── */
  window.addEventListener('resize', function () {
    if (!container) return;
    var w = container.clientWidth;
    var h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
}

function loadAndInitRubik3D() {
  if (window.innerWidth < 768) return; // En móviles se usa el layout Hero limpio sin 3D
  if (typeof THREE === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    script.onload = function () {
      initRubik3D();
    };
    document.head.appendChild(script);
  } else {
    initRubik3D();
  }
}

var rubikLoaded = false;
function triggerRubikLoad() {
  if (rubikLoaded || window.innerWidth < 768) return;
  rubikLoaded = true;
  loadAndInitRubik3D();
}

// Cargar al primer movimiento del usuario o cuando el hilo principal esté en reposo (idle) en desktop/tablet
['scroll', 'mousemove', 'touchstart', 'pointerdown'].forEach(function (evt) {
  window.addEventListener(evt, triggerRubikLoad, { passive: true, once: true });
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 768 && !rubikLoaded) {
    triggerRubikLoad();
  }
}, { passive: true });

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(function () {
    setTimeout(triggerRubikLoad, 600);
  }, { timeout: 1800 });
} else {
  setTimeout(triggerRubikLoad, 1000);
}

