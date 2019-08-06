// We'll pass you an array of two numbers. Return the sum of those two numbers
// plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
 let n = Math.min(...arr);
 let max = Math.max(...arr);
 let total = 0;
 for (n; n <= max; n++) {
  console.log((total += n));
 }
 return total;
}

sumAll([10, 5]);

// vs

function sumAll(arr) {
 arr.sort((a, b) => a - b);
 let n = arr[0];
 let total = 0;
 for (n; n <= arr[1]; n++) {
  console.log((total += n));
 }
 return total;
}

sumAll([1, 4]);
