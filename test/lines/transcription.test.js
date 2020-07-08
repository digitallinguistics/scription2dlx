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

    expect(utterance.transcription).to.be(transcription);

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

    expect(utterance.transcription).to.be(`waxdungu qasi`);

  });

  it(`removes extraneous whitespace`, () => {

    const text = `
    \\txn waxdungu     qasi
    \\tln one day a man
    `;

    const { utterances: [utterance] } = convert(text);

    expect(utterance.transcription).to.be(`waxdungu qasi`);

  });

  it(`is stripped of emphasis`, () => {

    const transcription = `waxdungu qasi`;

    const text = `
    ${transcription}
    one day a man
    `;

    const { utterances: [utterance] } = convert(text);
    expect(utterance.transcription.includes(`*`)).to.be(false);

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

    expect(word.transcription.mod).to.be(mod);
    expect(word.transcription.swad).to.be(swad);

  });

  it(`is stripped of emphasis`, () => {

    const text = `
    \\w *waxdungu* qasi
    \\tln one day a man
    `;

    const { utterances: [{ words: [word] }] } = convert(text);

    expect(word.transcription).to.be(`waxdungu`);

  });

});
