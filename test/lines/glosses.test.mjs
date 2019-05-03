/**
 * This file applies tests to the gloses line (`\gl`)
 */

import convert from '../../src/index.mjs';

describe(`glosses`, () => {

  it(`may be in multiple languages`);

  it(`must have valid ISO language tags`);

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

  xit(`parses discontinuous morphology`, () => {

    const text = `
    na-wíčha-wa-xʔu̧
    hear-3PL.UND-1SG.ACT-hear
    I hear them
    `;

  });

  xit(`parses infixes`, () => {

    const text = `
    b<um>ili
    <FOC>buy
    buy
    `;

    const { utterances: [{ words: [{ morphemes }] }] } = convert(text);
    expect(morphemes[0].transcription).toBe(`um`);
    expect(morphemes[0].gloss).toBe(`FOC`);
    expect(morphemes[1].transcription).toBe(`bili`);
    expect(morphemes[1].gloss).toBe(`buy`);

  });

  xit(`parses reduplication`, () => {

    // Hebrew, Tagalog, Tagalog

    const text = `
    yerak~rak-im
    green~ATT-M.PL
    greenish ones

    bi~bili
    IPFV~buy
    is buying

    b<um>i~bili
    <ACT>IPFV~buy
    is buying
    `;

  });

});
