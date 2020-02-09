const cache = {};
function lcs(word1, word2, index1, index2) {
  let result;
  const key = ""+index1+index2;
  if(cache[key]) {
    return cache[key];
  } else if(index1 === 0 || index2 === 0) {
    result = 0;
  } else if(word1[index1-1] === word2[index2-1]) {
    result = 1 + lcs(word1, word2, --index1, --index2);
  } else if(word1[index1-1] !== word2[index2-1]) {
    const seq1 = lcs(word1, word2, index1-1, index2);
    const seq2 = lcs(word1, word2, index1, index2-1);
    result = Math.max(seq1, seq2);    
  }
  cache[key] = result;
  return result;
}

const word1 = "abdefgh";
const word2 = "abcnumg";
console.log(lcs(word1, word2, word1.length, word2.length));