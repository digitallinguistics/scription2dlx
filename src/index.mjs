// IMPORTS

// NB: Must import the default export in its entirety, because the library does not offer ES module exports
import yamlParser from 'yaml';


// METHODS

/**
 * Retrieves the header from a scription file and returns the metadata as a JavaScript object. Returns null if no header is found
 * @param  {String} text The scription text
 * @return {String}      The text metadata, as a JavaScript object
 */
function getHeader(text) {

  try {

    const headerRegExp = /---(?<header>.+?)---/gsu;
    const result       = headerRegExp.exec(text);
    if (!result) return null;

    let { header } = result.groups;
    header         = header.trim();
    if (!header) throw new TypeError(`The metadata header must not be empty.`);

    return yamlParser.parse(header);

  } catch (e) {

    e.message = `[scription2dlx.getHeader] ${e.message}`;
    throw e;

  }

}

/**
 * Validates the data within the metadata header
 * @param  {Object} header The metadata header to validate, as a JavaScript object
 */
function validateHeader({ title, utterances }) {

  try {

    if (!title) throw new Error(`The metadata header must have a "title" attribute.`);
    if (utterances) throw new Error(`The metadata header must not have an "utterances" attribute.`);

  } catch (e) {

    throw new Error(`[scription2dlx.validateHeader] ${e.message}`);

  }

}

/**
 * Converts a scription-format text to DLx format
 * @param  {String} scription The text of the Scription file to parse
 * @return {Object}           Returns a plain JavaScript object formatted according to the DLx Text format
 */
export default function scription2dlx(scription) {

  const header = getHeader(scription);

  if (header) validateHeader(header);

  return header;

}
