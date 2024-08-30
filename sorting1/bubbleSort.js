/* -------------------------------------------------------------------------- */
/*                                 bubble sort                                */
/* -------------------------------------------------------------------------- */

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        let didSwap = false;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                didSwap = true;
            }
        }
        // If no swaps were done, the array is sorted
        if (!didSwap) {
            break;
        }
    }
    return arr;
}

const arr = [13, 46, 24, 52, 20, 9];
console.log("Before Bubble Sort:", arr);

const sortedArr = bubbleSort(arr);
console.log("After Bubble Sort:", sortedArr);
