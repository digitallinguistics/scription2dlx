import bundle    from '../scription2dlx.js';
import esModules from '../src/index.mjs';

console.info(`Testing on ${process.env.NODE_ENV || `production`}`);

export default process.env.NODE_ENV === `development` ? esModules : bundle;
