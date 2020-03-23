//Problem: https://leetcode.com/problems/minimum-path-sum/

let minPathSum = function(grid) {
    let totalCost = grid;
    let r,c;
    for(r = 0; r < grid.length; r++) {
        for(c = 0; c < grid[0].length; c++) {
            if(r == 0 && c == 0) {
              totalCost[r][c] = grid[r][c];
            } else if(r > 0 && c > 0) {
                totalCost[r][c] = Math.min(totalCost[r-1][c], totalCost[r][c-1]) + grid[r][c];
            } else {
                totalCost[r][c] = (r > 0 ? totalCost[r-1][c] : totalCost[r][c-1]) + grid[r][c];
            }
        }
    }
    return totalCost[r-1][c-1];
};
