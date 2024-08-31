

class Solution {
    static merge(arr, low, mid, high) {
        let temp = []; // temporary array
        let left = low; // starting index of left half of arr
        let right = mid + 1; // starting index of right half of arr

        // Storing elements in the temporary array in a sorted manner
        while (left <= mid && right <= high) {
            if (arr[left] <= arr[right]) {
                temp.push(arr[left]);
                left++;
            } else {
                temp.push(arr[right]);
                right++;
            }
        }

        // If elements on the left half are still left
        while (left <= mid) {
            temp.push(arr[left]);
            left++;
        }

        // If elements on the right half are still left
        while (right <= high) {
            temp.push(arr[right]);
            right++;
        }

        // Transferring all elements from temp to arr
        for (let i = low; i <= high; i++) {
            arr[i] = temp[i - low];
        }
    }

    static mergeSort(arr, low, high) {
        if (low >= high) return;
        let mid = Math.floor((low + high) / 2);
        this.mergeSort(arr, low, mid); // left half
        this.mergeSort(arr, mid + 1, high); // right half
        this.merge(arr, low, mid, high); // merging sorted halves
    }
}

// Main function to demonstrate the solution
const main = () => {
    let arr = [9, 4, 7, 6, 3, 1, 5];
    let n = arr.length;

    console.log("Before sorting array:");
    console.log(arr.join(" "));

    Solution.mergeSort(arr, 0, n - 1);

    console.log("After sorting array:");
    console.log(arr.join(" "));
};

main();
