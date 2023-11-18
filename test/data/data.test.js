import convert           from '../../src/index.js'
import { expect }        from 'chai'
import { fileURLToPath } from 'url'
import path              from 'path'
import { promises }      from 'fs'

const currentDir   = path.dirname(fileURLToPath(import.meta.url))
const { readFile } = promises

describe(`data`, () => {

  it(`parses Chitimacha`, async () => {
    const Chitimacha = await readFile(path.join(currentDir, `Chitimacha.txt`), `utf8`)
    const test = () => convert(Chitimacha)
    expect(test).not.to.throw()
  })

  it(`parses Nuuchahnulth`, async () => {
    const Nuuchahnulth = await readFile(path.join(currentDir, `Nuuchahnulth.txt`), `utf8`)
    const test = () => convert(Nuuchahnulth)
    expect(test).not.to.throw()
  })

  it(`parses Old Latin`, async () => {
    const OldLatin = await readFile(path.join(currentDir, `OldLatin.txt`), `utf8`)
    const test = () => convert(OldLatin)
    expect(test).not.to.throw()
  })

})
