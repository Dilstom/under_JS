// Intermediate Algorithm Scripting: Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
 // Is everyone being true?
 // console.log(collection)
 for (let i = 0; i < collection.length; i++) {
  // console.log(collection[i])
  if (!collection[i].hasOwnProperty(pre)) {
   return false;
  } else if (!collection[i][pre]) {
   // console.log('caught it: ', collection[i][pre])
   return false;
  }
  // console.log(false);
 }
 return true;
}
truthCheck(
 [
  { user: 'Tinky-Winky', sex: 'male' },
  { user: 'Dipsy', sex: 'male' },
  { user: 'Laa-Laa', sex: 'female' },
  { user: 'Po', sex: 'female' },
 ],
 'sex'
);

// or in one line :
function truthCheck(collection, pre) {
 for (let i = 0; i < collection.length; i++) {
  if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
   return false;
  }
 }
 return true;
}

// Another code solution:
function truthCheck(collection, pre) {
 // Is everyone being true?
 return collection.every(obj => obj[pre]); // every method internally checks if the value returned from the callback is truthy.
}

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat") should return false
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat") should return true
// truthCheck([{"single": "yes"}], "single") should return true
// truthCheck([{"single": ""}, {"single": "double"}], "single") should return false
// truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
// truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false
