/* -------------------------------------------------------------------------- */
/*                Count Maximum Consecutive One's in the array                */
/* -------------------------------------------------------------------------- */

// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

function findMaxConsecutiveOnes(arr) {
    let maxCount = 0; // To store the maximum count of consecutive 1's
    let currentCount = 0; // To store the current count of consecutive 1's

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++; // Increment the count if we find a 1
            maxCount = Math.max(maxCount, currentCount); // Update the max count if needed
        } else {
            currentCount = 0; // Reset the current count if we find a 0
        }
    }

    return maxCount; // Return the maximum count found
}

// Example usage:
let prices1 = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(prices1)); // Output: 3

let prices2 = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(prices2)); // Output: 2


/* ----------------------------- class solution ----------------------------- */

class Solution {
    findMaxConsecutiveOnes(nums) {
        let cnt = 0;
        let maxi = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                cnt++;
            } else {
                cnt = 0;
            }
            maxi = Math.max(maxi, cnt);
        }

        return maxi;
    }
}

if (require.main === module) {
    const nums = [1, 1, 0, 1, 1, 1];
    const obj = new Solution();
    const ans = obj.findMaxConsecutiveOnes(nums);
    console.log("The maximum consecutive 1's are", ans);
}
