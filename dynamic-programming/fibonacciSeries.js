//Normal Recursion
function fib(n) {
  if(n == 0 || n == 1) {
    return 1;
  }
  return fib(n-1) + fib(n-2);
}

//Using memoize
let cache = {0 : 1, 1: 1};

function memoizedFib(n) {
  if(cache[n]) {
    return cache[n];
  } 
  cache[n-1] = memoizedFib(n-1) 
  cache[n-2] = memoizedFib(n-2);
  return cache[n-1] + cache[n-2];
}
console.log(memoizedFib(100));

//Using bottom-up approach