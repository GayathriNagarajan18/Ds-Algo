//Problem: https://leetcode.com/problems/minimum-path-sum/

function minPathSum(grid) {
    let cache = {'0-0' : grid[0][0]};
    return find(grid, grid.length-1, grid[0].length-1, cache);
}

function find(grid, r, c, cache) {
    const key = r + '-' + c;
    if(cache[key] !== undefined) {
        return cache[key];
    } else if(r > 0 && c > 0) {
        let options = [find(grid, r-1, c, cache), find(grid, r, c-1, cache)];
        cache[key] = grid[r][c] + Math.min(...options);    
    } else {
        cache[key] = grid[r][c] + 
            (r > 0 ? find(grid, r-1, c, cache) : find(grid, r, c-1, cache));
    }
    return cache[key];
}

console.log(`minPathSum: ${minPathSum([[0]])}`);
