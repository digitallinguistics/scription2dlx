/**
 * This file applies tests to the literal translation line (`\lit`) and literal gloss line (`\wlt`)
 */

describe(`literal translation (utterance: "\\lit")`, () => {

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

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\txn      ninakupenda
    \\lit-eng2 I love you.
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

});

fdescribe(`literal translation (word: \\wlt)`, () => {

  it(`does not allow literal glosses with whitespace (unless bracketed)`, () => {

    const text = `
    \\m waxt-qungu qasi
    \\wlt one.day  a man
    `;

    try {
      convert(text);
      fail(`Error not thrown.`);
    } catch (e) {
      expect(e.message.includes(`same number`)).toBe(true);
    }

  });

  it(`may be in multiple languages`);

  it(`must have valid ISO language tags`);

  it(`removes brackets`);

});
