// Fill in the object constructor with the following methods below:

// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
 var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let name = firstAndLast;
  // console.log('name: ',name)
  this.getFullName = function() {
   return name;
  };
  this.getFirstName = function() {
   return name.split(' ')[0];
  };
  this.getLastName = function() {
   return name.split(' ')[1];
  };
  this.setFirstName = function(newFirst) {
   name = newFirst + ' ' + name.split(' ')[1];
  };
  this.setLastName = function(newLast) {
   name = name.split(' ')[0] + ' ' + newLast;
  };
  this.setFullName = function(newFull) {
   name = newFull;
  };
 };

 var bob = new Person('Bob Ross');
 bob.getFullName();
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(Object.keys(bob).length);
console.log(bob instanceof Person);
// console.log(bob.firstName);
// console.log(bob.lastName )
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName('Haskell'));
console.log(bob.setLastName('Curry'));
console.log(bob.getFullName());
console.log(bob.setFullName('Haskell Curry'));
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());
