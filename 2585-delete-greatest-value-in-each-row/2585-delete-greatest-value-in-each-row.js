/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let score =0
    for(let x of grid){
        x.sort((a,b)=>a-b)
    }
    let col = grid[0].length
    for(let i = col-1 ;i>=0;i--){
        let maxVal=0

        for(let j=0 ;j<grid.length;j++){
           maxVal = Math.max(maxVal, grid[j][i]);
        }
          score += maxVal;
    }

    return score
  
};