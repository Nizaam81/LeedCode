/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let x=0
    let arr=[]
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
         x=(nums[i]-1)*(nums[j]-1)
        arr.push(x)
    }

}

return  Math.max(...arr)
};