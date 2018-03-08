'use strict'

/***
 * Write a function that prints whether a word is a palindrome or not.
 * @param word
 */

function palindrome (word) {
  if (typeof word !== 'string') return console.log(`${word} is not a string`)

  const middle = word.length % 2 === 0 ? word.length / 2 : (word.length + 1) / 2
  let isPalindrome = true
  let j = word.length - 1

  for (let i = 0; i < middle; i++) {
    if (word.charAt(i) !== word.charAt(j - i)) {
      isPalindrome = false

      break
    }
  }

  console.log(`is ${word} a palindrome? ${isPalindrome ? 'yes' : 'no'}`)
}
