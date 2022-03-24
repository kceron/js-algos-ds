// write a function which accepts 2 parameters: an arr of positive integers and a positive number
// it should return the minimal length of a CONTIGUOUS subarray of which the nsm is greated than
// or equal to the integer passed to the function.
// if there isnt oe, return 0

function minSubArrayLen(arr, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < arr.length) { 
    console.log("start - end", start, "=", end)
    // if current window doesn't add up to the given num then move the window to right
    if(total < num && end < arr.length){
      total += arr[end];
			end++;
      // console.log("total", total)
    }
    // if current window adds up to at least the num given then we can shrink the window 
    else if(total >= num){
      minLen = Math.min(minLen, end-start);
			total -= arr[start];
			start++;    
    } 
    // current total less than required total but we reach the end, need this or else 
    // we'll be in an infinite loop 
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

function minSubArrayLen2(arr, num) {
  let start = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let i = 1; i < arr.length; i++) {
    sum += arr[start];
    
    if (sum >= num) {
      console.log("sum", sum)
      minLen = Math.min(minLen, i-start);
      console.log("minLen", minLen)
      sum -= arr[start];
      start ++;
    } 
  }
  return minLen === Infinity ? 0 : minLen;
}
console.log(minSubArrayLen2([2, 3, 1, 2, 4, 3], 7)); // 2 bc [4,3] is smallest subarray
// console.log(minSubArrayLen([2,1,6,5,4]), 9); // 2 bc [5,4] is the smallest
console.log(minSubArrayLen2([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 bc [65] is the smallest