/**
 * This file applies tests for the phonetic transcription line
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`phonetic transcription`, () => {

  it(`should remove phonetic brackets`, () => {

    const transcription = `wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi`

    const text = `
    \\phon [${ transcription }]
    \\tln He left his brothers.
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.phonetic).to.equal(transcription)

  })

  it(`may not appear in multiple orthographies`, () => {

    const text = `
    \\phon-ipa  wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi
    \\phon-swad wetkʃ hus naːnt͡ʃaːkamankʃ wetk hi hokmiʔi
    \\tln He left his brothers.
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.phonetic).to.equal(undefined)
    expect(utterance[`phon-swad`]).to.equal(undefined)

  })

  it(`retains emphasis`, function() {

    const phonetic = `waʃtʼunkʼu *ʔasi*`

    const text = `
    \\phon ${ phonetic }
    \\tln  one day a man
    `

    const { utterances: [utterance] } = convert(text)
    expect(utterance.phonetic).to.include(`*ʔasi*`)

  })

  it(`strips emphasis`, function() {

    const phonetic = `waʃtʼunkʼu *ʔasi*`

    const text = `
    \\phon ${ phonetic }
    \\tln  one day a man
    `

    const { utterances: [utterance] } = convert(text, { emphasis: false })
    expect(utterance.phonetic).not.to.include(`*`)

  })

})
