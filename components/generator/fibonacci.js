class FibonacciGenerator {
    *generateSequence(n) {
      let current = 0;
      let next = 1;
      for (let i = 0; i < n; i++) {
        yield current;
        [current, next] = [next, current + next];
      }
    }
  }
  
  const fibo = new FibonacciGenerator();
  const fibSequence = [...fibo.generateSequence(7)];

export { fibSequence, FibonacciGenerator };
  