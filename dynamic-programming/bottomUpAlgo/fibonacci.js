function findFibViaBottomUp(n){
  if(n === 1 || n === 0){
    return n;
  }
  var twoBehind = 1;
  var oneBehind = 1;
  var fib = 0;
  
  for(var i = 1; i < n; i++){
    fib = twoBehind + oneBehind;
    twoBehind = oneBehind;
    oneBehind = fib;
  }
  return fib;
}

console.log('Fib of 100: ' + findFibViaBottomUp(100));