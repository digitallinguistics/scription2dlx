/**
 * This file applies tests for individual utterances
 */

const convert = require(`../scription2dlx`);

describe(`utterance`, () => {

  it(`treats one extra line as a note line`, () => {

    const noteText = `This is the traditional opening to a story.`;

    const text = `
    waxt-qungu qasi
    day-one    man
    one day a man
    ${noteText}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.notes.length).toBe(1);

    const { notes: [note] } = utterance;
    expect(note.text).toBe(noteText);

  });

  it(`ignores any additional unknown lines beyond the first note line`, () => {

    const text = `
    waxt-qungu qasi
    day-one    man
    one day a man
    This is a note.
    This is another note.
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.notes.length).toBe(1);

  });

  it(`may have backslash codes followed by multiple spaces`, () => {

    const translation = `one day a man`;

    const text = `
    \\morph waxt-qungu qasi
    \\tln   ${translation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.translation).toBe(translation);

  });

  it(`may have backslash codes followed by tabs`, () => {

    const translation = `one day a man`;

    const text = `
    \\morph waxt-qungu qasi
    \\tln\t\t${translation}
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.translation).toBe(translation);

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
