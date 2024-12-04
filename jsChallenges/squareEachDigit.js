/*
In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.
*/

// I found this one pretty easy

const test = 9119;

function squareDigits(num) {
    // ToString numbers
    // Split into an array
    // Map string back into numbers
    // Map numbers to square
    // Join back into single string
    // convert back into a number

    return Number(num.toString().split("").map(e => Number(e) ** 2).join(""));
}

console.log(squareDigits(test));