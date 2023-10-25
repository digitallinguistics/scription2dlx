/**
 * This file applies tests for the phonetic transcription line
 */

import convert from '../../src/index.js';
import expect  from 'expect.js';

describe(`phonetic transcription`, () => {

  it(`should remove phonetic brackets`, () => {

    const transcription = `wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi`;

    const text = `
    \\phon [${transcription}]
    \\tln He left his brothers.
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.phonetic).to.be(transcription);

  });

  it(`may not appear in multiple orthographies`, () => {

    const text = `
    \\phon-ipa  wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi
    \\phon-swad wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi
    \\tln He left his brothers.
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.phonetic).to.be(undefined);
    expect(utterance[`phon-swad`]).to.be(undefined);

  });

  it(`is stripped of emphasis`, () => {

    const phonetic = `waʃtʼunkʼu *ʔasi*`;

    const text = `
    \\phon ${phonetic}
    \\tln  one day a man
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.phonetic.includes(`*`)).to.be(false);

  });

});
