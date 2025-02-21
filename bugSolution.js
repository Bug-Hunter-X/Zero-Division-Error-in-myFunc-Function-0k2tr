function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Correct handling of zero values
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Returns 0
console.log(myFunc(10, 2)); // Returns 5