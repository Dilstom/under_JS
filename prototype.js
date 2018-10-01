var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// never do this! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName()); // John Doe
console.log(john.firstname);     // John

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.getFullName());  // Jane Default

person.getFormalFullName = function () {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());

// ******************************

for (var prop in john) {
    console.log(prop + ': ' + john[prop]);

}

// firstname: 'John'
// lastname: 'Doe'
// getFullName: function () {
//     return this.firstname + ' ' + this.lastname;
// }


for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

// firstname: 'John',
// lastname: 'Doe'



// ******************************************

var a = {};
var b = function () { };
var c = [];