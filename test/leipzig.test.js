import convert from '../src/index.js';
import expect  from 'expect.js';

describe(`Leipzig glossing rules`, () => {

  it(`⟨ ⟩ parses spaces (word separator)`, function() {

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

  it(`⟨-⟩ parses hyphens (morpheme separator)`, function() {

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

  it(`⟨=⟩ parses equal signs (clitic boundary)`, function() {

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

  it(`⟨.⟩ parses periods (multi-word glosses)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a.gloss a.gloss-SUFFIX
    `;

    const { utterances: [utterance] }        = convert(text);
    const { words: [w1, w2] } = utterance;

    expect(w1.analysis).to.be(`word`);
    expect(w1.gloss).to.be(`a.gloss`);
    expect(w2.analysis).to.be(`morpheme-suffix`);
    expect(w2.gloss).to.be(`a.gloss-SUFFIX`);

    const { morphemes: [m1, m2] } = w2;

    expect(m1.transcription).to.be(`morpheme`);
    expect(m1.gloss).to.be(`a.gloss`);
    expect(m2.transcription).to.be(`suffix`);
    expect(m2.gloss).to.be(`SUFFIX`);

  });

});
