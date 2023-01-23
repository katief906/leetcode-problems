/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const characters = s.split("")
  const maxIndex = characters.length - 1
  const leftCenterIndex = (characters.length / 2)
  let sum = 0

  if (characters.length % 2 !== 0) {
      return false
  }

  if (characters[0] === ")" || characters[0] === "]" || characters[0] === "}") {
      return false
  }

  let openBracketArray = []

  for(let i = 0; i < characters.length; i++) {
      if (characters[i] === "(" || characters[i] === "[" || characters[i] === "{") {
          openBracketArray.push(characters[i])
      } else {
          if ((characters[i] === ")" && openBracketArray[openBracketArray.length - 1] === "(") || (characters[i] === "]" && openBracketArray[openBracketArray.length - 1] === "[") || (characters[i] === "}" && openBracketArray[openBracketArray.length - 1] === "{")) {
              openBracketArray.pop()
          } else {
              return false
          }
      }
  }

  if (openBracketArray.length > 0) {
      return false
  } else {
      return true
  }
}