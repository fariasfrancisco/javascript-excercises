/***
 * Write a function that prints whether a word is a palindrome or not.
 * @param word
 */

const palindrome = (word) => {
  const middle = word.length % 2 === 0 ? word.length / 2 : (word.length + 1) / 2;
  let isPalindrome = true,
    j = word.length - 1;

  for (let i = 0; i < middle; i++) {
    if (word.charAt(i) !== word.charAt(j - i)) {
      isPalindrome = false;
      break;
    }
  }

  console.log('is ' + word + ' a palindrome? ' + isPalindrome);
};