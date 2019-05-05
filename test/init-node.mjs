import config            from './jasmine.json';
import convert           from '../dist/index.mjs';
import { fileURLToPath } from 'url';
import fs                from 'fs';
import Jasmine           from 'jasmine';
import yamljs            from 'yamljs';
import path              from 'path';

const { promises: { readFile } } = fs;

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

const jasmine = new Jasmine;

jasmine.loadConfig(config);

const global = jasmine.jasmine.getGlobal();

Object.assign(global, { convert, loadData, parser: yamljs.parse });

jasmine.execute();
