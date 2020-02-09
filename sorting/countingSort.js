//O(n+k) space and time. Create a bucket whose size equal to the range of elements. 
//Eg If arr = [3,5,9], bucket size will be 0-9. Fill the bucket with occurrences of the ele.
//So bucket will be [0,0,0,1,0,1,0,0,0,1]. Do a cumulative addition of occurrences so as to get 
//the appropriate index to place the ele. Shift one ele right so as to embrace the zero based index.
//Finally, place the ele based on the indexes arrived in the above step.

const arr = [2,5,3,0,2,3,0,3];

const output = sortByCounting(arr);
console.log('Sorted by Counting: ' + output);

function sortByCounting(arr) {
  const occurenceBucket = Array(Math.max(...arr)).fill(0);
  arr.forEach(element => {
    occurenceBucket[element] += 1;
  });
  for(let i=1; i < occurenceBucket.length; i++) {
    occurenceBucket[i] += occurenceBucket[i-1];
  }
  occurenceBucket.unshift(0);
  occurenceBucket.pop();

  const output = [];
  arr.forEach((ele) => {
    output[occurenceBucket[ele]] = ele;
    occurenceBucket[ele] += 1;
  });
  return output;
}