/**
 * This file applies tests to the note line (`\n`)
 */

import convert from '../../src/index.mjs';

describe(`note`, () => {

  it(`may have source, language, and text`, () => {

    const initials = `DWH`;
    const lang     = `en`;
    const noteText = `Is this utterance past or present tense?`;

    const sampleText = `
    \\n ${initials} (${lang}): ${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(source).toBe(initials);
    expect(language).toBe(lang);
    expect(text).toBe(noteText);

  });

  it(`must use a valid ISO language tag for the language`, () => {

    const text = `
    \\n (en2): This is a note.
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
    \\n (${lang}): ${noteText}
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

  it(`removes white space before the colon`, () => {

    const initials = `DWH`;
    const lang     = `en`;
    const noteText = `This is a note.`;

    const sampleText = `
    \\n ${initials} (${lang}) : ${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(language).toBe(`en`);
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

  it(`allows colons in the note text`, () => {

    const noteText = `What do you think: choice one or choice two?`;

    const sampleText = `
    \\n ${noteText}
    `;

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText);

    expect(language).toBe(`en`);
    expect(source).toBeUndefined();
    expect(text).toBe(noteText);

  });

});
