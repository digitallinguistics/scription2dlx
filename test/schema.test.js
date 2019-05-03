/**
 * This file applies tests for the interlinear gloss schema
 */

describe(`interlinear gloss schema`, () => {

  it(`must have valid backslash codes (basic Latin characters and hyphens only)`, () => {

    const text1 = `
    \\txn wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln He left his brothers.
    \\nóm Benjamin Paul
    `;

    const text2 = `
    \\txn     wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln     He left his brothers.
    \\name_en Benjamin Paul
    `;

    const test1 = () => convert(text1);
    const test2 = () => convert(text2);

    expect(test1).toThrow();
    expect(test2).toThrow();

  });

  it(`may not have the same backslash code appear twice`, () => {

    const text = `
    \\tln waxdungu qasi
    \\m   waxdungu qasi
    \\gl  one.day  man
    \\tln one day a man
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  it(`treats different orthographies / languages as separate backslash codes`, () => {

    const EnglishTranslation = `one day a man`;
    const SpanishTranslation = `un día un hombre`;

    const text = `
    \\txn    waxdungu qasi
    \\tln-en ${EnglishTranslation}
    \\tln-es ${SpanishTranslation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.translation.en).toBe(EnglishTranslation);
    expect(utterance.translation.es).toBe(SpanishTranslation);

  });

  it(`must have backslash codes for all lines if there is a backslash code on any line`, () => {

    const text = `
    \\trs Waxdungu qasi,
    one day a man
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  it(`should process unknown backslash codes`, () => {

    const Swadesh = `He left his brothers.`;

    const text = `
    \\txn  wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln  He left his brothers.
    \\swad ${Swadesh}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.swad).toBe(Swadesh);

  });

  it(`infers the interlinear gloss schema from the first utterance`, () => {

    const transcript = `Waxdungu qasi,`;

    const text = `
    ---
    title: How the world began
    ---
    \\trs ${transcript}
    \\tln One day a man,

    ${transcript}
    One day a man,
    `;

    const { utterances: [, utterance] } = convert(text);

    expect(utterance.transcription).toBe(``);
    expect(utterance.transcript).toBe(transcript);

  });

  it(`treats a blank first utterance as a schema but not data`, () => {

    const transcript  = `Waxdungu qasi,`;
    const translation = `One day a man,`;

    const text = `
    ---
    title: How the world began
    ---
    \\trs
    \\tln

    ${transcript}
    ${translation}
    `;

    const { utterances: [u1, u2] } = convert(text);

    expect(u1.transcript).toBe(transcript);
    expect(u1.translation).toBe(translation);
    expect(u2).toBeUndefined();

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

  it(`4-line utterances to default to transcription + morphemes + glosses + translation`, () => {

    const transcription = `waxdungu qasi`;
    const translation   = `one day a man`;

    const text = `
    ${transcription}
    waxt-qungu qasi
    day-one    man
    ${translation}
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription).toBe(transcription);
    expect(utterance.translation).toBe(translation);
    expect(utterance.words.length).toBe(2);

  });

  it(`5-line utterances default to transcription + morphemes + glosses + translation + note`, () => {

    const transcription = `waxdungu qasi`;
    const translation   = `one day a man`;
    const noteText          = `This is the traditional opening to a story.`;

    const text = `
    ${transcription}
    waxt-qungu qasi
    day-one    man
    ${translation}
    ${noteText}
    `;

    const { utterances: [utterance] } = convert(text);
    const { notes: [note] } = utterance;

    expect(utterance.transcription).toBe(transcription);
    expect(utterance.words.length).toBe(2);
    expect(utterance.translation).toBe(translation);
    expect(utterance.notes.length).toBe(1);
    expect(note.text).toBe(noteText);

  });

  it(`allows custom schemas`, () => {

    const transcript  = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;
    const translation = `He left his brothers.`;

    const text = `
    \\trs Waxdungu qasi,
    \\tln One day a man,

    ${transcript}
    ${translation}
    `;

    const { utterances: [, utterance] } = convert(text);
    expect(utterance.transcript).toBe(transcript);
    expect(utterance.translation).toBe(translation);

  });

  it(`treats an extra line as a note line`, () => {

    const noteText = `This is a note.`;

    const text = `
    waxt-qungu qasi
    day-one    man
    one day a man

    naancaakamankx hokmiqi
    brothers       he.left
    he left his brothers
    ${noteText}
    `;

    const { utterances: [, utterance] } = convert(text);
    const { notes: [note] }             = utterance;

    expect(note.text).toBe(noteText);

  });

  it(`treats any additional unknown lines as note lines`, () => {

    const text = `
    waxdungu qasi
    waxt-qungu qasi
    day-one    man
    one day a man
    This is a note.
    This is another note.
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.notes.length).toBe(2);

  });

  it(`may have multiple note lines`, () => {

    const text = `
    \\txn waxdungu qasi
    \\tln one day a man
    \\n   This is the first note.
    \\n   This is the second note.
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.notes.length).toBe(2);

  });

});
