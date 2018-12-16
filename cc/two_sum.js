// You	are	given	an	array	and	some	number	S.	
// Determine	if	any	two	numbers	within	the array	sum	to	S.

function twoSum(arr, S) {    // O(n^2)
    for (let i = 0; i < arr.length; i++) {
        let target = S - arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === target) {
                return true
            }
        }
    }
    return false
}

twoSum([3, 5, 8, 22, 7, 90, 1], 27)

}