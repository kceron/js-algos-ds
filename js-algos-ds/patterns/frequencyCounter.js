// write a function called same, which accepts 2 arrays. 
// It should return true if every value in the arr has it's
// corresponding value squared in the second array. 
// The frequeny of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9])   // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// naive approach
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2)
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1)
  }
  return true;
};

console.log(same([1,2,3,2], [9,1,4,4]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,1], [4,4,1]));