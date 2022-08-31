function sumRange(num) {
  if (num === 1) return 1;
  // console.log("num", num)
  return num + sumRange(num - 1);
}

// console.log(sumRange(3));
// console.log(sumRange(4));

// non recurive factorial
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// recursive factorial

function factorialR() {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(3));
console.log(factorial(4));


// helper method 
function collectOdds(nums) {
  let result = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }
    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result;
}

// no helper method
function collectOddValues(arr) {
  let newArr = []

if(arr.length === 0) {
  return newArr;
}

if(arr[0] % 2 !== 0) {
  newArr.push(arr[0]);
}

newArr = newArr.concat(collectOddValues(arr.slice(1))) 
return newArr;

}