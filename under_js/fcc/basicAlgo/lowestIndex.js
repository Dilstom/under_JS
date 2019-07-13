function getIndexToIns(arr, num) {
 // Find my place in this sorted array.
 let newArr = arr.sort((a, b) => {
  return a - b;
 });
 console.log(newArr);
 for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] >= num) {
   console.log(i);
   return i;
  }
 }
 return newArr.length;
}

// getIndexToIns([40, 60], 50); // 1
getIndexToIns([5, 3, 20, 3], 5); // 2

// vs:

function getIndexToIns(arr, num) {
 // Find my place in this sorted array.
 return arr
  .concat(num)
  .sort((a, b) => a - b)
  .indexOf(num);
}
