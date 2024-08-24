// Problem Statement: Given an word W, return true if it is a palindrome else return false.

function isPalindrome(W) {
    let n = W.length;
    for (let i = 0; i < n / 2; i++) {
        if (W.charAt(i) != W.charAt(n - i - 1)) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('malayalam')); // true
console.log(isPalindrome('bodheesh')); // false

// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

function checkPalindromenumber(num) {
    let number = parseInt(num, 10);
    let revNumber = 0;
    while (num > 0) {
        reminder = num % 10;
        revNumber = (revNumber * 10) + reminder;
        num = Math.floor(num / 10);
    }
    if (revNumber === number) return true;
    else return false;
}

console.log(checkPalindromenumber(12321)); // true
console.log(checkPalindromenumber(123456)); // false

// Time Complexity: O(log10N + 1)
// Space Complexity: O(1)



/* -------------------------------------------------------------------------- */
/*                          optimal approach is same                          */
/* -------------------------------------------------------------------------- */

function isPalindromeNumber(n) {
    let revNum = 0;
    let dup = n;

    while (n > 0) {
        let lastDigit = n % 10;
        revNum = (revNum * 10) + lastDigit;
        n = Math.floor(n / 10);
    }

    return dup === revNum;
}

// Main function
function main() {
    let number = 4554;

    if (isPalindromeNumber(number)) {
        console.log(number , " is a palindrome.");
    } else {
        console.log(number , " is not a palindrome.");
    }
}

// Calling the main function
main();
