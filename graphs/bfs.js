//BFS. Datastructure for bfs is queue and for graph is adjacency list. O(V+E)

let graph = {
  0: [9,7], 9: [10,8], 7: [0,3,11,6], 10: [1,9], 8: [1,9,12], 3: [7,2,4], 11: [7],
  6: [7,5], 1: [10,8], 12: [8,2], 2: [12,3], 4: [3], 5: [6]
};

function searchBreadthWise(graph, startNode, endNode, numOfNodes, getNeighbours) {
  console.log(`graph: ${graph}`);
  let visited = new Array(numOfNodes).fill(false);
  let previousVertices = new Array(numOfNodes).fill(null);
  let queue = [];

  queue.push(startNode);
  visited[startNode] = true;
  
  while(queue.length !== 0) {
    let currVertex = queue.shift();
    if(currVertex == endNode) {
      return previousVertices;
    }
    const neighbours = getNeighbours(currVertex, graph);
    neighbours.forEach((neighbour) => {
      if(!visited[neighbour]) {
        queue.push(neighbour);
        previousVertices[neighbour] = currVertex;
        visited[neighbour] = true;
      }
    });
  }
  return previousVertices;
}

function getPathBetweenTwoNodes(start, end, previousVertices) {
  let path = [];
  for(let node = previousVertices[end]; node !== null; node = previousVertices[node]) {
    path.push(node);
  }
  path.reverse();
  console.log('path: ' + path);
  return path[0] == start ? path: [];
}

function testBfs() {
  const previousVertices = searchBreadthWise(graph, Object.keys(graph).length, (vertex, graph) => graph[vertex]);
  console.log('PreviousVertices: ' + JSON.stringify(previousVertices));
  getPathBetweenTwoNodes(0, 4, previousVertices);
}

module.exports = {
  searchBreadthWise: searchBreadthWise,
  getPathBetweenTwoNodes: getPathBetweenTwoNodes
};

