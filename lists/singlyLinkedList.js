//Insert a new value at end O(n)
var head = null;
head = addAtEnd(head, 15);
console.log(JSON.stringify(addAtEnd(head, 34)));
console.log(JSON.stringify(addAtEnd(head, 12)));
console.log(JSON.stringify(addAtEnd(head, 1)));
console.log(JSON.stringify(addAtEnd(head, 10)));

function addAtEnd(head, value) {
  let node = {data: value, next: null};
  if(null == head) {
    head = node;
  } else {
    let temp = head;
    while(temp.next != null) {
      temp = temp.next;
    }
    temp.next = node;
  }
  return head;
}

//Delete node at end O(n)
head = deleteTheLast(head);
console.log("deleted: " + JSON.stringify(deleteTheLast(head)));

function deleteTheLast(head) {
  if(null == head) {
    return false;
  } else if(head.next == null) {
    head = null;
  } else {
    let temp = head;
    let prev = head;
    while(temp.next != null) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
  }
  return head;
}

//Add at beginning O(1)
head = addAtFront(head, 100);
head = addAtFront(head, 19);
head = addAtFront(head, 29);

function addAtFront(head, value) {
  let node = {data: value, next: null};
  node.next = head;
  head = node;
  return head;
}

//Delete the first O(1)

head = deleteTheFirst(head);
head = deleteTheFirst(head);

function deleteTheFirst(head) {
  let nodeToDelete = head;
  head = head.next;
  nodeToDelete = null;
  return head;
}

//Insert After O(1), if the node is given, otherwise "O(n) or serachtime + O(1)"
insertAfter(head, 34, 98);

function insertAfter(head, previousData, newData) {
  let node = getNode(head, previousData);
  let newNode = {data: newData, next: null};
  newNode.next = node.next;
  node.next = newNode;
}

//delete After "searchtime + O(1)"
deleteAfter(head, 34);

function deleteAfter(head, dataBeforeDeleteNode) {
  let nodeBeforeDeleteNode = getNode(head, dataBeforeDeleteNode);
  let nodeToDelete = nodeBeforeDeleteNode.next;
  nodeBeforeDeleteNode.next = nodeToDelete.next;
  nodeToDelete = null;
}

//deleteTheNode "searchtime + O(1)"
deleteTheNode(head,34);

function deleteTheNode(head, dataToDelete) {
  let nodeToDelete = getNode(head, dataToDelete);
  let previousNode = getPreviousNode(head, nodeToDelete);
  previousNode.next = nodeToDelete.next;
  nodeToDelete = null;
}

function getPreviousNode(head, targetNode) {
  let node = head;
  while(node.next != targetNode) {
    node = node.next;
  }
  if(node.next != null) {
    return node;
  }
}

function getNode(head, data) {
  let node = head;
  while(node != null) {
    if(node.data == data) {
      return node;
    }
    node = node.next;
  }
}

console.log(JSON.stringify(head));