// Write your own Array.prototype.myMap(),
// which should behave exactly like Array.prototype.map().
// You may use a for loop or the forEach method.

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
 var newArray = [];
 // Add your code below this line
 // console.log(callback(s[0])); // 46
 s.forEach(num => {
  newArray.push(callback(num));
 });
 // Add your code above this line
 return newArray;
};

var new_s = s.myMap(function(item) {
 return item * 2;
});

// console.log(new_s);
