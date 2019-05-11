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

  it(`parses clitics`, () => {

    const text = `
    stem=A B=stem=C
    stem=a b=stem=b
    translation
    `;

    const { utterances: [{ words: [w1, w2] }] } = convert(text);

    expect(w1.morphemes[1].transcription).toBe(`A`);
    expect(w1.morphemes[1].gloss).toBe(`a`);

    const discontinuousMorpheme = w2.morphemes.find(w => w.gloss === `b`);

    expect(discontinuousMorpheme.transcription).toBe(`B…C`);

  });

  it(`may group multiple words with [square brackets]`, () => {

    const text = `
    waxdungu  qasi
    [one day] man
    one day a man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.analysis).toBe(`waxdungu`);
    expect(word.gloss).toBe(`[one day]`);

  });

  /* eslint-disable max-statements */
  it(`tokenizes words and morphemes correctly`, () => {

    const text = `
    \\m  a~b     c           [d f]    []
    \\gl one~two [NAME NAME] compound null
    `;

    const { utterances: [{ words: [w1, w2, w3, w4] }] } = convert(text);

    // Word 1

    expect(w1.analysis).toBe(`a~b`);
    expect(w1.gloss).toBe(`one~two`);

    const [w1m1, w1m2] = w1.morphemes;

    expect(w1m1.transcription).toBe(`a`);
    expect(w1m1.gloss).toBe(`one`);

    expect(w1m2.transcription).toBe(`b`);
    expect(w1m2.gloss).toBe(`two`);

    // Word 2

    expect(w2.analysis).toBe(`c`);
    expect(w2.gloss).toBe(`[NAME NAME]`);

    const [w2m] = w2.morphemes;

    expect(w2m.transcription).toBe(`c`);
    expect(w2m.gloss).toBe(`[NAME NAME]`);

    // Word 3

    expect(w3.analysis).toBe(`[d f]`);
    expect(w3.gloss).toBe(`compound`);

    const [w3m] = w3.morphemes;

    expect(w3m.transcription).toBe(`[d f]`);
    expect(w3m.gloss).toBe(`compound`);

    // Word 4

    expect(w4.analysis).toBe(`[]`);
    expect(w4.gloss).toBe(`null`);

    const [w4m] = w4.morphemes;

    expect(w4m.transcription).toBe(`[]`);
    expect(w4m.gloss).toBe(`null`);

  });
  /* eslint-enable max-statements */

  it(`populates both word and morpheme glosses`, () => {

    const text = `
    \\m  waxt-qungu qasi
    \\gl day-one    man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.gloss).toBe(`day-one`);

    const { morphemes: [morpheme] } = word;

    expect(morpheme.gloss).toBe(`day`);

  });

  it(`is stripped of emphasis`, () => {

    const wordGloss = `waxt-qungu`;

    const text = `
    \\m ${wordGloss} qasi
    \\gl *waxt*-qungu qasi
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.gloss).toBe(wordGloss);

  });

});
