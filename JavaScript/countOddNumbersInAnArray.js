/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = (low, high) => {
  if ((low % 2 !== 0) && (high % 2 !== 0)){
      return((high - low)/2 + 1)
  } else {
      return((high - low)/2)
  }
}