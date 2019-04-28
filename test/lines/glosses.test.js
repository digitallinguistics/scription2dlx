/**
 * This file applies tests to the gloses line (`\gl`)
 */

const convert = require(`../../scription2dlx`);

describe(`glosses`, () => {

  it(`may be in multiple languages`);

  it(`may separate words with one or more white spaces or tabs`);

  it(`may be omitted when the morphemes line is present`);

  it(`treats morphemes as grammatical when written in CAPS`, () => {

    const text = `
    \\m  ni-na-ku-pend-a
    \\gl 1SG.SUBJ-PRES-2SG.OBJ-love-IND
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [word] } = utterance;
    const { morphemes: [, morpheme] } = word;

    expect(morpheme.gloss).toBe(`PRES`);

  });

  it(`should not contain non-breaking hyphens`);

  it(`may group multiple words with [square brackets]`);

});
