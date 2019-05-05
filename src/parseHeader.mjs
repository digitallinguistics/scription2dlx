import { isString } from './utilities/index.mjs';

/**
 * Extracts the text of the header metadata, if present
 * @param  {String} text The scription text
 * @return {String}
 */
function getHeaderString(text) {

  const headerRegExp = /---(?<header>.+?)---/gsu;
  const result       = headerRegExp.exec(text);

  return result ? result.groups.header.trim() : null;

}

/**
 * Validates the data within the metadata header
 * @param  {Object} header The metadata header to validate, as a JavaScript object
 */
function validateHeader(header) {

  if (!header) throw new Error(`The metadata header must not be empty.`);
  if (isString(header)) throw new Error(`The metadata header could not be parsed as a JavaScript Object.`);

  const { title, utterances } = header;

  if (!title) throw new Error(`The metadata header must have a "title" attribute.`);
  if (utterances) throw new Error(`The metadata header must not have an "utterances" attribute.`);

}

/**
 * Retrieves the header from a scription file and returns the metadata as a JavaScript object containing either a property `header` (if no parser is provided) or all the properties in the header if one is.
 * @param  {String}   text   The scription text
 * @param  {Function} parser A YAML parser to use to parser the header
 * @return {Object}          The text metadata, as a JavaScript object
 */
export default function parseHeader(text, parse) {

  const headerString = getHeaderString(text);
  const isMissing    = headerString === null;

  if (isMissing) return {};

  if (parse) {

    const header = parse(headerString);

    validateHeader(header);

    return header;

  }

  return { header: headerString };

}
