function mutation(arr) {
 const newA = arr[0].toLowerCase();
 const newB = arr[1].toLowerCase();

 for (let i = 0; i < newB.length; i++) {
  if (newA.indexOf(newB[i]) < 0) {
   return false;
  }
 }
 return true;
}

mutation(['hello', 'hey']);
// mutation(["Mary", "Army"])
