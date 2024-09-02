/* -------------------------------------------------------------------------- */
/*                         Check if an Array is Sorted                        */
/* -------------------------------------------------------------------------- */

// Approach: Brute Force
function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i])
                return false;
        }
    }
    return true;
}

const arr = [1, 2, 3, 4, 5];
const ans = isSorted(arr);
if (ans) console.log("True");
else console.log("False");

// Time Complexity: O(N ^ 2)     Space Complexity: O(1)

/* -------------------------------------------------------------------------- */
/*           Approach: Efficient(Single traversal) Optimal Approach           */
/* -------------------------------------------------------------------------- */

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1])
            return false;
    }
    return true;
}

const arr1 = [1, 2, 3, 4, 5];
console.log(isSorted(arr1) ? "True" : "False");

// Time Complexity: O(N)      Space Complexity: O(1)

