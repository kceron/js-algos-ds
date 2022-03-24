// write a func which accepts a string and returns the length of the longest
// substring with all distict chars

// function findLongestSubstring(str) {
//   let longestSubstring = '';
//   let result = 0;

//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i])
//     if (!longestSubstring.includes(str[i])) {
//       longestSubstring += str[i];
//     } else {
//       result = Math.max(result, longestSubstring.length)
//       console.log("result", result)
//       longestSubstring = longestSubstring.slice(1)
//       if (longestSubstring.includes(str[i])) {
        
//       }
//       longestSubstring += str[i];

//       console.log("longestSubstring 3", longestSubstring)
//     }
//     // console.log("longestSubstring", longestSubstring)
//   }
//   return result;
// }

function findLongestSubstring2(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];    
    if (seen[char]) {
      start = Math.max(start, seen[char]); 
    }
    longest = Math.max(longest, i - start + 1);  
    seen[char] = i + 1; // i:5
  }
  return longest;
}

console.log(findLongestSubstring2('')); // 0
console.log(findLongestSubstring2('rithmschool')); // 7
console.log(findLongestSubstring2('thisisawesome')); // 6
console.log(findLongestSubstring2('thecatinthehat')); // 7
console.log(findLongestSubstring2('bbbbb')); // 1
console.log(findLongestSubstring2('longestsubstring')); // 8