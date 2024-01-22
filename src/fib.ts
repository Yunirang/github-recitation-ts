// util function that computes the fibonacci numbers
export default function fibonacci(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  const fib1 = fibonacci(n - 1);
  const fib2 = fibonacci(n - 2);


  return (fib1 + fib2);
}
