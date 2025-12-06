/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = [];

   
    for (let num of arr2) {
        for (let x of arr1) {
            if (x === num) result.push(x);
        }
    }

 
    let remaining = arr1.filter(x => !arr2.includes(x));


    remaining.sort((a, b) => a - b);

    return [...result, ...remaining];
    
};