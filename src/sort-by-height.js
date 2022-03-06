const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const array = arr.filter(item => item !== -1);
  array.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  });

  const sortedArray = [];

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      sortedArray[i] = arr[i];
    } else {
      sortedArray[i] = array[j];
      j++;
    }
  }

  return sortedArray;
}

module.exports = {
  sortByHeight
};
