const arr = [8,6,7,4,5,3,2,1];

function mergeSort(input) {
  if(input.length <= 1) {
    return input;
  }
  const middle = Math.floor(input.length / 2);
  let leftArr = input.slice(0,middle);
  let rightArr = input.slice(middle);

  leftArr = mergeSort(leftArr);
  rightArr = mergeSort(rightArr);

  return mergeTwoArrays(leftArr, rightArr);
}

function mergeTwoArrays(leftArr, rightArr) {
  let sortedArr = [];
  while(leftArr.length > 0 && rightArr.length > 0) {
    let min = 0;
    if(leftArr[0] < rightArr[0]) {
      min = leftArr.shift();
    } else {
      min = rightArr.shift();
    }
    sortedArr.push(min);
  }
  if(leftArr.length > 0) {
    sortedArr = sortedArr.concat(leftArr);
  }
  if(rightArr.length > 0) {
    sortedArr = sortedArr.concat(rightArr);
  }
  return sortedArr;
}

const sortedArr = mergeSort(arr);
console.log('Merge Sorted: ' + sortedArr);