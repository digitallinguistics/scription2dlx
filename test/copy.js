const { copy } = require(`fs-extra`);
const path     = require(`path`);

const fileName = `scription2dlx.js`;

const bundlePath = path.join(__dirname, `..`, fileName);
const distPath   = path.join(__dirname, `../dist`);
const yamlPath   = path.join(__dirname, `../node_modules/yamljs/dist/yaml.min.js`);

async function main() {
  await copy(bundlePath, path.join(__dirname, fileName));
  await copy(distPath, path.join(__dirname, `dist`));
  await copy(yamlPath, path.join(__dirname, `yaml.js`));
}

main().catch(console.error);
