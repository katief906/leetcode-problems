/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const letterArray = s.split("")
  const maxLetterIndex = s.length - 1
  let sum = 0

  letterArray.forEach((letter, letterIndex) => {
    if (letter === "I" || letter === "X" || letter === "C") {
      if ((letterArray[letterIndex] === letterArray[letterIndex + 1]) || (letterIndex === maxLetterIndex)) {
        if (letter === "I") {
          sum += 1
        } else if (letter === "X") {
          sum += 10
        } else {
          sum += 100
        }
      } else if (letterArray[letterIndex] !== letterArray[letterIndex + 1]){
        if (letter === "I") {
          if ((letterArray[letterIndex + 1] === "V") || (letterArray[letterIndex + 1] === "X")) {
            sum -= 1
          } else {
            sum += 1
          }
        } else if (letter === "X") {
          if ((letterArray[letterIndex + 1] === "L") || (letterArray[letterIndex + 1] === "C")) {
            sum -= 10
          } else {
            sum += 10
          }
        } else {
          if ((letterArray[letterIndex + 1] === "D") || (letterArray[letterIndex + 1] === "M")) {
            sum -= 100
          } else {
            sum += 100
          }
        }
      }
    } else {
      if (letter === "V") {
        sum += 5
      } else if (letter === "L") {
        sum += 50
      } else if (letter === "D") {
        sum += 500
      } else {
        sum += 1000
      }
    }
  })

  return sum
};