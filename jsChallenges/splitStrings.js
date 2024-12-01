/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

// My solution
const example = 'abc';

function solution(str) {
    // Split the string into characters in an array
    arr = str.split("");
    // Add the underscore if the length of the array is odd
    if (arr.length % 2 !== 0) arr.push("_");

    let result = [];
    // Loop through the array, skipping every other index
    for (let i = 0; i < arr.length; i +=2 ){
        // Push the first value and the second value to the result array as a pair
        result.push(arr[i] + arr[i+1]);
    }
    return result;
}

console.log(solution(example));

/*
I liked this way of handling the underscore from codewars:
function solution(str){
  arr = [];
  for(var i = 0; i < str.length; i += 2){
    second = str[i+1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}
*/