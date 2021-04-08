/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  if (!str) return '';
  let s = '';
  let c = 1;
  let p = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === p) {
      c++;
    } else {
      if (c > 1) s += String(c);
      s += p;
      c = 1;
      p = str[i];
    }
  }
  if (c > 1) s += String(c);
  s += p;
  return s;
}

module.exports = encodeLine;
