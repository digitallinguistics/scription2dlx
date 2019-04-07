/**
 * This test suite applies tests to the metadata header
 */

const convert = require(`../scription2dlx`);

describe(`metadata header`, () => {

  it(`must be in YAML (or JSON) format`, () => {

    const text = `
    ---
    How the world began
    ---
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  it(`must not be empty`, () => {

    const text = `
    ---
    ---
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  it(`must have a "title" property`, () => {

    const text = `
    ---
    abbreviation: A1
    ---
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  it(`must not have an "utterances" property`, () => {

    const text = `
    ---
    title: How the world began
    utterances:
      - waxdungu qasi
        one day a man
    ---
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

  it(`may have other properties than "title"`, () => {

    const text = `
    ---
    title:        How the world began
    abbreviation: A1
    ---
    `;

    const test = () => convert(text);

    expect(test).not.toThrow();

  });

  it(`must be a valid DLx text schema`, () => {

    const text = `
    ---
    title: How the world began
    abbreviation: ^
    ---
    `;

    const test = () => convert(text);

    expect(test).toThrow();

  });

});
