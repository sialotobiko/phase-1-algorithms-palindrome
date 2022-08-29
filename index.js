function isPalindrome(word) {
  // Write your algorithm here

  let palindrome = word.split('').reverse().join('');
  let checkPalindrome = palindrome === word ? true : false

  return checkPalindrome;
}

/* 
  Add your pseudocode here

  function isPalindrome(word)
  if word is equal to palindrome
    return true
   else
    return false
  end if  
  
*/

/*
  Add written explanation of your solution here

  declare a function isPalindrome and pass it a string argument word.
  declare a variable palindrome and assign it the value of the letters in reverse order
  declare a variable checkPalindrome and assign it a condition testing whether palindome equals the original word
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
