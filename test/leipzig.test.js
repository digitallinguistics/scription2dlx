import convert from '../src/index.js';
import expect  from 'expect.js';

describe(`Leipzig glossing rules`, () => {

  it(`converts spaces (word separator) ⟨ ⟩`, function() {

    const text = `
    \\m  word word
    \\gl gloss gloss
    `;

    const { utterances: [utterance] } = convert(text);
    const { words }                   = utterance;
    const [word]                      = words;

    expect(words).to.have.length(2);
    expect(word.analysis).to.be(`word`);
    expect(word.gloss).to.be(`gloss`);

  });

  it(`converts hyphens (morpheme separator) ⟨-⟩`, function() {

    const text = `
    \\m  a-b
    \\gl A-B
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [word] }           = utterance;
    const { morphemes }               = word;
    const [morpheme]                  = morphemes;

    expect(morphemes).to.have.length(2);
    expect(morpheme.transcription).to.be(`a`);
    expect(morpheme.gloss).to.be(`A`);

  });

  it(`converts equal signs (clitic boundary)`, function() {

    const text = `
    \\m  word=clitic
    \\gl word=CLITIC
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [word] }           = utterance;
    const { morphemes }               = word;
    const [, morpheme]                = morphemes;

    expect(morphemes).to.have.length(2);
    expect(morpheme.transcription).to.be(`clitic`);
    expect(morpheme.gloss).to.be(`CLITIC`);

  });

});
