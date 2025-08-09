/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {

    let binary = n.toString(2).padStart(32, "0");

    let reversedBinary = binary.split("").reverse().join("");

    return parseInt(reversedBinary, 2);
};