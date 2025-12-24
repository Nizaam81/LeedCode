/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sort =nums.sort((a,b)=>a-b)
    let sum =0
    for(let i=0;i<sort.length;i+=2){
        sum+=sort[i]
    }
    return sum
};