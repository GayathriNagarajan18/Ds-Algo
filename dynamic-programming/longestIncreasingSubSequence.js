// //Given [50, 3, 10, 7, 40, 80], should return [3,7,40,80]. Should print the length 4.
// function lis(index, arr) {
//   if(arr.length === index) {
//     return 0;
//   } else if(arr[index] < arr[index+1]) {
//     return lis(index+1, arr.slice(index+1));
//   } else {
//     return 1 + lis(index+1, arr.slice(index+1));
    
//   }
// }