/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const checkXMatrix = (grid) => {
  const maxRowIndex = grid.length - 1
  const maxCellIndex = grid[1].length - 1

  for(let i = 0; i <= maxRowIndex; i++) {
    for(let j = 0; j <= maxCellIndex; j++) {
      if ((j === i) || (j === (maxRowIndex - i))) {
        if (grid[i][j] === 0) {
          return false
        }
      } else {
        if (grid[i][j] !== 0) {
          return false
        }
      }
    }
  }
  return true
}