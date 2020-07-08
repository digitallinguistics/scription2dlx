/**
 * Returns the difference between two arrays (filters the first array for values not contained in the second)
 * @param  {Array} a
 * @param  {Array} b
 * @return {Array}
 */
export default function difference(a, b) {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
}
