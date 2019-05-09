/* eslint-disable
  no-shadow,
*/

import bundle            from './scription2dlx.js';
import config            from './jasmine.json';
import { fileURLToPath } from 'url';
import fs                from 'fs';
import Jasmine           from 'jasmine';
import path              from 'path';
import source            from '../src/scription2dlx.mjs';
import yamljs            from 'yamljs';

const convert                    = process.version.startsWith(`v12`) ? source : bundle;
const jasmine                    = new Jasmine;
const { promises: { readFile } } = fs;

const __filename                 = fileURLToPath(import.meta.url);
const __dirname                  = path.dirname(__filename);

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

async function test() {

  const data   = await loadData();
  const global = jasmine.jasmine.getGlobal();
  const parser = yamljs.parse;

  Object.assign(global, { convert, data, parser });

  jasmine.loadConfig(config);
  jasmine.execute();

}

test().catch(console.error);
