const timestampRegExp = /^[0-9]{1,6}\.[0-9]{3}$/u;

function validateTimestamp(str) {
  if (!timestampRegExp.test(str)) {
    throw new Error(`Invalid timestamp.`);
  }
  return str;
}

/**
 * Extracts the start and end times from the duration line
 * @param  {String} line The duration line data
 * @return {String}
 */
export default function parseDuration(line) {

  if (!line) return null;

  try {

    const [startTime, endTime] = line
    .split(`-`)
    .map(timestamp => timestamp.trim())
    .map(validateTimestamp)
    .map(parseFloat);

    return { startTime, endTime }; // eslint-disable-line sort-keys

  } catch (e) {

    e.name    = `ParseDurationError`;
    e.message = `Error parsing duration. Make sure the duration is in SS.MMM-SS.MMM format.\n${e.message}`;
    throw e;

  }

}
