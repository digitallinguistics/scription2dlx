/**
 * This file applies tests to the note line (`\n`)
 */

const convert = require(`../../scription2dlx`);

describe(`note`, () => {

  it(`may have source, language, and text`, () => {

    const text = `
    \\n DWH-eng: Is this utterance past or present tense?
    `;

  });

  it(`may have a source and text`, () => {

    const text = `
    \\n DWH: Is this utterance past or present tense?
    `;

  });

  it(`may have only text`);

  it(`may not have only a language and text`, () => {

    const text = `
    \\n -eng: Is this utterance past or present tense?
    `;

  });

  it(`must only use ASCII letters and numbers for the source`);

  it(`must only use ASCII letters and numbers for the language/orthography`);

  it(`assumes the language of the note is English if not specified`);

  it(`removes white space before the colon`, () => {

    const text = `
    \\n DWH-eng : This is a note.
    `;

  });

  it(`may have multiple white spaces or tabs after the colon`, () => {

    const text = `
    \\n DWH:\t \tThis is a note.
    `;

  });

});
