/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    
  let rows = grid[0].length
  let colum=grid.length
  let result=[]
  for(let i=0;i<rows;i++){
    let max=0
    for(let j=0;j<colum;j++){
        let num=grid[j][i]
        let length=String(num).length
        max=Math.max(max,length)
    } 
result.push(max)
  }
  return result
};