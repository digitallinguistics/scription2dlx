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

    expect(utterance.transcript.default).to.be(transcript);

  });

  it(`removes extra white space`, function() {

    const text = `
    \\trs we  qasi
    \\wlt DET a.man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcript.default).to.be(`we qasi`);

  });

  it(`default orthography`, () => {

    const text = `
    \\trs waxdungu qasi
    \\wlt one.day  a.man
    `;

    const { utterances: [utterance] } = convert(text);
    expect(Object.keys(utterance.transcript)[0]).to.be(`default`);

  });

  it(`option: orthography`, () => {

    const text = `
    \\trs waxdungu qasi
    \\wlt one.day  a.man
    `;

    const { utterances: [utterance] } = convert(text, { orthography: `Mod` });
    expect(Object.keys(utterance.transcript)[0]).to.be(`Mod`);

  });

});
