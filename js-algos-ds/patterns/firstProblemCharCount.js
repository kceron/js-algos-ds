// given a string return the count of each char in it

// function charCount(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {  // test if char is alphanumeric
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   // console.log("result", result);
//   return result;
// }

function charCount(str) {
  const result = {};
  for (let char of str) {
    if (isAlphanumeric(char)) {  // test if char is alphanumeric
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  console.log("result", result);
  return result;
}

function isAlphanumeric(char) {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)) {
        return false;
      }
  return true;
}
// console.log(isAlphanumeric('r'))
// isAlphanumeric(1)
// isAlphanumeric('/')
// isAlphanumeric(' ')

charCount("lalalola");
charCount("Hello Hi 8");
