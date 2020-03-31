//O(n^2). Used in TimSort. Insert the element one by one from right to the correct position in "front sorted list / left". 
const swap = require('../swap.js');
const arr = [8,6,7,4,5,3,2,1];

insertionSort(arr);
console.log('InsertionSorted: ' + arr);

function insertionSort(arr) {
  for(let i=1; i<arr.length; i++) {
    for(let j=i; j > 0; j--) {
      if(arr[j] < arr[j-1]) {
        swap(arr, j-1, j);
      }
    }
  }
  return arr;
}

module.exports = insertionSort;
