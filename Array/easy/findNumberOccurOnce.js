/* -------------------------------------------------------------------------- */
/*       Find the number that appears once, and the other numbers twice       */
/* -------------------------------------------------------------------------- */
// Problem Statement: Given a non - empty array of integers arr, every element appears twice except for one.Find that single one.

/* -------------------------- Brute Force Approach -------------------------- */

function getSingleElement(arr) {
    // Size of the array:
    const n = arr.length;

    // Run a loop for selecting elements:
    for (let i = 0; i < n; i++) {
        const num = arr[i]; // selected element
        let cnt = 0;        

        // Find the occurrence using linear search:
        for (let j = 0; j < n; j++) {
            if (arr[j] === num) {
                cnt++;
            }
        }

        // If the occurrence is 1, return the number:
        if (cnt === 1) {
            return num;
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

function main() {
    const arr = [4, 1, 2, 1, 2];
    const ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();

// Time Complexity: O(N*N), where N = size of the given array.
// Space Complexity: O(1) as we are not using any extra space.

/* --------------------- Better Approach(Using Hashing): -------------------- */

function getSingleElement(arr) {
    // Size of the array:
    let n = arr.length;

    // Find the maximum element:
    let maxi = arr[0];
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, arr[i]);
    }

    // Declare hash array of size maxi+1
    // And hash the given array:
    let hash = new Array(maxi + 1).fill(0);
    for (let i = 0; i < n; i++) {
        hash[arr[i]]++;
    }

    // Find the single element and return the answer:
    for (let i = 0; i < n; i++) {
        if (hash[arr[i]] === 1) {
            return arr[i];
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

function main() {
    let arr = [4, 1, 2, 1, 2];
    let ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();
// Time Complexity: O(N) + O(N) + O(N)
// Space Complexity: O(maxElement + 1) where maxElement = the maximum element of the array.


/* ------------------ Hashing using the map data structure: ----------------- */

function getSingleElement(arr) {
    // Size of the array:
    const n = arr.length;

    // Declare the hashmap.
    // And hash the given array:
    const hashmap = new Map();
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    }

    // Find the single element and return the answer:
    for (const [num, count] of hashmap) {
        if (count === 1) {
            return num;
        }
    }

    // This line will never execute
    // if the array contains a single element.
    return -1;
}

function main() {
    const arr = [4, 1, 2, 1, 2];
    const ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();      

// Time Complexity: O(N * logM) + O(M), where M = size of the map i.e.M = (N / 2) + 1. N = size of the array.
// Space Complexity: O(M) as we are using a map data structure.Here M = size of the map i.e.M = (N / 2) + 1.




