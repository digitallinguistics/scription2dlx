/**
 * Checks that each line in the lines hash has the same number of items
 * @param {Object} lines The lines hash
 */
export default function validateNumItems(lines) {

  const itemLists    = Object.values(lines);
  const numItems     = Math.max(...itemLists.map(item => item.length));
  const sameNumItems = itemLists.every(list => list.length === numItems);

  if (!sameNumItems) {
    const e = new Error(`All morpheme and gloss lines must have the same number of words on each line, and each word must have the same number of morphemes.`);
    e.name  = `AlignmentError`;
    throw e;
  }

}
