const opentype = require('opentype.js');
const fs = require('fs');

async function generate() {
  const fontUrl = 'https://raw.githubusercontent.com/google/fonts/main/ofl/jost/Jost%5Bwght%5D.ttf';
  const response = await fetch(fontUrl);
  const buffer = await response.arrayBuffer();
  const font = opentype.parse(buffer);
  const path = font.getPath('ROSE & IVY', 0, 100, 72);
  const pathHair = font.getPath('HAIR', 0, 100, 72);
  fs.writeFileSync('scratch/logo-path.txt', path.toPathData(2));
  fs.writeFileSync('scratch/logo-hair-path.txt', pathHair.toPathData(2));
}

generate().catch(console.error);
