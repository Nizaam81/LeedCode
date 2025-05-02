/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1 = nums.reduce((acc,val)=>acc+val,0)
    let sum2=0
    let x = nums.map((n)=>n.toString().split(""))
    let arr=x.flat()
    for(let i=0;i<arr.length;i++){
    sum2+=Number(arr[i])
}
 let result = sum1-sum2
    return result
};