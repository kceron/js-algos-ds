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

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)