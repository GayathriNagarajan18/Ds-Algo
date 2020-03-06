//Greedy Algorithm / Graph search algorithm / O(E + VlogV) 
const priorityQueue = require('../trees/priorityQueue.js');
let minHeap = priorityQueue.queue;

let graph = {
  "AB": 4, "BC": 15, "AE": 7, "AC": 20, "BD": 10, "CE": 11, "CD": 14, 
  "ED": 6, "DF": 8, "DG": 16, "EG": 13, "FG": 5
};

function getNeighbours(vertex) {
  let vertexEdges = Object.keys(graph).filter((edge) => edge.includes(vertex));
  return vertexEdges.map((edge) => edge.replace(vertex, ''));
}

function getAllVertices() {
  return Object.keys(graph).map((edge) => edge.split('')).reduce((vertices, pair) => {
    if(vertices.indexOf(pair[0]) === -1) {
      vertices.push(pair[0]);
    } 
    if(vertices.indexOf(pair[1]) === -1) {
      vertices.push(pair[1]);
    }
    return vertices;
  },[]);
}

let startVertex = "A";
let endVertex = "F";
let visited = [];
let distance = {};
let previousVertex = {};
priorityQueue.add(startVertex, 0);

initializeAllDistancesToInfinity();
findShortestPathViaDijkstraAlgo();
printShortestPath();

function printShortestPath() {
  let vertex = endVertex;
  let path = [vertex];
  while(vertex !== startVertex) {
    vertex = previousVertex[vertex];
    path.push(vertex);
  }
  console.log(`path: ${path}, distance: ${distance[endVertex]}`);
}

function initializeAllDistancesToInfinity() {
  let vertices = getAllVertices();
  vertices.forEach((vertex) => distance[vertex] = Infinity);  
}

function getEdgeWeight(currVertex, neighbour) {
  const edgeWeight = graph[currVertex+neighbour];
  return edgeWeight ? edgeWeight : graph[neighbour+currVertex];
}

function findShortestPathViaDijkstraAlgo() {
  while(minHeap.length !== 0) {
    let currVertex = priorityQueue.poll();
    
    getNeighbours(currVertex.data).forEach((neighbour) => {
      if(visited.indexOf(neighbour) == -1) {
        const newDistance = currVertex.priority + getEdgeWeight(currVertex.data, neighbour);
        const neighbourDistance = distance[neighbour];

        if(newDistance < neighbourDistance) {
          distance[neighbour] = newDistance;
          previousVertex[neighbour] = currVertex.data;
    
          if(minHeap.indexOf(neighbour) !== -1) {
            priorityQueue.changePriority(neighbour, newDistance);
          } else {
            priorityQueue.add(neighbour, newDistance);
          }
        }
      }
    });
    visited.push(currVertex);
  }
}
