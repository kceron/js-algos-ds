// write a func called sumZero which accepts a sorted arr of integers.
// the func should find the 1st pair where the sum is 0. 
// return an arr that includes both values that sum to 0 or 
// undefined if a pair does not exist
// sumZero([-3,-2,-1,0,1,2,3])
// sumZero([1,2,3])
// sumZero([-2,0,1,3])

// naive solution O(n^2)
const sumZero = (arr) => {
  for(let i = 0; i<arr.length; i++) {
    for(let j = i+1; j<arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(sumZero([-3,-2,-1,0,1,2,3]))
// console.log(sumZero([1,2,3]))

// O(n)
const sumZero2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]];
    } else if(sum > 0){
      right--;
    } else {
      left++;
    }
  }
}


console.log(sumZero2([-3,-2,-1,0,1,2,3]))
console.log(sumZero2([1,2,3]))