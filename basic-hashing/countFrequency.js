
// Count frequency of each element in the array

//Given an array, we have found the number of occurrences of each element in the array.


/* ------------------------------ basic method ------------------------------ */
// Time Complexity: O(n ^ 2)
// Space Complexity: O(n)
function countFrequency(arr) {
    let visited = new Array(arr.length).fill(false);

    for (let i = 0; i < arr.length; i++) {
        if (visited[i] === true) continue;

        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
                visited[j] = true;
            }
        }

        console.log(arr[i], count);
    }
}

let arr1 = [2, 2, 3, 4, 4, 0, 2];
console.log("Output:");
countFrequency(arr1);


/* -------------------------------------------------------------------------- */
/*                             OPTIMISED APPROACH                             */
/* -------------------------------------------------------------------------- */
// Time Complexity: O(n)
// Space Complexity: O(n)

function Frequency(arr, n) {
    let mp = {};

    for (let i = 0; i < n; i++) {
        if (arr[i] in mp) {
            mp[arr[i]] += 1;
        } else {
            mp[arr[i]] = 1;
        }
    }

    for (let x in mp) {
        console.log(x, mp[x]);
    }
}

const arr = [10, 5, 10, 6, 15, 10, 5];
const n = arr.length;
Frequency(arr, n);

