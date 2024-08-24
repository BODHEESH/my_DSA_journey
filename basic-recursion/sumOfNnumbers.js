

function printNumber(number, limit) {
    if (number > limit) return; 
    sum = sum + number;  
    printNumber(number + 1, limit);
}
let sum = 0;
let number = 1;
const limit = 5;
printNumber(number, limit);

console.log("sum = " , sum);

