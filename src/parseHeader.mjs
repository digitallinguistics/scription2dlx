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
 * Retrieves the header from a scription file and returns the metadata as a JavaScript object. Returns null if no header is found
 * @param  {String} text The scription text
 * @return {String}      The text metadata, as a JavaScript object
 */
export default function parseHeader(text) {

  const headerString = getHeaderString(text);
  const isMissing    = headerString === null;

  if (isMissing) return {};

  const header = yamlParser.parse(headerString);

  validateHeader(header);

  return header;

}
