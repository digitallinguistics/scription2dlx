import getLineType from './getLineType.js';

import {
  isCode,
  isLanguageTag,
  isString,
} from './types/index.js';

// NB: Does not include `n` - this is tested elsewhere
const multiLangTypes = [`gl`, `lit`, `tln`, `wlt`];

/**
 * Extracts the backslash code for a line, without the leading slash. Returns null if none is found.
 * @param  {String} line The line of text to find the backslash code in
 * @return {String}      The backslash code that was found, without a leading slash
 */
function getCode(line) {
  if (line.startsWith(`#`)) return `#`;
  const backslashRegExp = /^\\(?<code>\S+)(?:\s|$)/u;
  const match = line.match(backslashRegExp);
  if (!match) return null;
  return match.groups.code;
}

/**
 * Validates an array of backslash codes, without leading slashes
 * @param  {Array} schema An array of backslash codes to validate
 */
function validateSchema(schema) {

  // Check that if any line has a backslash code, all lines do
  // NB: This validation must come first

  const someLinesHaveCodes = schema.some(code => isString(code));
  const allLinesHaveCodes  = schema.every(code => isString(code));

  if (someLinesHaveCodes && !allLinesHaveCodes) {
    const e = new Error(`If one line in an utterance has a backslash code, all lines in the utterance must have backslash codes.`);
    e.name = `ConsistentCodesError`;
    throw e;
  }

  const codes = schema.filter(Boolean);
  const types = codes.map(getLineType);
  // NB: Items in the types array may not be unique (and later code depends on this fact)

  // Check that codes are valid

  codes.forEach(code => {
    if (!isCode(code)) {
      const e = new Error(`The backslash code ${code} is invalid. Only characters A-Z, a-z, 0-9, and hyphens are allowed. Diacritics are not permitted.`);
      e.name = `InvalidSchemaCodesError`;
      throw e;
    }
  });

  // Check that there are no duplicate codes

  const codeCounts = codes.reduce((counts, code) => {
    const currentCount = counts.get(code) || 0;
    counts.set(code, currentCount + 1);
    return counts;
  }, new Map);

  codeCounts.forEach((count, code) => {
    if (code !== `n` && count > 1) {
      const e = new Error(`The ${code} code appears more than once in the utterance. Each backslash code may only appear once.`);
      e.name = `MultipleCodesError`;
      throw e;
    }
  });

  // Check that morphemes and glosses lines are codependent

  const hasMorphemes = types.some(type => type === `m`);
  const hasGlosses   = types.some(type => type === `gl`);

  if ((hasMorphemes || hasGlosses) && !(hasMorphemes && hasGlosses)) {
    throw new Error(`If either the morphemes or glosses line is present, the other must be present as well.`);
  }

  // Check that language tags are valid IETF tags

  codes.forEach((code, i) => {

    const type = types[i];

    if (!multiLangTypes.includes(type)) return;

    const lang = code.replace(`${type}-`, ``);

    if (lang && !isLanguageTag(lang)) {
      const e = new Error(`Language codes must be valid IETF language tags. The tag ${lang} is not valid.`);
      e.name  = `InvalidSchemaLanguageTagsError`;
      throw e;
    }

  });

}

/**
 * Accepts the text of a scription utterance and returns an array representing its interlinear gloss schema, where each item in the array is a backslash code (without the leading slash)
 * @param  {String} lines An array of raw lines to get the schema for
 * @return {Array}        Returns an array of backslash codes (without the leading slash)
 */
export default function getSchema(lines) {

  try {

    const schema = lines
    .map(getCode)
    .filter(code => code !== `#`);

    validateSchema(schema);

    const hasCodes = schema.filter(Boolean).length;

    if (!hasCodes) {

      const lineCount = schema.length;

      /* eslint-disable no-magic-numbers */
      if (lineCount === 2) return [`txn`, `tln`];
      if (lineCount === 3) return [`m`, `gl`, `tln`];
      if (lineCount >= 4)  return [`txn`, `m`, `gl`, `tln`].fill(`n`, 4);
      /* eslint-enable no-magic-numbers */

      const e = new Error(`Cannot infer an interlinear gloss schema for utterances with one line.`);
      e.name  = `SingleLineSchemaError`;
      throw e;

    }

    return schema.map((code, i) => {
      const type = getLineType(code);
      if (type !== `n`) return code;
      return code.replace(`n`, `n-${i + 1}`);
    });

  } catch (e) {

    e.name    = `GetSchemaError`;
    e.message = `${e.message}\n\nUtterance text:\n\n${JSON.stringify(lines, null, 2)}`;
    throw e;

  }

}
