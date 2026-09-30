const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function buildSvg(duration) {
  return `<svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
<style>
svg { overflow: visible; }
@keyframes kf_Shape_Set_transform_0 {
  0% { transform: translate(190px, 190px) rotate(0rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  1.67% { transform: translate(190px, 190px) rotate(-0.014rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  3.33% { transform: translate(190px, 190px) rotate(-0.063rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  5% { transform: translate(190px, 190px) rotate(-0.159rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  6.67% { transform: translate(190px, 190px) rotate(-0.303rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  8.33% { transform: translate(190px, 190px) rotate(-0.461rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  10% { transform: translate(190px, 190px) rotate(-0.586rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  11.67% { transform: translate(190px, 190px) rotate(-0.661rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  13.33% { transform: translate(190px, 190px) rotate(-0.694rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  14.29% { transform: translate(190px, 190px) rotate(-0.698rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  14.59% { transform: translate(190px, 190px) rotate(-0.696rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  15% { transform: translate(190px, 190px) rotate(-0.688rad) scaleX(1.001) scaleY(1.001) translate(-190px, -190px); }
  16.67% { transform: translate(190px, 190px) rotate(-0.556rad) scaleX(1.018) scaleY(1.018) translate(-190px, -190px); }
  18.33% { transform: translate(190px, 190px) rotate(-0.259rad) scaleX(1.03) scaleY(1.03) translate(-190px, -190px); }
  20% { transform: translate(190px, 190px) rotate(-0.045rad) scaleX(1.013) scaleY(1.013) translate(-190px, -190px); }
  21.43% { transform: translate(190px, 190px) rotate(0rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
  100% { transform: translate(190px, 190px) rotate(0rad) scaleX(1) scaleY(1) translate(-190px, -190px); }
}
#Shape_Set {
  transform-origin: 0 0;
  animation: kf_Shape_Set_transform_0 ${duration} linear infinite;
}
#shape { fill: #fff; }
@media (prefers-color-scheme: dark) {
  #shape { fill: #26242b; }
}
@media (prefers-reduced-motion: reduce) {
  #Shape_Set { animation: none; }
}
</style>
<defs>
  <filter id="filter0_d_dashdrop" x="-18" y="-16" width="420" height="420" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="2" dy="4"/>
    <feGaussianBlur stdDeviation="10"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  <linearGradient id="dashdrop_drop_grad" x1="112" y1="84" x2="268" y2="296" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stop-color="#2979FF"/>
    <stop offset="100%" stop-color="#00B0FF"/>
  </linearGradient>
</defs>
<g id="Frame_2">
  <g id="Shape_Set" filter="url(#filter0_d_dashdrop)">
    <path id="shape" transform="translate(27.9998 29.8999)" d="M126.828 13.3757C128.575 11.9499 129.448 11.237 130.245 10.6352C149.03 -3.54505 174.97 -3.54505 193.755 10.6352C194.552 11.237 195.426 11.9499 197.172 13.3757C197.952 14.0122 198.342 14.3305 198.728 14.6334C207.568 21.5789 218.406 25.5149 229.653 25.8637C230.143 25.8789 230.647 25.8852 231.654 25.8977C233.911 25.9256 235.039 25.9396 236.038 25.9899C259.563 27.1743 279.435 43.8108 284.689 66.7206C284.912 67.693 285.122 68.7992 285.541 71.0116C285.728 71.9993 285.822 72.4931 285.922 72.9724C288.22 83.9624 293.987 93.9286 302.377 101.409C302.743 101.735 303.125 102.063 303.889 102.718C305.599 104.187 306.455 104.921 307.187 105.6C324.446 121.595 328.95 147.084 318.216 168.003C317.76 168.891 317.208 169.873 316.104 171.837C315.611 172.714 315.365 173.152 315.133 173.583C309.812 183.475 307.809 194.808 309.418 205.92C309.488 206.404 309.569 206.9 309.732 207.892C310.096 210.114 310.278 211.225 310.402 212.215C313.318 235.536 300.348 257.951 278.647 267.092C277.726 267.48 276.671 267.878 274.56 268.674C273.617 269.03 273.146 269.207 272.69 269.389C262.242 273.555 253.406 280.952 247.48 290.495C247.221 290.911 246.964 291.343 246.45 292.208C245.297 294.143 244.721 295.111 244.178 295.949C231.387 315.684 207.011 324.536 184.498 317.621C183.543 317.328 182.478 316.956 180.348 316.212C179.397 315.88 178.921 315.714 178.455 315.561C167.767 312.051 156.233 312.051 145.545 315.561C145.079 315.714 144.604 315.88 143.653 316.212C141.523 316.956 140.458 317.328 139.502 317.621C116.989 324.536 92.6131 315.684 79.8223 295.949C79.2794 295.111 78.7031 294.143 77.5505 292.208C77.036 291.343 76.7788 290.911 76.5203 290.495C70.5942 280.952 61.7586 273.555 51.3098 269.389C50.8541 269.207 50.3829 269.03 49.4406 268.674C47.3297 267.878 46.2742 267.48 45.3532 267.092C23.6525 257.951 10.6822 235.536 13.5983 212.215C13.722 211.225 13.9042 210.114 14.2684 207.892C14.431 206.9 14.5123 206.404 14.5825 205.92C16.1911 194.808 14.1882 183.475 8.86773 173.583C8.63566 173.152 8.38924 172.714 7.89641 171.837C6.79237 169.873 6.24036 168.891 5.78474 168.003C-4.9499 147.084 -0.445344 121.595 16.8131 105.6C17.5456 104.921 18.4009 104.187 20.1116 102.718C20.8752 102.063 21.257 101.735 21.623 101.409C30.0136 93.9285 35.7807 83.9624 38.0779 72.9724C38.1781 72.4931 38.2718 71.9993 38.459 71.0116C38.8785 68.7992 39.0883 67.6929 39.3113 66.7206C44.5654 43.8108 64.4372 27.1743 87.9625 25.9899C88.961 25.9396 90.0894 25.9256 92.346 25.8977C93.3534 25.8852 93.857 25.8789 94.3476 25.8637C105.594 25.5149 116.433 21.5789 125.273 14.6334C125.658 14.3305 126.048 14.0122 126.828 13.3757Z"/>
    <g id="dashdrop_mark">
      <path d="M190,84 C176,101 112,176 112,218 C112,261 147,296 190,296 C233,296 268,261 268,218 C268,176 204,101 190,84 Z" fill="url(#dashdrop_drop_grad)"/>
      <line x1="140" y1="166" x2="160" y2="166" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
      <path d="M155,192 H218 M198,172 L218,192 L198,212" fill="none" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M225,236 H162 M182,216 L162,236 L182,256" fill="none" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="220" y1="262" x2="240" y2="262" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
    </g>
  </g>
</g>
</svg>`;
}

fs.writeFileSync('app/src/main/assets/web/dashdrop-logo-slow.svg', buildSvg('7s'), 'utf8');
fs.writeFileSync('app/src/main/assets/web/dashdrop-logo-quick.svg', buildSvg('2.7s'), 'utf8');
fs.writeFileSync('docs/dashdrop_logo_slow.svg', buildSvg('7s'), 'utf8');

// Also create PNG raster for drawable-nodpi/dashdrop_logo_mark.png (and update flikky_logo_mark.png)
function makePNG(width, height, rgbaBuffer) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type);
    const crcBuf = Buffer.concat([typeBuf, data]);
    const crc = Buffer.alloc(4);
    crc.writeInt32BE(crc32(crcBuf), 0);
    return Buffer.concat([len, typeBuf, data, crc]);
  }
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    crcTable[n] = c;
  }
  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    return (crc ^ 0xffffffff);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  const raw = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    raw[y * (1 + width * 4)] = 0;
    rgbaBuffer.copy(raw, y * (1 + width * 4) + 1, y * width * 4, (y + 1) * width * 4);
  }
  const idatData = zlib.deflateSync(raw);
  return Buffer.concat([signature, makeChunk('IHDR', ihdr), makeChunk('IDAT', idatData), makeChunk('IEND', Buffer.alloc(0))]);
}

const w = 512, h = 512;
const buf = Buffer.alloc(w * h * 4);

// Render the DashDrop mark into 512x512 PNG
// Drop shape centered around (256, 280) with tip at (256, 80)
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const idx = (y * w + x) * 4;
    // Check if inside drop
    // Lower circle: center (256, 300), radius 140
    const dx = x - 256;
    const dy = y - 300;
    const distSq = dx * dx + dy * dy;
    let inside = false;
    if (y >= 300 && distSq <= 140 * 140) {
      inside = true;
    } else if (y < 300 && y >= 80) {
      // Tangent cone to top tip at (256, 80)
      const t = (300 - y) / 220; // 0 at 300, 1 at 80
      const currentRadius = 140 * (1 - t * t * 0.95);
      if (Math.abs(dx) <= currentRadius) {
        inside = true;
      }
    }

    if (inside) {
      // Gradient: top (#2979FF: 41, 121, 255) to bottom (#00B0FF: 0, 176, 255)
      const gradT = Math.min(1, Math.max(0, (y - 80) / 360));
      let r = Math.round(41 * (1 - gradT));
      let g = Math.round(121 + (176 - 121) * gradT);
      let b = 255;

      // Now check if part of the white arrows or speed lines:
      // Upper arrow: y in [235, 275]
      // Lower arrow: y in [325, 365]
      let isArrow = false;

      // Upper arrow: horizontal line y in [250, 260], x in [180, 310]
      if (y >= 250 && y <= 260 && x >= 180 && x <= 310) isArrow = true;
      // Upper arrow head: pointing right around (310, 255)
      const uHeadDist = Math.abs((x - 310) + Math.abs(y - 255));
      if (x <= 310 && x >= 270 && Math.abs(y - 255) <= (310 - x) + 5 && Math.abs(y - 255) >= (310 - x) - 7) isArrow = true;

      // Lower arrow: horizontal line y in [340, 350], x in [200, 330]
      if (y >= 340 && y <= 350 && x >= 200 && x <= 330) isArrow = true;
      // Lower arrow head: pointing left around (200, 345)
      if (x >= 200 && x <= 240 && Math.abs(y - 345) <= (x - 200) + 5 && Math.abs(y - 345) >= (x - 200) - 7) isArrow = true;

      // Speed dash: y in [215, 223], x in [160, 205]
      if (y >= 215 && y <= 223 && x >= 160 && x <= 205) isArrow = true;
      // Speed dash: y in [380, 388], x in [305, 350]
      if (y >= 380 && y <= 388 && x >= 305 && x <= 350) isArrow = true;

      if (isArrow) {
        r = 255; g = 255; b = 255;
      }

      buf[idx] = r;
      buf[idx + 1] = g;
      buf[idx + 2] = b;
      buf[idx + 3] = 255;
    }
  }
}

const png = makePNG(w, h, buf);
fs.writeFileSync('app/src/main/res/drawable-nodpi/dashdrop_logo_mark.png', png);
fs.writeFileSync('app/src/main/res/drawable-nodpi/flikky_logo_mark.png', png); // Keep compatible copy
console.log('DashDrop PNGs generated successfully, size:', png.length);
