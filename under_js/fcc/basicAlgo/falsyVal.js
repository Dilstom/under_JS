function bouncer(arr) {
 // Don't show a false ID to this bouncer.
 let newArr = [];
 for (let i = 0; i < arr.length; i++) {
  if (arr[i]) {
   newArr.push(arr[i]);
  }
 }
 return newArr;
}

bouncer([7, 'ate', '', false, 9]);

// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
// bouncer([7, "ate", "", false, 9]);
