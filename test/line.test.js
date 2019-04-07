/**
 * This file applies tests for lines (generally)
 */

const convert = require(`../../scription2dlx`);

describe(`lines`, () => {

  it(`are stripped of leading / trailing whitespace`, () => {

    const text = `
    \\txn      wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln He left his brothers.\u0020\u0020\u0020
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.translation.endsWith(` `)).toBe(true);

  });

});
