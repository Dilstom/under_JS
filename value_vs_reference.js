// by value (primitives) - pointing to a new location in memory
var a = 10;
var b;

b = a;
a = 12;

console.log(a); // 12
console.log(b); // 10

// by reference (all objects (including functions)) - pointing to the same location in memory
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c); // 'hello'
console.log(d); // 'hello'

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate  
}

changeGreeting(d);
console.log(c); // 'Hola'
console.log(d); // 'Hola'

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c); // 'howdy'
console.log(d); // 'Hola'
