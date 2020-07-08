import { isString } from '../utilities/types/index.js';

import {
  groupLines,
  removeBrackets,
  removeEmphasis,
} from '../utilities/index.js';

function replaceSpaces(str) {
  return str.replace(/\s+/gu, ` `);
}

/**
 * Accepts a DLx Transcription object and removes any extra white spaces from the transcriptions
 * @param  {Object} txn
 * @return {Object}
 */
function removeExtraWhiteSpace(txn) {

  if (isString(txn)) return replaceSpaces(txn);

  return Object.entries(txn).reduce((hash, [lang, data]) => {
    hash[lang] = data.replace(/\s+/gu, ` `); // eslint-disable-line no-param-reassign
    return hash;
  }, {});

}

/**
 * Extracts, validates, and cleans the transcription lines from the lines hash
 * @param  {String}        lineCode The code to use for transcription lines
 * @param  {Object}        lines    The lines hash
 * @return {String|Object}
 */
export default function parseTranscription(lineCode, lines) {

  let data = groupLines(lineCode, lines);

  if (!data) return null;

  // NB: Do not use lineCode here; removeBrackets takes an abstract type, not a line code, as its first argument
  data = removeEmphasis(data);
  data = removeBrackets(`txn`, data);
  data = removeExtraWhiteSpace(data);

  return data;

}
