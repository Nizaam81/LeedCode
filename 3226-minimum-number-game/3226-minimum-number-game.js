/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let result=[]
    let arr=nums.sort((a,b)=>a-b)
      for (let i = 0; i < nums.length; i += 2) {
        result.push(nums[i + 1]); 
        result.push(nums[i]);    
    }
     return result;
};