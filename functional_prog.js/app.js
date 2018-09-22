function mapEach(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr;
}

var arr = [3, 4, 5, 6, 7, 8, 2, 3, 1]

var arrMap = _.map(arr, function (n) { return n * 3 });
console.log(arrMap)

var arrFilter = _.filter(arr, function (n) { return n % 2 === 0 })
console.log(arrFilter)

var arrReject = _.reject(arr, function (n) { return n % 2 === 0 })
console.log(arrReject)

var arrFind = _.find(arr, function (n) { return n % 2 === 0 })
console.log(arrFind) // returns the first value: 4

var arrEvery = _.every(arr, function (n) { return n % 2 === 0 })
console.log(arrEvery) // returns true if all of the values pass

var arrSome = _.some(arr, function (n) { return n % 2 === 0 })
console.log(arrSome) // returns true if the value is present

var arrContains = _.contains(arr, 6)
console.log(arrContains) // returns true if the value is present

