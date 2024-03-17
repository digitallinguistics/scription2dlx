/**
 * This file applies tests for the transcript line
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`transcript`, function() {

  it(`may be in multiple formats`, function() {

    const SwadeshTranscript = `wetkšˊ husˊ na·nča·kamankšˊ wetkˊ hi hokmiʔiˊ`
    const DFTTranscript     = `wetkš↗ hus↗ na·nča·kamankš↗ wetkˊ hi hokmiʔiˊ↗`

    const text = `
    \\trs-swad ${ SwadeshTranscript }
    \\trs-dft  ${ DFTTranscript }
    \\tln      He left his brothers.
    `

    const { utterances: [utterance] } = convert(text)
    const { transcript }              = utterance

    expect(transcript.swad).to.equal(SwadeshTranscript)
    expect(transcript.dft).to.equal(DFTTranscript)

  })

  it(`retains emphasis`, function() {

    const transcript = `*waxdungu* qasi`

    const text = `
    \\trs ${ transcript }
    \\tln one day a man
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.transcript.default).to.equal(transcript)

  })

  it(`removes extra white space`, function() {

    const text = `
    \\trs we  qasi
    \\tln the man
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.transcript.default).to.equal(`we qasi`)

  })

  it(`default orthography`, function() {

    const text = `
    \\trs waxdungu qasi
    \\tln one day a man
    `

    const { utterances: [utterance] } = convert(text)
    expect(Object.keys(utterance.transcript)[0]).to.equal(`default`)

  })

  it(`option: orthography`, function() {

    const text = `
    \\trs waxdungu qasi
    \\tln one day a man
    `

    const { utterances: [utterance] } = convert(text, { orthography: `Mod` })
    expect(Object.keys(utterance.transcript)[0]).to.equal(`Mod`)

  })

})
