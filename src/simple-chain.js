const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push('( )');
     } else {
      this.arr.push('( ' + value + ' )');
     }
    return this;
  },
  removeLink(position) {
    if (position > 0 && Number.isInteger(position) && this.arr.length > 0 && position <= this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr.splice(0, this.arr.length); 
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const a = this.arr.join('~~');
    this.arr.splice(0, this.arr.length);
    return a;
  }
};

module.exports = {
  chainMaker
};
