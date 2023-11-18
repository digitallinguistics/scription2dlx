/**
 * Checks whether a backslash code is valid
 * @param  {String}  str The string to check, without a leading slash
 * @return {Boolean}
 */
export default function isValidCode(str) {
  return /^[-A-Za-z0-9]+$/u.test(str)
}
