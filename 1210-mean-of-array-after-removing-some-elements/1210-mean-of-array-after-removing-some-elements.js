/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let array=arr.sort((a,b)=>a-b)
   
   let percentage=array.length*0.05
   array.splice(0,percentage)
   
    for(let i=0;i<percentage;i++){
        array.pop()
    }
   
  let sum=array.reduce((acc,val)=>acc+val)
  let avg=sum/array.length
  return avg
  

   
    
};