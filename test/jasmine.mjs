import config           from './jasmine.json';
import convertCommonJS  from './scription2dlx';
import convertESModules from '../src/index.mjs';
import Jasmine          from 'jasmine';

const env = process.env.NODE_ENV || `development`;

console.info(`Running Jasmine in ${env}`);

const convert = process.env.NODE_ENV === `development` ? convertESModules : convertCommonJS;
const jasmine = new Jasmine;

jasmine.loadConfig(config);

jasmine.jasmine.getGlobal().convert = convert;

jasmine.execute();