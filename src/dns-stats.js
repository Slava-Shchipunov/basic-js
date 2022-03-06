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
  let resultArray = [];
  const result = {};

  for (let i = 0; i < domains.length; i++) {
    let interimArray = domains[i].split('.').reverse();
    const someArr = [];
    for (let j = 0; j < interimArray.length; j++) {
      j === 0 ? someArr.push('.' + interimArray[j]) : someArr.push(someArr[j - 1] + '.' + interimArray[j])
    }
    resultArray = resultArray.concat(someArr);
  }

  for (let i = 0; i < resultArray.length; i++) {
    result.hasOwnProperty(resultArray[i]) ? result[resultArray[i]] = 1 + result[resultArray[i]] : result[resultArray[i]] = 1;
  }

  return result;
}

module.exports = {
  getDNSStats
};
