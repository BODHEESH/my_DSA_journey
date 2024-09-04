/* -------------------------------------------------------------------------- */
/*                   Move all Zeros to the end of the array                   */
/* -------------------------------------------------------------------------- */

// Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non - negative integers to the front by maintaining their order.

// simple method first comes into my mind
function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            // Swap the non-zero element with the element at the nonZeroIndex
            let temp = arr[nonZeroIndex];
            arr[nonZeroIndex] = arr[i];
            arr[i] = temp;

            nonZeroIndex++;
        }
    }

    return arr;
}

// Example usage:
const arr = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(arr)); // Output: [1, 3, 12, 0, 0]

/* -------------------------------- method 2 -------------------------------- */

function moveZeros(n, a) {
    let j = -1;

    // Place the pointer j
    for (let i = 0; i < n; i++) {
        if (a[i] === 0) {
            j = i;
            break;
        }
    }

    // No non-zero elements
    if (j === -1) return a;

    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < n; i++) {
        if (a[i] !== 0) {
            [a[i], a[j]] = [a[j], a[i]];
            j++;
        }
    }

    return a;
}

// Example usage:
const arr2 = [0, 1, 0, 3, 12];
console.log(moveZeros(arr2.length,arr2)); // Output: [1, 3, 12, 0, 0]

/* ------------------ complexity is same in both the cases ------------------ */
// Time Complexity: O(N), N = size of the array.
// Reason: We have used 2 loops and using those loops, we are basically traversing the array once.
// Space Complexity: O(1) as we are not using any extra space to solve this problem.


// Method 1 might be preferred for its simplicity and more direct approach.
// Method 2 could be more useful in specific scenarios where early termination or finding the first zero is important.
