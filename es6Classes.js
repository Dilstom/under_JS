// in JS 'class' keyword is still an object
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'Hi ' + this.firstname;
    }
}

var john = new Person('John', 'Doe')

// set the Prototype:
// 'extends' sets the Prototype (__proto__) 
class AnotherPerson extends Person {
    constructor(firstname, lastname) {
        // 'super' call the constructor of the object that is this Prototype
        super(firstname, lastname);
    }

    greet() {
        return 'Yo ' + firstname;
    }
}