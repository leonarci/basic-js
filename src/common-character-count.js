const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let str1 = s1.split('');
  let str2 = s2.split('');
  for (el of str2) {
    let index = str1.findIndex(item => item === el);
    if (index !== -1) {
      result++;
      str1.splice(index, 1);
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
