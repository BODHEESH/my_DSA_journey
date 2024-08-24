


function isArmstrong(N){
    let dup = N;
    let sum = 0;
    while (N>0){
        let lastDigit = N % 10;
        sum = sum +( lastDigit*lastDigit*lastDigit );
        N = Math.floor(N / 10);
    }
 
    return sum == dup;
}


const number = 153;
if (isArmstrong(number)) {
    console.log(number + " is an Armstrong number.");
} else {
    console.log(number + " is not an Armstrong number.");
}


// Time Complexity: O(d)(where d is the number of digits in N).
// Space Complexity: O(1).