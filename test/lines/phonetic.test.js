/**
 * This file applies tests for the phonetic transcription line
 */

const convert = require(`../../scription2dlx`);

describe(`phonetic transcription`, () => {

  it(`should remove phonetic brackets`, () => {

    const transcription = `wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi`;

    const text = `
    \\phon [${transcription}]
    \\tln He left his brothers.
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.phonetic).toBe(transcription);

  });

  it(`may not appear in multiple orthographies`, () => {

    const text = `
    \\phon-ipa  wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi
    \\phon-swad wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi
    \\tln He left his brothers.
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.phonetic).toBeUndefined();

  });

});
