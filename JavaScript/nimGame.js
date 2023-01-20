/**
 * @param {number} n
 * @return {boolean}
 */

const canWinNim = function(n) {
  //last turn is when there's 1 - 3 stones left
  if (n <= 3) {
      return true
  } else {
      if (n % 4 === 0){
          return false
      } else {
          return true
      }
  }
}