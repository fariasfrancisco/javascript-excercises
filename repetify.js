'use strict'

/***
 * Write a function of String that receives a number as a parameter and returns the string repeated that amount of times.
 * @param n
 */

function repetify (n) {
  let out = ''

  for (let i = 0; i < n; i++) {
    out += this
  }

  return out
}

String.prototype.repetify = String.prototype.repetify || repetify
