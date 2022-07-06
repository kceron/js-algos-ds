// given a sorted arr of integers, write a func called search
// that accepts a value and returns the index where the value passed 
// to the function is located. If the val is not found return -1

// Linear search - time complexity O(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// refactor
// Binary search - time complexity log(N)
function search2(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    }
    else if (arr[middle] > val) {
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}

console.log(search2([1,2,3,4,5,6], 4)) // 3
console.log(search2([1,2,3,4,5,6], 6)) // 5
console.log(search2([1,2,3,4,5,6], 11)) // -1