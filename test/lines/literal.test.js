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

    expect(test).toThrowError(/IETF/u);

  });

  it(`strips single straight quotes from start and end of the line`, () => {

    const literal = `one day a man`;

    const text = `
    \\m   waxt-qungu qasi
    \\gl  day-one    man
    \\lit '${literal}'
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.literal).toBe(literal);

  });

  it(`strips single curly quotes from start and end of the line`, () => {

    const literal = `one day a man`;

    const text = `
    \\m   waxt-qungu qasi
    \\gl  day-one    man
    \\lit ‘${literal}’
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.literal).toBe(literal);

  });

  it(`is stripped of emphasis`, () => {

    const literal = `one day a man`;

    const text = `
    \\txn waxdungu qasi
    \\lit ${literal}
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.literal).toBe(literal);

  });

});

describe(`literal translation (word: \\wlt)`, () => {

  it(`does not allow literal glosses with whitespace (unless bracketed)`, () => {

    const text = `
    \\m   waxt-qungu qasi
    \\gl  one-day    man
    \\wlt one.day    a man
    `;

    const test = () => convert(text);

    expect(test).toThrowError(/same number/u);

  });

  it(`may be in multiple languages`, () => {

    const en = `one.day`;
    const es = `un.día`;

    const text = `
    \\m      waxt-qungu qasi
    \\gl     one-day    man
    \\wlt-en ${en}     [a man]
    \\wlt-es ${es}     [un hombre]
    `;

    const { utterances: [{ words: [{ literal }] }] } = convert(text);

    expect(literal.en).toBe(en);
    expect(literal.es).toBe(es);

  });

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\m       waxt-qungu qasi
    \\gl      one-day    man
    \\wlt-en- one.day    [a man]
    `;

    const test = () => convert(text);

    expect(test).toThrowError(/IETF/u);

  });

  it(`does not remove brackets`, () => {

    const text = `
    \\m   waxt-qungu qasi
    \\gl  one-day    man
    \\wlt [one day]  [a man]
    `;

    const { utterances: [{ words: [{ literal }] }] } = convert(text);

    expect(literal).toBe(`[one day]`);

  });

  it(`is stripped of emphasis`, () => {

    const literal = `day.one`;

    const text = `
    \\w waxdungu qasi
    \\wlt ${literal} a.man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.literal).toBe(literal);

  });

});
