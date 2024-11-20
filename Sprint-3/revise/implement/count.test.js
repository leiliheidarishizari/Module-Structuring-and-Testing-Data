// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
// Answer:
// countChar.js

function countChar(str, char) {
    let count = 0;
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // If the current character matches the one we're looking for, increase the count
      if (str[i] === char) {
        count++;
      }
    }
  
    return count;
  }
  
  module.exports = countChar;
  