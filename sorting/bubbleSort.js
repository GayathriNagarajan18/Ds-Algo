//Keep Comparing adjacents so that in every loop, the highest ele goes to the end of array.
const swap = require('../swap.js');
const arr = [8,6,7,4,5,3,2,1];

bubbleSort(arr);
console.log('BubbleSorted: ' + arr);

function bubbleSort(arr) {
  let i = 0;
  while(i < arr.length) {
    i++;
    for(let j = 0; j < arr.length - i; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
}
