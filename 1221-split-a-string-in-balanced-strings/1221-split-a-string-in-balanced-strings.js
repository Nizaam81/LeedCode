/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let balanced =0
    let count =0

   for(let ch of s ){
    if(ch==="L"){
        balanced++
    }else{

        balanced--
    }
    if(balanced==0){
    count++
   }
   }
   

        
     
    return count 

};