function mapEach(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr;
}

var arr1 = [3, 4, 5]

// mapEach(arr1, function (n) {
//     return n * 2
// })
// mapEach(arr1, function (n) {
//     return n > 4
// })

// var checkLimit = function (limiter, n) {
//     return n > limiter
// }
// mapEach(arr1, checkLimit.bind(this, 4))
// to pass more than one argument, as cb() accepts only one

var checkLimitSimplified = function (limiter) {
    return function (limiter, n) {
        return n > limiter
    }.bind(this, limiter) // .bind(this, limiter, ... n)
}

var arrLimited = mapEach(arr1, checkLimitSimplified(3))
console.log(arrLimited)




// function multiplyByTwo(n) {
//     return n * 2
// }
// function multiplyByThree(n) {
//     return n * 3
// }
// console.log('times by two: ', mapEach(arr1, multiplyByTwo))
// console.log('times by three: ', mapEach(arr1, multiplyByThree))