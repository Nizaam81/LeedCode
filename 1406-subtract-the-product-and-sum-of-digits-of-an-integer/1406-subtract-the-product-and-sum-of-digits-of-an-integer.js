/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let x=n.toString().split('').map(Number)
   
   let value=x.reduce((acc,val)=>acc*val)
   let sum=x.reduce((acc,val)=>acc+val,0)
   let result =value-sum

 return result
};