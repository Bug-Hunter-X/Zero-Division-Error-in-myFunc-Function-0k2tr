# Zero Division Error in JavaScript Function

This repository demonstrates a common error in JavaScript functions related to handling zero values in division operations.

## The Bug

The `myFunc` function in `bug.js` attempts to divide two numbers (`a` and `b`).  However, it incorrectly handles cases where either `a` or `b` is zero, resulting in an error when `b` is zero. A correct implementation would return 0 if either number is 0, or handle the exception more gracefully.

## Solution

The `bugSolution.js` file provides a corrected version of `myFunc` that explicitly checks for zero values and returns 0 if either input is zero, avoiding division by zero errors. The solution uses a conditional check that handles both zero inputs gracefully.