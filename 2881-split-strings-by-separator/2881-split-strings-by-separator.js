/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let arr=[]
    for(let i=0;i<words.length;i++){
        let result=words[i].split(separator)
        for(let i of result){
            if(i!==""){
                arr.push(i)
            }
        }
    }
    return arr
};