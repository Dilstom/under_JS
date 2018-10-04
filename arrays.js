// same as: var arr = new Array();
// arrays can hold anything

var arr = [
    1,
    false,
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function (name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "hello"
];
console.log(arr)
arr[3](arr[2].name)

// **************************************

// var arr1 = ['John', 'Jane', 'Jack']

// for (var e in arr1) {
//     console.log(e + ': ' + arr1[e]);
// }
// vs.
// for (var e=0; e<arr1.length; e++) {
//     console.log(e + ': ' + arr1[e]);
// }

// 0: John
// 1: Jane
// 2: Jack