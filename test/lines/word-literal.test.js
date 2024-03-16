/**
 * This file applies tests for the literal word gloss line (`\\wlt`)
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`literal word translation (word: \\wlt)`, function() {

  it(`does not allow literal glosses with whitespace (unless bracketed)`, function() {

    const text = `
    \\m   waxt-qungu qasi
    \\gl  one-day    man
    \\wlt one.day    a man
    `

    const test = () => convert(text, { errors: true })

    expect(test).to.throw(/same number/u)

  })

  it(`may be in multiple languages`, function() {

    const en = `one.day`
    const es = `un.día`

    const text = `
    \\m      waxt-qungu qasi
    \\gl     one-day    man
    \\wlt-en ${ en }     [a man]
    \\wlt-es ${ es }     [un hombre]
    `

    const { utterances: [{ words: [{ literal }] }] } = convert(text)

    expect(literal.en).to.equal(en)
    expect(literal.es).to.equal(es)

  })

  it(`must have valid ISO language tags`, function() {

    const text = `
    \\m       waxt-qungu qasi
    \\gl      one-day    man
    \\wlt-en- one.day    [a man]
    `

    const test = () => convert(text)

    expect(test).to.throw(/IETF/u)

  })

  it(`removes grouping brackets`, function() {

    const text = `
    \\m   waxt-qungu qasi
    \\gl  one-day    man
    \\wlt [one day]  [a man]
    `

    const { utterances: [{ words: [{ literal }] }] } = convert(text)

    expect(literal).to.equal(`one day`)

  })

  it(`retains emphasis`, function() {

    const text = `
    \\w waxdungu qasi
    \\wlt day.*one* a.man
    `

    const { utterances: [{ words: [word] }] } = convert(text)

    expect(word.literal).to.equal(`day.*one*`)

  })

  it(`strips emphasis`, function() {

    const text = `
    \\w waxdungu qasi
    \\wlt day.*one* a.man
    `

    const { utterances: [{ words: [word] }] } = convert(text, { emphasis: false })

    expect(word.literal).to.equal(`day.one`)

  })

})
