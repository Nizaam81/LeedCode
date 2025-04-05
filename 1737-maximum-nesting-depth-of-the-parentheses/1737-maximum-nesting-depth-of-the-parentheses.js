/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let curentDepth=0
    let maxDepth=0
    for(let i=0;i<s.length;i++){
        if(s[i]==="("){
            curentDepth++
            if(curentDepth> maxDepth){
                 maxDepth=curentDepth
            }
        }else if(s[i]==")"){
            curentDepth--
        }
    }

return  maxDepth
};