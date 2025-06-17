/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let colms=matrix[0].length
    let rows=matrix.length
    let result= new Array(colms).fill().map(()=>new Array(rows))

   for(let i=0;i<rows;i++){
      for(let j=0;j<colms;j++){
        result[j][i]=matrix[i][j]
      }
   }
   return result
};