import getCode     from './getCode.mjs';
import getLineType from './getLineType.mjs';
import isString    from './isString.mjs';

const codeRegExp      = /^[-A-Za-z0-9]+$/u;
const newlineRegExp   = /\r?\n/gu;

/**
 * Checks an array of backslash codes to see whether it actually contains backslash codes (rather than just nulls)
 * @param  {Array}   codes The array of backslash codes to check
 * @return {Boolean}
 */
function hasBackslashCodes(codes) {
  return codes.some(code => isString(code));
}

/**
 * Checks whether a backslash code is valid
 * @param  {String}  code The backslash code to check, without a leading slash
 * @return {Boolean}
 */
function isValidCode(code) {
  return codeRegExp.test(code);
}

/**
 * Valides an array of backslash codes, without leading slashes
 * @param  {Array} codes The array of backslash codes to validate
 */
function validateBackslashCodes(rawCodes) {

  // Check that if any line has a backslash code, all lines do
  // NB: This validation must come first

  const someLinesHaveCodes = hasBackslashCodes(rawCodes);
  const allLinesHaveCodes  = rawCodes.every(code => isString(code));

  if (someLinesHaveCodes && !allLinesHaveCodes) {
    throw new Error(`If one line in an utterance has a backslash code, all lines in the utterance must have backslash codes.`);
  }

  const codes = rawCodes.filter(Boolean);
  const types = codes.map(getLineType);

  // Check that codes are valid

  codes.forEach(code => {
    if (!isValidCode(code)) {
      throw new Error(`The backslash code ${code} is invalid. Only characters A-Z, a-z, 0-9, and hyphens are allowed. Diacritics are not permitted.`);
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
      throw new Error(`The ${code} code appears more than once in the utterance. Each backslash code may only appear once.`);
    }
  });

  // Check that morphemes and glosses lines are bidependent

  const hasMorphemes = types.some(type => type === `m`);
  const hasGlosses   = types.some(type => type === `gl`);

  if ((hasMorphemes || hasGlosses) && !(hasMorphemes && hasGlosses)) {
    throw new Error(`If either the morphemes or glosses line is present, the other must be present as well.`);
  }

}

/**
 * Accepts the text of a scription utterance and returns an array representing its interlinear gloss schema, where each item in the array is a backslash code (without the leading slash)
 * @param  {String} utteranceString The scription utterance to get the interlinear schema for
 * @return {Array}                  Returns an array of backslash codes (without the leading slash)
 */
export default function getSchema(utteranceString) {

  try {

    const lines = utteranceString
    .split(newlineRegExp)
    .map(line => line.trim());

    const codes = lines.map(getCode);

    validateBackslashCodes(codes);

    if (!hasBackslashCodes(codes)) {

      const lineCount = lines.length;

      /* eslint-disable no-magic-numbers */
      if (lineCount === 2) return [`txn`, `tln`];
      if (lineCount === 3) return [`m`, `gl`, `tln`];
      if (lineCount >= 4)  return [`txn`, `m`, `gl`, `tln`].fill(`n`, 4);
      /* eslint-enable no-magic-numbers */

      throw new Error(`Cannot infer an interlinear gloss schema for utterances with fewer than 2 lines.`);

    }

    return codes;

  } catch (e) {

    e.message = `[getSchema] ${e.message}\n\nUtterance text:\n\n${utteranceString}`;
    throw e;

  }

}
