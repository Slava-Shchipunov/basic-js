const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if ((date instanceof Date === false || Object.getOwnPropertyNames(date).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
  } else if (typeof date === 'object' && date instanceof Date) {
    let month = date.getMonth();
    let season = '';

    if (month >= 0 && month < 2 || month === 11) {
      return season = 'winter';
    } else if (month >= 2 && month < 5) {
      return season = 'spring';
    } else if (month >= 5 && month < 8) {
      return season = 'summer';
    } else if (month >= 8 && month < 11) {
      return season = 'autumn';
    }
  } else {
    return 'Unable to determine the time of year!'
  } 

}

module.exports = {
  getSeason
};
