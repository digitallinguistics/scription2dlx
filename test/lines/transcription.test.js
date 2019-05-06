/**
 * This file applies tests for the phonemic transcription line (`\txn`)
 */

describe(`phomemic transcription (utterance)`, () => {

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

  it(`should populate from the word transcriptions line`, () => {

    const text = `
    \\w  waxdungu   qasi
    \\m  waxt-qungu qasi
    \\gl day-one    man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription).toBe(`waxdungu qasi`);

  });

});

describe(`phonemic transcription (word)`, () => {

  it(`may be in multiple orthographies`, () => {

    const mod  = `waxdungu`;
    const swad = `wašdungu`;

    const text = `
    \\w-mod  ${mod}
    \\w-swad ${swad}
    \\m      waxt-qungu
    \\gl     day-one
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.transcription.mod).toBe(mod);
    expect(word.transcription.swad).toBe(swad);

  });

});
