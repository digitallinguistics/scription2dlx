/**
 * This test suite applies tests to the metadata header
 */

import convert from '../src/index.js'
import { expect }  from 'chai'
import yamljs  from 'yamljs'

const { parse: parser } = yamljs

describe(`metadata header`, function() {

  it(`returns a "header" property if no parser is provided`, () => {

    const headerString = `title: How the world began`

    const text = `
    ---
    title: How the world began
    ---
    `

    const { header } = convert(text)

    expect(header).to.equal(headerString)

  })

  it(`must be in valid YAML (or JSON) format`, () => {

    const text = `
---
title:
How the world began
---`

    const test = () => convert(text, { parser })

    expect(test).to.throw(/YAML/u)

  })

  it(`must not be empty`, () => {

    const text = `---\n---`

    const test = () => convert(text, { parser })

    expect(test).to.throw(/empty/u)

  })

  it(`must have a "title" property`, () => {

    const text = `
---
abbreviation: A1
---
`

    const test = () => convert(text, { parser })

    expect(test).to.throw(/title/u)

  })

  it(`must not have an "utterances" property`, () => {

    const text = `
---
title: How the world began
utterances:
  - waxdungu qasi
    one day a man
---
`

    const test = () => convert(text, { parser })

    expect(test).to.throw(/utterances/u)

  })

  it(`may have other properties than "title"`, () => {

    const text = `
---
title:        How the world began
abbreviation: A1
---
`

    const test = () => convert(text, { parser })

    expect(test).not.to.throw()

  })

})
