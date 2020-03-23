let bst = require('./bst');
let theRoot = null;

function constructRedBlackTree(input) {
  input.forEach((data) => {
    theRoot = addIntoRedBlackTree(theRoot, data);
  });
}


function addIntoRedBlackTree(theRoot, data) {
  let grandParent,parent,uncle;
  let node = {data: data, left: {color: 'black'}, right: {color: 'black'}, color: 'red', parent: null};
  theRoot = bst.add(theRoot, node);
  while(node.parent && node.parent.color == 'red') {
    setRelatives(node);  
    if(parent.color == 'red' && uncle.color == 'red') {
      parent.color = 'black';
      uncle.color = 'black';
      grandParent.color = 'red';
      node = grandParent;
    } else if(parent.color == 'red' && uncle.color == 'black') {
        if(parent == grandParent.left && parent.right == node) { 
          rotateLeft(theRoot, parent);
          node = parent;
          setRelatives(node);
        } 
        if(parent == grandParent.right && parent.left == node) { 
          rotateRight(theRoot, parent);
          node = parent;
          setRelatives(node);
        }  
        if(parent == grandParent.left && parent.left == node) {
          parent.color = 'black';
          grandParent.color = 'red';
          rotateRight(theRoot, grandParent);
        } 
        if(parent == grandParent.right && parent.right == node) { 
          parent.color = 'black';
          grandParent.color = 'red';
          rotateLeft(theRoot, grandParent);
        }
    }
  }
  theRoot.color = 'black';

  function setRelatives(node) {
    grandParent = node.parent.parent;
    parent = node.parent;
    uncle = grandParent.left == parent ? grandParent.right : grandParent.left;
  }
  
  return theRoot;
}

function rotateRight(theRoot, nodeToRotate) {
  let parent = nodeToRotate.parent;
  let leftNode = nodeToRotate.left;
  
  if(nodeToRotate == theRoot) {
    theRoot = leftNode;
  } else if(parent.left == nodeToRotate) {
    parent.left = leftNode;
  } else {
    parent.right = leftNode;
  }

  leftNode.parent = parent;

  leftNode.right.parent = nodeToRotate.left;
  nodeToRotate.left = leftNode.right;

  nodeToRotate.parent = leftNode;
  leftNode.right = nodeToRotate;

  return theRoot;
}

function rotateLeft(theRoot, nodeToRotate) {
  let parent = nodeToRotate.parent;
  let rightNode = nodeToRotate.right;
  if(nodeToRotate == theRoot) {
    theRoot = rightNode;
  } else if(parent.left == nodeToRotate) {
    parent.left = rightNode;
  } else {
    parent.right = rightNode;
  }
  rightNode.parent = parent;

  rightNode.left.parent = nodeToRotate.right;
  nodeToRotate.right = rightNode.left;

  nodeToRotate.parent = rightNode;
  rightNode.left = nodeToRotate;

  return theRoot;
}

function preOrder(node, result) {
  if(null == node) {
    return;
  }
  node.data ? result.push({data: node.data, color: node.color}) : '';
  preOrder(node.left, result);
  preOrder(node.right, result);
  return result;
}

constructRedBlackTree([10,7,11,3,9,5,4]);
console.log('Red black tree, preOrder traversal: ' + JSON.stringify(preOrder(theRoot, [])));
