function chunkArrayInGroups(arr, size) {
 // Break it up.
 const newArr = [];

 for (let i = 0; i < arr.length; i += size) {
  // i = 'a', 0=0+2...
  newArr.push(arr.slice(i, i + size));
  // ['a', 'b'], ['c', 'd']
 }
 return newArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

// function chunkArrayInGroups(arr, size) {  // doesn't work!
//     // Break it up.
//     const newArr = [];
//     let temp = [];
//     for (let i=0; i<arr.length; i++){
//       if(i % size === 0){
//         newArr.push(temp);
//         temp = []
//         temp.push(arr[i]);
//       } else{
//         temp.push(arr[i])
//       }
//     }
//       console.log(newArr);
//     return newArr;
//   }

//   chunkArrayInGroups(["a", "b", "c", "d"], 2);
