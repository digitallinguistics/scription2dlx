const backslashRegExp = /^\\(?<code>\S+)(?:\s|$)/u;
const codeRegExp      = /^[-A-Za-z0-9]+$/u;
const newlineRegExp   = /\r?\n/gu;

/**
 * Extracts the backslash code for a line, without the leading slash. Returns null if none is found.
 * @param  {String} line The line of text to find the backslash code in
 * @return {String}      The backslash code that was found, without a leading slash
 */
function getBackslashCode(line) {

  const match = line.match(backslashRegExp);

  if (!match) return null;

  return match.groups.code;

}

/**
 * Checks an array of backslash codes to see whether it actually contains backslash codes (rather than just nulls)
 * @param  {Array}   codes The array of backslash codes to check
 * @return {Boolean}
 */
function hasBackslashCodes(codes) {
  return codes.some(code => typeof code === `string`);
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
function validateBackslashCodes(codes) {

  // Check that if any line has a backslash code, all lines do

  const someLinesHaveCodes = hasBackslashCodes(codes);
  const allLinesHaveCodes  = codes.every(code => typeof code === `string`);

  if (someLinesHaveCodes && !allLinesHaveCodes) {
    throw new Error(`If one line in an utterance has a backslash code, all lines in the utterance must have backslash codes.`);
  }

  // Check that there are no duplicate codes

  const codeCounts = codes.reduce((counts, code) => {
    if (code === null) return counts;
    const currentCount = counts.get(code) || 0;
    counts.set(code, currentCount + 1);
    return counts;
  }, new Map);

  codeCounts.forEach((count, code) => {
    if (count > 1) {
      throw new Error(`The ${code} code appears more than once in the utterance. Each backslash code may only appear once.`);
    }
  });

  // Check that codes are valid

  codes.forEach(code => {
    if (!isValidCode(code)) {
      throw new Error(`The backslash code ${code} is invalid. Only characters A-Z, a-z, 0-9, and hyphens are allowed. Diacritics are not permitted.`);
    }
  });

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

    const codes = lines.map(getBackslashCode);

    validateBackslashCodes(codes);

    if (!hasBackslashCodes(codes)) {

      const lineCount = lines.length;

      if (lineCount === 2) return [`txn`, `tln`];
      if (lineCount === 3) return [`m`, `gl`, `tln`];

      throw new Error(`Cannot infer an interlinear gloss schema for utterances with more than 3 lines, or fewer than 2 lines.`);

    }

    return codes;

  } catch (e) {

    e.message = `[getSchema] ${e.message}\n\nUtterance text:\n\n${utteranceString}`;
    throw e;

  }

}
