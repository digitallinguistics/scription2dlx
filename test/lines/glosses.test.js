/**
 * This file applies tests to the gloses line (`\gl`)
 */

import convert from '../../src/index.js';
import { expect }  from 'chai';

describe(`glosses`, () => {

  it(`may be in multiple languages`, () => {

    const text = `
    \\m     waxt-qungu qasi
    \\gl-en day-one man
    \\gl-es día-uno hombre
    `;

    const { utterances: [{ words: [{ morphemes: [morpheme] }] }] } = convert(text);
    expect(morpheme.gloss.en).to.equal(`day`);
    expect(morpheme.gloss.es).to.equal(`día`);

  });

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\m      waxt-qungu qasi
    \\gl-es1 day-one man
    \\gl-es2 día-uno hombre
    `;

    const test = () => convert(text);

    expect(test).to.throw(/IETF/u);

  });

  it(`may separate words with one or more white spaces or tabs`, () => {

    const text = `
    \\m  waxt-qungu  qasi
    \\gl day-one\t\t man
    `;

    const test = () => convert(text);

    expect(test).not.to.throw();

  });

  it(`must be present when the morphemes line is present`, () => {

    const text = `
    \\m   waxt-qungu qasi
    \\tln one day a man
    `;

    const test = () => convert(text);

    expect(test).to.throw(/glosses/u);

  });

  it(`treats morphemes as grammatical when written in CAPS`, () => {

    const text = `
    \\m  ni-na-ku-pend-a
    \\gl 1SG.SUBJ-PRES-2SG.OBJ-love-IND
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [word] } = utterance;
    const { morphemes: [, morpheme] } = word;

    expect(morpheme.gloss).to.equal(`PRES`);

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

    expect(morpheme.gloss).to.equal(`ATT`);

  });

  it(`parses infixes`, () => {

    // Tagalog, Latin

    const text = `
    # Tagalog
    b<um>ili
    <FOC>buy
    buy

    # Latin
    reli<n>qu-ere
    leave<PRS>-INF
    to leave

    # Nuuchahnulth
    \\txn č̓aaxstimcm̓it
    \\m   č̓aːstimc-<x>-m̓i·t
    \\gl  mink-MINK-son.of
    \\tln Son of Mink
    `;

    const { utterances: [Tagalog, Latin, Nuuchahnulth] } = convert(text);

    const TagalogMorphemes = Tagalog.words[0].morphemes;

    expect(TagalogMorphemes[0].transcription.default).to.equal(`um`);
    expect(TagalogMorphemes[0].gloss).to.equal(`FOC`);
    expect(TagalogMorphemes[1].transcription.default).to.equal(`bili`);
    expect(TagalogMorphemes[1].gloss).to.equal(`buy`);

    const LatinMorphemes = Latin.words[0].morphemes;

    expect(LatinMorphemes[0].transcription.default).to.equal(`reliqu`);
    expect(LatinMorphemes[0].gloss).to.equal(`leave`);
    expect(LatinMorphemes[1].transcription.default).to.equal(`n`);
    expect(LatinMorphemes[1].gloss).to.equal(`PRS`);

    const NuuchahnulthMorphemes = Nuuchahnulth.words[0].morphemes;
    const [, m2] = NuuchahnulthMorphemes;

    expect(m2.transcription.default).to.equal(`x`);

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
    .find(({ transcription }) => transcription.default === `na…xʔu̧`);

    const ArabicMorphemes = Arabic.words[0].morphemes;

    const ArabicStem = ArabicMorphemes
    .find(({ transcription }) => transcription.default === `t…r…g`);

    const ArabicTransfix = ArabicMorphemes
    .find(({ transcription }) => transcription.default === `u…u`);

    expect(LakotaMorphemes.length).to.equal(3);
    expect(LakotaStem.gloss).to.equal(`hear`);
    expect(ArabicMorphemes.length).to.equal(2);
    expect(ArabicStem.gloss).to.equal(`way`);
    expect(ArabicTransfix.gloss).to.equal(`PL`);

  });

  it(`parses clitics`, () => {

    const text = `
    stem=A B=stem=C
    stem=a b=stem=b
    translation
    `;

    const { utterances: [{ words: [w1, w2] }] } = convert(text);

    expect(w1.morphemes[1].transcription.default).to.equal(`A`);
    expect(w1.morphemes[1].gloss).to.equal(`a`);

    const discontinuousMorpheme = w2.morphemes.find(w => w.gloss === `b`);

    expect(discontinuousMorpheme.transcription.default).to.equal(`B…C`);

  });

  it(`may group multiple words with [square brackets]`, () => {

    const text = `
    waxdungu  qasi
    [one day] man
    one day a man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.analysis.default).to.equal(`waxdungu`);
    expect(word.gloss).to.equal(`[one day]`);

  });

  /* eslint-disable max-statements */
  it(`tokenizes words and morphemes correctly`, () => {

    const text = `
    \\m  a~b     c           [d f]    []
    \\gl one~two [NAME NAME] compound null
    `;

    const { utterances: [{ words: [w1, w2, w3, w4] }] } = convert(text);

    // Word 1

    expect(w1.analysis.default).to.equal(`a~b`);
    expect(w1.gloss).to.equal(`one~two`);

    const [w1m1, w1m2] = w1.morphemes;

    expect(w1m1.transcription.default).to.equal(`a`);
    expect(w1m1.gloss).to.equal(`one`);

    expect(w1m2.transcription.default).to.equal(`b`);
    expect(w1m2.gloss).to.equal(`two`);

    // Word 2

    expect(w2.analysis.default).to.equal(`c`);
    expect(w2.gloss).to.equal(`[NAME NAME]`);

    const [w2m] = w2.morphemes;

    expect(w2m.transcription.default).to.equal(`c`);
    expect(w2m.gloss).to.equal(`[NAME NAME]`);

    // Word 3

    expect(w3.analysis.default).to.equal(`[d f]`);
    expect(w3.gloss).to.equal(`compound`);

    const [w3m] = w3.morphemes;

    expect(w3m.transcription.default).to.equal(`[d f]`);
    expect(w3m.gloss).to.equal(`compound`);

    // Word 4

    expect(w4.analysis.default).to.equal(`[]`);
    expect(w4.gloss).to.equal(`null`);

    const [w4m] = w4.morphemes;

    expect(w4m.transcription.default).to.equal(`[]`);
    expect(w4m.gloss).to.equal(`null`);

  });
  /* eslint-enable max-statements */

  it(`populates both word and morpheme glosses`, () => {

    const text = `
    \\m  waxt-qungu qasi
    \\gl day-one    man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.gloss).to.equal(`day-one`);

    const { morphemes: [morpheme] } = word;

    expect(morpheme.gloss).to.equal(`day`);

  });

  it(`is stripped of emphasis`, () => {

    const wordGloss = `waxt-qungu`;

    const text = `
    \\m ${wordGloss} qasi
    \\gl *waxt*-qungu qasi
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.gloss).to.equal(wordGloss);

  });

});
