/**
 * Takes an object hash whose values are arrays and returns an array of objects whose keys match those of the original hash
 * @param  {Object} hash An object hash whose values are arrays
 * @return {Array}       Returns an array of objects whose keys match those of the original hash
 */
export default function zip(hash) {

  const numItems = Math.max(...Object.values(hash).map(arr => arr.length));
  const items    = [];

  for (let i = 0; i < numItems; i++) {

    const item = Object.entries(hash)
    .reduce((o, [key, arr]) => {
      o[key] = arr[i]; // eslint-disable-line no-param-reassign
      return o;
    }, {});

    items.push(item);

  }

  return items;

}
