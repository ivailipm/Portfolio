// Dither.js — pure WebGL recreation of the React Dither component
// Animated FBM noise waves + Bayer 8x8 ordered dithering, no dependencies

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
uniform vec2  u_mouse;
uniform int   u_enableMouse;
uniform float u_mouseRadius;
uniform float u_colorNum;
uniform float u_pixelSize;

// --- Perlin noise helpers ---
vec4 mod289v(vec4 x){ return x - floor(x*(1./289.))*289.; }
vec4 permute(vec4 x){ return mod289v(((x*34.)+1.)*x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314*r; }
vec2 fade(vec2 t){ return t*t*t*(t*(t*6.-15.)+10.); }

float cnoise(vec2 P){
  vec4 Pi = floor(P.xyxy)+vec4(0,0,1,1);
  vec4 Pf = fract(P.xyxy)-vec4(0,0,1,1);
  Pi = mod289v(Pi);
  vec4 ix=Pi.xzxz, iy=Pi.yyww, fx=Pf.xzxz, fy=Pf.yyww;
  vec4 i = permute(permute(ix)+iy);
  vec4 gx=fract(i*(1./41.))*2.-1.;
  vec4 gy=abs(gx)-.5;
  vec4 tx=floor(gx+.5); gx-=tx;
  vec2 g00=vec2(gx.x,gy.x),g10=vec2(gx.y,gy.y),
       g01=vec2(gx.z,gy.z),g11=vec2(gx.w,gy.w);
  vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));
  g00*=norm.x; g01*=norm.y; g10*=norm.z; g11*=norm.w;
  float n00=dot(g00,vec2(fx.x,fy.x)), n10=dot(g10,vec2(fx.y,fy.y)),
        n01=dot(g01,vec2(fx.z,fy.z)), n11=dot(g11,vec2(fx.w,fy.w));
  vec2 f=fade(Pf.xy);
  return 2.3*mix(mix(n00,n10,f.x),mix(n01,n11,f.x),f.y);
}

float fbm(vec2 p){
  float v=0.,a=1.,freq=u_waveFrequency;
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

// --- Bayer 8x8 dither ---
float bayer(int x, int y){
  int i=y*8+x;
  float b[64];
  b[0]=0.;  b[1]=48.; b[2]=12.; b[3]=60.; b[4]=3.;  b[5]=51.; b[6]=15.; b[7]=63.;
  b[8]=32.; b[9]=16.; b[10]=44.;b[11]=28.;b[12]=35.;b[13]=19.;b[14]=47.;b[15]=31.;
  b[16]=8.; b[17]=56.;b[18]=4.; b[19]=52.;b[20]=11.;b[21]=59.;b[22]=7.; b[23]=55.;
  b[24]=40.;b[25]=24.;b[26]=36.;b[27]=20.;b[28]=43.;b[29]=27.;b[30]=39.;b[31]=23.;
  b[32]=2.; b[33]=50.;b[34]=14.;b[35]=62.;b[36]=1.; b[37]=49.;b[38]=13.;b[39]=61.;
  b[40]=34.;b[41]=18.;b[42]=46.;b[43]=30.;b[44]=33.;b[45]=17.;b[46]=45.;b[47]=29.;
  b[48]=10.;b[49]=58.;b[50]=6.; b[51]=54.;b[52]=9.; b[53]=57.;b[54]=5.; b[55]=53.;
  b[56]=42.;b[57]=26.;b[58]=38.;b[59]=22.;b[60]=41.;b[61]=25.;b[62]=37.;b[63]=21.;
  return b[i]/64.;
}

vec3 ditherColor(vec2 uv, vec3 color){
  vec2 sc=floor(uv*u_resolution/u_pixelSize);
  int x=int(mod(sc.x,8.));
  int y=int(mod(sc.y,8.));
  float threshold=bayer(x,y)-0.25;
  float step=1./(u_colorNum-1.);
  color+=threshold*step;
  color=clamp(color-0.2,0.,1.);
  return floor(color*(u_colorNum-1.)+0.5)/(u_colorNum-1.);
}

void main(){
  // Pixelate UVs
  vec2 pixUV = floor(gl_FragCoord.xy/u_pixelSize)*u_pixelSize/u_resolution;

  vec2 uv=pixUV-0.5;
  uv.x*=u_resolution.x/u_resolution.y;

  float f=pattern(uv);

  if(u_enableMouse==1){
    vec2 mNDC=(u_mouse/u_resolution-0.5)*vec2(1.,-1.);
    mNDC.x*=u_resolution.x/u_resolution.y;
    float dist=length(uv-mNDC);
    float effect=1.-smoothstep(0.,u_mouseRadius,dist);
    f-=0.5*effect;
  }

  vec3 col=mix(vec3(0.),u_waveColor,f);
  col=ditherColor(pixUV/u_resolution, col);
  gl_FragColor=vec4(col,1.);
}
`;

function createDither(canvas, opts = {}) {
    const o = Object.assign({
        waveSpeed: 0.02,
        waveFrequency: 9.0,
        waveAmplitude: 0.3,
        waveColor: [0.5, 0.5, 0.5],
        colorNum: 40.0,
        pixelSize: 2.0,
        enableMouseInteraction: true,
        mouseRadius: 0.3,
        disableAnimation: false,
    }, opts);

    const gl = canvas.getContext('webgl', { antialias: true, preserveDrawingBuffer: true });
    if (!gl) return;

    // Compile shaders
    const compile = (type, src) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Full-screen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const U = {};
    ['u_resolution', 'u_time', 'u_waveSpeed', 'u_waveFrequency', 'u_waveAmplitude',
        'u_waveColor', 'u_mouse', 'u_enableMouse', 'u_mouseRadius', 'u_colorNum', 'u_pixelSize'
    ].forEach(n => U[n] = gl.getUniformLocation(prog, n));

    const mouse = { x: 0, y: 0 };
    let W = 0, H = 0;

    const resize = () => {
        const dpr = window.devicePixelRatio || 1;
        W = canvas.clientWidth * dpr;
        H = canvas.clientHeight * dpr;
        canvas.width = W;
        canvas.height = H;
        gl.viewport(0, 0, W, H);
    };

    const getPrimaryRgb = () => {
        const hex = getComputedStyle(document.documentElement)
            .getPropertyValue('--primary').trim() || '#971531';
        return [
            parseInt(hex.slice(1, 3), 16) / 255,
            parseInt(hex.slice(3, 5), 16) / 255,
            parseInt(hex.slice(5, 7), 16) / 255,
        ];
    };

    let start = null, raf;
    const loop = (ts) => {
        if (!start) start = ts;
        const t = o.disableAnimation ? 0 : (ts - start) * 0.001;

        const color = getPrimaryRgb();

        gl.uniform2f(U.u_resolution, W, H);
        gl.uniform1f(U.u_time, t);
        gl.uniform1f(U.u_waveSpeed, o.waveSpeed);
        gl.uniform1f(U.u_waveFrequency, o.waveFrequency);
        gl.uniform1f(U.u_waveAmplitude, o.waveAmplitude);
        gl.uniform3fv(U.u_waveColor, color);
        gl.uniform2f(U.u_mouse, mouse.x, mouse.y);
        gl.uniform1i(U.u_enableMouse, o.enableMouseInteraction ? 1 : 0);
        gl.uniform1f(U.u_mouseRadius, o.mouseRadius);
        gl.uniform1f(U.u_colorNum, o.colorNum);
        gl.uniform1f(U.u_pixelSize, o.pixelSize);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        raf = requestAnimationFrame(loop);
    };

    if (o.enableMouseInteraction) {
        canvas.addEventListener('mousemove', e => {
            const r = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            mouse.x = (e.clientX - r.left) * dpr;
            mouse.y = (e.clientY - r.top) * dpr;
        });
    }

    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(loop);

    return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('resize', resize);
    };
}

// Mount on any element with data-dither attribute
document.querySelectorAll('[data-dither]').forEach(container => {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;';
    container.style.position = 'relative';
    container.insertBefore(canvas, container.firstChild);

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