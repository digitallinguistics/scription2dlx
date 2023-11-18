import { getLines }      from '../utilities/index.js'
import { isLanguageTag } from '../utilities/types/index.js'

/**
 * Accepts the lines hash and returns an array of DLx Note objects
 * @param  {String} lineCode The line code to use for notes
 * @param  {Object} lines    The lines hash
 * @return {Array}           Returns the "notes" property of the utterance (or null)
 */
export default function parseNotes(lineCode, lines) {

  const noteLines = getLines(lineCode, lines)

  if (!noteLines) return []

  const numberedRegExp = new RegExp(`${ lineCode }-[0-9]`, `u`)
  const noteRegExp     = /^(?:\s*(?<source>.+?)\s*:\s*)?(?<text>.+)$/u

  return Object.entries(noteLines)
  .map(([rawCode, data]) => {

    const code                = rawCode.replace(numberedRegExp, lineCode)
    const [, language = `en`] = code.split(`-`, 2)
    const { source, text }    = data.match(noteRegExp).groups

    if (!isLanguageTag(language)) {
      const e = new Error(`The ${ language } language tag is invalid. It must be a valid IETF language tag.`)
      e.name  = `InvalidNoteTagError`
      throw e
    }

    return {
      language,
      ...source ? { source } : {},
      text,
    }

  })

}
