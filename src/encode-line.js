const { NotImplementedError } = require('../extensions/index.js');

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
  let result = '';
  let strArr = str.split('');
  let charNum = 1;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i + 1]) {
      charNum++;
    } else {
      if (charNum === 1) {
        result += strArr[i]
        charNum = 1;
      } else {
        result += charNum + strArr[i];
        charNum = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
