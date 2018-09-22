function mapEach(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]))
    }
    return newArr;
}

var arr1 = [3, 4, 5]

function multiplyByTwo(n) {
    return n * 2
}
function multiplyByThree(n) {
    return n * 3
}
mapEach(arr1, multiplyByTwo)