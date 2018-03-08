'use strict'

/***
 * Write a function that returns the most common string in a given string array.
 * (if more than one string appears the same amount of times, only the first one will be printed).
 * 
 * @param stringArray
 */

function occurrence (stringArray) {
  const l = stringArray.length
  let times = 0
  let mostCommon
  let aux

  for (let i = 0; i < l; i++) {
    aux = 1

    for (let j = i + 1; j < l; j++) {
      if (stringArray[i] === stringArray[j]) aux++
    }

    if (aux > times) mostCommon = stringArray[i]
  }

  console.log(mostCommon, times)
}
