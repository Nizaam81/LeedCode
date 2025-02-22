/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let p="";
    for(let i=0;i<words.length;i++){
        p+=words[i]
        if(p==s){
            return true
        }
    }
    return false
};