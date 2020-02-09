var doublyLinkedList = {
  firstNode: null,
  lastNode: null
};

function constructNode(data) {
  return {
    data: data, prev: null, next: null
  };
}

//addAtFront, O(1)
doublyLinkedList = addAtFront(6);
doublyLinkedList = addAtFront(7);
doublyLinkedList = addAtFront(4);

function addAtFront(data) {
  let newNode = constructNode(data);
  if(doublyLinkedList.firstNode == null) {
    doublyLinkedList.firstNode = newNode;
    doublyLinkedList.lastNode = newNode;
  } else {
    doublyLinkedList.firstNode.prev = newNode;
    newNode.next = doublyLinkedList.firstNode;
    doublyLinkedList.firstNode = newNode;
  }
  return doublyLinkedList;
}

//addAtEnd O(1)
doublyLinkedList = addAtEnd(5);

function addAtEnd(data) {
  let newNode = constructNode(data);
  if(doublyLinkedList.lastNode == null) {
    doublyLinkedList.firstNode = newNode;
    doublyLinkedList.lastNode = newNode;
  } else {
    newNode.prev = doublyLinkedList.lastNode;
    doublyLinkedList.lastNode.next = newNode;
    doublyLinkedList.lastNode = newNode;
  }
  return doublyLinkedList;
}

//addAfter = searchtime + 1
doublyLinkedList = addAfter(6, 10);
doublyLinkedList = addAfter(10, 11);
doublyLinkedList = addAfter(11, 78);

function addAfter(prevData, newData) {
  let newNode = constructNode(newData);
  let node  = getNode(prevData);
  newNode.next = node.next;
  newNode.prev = node; 
  node.next.prev = newNode;
  node.next = newNode;
  return doublyLinkedList;
}

//deleteTheFirst O(1)
doublyLinkedList = deleteTheFirst();
function deleteTheFirst() {
  if(doublyLinkedList.firstNode.next == null) {
    doublyLinkedList.firstNode = null;
    doublyLinkedList.lastNode = null;
  } else {
    let nodeToDelete = doublyLinkedList.firstNode;
    doublyLinkedList.firstNode = nodeToDelete.next;
    nodeToDelete = null;
    doublyLinkedList.firstNode.prev = null;
  }
  return doublyLinkedList;
}

//deleteTheLast O(1)
doublyLinkedList = deleteTheLast();
function deleteTheLast() {
  if(doublyLinkedList.firstNode.next == null) {
    doublyLinkedList.firstNode = null;
    doublyLinkedList.lastNode = null;
  } else {
    let nodeToDelete = doublyLinkedList.lastNode;
    doublyLinkedList.lastNode = nodeToDelete.prev;
    nodeToDelete.prev.next = null;
    nodeToDelete = null;
  }
  return doublyLinkedList;
}

//deleteAfter searchTime + O(1)
doublyLinkedList = deleteAfter(10);

function deleteAfter(prevData) {
  let node = getNode(prevData);
  let nodeToDelete = node.next;
  nodeToDelete.next.prev = nodeToDelete.prev;
  nodeToDelete.prev.next = nodeToDelete.next;
  nodeToDelete = null;
  return doublyLinkedList;
}

function getNode(data) {
  let node = doublyLinkedList.firstNode;
  while(node != null) {
    if(node.data == data) {
      return node;
    }
    node = node.next;
  }
  return null;
}

//print forwards by traversing O(n)
function printForwards() {
  let items = [];
  let node = doublyLinkedList.firstNode;
  while(node != null) {
    items.push(node.data);
    node = node.next;
  }
  console.log(items);
}
//print backwards by traversing O(n)
function printBackwards() {
  let items = [];
  let node = doublyLinkedList.lastNode;
  while(node != null) {
    items.push(node.data);
    node = node.prev;
  }
  console.log(items);
}
printForwards();
printBackwards();