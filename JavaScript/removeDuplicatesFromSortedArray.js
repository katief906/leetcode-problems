/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let currentUniqueNumber = nums[0]

  nums.forEach((num, numIndex) => {
      if((num === currentUniqueNumber) && (numIndex !== 0)){
          nums.splice(numIndex, 1, '_')
      } else {

          currentUniqueNumber = num
      }
  })

  nums.sort()
  while(nums[nums.length - 1] === '_'){
      nums.pop()
  }
  
  nums.sort((a,b) => a-b)
  return nums.length
}