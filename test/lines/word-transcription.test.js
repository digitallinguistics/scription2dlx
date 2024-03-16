import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`phonemic transcription (word)`, function() {

  it(`may be in multiple orthographies`, function() {

    const mod  = `waxdungu`
    const swad = `wašdungu`

    const text = `
    \\w-mod  ${ mod }
    \\w-swad ${ swad }
    \\m      waxt-qungu
    \\gl     day-one
    `

    const { utterances: [{ words: [word] }] } = convert(text)

    expect(word.transcription.mod).to.equal(mod)
    expect(word.transcription.swad).to.equal(swad)

  })

  it(`default orthography`, function() {

    const text = `
    \\w  waxdungu
    \\m  waxt-qungu
    \\gl day-one
    `

    const { utterances: [{ words: [word] }] } = convert(text)
    expect(Object.keys(word.transcription)[0]).to.equal(`default`)

  })

  it(`strips brackets from grouped words`, function() {

    const text = `
    \\txn waqank hi qucinaqa
    \\w   waqank     [hi qucinaqa]
    \\wlt other.side they.made.it.to
    \\tln they made it to the other (side)`

    const { utterances: [{ words: [, word] }] } = convert(text)
    expect(word.transcription.default).to.equal(`hi qucinaqa`)

  })

  it(`option: orthography`, function() {

    const text = `
    \\w  waxdungu
    \\m  waxt-qungu
    \\gl day-one
    `

    const { utterances: [{ words: [word] }] } = convert(text, { orthography: `Mod` })
    expect(Object.keys(word.transcription)[0]).to.equal(`Mod`)

  })

})
