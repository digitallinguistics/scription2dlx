/**
 * Tests for utterance-level metadata
 */

describe(`utterance metadata`, () => {

  it(`is ignored by default`, () => {

    const transcription = `waxdungu qasi`;

    const text = `
    # Chitimacha (isolate; Louisiana)
    ${transcription}
    one day a man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription).to.be(transcription);
    expect(utterance.metadata).to.be(undefined);

  });

  it(`may be parsed using the "utteranceMetadata" option`, () => {

    const meta = `Chitimacha (isolate; Louisiana)`;

    const text = `
    # ${meta}
    waxdungu qasi
    one day a man
    `;

    const { utterances: [utterance] } = convert(text, { utteranceMetadata: true });

    expect(utterance.metadata).to.be(meta);

  });

  it(`only parses the first metadata line`, () => {

    const text = `
    # Chitimacha
    # (isolate; Louisiana)
    waxdungu qasi
    one day a man
    `;

    const { utterances: [utterance] } = convert(text, { utteranceMetadata: true });

    expect(utterance.metadata).to.be(`Chitimacha`);

  });

  it(`is not stripped of emphasis`, () => {

    const meta = `*Chitimacha*`;

    const text = `
    # ${meta}
    waxdungu qasi
    one day a man
    `;

    const { utterances: [utterance] } = convert(text, { utteranceMetadata: true });

    expect(utterance.metadata).to.be(meta);

  });

});
