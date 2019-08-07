// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(arr) {
 // the spread operator ... to create an array out of the Arguments object and to flatten it at the same time
 const newArr = [].concat(...arguments);
 // console.log(newArr) // [1,3,2,5,2,1,4,2,1]

 // use the new ES2015 Set object to store only unique values
 // console.log ([ ...new Set(newArr)])
 return [...new Set(newArr)]; // [1,3,2,5,4]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// vs:

function uniteUnique(arr) {
 const newArr = [];
 console.log(arguments[0]); // [1,3,2]
 console.log(arguments[0][1]); // 3

 for (let i = 0; i < arguments.length; i++) {
  for (let j = 0; j < arguments[i].length; j++) {
   if (!newArr.includes(arguments[i][j])) {
    newArr.push(arguments[i][j]);
   }
  }
 }
 console.log(newArr); // [1, 3, 2, 5, 4]
 return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
