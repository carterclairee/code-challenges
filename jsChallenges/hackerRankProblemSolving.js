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

console.log(simpleArraySum(example));

/*
2. 
*/