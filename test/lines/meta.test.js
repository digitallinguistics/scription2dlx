/**
 * Tests for utterance-level metadata
 */

fdescribe(`utterance metadata`, () => {

  it(`is ignored by default`, () => {

    const text = `
    # Chitimacha (isolate; Louisiana)
    waxdungu qasi
    one day a man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.metadata).toBeUndefined();

  });

  it(`may be parsed using the "utteranceMetadata" option`);

  it(`only parses the first metadata line`, () => {

    const text = `
    # Chitimacha
    # (isolate; Louisiana)
    waxdungu qasi
    one day a man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.metadata).toBe(`Chitimacha`);

  });

});
