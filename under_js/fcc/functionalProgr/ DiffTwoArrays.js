// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
 var newArr = arr1.filter(n => !arr2.includes(n));
 var newArr1 = arr2.filter(n => !arr1.includes(n));
 return newArr.concat(newArr1);

 //  or in one line
 // var newArr = arr1.filter(n=> !arr2.includes(n)).concat(arr2.filter(n=> !arr1.includes(n)))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
