// Problem Statement: Given an integer N, return the number of digits in N.

/* -------------------------------------------------------------------------- */
/*                            Brute Force Approach                            */
/* -------------------------------------------------------------------------- */

function noOfDigits(number) {
    let count = 0;

    while (number > 0) {
        count++;
        number = Math.floor(number/10)
    }
    return count;
}

const noOfDigitsInGivenNumber = noOfDigits(12345678)
console.log("noOfDigitsInGivenNumber is in Brute force method : " , noOfDigitsInGivenNumber)


// Time Complexity: O(log10N + 1) where N is the input number.The time complexity is determined by the number of digits in the input integer N.In the worst case when N is a multiple of 10 the number of digits in N is log10N + 1.
// Space Complexity: O(1) as only a constant amount of additional memory for the counter regardless of size of the input number.


/* -------------------------------------------------------------------------- */
/*                              Optimal Approach                              */
/* -------------------------------------------------------------------------- */

function countDigits(num) {
    let count = Math.floor(log10(num) + 1);
    return count
}

const totalDigits = countDigits(12345)
console.log("totalDigits is in optimal method : ", totalDigits)


// Complexity Analysis
// Time Complexity: O(1) as simple arithmetic operations in constant time are computed on integers.

// Space Complexity: O(1) as only a constant amount of additional memory for the count variable regardless of size of the input number.

/* -------------------------------------------------------------------------- */
/*             alternative method but less efficient in complexity            */
/* -------------------------------------------------------------------------- */

function countDigits(n) {
    return n.toString().length;
}

let N = 123;
console.log("N: " + N);
let digits = countDigits(N);
console.log("Number of Digits in N alternative method: " , digits);


// Time Complexity: O(d)
// Space Complexity: O(d)      where d is the number of digits in the integer n.

/* -------------------------------------------------------------------------- */
/*                                    java                                    */
/* -------------------------------------------------------------------------- */
// public class Solution {

//     // Function to count the number of digits in a number
//     public static int countDigits(int num) {
//         int count = (int) Math.floor(Math.log10(num) + 1);
//         return count;
//     }

//     public static void main(String[] args) {
//         int totalDigits = countDigits(12345);
//         System.out.println("totalDigits is in optimal method : " + totalDigits);
//     }
// }
