const { copyFile } = require(`fs`).promises;
const path         = require(`path`);

const filename = `scription2dlx.js`;

const bundlePath = path.join(__dirname, `../${filename}`);

copyFile(bundlePath, path.join(__dirname, filename))
.catch(console.error);
