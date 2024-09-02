/* -------------------------------------------------------------------------- */
/*                         Rotate array by K elements                         */
/* -------------------------------------------------------------------------- */
// Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

// Approach 1: Using a temp array 

// For Rotating the Elements to right
// Step 1: Copy the last k elements into the temp array.

// Step 2: Shift n-k elements from the beginning by k position to the right

// Step 3: Copy the elements into the main array from the temp array.

// Code:

function rotateToRight(arr, k) {
    let n = arr.length;
    if (n === 0) return;
    k = k % n;
    if (k > n) return;

    let temp = arr.slice(n - k);
    for (let i = n - k - 1; i >= 0; i--) {
        arr[i + k] = arr[i];
    }
    for (let i = 0; i < k; i++) {
        arr[i] = temp[i];
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 2;
rotateToRight(arr, k);

console.log("After rotating the elements to the right:");
console.log(arr.join(" "));

// Time Complexity: O(n)
// Space Complexity: O(k) since k array element needs to be stored in temp array

/* -------------------------------- method 2 -------------------------------- */

// For Rotating the Elements to left
// Step 1: Copy the first k elements into the temp array.

// Step 2: Shift n-k elements from last by k position to the left

// Step 3: Copy the elements into the main array from the temp array.

function rotateToLeft(arr, k) {
    let n = arr.length;
    if (n === 0) return;
    k = k % n;
    if (k > n) return;

    let temp = arr.slice(0, k);
    for (let i = 0; i < n - k; i++) {
        arr[i] = arr[i + k];
    }
    for (let i = n - k; i < n; i++) {
        arr[i] = temp[i - n + k];
    }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let kk = 2;
rotateToLeft(arr1, kk);

console.log("After rotating the elements to the left:");
console.log(arr1.join(" "));


// Time Complexity: O(n)
// Space Complexity: O(kk) since kk array element needs to be stored in temp array

/* -------------------------------------------------------------------------- */
/*                  Approach 2: Using ” Reversal Algorithm “                  */
/* -------------------------------------------------------------------------- */

// For Rotating Elements to right
// Step 1: Reverse the last k elements of the array

// Step 2: Reverse the first n - k elements of the array.

//     Step 3: Reverse the whole array.

// For Eg, arr[] = { 1, 2, 3, 4, 5, 6, 7}, k = 2

// Function to reverse the array from start to end
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Function to rotate k elements to the right
function rotateElementsToRight(arr, k) {
    let n = arr.length;
    k = k % n;  // Handle cases where k > n
    if (n === 0 || k === 0) return;

    // Reverse the first n-k elements
    reverse(arr, 0, n - k - 1);
    // Reverse the last k elements
    reverse(arr, n - k, n - 1);
    // Reverse the whole array
    reverse(arr, 0, n - 1);
}

let arr2 = [1, 2, 3, 4, 5, 6, 7];
let kkk = 2;
rotateElementsToRight(arr2, kkk);

console.log("After rotating the kkk elements to the right:");
console.log(arr2.join(" "));



/* -------------------------------- method 2 -------------------------------- */

// For Rotating Elements to left
// Step 1: Reverse the first k elements of the array

// Step 2: Reverse the last n - k elements of the array.

//     Step 3: Reverse the whole array.

// For Eg, arr[] = { 1, 2, 3, 4, 5, 6, 7}, k = 2

// Function to reverse the array from start to end
function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Function to rotate k elements to the left
function rotateElementsToLeft(arr, k) {
    let n = arr.length;
    k = k % n;  // Handle cases where k > n
    if (n === 0 || k === 0) return;

    // Reverse the first k elements
    reverse(arr, 0, k - 1);
    // Reverse the remaining n-k elements
    reverse(arr, k, n - 1);
    // Reverse the whole array
    reverse(arr, 0, n - 1);
}

let arr3 = [1, 2, 3, 4, 5, 6, 7];
let kkkk = 2;
rotateElementsToLeft(arr3, kkkk);

console.log("After rotating the kkkk elements to the left:");
console.log(arr3.join(" "));


// Time Complexity - O(N) where N is the number of elements in an array
// Space Complexity - O(1) since no extra space is required