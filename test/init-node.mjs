import CommonJSBuild  from './scription2dlx';
import config         from './jasmine.json';
import ESModulesBuild from '../src/index.mjs';
import fs             from 'fs';
import Jasmine        from 'jasmine';
import path           from 'path';

const { promises: { readFile } } = fs;

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function loadData() {

  const Chitimacha   = await readFile(path.join(__dirname, `data/Chitimacha.txt`), `utf8`);
  const Nuuchahnulth = await readFile(path.join(__dirname, `data/Nuuchahnulth.txt`), `utf8`);
  const OldLatin     = await readFile(path.join(__dirname, `data/OldLatin.txt`), `utf8`);

  return {
    Chitimacha,
    Nuuchahnulth,
    OldLatin,
  };

}

const env = process.env.NODE_ENV || `development`;
const dev = process.env.NODE_ENV === `development`;

// Setup Jasmine

console.info(`Running tests in ${env}`);

const convert = dev ? ESModulesBuild : CommonJSBuild;
const jasmine = new Jasmine;

jasmine.loadConfig(config);

const global = jasmine.jasmine.getGlobal();

Object.assign(global, { convert, loadData });

jasmine.execute();
