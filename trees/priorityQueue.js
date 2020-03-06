let minHeap = [];

function execute() {
  constructMinHeap();
  poll();
  remove('f');
  changePriority('c', 4);
  print();
}

function constructMinHeap() {
  addToMinHeap('a', 10);
  addToMinHeap('b', 11);
  addToMinHeap('c', 7);
  addToMinHeap('d', 6);
  addToMinHeap('e', 9);
  addToMinHeap('f', 3);
  addToMinHeap('g', 2);
}

function addToMinHeap(item, priority=item) {
  minHeap.push({data: item, priority: priority});
  heapifyUp();
}

function heapifyUp() {
  let childIndex = minHeap.length - 1;
  while(itIsLesserThanParent(childIndex)) {
    const parentIndex = Math.floor((childIndex - 1) / 2);
    const temp = minHeap[childIndex];
    minHeap[childIndex] = minHeap[parentIndex];
    minHeap[parentIndex] = temp;
    childIndex = parentIndex;
  }
}

function itIsLesserThanParent(childIndex) {
  const parentIndex = Math.floor((childIndex - 1) / 2);
  return parentIndex >= 0 ? minHeap[childIndex].priority < minHeap[parentIndex].priority : false;
}

function poll() {
  if(minHeap.length == 1) {
    return minHeap.pop();
  }
  swap(0, minHeap.length -1);
  const root = minHeap.pop();
  heapifyDown(0);
  return root;
}

function heapifyDown(currIndex) {
  const left = (2 * currIndex) + 1;
  const right = (2 * currIndex) + 2;
  let indexToSwap = currIndex;

  if(minHeap[left] != null && minHeap[left].priority < minHeap[currIndex].priority) {
    indexToSwap = left;
  } 
  if(minHeap[right] != null && minHeap[right].priority < minHeap[currIndex].priority 
    && minHeap[right].priority < minHeap[left].priority) {
    indexToSwap = right;
  }
  if(indexToSwap !== currIndex) {
    swap(indexToSwap, currIndex);
    heapifyDown(indexToSwap);
  }
}

function restoreHeapInvariant(currIndex) {
  if(itIsLesserThanParent(currIndex)) {
    heapifyUp();
  } else {
    heapifyDown(currIndex);
  }
}

function remove(data) {
  let currIndex = minHeap.findIndex((item) => item.data === data);
  swap(currIndex, minHeap.length -1);
  minHeap.pop();
  restoreHeapInvariant(currIndex);
}

function changePriority(data, newPriority) {
  let currIndex = minHeap.findIndex((item) => item.data === data);
  minHeap[currIndex].priority = newPriority;
  restoreHeapInvariant(currIndex);  
}

function swap(index1, index2) {
  const temp = minHeap[index1];
  minHeap[index1] = minHeap[index2];
  minHeap[index2] = temp;
}

function print() {
  console.log(minHeap);
}

module.exports = {
  add: addToMinHeap,
  changePriority: changePriority,
  poll: poll,
  queue:  minHeap
};
