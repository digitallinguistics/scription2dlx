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

  xit(`may have a source and text`, () => {

    const text = `
    \\n DWH: Is this utterance past or present tense?
    `;

  });

  it(`may have only text`);

  xit(`may not have only a language and text`, () => {

    const text = `
    \\n -eng: Is this utterance past or present tense?
    `;

  });

  it(`must only use basic alphanumeric characters for the source`);

  it(`must only use basic alphanumeric characters for the language/orthography`);

  it(`assumes the language of the note is English if not specified`);

  xit(`removes white space before the colon`, () => {

    const text = `
    \\n DWH-eng : This is a note.
    `;

  });

  xit(`may have multiple white spaces or tabs after the colon`, () => {

    const text = `
    \\n DWH:\t \tThis is a note.
    `;

  });

  it(`allows colons in the note text`);

});
