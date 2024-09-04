/* -------------------------------------------------------------------------- */
/*                Remove Duplicates in -place from Sorted Array               */
/* -------------------------------------------------------------------------- */
// Problem Statement: Given an integer array sorted in non - decreasing order, remove the duplicates in place such that each unique element appears only once.The relative order of the elements should be kept the same.

//Brute Force Approach
function removeDuplicates(arr) {
    let set = new Set(arr);
    let uniqueArr = Array.from(set);
    for (let i = 0; i < uniqueArr.length; i++) {
        arr[i] = uniqueArr[i];
    }
    return uniqueArr.length;
}

const arr = [1, 1, 2, 2, 2, 3, 3];
const k = removeDuplicates(arr);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
    console.log(arr[i]);
}

// Time complexity: O(n * log(n)) + O(n)
// Space Complexity: O(n) 

/* -------------------------------------------------------------------------- */
/*                 Solution 2: Two pointers  Optimal Approach                 */
/* -------------------------------------------------------------------------- */


function removeDuplicates(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

const arr1 = [1, 1, 2, 2, 2, 3, 3];
const d = removeDuplicates(arr1);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < d; i++) {
    console.log(arr[i]);
}

// Time Complexity: O(N)
// Space Complexity: O(1)