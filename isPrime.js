/***
 * Write a function that prints whether a number is prime or not.
 * @param number
 */

const isPrime = (number) => {
  const sqrt = Math.round(Math.sqrt(number));
  let isPrime = true;

  if (number !== 2 && number % 2 === 0 || number < 2) {
    isPrime = false;
  } else {
    for (let i = 3; i < sqrt; i += 2) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  console.log('is ' + number + ' prime? ' + isPrime);
};
