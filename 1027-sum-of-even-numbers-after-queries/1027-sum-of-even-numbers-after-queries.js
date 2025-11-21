/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let even =0
    let result=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0) even+=nums[i]
    }
    for(let [value,index] of queries){
        if(nums[index]%2==0){
           even -= nums[index];
        }
        nums[index]+=value
        if (nums[index] % 2 === 0) {
            even += nums[index];
        }
         result.push(even);
    }
    

       
       
          return result
};