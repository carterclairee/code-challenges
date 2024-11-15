/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/ 

const arr = [1,2,2,3,3,3,4,3,3,3,2,2,1];

function findOdd(A) {
    // Count how many times a number appears in the array
    // I got hung up on this step, so I found a solution I really liked on stack overflow that I will remember for future counting problems:
    result = {};

    for(let i = 0; i < A.length; ++i) {
        // If the number doesn't yet appear in result object
        if(!result[A[i]])
            // Set the number to the key and 0 to the value
            result[A[i]] = 0;
        // If the number is present in the object, increment its count as the value
        ++result[A[i]];
    }

    // If it's not divisible by 2, return the number
    // I was able to take it from here
    for (let key in result) {
        if (result[key]%2 !==0) return Number(key);
    }
  }

  console.log(findOdd(arr));

// I liked this solution from CodeWars, too. Similar logic to the for loop, but shorter and simpler
// function findOdd(A) {
//     var obj = {};
//     A.forEach(function(el){
//       obj[el] ? obj[el]++ : obj[el] = 1;
//     });
    
//     for(prop in obj) {
//       if(obj[prop] % 2 !== 0) return Number(prop);
//     }
//   }
