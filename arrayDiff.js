/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

const arrA = [1,2,3];
const arrB = [1,2];

function arrayDiff(a, b) {
    // if b has length (first attempt failed because one of the tests had a b that was empty)
    if (b.length > 0) {
        // For each element of a, if it's not in b, return it in the new array
        return a.filter(e => !b.includes(e));
    } else return a;
}

console.log(arrayDiff(arrA, arrB));