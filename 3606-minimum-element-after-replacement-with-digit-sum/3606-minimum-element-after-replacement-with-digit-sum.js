/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {

let x= nums.map(n=>n.toString().split(''))
let res = []
for(let i of x){
    let sum=0
    for(let j=0;j<i.length;j++){
        sum += Number(i[j])
    }
    res.push(sum)
}
return Math.min(...res)



};