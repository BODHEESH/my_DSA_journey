/* -------------------------------------------------------------------------- */
/*                                Linear Search                               */
/* -------------------------------------------------------------------------- */
//Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.

function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i; // Return the index where the element is found
        }
    }
    return -1; // Return -1 if the element is not found
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5];
let num1 = 3;
console.log(linearSearch(arr1, num1)); // Output: 2

let arr2 = [5, 4, 3, 2, 1];
let num2 = 5;
console.log(linearSearch(arr2, num2)); // Output: 0

let arr3 = [5, 4, 3, 2, 1];
let num3 = 6;
console.log(linearSearch(arr3, num3)); // Output: -1

