/**
 * This file applies tests for the phonemic transcription line (`\txn`)
 */

import convert from '../../src/index.js';
import expect  from 'expect.js';

describe(`phomemic transcription (utterance)`, () => {

  it(`should remove phonemic slashes`, () => {

    const transcription = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`;

    const text = `
    /${transcription}/
    He left his brothers.
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription.default).to.be(transcription);

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

    expect(transcription.swad).to.be(SwadeshTranscription);
    expect(transcription.apa).to.be(APATranscription);

  });

  it(`should populate from the word transcriptions line`, () => {

    const text = `
    \\w  waxdungu   qasi
    \\m  waxt-qungu qasi
    \\gl day-one    man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription.default).to.be(`waxdungu qasi`);

  });

  it(`removes extraneous whitespace`, () => {

    const text = `
    \\txn waxdungu     qasi
    \\tln one day a man

    \\m waxt-qungu qasi
    \\gl day-one man
    `;

    const { utterances: [u1, u2] } = convert(text);

    expect(u1.transcription.default).to.be(`waxdungu qasi`);
    expect(u2.transcription.default).to.be(``);

  });

  it(`is stripped of emphasis`, () => {

    const transcription = `*waxdungu* qasi`;

    const text = `
    ${transcription}
    one day a man
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.transcription.default.includes(`*`)).to.be(false);

  });

  it(`default orthography`, () => {

    const text = `
    waxdungu qasi
    one day a man
    `;

    const { utterances: [utterance] } = convert(text);
    expect(Object.keys(utterance.transcription)[0]).to.be(`default`);

  });

  it(`option: orthography`, () => {

    const text = `
    waxdungu qasi
    one day a man
    `;

    const { utterances: [utterance] } = convert(text, { orthography: `Mod` });
    expect(Object.keys(utterance.transcription)[0]).to.be(`Mod`);

  });

});
