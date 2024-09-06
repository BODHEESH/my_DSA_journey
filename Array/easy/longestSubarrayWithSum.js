/* -------------------------------------------------------------------------- */
/*                Longest Subarray with given Sum K(Positives)                */
/* -------------------------------------------------------------------------- */
// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

/* ----------------- Naive Approach(Brute - force approach): ---------------- */

// function getLongestSubarray(a, k) {
//     let n = a.length; // size of the array

//     let len = 0;
//     for (let i = 0; i < n; i++) { // starting index
//         for (let j = i; j < n; j++) { // ending index
//             // add all the elements of subarray = a[i...j]
//             let s = 0;
//             for (let K = i; K <= j; K++) {
//                 s += a[K];
//             }

//             if (s === k)
//                 len = Math.max(len, j - i + 1);
//         }
//     }
//     return len;
// }

// let a = [2, 3, 5, 1, 9];
// let k = 10;
// let len = getLongestSubarray(a, k);
// console.log("The length of the longest subarray is:", len);

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array
    let len = 0;

    // Loop to fix the starting point of the subarray
    for (let i = 0; i < n; i++) {
        let s = 0; // Variable to store the sum of the subarray starting from index i

        // Loop to fix the ending point of the subarray
        for (let j = i; j < n; j++) {
            s += a[j]; // Adding the current element to the sum

            // If the sum equals k, update the max length
            if (s === k) {
                len = Math.max(len, j - i + 1);
            }
        }
    }
    return len;
}
function main (){
    let a = [2, 3, 5, 1, 9];
    let k = 10;
    let length = getLongestSubarray(a, k);
    console.log("The length of the longest subarray is:", length);
}    

main()

// Time Complexity: O(N3) approx., where N = size of the array.
// Space Complexity: O(1) as we are not using any extra space.

/* ------------- Optimizing the Naive Approach(Using two loops): ------------ */

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let len = 0;
    for (let i = 0; i < n; i++) { // starting index
        let s = 0; // Sum variable
        for (let j = i; j < n; j++) { // ending index
            // add the current element to
            // the subarray a[i...j-1]
            s += a[j];

            if (s === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);

// Time Complexity: O(N3) approx., where N = size of the array.
// Space Complexity: O(1) as we are not using any extra space.

/* --------------------- Better Approach(Using Hashing): -------------------- */

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        // calculate the prefix sum till index i
        sum += a[i];

        // if the sum = k, update the maxLen
        if (sum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        // calculate the sum of remaining part i.e. x - k
        let rem = sum - k;

        // calculate the length and update maxLen
        if (preSumMap.has(rem)) {
            let len = i - preSumMap.get(rem);
            maxLen = Math.max(maxLen, len);
        }

        // update the map checking the conditions
        if (!preSumMap.has(sum)) {
            preSumMap.set(sum, i);
        }
    }

    return maxLen;
}

function main() {
    let a = [2, 3, 5, 1, 9];
    let k = 10;
    let len = getLongestSubarray(a, k);
    console.log("The length of the longest subarray is:", len);
}

main();

/*
Time Complexity: O(N) or O(N*logN) depending on which map data structure we are using, where N = size of the array.
Reason: For example, if we are using an unordered_map data structure in C++ the time complexity will be O(N)(though in the worst case, unordered_map takes O(N) to find an element and the time complexity becomes O(N2)) but if we are using a map data structure, the time complexity will be O(N*logN). The least complexity will be O(N) as we are using a loop to traverse the array.

Space Complexity: O(N) as we are using a map data structure.
*/

