/**
 * This file applies tests for the speaker line
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`speaker`, () => {

  it(`must be a valid abbreviation`, () => {

    const text = `
    \\sp  Benjamin Paul
    \\txn wetkš hus na·nča·kamankš wetk hi hokmiʔi
    \\tln He left his brothers.
    `

    const test = () => convert(text, { errors: true })

    expect(test).to.throw(/valid/u)

  })

})
