// HackerRank Data Structures Easy Problems

/*
1. Arrays - DS
Reverse an array of integers.

Example: A=[1,2,3] Return [3,2,1]
*/

const example = [1, 2, 3];

// function reverseArray(a) {
//     return a.reverse();
// }

// Without reverse method, jff:
function reverseArray(a) {
    let result = [];

    for (let i = a.length -1; i >= 0; i--) {
        result.push(a[i]);
    }
    return result;
}

console.log(reverseArray(example));

/*
2. 2D Array - DS
Complete the function hourglassSum in the editor below. The array will always be 6x6.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers
Returns

Returns
int: the maximum hourglass sum
[
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

Highest sum: 28
*/
const sample = [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]
]

function hourglassSum(arr) {
    // I got a little tripped up on maxSum because I initially initialized it as 0, but that would lead to incorrect results if all of the numbers are negative. The smallest possible would be -9 * 7 = -63.
    let maxSum = -63;

       // Loop over the arrays where hourglasses could fit (0-3)
       for (let i = 0; i < 4; i++) { // Rows
            // Loop over columns where hourglasses can fit (also 0 to 3)
            for (let j = 0; j < 4; j++) { //columns
                // at each valid top-left corner, calculate the hourglass sum
                let top = arr[i][j] + arr[i][j+1] + arr[i][j+2];
                let middle = arr[i + 1][[j+1]];
                let bottom = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
                let hourglassSum = top + middle + bottom;

                // update the max sum
                maxSum = Math.max(maxSum, hourglassSum);
            }
        }

    // Return the maximum hourglass sum
    return maxSum;
}

// console.log(hourglassSum(sample));