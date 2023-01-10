/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const wordArray = s.trim().split(" ")
  const lastWordIndex = wordArray.length - 1
  return wordArray[lastWordIndex].length
};