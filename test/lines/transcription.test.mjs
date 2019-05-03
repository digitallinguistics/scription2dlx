/**
 * This file applies tests for the phonemic transcription line (`\txn`)
 */

import convert from '../../src/index.mjs';

describe(`phomemic transcription`, () => {

  it(`should remove phonemic slashes`, () => {

    const transcription = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;

    const text = `
    /${transcription}/
    He left his brothers.
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription).toBe(transcription);

  });

  it(`may have multiple orthographies`, () => {

    const SwadeshTranscription = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;
    const APATranscription     = `wetkš hus naːnčaːkamankš wetk hi hokmiʔi`;

    const text = `
    \\txn-swad ${SwadeshTranscription}
    \\txn-apa  ${APATranscription}
    \\tln      He left his brothers.
    `;

    const { utterances: [utterance] } = convert(text);
    const { transcription } = utterance;

    expect(transcription.swad).toBe(SwadeshTranscription);
    expect(transcription.apa).toBe(APATranscription);

  });

});
