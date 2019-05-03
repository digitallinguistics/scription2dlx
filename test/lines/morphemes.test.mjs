/**
 * This file applies tests to the morphemes line (`\m`)
 */

import convert from '../../src/index.mjs';

describe(`morphemes`, () => {

  it(`may be in multiple orthographies`, () => {

    const text = `
    \\m-swad wašt-ʔungu  ʔasi
    \\m-apa  wašt-ʼunkʼu ʔasi
    \\gl     day-one     man
    `;

    const { utterances: [{ words: [{ morphemes: [, morpheme] }] }] } = convert(text);

    expect(morpheme.transcription.swad).toBe(`ʔungu`);
    expect(morpheme.transcription.apa).toBe(`ʼunkʼu`);

  });

  it(`may separate words by one or more white spaces or tabs`, () => {

    const text = `
    \\m-swad wašt-ʔungu\t\tʔasi
    \\m-apa  wašt-ʼunkʼu ʔasi
    \\gl     day-one     man
    `;

    const test = () => convert(text);

    expect(test).not.toThrow();

  });

  it(`must have the same number of words as the glosses line`, () => {

    const text = `
    \\m  waxdungu qasi
    \\gl day-one  a man
    `;

    try {
      convert(text);
      fail(`Error not thrown.`);
    } catch (e) {
      expect(e.message.includes(`same number`)).toBe(true);
    }


  });

  fit(`must have the same number of morphemes in each word as the glosses line`, () => {

    const text = `
    \\m  waxdungu qasi
    \\gl day-one  man
    `;

    try {
      convert(text);
      fail(`Error not thrown.`);
    } catch (e) {
      expect(e.message.includes(`same number`)).toBe(true);
    }

  });

  it(`may not contain non-breaking hyphens`);

  it(`must be present if the glosses line is present`);

  it(`may group multiple words with [square brackets]`);

});
