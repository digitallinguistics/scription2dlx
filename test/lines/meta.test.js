/**
 * Tests for utterance-level metadata
 */

import convert from '../../src/index.js';
import expect  from 'expect.js';

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

  it(`does not need a blackslash code when a schema is provided`, () => {

    const meta = `Swahili`;

    const text = `
    # ${meta}
    \\m   ni-na-ku-j-a
    \\gl  1SG.SUBJ-PRES-INF-come-IND
    \\tln I’m coming
    \\t   1.234-5.678
    `;

    const { utterances: [utterance] } = convert(text, { utteranceMetadata: true });

    expect(utterance.metadata).to.be(meta);

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
