/* -------------------------------------------------------------------------- */
/*                        Left Rotate the Array by One                        */
/* -------------------------------------------------------------------------- */
// Problem Statement: Given an array of N integers, left rotate the array by one place.

// Brute Force Approach

function solve(arr, n) {
    let temp = new Array(n);
    for (let i = 1; i < n; i++) {
        temp[i - 1] = arr[i];
    }
    temp[n - 1] = arr[0];
    for (let i = 0; i < n; i++) {
        console.log(temp[i] + " ");
    }
    console.log();
}

let n = 5;
let arr = [1, 2, 3, 4, 5];
solve(arr, n);
console.log("--------------------------------")

// Time Complexity: O(n), as we iterate through the array only once.
// Space Complexity: O(n) as we are using another array of size, same as the given array.

/* -------------------------------------------------------------------------- */
/*                              Optimal Approach                              */
/* -------------------------------------------------------------------------- */


function solve(arr, n) {
    let temp = arr[0]; // storing the first element of the array in a variable
    for (let i = 0; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp; // assign the value of the variable at the last index
    for (let i = 0; i < n; i++) {
        console.log(arr[i] + " ");
    }
}

let num = 5;

let arr1 = [1, 2, 3, 4, 5];
solve(arr1, num);
