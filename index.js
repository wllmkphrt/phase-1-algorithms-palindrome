function isPalindrome(word) {
  for (let i = 0; i < Math.floor(word.length / 2); i++){
    if(word[i] !== word[word.length - (i+1)]){
      return false;
    }
  }
  return true;
}

/* 
iterate through character comparison of first to last characters,
second to second to last, etc. for the length of word divided by two and rounded down
  return false if not equal
if loop completes and false has not been returned, return true
*/

/*
Since the middle letter of a string of odd number length is always equal to itself, we
only need to compare pairs of characters starting with the first and last and 
working inwards, up until we reach the middle letter. If all of these character pairs 
are equal, the word is a palindrome and the function can safely return true.
If they are not, the loop will return false. The number of comparisons needed is 
equal to the floor of the length of the word divided by two. 
Since we are only reading the value of characters at certain positions and not
editing the string, bracket notation is perfect. Since we don't know the distribution of
these character pairs not equaling each other at the various pair positions among all
possible words, it makes as much sense to just start with the first and last letters 
and work inwards as to do the comparisons in any other order and is probably the easiest
syntactically.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
