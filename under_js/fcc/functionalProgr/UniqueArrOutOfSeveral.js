function uniteUnique(arr) {
 // the spread operator ... to create an array out of the Arguments object and to flatten it at the same time
 const newArr = [].concat(...arguments);
 // console.log(newArr) // [1,3,2,5,2,1,4,2,1]

 // use the new ES2015 Set object to store only unique values
 // console.log ([ ...new Set(newArr)])
 return [...new Set(newArr)]; // [1,3,2,5,4]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
