/**
 * This file applies tests for the interlinear gloss schema
 */

const convert = require(`../scription2dlx`);

describe(`interlinear gloss schema`, () => {

  it(`infers the interlinear gloss schema from the first utterance`);

  it(`treats a blank first utterance as a schema but not data`);

  it(`3-line utterances default to morphemes + glosses + translation`, () => {

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

  it(`2-line utterances default to transcription + translation`, () => {

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

  it(`may not have the same backslash code appear twice`, () => {

    const text = `
    \\tln
    \\morph
    \\gl
    \\tln
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  it(`treats different orthographies / languages as separate backslash codes`, () => {

    const EnglishTranslation = `one day a man`;
    const SpanishTranslation = `un día un hombre`;

    const text = `
    \\txn
    \\tln-eng
    \\tln-spa

    waxdungu qasi
    ${EnglishTranslation}
    ${SpanishTranslation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.translation.eng).toBe(EnglishTranslation);
    expect(utterance.translation.spa).toBe(SpanishTranslation);

  });

  it(`must have valid backslash codes (ASCII characters)`, () => {

    const text = `
    \\txn
    \\tln
    \\nóm
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  it(`should ignore unknown backslash codes`, () => {

    const text = `
    \\txn
    \\tln
    \\swad
    `;

    const test = () => convert(text);

    expect(test).not.toThrow();

  });

  it(`allows custom schemas`, () => {

    const transcript  = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;
    const translation = `He left his brothers.`;

    const text = `
    \\trs
    \\tln

    ${transcript}
    ${translation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.transcript).toBe(transcript);
    expect(utterance.translation).toBe(translation);

  });

});
