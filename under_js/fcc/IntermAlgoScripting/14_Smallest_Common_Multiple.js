// This solution works only with small range of numbers. (f/e Not going to work with [2, 13] => millions of loop)

function smallestCommons(arr) {
 // 1. sort an arr - asc
 arr = arr.sort((a, b) => a - b);
 // console.log(arr)

 //  2. Create an array with all the numbers that are missing from the original array to make it easier to check when having to check for even division.
 let newArr = [];
 for (let i = 1; i <= arr.slice(-1); i++) {
  newArr.push(i);
 }
 // 3. Find one of the largest common mutliple
 let max = newArr.reduce((a, b) => a * b); // 120

 // 4. use that max as a ceiling
 for (let i = arr.slice(-1); i <= max; i++) {
  // 5. run checker function
  if (checker(i)) {
   // return the smallest common multiple
   return i;
  }

  function checker(num) {
   for (let j = 0; j < newArr.length; j++) {
    if (num % newArr[j] !== 0) {
     return false;
    }
   }
   return true;
  }
 }
}

smallestCommons([1, 5]);
