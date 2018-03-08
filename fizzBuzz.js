/***
 * Write a function that prints n lines of Fizz Buzz.
 * @param n
 */

function fizzBuzz (n) {
  if (!Number.isInteger(n)) return console.log(`${n} is not an Integer`)

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('Fizz Buzz')
    else if (i % 3 === 0) console.log('Fizz')
    else if (i % 5 === 0) console.log('Buzz';
    else console.log(i)
  }
}
