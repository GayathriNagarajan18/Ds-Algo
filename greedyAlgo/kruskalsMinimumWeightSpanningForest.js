let edges = {
  "AB": 0, "AD": 6, "BC": 9, "BD": 7, "BG": 5, "CG": -2, "CE": 4, "CF": 3, 
  "ED": 1, "EG": 3, "EF": 6, "DG": 2
};
let vertexLookUp = {
  'A' : 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6
};

let graph = [];
function constructGraph(edges) {
  for(let key in edges) {
    let edge = {};
    edge['vertex1'] = key[0];
    edge['vertex2'] = key[1];
    //Add ids
    edge['vertexId1'] = vertexLookUp[key[0]];
    edge['vertexId2'] = vertexLookUp[key[1]]; 
    edge['weight'] = edges[key];
    graph.push(edge);
  }
}

//roots is an array whose indexes are vertices and values are roots for that index
let roots = [];
let ranks = [];
function makeSet(verticesCount) {
  for(let i = 0; i < verticesCount; i++) {
    roots[i] = i;
    ranks[i] = 0;
  }  
}

function sortTheEdgesByMinWeight(graph) {
  return graph.sort((edge1, edge2) => {
    if(edge1.weight < edge2.weight) 
      return -1;
    if(edge1.weight > edge2.weight)
      return 1;
    return 0;
  });
}

function find(vertex) {
  if(vertex != roots[vertex]) {
    roots[vertex] = find(roots[vertex]); //does the path compression
  }
  return roots[vertex];
}

function union(v1, v2) {
  const rootOfV1 = find(v1);
  const rootOfV2 = find(v2);

  const rankOfV1 = ranks[rootOfV1];
  const rankOfV2 = ranks[rootOfV2];

  if(rankOfV1 < rankOfV2) {
    roots[v1] = v2;
  } else if(rankOfV2 < rankOfV1) {
    roots[v2] = v1;
  } else {
    roots[v2] = v1;
    ++ranks[v1];
  }
}

let mst = [];
function findMinWeightViaKruskalsAlgo() {
  sortTheEdgesByMinWeight(graph).forEach((edge) => {
    if(find(edge.vertexId1) !== find(edge.vertexId2)) {
      mst.push(edge);
      union(edge.vertexId1, edge.vertexId2);
    }  
  });
}

constructGraph(edges);
console.log('graph: ' + JSON.stringify(graph));

makeSet(7);
console.log('makeSet: ' + roots + ', ' + ranks);

findMinWeightViaKruskalsAlgo();
console.log('mst: ' + JSON.stringify(mst));
console.log('min weight: ' + mst.reduce((sum, edge) => sum + edge.weight, 0));

