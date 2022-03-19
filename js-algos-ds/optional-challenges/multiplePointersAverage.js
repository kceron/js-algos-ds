// given a sorted integers arr and a target average. determine if there is a pair
// of vals in the arr where the averae of the pair equals the target total
// there may be more than one pair that matches the average target
// time O(n), Space O(1)

function averagePair(arr, targetVal) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    let average = arr[i] + arr[j] / 2;
    if (average === targetVal) {
      return true;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }
  return false;
}

// sol 2
function averagePair2(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

console.log(averagePair([1,2,3],2,5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1,0,3,4,5,6],4.1)); // false
console.log(averagePair([],4)); // false
