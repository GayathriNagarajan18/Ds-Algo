//Problem: https://leetcode.com/problems/min-cost-climbing-stairs/#

let minCostClimbingStairs = function(cost) {
    let totalCost = [cost[0], cost[1]];
    let i;
    for(i = 2; i < cost.length; i++) {
        totalCost[i] = Math.min(totalCost[i-1], totalCost[i-2]) + cost[i];    
    }
    return Math.min(totalCost[i-1], totalCost[i-2]);
};
