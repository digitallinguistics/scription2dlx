/**
 * Checks that each line in the lines hash has the same number of items
 * @param {Object} lines The lines hash
 */
export default function validateNumItems(lines) {

  const itemLists    = Object.values(lines);
  const numItems     = Math.max(...itemLists.map(w => w.length));
  const sameNumItems = itemLists.every(list => list.length === numItems);

  if (!sameNumItems) {
    throw new Error(`All morpheme and glosses lines must have the same number of words and morphemes.`);
  }

}
