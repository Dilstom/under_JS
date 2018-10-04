var a = 3;
console.log(typeof a); // number
// 'typeof' operator returns a string indicating the type of the operand

var b = '3';
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d) // object
console.log(Object.prototype.toString.call(d)) // [Object Array]

function Person(name) {
    this.name = name;
}
z = function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof Person) // function
console.log(typeof z) // function
console.log(typeof e); // object
console.log(e instanceof Person); // true
// 'instanceof' operator tests whether the prototype property of a constructor
// appears anywhere in the prototype chain of an object

console.log(typeof undefined); // undefined
console.log(typeof null); // a bug that returns object