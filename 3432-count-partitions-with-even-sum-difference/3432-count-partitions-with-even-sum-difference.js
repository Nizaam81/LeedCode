/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
   
 let total = 0;
    for (let n of nums) {
        total += n;
    }
     if (total % 2 !== 0) {
        return 0;
    }
     return nums.length - 1;
};