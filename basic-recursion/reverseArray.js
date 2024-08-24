/* -------------------------------------------------------------------------- */
/*                              Iterative method                              */
/* -------------------------------------------------------------------------- */

function reverseArray(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// Example usage
const arr1 = [5, 4, 3, 2, 1];
console.log(reverseArray(arr1)); // Output: [1, 2, 3, 4, 5]

const arr2 = [10, 20, 30, 40];
console.log(reverseArray(arr2)); // Output: [40, 30, 20, 10]

/* -------------------------------------------------------------------------- */
/*                              recursive method                              */
/* -------------------------------------------------------------------------- */

function reverseArrayRecursive(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return arr;
    }

    // Swap elements at start and end
    [arr[start], arr[end]] = [arr[end], arr[start]];

    // Recursive call
    return reverseArrayRecursive(arr, start + 1, end - 1);
}

// Example usage
const array1 = [5, 4, 3, 2, 1];
console.log(reverseArrayRecursive(array1)); // Output: [1, 2, 3, 4, 5]

const array2 = [10, 20, 30, 40];
console.log(reverseArrayRecursive(array2)); // Output: [40, 30, 20, 10]
