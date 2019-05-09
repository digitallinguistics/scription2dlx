/**
 * This file applies tests to the free translation line (`\tln`)
 */

const convert = require(`../scription2dlx`);

describe(`free translation`, () => {

  it(`may be in multiple languages`, () => {

    const English = `Hello world.`;
    const Spanish = `Hola mundo.`;

    const text = `
    \\trs    Hujambo dunia.
    \\tln-en ${English}
    \\tln-es ${Spanish}
    `;

    const { utterances: [utterance] } = convert(text);
    const { translation }              = utterance;

    expect(translation.en).toBe(English);
    expect(translation.es).toBe(Spanish);

  });

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\trs     Hujambo dunia.
    \\tln--es Hola mundo.
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

});
