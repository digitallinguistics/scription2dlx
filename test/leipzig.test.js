import convert from '../src/index.js';
import expect  from 'expect.js';

describe(`Leipzig glossing rules`, () => {

  it.only(`⟨ ⟩ parses spaces (word separator)`, function() {

    const text = `
    \\m  word word
    \\gl gloss gloss
    `;

    const { utterances: [utterance] } = convert(text);
    const { words }                   = utterance;
    const [word]                      = words;

    expect(words).to.have.length(2);
    expect(word.analysis.default).to.be(`word`);
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
    expect(morpheme.transcription.default).to.be(`a`);
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
    expect(morpheme.transcription.default).to.be(`clitic`);
    expect(morpheme.gloss).to.be(`CLITIC`);

  });

  it(`⟨.⟩ parses periods (multi-word glosses)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a.gloss a.gloss-SUFFIX
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [w1, w2] } = utterance;

    expect(w1.analysis.default).to.be(`word`);
    expect(w1.gloss).to.be(`a.gloss`);
    expect(w2.analysis.default).to.be(`morpheme-suffix`);
    expect(w2.gloss).to.be(`a.gloss-SUFFIX`);

    const { morphemes: [m1, m2] } = w2;

    expect(m1.transcription.default).to.be(`morpheme`);
    expect(m1.gloss).to.be(`a.gloss`);
    expect(m2.transcription.default).to.be(`suffix`);
    expect(m2.gloss).to.be(`SUFFIX`);

  });

  it(`⟨_⟩ parses underscores (non-segmentable multi-word glosses)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a_gloss a_gloss-SUFFIX
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [w1, w2] } = utterance;

    expect(w1.analysis.default).to.be(`word`);
    expect(w1.gloss).to.be(`a_gloss`);
    expect(w2.analysis.default).to.be(`morpheme-suffix`);
    expect(w2.gloss).to.be(`a_gloss-SUFFIX`);

    const { morphemes: [m1, m2] } = w2;

    expect(m1.transcription.default).to.be(`morpheme`);
    expect(m1.gloss).to.be(`a_gloss`);
    expect(m2.transcription.default).to.be(`suffix`);
    expect(m2.gloss).to.be(`SUFFIX`);

  });

  it(`⟨;⟩ parses semicolons (portmanteaus)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a;gloss a;gloss-SUFFIX
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [w1, w2] } = utterance;

    expect(w1.analysis.default).to.be(`word`);
    expect(w1.gloss).to.be(`a;gloss`);
    expect(w2.analysis.default).to.be(`morpheme-suffix`);
    expect(w2.gloss).to.be(`a;gloss-SUFFIX`);

    const { morphemes: [m1, m2] } = w2;

    expect(m1.transcription.default).to.be(`morpheme`);
    expect(m1.gloss).to.be(`a;gloss`);
    expect(m2.transcription.default).to.be(`suffix`);
    expect(m2.gloss).to.be(`SUFFIX`);

  });

  it(`⟨:⟩ parses colons (irrelevant morpheme boundaries)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a:gloss a:gloss-SUFFIX
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [w1, w2] } = utterance;

    expect(w1.analysis.default).to.be(`word`);
    expect(w1.gloss).to.be(`a:gloss`);
    expect(w2.analysis.default).to.be(`morpheme-suffix`);
    expect(w2.gloss).to.be(`a:gloss-SUFFIX`);

    const { morphemes: [m1, m2] } = w2;

    expect(m1.transcription.default).to.be(`morpheme`);
    expect(m1.gloss).to.be(`a:gloss`);
    expect(m2.transcription.default).to.be(`suffix`);
    expect(m2.gloss).to.be(`SUFFIX`);

  });

  it(`⟨\\⟩ parses colons (irrelevant morpheme boundaries)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a\\gloss a\\gloss-SUFFIX
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [w1, w2] } = utterance;

    expect(w1.analysis.default).to.be(`word`);
    expect(w1.gloss).to.be(`a\\gloss`);
    expect(w2.analysis.default).to.be(`morpheme-suffix`);
    expect(w2.gloss).to.be(`a\\gloss-SUFFIX`);

    const { morphemes: [m1, m2] } = w2;

    expect(m1.transcription.default).to.be(`morpheme`);
    expect(m1.gloss).to.be(`a\\gloss`);
    expect(m2.transcription.default).to.be(`suffix`);
    expect(m2.gloss).to.be(`SUFFIX`);

  });

  it(`⟨>⟩ parses right angle brackets (bivalent person markers)`, function() {

    const text = `
    \\m stem-suffix
    \\gl gl-1>3
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [word] }           = utterance;
    const { morphemes }               = word;
    const [m1, m2]                    = morphemes;

    expect(m1.transcription.default).to.be(`stem`);
    expect(m1.gloss).to.be(`gl`);
    expect(m2.transcription.default).to.be(`suffix`);
    expect(m2.gloss).to.be(`1>3`);

  });

  it(`⟨[]⟩ parses square brackets (non-overt elements)`, function() {

    const text = `
    puer
    boy[NOM.SG]
    boy
    `;
    const { utterances: [utterance] } = convert(text);
    const { words: [word] }           = utterance;
    const { morphemes }               = word;

    expect(utterance.translation).to.be(`boy`);
    expect(word.analysis.default).to.be(`puer`);
    expect(morphemes).to.have.length(1);

    const [morpheme] = morphemes;

    expect(morpheme.transcription.default).to.be(`puer`);
    expect(morpheme.gloss).to.be(`boy[NOM.SG]`);

  });

  it(`⟨()⟩ parses parentheses (inherent categories)`, function() {

    const text = `
    taa
    light(CL9)
    light
    `;

    const { utterances: [utterance] } = convert(text);
    const { words: [word] }           = utterance;
    const { morphemes }               = word;

    expect(utterance.translation).to.be(`light`);
    expect(word.analysis.default).to.be(`taa`);
    expect(morphemes).to.have.length(1);

    const [morpheme] = morphemes;

    expect(morpheme.transcription.default).to.be(`taa`);
    expect(morpheme.gloss).to.be(`light(CL9)`);

  });

  it(`⟨~⟩ parses tildes (reduplication)`, function() {

    const text = `
    bibili
    bi~bili
    IPFV~buy
    is buying

    bibili
    DUP~bili
    IPFV~buy
    is buying
    `;

    const { utterances } = convert(text);

    utterances.forEach(u => {

      expect(u.transcription.default).to.be(`bibili`);
      expect(u.translation).to.be(`is buying`);
      expect(u.words).to.have.length(1);

      const [w] = u.words;

      expect(w.morphemes).to.have.length(2);

      const [m1, m2] = w.morphemes;

      expect(m1.gloss).to.be(`IPFV`);
      expect(m2.transcription.default).to.be(`bili`);
      expect(m2.gloss).to.be(`buy`);

    });

    expect(utterances[0].words[0].morphemes[0].transcription.default).to.be(`bi`);
    expect(utterances[1].words[0].morphemes[0].transcription.default).to.be(`DUP`);

  });

});
