/**
 * This file applies tests to the literal translation line (`\lit`)
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`literal translation (utterance: "\\lit")`, () => {

  it(`removes brackets`, () => {

    const literal = `I love you.`

    const text = `
    \\txn ninakupenda
    \\lit [${ literal }]
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.literal).to.equal(literal)

  })

  it(`may be in multiple languages`, () => {

    const English = `I love you.`
    const Spanish = `Te amo.`

    const text = `
    \\txn    ninakupenda
    \\lit-en ${ English }
    \\lit-es ${ Spanish }
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.literal.en).to.equal(English)
    expect(utterance.literal.es).to.equal(Spanish)

  })

  it(`must have valid ISO language tags`, () => {

    const text = `
    \\txn      ninakupenda
    \\lit-eng2 I love you.
    `

    const test = () => convert(text)

    expect(test).to.throw(/IETF/u)

  })

  it(`strips single straight quotes from start and end of the line`, () => {

    const literal = `one day a man`

    const text = `
    \\m   waxt-qungu qasi
    \\gl  day-one    man
    \\lit '${ literal }'
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.literal).to.equal(literal)

  })

  it(`strips single curly quotes from start and end of the line`, () => {

    const literal = `one day a man`

    const text = `
    \\m   waxt-qungu qasi
    \\gl  day-one    man
    \\lit ‘${ literal }’
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.literal).to.equal(literal)

  })

  it(`retains emphasis`, function() {

    const text = `
    \\txn *waxdungu* qasi
    \\lit *one day* a man`

    const { utterances: [utterance] } = convert(text)

    expect(utterance.literal).to.equal(`*one day* a man`)

  })

  it(`strips emphasis`, function() {

    const text = `
    \\txn *waxdungu* qasi
    \\lit *one day* a man`

    const { utterances: [utterance] } = convert(text, { emphasis: false })

    expect(utterance.literal).to.equal(`one day a man`)

  })

})
