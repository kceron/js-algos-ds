// given a sorted integers arr and a target average. determine if there is a pair
// of vals in the arr where the averae of the pair equals the target total
// there may be more than one pair that matches the average target
// time O(n), Space O(1)

function averagePair(arr, targetVal) {
  if (arr.length === 0) return false;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    let average = arr[i] + arr[j] / 2;
    // console.log("averae", average);
    if (average === targetVal) {
      return true;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }
  return false;
}

console.log(averagePair([1,2,3],2,5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1,0,3,4,5,6],4.1)); // false
console.log(averagePair([],4)); // false
