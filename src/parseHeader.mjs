import { isString } from './utilities/index.mjs';
import yamlParser   from 'yaml';

/**
 * Extracts the text of the header metadata, if present
 * @param  {String} text The scription text
 * @return {String}
 */
function getHeaderString(text) {

  const headerRegExp = /---(?<header>.+?)---/gsu;
  const result       = headerRegExp.exec(text);

  if (!result) return null;

  return result.groups.header.trim();

}

/**
 * Parses the header string into a JavaScript object
 * @param  {String} headerString The text of the header, without dashes
 * @return {Object}
 */
function parseYAML(headerString) {
  const isEmpty = headerString === ``;
  if (isEmpty) throw new TypeError(`The metadata header must not be empty.`);
  return yamlParser.parse(headerString);
}

/**
 * Validates the data within the metadata header
 * @param  {Object} header The metadata header to validate, as a JavaScript object
 */
function validateHeader(header) {

  if (isString(header)) throw new Error(`The metadata header could not be parsed as a JavaScript Object.`);

  const { title, utterances } = header;

  if (!title) throw new Error(`The metadata header must have a "title" attribute.`);
  if (utterances) throw new Error(`The metadata header must not have an "utterances" attribute.`);

}

/**
 * Retrieves the header from a scription file and returns the metadata as a JavaScript object. Returns null if no header is found
 * @param  {String} text The scription text
 * @return {String}      The text metadata, as a JavaScript object
 */
export default function parseHeader(text) {

  try {

    const headerString = getHeaderString(text);
    const isMissing    = headerString === null;

    if (isMissing) return {};

    const header = parseYAML(headerString);

    validateHeader(header);

    return header;

  } catch (e) {

    e.message = `[parseHeader] ${e.message}\n\nError parsing the following header:\n\n${text}`;
    throw e;

  }


}
