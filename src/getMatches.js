/**
 * Retrieves the set of regular expression matches from a string
 * @param  {RegExp} regExp The regular expression to match
 * @param  {String} str    The string to match against
 * @return {Array}         Returns an Array of regular expression match objects, or null if no matches were found
 */
export default function getMatches(regExp, str) {

  const matches = [];
  let match     = regExp.exec(str);

  if (!match) return null;

  while (match !== null) {
    matches.push(match);
    match = regExp.exec(str);
  }

  return matches;

}
