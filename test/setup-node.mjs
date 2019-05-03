const convert = require(`./scription2dlx`);

beforeEach(function() {
  jasmine.getGlobal().convert = convert;
});
