/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if (s.length !== t.length) return false;
  const sort = str => str.split('').sort().join('');
  return sort(s) === sort(t);
};