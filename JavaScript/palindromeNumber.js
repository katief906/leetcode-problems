/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  if (x < 0) {
      return false
  } else {
      const reverseX = parseInt(x.toString().split("").reverse().join(""))
      if (reverseX === x) {
          return true
      } else {
          return false
      }
  }
}