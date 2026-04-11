const VERT = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;
uniform vec2  u_resolution;
uniform float u_time;
uniform float u_waveSpeed;
uniform float u_waveFrequency;
uniform float u_waveAmplitude;
uniform vec3  u_waveColor;
uniform vec3  u_bgColor;
uniform vec2  u_mouse;
uniform int   u_enableMouse;
uniform float u_mouseRadius;
uniform float u_colorNum;
uniform float u_pixelSize;

// --- Perlin noise ---
vec4 mod289v(vec4 x){ return x - floor(x*(1.0/289.0))*289.0; }
vec4 permute(vec4 x){ return mod289v(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }
vec2 myfade(vec2 t){ return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P){
  vec4 Pi = floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);
  Pi = mod289v(Pi);
  vec4 ix=Pi.xzxz, iy=Pi.yyww, fx=Pf.xzxz, fy=Pf.yyww;
  vec4 i  = permute(permute(ix)+iy);
  vec4 gx = fract(i*(1.0/41.0))*2.0-1.0;
  vec4 gy = abs(gx)-0.5;
  vec4 tx = floor(gx+0.5);
  gx -= tx;
  vec2 g00=vec2(gx.x,gy.x), g10=vec2(gx.y,gy.y),
       g01=vec2(gx.z,gy.z), g11=vec2(gx.w,gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));
  g00*=norm.x; g01*=norm.y; g10*=norm.z; g11*=norm.w;
  float n00=dot(g00,vec2(fx.x,fy.x)), n10=dot(g10,vec2(fx.y,fy.y)),
        n01=dot(g01,vec2(fx.z,fy.z)), n11=dot(g11,vec2(fx.w,fy.w));
  vec2 f=myfade(Pf.xy);
  return 2.3*mix(mix(n00,n10,f.x),mix(n01,n11,f.x),f.y);
}

float fbm(vec2 p){
  float v=0.0, a=1.0, freq=u_waveFrequency;
  for(int i=0;i<4;i++){
    v+=a*abs(cnoise(p));
    p*=freq; a*=u_waveAmplitude;
  }
  return v;
}

float pattern(vec2 p){
  vec2 p2=p-u_time*u_waveSpeed;
  return fbm(p+fbm(p2));
}

// --- Bayer 4x4 via math (no array indexing) ---
float bayer4(vec2 pos){
  vec2 p = mod(floor(pos), 4.0);
  // build 4x4 bayer with bit manipulation equivalent
  float x = p.x;
  float y = p.y;
  float r = 0.0;
  // standard 4x4 bayer matrix values / 16.0
  r += (mod(x,     2.0) == 0.0 ? 0.0 : 8.0);
  r += (mod(y,     2.0) == 0.0 ? 0.0 : 2.0);
  r += (mod(floor(x/2.0), 2.0) == 0.0 ? 0.0 : 4.0);
  r += (mod(floor(y/2.0), 2.0) == 0.0 ? 0.0 : 1.0);
  return r / 16.0;
}

vec3 ditherColor(vec2 fragCoord, vec3 color){
  vec2 sc = fragCoord / u_pixelSize;
  float threshold = bayer4(sc) - 0.5;
  float step = 1.0 / (u_colorNum - 1.0);
  color += threshold * step;
  color = clamp(color - 0.2, 0.0, 1.0);
  return floor(color*(u_colorNum-1.0)+0.5)/(u_colorNum-1.0);
}

void main(){
  vec2 pixCoord = floor(gl_FragCoord.xy / u_pixelSize) * u_pixelSize;
  vec2 uv = pixCoord / u_resolution - 0.5;
  uv.x *= u_resolution.x / u_resolution.y;

  float f = pattern(uv);

  if(u_enableMouse == 1){
    vec2 mNDC = (u_mouse/u_resolution - 0.5)*vec2(1.0,-1.0);
    mNDC.x *= u_resolution.x/u_resolution.y;
    float dist = length(uv - mNDC);
    float effect = 1.0 - smoothstep(0.0, u_mouseRadius, dist);
    f -= 0.5*effect;
  }

  vec3 col = mix(u_bgColor, u_waveColor, f);
  col = ditherColor(gl_FragCoord.xy, col);
  gl_FragColor = vec4(col, 1.0);
}
`;

function hexToRgb01(hex) {
    hex = hex.trim();
    return [
        parseInt(hex.slice(1, 3), 16) / 255,
        parseInt(hex.slice(3, 5), 16) / 255,
        parseInt(hex.slice(5, 7), 16) / 255,
    ];
}

function getPrimaryRgb() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    // Dark mode: near-black wave on black bg — very subtle
    // Light mode: near-white wave on light bg — very subtle
    return isLight ? [0.96, 0.94, 0.91] : [0.12, 0.06, 0.07];
}

function createDither(canvas, opts) {
    const gl = canvas.getContext('webgl', { antialias: false });
    if (!gl) { console.warn('WebGL not supported'); return; }

    const compile = (type, src) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
            console.error('Shader error:', gl.getShaderInfoLog(s));
        return s;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS))
        console.error('Program error:', gl.getProgramInfoLog(prog));
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const U = {};
    ['u_resolution', 'u_time', 'u_waveSpeed', 'u_waveFrequency', 'u_waveAmplitude',
        'u_waveColor', 'u_bgColor', 'u_mouse', 'u_enableMouse', 'u_mouseRadius', 'u_colorNum', 'u_pixelSize'
    ].forEach(n => U[n] = gl.getUniformLocation(prog, n));

    const mouse = { x: 0, y: 0 };
    let W = 0, H = 0;

    const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        const nw = Math.floor(canvas.clientWidth * dpr);
        const nh = Math.floor(canvas.clientHeight * dpr);
        if (nw !== W || nh !== H) {
            W = canvas.width = nw;
            H = canvas.height = nh;
            gl.viewport(0, 0, W, H);
        }
    };

    let start = null, raf;
    const loop = (ts) => {
        if (!start) start = ts;
        resize();
        if (W === 0 || H === 0) { raf = requestAnimationFrame(loop); return; }

        const t = (ts - start) * 0.001;
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        // More contrast between the two colors so the dither pattern is visible
        const waveColor = isLight ? [0.55, 0.52, 0.48] : [0.35, 0.20, 0.22];
        const bgColor = isLight ? [0.94, 0.92, 0.88] : [0.04, 0.02, 0.02];

        gl.uniform2f(U.u_resolution, W, H);
        gl.uniform1f(U.u_time, t);
        gl.uniform1f(U.u_waveSpeed, opts.waveSpeed);
        gl.uniform1f(U.u_waveFrequency, opts.waveFrequency);
        gl.uniform1f(U.u_waveAmplitude, opts.waveAmplitude);
        gl.uniform3fv(U.u_waveColor, waveColor);
        gl.uniform3fv(U.u_bgColor, bgColor);
        gl.uniform2f(U.u_mouse, mouse.x, mouse.y);
        gl.uniform1i(U.u_enableMouse, opts.enableMouseInteraction ? 1 : 0);
        gl.uniform1f(U.u_mouseRadius, opts.mouseRadius);
        gl.uniform1f(U.u_colorNum, opts.colorNum);
        gl.uniform1f(U.u_pixelSize, opts.pixelSize);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        raf = requestAnimationFrame(loop);
    };

    if (opts.enableMouseInteraction) {
        canvas.addEventListener('mousemove', e => {
            const r = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            mouse.x = (e.clientX - r.left) * dpr;
            mouse.y = (e.clientY - r.top) * dpr;
        });
    }

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
}

document.querySelectorAll('[data-dither]').forEach(container => {
    const cs = getComputedStyle(container);
    if (cs.position === 'static') container.style.position = 'relative';
    container.style.background = 'none';

    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:0;display:block;pointer-events:none;';
    container.insertBefore(canvas, container.firstChild);

    Array.from(container.children).forEach(child => {
        if (child === canvas) return;
        const ccs = getComputedStyle(child);
        if (ccs.position === 'static') child.style.position = 'relative';
        if (!child.style.zIndex) child.style.zIndex = '1';
    });

    createDither(canvas, {
        waveSpeed: parseFloat(container.dataset.waveSpeed ?? 0.02),
        waveFrequency: parseFloat(container.dataset.waveFrequency ?? 9),
        waveAmplitude: parseFloat(container.dataset.waveAmplitude ?? 0.3),
        colorNum: parseFloat(container.dataset.colorNum ?? 40),
        pixelSize: parseFloat(container.dataset.pixelSize ?? 2),
        mouseRadius: parseFloat(container.dataset.mouseRadius ?? 0.3),
        enableMouseInteraction: container.dataset.mouse !== 'false',
    });
});