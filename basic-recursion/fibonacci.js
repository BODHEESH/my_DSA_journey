

function printFibonacciSeries(n) {
    if (n === 0) {
        console.log(`The Fibonacci Series up to ${n}th term:`);
        console.log(0);
    } else if (n === 1) {
        console.log(`The Fibonacci Series up to ${n}th term:`);
        console.log("0 1");
    } else {
        let secondLast = 0; // (i-2)th term
        let last = 1; // (i-1)th term
        let result = `${secondLast} ${last}`; // Initialize result with the first two numbers
        let cur; // ith term

        for (let i = 2; i <= n; i++) {
            cur = last + secondLast;
            secondLast = last;
            last = cur;
            result += ` ${cur}`; // Append each new term to the result string
        }

        console.log(`The Fibonacci Series up to ${n}th term:`);
        console.log(result); // Output the complete series
    }
}

// Example usage
const n = 5;
printFibonacciSeries(n); // Output: The Fibonacci Series up to 5th term: 0 1 1 2 3 5


/* -------------------------------------------------------------------------- */
/*                        printing nth fibonacci number                       */
/* -------------------------------------------------------------------------- */

function fibonacci(N) {
    // Base condition
    if (N <= 1) {
        return N;
    }

    // Recursive calls
    const last = fibonacci(N - 1);
    const slast = fibonacci(N - 2);

    // Combine results
    return last + slast;
}

// Example usage
const N = 4;
console.log(fibonacci(N)); // Output: 3
