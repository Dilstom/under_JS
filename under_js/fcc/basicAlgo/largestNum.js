function largestOfFour(arr) {
 // You can do this!
 let newArr = [];
 for (let i = 0; i < arr.length; i++) {
  let maxN = arr[i][0];
  for (let j = 0; j < arr[i].length; j++) {
   // console.log(arr[i][j])
   if (arr[i][j] > maxN) {
    maxN = arr[i][j];
   }
   //  console.log(maxN)
  }
  newArr.push(maxN);
  console.log('newarr', newArr);
 }
 return newArr;
}

largestOfFour([
 [4, 5, 1, 3],
 [13, 27, 18, 26],
 [32, 35, 37, 39],
 [1000, 1001, 857, 1],
]);

// [5,27,39,1001]
