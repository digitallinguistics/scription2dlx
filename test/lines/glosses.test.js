/**
 * This file applies tests to the gloses line (`\gl`)
 */

import convert from '../../src/index.js';
import expect  from 'expect.js';

describe(`glosses`, () => {

  it(`may be in multiple languages`, () => {

    const text = `
    \\m     waxt-qungu qasi
    \\gl-en day-one man
    \\gl-es día-uno hombre
    `;

    const { utterances: [{ words: [{ morphemes: [morpheme] }] }] } = convert(text);
    expect(morpheme.gloss.en).to.be(`day`);
    expect(morpheme.gloss.es).to.be(`día`);

  });

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\m      waxt-qungu qasi
    \\gl-es1 day-one man
    \\gl-es2 día-uno hombre
    `;

    const test = () => convert(text);

    expect(test).to.throwError(/IETF/u);

  });

  it(`may separate words with one or more white spaces or tabs`, () => {

    const text = `
    \\m  waxt-qungu  qasi
    \\gl day-one\t\t man
    `;

    const test = () => convert(text);

    expect(test).not.to.throwError();

  });

  it(`must be present when the morphemes line is present`, () => {

    const text = `
    \\m   waxt-qungu qasi
    \\tln one day a man
    `;

    const test = () => convert(text);

    expect(test).to.throwError(/glosses/u);

  });

  it(`treats morphemes as grammatical when written in CAPS`, () => {

    const text = `
    \\m  ni-na-ku-pend-a
    \\gl 1SG.SUBJ-PRES-2SG.OBJ-love-IND
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [word] } = utterance;
    const { morphemes: [, morpheme] } = word;

    expect(morpheme.gloss).to.be(`PRES`);

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

    expect(morpheme.gloss).to.be(`ATT`);

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

    expect(TagalogMorphemes[0].transcription).to.be(`um`);
    expect(TagalogMorphemes[0].gloss).to.be(`FOC`);
    expect(TagalogMorphemes[1].transcription).to.be(`bili`);
    expect(TagalogMorphemes[1].gloss).to.be(`buy`);

    const LatinMorphemes = Latin.words[0].morphemes;

    expect(LatinMorphemes[0].transcription).to.be(`reliqu`);
    expect(LatinMorphemes[0].gloss).to.be(`leave`);
    expect(LatinMorphemes[1].transcription).to.be(`n`);
    expect(LatinMorphemes[1].gloss).to.be(`PRS`);

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

    expect(LakotaMorphemes.length).to.be(3);
    expect(LakotaStem.gloss).to.be(`hear`);
    expect(ArabicMorphemes.length).to.be(2);
    expect(ArabicStem.gloss).to.be(`way`);
    expect(ArabicTransfix.gloss).to.be(`PL`);

  });

  it(`parses clitics`, () => {

    const text = `
    stem=A B=stem=C
    stem=a b=stem=b
    translation
    `;

    const { utterances: [{ words: [w1, w2] }] } = convert(text);

    expect(w1.morphemes[1].transcription).to.be(`A`);
    expect(w1.morphemes[1].gloss).to.be(`a`);

    const discontinuousMorpheme = w2.morphemes.find(w => w.gloss === `b`);

    expect(discontinuousMorpheme.transcription).to.be(`B…C`);

  });

  it(`may group multiple words with [square brackets]`, () => {

    const text = `
    waxdungu  qasi
    [one day] man
    one day a man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.analysis).to.be(`waxdungu`);
    expect(word.gloss).to.be(`[one day]`);

  });

  /* eslint-disable max-statements */
  it(`tokenizes words and morphemes correctly`, () => {

    const text = `
    \\m  a~b     c           [d f]    []
    \\gl one~two [NAME NAME] compound null
    `;

    const { utterances: [{ words: [w1, w2, w3, w4] }] } = convert(text);

    // Word 1

    expect(w1.analysis).to.be(`a~b`);
    expect(w1.gloss).to.be(`one~two`);

    const [w1m1, w1m2] = w1.morphemes;

    expect(w1m1.transcription).to.be(`a`);
    expect(w1m1.gloss).to.be(`one`);

    expect(w1m2.transcription).to.be(`b`);
    expect(w1m2.gloss).to.be(`two`);

    // Word 2

    expect(w2.analysis).to.be(`c`);
    expect(w2.gloss).to.be(`[NAME NAME]`);

    const [w2m] = w2.morphemes;

    expect(w2m.transcription).to.be(`c`);
    expect(w2m.gloss).to.be(`[NAME NAME]`);

    // Word 3

    expect(w3.analysis).to.be(`[d f]`);
    expect(w3.gloss).to.be(`compound`);

    const [w3m] = w3.morphemes;

    expect(w3m.transcription).to.be(`[d f]`);
    expect(w3m.gloss).to.be(`compound`);

    // Word 4

    expect(w4.analysis).to.be(`[]`);
    expect(w4.gloss).to.be(`null`);

    const [w4m] = w4.morphemes;

    expect(w4m.transcription).to.be(`[]`);
    expect(w4m.gloss).to.be(`null`);

  });
  /* eslint-enable max-statements */

  it(`populates both word and morpheme glosses`, () => {

    const text = `
    \\m  waxt-qungu qasi
    \\gl day-one    man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.gloss).to.be(`day-one`);

    const { morphemes: [morpheme] } = word;

    expect(morpheme.gloss).to.be(`day`);

  });

  it(`is stripped of emphasis`, () => {

    const wordGloss = `waxt-qungu`;

    const text = `
    \\m ${wordGloss} qasi
    \\gl *waxt*-qungu qasi
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.gloss).to.be(wordGloss);

  });

});
