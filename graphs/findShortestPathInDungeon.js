//Find the shortest path between start and end node in a maze or dungeon represented by 2D adjacency matrix

const bfs = require('./bfs');

const rows = 5;
const columns = 7;
let graph = new Array(rows);
let rockIndices = [[0,3], [1,1], [2,1], [3,2], [3,3], [4,0], [4,2], [4,5]];
constructGraph(graph);

function constructGraph(graph) {
  let k=0;
  for(let i=0; i<rows; i++) {
    graph[i] = new Array(columns);
    for(let j=0; j<columns; j++) {
      graph[i][j] = ++k
    }
  }
  for(let i=0; i<rockIndices.length; i++) {
    const [x,y] = rockIndices[i];
    graph[x][y] = '#';
  }
}

let startNode = 1;
//let endNode = 32;
let endNode = 35;


let getNeighbours = (currVertex, graph) => {
  let validNeighbourLookup = {
    '00': ['e', 's'],
    '06': ['w', 's'],
    '40': ['e', 'n'],
    '46': ['w', 'n'],
    '0c': ['e', 'w', 's'],
    'r0': ['n', 'e', 's'],
    '4c': ['e', 'w', 'n'],
    'r6': ['w', 'n', 's'],
    'rc': ['n','e','w','s']
  };
  let row, column;
  if(currVertex == 0) {
    row = 0;
    column = 0;
  } else if(currVertex % 7 == 0) {
    row = (currVertex / 7) - 1;
    column = 6;
  } else {
    row = Math.floor(currVertex / 7);
    column = (currVertex % 7) - 1;
  }

  console.log(`currVertex: ${currVertex}, row-column: [${row},${column}]`);
  let x = (row !== 0 && row !== 4) ? 'r' : row;
  let y = (column !== 0 && column !== 6) ? 'c' : column;

  const validNeighbours = validNeighbourLookup[''+x+y];
  const neighbours = [];
  if(validNeighbours.indexOf('n') !== -1) {
    const north = graph[row - 1][column];
    if(north !== '#')
      neighbours.push(north);
  } 
  if(validNeighbours.indexOf('s') !== -1) {
    const south = graph[row+1][column];
    if(south !== '#')
      neighbours.push(south);
  } 
  if(validNeighbours.indexOf('e') !== -1) {
    const east = graph[row][column+1];
    if(east !== '#')
      neighbours.push(east);
  } 
  if(validNeighbours.indexOf('w') !== -1) {
    const west = graph[row][column-1];
    if(west !== '#')
      neighbours.push(west);
  }
  return neighbours;
}

const previousVertices = bfs.searchBreadthWise(graph, startNode, endNode, rows*columns, getNeighbours);
console.log('previousVertices: ' + previousVertices);
bfs.getPathBetweenTwoNodes(startNode, endNode, previousVertices);