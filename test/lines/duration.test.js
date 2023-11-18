/**
 * This file applies tests for the duration line
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`duration`, function() {

  it(`adds startTime and endTime to the utterance`, function() {

    const start = 1.234
    const end   = 5.678

    const text = `
    \\txn waxdungu qasi
    \\tln one day a man
    \\t   1.234-5.678
    `

    const { utterances: [{ startTime, endTime }] } = convert(text)

    expect(startTime).to.equal(start)
    expect(endTime).to.equal(end)

  })

  it(`may have spaces around the hyphen`, function() {

    const start = 1.234
    const end   = 5.678

    const text = `
    \\txn waxdungu qasi
    \\tln one day a man
    \\t   1.234 -  5.678
    `

    const { utterances: [{ startTime, endTime }] } = convert(text)

    expect(startTime).to.equal(start)
    expect(endTime).to.equal(end)

  })

  it(`may not have incorrect precision`, function() {

    const text = `
    \\txn waxdungu qasi
    \\tln one day a man
    \\t   1.23-5
    `

    const test = () => convert(text, { errors: true })

    expect(test).to.throw(/timestamp/u)

  })

})
