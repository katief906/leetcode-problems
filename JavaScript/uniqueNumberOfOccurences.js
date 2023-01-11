/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
  const sortedArray = arr.sort((a,b) => a-b)

  if (sortedArray[0] === sortedArray[sortedArray.length - 1]) {
      return true
  }

  let uniqueNumbers = []
  sortedArray.forEach((number) => {
      if (!uniqueNumbers.includes(number)) {
          uniqueNumbers.push(number)
      }
  })

  let numberFrequencies = []
  uniqueNumbers.forEach((uniqueNumber) => {
      const firstIndex = sortedArray.findIndex((element) => element === uniqueNumber)
      const lastIndex = sortedArray.lastIndexOf(uniqueNumber)
      const total = lastIndex - firstIndex
      numberFrequencies.push(total)
  })

  numberFrequencies.sort((a,b) => a-b)
  for(let i = 0; i < numberFrequencies.length; i++){
      if (numberFrequencies[i] === numberFrequencies[i+1]) {
          return false
      }
  }

  return true
}