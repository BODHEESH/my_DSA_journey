
/* -------------------------------------------------------------------------- */
/*           Two Sum: Check if a pair with given sum exists in Array          */
/* -------------------------------------------------------------------------- */

// Problem Statement: Given an array of integers arr[] and an integer target.
// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target.Otherwise, return NO.
// 2nd variant: Return indices of the two numbers such that their sum is equal to the target.Otherwise, we will return {- 1, -1}.
// Note: You are not allowed to use the same element twice.Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution

/* ------------------------- Brute-force approach Variant 1 ------------------------- */
function twoSumBruteForce1(n1, arr1, target1) {
    // Two nested loops to check all pairs
    for (let i = 0; i < n1; i++) {
        for (let j = i + 1; j < n1; j++) {
            if (arr1[i] + arr1[j] === target1) {
                return "YES";
            }
        }
    }
    return "NO";
}

let n1 = 5;
let arr1 = [2, 6, 5, 8, 11];
let target1 = 14;
let ans1 = twoSumBruteForce1(n1, arr1, target1);
console.log("This is the answer for brute-force variant 1:", ans1);

/* ----------------------------- Brute-force approach Variant 2 ----------------------------- */
function twoSumBruteForce2(n2, arr2, target2) {
    let ans2 = [];
    // Two nested loops to check all pairs
    for (let i = 0; i < n2; i++) {
        for (let j = i + 1; j < n2; j++) {
            if (arr2[i] + arr2[j] === target2) {
                ans2.push(i, j); // Add indices to the result
                return ans2; // Return early when a match is found
            }
        }
    }
    return [-1, -1]; // If no match is found, return [-1, -1]
}

let n2 = 5;
let arr2 = [2, 6, 5, 8, 11];
let target2 = 14;
let ans2 = twoSumBruteForce2(n2, arr2, target2);
console.log(`This is the answer for brute-force variant 2: [${ans2[0]}, ${ans2[1]}]`);

/* -------------------------------------------------------------------------- */
/*                       Better Approach (using Hashing):                      */
/* -------------------------------------------------------------------------- */

/* --------------------------- Code for Hashing Variant 1 -------------------------- */
function twoSumHashing1(n3, arr3, target3) {
    let map3 = new Map(); // Create a map to store the elements and their indices

    for (let i = 0; i < n3; i++) {
        let num = arr3[i];
        let complement = target3 - num; // Calculate the required complement

        // Check if the complement exists in the map
        if (map3.has(complement)) {
            return "YES"; // If found, return "YES"
        }

        // Store the current element in the map
        map3.set(num, i);
    }

    return "NO"; // If no pair is found, return "NO"
}

let n3 = 5;
let arr3 = [2, 6, 5, 8, 11];
let target3 = 14;
let ans3 = twoSumHashing1(n3, arr3, target3);
console.log("This is the answer for hashing variant 1: " + ans3);

/* --------------------------- Code for Hashing Variant 2 -------------------------- */
function twoSumHashing2(n4, arr4, target4) {
    let ans4 = [-1, -1]; // Default answer if no pair is found
    let map4 = new Map(); // Hash map to store the value and its index

    for (let i = 0; i < n4; i++) {
        let num = arr4[i];
        let moreNeeded = target4 - num; // Calculate the required complement

        // Check if the complement exists in the map
        if (map4.has(moreNeeded)) {
            ans4[0] = map4.get(moreNeeded); // First index
            ans4[1] = i; // Current index
            return ans4; // Return the result immediately if pair found
        }

        // Store the current element's index in the map
        map4.set(num, i);
    }

    return ans4; // Return [-1, -1] if no pair is found
}

let n4 = 5;
let arr4 = [2, 6, 5, 8, 11];
let target4 = 14;
let ans4 = twoSumHashing2(n4, arr4, target4);
console.log(`This is the answer for hashing variant 2: [${ans4[0]}, ${ans4[1]}]`);

// Time Complexity: O(N), where N = size of the array.
// Space Complexity: O(N) as we use the map data structure.

/* -------------------------------------------------------------------------- */
/*                  Optimized Approach(using two-pointer):                   */
/* -------------------------------------------------------------------------- */

function twoSumTwoPointer(n5, arr5, target5) {
    arr5.sort((a, b) => a - b); // Sorting the array
    let left = 0, right = n5 - 1;

    while (left < right) {
        let sum = arr5[left] + arr5[right];
        if (sum === target5) {
            return "YES";
        } else if (sum < target5) {
            left++;
        } else {
            right--;
        }
    }
    return "NO";
}

let n5 = 5;
let arr5 = [2, 6, 5, 8, 11];
let target5 = 14;
let ans5 = twoSumTwoPointer(n5, arr5, target5);
console.log(`This is the answer for two-pointer variant 1: ${ans5}`);


// Time Complexity: O(N) + O(N * logN), where N = size of the array.
// Space Complexity: O(1) as we are not using any extra space.

/* ------------------- chatgpt best variant using hashing ------------------- */

function twoSum(n, arr, target) {
    let map = new Map(); // Hash map to store values and their indices

    for (let i = 0; i < n; i++) {
        let num = arr[i];
        let complement = target - num;

        // If complement exists in the map, return "YES"
        if (map.has(complement)) {
            return "YES";
        }

        // Add the current number to the map
        map.set(num, i);
    }

    return "NO";
}

const n6 = 5;
const arr6 = [2, 6, 5, 8, 11];
const target6 = 14;
const ans6 = twoSum(n6, arr6, target6);
console.log("This is the answer for variant 1:", ans6);


// Time Complexity: O(N)
// Space Complexity: O(N)

