/**
 * This file applies tests to the note line (`\n`)
 */

import convert from '../../src/index.js'
import { expect }  from 'chai'

describe(`note`, () => {

  it(`may have source, language, and text`, () => {

    const initials = `DWH`
    const lang     = `en`
    const noteText = `Is this utterance past or present tense?`

    const sampleText = `
    \\n-${ lang } ${ initials }: ${ noteText }
    `

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText)


    expect(source).to.equal(initials)
    expect(language).to.equal(lang)
    expect(text).to.equal(noteText)

  })

  it(`must use a valid ISO language tag for the language`, () => {

    const text = `
    \\n-en2 This is a note.
    `

    const test = () => convert(text, { errors: true })

    expect(test).to.throw(/IETF/u)

  })

  it(`may have a source and text`, () => {

    const initials = `DWH`
    const noteText = `Is this utterance past or present tense?`

    const sampleText = `
    \\trs This is a transcript.
    \\n ${ initials }: ${ noteText }
    `

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText)

    expect(language).to.equal(`en`)
    expect(source).to.equal(initials)
    expect(text).to.equal(noteText)

  })

  it(`may have only text`, () => {

    const noteText = `Is this utterance past or present tense?`

    const sampleText = `
    \\trs This is a transcript.
    \\n ${ noteText }
    `

    const { utterances: [{ notes }] } = convert(sampleText)
    const [note] = notes
    const { language, text } = note

    expect(notes).to.have.length(1)
    expect(`source` in note).to.equal(false)
    expect(language).to.equal(`en`)
    expect(text).to.equal(noteText)

  })

  it(`may have only a language and text`, () => {

    const lang     = `en`
    const noteText = `Is this utterance past or present tense?`

    const sampleText = `
    \\trs This is a transcript.
    \\n-${ lang } ${ noteText }
    `

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText)

    expect(language).to.equal(lang)
    expect(source).to.equal(undefined)
    expect(text).to.equal(noteText)

  })

  it(`assumes the language of the note is English if not specified`, () => {

    const noteText = `This is a note.`

    const sampleText = `
    \\trs This is a transcript.
    \\n ${ noteText }
    `

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText)

    expect(language).to.equal(`en`)
    expect(source).to.equal(undefined)
    expect(text).to.equal(noteText)

  })

  it(`removes white space before and after the colon`, () => {

    const initials = `DWH`
    const lang     = `en`
    const noteText = `This is a note.`

    const sampleText = `
    \\trs This is a transcript.
    \\n-${ lang } ${ initials } : ${ noteText }
    `

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText)

    expect(language).to.equal(lang)
    expect(source).to.equal(initials)
    expect(text).to.equal(noteText)

  })

  it(`may have multiple white spaces or tabs after the colon`, () => {

    const initials = `DWH`
    const noteText = `This is a note.`

    const sampleText = `
    \\trs This is a transcript.
    \\n ${ initials }:\t \t${ noteText }
    `

    const { utterances: [{ notes: [{ language, source, text }] }] } = convert(sampleText)

    expect(language).to.equal(`en`)
    expect(source).to.equal(initials)
    expect(text).to.equal(noteText)

  })

  it(`does not recognize colons in the note text`, () => {

    const sampleText = `
    \\trs This is a transcript.
    \\n What do you think: choice one or choice two?
    `

    const { utterances: [{ notes: [{ language, source }] }] } = convert(sampleText)

    expect(language).to.equal(`en`)
    expect(source).to.equal(`What do you think`)

  })

  it(`is not stripped of emphasis`, () => {

    const noteText = `This note has *emphasis*.`

    const text = `
    \\txn waxdungu qasi
    \\tln one day a man
    \\n   DWH: ${ noteText }
    `

    const { utterances: [{ notes: [note] }] } = convert(text)

    expect(note.text).to.equal(noteText)

  })

  it(`may have a backslash even when other lines do not`, function() {

    const noteText = `This is a note.`

    const text = `
    waxdungu qasi
    one day a man
    \\n ${ noteText }
    `

    const { utterances: [{ notes: [note] }] } = convert(text)

    expect(note.text).to.equal(noteText)

  })

  it(`may not lack a backslash when other lines have it`, function() {

    const noteText = `This is a note.`

    const text = `
    \\txn waxdungu qasi
    \\tln one day a man

    \\txn waxdungu qasi
    \\tln one day a man
    ${ noteText }
    `

    const test = () => convert(text)

    expect(test).to.throw(`backslash`)

  })

  it(`explicit final notes do not break schema`, function() {

    const translation = `He might have said, “you corpse.”`

    const text = `
    \\trs
    \\m
    \\gl
    \\wlt
    \\tln

    # 249
    waamitii           tušaakitʔi.
    wa·-mit-(y)iː      tušaːk-it-ʔi·
    say-PAST-INDF.3    dead?-PAST-DEF
    he.might.have.said corpse
    ${ translation }
    \\n DWH: Corpse is used as a curse word here.
    `

    const { utterances: [utterance] } = convert(text)

    expect(utterance.notes).to.have.length(1)
    expect(utterance.translation).to.equal(translation)

  })

})
