/**
 * This file applies tests for the transcript line
 */

import convert from '../../src/index.mjs';

describe(`transcript`, () => {

  it(`may be in multiple formats`, () => {

    const SwadeshTranscript = `wetkšˊ husˊ na·nča·kamankšˊ wetkˊ hi hokmiʔiˊ`;
    const DFTTranscript     = `wetkš↗ hus↗ na·nča·kamankš↗ wetkˊ hi hokmiʔiˊ↗`;

    const text = `
    \\trs-swad ${SwadeshTranscript}
    \\trs-dft  ${DFTTranscript}
    \\tln      He left his brothers.
    `;

    const { utterances: [utterance] } = convert(text);
    const { transcript }              = utterance;

    expect(transcript.swad).toBe(SwadeshTranscript);
    expect(transcript.dft).toBe(DFTTranscript);

  });

});
