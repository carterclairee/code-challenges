/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

let str = "Reverse this string, please!";

function reverse(str){
    // Remove any whitespace from each side
    // I looked up the regex for removing more than one space between words with replace. I've seen it before but couldn't remember the syntax
    // Split string into an array based on spaces
    str = str.trim().replace(/\s+/g, " ").split(" ");

    let result = [];

    for (let i = 0; i < str.length; i++) {
        // If the index is odd,
        if (i%2 !==0) {
        // Reverse the string by doing a split, reverse array method, and then join back into string
            result.push(str[i].split("").reverse().join(""))
        } else {
            result.push(str[i]);
        }
    }
    // Join the array back into a string and return
    return result.join(" ");
}

console.log(reverse(str));

/*
I liked this solution from codewars, too:
function reverse(str){

  let arr = str.split(" "); 
// Loop starts at index one and skips an index to access every other word
  for(var i = 1; i<arr.length; i+=2){
      arr[i] = arr[i].split('').reverse().join(""); 
  }
  
  return arr.join(" ").trim(); 
  
}

*/