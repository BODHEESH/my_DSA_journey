function checkPrime(n) {
    // Handle edge cases for numbers less than or equal to 1
    if (n <= 1) return false;

    // Handle the smallest prime number
    if (n === 2) return true;

    // Exclude even numbers greater than 2
    if (n % 2 === 0) return false;

    // Increment by 2 to check only odd numbers
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    // If no divisors found, n is prime
    return true;
}

// Test the function with a sample number
let n = 1483;
let isPrime = checkPrime(n);
if (isPrime) {
    console.log(n + " is a prime number.");
} else {
    console.log(n + " is not a prime number.");
}
