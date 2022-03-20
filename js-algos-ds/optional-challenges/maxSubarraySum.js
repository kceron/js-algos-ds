// given an arr of integers and a number, write a func that finds the maximum sum
// of a subarray with the length of the number passed to the func
// Note: the subarray  must consist of consecutive elems from the original arr

function maxSubarraySum(arr, num){
  if (arr.length < num) return null;
  let max = 0;
  let sum = 0;
  
  for(let i = 0; i < num; i++) {
    sum += arr[i]
  }
  max = sum;
  for(let i = num; i < arr.length; i++) {
    sum = sum - arr[i - num] + arr[i];
    max = Math.max(sum, max);
  }
  return max;
}

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)); // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3],3)); // null
