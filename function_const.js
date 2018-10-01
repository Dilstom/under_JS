function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
// if the methods sitting on the prototype add 
// inside function constructor, they'll take up memory space
// f/e every object gets its own copy of getFullName
// So, for a efficiency standpoint, it's better to put 
// methods on the prototype - only one copy to be used

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
}

Person.prototype.getFormalFullName = function () {
    return this.lastName + ', ' + this.firstName
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane', 'Eyre');
console.log(john) // Person {firstName: 'John'; lastName: 'Doe'}
console.log(jane) // Person {firstName: 'John'; lastName: 'Doe'}
console.log(jane.getFullName()) // Person {firstName: 'John'; lastName: 'Doe'}
console.log(jane.getFormalFullName()) // Person {firstName: 'John'; lastName: 'Doe'}