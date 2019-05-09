const { copyFile } = require(`fs`).promises;
const path         = require(`path`);

const filename = `scription2dlx.js`;

const bundlePath = path.join(__dirname, `../${filename}`);
const yamlPath   = path.join(__dirname, `../node_modules/yamljs/dist/yaml.min.js`);

async function copyFiles() {
  await copyFile(bundlePath, path.join(__dirname, filename));
  await copyFile(yamlPath, path.join(__dirname, `yaml.js`));
}

copyFiles().catch(console.error);
