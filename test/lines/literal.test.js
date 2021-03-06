/**
 * This file applies tests to the literal translation line (`\lit`)
 */

import convert from '../../src/index.js';
import expect  from 'expect.js';

describe(`literal translation (utterance: "\\lit")`, () => {

  it(`removes brackets`, () => {

    const literal = `I love you.`;

    const text = `
    \\txn ninakupenda
    \\lit [${literal}]
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.literal).to.be(literal);

  });

  it(`may be in multiple languages`, () => {

    const English = `I love you.`;
    const Spanish = `Te amo.`;

    const text = `
    \\txn    ninakupenda
    \\lit-en ${English}
    \\lit-es ${Spanish}
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.literal.en).to.be(English);
    expect(utterance.literal.es).to.be(Spanish);

  });

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\txn      ninakupenda
    \\lit-eng2 I love you.
    `;

    const test = () => convert(text);

    expect(test).to.throwError(/IETF/u);

  });

  it(`strips single straight quotes from start and end of the line`, () => {

    const literal = `one day a man`;

    const text = `
    \\m   waxt-qungu qasi
    \\gl  day-one    man
    \\lit '${literal}'
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.literal).to.be(literal);

  });

  it(`strips single curly quotes from start and end of the line`, () => {

    const literal = `one day a man`;

    const text = `
    \\m   waxt-qungu qasi
    \\gl  day-one    man
    \\lit ‘${literal}’
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.literal).to.be(literal);

  });

  it(`is stripped of emphasis`, () => {

    const literal = `one day a man`;

    const text = `
    \\txn waxdungu qasi
    \\lit ${literal}
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.literal).to.be(literal);

  });

});
