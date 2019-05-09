/**
 * This test suite applies tests that check the text as a whole
 */

const convert = require(`./scription2dlx`);

describe(`text`, () => {

  it(`may be blank`, () => {

    const text = ``;

    const result = convert(text);

    expect(JSON.stringify(result)).toBe(`{}`);

  });

});
