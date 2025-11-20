/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
   let map ={}

   for(let x of nums){
     map[x] = (map[x] || 0)+1
   }
   
for(let x in map){
    if(map[x]===1){
        return Number(x)
    }
}
};