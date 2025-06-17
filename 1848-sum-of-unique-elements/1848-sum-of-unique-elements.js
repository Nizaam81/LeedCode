/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let x=nums.reduce((acc,val)=>{
    acc[val]=(acc[val]||0)+1
    return acc  },{})

let sum=0
for(let b in x){
    if(x[b]===1){
        sum+=Number(b)
    }
}
    return sum
}