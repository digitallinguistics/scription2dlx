/**
 * This file applies tests for the transcript line
 */

import convert from '../../src/index.js';
import expect  from 'expect.js';

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

    expect(transcript.swad).to.be(SwadeshTranscript);
    expect(transcript.dft).to.be(DFTTranscript);

  });

  it(`is not stripped of emphasis`, () => {

    const transcript = `*waxdungu* qasi`;

    const text = `
    \\trs ${transcript}
    \\tln one day a man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcript).to.be(transcript);

  });

  it.only(`removes extra white space`, function() {

    const text = `
    \\trs we  qasi
    \\wlt DET a.man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcript).to.be(`we qasi`);

  });

});
