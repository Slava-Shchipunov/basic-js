const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-');
  let isMAC = true;
  const regexp = /[0-9A-F]/;

  if (arr.length === 6) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === 2) {
        if (!(regexp.test(arr[i][0]) && regexp.test(arr[i][1]))) {
          isMAC = false;
          break;
        }
      } else {
        isMAC = false;
        break;
      }
    }
  } else {
    isMAC = false;
  }

  return isMAC;
}
module.exports = {
  isMAC48Address
};
