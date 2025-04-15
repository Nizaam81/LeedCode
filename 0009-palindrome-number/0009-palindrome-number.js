/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let original = x;
    let reversed = 0;

    for (; x > 0; x = Math.floor(x / 10)) {
        reversed = reversed * 10 + (x % 10);

       
        if (reversed === x || Math.floor(reversed / 10) === x) {
            return true;
        }
    }

    return original === reversed;
};