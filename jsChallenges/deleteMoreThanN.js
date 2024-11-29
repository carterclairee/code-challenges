/*
Enough is enough!
Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
He tells them that he will ocdnly sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].
*/

// For my solution, I remembered a handy way to count the occurence of something in an array using an object that serves as a dictionary. I had to look up the syntax, though.
const motif = [1,2,3,1,2,1,2,3];

function deleteNth(arr,n){
    let result = [];
    // Object to keep track of occurences
    let count = {};

    for (let i = 0; i < arr.length; i++) {
        // If the key doesn't exist, it's set as zero so we can start incrementing if it does exist
        if (!count[arr[i]]) count[arr[i]] = 0;
        // If the count of the number is less than n
        if (count[arr[i]] < n) {
            // Increment the count
            ++count[arr[i]];
            // Add the key to the result array. If it's higher than n, it won't get pushed and we'll move on to the next number in the array
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(deleteNth(motif, 2));

// A solution from CodeWars using filter instead of pushing to a new array
/*
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
*/