var person = { // objects don't create new execution context 
    firstname: 'Default',
    lastname: 'Default',
    greet: function () {
        return 'Hi ' + this.firstname;
    }
}

// Object.create creates an empty object with 
// its prototype pointing at whatever passed into Object.create
var john = Object.create(person);
john.first = 'John';
john.lastname = 'Doe';
console.log(john)
console.log(john.greet())




