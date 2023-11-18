import convert from '../src/index.js'
import { expect }  from 'chai'

describe(`Leipzig glossing rules`, () => {

  it(`⟨ ⟩ parses spaces (word separator)`, function() {

    const text = `
    \\m  word word
    \\gl gloss gloss
    `

    const { utterances: [utterance] } = convert(text)
    const { words }                   = utterance
    const [word]                      = words

    expect(words).to.have.length(2)
    expect(word.analysis.default).to.equal(`word`)
    expect(word.gloss).to.equal(`gloss`)

  })

  it(`⟨-⟩ parses hyphens (morpheme separator)`, function() {

    const text = `
    \\m  a-b
    \\gl A-B
    `

    const { utterances: [utterance] } = convert(text)
    const { words: [word] }           = utterance
    const { morphemes }               = word
    const [morpheme]                  = morphemes

    expect(morphemes).to.have.length(2)
    expect(morpheme.transcription.default).to.equal(`a`)
    expect(morpheme.gloss).to.equal(`A`)

  })

  it(`⟨=⟩ parses equal signs (clitic boundary)`, function() {

    const text = `
    \\m  word=clitic
    \\gl word=CLITIC
    `

    const { utterances: [utterance] } = convert(text)
    const { words: [word] }           = utterance
    const { morphemes }               = word
    const [, morpheme]                = morphemes

    expect(morphemes).to.have.length(2)
    expect(morpheme.transcription.default).to.equal(`clitic`)
    expect(morpheme.gloss).to.equal(`CLITIC`)

  })

  it(`⟨.⟩ parses periods (multi-word glosses)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a.gloss a.gloss-SUFFIX
    `

    const { utterances: [utterance] } = convert(text)
    const { words: [w1, w2] } = utterance

    expect(w1.analysis.default).to.equal(`word`)
    expect(w1.gloss).to.equal(`a.gloss`)
    expect(w2.analysis.default).to.equal(`morpheme-suffix`)
    expect(w2.gloss).to.equal(`a.gloss-SUFFIX`)

    const { morphemes: [m1, m2] } = w2

    expect(m1.transcription.default).to.equal(`morpheme`)
    expect(m1.gloss).to.equal(`a.gloss`)
    expect(m2.transcription.default).to.equal(`suffix`)
    expect(m2.gloss).to.equal(`SUFFIX`)

  })

  it(`⟨_⟩ parses underscores (non-segmentable multi-word glosses)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a_gloss a_gloss-SUFFIX
    `

    const { utterances: [utterance] } = convert(text)
    const { words: [w1, w2] } = utterance

    expect(w1.analysis.default).to.equal(`word`)
    expect(w1.gloss).to.equal(`a_gloss`)
    expect(w2.analysis.default).to.equal(`morpheme-suffix`)
    expect(w2.gloss).to.equal(`a_gloss-SUFFIX`)

    const { morphemes: [m1, m2] } = w2

    expect(m1.transcription.default).to.equal(`morpheme`)
    expect(m1.gloss).to.equal(`a_gloss`)
    expect(m2.transcription.default).to.equal(`suffix`)
    expect(m2.gloss).to.equal(`SUFFIX`)

  })

  it(`⟨;⟩ parses semicolons (portmanteaus)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a;gloss a;gloss-SUFFIX
    `

    const { utterances: [utterance] } = convert(text)
    const { words: [w1, w2] } = utterance

    expect(w1.analysis.default).to.equal(`word`)
    expect(w1.gloss).to.equal(`a;gloss`)
    expect(w2.analysis.default).to.equal(`morpheme-suffix`)
    expect(w2.gloss).to.equal(`a;gloss-SUFFIX`)

    const { morphemes: [m1, m2] } = w2

    expect(m1.transcription.default).to.equal(`morpheme`)
    expect(m1.gloss).to.equal(`a;gloss`)
    expect(m2.transcription.default).to.equal(`suffix`)
    expect(m2.gloss).to.equal(`SUFFIX`)

  })

  it(`⟨:⟩ parses colons (irrelevant morpheme boundaries)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a:gloss a:gloss-SUFFIX
    `

    const { utterances: [utterance] } = convert(text)
    const { words: [w1, w2] } = utterance

    expect(w1.analysis.default).to.equal(`word`)
    expect(w1.gloss).to.equal(`a:gloss`)
    expect(w2.analysis.default).to.equal(`morpheme-suffix`)
    expect(w2.gloss).to.equal(`a:gloss-SUFFIX`)

    const { morphemes: [m1, m2] } = w2

    expect(m1.transcription.default).to.equal(`morpheme`)
    expect(m1.gloss).to.equal(`a:gloss`)
    expect(m2.transcription.default).to.equal(`suffix`)
    expect(m2.gloss).to.equal(`SUFFIX`)

  })

  it(`⟨\\⟩ parses colons (irrelevant morpheme boundaries)`, function() {

    const text = `
    \\m word morpheme-suffix
    \\gl a\\gloss a\\gloss-SUFFIX
    `

    const { utterances: [utterance] } = convert(text)
    const { words: [w1, w2] } = utterance

    expect(w1.analysis.default).to.equal(`word`)
    expect(w1.gloss).to.equal(`a\\gloss`)
    expect(w2.analysis.default).to.equal(`morpheme-suffix`)
    expect(w2.gloss).to.equal(`a\\gloss-SUFFIX`)

    const { morphemes: [m1, m2] } = w2

    expect(m1.transcription.default).to.equal(`morpheme`)
    expect(m1.gloss).to.equal(`a\\gloss`)
    expect(m2.transcription.default).to.equal(`suffix`)
    expect(m2.gloss).to.equal(`SUFFIX`)

  })

  it(`⟨>⟩ parses right angle brackets (bivalent person markers)`, function() {

    const text = `
    \\m stem-suffix
    \\gl gl-1>3
    `

    const { utterances: [utterance] } = convert(text)
    const { words: [word] }           = utterance
    const { morphemes }               = word
    const [m1, m2]                    = morphemes

    expect(m1.transcription.default).to.equal(`stem`)
    expect(m1.gloss).to.equal(`gl`)
    expect(m2.transcription.default).to.equal(`suffix`)
    expect(m2.gloss).to.equal(`1>3`)

  })

  it(`⟨[]⟩ parses square brackets (non-overt elements)`, function() {

    const text = `
    puer
    boy[NOM.SG]
    boy
    `
    const { utterances: [utterance] } = convert(text)
    const { words: [word] }           = utterance
    const { morphemes }               = word

    expect(utterance.translation).to.equal(`boy`)
    expect(word.analysis.default).to.equal(`puer`)
    expect(morphemes).to.have.length(1)

    const [morpheme] = morphemes

    expect(morpheme.transcription.default).to.equal(`puer`)
    expect(morpheme.gloss).to.equal(`boy[NOM.SG]`)

  })

  it(`⟨()⟩ parses parentheses (inherent categories)`, function() {

    const text = `
    taa
    light(CL9)
    light
    `

    const { utterances: [utterance] } = convert(text)
    const { words: [word] }           = utterance
    const { morphemes }               = word

    expect(utterance.translation).to.equal(`light`)
    expect(word.analysis.default).to.equal(`taa`)
    expect(morphemes).to.have.length(1)

    const [morpheme] = morphemes

    expect(morpheme.transcription.default).to.equal(`taa`)
    expect(morpheme.gloss).to.equal(`light(CL9)`)

  })

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
    `

    const { utterances } = convert(text)

    utterances.forEach(u => {

      expect(u.transcription.default).to.equal(`bibili`)
      expect(u.translation).to.equal(`is buying`)
      expect(u.words).to.have.length(1)

      const [w] = u.words

      expect(w.morphemes).to.have.length(2)

      const [m1, m2] = w.morphemes

      expect(m1.gloss).to.equal(`IPFV`)
      expect(m2.transcription.default).to.equal(`bili`)
      expect(m2.gloss).to.equal(`buy`)

    })

    expect(utterances[0].words[0].morphemes[0].transcription.default).to.equal(`bi`)
    expect(utterances[1].words[0].morphemes[0].transcription.default).to.equal(`DUP`)

  })

})
