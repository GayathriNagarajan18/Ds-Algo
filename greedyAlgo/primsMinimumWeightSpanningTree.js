//Greedy Algorithm / Graph search algorithm / O(ElogV) for lazy or O(VlogV) for eager
const priorityQueue = require('../trees/priorityQueue.js');
let minHeap = priorityQueue.queue;

let graph = {
  "AB": 0, "AD": 6, "BC": 9, "BD": 7, "BG": 5, "CG": -2, "CE": 4, "CF": 3, 
  "ED": 1, "EG": 3, "EF": 6, "DG": 2
};

let mst = [];
let visited = ["A"];
addUnvisitedEdgesToMinHeap("A");
constructMinimumSpanningTree();
console.log('mst: ' + JSON.stringify(mst));
console.log('min weight: ' + mst.reduce((sum, edge) => sum + edge.priority, 0));

function addUnvisitedEdgesToMinHeap(vertex) {
  getEdgesOfTheGivenVertex(vertex).forEach((edge) => priorityQueue.add(edge, graph[edge]));
} 

function getEdgesOfTheGivenVertex(vertex) {
  const edges = [];
  for(let edge in graph) {
    if(edge.includes(vertex) && visited.indexOf(edge.replace(vertex, '')) == -1) {
      edges.push(edge);
    }
  }
  return edges;
}

function vertexNotVisited(edge) {
  if(visited.indexOf(edge[0]) == -1) {
    visited.push(edge[0]);
    return true;
  }
  if(visited.indexOf(edge[1]) == -1) {
    visited.push(edge[1]);
    return true;
  }
  return false;
}

function constructMinimumSpanningTree() {
  while(minHeap.length !== 0) {
    const minEdge = priorityQueue.poll();
    if(vertexNotVisited(minEdge.data)) {
      mst.push(minEdge);
      addUnvisitedEdgesToMinHeap(visited[visited.length-1]);
    }
  }
}


