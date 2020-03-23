//Edit distance between 2 string means the min number of operations to be performed on string1 to get string2.
//Operations are - replace, insert, delete the character
//Eg. adn -> and = 2.

let cache = {};
function editDistance(word1, word2, i, j) {
  const key = "" + i + "-" + j;
  if(i == 0) {
    cache[key] = j;
  } else if(j == 0) {
    cache[key] = i;
  } else if(word1[i-1] == word2[j-1]) {
    cache[key] = editDistance(word1, word2, i-1, j-1);
  } else {
    cache[key] = 1 + Math.min(editDistance(word1, word2, i, j-1),
    editDistance(word1, word2, i-1, j), editDistance(word1, word2, i-1, j-1));
  }
  return cache[key];
}

function calculateEditDistance(word1, word2) {
  console.log(`${word1}->${word2} : ${editDistance(word1, word2, word1.length, word2.length)}`);
}

let wordPairs = [["adn", "and"], ["saturday", "sunday"], ["gayathri", "sharadha"]]
.forEach((pair) => calculateEditDistance(pair[0], pair[1]));
