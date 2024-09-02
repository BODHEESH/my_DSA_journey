/* -------------------------------------------------------------------------- */
/*                    Find the Largest element in an array                    */
/* -------------------------------------------------------------------------- */

function sortArr(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}

const arr1 = [2, 5, 1, 3, 0];
const arr2 = [8, 10, 5, 7, 9];

console.log("The Largest element in the array is: " + sortArr(arr1));
console.log("The Largest element in the array is: " + sortArr(arr2));

// Time Complexity: O(N * log(N))
// Space Complexity: O(n)

/* -------------------------------------------------------------------------- */
/*                       Solution2: Using a max variable                      */
/* -------------------------------------------------------------------------- */

function findLargestElement(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

const arr11 = [2, 5, 1, 3, 0];
let max = findLargestElement(arr11);
console.log("The largest element in the array is: " + max);

const arr22 = [8, 10, 5, 7, 9];
max = findLargestElement(arr22);
console.log("The largest element in the array is: " + max);

// Time Complexity: O(N)
// Space Complexity: O(1)