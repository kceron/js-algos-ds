// Func accepts a variable number of arguments, and checks whether there are any 
// duplicates. Can use frequency counter pattern or multiple pointers pattern

function areThereDuplicates(...args) {
  // console.log("arguments", arguments)
  const sorted = args.sort();
  let i = 0;
  for (let j = 1; j < sorted.length; j++) {
    if (sorted[i] === sorted[j]) {
      return true;
    } else {
      i++;
      sorted[i] = sorted[j]
    }
  }
  return false;
}

// solution 2
function areThereDuplicates2() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    // console.log("collection", collection)
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

console.log(areThereDuplicates2(1,2,3))  // false
console.log(areThereDuplicates2(1,2,2))  // true
console.log(areThereDuplicates2('a','b','c','a'))  // true