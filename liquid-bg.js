/**
 * LiquidBackground — WebGL2 Organic Blob Renderer
 * Pure vanilla JS + GLSL: zero dependencies.
 * Blobs fluidos con Simplex Noise en GPU.
 * Colores: naranja/óxido (#e8610a, #c94a00) + azul profundo (#0d1b4b, #061030)
 * Target: 60fps en móviles 320–360px. powerPreference: high-performance.
 */
(function LiquidBackground() {
  'use strict';

  /* ─── 1. Canvas Setup ─────────────────────────────────────────────── */
  var canvas = document.getElementById('liquid-bg-canvas');
  if (!canvas) return;

  var gl = canvas.getContext('webgl2', {
    powerPreference: 'high-performance',
    antialias: true,
    alpha: true,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: false,
  });

  if (!gl) {
    console.warn('[LiquidBG] WebGL2 no disponible, usando fallback CSS.');
    return;
  }

  /* ─── 2. Vertex Shader (full-screen quad) ─────────────────────────── */
  var VS = [
    '#version 300 es',
    'precision highp float;',
    'in vec2 a_position;',
    'out vec2 v_uv;',
    'void main() {',
    '  v_uv = a_position * 0.5 + 0.5;',
    '  gl_Position = vec4(a_position, 0.0, 1.0);',
    '}'
  ].join('\n');

  /* ─── 3. Fragment Shader (Simplex Noise + Dual Blobs) ─────────────── */
  var FS = [
    '#version 300 es',
    'precision highp float;',
    'uniform float u_time;',
    'uniform vec2  u_resolution;',
    'in  vec2 v_uv;',
    'out vec4 fragColor;',

    /* Simplex 3D Noise (Ashima Arts, MIT) */
    'vec3 mod289v3(vec3 x){ return x - floor(x*(1./289.))*289.; }',
    'vec4 mod289v4(vec4 x){ return x - floor(x*(1./289.))*289.; }',
    'vec4 permute(vec4 x){ return mod289v4(((x*34.)+1.)*x); }',
    'vec4 taylorInvSqrt(vec4 r){ return 1.7928429-.8537347*r; }',

    'float snoise(vec3 v) {',
    '  const vec2 C = vec2(1./6., 1./3.);',
    '  const vec4 D = vec4(0., 0.5, 1., 2.);',
    '  vec3 i  = floor(v + dot(v, C.yyy));',
    '  vec3 x0 = v - i + dot(i, C.xxx);',
    '  vec3 g  = step(x0.yzx, x0.xyz);',
    '  vec3 l  = 1.0 - g;',
    '  vec3 i1 = min(g.xyz, l.zxy);',
    '  vec3 i2 = max(g.xyz, l.zxy);',
    '  vec3 x1 = x0 - i1 + C.xxx;',
    '  vec3 x2 = x0 - i2 + C.yyy;',
    '  vec3 x3 = x0 - D.yyy;',
    '  i = mod289v3(i);',
    '  vec4 p = permute(permute(permute(',
    '      i.z + vec4(0.,i1.z,i2.z,1.))',
    '    + i.y + vec4(0.,i1.y,i2.y,1.))',
    '    + i.x + vec4(0.,i1.x,i2.x,1.));',
    '  float n_ = 0.142857142857;',
    '  vec3 ns = n_ * D.wyz - D.xzx;',
    '  vec4 j  = p - 49.*floor(p*ns.z*ns.z);',
    '  vec4 x_ = floor(j*ns.z);',
    '  vec4 y_ = floor(j - 7.*x_);',
    '  vec4 x  = x_*ns.x + ns.yyyy;',
    '  vec4 y  = y_*ns.x + ns.yyyy;',
    '  vec4 h  = 1.0 - abs(x) - abs(y);',
    '  vec4 b0 = vec4(x.xy, y.xy);',
    '  vec4 b1 = vec4(x.zw, y.zw);',
    '  vec4 s0 = floor(b0)*2.+1.;',
    '  vec4 s1 = floor(b1)*2.+1.;',
    '  vec4 sh = -step(h, vec4(0.));',
    '  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;',
    '  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;',
    '  vec3 p0 = vec3(a0.xy,h.x);',
    '  vec3 p1 = vec3(a0.zw,h.y);',
    '  vec3 p2 = vec3(a1.xy,h.z);',
    '  vec3 p3 = vec3(a1.zw,h.w);',
    '  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));',
    '  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;',
    '  vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.);',
    '  m = m*m;',
    '  return 42.*dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));',
    '}',

    /* Palette */
    'vec3 colOxide  = vec3(0.910, 0.380, 0.039);',
    'vec3 colAmber  = vec3(0.785, 0.290, 0.000);',
    'vec3 colDeep   = vec3(0.051, 0.106, 0.294);',
    'vec3 colVoid   = vec3(0.024, 0.063, 0.188);',
    'vec3 colBase   = vec3(0.039, 0.043, 0.051);',

    /* Blob SDF */
    'float blob(vec2 uv, vec2 center, float radius, float warpAmt, float timeOff) {',
    '  vec2 d  = uv - center;',
    '  float r = length(d);',
    '  float w1 = snoise(vec3(d * 1.8, u_time * 0.08 + timeOff));',
    '  float w2 = snoise(vec3(d * 3.2, u_time * 0.13 + timeOff + 7.3));',
    '  float warp = (w1 * 0.55 + w2 * 0.25) * warpAmt;',
    '  return smoothstep(radius, radius * 0.05, r + warp);',
    '}',

    'void main() {',
    '  vec2 uv = (v_uv * 2.0 - 1.0);',
    '  uv.x *= u_resolution.x / u_resolution.y;',
    '  float t = u_time * 0.1;',

    /* Orbit centres */
    '  float a1 = t * 0.7 + 1.2;',
    '  vec2  c1 = vec2(cos(a1) * 0.25, sin(a1 * 0.6) * 0.18);',
    '  float a2 = t * 0.5 - 0.8;',
    '  vec2  c2 = vec2(-0.55 + cos(a2) * 0.12, 0.55 + sin(a2) * 0.10);',

    /* Blob intensities */
    '  float b1 = blob(uv, c1, 0.72, 0.38, 0.0);',
    '  float b2 = blob(uv, c2, 0.38, 0.28, 3.14);',

    /* Rim light */
    '  float rim = 1.0 - smoothstep(0.6, 1.4, length(uv));',
    '  float rimNoise = snoise(vec3(uv * 0.9, t * 0.15)) * 0.5 + 0.5;',
    '  float rimGlow  = rim * rimNoise * 0.35;',

    /* Compose */
    '  vec3 col = colBase;',
    '  col = mix(col, colVoid,  smoothstep(0.5, 0.0, length(uv) - 0.5));',
    '  col = mix(col, colOxide, b1 * 0.92);',
    '  col = mix(col, colAmber, b1 * b1 * 0.5);',
    '  col = mix(col, colDeep,  b2 * 0.88);',
    '  col += colAmber * rimGlow * 0.6;',
    '  col += colOxide * rimGlow * 0.25;',

    /* Specular */
    '  float spec = snoise(vec3((uv - c1) * 4.0, t * 0.22)) * 0.5 + 0.5;',
    '  col += vec3(1.0, 0.65, 0.30) * b1 * spec * spec * 0.28;',

    /* Vignette */
    '  float vig = 1.0 - smoothstep(0.55, 1.65, length(uv));',
    '  col *= vig * 0.85 + 0.15;',

    /* sRGB gamma */
    '  col = pow(clamp(col, 0.0, 1.0), vec3(0.4545));',
    '  fragColor = vec4(col, 1.0);',
    '}'
  ].join('\n');

  /* ─── 4. Shader compile helper ────────────────────────────────────── */
  function compileShader(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error('[LiquidBG] Shader error:', gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  var vs = compileShader(gl.VERTEX_SHADER,   VS);
  var fs = compileShader(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) return;

  var prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error('[LiquidBG] Link error:', gl.getProgramInfoLog(prog));
    return;
  }
  gl.deleteShader(vs);
  gl.deleteShader(fs);

  /* ─── 5. Full-screen quad geometry ───────────────────────────────── */
  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);
  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1,-1,  1,-1,  -1,1,
    -1, 1,  1,-1,   1,1,
  ]), gl.STATIC_DRAW);
  var aPos = gl.getAttribLocation(prog, 'a_position');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
  gl.bindVertexArray(null);

  /* ─── 6. Uniform locations ────────────────────────────────────────── */
  gl.useProgram(prog);
  var uTime = gl.getUniformLocation(prog, 'u_time');
  var uRes  = gl.getUniformLocation(prog, 'u_resolution');

  /* ─── 7. Resize handler (DPR-aware, capped at 1.5 for perf) ──────── */
  var rafId = null;

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    var w   = window.innerWidth;
    var h   = window.innerHeight;
    canvas.width  = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(prog);
    gl.uniform2f(uRes, canvas.width, canvas.height);
  }

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(resize).observe(document.documentElement);
  } else {
    window.addEventListener('resize', resize);
  }
  resize();

  /* ─── 8. Render loop (slow multiplier = smooth 60fps, battery-safe) ── */
  var startTime = performance.now();

  function render(now) {
    rafId = requestAnimationFrame(render);
    var t = (now - startTime) * 0.001;
    gl.useProgram(prog);
    gl.uniform1f(uTime, t);
    gl.bindVertexArray(vao);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.bindVertexArray(null);
  }

  rafId = requestAnimationFrame(render);

  /* ─── 9. Cleanup on page hide (battery saving) ────────────────────── */
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
      rafId = null;
    } else {
      if (!rafId) rafId = requestAnimationFrame(render);
    }
  });

})();
