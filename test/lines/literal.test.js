/**
 * This file applies tests to the literal translation line (`\lit`)
 */

const convert = require(`../../scription2dlx`);

describe(`literal translation`, () => {

  it(`removes brackets`, () => {

    const literal = `I love you.`;

    const text = `
    \\txn ninakupenda
    \\lit [${literal}]
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.literal).toBe(literal);

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

    expect(utterance.literal.en).toBe(English);
    expect(utterance.literal.es).toBe(Spanish);

  });

  it(`must have valid ISO language tags`);

});
