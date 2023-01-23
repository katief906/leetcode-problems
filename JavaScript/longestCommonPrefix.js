/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  const lettersArray = strs.map((string) => string.split(''))
  lettersArray.sort((a, b) => a.length - b.length)

  let sum = 0
  let output = ""

  for(let i = 0; i < lettersArray[0].length; i++){
      for(let j = 0; j < (lettersArray.length - 1); j++){
          if(lettersArray[j][i] !== lettersArray[j+1][i]){
              return output
          } else {
              sum++
          }
      }
      if(sum === lettersArray.length - 1){
          output += lettersArray[0][i]
          sum = 0
      }
  }

  return output
}