// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
 // I'm a steamroller, baby
 arr = arr.reduce(
  (acc, val) =>
   Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val),
  []
 );
 // console.log(arr)
 return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
