/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let amountArr = new Array(amount+1).fill(Infinity);
      amountArr[0] = 0;
      for(var rupees=1; rupees<=amount; rupees++) {
          for(let j=0; j<coins.length; j++) {
              if(coins[j] <= rupees) {
                  amountArr[rupees] = Math.min(
                      amountArr[rupees], 1+amountArr[rupees-coins[j]]);     
              }
          }
      }
      return amountArr[amount] == Infinity ? -1 : amountArr[amount];
  };

console.log(coinChange([1,2,5], 11));