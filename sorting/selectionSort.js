//It selects the min and swaps the min to the front of the array
const swap = require('../swap.js');
const arr = [8,6,7,4,5,3,2,1];

selectionSort(arr);
console.log('SelectionSorted: ' + arr);

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for(let j=i+1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
  }
}