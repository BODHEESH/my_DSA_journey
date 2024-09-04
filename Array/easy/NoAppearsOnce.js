/* -------------------------------------------------------------------------- */
/*       Find the number that appears once, and the other numbers twice       */
/* -------------------------------------------------------------------------- */

// Problem Statement: Given a non - empty array of integers arr, every element appears twice except for one.Find that single one

/* -------------------------------------------------------------------------- */
/*                       Most optimal method using Xorr                       */
/* -------------------------------------------------------------------------- */
function findSingleNumber(arr) {
    let xorr = 0;

    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i]; // XOR the result with each element in the array
    }

    return xorr; // The result will be the number that appears only once
}

// Example usage:
let arr1 = [2, 2, 1];
console.log(findSingleNumber(arr1)); // Output: 1

let arr2 = [4, 1, 2, 1, 2];
console.log(findSingleNumber(arr2)); // Output: 4

// Time Complexity: O(N), where N = size of the array.
//     Reason: We are iterating the array only once.
// Space Complexity: O(1) as we are not using any extra space.


/* ------------------------------- Bruteforce ------------------------------- */

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


/* ----------------------------- Better approach ---------------------------- */




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

//Time Complexity: O(N)+O(N)+O(N), where N = size of the array
//Space Complexity: O(maxElement+1) where maxElement = the maximum element of the array.

/* --------- Better approach 2 Hashing using the map data structure: -------- */


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

/*
Time Complexity: O(N*logM) + O(M), where M = size of the map i.e. M = (N/2)+1. N = size of the array.
Reason: We are inserting N elements in the map data structure and insertion takes logM time(where M = size of the map). So this results in the first term O(N*logM). The second term is to iterate the map and search the single element. In Java, HashMap generally takes O(1) time complexity for insertion and search. In that case, the time complexity will be O(N) + O(M).

Note: The time complexity will be changed depending on which map data structure we are using. If we use unordered_map in C++, the time complexity will be O(N) for the best and average case instead of O(N*logM). But in the worst case(which rarely happens), it will be nearly O(N2).

Space Complexity: O(M) as we are using a map data structure. Here M = size of the map i.e. M = (N/2)+1.
*/



