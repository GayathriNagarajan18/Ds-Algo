// let graph = {
//   "AB": 0, "AD": 6, "BC": 9, "BD": 7, "BG": 5, "CG": -2, "CE": 4, "CF": 3, 
//   "ED": 1, "EG": 3, "EF": 6, "DG": 2
// };

// let visitedVertices = [];
// let visitedEdges = {};

// function sortTheEdgesByMinWeight() {
//   return Object.entries(graph).sort((edge1, edge2) => {
//     if(edge1[1] < edge2[1]) 
//       return -1;
//     if(edge1[1] > edge2[1])
//       return 1;
//     return 0;
//   });
// }

// function findMinWeightViaKruskalsAlgo() {
//   sortTheEdgesByMinWeight().forEach((edge) => {
//     const vertex1 = edge[0][0];
//     const vertex2 = edge[0][1];
//     if()
//   });
//   return Object.entries(visitedEdges).reduce((sum, vertex) => vertex[1] + sum, 0);
// }

// console.log("minWeight: " + findMinWeightViaKruskalsAlgo() + " visitedVertices: " + visitedVertices
// + " visitedEdges: " + JSON.stringify(visitedEdges));