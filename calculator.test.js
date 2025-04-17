// calculator.test.js
// Basic tests for the calculator module.

// Import the built-in 'assert' module for making assertions
const assert = require("assert");

// Import the functions from calculator.js
const calculator = require("./calculator");

// --- Test Cases ---

console.log("Running calculator tests...");

// Test case 1: Test the add function
let expectedSum = 8;
let actualSum = calculator.add(5, 3);
// assert.strictEqual checks if two values are exactly equal (using ===)
assert.strictEqual(actualSum, expectedSum, "Test Case 1 Failed: Addition");
console.log("Test Case 1 Passed: Addition");

// Test case 2: Test the subtract function
let expectedDifference = 2;
let actualDifference = calculator.subtract(5, 3);
assert.strictEqual(actualDifference, expectedDifference, "Test Case 2 Failed: Subtraction");
console.log("Test Case 2 Passed: Subtraction");

// Test case 3: Test add with negative numbers
expectedSum = -2;
actualSum = calculator.add(-5, 3);
assert.strictEqual(actualSum, expectedSum, "Test Case 3 Failed: Addition with negative");
console.log("Test Case 3 Passed: Addition with negative");

// Test case 4: Test subtract resulting in negative
expectedDifference = -5;
actualDifference = calculator.subtract(0, 5);
assert.strictEqual(actualDifference, expectedDifference, "Test Case 4 Failed: Subtraction resulting in negative");
console.log("Test Case 4 Passed: Subtraction resulting in negative");

console.log("All calculator tests passed successfully!");

// Note: In a real project, you'd use a test runner like Jest, Mocha, or Tape
// which provide more features (test organization, reporting, mocking, etc.).
// This basic example uses plain Node.js execution and 'assert' for simplicity.
// If any assert fails, it will throw an error and stop the script, failing the 'npm test' command.

