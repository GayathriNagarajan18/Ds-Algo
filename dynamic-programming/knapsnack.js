const weight = [1,2,4,2,5];
const value = [5,3,5,3,2];
let cache = {};

function knapsnack(currItemIndex, capacity) {
  let result;
  const key = "" + currItemIndex + capacity;
  if(cache[key]) {
    return cache[key];
  }
  if(currItemIndex == 0 || capacity == 0) {
    result = 0;
  } else if(weight[currItemIndex-1] > capacity) {
    result = knapsnack(currItemIndex-1, capacity);
  } else {
    result = Math.max(knapsnack(currItemIndex - 1, capacity), 
      value[currItemIndex-1] + knapsnack(currItemIndex - 1, capacity - weight[currItemIndex-1]));
  }
  cache[key] = result;
  return result;
}

console.log(knapsnack(5, 10));

