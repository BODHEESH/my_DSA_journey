/* -------------------------------------------------------------------------- */
/*                Longest Subarray with given Sum K(Positives)                */
/* -------------------------------------------------------------------------- */
// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.



// (Brute - force approach):
function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let len = 0;
    for (let i = 0; i < n; i++) { // starting index
        for (let j = i; j < n; j++) { // ending index
            // add all the elements of subarray = a[i...j]
            let s = 0;
            for (let K = i; K <= j; K++) {
                s += a[K];
            }

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
//     Reason: We are using three nested loops, each running approximately N times.
//   Space Complexity: O(1) as we are not using any extra space.



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


// Time Complexity: O(N2) approx., where N = size of the array.
//     Reason: We are using two nested loops, each running approximately N times.
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

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);


/*
Time Complexity: O(N) or O(N*logN) depending on which map data structure we are using, where N = size of the array.
Reason: For example, if we are using an unordered_map data structure in C++ the time complexity will be O(N)(though in the worst case, unordered_map takes O(N) to find an element and the time complexity becomes O(N2)) but if we are using a map data structure, the time complexity will be O(N*logN). The least complexity will be O(N) as we are using a loop to traverse the array.

Space Complexity: O(N) as we are using a map data structure.*/


/* ------------------- Optimal Approach(Using 2 pointers): ------------------ */




function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}

let aa = [2, 3, 5, 1, 9];
let kk = 10;
let len = getLongestSubaarray(a, kk);
console.log("The length of the longest subarray is:", len);


/*
Time Complexity: O(2*N), where N = size of the given array.
Reason: The outer while loop i.e. the right pointer can move up to index n-1(the last index). Now, the inner while loop i.e. the left pointer can move up to the right pointer at most. So, every time the inner loop does not run for n times rather it can run for n times in total. So, the time complexity will be O(2*N) instead of O(N2).

Space Complexity: O(1) as we are not using any extra space.

Space Complexity: O(1) as we are not using any extra space.
*/

/* -------------------------------------------------------------------------- */
/*                                     gpt                                    */
/* -------------------------------------------------------------------------- */


function longestSubarrayWithSumK(arr, k) {
    let start = 0;
    let currentSum = 0;
    let maxLength = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end]; // Expand the window by adding the current element

        // Shrink the window from the start if the current sum exceeds k
        while (currentSum > k) {
            currentSum -= arr[start];
            start++;
        }

        // Check if the current window sum equals k
        if (currentSum === k) {
            maxLength = Math.max(maxLength, end - start + 1);
        }
    }

    return maxLength;
}

// Example usage:
let arr1 = [2, 3, 5];
let k1 = 5;
console.log(longestSubarrayWithSumK(arr1, k1)); // Output: 2

let arr2 = [2, 3, 5, 1, 9];
let k2 = 10;
console.log(longestSubarrayWithSumK(arr2, k2)); // Output: 3




// Explanation:
// The sliding window technique works well for this problem because the array consists of positive integers.The basic idea is to use two pointers(start and end) to create a "window" that slides over the array:

// Initialize:

// start pointer to the beginning of the array.
// currentSum to 0.
// maxLength to 0.
// Expand the Window:

// Iterate over the array using the end pointer.
//     Add the current element (array[end]) to currentSum.
// Shrink the Window:

// If currentSum exceeds
// 𝑘
// k, move the start pointer to the right until currentSum is less than or equal to
// 𝑘
// k.
// Check for Valid Subarray:

// If currentSum equals
// 𝑘
// k, update maxLength with the maximum length of the current valid subarray.
// Continue the Process:

// Continue the process until the end pointer reaches the end of the array.
// Return the Result:

// The maxLength will hold the length of the longest subarray with sum 
// 𝑘
// k.
