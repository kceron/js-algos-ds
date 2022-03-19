// write a function takes in 2 strings and checks whether the chars
// in the 1st string form a subsequence of the chars in the 2nd string
// do the chars in the first string appear somewehre in the 2nd string?

function isSubsequence(str1, str2) {
  let i = 0;
  let found = [];
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
      found.push(str2[j])
    } 
  }
  if (found.join('') === str1) return true;
  return false;
}

// sol 2 iterative
function isSubsequence2(str1, str2) {
  var i = 0;
  var j = 0;
  // if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// sol 3 recursive, not O(1)
function isSubsequence3(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence3(str1.slice(1), str2.slice(1))  
  return isSubsequence3(str1, str2.slice(1))
}

console.log(isSubsequence3('hello', 'hello world')); // true
console.log(isSubsequence3('sing', 'sting')); // true
console.log(isSubsequence3('abc', 'abracadabra')); // true
console.log(isSubsequence3('abc', 'acb')); // false (order matters)