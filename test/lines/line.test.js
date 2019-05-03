/**
 * This file applies tests for lines (generally)
 */

const convert = require(`../scription2dlx.js`)

describe(`line`, () => {

  it(`is stripped of leading / trailing whitespace`, () => {

    const text = `
    \\txn      wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln He left his brothers.\u0020\u0020\u0020
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.translation.endsWith(` `)).toBe(false);

  });

  it(`may have backslash codes followed by multiple spaces`, () => {

    const translation = `one day a man`;

    const text = `
    \\m   waxt-qungu qasi
    \\gl  day-one    man
    \\tln ${translation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.translation).toBe(translation);

  });

  it(`may have backslash codes followed by tabs`, () => {

    const translation = `one day a man`;

    const text = `
    \\m      waxt-qungu qasi
    \\gl     day-one    man
    \\tln\t\t${translation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.translation).toBe(translation);

  });

});
