/* -------------------------------------------------------------------------- */
/*                                print 1 to n                                */
/* -------------------------------------------------------------------------- */

function printNumber(number, limit) {
    if (number > limit) return; // Base case: stop when number exceeds limit
    console.log(number);         // Print the current number
    printNumber(number + 1, limit); // Recursive call with incremented number
}

const number = 1;
const limit = 10;
printNumber(number, limit);


/* -------------------------------------------------------------------------- */
/*                                print n to 1                                */
/* -------------------------------------------------------------------------- */

function printNumber2(number, limit) {
    if (number > limit) return; 
    console.log(limit);   
    printNumber2(number, limit-1);
}

const number2 = 1;
const limit2 = 10;
printNumber2(number2, limit2);
