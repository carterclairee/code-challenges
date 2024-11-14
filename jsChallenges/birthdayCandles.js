/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
Example
candles = [4, 4, 1, 3]
The maximum height candles are 4 units high. There are 2 of them, so return 2.
Function Description
Complete the function birthdayCakeCandles in the editor below.
birthdayCakeCandles has the following parameter(s):
int candles[n]: the candle heights
Returns
int: the number of candles that are tallest
*/

/*
Plan:
find the biggest candle
filter out all but the biggest
count the length of the filtered array and return that
*/
// const candleArray = [1, 3, 3, 2];
// function birthdayCakeCandles(candles) {
//     // find the max by for loop
//     let max = 0;
//     for (let i=0; i < candles.length; i++) {
//         if (candles[i] > max) max=candles[i];
//     }

//     // filter out the array with the max as the comparison number; return the length of the newly filtered array
//     return candles.filter(candle => candle === max).length;
// }

// console.log(birthdayCakeCandles(candleArray));

// if using another for loop:
const candleArray = [1, 3, 3, 2];
function birthdayCakeCandles(candles) {
    // find the max by for loop
    let max = 0;
    for (let i=0; i < candles.length; i++) {
        if (candles[i] > max) max=candles[i];
    }

    let result = [];
    for (let i = 0; i< candles.length; i++) {
        if (candles[i] === max) result.push(candles[i]);
    }

    return result.length;
}

console.log(birthdayCakeCandles(candleArray));