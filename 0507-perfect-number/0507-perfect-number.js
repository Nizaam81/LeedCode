/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {

    let sum=0
    for(let i=1;i<num;i++){
        if(num%i===0){
            sum+=i
        }else{
            false
        }
    }
    return sum===num
    
};