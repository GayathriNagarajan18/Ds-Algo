//O(logn)
const arr = [10,21,3,9,34,6,4,56,21,12,5,2,0,100];
const target = 34;

arr.sort((a,b) => a-b);
console.log('arr: ' + arr);
console.log("recursive: " + binarySearch(target, arr, 0, arr.length-1));

//Recursive way
function binarySearch(target, arr, low, high) {
  if(low > high) {
    return false;
  }
  const mid = Math.floor((low + high) / 2);
  //console.log('mid: ' + mid + ', ' + arr[mid]);
  if(target == arr[mid]) {
    return true;
  } else if(target < arr[mid]) {
    return binarySearch(target, arr, low, mid-1);
  } else if(target > arr[mid]){
    return binarySearch(target, arr, mid+1, high);
  }
}

console.log("iterative: " + binarySearch(target, arr, 0, arr.length-1));
//Iterative way
function iterativeBinarysearch(target, arr) {
  let low = 0;
  let high = arr.length - 1;
  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    if(target == arr[mid]) {
      return true;
    } else if(target < arr[mid]) {
      high = mid-1;
    } else if(target > arr[mid]){
      low = mid+1;
    }
  }
  return false;
}
