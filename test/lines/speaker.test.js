/**
 * This file applies tests for the speaker line
 */

const convert = require(`../scription2dlx`);

describe(`speaker`, () => {

  it(`must be a valid abbreviation`, () => {

    const text = `
    \\sp  Benjamin Paul
    \\txn wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln He left his brothers.
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

});
