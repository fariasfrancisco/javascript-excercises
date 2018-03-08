'use strict'

/***
 * Write a function that prints whether a number is prime or not.
 * @param n
 */

function isPrime (n) {
  if (!Number.isInteger(n)) return console.log(`${n} is not an Integer`)

  const sqrt = Math.round(Math.sqrt(n))
  let isPrime = true

  if (n !== 2 && n % 2 === 0 || n < 2) {
    isPrime = false
  } else {
    for (let i = 3; i < sqrt; i += 2) {
      if (n % i === 0) {
        isPrime = false
        
        break
      }
    }
  }

  console.log(`is ${n} prime? ${isPrime : 'yes' : 'no'}`)
}
