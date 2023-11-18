import { isString } from './utilities/types/index.js'

/**
 * Extracts the text of the header metadata, if present
 * @param  {String} text The scription text
 * @return {String}
 */
function getHeaderString(text) {
  const headerRegExp = /---(?<header>.+?)---/su
  const result       = headerRegExp.exec(text)
  return result ? result.groups.header.trim() : null
}

/**
 * Validates the data within the metadata header
 * @param  {Object} header The metadata header to validate, as a JavaScript object
 */
function validateHeader(header) {

  if (!header) {
    const e = new Error(`The metadata header must not be empty`)
    e.name = `EmptyHeaderError`
    throw e
  }

  if (isString(header)) {
    const e = new Error(`The metadata header could not be parsed as a JavaScript Object.`)
    e.name = `JSParsingError`
    throw e
  }

  const { title, utterances } = header

  if (!title) {
    const e = new Error(`The metadata header must have a "title" attribute.`)
    e.name = `MissingTitleError`
    throw e
  }

  if (utterances) {
    const e = new Error(`The metadata header must not have an "utterances" attribute.`)
    e.name = `HeaderUtterancesError`
    throw e
  }

}

/**
 * Retrieves the header from a scription file and returns the metadata as a JavaScript object containing either a property `header` (if no parser is provided) or all the properties in the header if one is.
 * @param  {String}   text   The scription text
 * @param  {Function} parser A YAML parser to use to parser the header
 * @return {Object}          The text metadata, as a JavaScript object
 */
export default function parseHeader(text, parse) {

  const headerString = getHeaderString(text)

  if (headerString === null) return {}

  if (typeof parse !== `function`) return { header: headerString }

  if (parse) {

    let header

    try {
      header = parse(headerString)
    } catch (e) {
      e.name    = `ParseHeaderError`
      e.message = `Error parsing metadata header. Make sure the header is in valid YAML format.\n${ e.message }`
      throw e
    }

    validateHeader(header)

    return header

  }

}
