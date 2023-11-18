/**
 * This test suite applies tests that check the text as a whole
 */

import convert from '../src/index.js'
import { expect }  from 'chai'

describe(`text`, () => {

  it(`may be called without any arguments`, () => {
    expect(JSON.stringify(convert())).to.equal(`{}`)
  })

  it(`may be blank`, () => {

    const text = ``

    const result = convert(text)

    expect(JSON.stringify(result)).to.equal(`{}`)

  })

})
