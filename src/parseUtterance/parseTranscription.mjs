import {
  cleanBrackets,
  groupLines,
  isString,
} from '../utilities/index.mjs';

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
 * @param  {Object}        lines The lines hash
 * @return {String|Object}
 */
export default function parseTranscription(lines) {

  let data = groupLines(`txn`, lines);

  if (!data) return null;

  data = cleanBrackets(`txn`, data);
  data = removeExtraWhiteSpace(data);

  return data;

}
