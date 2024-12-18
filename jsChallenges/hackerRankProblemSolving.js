/*
I'm trying out HackerRank now, where before I was using CodeWars. It's starting me on easier ones.

1. Given an array of integers, find the sum of its elements.

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
*/

const example = [1,2,3];

function simpleArraySum(ar) {
    return ar.reduce((acc, curr) => acc + curr);
}

// console.log(simpleArraySum(example));

/*
2. 
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.
The return array is [1, 1] with Alice's score first and Bob's second.
*/

const alice = [1, 2, 3];
const bob = [3, 2, 1];

function compareTriplets(a, b) {
    // keep track of each person's score
    let score1 = 0;
    let score2 = 0;

    // compare the score in each index and assign points
    function tally(num1, num2) {
        if (num1 > num2) score1++;
        else if (num2 > num1) score2++;
    }

    tally(a[0], b[0]);
    tally(a[1], b[1]);
    tally(a[2], b[2]);

    // return the scores in an array with the first array listed first
    return [score1, score2]
}

// console.log(compareTriplets(alice, bob));

/*
3.
In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):
int ar[n]: an array of integers .

Return
long: the sum of all array elements
*/

const sample = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
    return ar.reduce((acc, cur) => acc + cur);
}

// console.log(aVeryBigSum(sample));

/*
4.
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 15. The right to left diagonal = 17. Their absolute difference is 2.

Function description

Complete the function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference

1 2 3 4
4 5 6 5
9 8 9 6  
1 2 3 4
*/

const test = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
const test2 = [[1, 2, 3, 4], [4, 5, 6, 5], [9, 8, 9, 6], [1, 2, 3, 4]];

function diagonalDifference(arr) {
    // l to r: ar0[0], ar1[1], ar2[2]
    // r to l: ar0[2], ar1[1], ar2[0]

    // initialize counting variables
    let lr = 0;
    let rl = 0;

    for (let i = 0; i < arr.length; i++) {
        lr += arr[i][i];
        rl += arr[i][arr.length - i - 1];
    }
    return Math.abs(lr - rl);
}

// console.log(diagonalDifference(test));