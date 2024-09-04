/* -------------------------------------------------------------------------- */
/*                         Union of Two Sorted Arrays                         */
/* -------------------------------------------------------------------------- */

//Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

// Overview of Methods
// 1. Using a Map
// 2. Using a Set
// 3. Using Two Pointers

// Solution 1: Using Map
// Our aim is to find the common elements in arr1 and arr2, and the distinct elements of arr1, arr2.Use a Single map to find the frequencies of elements in arr1 and arr2.

// As we are using only a single map the common element in arr1 and arr2 are treated as a single element for finding frequency, so there would be no duplicates.

function findUnion(arr1, arr2) {
    let freq = new Map(); // To store the frequency of elements
    let union = []; // To store the union of the two arrays

    // Store elements of arr1 in the map
    for (let num of arr1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Store elements of arr2 in the map
    for (let num of arr2) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Extract the union from the map
    for (let [num, count] of freq) {
        union.push(num);
    }

    return union;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 3, 4, 4, 5, 11, 12];

let union = findUnion(arr1, arr2);

console.log("Union of arr1 and arr2 is:");
console.log(union.join(" "));

// Time Complexity: O(m + n)
// Space Complexity: O(m + n)



/* -------------------------- Solution 2: Using Set ------------------------- */



function findUnion1(arr1, arr2) {
    const set = new Set();
    const union = [];

    for (let num of arr1) {
        set.add(num);
    }

    for (let num of arr2) {
        set.add(num);
    }

    for (let num of set) {
        union.push(num);
    }

    return union;
}

const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr22 = [2, 3, 4, 4, 5, 11, 12];

const union1 = findUnion1(arr11, arr22);

console.log("Union of arr1 and arr2 is:");
console.log(...union1);

/* -------------------------------------------------------------------------- */
/*                     OPTIMAL APPROACH  using two pointer                    */
/* -------------------------------------------------------------------------- */




function findUnionOptimal(arr1, arr2) {
    let i = 0, j = 0; // Pointers
    let union = []; // Union array

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) { // Case 1 and 2
            if (union.length === 0 || union[union.length - 1] !== arr1[i])
                union.push(arr1[i]);
            i++;
        } else { // Case 3
            if (union.length === 0 || union[union.length - 1] !== arr2[j])
                union.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) { // If any elements left in arr1
        if (union[union.length - 1] !== arr1[i])
            union.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) { // If any elements left in arr2
        if (union[union.length - 1] !== arr2[j])
            union.push(arr2[j]);
        j++;
    }

    return union;
}

const arr111 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr222 = [2, 3, 4, 4, 5, 11, 12];

const union2 = findUnionOptimal(arr111, arr222);

console.log("Union of arr1 and arr222 is:");
console.log(union2.join(" "));

// Time Complexity: O(m + n)
// Space Complexity: O(m + n)


