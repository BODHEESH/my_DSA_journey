// Problem Statement: Given an integer N return the reverse of the given number.
// Note: If a number has trailing zeros, then its reverse will not include them.For e.g., reverse of 10400 will be 401 instead of 00401.

let n;
n = 12345000;

let revNum = 0;

while (n > 0) {

    let ld = n % 10;
    revNum = (revNum * 10) + ld;
    n = Math.floor(n / 10);
}
// Print the reversed number.
console.log(revNum);


// Time Complexity: O(log10N + 1) where N is the input number.The time complexity is determined by the number of digits in the input integer N.In the worst case when N is a multiple of 10 the number of digits in N is log10 N + 1.
// Space Complexity: O(1)