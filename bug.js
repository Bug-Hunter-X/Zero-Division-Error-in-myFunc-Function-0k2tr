function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect handling of zero values
  }
  return a / b;
}

console.log(myFunc(10, 0)); // Throws an error, should return 0