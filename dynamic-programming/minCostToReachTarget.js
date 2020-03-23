//Problem: https://leetcode.com/problems/min-cost-climbing-stairs/#

function minCostClimbingStairs(cost) {
  let cache = {1: cost[0], 2: cost[1]};
  cost.push(0);
  return find(cost, cache);
};

function find(cost, cache) {
  if(cache[cost.length] !== undefined) {
      return cache[cost.length];    
  }
  let last = find(cost.slice(0,cost.length-1), cache);
  let lastButOne = find(cost.slice(0,cost.length-2), cache);
  cache[cost.length] = Math.min(last, lastButOne) + cost[cost.length-1];
  return cache[cost.length];
}

console.log(`Case1 for [10, 15, 20]: ${minCostClimbingStairs([10, 15, 20])}`);
console.log(`Case2 for [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]: ${minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])}`);