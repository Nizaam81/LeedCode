/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
  
    let even = nums.filter(num => num % 2 === 0);
    if (even.length === 0) return -1;

    let frq = even.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    let maxFreq = 0;
    let result = -1;

    for (let [key, value] of Object.entries(frq)) {
        const num = Number(key);
        if (
            value > maxFreq ||
            (value === maxFreq && num < result)
        ) {
            maxFreq = value;
            result = num;
        }
    }

    return result;

};