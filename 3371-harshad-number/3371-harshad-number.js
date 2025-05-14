/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
   let str=x+""
   let a= str.split("")
   let sum=0
    for(let i=0;i<a.length;i++){
        sum+=Number(a[i])
    }
    if(x%sum===0){
        return sum
    }else{
         return -1
    }
   
};