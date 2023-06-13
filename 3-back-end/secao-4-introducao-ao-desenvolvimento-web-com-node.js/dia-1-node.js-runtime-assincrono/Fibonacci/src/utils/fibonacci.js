function fibonacci(params) {
  const initialNumbers = [0, 1];

  const fibonacciSequence = [1];

  if (params === 1) return fibonacciSequence;

  for (let index = 1; index < params; index++) {
    const value = initialNumbers[0] + initialNumbers[1];

    fibonacciSequence.push(value);

    initialNumbers[0] = fibonacciSequence[fibonacciSequence.length - 2];
    initialNumbers[1] = fibonacciSequence[fibonacciSequence.length - 1];
  }

  return fibonacciSequence;
};

module.exports = fibonacci;
