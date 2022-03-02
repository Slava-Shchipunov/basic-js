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
  let resultArray = [];
  let isSimpleArrays = true;

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  for (let i =0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev') {
      isSimpleArrays = false;
      break;
    }
  }

  if (isSimpleArrays) {
    resultArray = arr;
  } else {
    for (let i = 0, j = 0; i < arr.length; i++) {
      if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
        resultArray[j] = arr[i];
        j++;
      } else if (arr[i] === '--discard-next' && typeof arr[i + 1] !== 'undefined') {
        i++;
      } else if (arr[i] === '--discard-prev' && typeof arr[i - 1] !== 'undefined' && arr[i - 2] !== '--discard-next') {
        resultArray.pop;
        j--;
      } else if (arr[i] === '--double-next' && typeof arr[i + 1] !== 'undefined') {
        resultArray[j] = arr[i + 1];
        resultArray[j + 1] = arr[i + 1];
        j += 2;
        i++;
      } else if (arr[i] === '--double-prev' && typeof arr[i - 1] !== 'undefined' && arr[i - 2] !== '--discard-next') {
        resultArray[j] = arr[i - 1];
        j++;
      }
    }
  }

  return resultArray;

}

module.exports = {
  transform
};
