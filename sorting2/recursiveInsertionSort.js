/* -------------------------------------------------------------------------- */
/*                     Recursive Insertion Sort Algorithm                     */
/* -------------------------------------------------------------------------- */

function insertionSort(arr, i, n) {
    // Base Case: if the index reaches the end of the array, return
    if (i == n) return;

    let j = i;
    // Shifting the elements to insert the element at the correct position
    while (j > 0 && arr[j - 1] > arr[j]) {
        // Swap the elements
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        j--;
    }

    // Recursively call insertionSort for the next element
    insertionSort(arr, i + 1, n);
}

function main() {
    let arr = [13, 46, 24, 52, 20, 9];
    let n = arr.length;

    console.log("Before Using Insertion Sort:");
    console.log(arr.join(" "));

    insertionSort(arr, 0, n);

    console.log("After Insertion Sort:");
    console.log(arr.join(" "));
}

main();
