/**
 * This file applies tests to the free translation line (`\tln`)
 */

import convert from '../../src/index.js';
import expect  from 'expect.js';

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

    expect(translation.en).to.be(English);
    expect(translation.es).to.be(Spanish);

  });

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\trs     Hujambo dunia.
    \\tln--es Hola mundo.
    `;

    const test = () => convert(text);

    expect(test).to.throwError(/IETF/u);

  });

  it(`strips single straight quotes from start and end of the line`, () => {

    const translation = `one day a man`;

    const text = `
    waxt-qungu qasi
    day-one    man
    '${translation}'
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.translation).to.be(translation);

  });

  it(`strips single curly quotes from start and end of the line`, () => {

    const translation = `one day a man`;

    const text = `
    waxt-qungu qasi
    day-one    man
    ‘${translation}’
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.translation).to.be(translation);

  });

  it(`is stripped of emphasis`, () => {

    const text = `
    waxdungu qasi
    *one* day a man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.translation).to.be(`one day a man`);

  });

});
