/***
 * Write a function that prints the first n lines of the Pascal Triangle.
 * @param n
 */

const pascalTriangle = (n) => {
  if (!Number.isInteger(n)) return console.log(n + ' is not an Integer');

  let lines = [];

  for (let i = 0; i < n; i++) {
    let size = i + 1,
      arr = [1];

    if (i === 0) {
      lines.push(arr);
      continue;
    } else {
      if (i === 1) {
        arr.push(1);
        lines.push(arr);
        continue;
      }
    }

    for (let j = 1; j < size; j++) {
      if (j + 1 < size) {
        const value = lines[i - 1][j - 1] + lines[i - 1][j];

        arr.push(value)
      } else {
        arr.push(1);
      }
    }

    lines.push(arr);
  }

  lines.forEach(line => {
    console.log(line);
  });
};