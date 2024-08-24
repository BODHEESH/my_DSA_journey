


// function factorial( limit) {
//     if (limit === 1) return limit;
//     factorialSum = factorialSum * limit
//     limit = limit-1;
//     factorial(limit)
   
// }
// let factorialSum = 1;
// let number = 1;
// const limit = 5;
// factorial(limit);

// console.log("factorial = ", factorialSum);


function factorial(limit) {
    if (limit === 1) return 1;  // Base case: factorial of 1 is 1
    return limit * factorial(limit - 1);  // Recursive call
}

const limit = 5;
const result = factorial(limit);

console.log("factorial =", result);
