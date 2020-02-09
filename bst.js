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
bfs();
const preOrdered = preOrder(theRoot, []);
console.log('preOrdered: ' + preOrdered);




