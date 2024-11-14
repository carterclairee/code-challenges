/*
Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
2008 is written as 2000=MM, 8=VIII; or MMVIII
1666 uses each Roman symbol in descending order: MDCLXVI.
Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

+--------+-------+
| Symbol | Value |
+--------+-------+
|    M   |  1000 |
|   CM   |   900 |
|    D   |   500 |
|   CD   |   400 |
|    C   |   100 |
|   XC   |    90 |
|    L   |    50 |
|   XL   |    40 |
|    X   |    10 |
|   IX   |     9 |
|    V   |     5 |
|   IV   |     4 |
|    I   |     1 |
+--------+-------+
*/

const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
];

// Function to convert integer to Roman numeral
function toRoman(num) {
    let result = "";
    for (let { value, symbol } of romanMap) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

/*
This solution uses destructuring with the for...of loop. Without destructuring: 
for (let element of romanMap) {
    let value = element.value;
    let symbol = element.symbol;
}
*/

/*
Explanation of toRoman function
Loop through Roman numerals:
    The for...of loop iterates over romanMap, an array that holds Roman numeral symbols and their corresponding integer values in descending order.
    Each iteration gives us an object { value, symbol }, where value is an integer (e.g., 1000, 900, 500, etc.), and symbol is the Roman numeral that represents that value (e.g., "M", "CM", "D").

Use while loop to subtract value from num:
    For each Roman numeral, we check if num is greater than or equal to the current value. If it is, we add the corresponding symbol to the result string and reduce num by value.
    The while loop repeats this process until num is smaller than value, meaning that we’ve added as many of the current Roman numeral as possible.
    For example, if num = 3000, the while loop will add "M" three times to result (for each 1000 in 3000) and reduce num to zero.

Why while is necessary:
    Roman numerals use repetition to represent multiples, like MMM for 3000, CC for 200, etc. The while loop allows us to handle cases where a symbol must appear more than once.
    Without the while loop, we would have to handle each Roman numeral multiple times manually or in some other convoluted way. The while loop provides a concise way to "consume" the value of num by subtracting the highest possible values repeatedly.

Continue to the next numeral:
    Once num is smaller than the current value, the while loop exits, and the for...of loop moves to the next Roman numeral in romanMap.

Returning the result:
    After the for...of loop has processed all values in romanMap, num is reduced to zero, and result holds the complete Roman numeral representation of the original integer.

Example Walkthrough
Let’s see how it works for toRoman(1990):

Start with num = 1990 and result = "".
For { value: 1000, symbol: "M" }:
1990 >= 1000, so add "M" to result, making it "M", and reduce num to 990.
For { value: 900, symbol: "CM" }:
990 >= 900, so add "CM" to result, making it "MCM", and reduce num to 90.
For { value: 90, symbol: "XC" }:
90 >= 90, so add "XC" to result, making it "MCMXC", and reduce num to 0.
Now num is 0, so the for...of loop ends, and we return "MCMXC".
*/

// Function to convert Roman numeral to integer
function fromRoman(roman) {
    const romanToInt = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanToInt[roman[i]];
        const next = romanToInt[roman[i + 1]];
        
        if (next && current < next) {
            result += next - current;
            i++; // Skip the next character
        } else {
            result += current;
        }
    }
    return result;
}

/*
1. Setup: Roman Numeral Mapping
javascript
Copy code
const romanToInt = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
The romanToInt object maps each Roman numeral (or Roman numeral pair) to its integer value. This allows us to look up the value of each symbol directly.

2. Initialize result
javascript
Copy code
let result = 0;
We start with result set to 0. As we parse the Roman numeral string, we’ll add integer values to result based on the symbols in the string.

3. Loop through the Roman Numeral String
javascript
Copy code
for (let i = 0; i < roman.length; i++) {
We use a for loop to iterate through each character in the roman string. Here, i represents the current position in the string.

4. Determine Current and Next Values
javascript
Copy code
const current = romanToInt[roman[i]];
const next = romanToInt[roman[i + 1]];
For each character:

current is the integer value of the current Roman numeral symbol.
next is the integer value of the symbol immediately after current. If there is no next symbol (e.g., at the end of the string), next will be undefined.
5. Handle the Subtraction Rule
javascript
Copy code
if (next && current < next) {
    result += next - current;
    i++; // Skip the next character
}
If current is less than next (for example, I before V in IV for 4), we’re in a "subtraction" case:

We add next - current to result. For example, if current is 1 (I) and next is 5 (V), we add 5 - 1 = 4 to result.
Then, we increment i by 1 to skip the next character, as it has already been processed in this step.
6. Handle Standard Addition
javascript
Copy code
else {
    result += current;
}
If the subtraction rule does not apply, we simply add current to result. This handles cases like VI for 6 (where V is added first, followed by I).

7. Return the Result
javascript
Copy code
return result;
Once the loop completes, result contains the full integer value of the Roman numeral string.

Example Walkthrough
Let’s go through an example with "MCMXC" (which is 1990):

Iteration 1:

i = 0, roman[i] = "M" → current = 1000, next = 900.
1000 >= 900 (no subtraction), so result += 1000.
result = 1000.
Iteration 2:

i = 1, roman[i] = "CM" → current = 900, next = 90.
900 >= 90 (no subtraction), so result += 900.

Break down the next variable step by step: 
Let’s break this down step-by-step.

Indexing into the Roman Numeral String:

i is the current index in the roman string, so roman[i] gives us the symbol at that position.
roman[i + 1] gives us the symbol at the next position in the string.
Using the romanToInt Object for Lookup:

romanToInt is an object that maps each Roman numeral character (e.g., "I", "V", "X") to its integer value.
By writing romanToInt[roman[i + 1]], we're looking up the integer value of the symbol at roman[i + 1].
Checking for the End of the String:

If i + 1 is greater than or equal to roman.length, then roman[i + 1] is undefined (because we’ve reached the end of the string).
Since undefined has no corresponding value in romanToInt, next will also be undefined in this case, which allows us to handle the end of the string gracefully.
*/

/*
Algorithms
1. Greedy Algorithm (for toRoman function)
The toRoman function can be thought of as using a greedy algorithm. A greedy algorithm repeatedly chooses the "best" option (in this case, the largest possible Roman numeral value) to build up a solution. Here’s how the greedy approach applies:

We loop through the Roman numeral values in descending order (from 1000 down to 1).
For each Roman numeral value, we use it as many times as possible before moving on to the next largest numeral.
This approach ensures that we build the largest possible Roman numeral symbol from left to right without over-complicating the process or backtracking.
Since the values are sorted in descending order, this greedy algorithm works efficiently to convert the number to Roman numerals with minimal computation.

2. Two-Pointer or Look-Ahead Technique (for fromRoman function)
In the fromRoman function, a two-pointer or look-ahead technique is used to handle the subtraction cases (like IV for 4 or IX for 9):

The main pointer (i) iterates through the Roman numeral string.
We then check the symbol at the next index (i + 1) to see if it represents a "larger" value.
If the "next" value is larger than the "current" one, we perform a subtraction operation.
This "look-ahead" approach is similar to a two-pointer technique, as it involves comparing elements at adjacent indices.
This look-ahead technique is simple yet effective for parsing Roman numerals, as it allows us to handle both addition and subtraction cases in a single pass through the string.

3. Hash Map Lookup (for fromRoman function)
The fromRoman function uses a hash map (the romanToInt object) for constant-time lookups of Roman numeral values. Using a hash map allows the algorithm to avoid nested conditionals or a long series of if statements, making the solution more efficient and easier to read.

For each symbol in the Roman numeral string, the corresponding integer value is retrieved in constant time, O(1).
This lookup strategy reduces complexity compared to searching through an array or checking multiple conditions.

4. Linear Time Complexity (O(n))
Both functions run in linear time, O(n), where n is the length of the Roman numeral string or the number of numerals in the output. This is efficient for the input range (1 to 3999) and is achieved by:

Using a single pass through the integer to build the Roman numeral string in toRoman.
Using a single pass with constant-time lookups and conditional logic in fromRoman.
*/