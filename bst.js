let input = [8,7,3,4,9,5,6];
var theRoot = null;

function constructBst() {
  let nodes = input.map((item) => ({left: null, right: null, data: item}));
  nodes.forEach((node) => {
    theRoot = add(theRoot, node);
  });
}

function add(root, node) {
  if(null == root) {
    return node;
  } else if(node.data < root.data) {
    root.left = add(root.left, node);
  } else {
    root.right = add(root.right, node);
  }
  return root;
}

function deleteFromBst(root, dataToDelete) {
  if(root == null) {
    return root;
  }
  if(dataToDelete < root.data) {
    deleteFromBst(root.left, dataToDelete);
  } else if(dataToDelete > root.data) {
    deleteFromBst(root.right, dataToDelete);
  } else {
    if(root.left == null) {
      makeRightSubtreeTheRoot(theRoot, nodeToReplace);
    } else if(root.right == null) {
      makeLeftSubtreeTheRoot(theRoot, nodeToReplace);
    } else {
      const largestNode = getLargestOfLeftSubtree(root.left);
      root.data = largestNode.data;
      console.log('theRoot: ' + JSON.stringify(theRoot));
      deleteFromBst(root.left, root.data);
    }
  }
  return root;
}

// function makeLeftSubtreeTheRoot(root, nodeToReplace) {
//   if(root.left.data == nodeToReplace.data) {
//     root.left = nodeToReplace.left;
//   } else if(root.right.data == nodeToReplace.data) {
//     root.right = nodeToReplace.left;
//   } else {
//     makeLeftSubtreeTheRoot()
//   }
// }

function getLargestOfLeftSubtree(root) {
  if(root.right == null) {
    return root;
  }
  getLargestOfLeftSubtree(root.right);
}


function bfs() {
  let result = [];
  let queue = [theRoot];
  while(queue.length > 0) {
    const node = queue.shift();
    if(null !== node.data) {
      result.push(node.data);
    }
    node.left !== null ? queue.push(node.left) : '';
    node.right !== null ? queue.push(node.right) : '';
  }
  console.log('bfs: ' + result);
}

//dfs
function preOrder(node, result) {
  if(null == node) {
    return;
  }
  result.push(node.data);
  preOrder(node.left, result);
  preOrder(node.right, result);
  return result;
}

constructBst();
console.log('Bst: ' + JSON.stringify(theRoot));

bfs();

theRoot = deleteFromBst(theRoot, 8);
console.log('Delete from Bst: ' + JSON.stringify(theRoot));

const preOrdered = preOrder(theRoot, []);
console.log('preOrdered: ' + preOrdered);




