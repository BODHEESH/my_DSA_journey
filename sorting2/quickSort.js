
/* -------------------------------------------------------------------------- */
/*                            Quick Sort Algorithm                            */
/* -------------------------------------------------------------------------- */

class Solution {
    static partition(arr, low, high) {
        let pivot = arr[low];
        let i = low;
        let j = high;

        while (i < j) {
            while (arr[i] <= pivot && i <= high - 1) {
                i++;
            }

            while (arr[j] > pivot && j >= low + 1) {
                j--;
            }

            if (i < j) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
            }
        }

        [arr[low], arr[j]] = [arr[j], arr[low]]; // Swap pivot with arr[j]
        return j;
    }

    static qs(arr, low, high) {
        if (low < high) {
            let pIndex = Solution.partition(arr, low, high);
            Solution.qs(arr, low, pIndex - 1);
            Solution.qs(arr, pIndex + 1, high);
        }
    }

    static quickSort(arr) {
        Solution.qs(arr, 0, arr.length - 1);
        return arr;
    }
}

function main() {
    let arr = [4, 6, 2, 5, 7, 9, 1, 3];
    console.log("Before Using Quick Sort:");
    console.log(arr.join(" "));

    Solution.quickSort(arr);

    console.log("After Quick Sort:");
    console.log(arr.join(" "));
}

main();
