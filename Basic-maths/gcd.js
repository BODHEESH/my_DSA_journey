// Given two integers N1 and N2, find their greatest common divisor.

/* -------------------------------------------------------------------------- */
/*                           The Euclidean Algorithm                          */
/* -------------------------------------------------------------------------- */
function findGcd(a, b) {
    while (a > 0 && b > 0) {
        if (a > b) a = a % b 
        else b = b % a 
    }
    if (a == 0 ) return b;
    return a
}

    let n1 = 12, n2 = 16;

    // Find the GCD of n1 and n2
    let gcd = findGcd(n1, n2);

    console.log("GCD of " + n1 + " and " + n2 + " is: " + gcd);


/* -------------------------------------------------------------------------- */
/*                                  method 2                                  */
/* -------------------------------------------------------------------------- */

function findGcdEuclidean(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}








// function findGcd(n1, n2) {
//     // Initialize gcd to 1
//     let gcd = 1;

//     // Iterate from 1 up to
//     // the minimum of n1 and n2
//     for (let i = 1; i <= Math.min(n1, n2); i++) {
//         // Check if i is a common
//         // factor of both n1 and n2
//         if (n1 % i === 0 && n2 % i === 0) {
//             // Update gcd to the
//             // current common factor i
//             gcd = i;
//         }
//     }

//     // Return the greatest
//     // common divisor (gcd)
//     return gcd;
// }

// // Main function
// function main() {
//     let n1 = 20, n2 = 15;

//     // Find the GCD of n1 and n2
//     let gcd = findGcd(n1, n2);

//     console.log("GCD of " + n1 + " and " + n2 + " is: " + gcd);
// }

// // Call the main function
// main();



// function findGcd2(n1, n2) {
//     // Initialize gcd to 1
//     let gcd = 1;
//     let limit;
// if (n1<n2){
//     limit =n1
// }else(
//     limit = n2
// )
//     for (let i = limit; i > 0; i--) {
//         if (n1 % i === 0 && n2 % i === 0) {
//             gcd = i;
//             return gcd;
//         }
//     }
//     return gcd;
// }

// // Main function
// function main2() {
//     let n1 = 9, n2 = 12;

//     // Find the GCD of n1 and n2
//     let gcd = findGcd2(n1, n2);

//     console.log("GCD of " + n1 + " and " + n2 + " is: " + gcd);
// }

// // Call the main function
// main2();
