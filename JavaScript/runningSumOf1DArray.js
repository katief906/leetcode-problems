/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
  let sum = 0
  let output = []

  for(let i = 0; i < nums.length; i++){
      sum += nums[i]
      output.push(sum)
  }

  return output
}