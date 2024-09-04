/* -------------------------------------------------------------------------- */
/*                     Find the missing number in an array                    */
/* -------------------------------------------------------------------------- */

// Problem Statement: Given an integer N and an array of size N - 1 containing N - 1 numbers between 1 to N.Find the number(between 1 to N), that is not present in the given array.

/* ----------------- Naive Approach(Brute - force approach): ---------------- */

function missingNumber(a, N) {
    // Outer loop that runs from 1 to N:
    for (let i = 1; i <= N; i++) {
        // flag variable to check if an element exists
        let flag = 0;

        // Search the element using linear search:
        for (let j = 0; j < N - 1; j++) {
            if (a[j] === i) {
                // i is present in the array:
                flag = 1;
                break;
            }
        }

        // check if the element is missing (i.e., flag === 0):
        if (flag === 0) {
            return i;
        }
    }

    // The following line will never execute.
    // It is just to avoid warnings.
    return -1;
}

function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
}

main();

// Time Complexity:O(N*N)
// Space Complexity:O(1)


/* --------------------- Better Approach(using Hashing): -------------------- */

function missingNumber(a, N) {
    const hash = new Array(N + 1).fill(0); // hash array

    // storing the frequencies:
    for (let i = 0; i < N - 1; i++) {
        hash[a[i]]++;
    }

    // checking the frequencies for numbers 1 to N:
    for (let i = 1; i <= N; i++) {
        if (hash[i] === 0) {
            return i;
        }
    }

    // The following line will never execute.
    // It is just to avoid warnings.
    return -1;
}

function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
}

main();


// Time Complexity: O(N) + O(N) ~O(2 * N), where N = size of the array + 1.
// Reason: For storing the frequencies in the hash array, the program takes O(N) time complexity and for checking the frequencies in the second step again O(N) is required.So, the total time complexity is O(N) + O(N).

// Space Complexity: O(N), where N = size of the array + 1. Here we are using an extra hash array of size N + 1.

/* -------------------------------------------------------------------------- */
/*                             Optimal Approach 1                             */
/* -------------------------------------------------------------------------- */

// Summation Approach:

function missingNumber(a, N) {
    // Summation of first N numbers:
    const summation = (N * (N + 1)) / 2;

    // Summation of all array elements:
    let s2 = 0;
    for (let i = 0; i < N - 1; i++) {
        s2 += a[i];
    }

    const missingNum = summation - s2;
    return missingNum;
}

function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
}

main();

// Time Complexity: O(N), where N = size of array + 1.
// Reason: Here, we need only 1 loop to get the sum of the array elements.The loop runs for approx.N times.So, the time complexity is O(N).

// Space Complexity: O(1) as we are not using any extra space.

/* -------------------------------------------------------------------------- */
/*                             Optimal Approach 2                             */
/* -------------------------------------------------------------------------- */

//XOR Approach:

function missingNumber(a, N) {
    let xor1 = 0;
    let xor2 = 0;

    for (let i = 0; i < N - 1; i++) {
        xor2 = xor2 ^ a[i]; // XOR of array elements
        xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
    }
    xor1 = xor1 ^ N; // XOR up to [1...N]

    return xor1 ^ xor2; // the missing number
}

function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
}

main();




















