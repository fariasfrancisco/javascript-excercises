/***
 * Write a function that uses recursion to write n numbers of the fibonacci series.
 * @param n
 */

const fibonacci = (n) => {
  let a = 0, b = 1;

  const recursion = (a, b, n) => {
    console.log(a + b);

    if (n > 2) {
      const aux = a + b;

      a = b;
      b = aux;
      n--;

      recursion(a, b, n);
    }
  };

  if (n < 1) return;

  console.log(a);

  if (n > 1) console.log(b);

  if (n > 2) {
    recursion(a, b, n);
  }
};
