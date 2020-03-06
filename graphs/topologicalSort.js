//To ensure the dependencies are dealt first before moving to the child(most dependent node). 
//Works only on DAG directed acyclic graph
//Most dependent node comes last and independent node comes first
//O(V+E) time
//Uses adjacency list which can either be represented by hashmap or list of nodes.

let graph = {A: ['D'], B: ['D'], C: ['A','B'], D: ['G','H'], E: ['A','D','F'], F: ['K', 'J'],
G: ['I'], H: ['I', 'J'], I: ['L'], J: ['M', 'L'], K: ['J'], L: [], M: []};

let visited = {};
function initialiseVisited() {
  Object.keys(graph).forEach((vertex) => visited[vertex] = false);
}

let output = [];
let outputIndex = Object.keys(graph).length;

//O(E)
function dfs(vertex, graph, visited) {
  visited[vertex] = true;
  graph[vertex].forEach((neighbour) => {
    if(!visited[neighbour]) {
      dfs(neighbour, graph, visited);
    }
  });
  output[--outputIndex] = vertex;
}

//O(V+E)
function sortTopologically() {
  Object.keys(graph).forEach((vertex) => {
    if(!visited[vertex]) {
      dfs(vertex, graph, visited);
    }
  });
}

sortTopologically();
console.log(`output: ${output}`);

