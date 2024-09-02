/* -------------------------------------------------------------------------- */
/*         Find Second Smallest and Second Largest Element in an array        */
/* -------------------------------------------------------------------------- */

// Solution 1: (Brute Force)[this approach only works if there are no duplicates]

function getElements(arr) {
    if (arr.length === 0 || arr.length === 1) {
        console.log(-1 + " " + -1); // Edge case when only one element is present in the array
        return;
    }

    arr.sort((a, b) => a - b);
    let small = arr[1];
    let large = arr[arr.length - 2];
    console.log("Second smallest is " + small);
    console.log("Second largest is " + large);
}

const arr = [1, 2, 4, 6, 7, 5];
getElements(arr);
console.log("--------------------------------------------------------")

// Time Complexity: O(NlogN), For sorting the array
// Space Complexity: O(1)

/* -------------------------------------------------------------------------- */
/*                         Solution 2(Better Solution)                        */
/* -------------------------------------------------------------------------- */


function getElements(arr) {
    if (arr.length === 0 || arr.length === 1) {
        console.log(-1 + " " + -1); // Edge case when only one element is present in the array
        return;
    }

    let small = Infinity;
    let second_small = Infinity;
    let large = -Infinity;
    let second_large = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        small = Math.min(small, arr[i]);
        large = Math.max(large, arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < second_small && arr[i] !== small)
            second_small = arr[i];
        if (arr[i] > second_large && arr[i] !== large)
            second_large = arr[i];
    }

    console.log("Second smallest is " + second_small);
    console.log("Second largest is " + second_large);
}

const arr1 = [1, 2, 4, 6, 7, 5];
getElements(arr1);
console.log("--------------------------------------------------------")

// Time Complexity: O(N), We do two linear traversals in our array
// Space Complexity: O(1)

/* -------------------------------------------------------------------------- */
/*                 Solution 3(Best Solution)  Optimal Approach                */
/* -------------------------------------------------------------------------- */

function secondSmallest(arr) {
    if (arr.length < 2)
        return -1;

    let small = Infinity;
    let second_small = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            second_small = small;
            small = arr[i];
        } else if (arr[i] < second_small && arr[i] !== small) {
            second_small = arr[i];
        }
    }

    return second_small;
}

function secondLargest(arr) {
    if (arr.length < 2)
        return -1;

    let large = -Infinity;
    let second_large = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            second_large = large;
            large = arr[i];
        } else if (arr[i] > second_large && arr[i] !== large) {
            second_large = arr[i];
        }
    }

    return second_large;
}

const arr2 = [1, 2, 4, 7, 7, 5];
const sS = secondSmallest(arr2);
const sL = secondLargest(arr2);

console.log("Second smallest is " + sS);
console.log("Second largest is " + sL);
console.log("--------------------------------------------------------")

// Time Complexity: O(N), Single - pass solution
// Space Complexity: O(1)