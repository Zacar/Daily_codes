// User Stories:

// You should have a pairElement function that takes a string of any length as an argument.
// The pairElement function should return a 2d array, where each inner array has two strings inside, the first string is one base from the input, and the second string the paired base.
// When given A, the function should pair it with T.
// When given T, the function should pair it with A.
// When given C, the function should pair it with G.
// When given G, the function should pair it with C.

function pairElement(string) {
  let result = [];
  for (let each of string) {
    if (each == "A") {
      result.push(["A", "T"]);
    } else if (each == "T") {
      result.push(["T", "A"]);
    } else if (each == "C") {
      result.push(["C", "G"]);
    } else if (each == "G") {
      result.push(["G", "C"]);
    }
  }
  return result;
}
