/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/


// My solution that I came up with independently:
const input = "The sunset sets at twelve o' clock."

function alphabetPosition(text) {
    const alphabetMap = "abcdefghijklmnopqrstuvwxyz".split("");
  
  // Loop over text
  // Loop over alphabetMap
  // If the text letter matches the alphabetMap letter, += the index of alphabetMap + 1 to result
  
    let result = "";
    for (let i=0; i<text.length; i++) {
        for (let j=0; j<alphabetMap.length; j++) {
            if (text[i].toLowerCase() === alphabetMap[j]) result += j + 1 + " ";
        }
    }
    // Get rid of the last space at the end
    return result.trimEnd();
}

console.log(alphabetPosition(input));

// Sofia's solutions:
// function alphabetPosition(text) {
//     //create a variable for the alphabet
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     alphabet = alphabet.split("");
//     //.split('') // get the string into individual letters 
//     //.filter (char a to z) //make sure to only have letters
//     //.map()//convert the letters to numbers 
//     //.join( )// get them back together
//    return text.toLowerCase()
//       .split("")
//       .filter((el) => alphabet.indexOf(el) >= 0)
//       .map(el => alphabet.indexOf(el) +1)
//       .join(" ")
//   }