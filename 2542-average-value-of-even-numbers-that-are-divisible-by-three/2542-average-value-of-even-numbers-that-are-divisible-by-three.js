/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let x=[]
    
    let even = nums.reduce((acc,val)=>{
        if(val%2==0){
     acc.push(val)
        }
        return acc
    },[])

    for(let i=0;i<even.length;i++){
        if(even[i]%3==0){
           x.push(even[i])
        }
    }


    let sum=x.reduce((ac,val)=>ac+val,0)
    let avg = Math.floor(sum / x.length);
    return avg ||0

};