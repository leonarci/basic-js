const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = n.toString().split('');
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      numbers.splice(i, 1);

      return parseInt(numbers.join(''));
    }
  }
  numbers.pop();
  return parseInt(numbers.join(''));
}

module.exports = {
  deleteDigit
};
