const { copyFile } = require(`fs`).promises;
const path         = require(`path`);

const fileName = `scription2dlx.js`;

const bundlePath = path.join(__dirname, `..`, fileName);
const yamlPath   = path.join(__dirname, `../node_modules/yamljs/dist/yaml.min.js`);

async function main() {
  await copyFile(bundlePath, path.join(__dirname, fileName));
  await copyFile(yamlPath, path.join(__dirname, `yaml.js`));
}

main().catch(console.error);
