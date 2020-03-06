const priorityQueue = require('../trees/priorityQueue.js');
const arr = [8,6,7,4,5,3,2,1];
const sortedArr = [];

arr.forEach((item) => priorityQueue.add(item));

while(priorityQueue.queue.length > 0) {
  sortedArr.push(priorityQueue.poll().data);
}

console.log('Heap sorted: ' + sortedArr);

