//Bin Sort. O(n^2). Mostly O(n+k). Puts all elements into a limited bukcets using a formula - 
//floor(item*k) / maxEle. Sorts elements in each buket. Then return the concatenation of all buckets.

const insertionSort = require('./insertionSort.js')
const arr = [8,6,7,4,5,3,2,1];

const output = bucketSort(arr,2);
console.log('BucketSorted: ' + output);

function bucketSort(arr, numOfBuckets) {
  let buckets = Array(numOfBuckets+1);
  for(let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }
  const maxEle = Math.max(...arr);
  arr.forEach((item) => {
    buckets[Math.floor(item*numOfBuckets / maxEle)].push(item);
  });
  return buckets.reduce((output, bucket) => output.concat(insertionSort(bucket)), []);
}
