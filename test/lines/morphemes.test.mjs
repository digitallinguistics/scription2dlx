/**
 * This file applies tests to the morphemes line (`\m`)
 */

import convert from '../convert.mjs';

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

  it(`must have the same number of morphemes in each word as the glosses line`, () => {

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

  it(`treats non-breaking hyphens as word characters`, () => {

    const text = `
    \\m  waxt‑qungu qasi
    \\gl day‑one    man
    `;

    const { utterances: [{ words: [{ morphemes }] }] } = convert(text);

    expect(morphemes.length).toBe(1);

  });

  it(`must be present if the glosses line is present`, () => {

    const text = `
    \\txn waxdungu qasi
    \\gl  one.day  man
    `;

    try {
      convert(text);
      fail(`Error not thrown.`);
    } catch (e) {
      expect(e.message.includes(`morphemes`)).toBe(true);
    }

  });

  it(`may group multiple words with [square brackets]`, () => {

    const text = `
    waxt-qungu qasi [Benjamin Paul]
    day-one    man  NAME
    one day a man, Benjamin Paul
    `;

    const { utterances: [{ words }] } = convert(text);
    const lastWord = words.pop();

    expect(lastWord.transcription).toBe(`Benjamin Paul`);
    expect(lastWord.gloss).toBe(`NAME`);

  });

});
