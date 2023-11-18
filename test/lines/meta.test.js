/**
 * Tests for utterance-level metadata
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`utterance metadata`, () => {

  it(`is added to the utterance by default`, () => {

    const meta          = `Chitimacha (isolate; Louisiana)`
    const transcription = `waxdungu qasi`

    const text = `
    # ${ meta }
    ${ transcription }
    one day a man
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.transcription.default).to.equal(transcription)
    expect(utterance.metadata).to.equal(meta)

  })

  it(`option: utteranceMetadata = false`, () => {

    const meta          = `Chitimacha (isolate; Louisiana)`
    const transcription = `waxdungu qasi`

    const text = `
    # ${ meta }
    ${ transcription }
    one day a man
    `

    const { utterances: [utterance] } = convert(text, { utteranceMetadata: false })

    expect(utterance.transcription.default).to.equal(transcription)
    expect(utterance.metadata).to.equal(undefined)

  })

  it(`does not need a blackslash code when a schema is provided`, () => {

    const meta = `Swahili`

    const text = `
    # ${ meta }
    \\m   ni-na-ku-j-a
    \\gl  1SG.SUBJ-PRES-INF-come-IND
    \\tln I’m coming
    \\t   1.234-5.678
    `

    const { utterances: [utterance] } = convert(text, { utteranceMetadata: true })

    expect(utterance.metadata).to.equal(meta)

  })

  it(`may be parsed using the "utteranceMetadata" option`, () => {

    const meta = `Chitimacha (isolate; Louisiana)`

    const text = `
    # ${ meta }
    waxdungu qasi
    one day a man
    `

    const { utterances: [utterance] } = convert(text, { utteranceMetadata: true })

    expect(utterance.metadata).to.equal(meta)

  })

  it(`only parses the first metadata line`, () => {

    const text = `
    # Chitimacha
    # (isolate; Louisiana)
    waxdungu qasi
    one day a man
    `

    const { utterances: [utterance] } = convert(text, { utteranceMetadata: true })

    expect(utterance.metadata).to.equal(`Chitimacha`)

  })

  it(`retains emphasis`, () => {

    const meta = `*Chitimacha*`

    const text = `
    # ${ meta }
    waxdungu qasi
    one day a man
    `

    const { utterances: [utterance] } = convert(text, { utteranceMetadata: true })

    expect(utterance.metadata).to.equal(meta)

  })

  it(`includes metadata in error messages`, function() {

    const text = `
    # metadata
    \\m waxt-qungu qasi
    \\gl one.day
    `

    const { utterances: [e] } = convert(text, { errors: `object` })

    expect(e.text).to.include(`metadata`)

  })

})
