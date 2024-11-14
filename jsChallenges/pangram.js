// My solution that I came up with entirely on my own:
/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
const attempt = "The quick brown fox jumps over the lazy dog.";

function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const arr = [...string.toLowerCase()];
    let result = [];
    for (let i=0; i<alphabet.length; i++) {
        if (arr.includes(alphabet[i])) result.push(alphabet[i]);
    }

    return result.length >= 26 ? true : false;
}

  console.log(isPangram(attempt));

//   More elegant solution from CodeWars: 
// function isPangram(string){
//     return 'abcdefghijklmnopqrstuvwxyz'
//     // converts alphabet into an array of each letter
//       .split('')
//     // every is an array method that checks if all elements in the array meet a specified condition
//     // For each letter x in the alphabet, check if that letter is present somewhere in string (in lowercase). 
//     // .includes(x) checks if each letter x from the alphabet array is found in string.
//       .every((x) => string.toLowerCase().includes(x));
//   }