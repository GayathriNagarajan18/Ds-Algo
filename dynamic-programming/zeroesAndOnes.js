
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let cache = [];
    for(let i = 0; i <= m; i++) {
        cache[i] = [];
        for(let j = 0; j <= n; j++) {
            cache[i][j] = 0;
        }
    }
    for(let str of strs) {
        let zeroes = count(str, '0');
        let ones = str.length - zeroes;
        console.log(`str: ${str} zeroes: ${zeroes} ones: ${ones}`);
        
        for(let i = m; i > -1; i--) {
            for(let j = n; j > -1; j--) {
                let constraintMatch = (zeroes <= i && ones <= j);
                const includingCurrStr = constraintMatch ? 1 + cache[i-zeroes][j-ones] : 0;
                cache[i][j] = Math.max(cache[i][j], includingCurrStr);        
            }
        }
    }
    console.log('cache: ' + cache);
    return cache[m][n];
};

function count(str, character) {
    return str.split('').filter((item) => item == character).length;
}

const input = ["10"];
console.log(findMaxForm(input, 2, 2));