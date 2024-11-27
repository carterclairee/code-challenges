/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/

// My solution:
const a1 = ["arp", "live", "strong"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

function inArray(array1,array2){
    // Loop through array 2, and then array 1. If a substring from array 1 is in array 2, add it to the result
    let result = [];
    for (let i = 0; i < array2.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array2[i].includes(array1[j])) result.push(array1[j]);
        }
    }
    // Remove duplicates using set
    result = [...new Set(result)];
    // Return the sorted result
    return result.sort();
}

console.log(inArray(a1, a2));

/*
A solution from CodeWars that I liked:
function inArray(array1,array2){
  return array1
//   Find returns the first 
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
*/