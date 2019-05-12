/* eslint-disable
  global-require,
  no-shadow,
*/

const convert           = require(`./scription2dlx`);
const { parse: parser } = require(`yamljs`);
const path              = require(`path`);
const { readFile }      = require(`fs`).promises;

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

describe(`scription2dlx`, () => {

  beforeAll(async () => {

    const data          = await loadData();
    const jasmineGlobal = jasmine.getGlobal();

    Object.assign(jasmineGlobal, { convert, data, parser });

  });

  // Real test data
  require(`./data/data.test`);

  // Document sections
  require(`./header.test`);
  require(`./schema.test`);
  require(`./text.test`);
  require(`./utterances.test`);

  // Lines
  require(`./lines/glosses.test`);
  require(`./lines/line.test`);
  require(`./lines/literal.test`);
  require(`./lines/meta.test`);
  require(`./lines/morphemes.test`);
  require(`./lines/note.test`);
  require(`./lines/phonetic.test`);
  require(`./lines/speaker.test`);
  require(`./lines/transcript.test`);
  require(`./lines/transcription.test`);
  require(`./lines/translation.test`);
  require(`./lines/source.test`);

});
