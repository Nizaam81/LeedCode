/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
   let max=""
   for(let i=0;i<num.length-2;i++){
    let a=num[i],b=num[i+1],c=num[i+2]
    if(a===b&&b===c){
        let triple=a+b+c
        if(triple>max){
          max=triple
        }
    }
   }
   return max
};