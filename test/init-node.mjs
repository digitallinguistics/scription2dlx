import config           from './jasmine.json';
import convertCommonJS  from './scription2dlx';
import convertESModules from '../src/index.mjs';
import fs               from 'fs';
import Jasmine          from 'jasmine';

const { promises: { readFile } } = fs;

async function loadData() {

  const Chitimacha   = await readFile(`test/data/Chitimacha.txt`, `utf8`);
  const Nuuchahnulth = await readFile(`test/data/Nuuchahnulth.txt`, `utf8`);
  const OldLatin     = await readFile(`test/data/OldLatin.txt`, `utf8`);

  return {
    Chitimacha,
    Nuuchahnulth,
    OldLatin,
  };

}

const env = process.env.NODE_ENV || `development`;

console.info(`Running Jasmine in ${env}`);

const convert = process.env.NODE_ENV === `development` ? convertESModules : convertCommonJS;
const jasmine = new Jasmine;

jasmine.loadConfig(config);

const global = jasmine.jasmine.getGlobal();

Object.assign(global, { convert, loadData });

jasmine.execute();
