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

// 3. Solution:
// First define an object with all pair possibilities, this allows us to easily find by key or value.
// Split str into a characters array so we can use each letter to find its pair.
// Use the map function to map each character in the array to an array with the character and it’s matching pair, creating a 2D array.
function pairElement(str) {
 str = str.split('');
 let matched = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'T',
 };
 const newArr = str.map(l => [l, matched[l]]);
 //  console.log(newArr)
 return newArr;
}

pairElement('GCG');

//  https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing/
