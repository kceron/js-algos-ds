// implement a func called countUniqueValues,
// which acceps a sorted arr, and counts the
// unique vals in the arr. There can be negative
// nums in the arr, but it will always be sorted
// countUniqueValues([1,1,1,1,1,2])      // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])  // 7
// countUniqueValues([])                // 0
// countUniqueValues([-2,-1,-1,0,1])    // 4

const countUniqueValues = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      count++;
    }
  }
  return count;
};

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// 2 pointer solution
const countUniqueValues2 = (arr) => {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues2([])); // 0
console.log(countUniqueValues2([-2, -1, -1, 0, 1])); // 4
