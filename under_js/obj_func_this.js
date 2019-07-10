console.log(this);
// points to the global object at this level in the code - Window

function a() {
    console.log(this) // still points to the global object
    this.newVar = 'hi'
}
a(); // also is a Window object
// invoking a, means run that code property
// first, it will create execution context (variable env, 'this', outer env) 

var b = function () {
    console.log(this);
}
console.log(newVar);
// any var attached to the global object, can be referenced like that

b(); // Window

// *****************

var c = {
    name: 'C object',
    log: function () {
        this.name = 'updated c object' // can change the object if it is a method of that object by using of 'this' keyword. 
        console.log(this); // points to object itself 
    }
}
// if the value is a primitive - property, 
// if the value a function - method

c.log()
// {name: "updated c object", log: ƒ}

// ******** about a bug
var c = {
    name: 'C object',
    log: function () {
        this.name = 'updated c object'
        console.log(this);

        var setname = function (newname) {
            this.name = newname; // it points into global object - Window. the way to fix it is to create var self = this inside the object or to use let instead of var
        }
        setname('updated again');
        console.log(this);
    }
}

c.log()
// using var self = this
var c = {
    name: 'C object',
    log: function () {
        var self = this;
        self.name = 'updated c object'
        console.log(self);

        var setname = function (newname) { // internar methods have a problem/bug
            self.name = newname; // it points into global object - Window. the way to fix it is to create var self = this inside the object
        }
        setname('updated again');
        console.log(self);
    }
}

c.log()