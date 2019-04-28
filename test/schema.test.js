/**
 * This file applies tests for the interlinear gloss schema
 */

const convert = require(`../scription2dlx`);

describe(`interlinear gloss schema`, () => {

  it(`must have backslash codes for all lines if there is a backslash code on any line`, () => {

    const text = `
    \\trs Waxdungu qasi,
    one day a man
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  xit(`infers the interlinear gloss schema from the first utterance`, () => {

    const transcript = `Waxdungu qasi,`;

    const text = `
    ---
    title: How the world began
    ---
    \\trs ${transcript}
    \\tln One day a man,

    \\${transcript}
    \\One day a man,
    `;

    const { utterances: [, utterance] } = convert(text);

    expect(utterance.transcription).toBe(``);
    expect(utterance.transcript).toBe(transcript);

  });

  xit(`treats a blank first utterance as a schema but not data`);

  xit(`2-line utterances default to transcription + translation`, () => {

    const transcription = `waxdungu qasi`;
    const translation   = `one day a man`;

    const text = `
    ${transcription}
    ${translation}
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription).toBe(transcription);
    expect(utterance.translation).toBe(translation);

  });

  xit(`3-line utterances default to morphemes + glosses + translation`, () => {

    const translation = `one day a man`;

    const text = `
    ---
    title: How the world began
    ---

    waxt-ʔungu qasi
    day-one    man
    ${translation}
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [word] }           = utterance;
    const { morphemes: [morpheme] }   = word;

    expect(morpheme.transcription).toBe(`waxt`);
    expect(morpheme.gloss).toBe(`day`);
    expect(utterance.translation).toBe(translation);

  });

  xit(`may not have the same backslash code appear twice`, () => {

    const text = `
    \\tln   waxdungu qasi
    \\morph waxdungu qasi
    \\gl    one.day  man
    \\tln   one day a man
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  xit(`treats different orthographies / languages as separate backslash codes`, () => {

    const EnglishTranslation = `one day a man`;
    const SpanishTranslation = `un día un hombre`;

    const text = `
    \\txn     waxdungu qasi
    \\tln-eng ${EnglishTranslation}
    \\tln-spa ${SpanishTranslation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.translation.eng).toBe(EnglishTranslation);
    expect(utterance.translation.spa).toBe(SpanishTranslation);

  });

  xit(`must have valid backslash codes (basic Latin characters, hyphens, and underscores only)`, () => {

    const text = `
    \\txn wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln He left his brothers.
    \\nóm Benjamin Paul
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  xit(`should ignore unknown backslash codes`, () => {

    const text = `
    \\txn  wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln  He left his brothers.
    \\swad He left his brothers.
    `;

    const test = () => convert(text);

    expect(test).not.toThrow();

  });

  xit(`allows custom schemas`, () => {

    const transcript  = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;
    const translation = `He left his brothers.`;

    const text = `
    \\trs ${transcript}
    \\tln ${translation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.transcript).toBe(transcript);
    expect(utterance.translation).toBe(translation);

  });

});
