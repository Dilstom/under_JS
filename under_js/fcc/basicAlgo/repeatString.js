function repeatStringNumTimes(str, num) {
 // repeat after me
 if (num < 0) {
  return '';
 }
 let newStr = '';
 for (let i = 0; i < num; i++) {
  newStr += str;
 }
 return newStr;
}
repeatStringNumTimes('abc', 3);

// abcabcabc

// recursion

function repeatStringNumTimes(str, num) {
 // repeat after me
 if (num < 0) {
  return '';
 }
 if (num === 1) {
  return str;
 }
 return str + repeatStringNumTimes(str, num - 1);
}
repeatStringNumTimes('abc', 3);

// repeat()

function repeatStringNumTimes(str, num) {
 return str.repeat(num);
}
repeatStringNumTimes('abc', 3);
