/**
 * This file applies tests to the gloses line (`\gl`)
 */

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

  it(`must be present when the morphemes line is present`, () => {

    const text = `
    \\m   waxt-qungu qasi
    \\tln one day a man
    `;

    try {
      convert(text);
      fail(`Error not thrown.`);
    } catch (e) {
      expect(e.message.includes(`glosses`)).toBe(true);
    }

  });

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

  it(`parses reduplication`, () => {

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

    const { utterances: [{ words: [{ morphemes: [, morpheme] }] }] } = convert(text);

    expect(morpheme.gloss).toBe(`ATT`);

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

  it(`parses discontinuous morphology`, () => {

    // Lakota, Darfur Arabic

    const text = `
    na-wíčha-wa-xʔu̧
    hear-3PL.UND-1SG.ACT-hear
    I hear them

    t-u-r-u-g
    way-PL-way-PL-way
    ways
    `;

    const { utterances: [Lakota, Arabic] } = convert(text);

    const LakotaMorphemes = Lakota.words[0].morphemes;

    const LakotaStem = LakotaMorphemes
    .find(({ transcription }) => transcription === `na…xʔu̧`);

    const ArabicMorphemes = Arabic.words[0].morphemes;

    const ArabicStem = ArabicMorphemes
    .find(({ transcription }) => transcription === `t…r…g`);

    const ArabicTransfix = ArabicMorphemes
    .find(({ transcription }) => transcription === `u…u`);

    expect(LakotaMorphemes.length).toBe(3);
    expect(LakotaStem.gloss).toBe(`hear`);
    expect(ArabicMorphemes.length).toBe(2);
    expect(ArabicStem.gloss).toBe(`way`);
    expect(ArabicTransfix.gloss).toBe(`PL`);

  });

  it(`may group multiple words with [square brackets]`, () => {

    const text = `
    waxdungu qasi
    [one day] man
    one day a man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.transcription).toBe(`waxdungu`);
    expect(word.gloss).toBe(`one day`);

  });

});
