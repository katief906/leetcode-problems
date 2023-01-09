/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  const differences = nums.map((number) => {
    return (target - number)
  })

  let correctIndices = []

  differences.forEach((difference, diffIndex) => {
    nums.forEach((num, numIndex) => {
      if (difference === num && (diffIndex !== numIndex)) {
        correctIndices.push(numIndex)
      }
    })
  })
  
  return correctIndices
}