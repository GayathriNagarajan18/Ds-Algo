//If array is sorted already, it is n^2, otherwise, nlogn. Space complexity 1
let arr = [8,6,7,4,5,3,2,1];

quickSort(arr, 0, arr.length-1);

function quickSort(arr, low, high) {
  if(low < high) {
    const partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let swapIndex = low;
  for(let i = low; i < high; i++) {
    if(arr[i] < pivot) {
      swap(arr, swapIndex, i);
      swapIndex += 1;
    }
  }
  swap(arr, swapIndex, high);
  return swapIndex;
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

console.log('QuickSorted: ' + arr);