const convert      = require(`../scription2dlx`);
const path         = require(`path`);
const { readFile } = require(`fs`).promises;

const enc = `utf8`;

describe(`data`, () => {

  it(`parses Chitimacha`, async () => {
    const text = await readFile(path.join(__dirname, `Chitimacha.txt`), enc);
    const test = () => convert(text);
    expect(test).not.toThrow();
  });

  it(`parses Nuuchahnulth`, async () => {
    const text = await readFile(path.join(__dirname, `Nuuchahnulth.txt`), enc);
    const test = () => convert(text);
    expect(test).not.toThrow();
  });

  it(`parses Old Latin`, async () => {
    const text = await readFile(path.join(__dirname, `OldLatin.txt`), enc);
    const test = () => convert(text);
    expect(test).not.toThrow();
  });

});
