// User Stories:

// You should have a smallestCommons function that accepts an array of two numbers as an argument.
// The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
// The function should handle input where the two numbers are not in numerical order

function smallestCommons(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let numbers = [];

  function gcd(a, b) {
    while (b !== 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  }

  function lcm(a, b) {
    return Math.abs((a * b) / gcd(a, b));
  }

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    result = lcm(result, numbers[i]);
  }
  return result;
}
