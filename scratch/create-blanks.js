const fs = require('fs');
const { execSync } = require('child_process');

// create a simple 1x1 white png in base64
const whitePngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

// create a simple 1x1 black jpg in base64
const blackJpgBase64 = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wgALCAABAAEBAREA/8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPxA=';

fs.writeFileSync('public/images/portal/mask.png', Buffer.from(whitePngBase64, 'base64'));
fs.writeFileSync('public/images/portal/mask_mobile.png', Buffer.from(whitePngBase64, 'base64'));
fs.writeFileSync('public/images/portal/depthmap_desktop.jpg', Buffer.from(blackJpgBase64, 'base64'));
