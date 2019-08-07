// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// 1.
function pairElement(str) {
 const newArr = [];

 for (let i = 0; i < str.length; i++) {
  if (str[i] === 'G') {
   newArr.push(['G', 'C']);
  } else if (str[i] === 'C') {
   newArr.push(['C', 'G']);
  } else if (str[i] === 'T') {
   newArr.push(['T', 'A']);
  } else if (str[i] === 'A') {
   newArr.push(['A', 'T']);
  }
 }
 return newArr;
}

pairElement('GCG');

// 2. using Switch:
function pairElement(str) {
 const newArr = [];

 for (let i = 0; i < str.length; i++) {
  search(str[i]);
 }

 function search(a) {
  switch (a) {
   case 'G':
    newArr.push(['G', 'C']);
    break;
   case 'C':
    newArr.push(['C', 'G']);
    break;
   case 'T':
    newArr.push(['T', 'A']);
    break;
   case 'A':
    newArr.push(['A', 'T']);
  }
 }
 return newArr;
}

pairElement('GCG');
