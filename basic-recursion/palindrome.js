
/* -------------------------------------------------------------------------- */
/*                              my first approach                             */
/* -------------------------------------------------------------------------- */

function isPalindrome(str){
    
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] != str[str.length - 1 -i]) return false;
    }
    return true;
}


// Example usage
const str1 = "ABCDCBA";
console.log(isPalindrome(str1)); // Output: Palindrome

const str2 = "Bodhi Learning";
console.log(isPalindrome(str2)); // Output: Not Palindrome

// Time Complexity: O(n)   Space Complexity: O(1)

/* -------------------------------------------------------------------------- */
/*                              iterative method                              */
/* -------------------------------------------------------------------------- */

function isPalindromeIterative(str){
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] != str[right]) return false
        left++;
        right--;
    }
    return true;
}


// Example usage
const string1 = "ABCDCBA";
console.log(isPalindromeIterative(string1)); // Output: Palindrome

const string2 = "Bodhi Learning";
console.log(isPalindromeIterative(string2)); // Output: Not Palindrome

// Time Complexity: O(n)   Space Complexity: O(1)

/* -------------------------------------------------------------------------- */
/*                              recursive method                              */
/* -------------------------------------------------------------------------- */

function isPalindromeRecursive(str, left = 0, right = str.length - 1) {
    // Normalize the string by converting to lowercase and removing non-alphanumeric characters
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (left >= right) return true;

    if (normalizedStr[left] !== normalizedStr[right]) return false;

    return isPalindromeRecursive(normalizedStr, left + 1, right - 1);
}

// Example usage
const strr1 = "ABCDCBA";
console.log(isPalindromeRecursive(strr1)); // Output: Palindrome

const strr2 = "Bodhi Learning";
console.log(isPalindromeRecursive(strr2)); // Output: Not Palindrome

// Time Complexity: O(n)   Space Complexity: O(n)  due to extra space for normalised string

/* -------------------------------------------------------------------------- */
/*                  recursive without special considerations                  */
/* -------------------------------------------------------------------------- */

function isPalindromeRecursive2(s, i = 0) {
    // Base condition: If i exceeds half of the string length
    if (i >= s.length / 2) return true;

    // If characters at the start and end are not the same, not a palindrome
    if (s[i] !== s[s.length - i - 1]) return false;

    // Recursively check the next characters
    return isPalindromeRecursive2(s, i + 1);
}

// Example usage
const str = "madam";
console.log(isPalindromeRecursive2(str)); // Output: true

// Time Complexity: O(n)   Space Complexity: O(n)
