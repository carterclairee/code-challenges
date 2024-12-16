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

console.log(compareTriplets(alice, bob));