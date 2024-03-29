/**
 * This file applies tests to the morphemes line (`\m`)
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`morphemes`, function() {

  it(`may be in multiple orthographies`, function() {

    const text = `
    \\m-swad wašt-ʔungu  ʔasi
    \\m-apa  wašt-ʼunkʼu ʔasi
    \\gl     day-one     man
    `

    const { utterances: [{ words: [{ morphemes: [, morpheme] }] }] } = convert(text)

    expect(morpheme.transcription.swad).to.equal(`ʔungu`)
    expect(morpheme.transcription.apa).to.equal(`ʼunkʼu`)

  })

  it(`may separate words by one or more white spaces or tabs`, function() {

    const text = `
    \\m-swad wašt-ʔungu\t\tʔasi
    \\m-apa  wašt-ʼunkʼu ʔasi
    \\gl     day-one     man
    `

    const test = () => convert(text)

    expect(test).not.to.throw()

  })

  it(`must have the same number of morphemes in each word as the glosses line`, function() {

    const text = `
    \\m  waxdungu qasi
    \\gl day-one  man
    `

    const test = () => convert(text, { errors: true })

    expect(test).to.throw(/same number/u)

  })

  it(`treats non-breaking hyphens as word characters`, function() {

    const text = `
    \\m  waxt‑qungu qasi
    \\gl day‑one    man
    `

    const { utterances: [{ words: [{ morphemes }] }] } = convert(text)

    expect(morphemes.length).to.equal(1)

  })

  it(`must be present if the glosses line is present`, function() {

    const text = `
    \\txn waxdungu qasi
    \\gl  one.day  man
    `

    const test = () => convert(text)

    expect(test).to.throw(/morphemes/u)

  })

  it(`must cooccur with either the glosses line or literal word translation line`, function() {

    const text = `
    \\m   waxt-qungu qasi
    \\tln one day a man
    `

    const test = () => convert(text)

    expect(test).to.throw(/morphemes line/u)

  })

  it(`may cooccur with the glosses line`, function() {

    const text = `
    \\m  waxt-qungu qasi
    \\gl day-one    man
    `

    const test = () => convert(text)

    expect(test).not.to.throw()

  })

  it(`may cooccur with the literal word translation line`, function() {

    const text = `
    \\m   waxt-qungu qasi
    \\wlt day-one    man
    `

    const test = () => convert(text)

    expect(test).not.to.throw()

  })

  it(`may group multiple words with [square brackets]`, function() {

    const text = `
    waxt-qungu qasi [Benjamin Paul]
    day-one    man  NAME
    one day a man, Benjamin Paul
    `

    const { utterances: [{ words }] } = convert(text)
    const lastWord = words.pop()

    expect(lastWord.analysis.default).to.equal(`Benjamin Paul`)
    expect(lastWord.gloss).to.equal(`NAME`)

  })

  it(`retains emphasis`, function() {

    const text = `
    \\m  *waxt*-qungu qasi
    \\gl day-one      man
    `

    const { utterances: [{ words: [{ morphemes: [morpheme] }] }] } = convert(text)

    expect(morpheme.transcription.default).to.equal(`*waxt*`)

  })

  it(`strips emphasis`, function() {

    const text = `
    \\m  *waxt*-qungu qasi
    \\gl day-one      man
    `

    const { utterances: [{ words: [{ morphemes: [morpheme] }] }] } = convert(text, { emphasis: false })

    expect(morpheme.transcription.default).to.equal(`waxt`)

  })

})
