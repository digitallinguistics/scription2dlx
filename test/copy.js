const { copy } = require(`fs-extra`);
const path     = require(`path`);

const distPath   = path.join(__dirname, `../dist`);
const yamlPath   = path.join(__dirname, `../node_modules/yamljs/dist/yaml.min.js`);

async function main() {
  await copy(distPath, path.join(__dirname, `dist`));
  await copy(yamlPath, path.join(__dirname, `yaml.js`));
}

main().catch(console.error);
