const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const fileNames = [];

  for (let i = 0; i < names.length; i++) {
    let array = names.slice(0, i);
    if (fileNames.includes(names[i]) && array.includes(names[i])) {
      let counter = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j] === names[i]) {
          counter++;
        }
      }
      fileNames[i] = names[i] + `(${counter})`;
    } else if (fileNames.includes(names[i])) {
      fileNames[i] = names[i] + '(1)';
    } else {
      fileNames[i] = names[i];
    }
  }
  return fileNames;
}

module.exports = {
  renameFiles
};
