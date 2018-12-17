// Calculcate	the	sum	of	nested	arrays

function sumNested(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== Number) {
            result += sumNested(arr[i])
        } else {
            result += arr[i]
        }
    }
    return result
}

sumNested([1, 1, 1, [3, 4, [8]], [5]])  // "33,4,85"