/* -------------------------------------------------------------------------- */
/*                          Selection Sort AlgorithmX                         */
/* -------------------------------------------------------------------------- */


function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let mini = i;
        let swapped = false;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
                swapped = true;
            }
        }
        if (swapped) {
            // Swap only if needed
            let temp = arr[mini];
            arr[mini] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

const arr = [13, 46, 24, 52, 20, 9];
console.log("Before selection sort:", arr);

const sortedArr = selectionSort(arr);
console.log("After selection sort:", sortedArr);
