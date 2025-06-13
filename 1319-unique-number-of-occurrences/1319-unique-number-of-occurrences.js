/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let frq=arr.reduce((acc,val)=>{
        acc[val]=(acc[val]||0)+1
        return acc
    },{})
    let value = Object.values(frq)
    let unique=new Set(value)
    
    return value.length==unique.size

    
};