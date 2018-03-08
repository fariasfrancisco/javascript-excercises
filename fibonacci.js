'use strict'

/***
 * Write a function that uses recursion to write n numbers of the fibonacci series.
 * @param n
 */

function fibonacci (n) {
  function recursion (a, b, n) {
    console.log(a + b)

    if (n > 2) {
      const aux = a + b

      a = b
      b = aux
      n--

      recursion(a, b, n)
    }
  }
 
  if (!Number.isInteger(n)) return console.log(`${n} is not an Integer`)
  if (n < 1) return
  
  let a = 0
  let b = 1

  console.log(a)

  if (n > 1) console.log(b)
  if (n > 2) recursion(a, b, n)
}
