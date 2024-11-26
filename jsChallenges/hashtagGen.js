/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples:
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

const example = "";

function generateHashtag (str) {
    // Trim whitespace from either end
    // Remove extra whitespace from between words with regex
    // Split the string into an array of words
    let result = str.trim().replace(/\s+/g, " ").split(" ").
    // Map the array, and for each word
    map((word) => {
        // loop through and capitalize the first letter, and add the rest of the string back to it
        for (let i = 0; i < word.length; i++) {
           return word[0].toUpperCase() + word.slice(1);
        }
    }).
    // Put the array back into a string, now without spaces
    join("");

    // Add the hashtag
    result = "#" + result;

    // Return false if result is > 140 chars
    if (result.length > 140) return false;
     // Return false if it's an empty string, which would now be just the #
    else if (result === "#") return false;
    // Else, return the hashtag
    else return result;
}

console.log(generateHashtag(example));

/*
This solution was a little cleaner and I liked it:
function generateHashtag(str) {
  if (!str.trim()) return false;

  const result =
    '#' +
    str
      .split(' ')
      .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
      .join('');

  return result.length > 140 ? false : result;
}
*/