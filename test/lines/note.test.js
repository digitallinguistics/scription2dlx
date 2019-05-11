/**
 * This file applies tests to the note line (`\n`)
 */

describe(`note`, () => {

  it(`may have source, language, and text`, () => {

    const initials = `DWH`;
    const lang     = `en`;
    const noteText = `Is this utterance past or present tense?`;

    const sampleText = `
    \\n-${lang} ${initials}: ${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(source).toBe(initials);
    expect(language).toBe(lang);
    expect(text).toBe(noteText);

  });

  it(`must use a valid ISO language tag for the language`, () => {

    const text = `
    \\n-en2 This is a note.
    `;

    try {
      convert(text);
      fail(`Error not thrown.`);
    } catch (e) {
      expect(e.message.includes(`IETF`)).toBe(true);
    }

  });

  it(`may have a source and text`, () => {

    const initials = `DWH`;
    const noteText = `Is this utterance past or present tense?`;

    const sampleText = `
    \\n ${initials}: ${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(language).toBe(`en`);
    expect(source).toBe(initials);
    expect(text).toBe(noteText);

  });

  it(`may have only text`, () => {

    const noteText = `Is this utterance past or present tense?`;

    const sampleText = `
    \\n ${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(language).toBe(`en`);
    expect(source).toBeUndefined();
    expect(text).toBe(noteText);

  });

  it(`may have only a language and text`, () => {

    const lang     = `en`;
    const noteText = `Is this utterance past or present tense?`;

    const sampleText = `
    \\n-${lang} ${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(language).toBe(lang);
    expect(source).toBeUndefined();
    expect(text).toBe(noteText);

  });

  it(`assumes the language of the note is English if not specified`, () => {

    const noteText = `This is a note.`;

    const sampleText = `
    \\n ${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(language).toBe(`en`);
    expect(source).toBeUndefined();
    expect(text).toBe(noteText);

  });

  it(`removes white space before and after the colon`, () => {

    const initials = `DWH`;
    const lang     = `en`;
    const noteText = `This is a note.`;

    const sampleText = `
    \\n-${lang} ${initials} : ${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(language).toBe(lang);
    expect(source).toBe(initials);
    expect(text).toBe(noteText);

  });

  it(`may have multiple white spaces or tabs after the colon`, () => {

    const initials = `DWH`;
    const noteText = `This is a note.`;

    const sampleText = `
    \\n ${initials}:\t \t${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(language).toBe(`en`);
    expect(source).toBe(initials);
    expect(text).toBe(noteText);

  });

  it(`does not recognize colons in the note text`, () => {

    const sampleText = `
    \\n What do you think: choice one or choice two?
    `;

    const { utterances: [{ notes: [{ language, source }] }] } = convert(sampleText);

    expect(language).toBe(`en`);
    expect(source).toBe(`What do you think`);

  });

  it(`is not stripped of emphasis`, () => {

    const noteText = `This note has *emphasis*.`;

    const text = `
    \\txn waxdungu qasi
    \\tln one day a man
    \\n   DWH: ${noteText}
    `;

    const { utterances: [{ notes: [note] }] } = convert(text);

    expect(note.text).toBe(noteText);

  });

});
