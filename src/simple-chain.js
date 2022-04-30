const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
    return chainMaker;
  },
  addLink(value) {
    this.chain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if (Number.isNaN(+position) || position > this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let result = this.chain.map((el, index, arr) => {
      return (arr.length - 1 === index) ? `( ${el} )` : `( ${el} )~~`
    }).join('');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
