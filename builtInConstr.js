String.prototype.isLengthGreaterThanLimit = function (limit) {
    return this.length > limit;
}

console.log('Jane'.isLengthGreaterThan(3)); // true


Number.prototype.isPositive = function () {
    return this > 0;
}
// JS won't convert a number to an object automatically
// constructor will point at number

let a = new Number(3);
a.isPositive();


// in general, it is better to not use the built-in function constructors
var a = 3;
var b = new Number(3);
a == b // true
a === b // false => a is a primitive and b is an Object created with the function constructor
