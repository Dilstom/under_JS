function quickCheck(arr, elem) {
 return arr.indexOf(elem) !== -1 ? true : false;
 // if (arr.indexOf(elem) !== -1){
 //   return true
 // } else {
 //   return false
 // }
}
console.log(quickCheck(['sq', 'on', 'sh'], 'mu')); // false
console.log(quickCheck(['sq', 'on', 'sh'], 'on')); // true
