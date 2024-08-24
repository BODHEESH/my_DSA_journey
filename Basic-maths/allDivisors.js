//Problem Statement: Given an integer N, return all divisors of N.


function findDivisors(n) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            divisors.push(i);
            if (i !== n / i) divisors.push(n / i);
        }
    }
    return divisors;
}

let number = 56;
let divisors = findDivisors(number);
console.log(`Divisors of ${number} are: ${divisors.join(" ")}`);