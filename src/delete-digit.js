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
  const array = String(n).split('');

  for (let i = 0; i < array.length; i++) {
    if (Number(array[i]) < Number(array[i + 1]) || i === array.length - 1) {
      array.splice(i, 1);
      return Number(array.join(''));
    }
  }
}

module.exports = {
  deleteDigit
};
