const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  (options.separator === undefined) ? options.separator = '+' : options.separator;
  (options.addition === undefined) ? options.addition = '' : options.addition;
  (options.additionSeparator === undefined) ? options.additionSeparator = '|' : options.additionSeparator;
  (Number.isNaN(+options.repeatTimes)) ? options.repeatTimes = 1 : +options.repeatTimes;
  (Number.isNaN(+options.additionRepeatTimes)) ? options.additionRepeatTimes = 1 : +options.additionRepeatTimes;

  let addition = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  addition = addition.slice(0, addition.length - 1 - (options.additionSeparator.length - 1));

  let result = ((str + addition + options.separator).repeat(options.repeatTimes));
  result = result.slice(0, result.length - 1 - (options.separator.length - 1));

  return result;
}

module.exports = {
  repeater
};
