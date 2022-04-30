const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (el of domains) {
    let domain = el.split('.');
    let domainPart = '';
    for (let i = domain.length - 1; i >= 0; i--) {
      domainPart += `.${domain[i]}`;
      if (result[domainPart] === undefined) {
        result[domainPart] = 1;
      } else {
        result[domainPart] += 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
