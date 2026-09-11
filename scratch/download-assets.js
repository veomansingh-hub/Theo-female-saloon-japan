const fs = require('fs');
const https = require('https');

const imagesToReplace = [
  'art-hair.jpg',
  'coffee.jpg',
  'kitchen.jpg',
  'outside.jpg',
  'people-alt.jpg',
  'people.jpg',
  'products-alt.jpg',
  'products.jpg',
  'scissors.jpg',
  'sink.jpg'
];

const unsplashIds = [
  '1503951914875-452162b0f3f1',
  '1521590832167-7bcbfaa6381f',
  '1522337360788-8b13dee7a37e',
  '1554519934-e32b1629d9ee',
  '1560869713-7d0a29430803',
  '1562322140-8baeececf3df',
  '1574015974293-817f0ebebb74',
  '1580618672591-eb180b1a973f',
  '1595475884562-073c30d45670',
  '1599351431202-1e0f0137899a'
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (let i = 0; i < imagesToReplace.length; i++) {
    const url = `https://images.unsplash.com/photo-${unsplashIds[i]}?w=1200&h=800&fit=crop`;
    const dest = `src/assets/${imagesToReplace[i]}`;
    console.log(`Downloading ${dest}...`);
    await download(url, dest);
  }
  
  // also download for portal
  const portalMain = `https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=1600&h=1200&fit=crop`;
  const portalMobile = `https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&h=1200&fit=crop`;
  console.log(`Downloading portal desktop...`);
  await download(portalMain, 'public/images/portal/desktop.jpg');
  console.log(`Downloading portal mobile...`);
  await download(portalMobile, 'public/images/portal/mobile.jpg');
  
  console.log('Done.');
}

run().catch(console.error);
