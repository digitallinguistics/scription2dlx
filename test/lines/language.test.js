import convert    from '../../src/index.js'
import { expect } from 'chai'

describe(`language`, function() {

  it(`is parsed correctly`, function() {

    const language = `swa`

    const text = `
    \\txn ninakupenda
    \\tln I love you
    \\lg  ${ language }
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.language).to.equal(language)

  })

})