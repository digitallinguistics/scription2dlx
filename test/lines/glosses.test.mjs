/**
 * This file applies tests to the gloses line (`\gl`)
 */

import convert from '../../src/index.mjs';

describe(`glosses`, () => {

  it(`may be in multiple languages`, () => {

    const text = `
    \\m     waxt-qungu qasi
    \\gl-en day-one man
    \\gl-es día-uno hombre
    `;

    const { utterances: [{ words: [{ morphemes: [morpheme] }] }] } = convert(text);
    expect(morpheme.gloss.en).toBe(`day`);
    expect(morpheme.gloss.es).toBe(`día`);

  });

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\m      waxt-qungu qasi
    \\gl-es1 day-one man
    \\gl-es2 día-uno hombre
    `;

    try {
      convert(text);
      fail();
    } catch (e) {
      expect(e.message.includes(`IETF`)).toBe(true);
    }

  });

  it(`may separate words with one or more white spaces or tabs`, () => {

    const text = `
    \\m  waxt-qungu  qasi
    \\gl day-one\t\t man
    `;

    const test = () => convert(text);

    expect(test).not.toThrow();

  });

  it(`must be present when the morphemes line is present`);

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

  it(`parses infixes`, () => {

    // Tagalog, Latin

    const text = `
    b<um>ili
    <FOC>buy
    buy

    reli<n>qu-ere
    leave<PRS>-INF
    to leave
    `;

    const { utterances: [Tagalog, Latin] } = convert(text);

    const TagalogMorphemes = Tagalog.words[0].morphemes;

    expect(TagalogMorphemes[0].transcription).toBe(`um`);
    expect(TagalogMorphemes[0].gloss).toBe(`FOC`);
    expect(TagalogMorphemes[1].transcription).toBe(`bili`);
    expect(TagalogMorphemes[1].gloss).toBe(`buy`);

    const LatinMorphemes = Latin.words[0].morphemes;

    expect(LatinMorphemes[0].transcription).toBe(`reliqu`);
    expect(LatinMorphemes[0].gloss).toBe(`leave`);
    expect(LatinMorphemes[1].transcription).toBe(`n`);
    expect(LatinMorphemes[1].gloss).toBe(`PRS`);

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
