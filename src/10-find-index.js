/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  // return array.indexOf(value);
  let l = 0;
  let r = array.length - 1;
  let m = 0;
  while (array[m] !== value) {
    m = Math.floor((l + r) / 2);
    if (array[m] === value) return m;
    if (array[m] > value) r = m - 1;
    else l = m + 1;
  }
  return m;
}

module.exports = findIndex;
