const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const CONTROL_SEQUENCES = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ];

  let result = arr.map(el => el);
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    switch (result[i]) {
      case CONTROL_SEQUENCES[0]:
        if (i === length - 1) {
          result.splice(i, 1);
          length -= 1;
        } else {
          result.splice(i, 2, null);
          // length -= 2;
          // i -= 1;
        }
        break;
      case CONTROL_SEQUENCES[1]:
        if (i === 0) {
          result.splice(i, 1);
          length -= 1;
          i--;
        } else {
          result.splice(i - 1, 2);
          length -= 2;
          i -= 2;
        }
        break;
      case CONTROL_SEQUENCES[2]:
        if (i === length - 1) {
          result.splice(i, 1);
          length -= 1;
          i--;
        } else {
          result.splice(i, 1, result[i + 1]);
          i--;
        }
        break;
      case CONTROL_SEQUENCES[3]:
        if (i === 0) {
          result.splice(i, 1);
          length -= 1;
        } else {
          result.splice(i, 1, result[i - 1]);
          i--;
        }
        break;
    }
  }
  result = result.filter(el => el !== null);
  return result;
}
module.exports = {
  transform
};
