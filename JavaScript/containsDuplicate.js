/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  if (nums.length === 1) {
    return false
  }

  nums.sort((a, b) => a - b)
  let currentNumber = nums[0]
  let numberOfDuplicates = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === currentNumber) {
      numberOfDuplicates++
    } else {
      currentNumber = nums[i]
    }

    if (numberOfDuplicates >= 1) {
      return true
    }
  }

  return false
}