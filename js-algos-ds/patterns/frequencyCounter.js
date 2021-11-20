// write a function called same, which accepts 2 arrays.
// It should return true if every value in the arr has it's
// corresponding value squared in the second array.
// The frequeny of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9])   // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// naive approach O(n^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
};

// REFACTORED O(n) linear time
const sameRefactored = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] ?? 0) + 1;
  }
  // a ?? 0
  // a ? a : 0
  // a || 0
  // if (a !== undefined) { a} else {0}
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] ?? 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }

  return true;
};


// console.log(sameRefactored([1,2,3,2], [9,1,4,4]));
// console.log(sameRefactored([1,2,3], [1,9]));
// console.log(sameRefactored([1,2,1], [4,4,1]));