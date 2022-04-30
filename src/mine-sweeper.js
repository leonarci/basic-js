const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // let resultMatrix = [];
  // for (let i = 0; i < matrix.length; i++) {
  //   let matrixRow = [];
  //   for (let j = 0; j < matrix[i].length; j++) {
  //     matrixRow.push(0);
  //   }
  //   resultMatrix.push(matrixRow);
  // }
  let resultMatrix = matrix.map(el => el.map(el => el = 0));


  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === true) {
        for (let k = -1; k <= 1; k++) {
          for (let o = -1; o <= 1; o++) {
            if (resultMatrix[i + k] !== undefined && resultMatrix[i + k][j + o] !== undefined && !(k === 0 && o === 0)) {
              resultMatrix[i + k][j + o] += 1;
            }
          }
        }
      }
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
