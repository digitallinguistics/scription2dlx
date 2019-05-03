/**
 * Creates an array of all the matching capture groups for a regular expression on a string
 * @param  {RegExp} regExp The regular expression to use for matching
 * @param  {String} str    The string to match against
 * @return {Array}         Returns an array of capturing groups
 */
export default function getMatches(regExp, str) {

  const matches = [];
  let match     = regExp.exec(str);

  while (match !== null) {
    matches.push(match.groups);
    match = regExp.exec(str);
  }

  return matches;

}
