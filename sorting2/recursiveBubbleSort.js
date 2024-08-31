
/* -------------------------------------------------------------------------- */
/*                       Recursive Bubble Sort Algorithm                      */
/* -------------------------------------------------------------------------- */

function bubbleSort(arr, n) {
    // Base case: if the array has only one element, it's already sorted
    if (n == 1) return;

    let didSwap = false;

    // One pass of bubble sort, pushing the largest element to the end
    for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap the elements
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            didSwap = true;
        }
    }

    // If no elements were swapped, the array is already sorted
    if (!didSwap) return;

    // Recursively sort the rest of the array
    bubbleSort(arr, n - 1);
}

function main() {
    let arr = [13, 46, 24, 52, 20, 9];
    let n = arr.length;

    console.log("Before Using Bubble Sort:");
    console.log(arr.join(" "));

    bubbleSort(arr, n);

    console.log("After bubble sort:");
    console.log(arr.join(" "));
}

main();
