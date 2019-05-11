/**
 * This file applies tests to the free translation line (`\tln`)
 */

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

  it(`strips single quotes from start and end of the line`, () => {

    const translation = `one day a man`;

    const text = `
    waxt-qungu qasi
    day-one    man
    '${translation}'
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.translation).toBe(translation);

  });

});
