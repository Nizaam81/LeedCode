/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let sum1=0,sum2=0,sum3=0
  if(Math.floor(n/2)==0){
    sum1+=n
  }else if(Math.floor((n-1))/2){
    sum2+=n
  }else{
    sum3+=n
  }
  let sum = sum1+sum2+sum3

  return sum-1
};