// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.
// const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));

// vs:

function destroyer(arr) {
 // Remove all the values
 console.log(arr); // [1, 2, 3, 1, 2, 3]
 //  console.log(arguments)
 var args = Array.from(arguments).slice(1);
 //  console.log(args) // [2, 3]

 const arr1 = arr.filter(n => !args.includes(n));
 // console.log(arr1)

 return arr1;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
