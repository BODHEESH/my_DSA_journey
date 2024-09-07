/* -------------------------------------------------------------------------- */
/*           Two Sum: Check if a pair with given sum exists in Array          */
/* -------------------------------------------------------------------------- */

// Problem Statement: Given an array of integers arr[] and an integer target.
// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target.Otherwise, return NO.
// 2nd variant: Return indices of the two numbers such that their sum is equal to the target.Otherwise, we will return {- 1, -1}.
// Note: You are not allowed to use the same element twice.Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution

/* ------------------------- Brute - force approach ------------------------- */
function twoSum(n, arr, target) {
    // Two nested loops to check all pairs
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                return "YES";
            }
        }
    }
    return "NO";
}

let n = 5;
let arr = [2, 6, 5, 8, 11];
let target = 14;
let ans = twoSum(n, arr, target);
console.log("This is the answer for variant 1:", ans);

/* ----------------------------- code variant 2 ----------------------------- */
function twoSum(n, arr, target) {
    let ans = [];
    // Two nested loops to check all pairs
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                ans.push(i, j); // Add indices to the result
                return ans; // Return early when a match is found
            }
        }
    }
    return [-1, -1]; // If no match is found, return [-1, -1]
}
function twoSumOne(){
    let n = 5;
    let arr = [2, 6, 5, 8, 11];
    let target = 14;
    let ans = twoSum(n, arr, target);
    console.log(`This is the answer for variant 2: [${ans[0]}, ${ans[1]}]`);
}
twoSumOne()


/* -------------------------------------------------------------------------- */
/*                       Better Approach(using Hashing):                      */
/* -------------------------------------------------------------------------- */

// Code for Variant 1:
function twoSum(n, arr, target) {
    let map = new Map(); // Create a map to store the elements and their indices

    for (let i = 0; i < n; i++) {
        let num = arr[i];
        let complement = target - num; // Calculate the required complement

        // Check if the complement exists in the map
        if (map.has(complement)) {
            return "YES"; // If found, return "YES"
        }

        // Store the current element in the map
        map.set(num, i);
    }

    return "NO"; // If no pair is found, return "NO"
}

function twoSumTwo() {
    let n = 5;
    let arr = [2, 6, 5, 8, 11];
    let target = 14;
    let ans = twoSum(n, arr, target);
    console.log("This is the answer for variant 1: " + ans);
}
twoSumTwo();

// Code for Variant 2:
function twoSum(n, arr, target) {
    let ans = [-1, -1]; // Default answer if no pair is found
    let map = new Map(); // Hash map to store the value and its index

    for (let i = 0; i < n; i++) {
        let num = arr[i];
        let moreNeeded = target - num; // Calculate the required complement

        // Check if the complement exists in the map
        if (map.has(moreNeeded)) {
            ans[0] = map.get(moreNeeded); // First index
            ans[1] = i; // Current index
            return ans; // Return the result immediately if pair found
        }

        // Store the current element's index in the map
        map.set(num, i);
    }

    return ans; // Return [-1, -1] if no pair is found
}

function twoSumThree() {
    let n = 5;
    let arr = [2, 6, 5, 8, 11];
    let target = 14;
    let ans = twoSum(n, arr, target);
    console.log(`This is the answer for variant 2: [${ans[0]}, ${ans[1]}]`);
}
twoSumThree();