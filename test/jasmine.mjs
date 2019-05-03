import config  from './jasmine.json';
import Jasmine from 'jasmine';

const jasmine = new Jasmine();

jasmine.loadConfig(config);

export default jasmine;
