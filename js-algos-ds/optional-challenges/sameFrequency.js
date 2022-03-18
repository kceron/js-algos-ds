// write a func called sameFrequency. Given 2 positive integers,
// find out if the 2 numbers have the same
// frequency of digits

// time of O(n)
function sameFrequency(num1, num2) {
  const string1 = num1.toString();
  const string2 = num2.toString();
  if (string1.length !== string2.length) return false;

  const digits = {};
  for (let i = 0; i < string1.length; i++) {
    let val = string1[i];
    digits[val] ? (digits[val] += 1) : (digits[val] = 1);
  }

  for (let i = 0; i < string2.length; i++) {
    let val = string2[i];
    if (!digits[val]) {
      return false;
    } else {
      digits[val] -= 1;
    }
  }
  return true;
}

// sameFrequency(182, 281) // true
// sameFrequency(34, 14) // false
// sameFrequency(22, 222) // false
console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(22, 222));
console.log(sameFrequency(3589578, 5879385));
