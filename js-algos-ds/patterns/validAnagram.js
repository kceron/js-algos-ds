// given 2 strings, write a func to determine
// if the 2nd string is an anagram of the 1st
// validAnagram('', '')  // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let freqCounter = {};
  for (let val of str1) {
    freqCounter[val] = (freqCounter[val] ?? 0) + 1;
  }
  // console.log(freqCounter)
  for (let char of str2) {
    if (freqCounter[char] > 0) {
      freqCounter[char]--;
    } else {
      return false;
    }
  }
  
  return true;
};

const validAnagram2 = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const freqCounter = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    freqCounter[letter] ? (freqCounter[letter] += 1) : (freqCounter[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!freqCounter[letter]) {
      return false;
    } else {
      freqCounter[letter] -= 1;
    }
  }
  return true;
};

console.log(validAnagram2("", ""));
console.log(validAnagram2("aaz", "zza"));
console.log(validAnagram2("anagram", "nagaram"));
console.log(validAnagram2("rat", "car"));
