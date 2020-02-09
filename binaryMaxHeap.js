var heap = [];

addToBinaryMaxHeap(5);
addToBinaryMaxHeap(8);
addToBinaryMaxHeap(9);
addToBinaryMaxHeap(1);
addToBinaryMaxHeap(10);
addToBinaryMaxHeap(3);
addToBinaryMaxHeap(4);

poll();
remove(5);

function addToBinaryMaxHeap(item) {
  heap.push(item);
  heapifyUp();
}


//O(logn), coz it checks only till root and does not go the other half in the binary tree.
function heapifyUp() {
  let childIndex = heap.length - 1;
  while(itIsGreaterThanParent(childIndex)) {
    const parentIndex = Math.floor((childIndex - 1) / 2);
    const temp = heap[childIndex];
    heap[childIndex] = heap[parentIndex];
    heap[parentIndex] = temp;
    childIndex = parentIndex;
  }
}

function itIsGreaterThanParent(childIndex) {
  const parentIndex = Math.floor((childIndex - 1) / 2);
  return heap[childIndex] > heap[parentIndex];
}

function poll() {
  if(heap.length == 1) {
    return heap.pop();
  }
  swap(0, heap.length -1);
  const root = heap.pop();
  heapifyDown(0);
  return root;
}

function heapifyDown(currIndex) {
  const left = (2 * currIndex) + 1;
  const right = (2 * currIndex) + 2;
  let indexToSwap = currIndex;

  if(heap[left] != null && heap[left] > heap[currIndex]) {
    indexToSwap = left;
  } 
  if(heap[right] != null && heap[right] > heap[currIndex] && heap[right] > heap[left]) {
    indexToSwap = right;
  }
  if(indexToSwap !== currIndex) {
    swap(indexToSwap, currIndex);
    heapifyDown(indexToSwap);
  }
}

function remove(data) {
  let currIndex = heap.indexOf(data);
  swap(currIndex, heap.length -1);
  heap.pop();
  if(itIsGreaterThanParent(currIndex)) {
    heapifyUp();
  } else {
    heapifyDown(currIndex);
  }
}

function swap(index1, index2) {
  const temp = heap[index1];
  heap[index1] = heap[index2];
  heap[index2] = temp;
}

function print() {
  console.log(heap);
}

print();
