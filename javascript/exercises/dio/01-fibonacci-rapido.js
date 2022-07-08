let N = parseInt(gets())

let fib =
  (Math.pow((1 + Math.sqrt(5)) / 2, N) - Math.pow((1 - Math.sqrt(5)) / 2, N)) /
  Math.sqrt(5)

print(fib.toFixed(1))
