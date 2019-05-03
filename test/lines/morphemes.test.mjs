/**
 * This file applies tests to the morphemes line (`\m`)
 */

import convert from '../../src/index.mjs';

describe(`morphemes`, () => {

  it(`may be in multiple orthographies`);

  it(`may separate words by one or more white spaces or tabs`);

  it(`must have the same number of words as the glosses line`, () => {

    const text = `
    \\m  waxdungu qasi
    \\gl day-one  a man
    `;

    try {
      convert(text);
      fail();
    } catch (e) {
      expect(e.message.includes(`same number`)).toBe(true);
    }


  });

  it(`must have the same number of morphemes in each word as the glosses line`);

  it(`may not contain non-breaking hyphens`);

  it(`must be present if the glosses line is present`);

  it(`may group multiple words with [square brackets]`);

});
