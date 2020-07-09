/**
 * Removes any emphasis (asterisks) from a string
 * @param  {String} data
 * @return {String}
 */
export default function removeEmphasis(data) {

  const emphasisRegExp = /\*/gu;

  if (typeof data === `string`) return data.replace(emphasisRegExp, ``);

  return Object.entries(data).reduce((hash, [code, text]) => {

    hash[code] = text.replace(emphasisRegExp, ``); // eslint-disable-line no-param-reassign

    return hash;

  }, {});

}
