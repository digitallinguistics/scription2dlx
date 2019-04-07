/**
 * This file applies tests to the morphemes line (`\m`)
 */

const convert = require(`../../scription2dlx`);

describe(`morphemes`, () => {

  it(`may be in multiple orthographies`);

  it(`may separate words by one or more white spaces or tabs`);

  it(`must have the same number of words as the glosses line`);

  it(`must have the same number of morphemes in each word as the glosses line`);

  it(`may not contain non-breaking hyphens`);

  it(`must be present if the glosses line is present`);

});
