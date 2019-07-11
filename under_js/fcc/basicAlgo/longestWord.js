function findLongestWordLength(str) {
 let newStr = str.split(' ');
 // console.log(newStr);
 let max = 0;
 for (let i = 0; i < newStr.length; i++) {
  if (newStr[i].length > max) {
   max = newStr[i].length;
  }
  console.log('max', max);
 }
 return max;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
