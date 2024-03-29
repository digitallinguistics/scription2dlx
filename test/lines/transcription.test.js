/**
 * This file applies tests for the phonemic transcription line (`\txn`)
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`phonemic transcription (utterance)`, function() {

  it(`should remove phonemic slashes`, function() {

    const transcription = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`

    const text = `
    /${ transcription }/
    He left his brothers.
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.transcription.default).to.equal(transcription)

  })

  it(`may have multiple orthographies`, function() {

    const SwadeshTranscription = `wetkš hus na·nča·kamankš wetk hi hokmiʔi`
    const APATranscription     = `wetkš hus naːnčaːkamankš wetk hi hokmiʔi`

    const text = `
    \\txn-swad ${ SwadeshTranscription }
    \\txn-apa  ${ APATranscription }
    \\tln      He left his brothers.
    `

    const { utterances: [utterance] } = convert(text)
    const { transcription } = utterance

    expect(transcription.swad).to.equal(SwadeshTranscription)
    expect(transcription.apa).to.equal(APATranscription)

  })

  it(`should *not* populate from the word transcriptions line`, function() {

    const text = `
    \\w  waxdungu   qasi
    \\m  waxt-qungu qasi
    \\gl day-one    man
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.transcription).to.not.exist

  })

  it(`removes extraneous whitespace`, function() {

    // It should *not* treat a double line break as extra space, but rather a new utterance.

    const text = `
    \\txn waxdungu     qasi
    \\tln one day a man

    \\m waxt-qungu qasi
    \\gl day-one man
    `

    const { utterances: [u1, u2] } = convert(text)

    expect(u1.transcription.default).to.equal(`waxdungu qasi`)
    expect(u2.transcription).to.not.exist

  })

  it(`retains emphasis`, function() {

    const text = `
    *waxdungu* qasi
    one day a man
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.transcription.default).to.equal(`*waxdungu* qasi`)

  })

  it(`retains emphasis`, function() {

    const text = `
    *waxdungu* qasi
    one day a man
    `

    const { utterances: [utterance] } = convert(text, { emphasis: false })

    expect(utterance.transcription.default).to.not.include(`*`)

  })

  it(`default orthography`, function() {

    const text = `
    waxdungu qasi
    one day a man
    `

    const { utterances: [utterance] } = convert(text)
    expect(Object.keys(utterance.transcription)[0]).to.equal(`default`)

  })

  it(`option: orthography`, function() {

    const text = `
    waxdungu qasi
    one day a man
    `

    const { utterances: [utterance] } = convert(text, { orthography: `Mod` })
    expect(Object.keys(utterance.transcription)[0]).to.equal(`Mod`)

  })

})
