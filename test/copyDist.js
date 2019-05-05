const { copyFile } = require(`fs`).promises;
const path         = require(`path`);

const filename = `scription2dlx.js`;

const distPath = path.join(__dirname, `..`, filename);
const testPath = path.join(__dirname, filename);

copyFile(distPath, testPath)
.catch(console.error);
