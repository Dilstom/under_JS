// three args: an array, a start i (0), an end i (length - 1);
// pivot is the start of the array
// store pivot idex in a var
// loop through the array start -> end
// if pivot is > the current el, increment the pivot index var, 
// and swap the current el with the el at the pivot index
// swap the starting el (i.e the pivot) with the pivot index

//Quicksort pseudocode:
// call the pivot helper on the arr
// when the helper returns to you the updates pivot index, recursively call the pivot helper on 
// the subarray to the left of that index, and the subarray to the right of that index
// base case - when subarray with less than 2 el

function pivot(arr, start = 0, end = arr.length + 1) {
    var pivot = arr[start];
    var swapIdx = start;

    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
            console.log(arr);
        }
    }
    // swap(arr, start, swapIdx);
    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
    console.log('final arr: ', arr);
    return swapIdx;
}

// index of pivot is 3
pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right); // 3
        // left
        quickSort(arr, left, pivotIndex - 1); // not including pivot index
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}